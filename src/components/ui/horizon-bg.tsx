"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Lightweight Three.js starfield + nebula + mountain silhouettes.
 * No EffectComposer / bloom — direct renderer.render for 60fps on mid-range devices.
 */
export function HorizonBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Scene ──────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.00022);

    const W = canvas.clientWidth  || window.innerWidth;
    const H = canvas.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 1500);
    camera.position.set(0, 22, 100);

    // Cap pixel ratio at 1.5 — key perf win on Retina / high-DPI mobile
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(W, H);
    renderer.setPixelRatio(dpr);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.55;

    // ── Stars — single layer, 1800 pts ─────────────────────────────────
    const starCount = 1800;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const starSz  = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const r = 250 + Math.random() * 650;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      starPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      starPos[i * 3 + 2] = r * Math.cos(p);

      // 88% white, 12% DYB red tint
      const c = new THREE.Color();
      if (Math.random() < 0.88) c.setHSL(0, 0, 0.75 + Math.random() * 0.25);
      else c.set(0xc62b1e);
      starCol[i * 3] = c.r; starCol[i * 3 + 1] = c.g; starCol[i * 3 + 2] = c.b;
      starSz[i] = Math.random() * 1.8 + 0.4;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color",    new THREE.BufferAttribute(starCol, 3));
    starGeo.setAttribute("size",     new THREE.BufferAttribute(starSz, 1));

    const starMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float size; attribute vec3 color; varying vec3 vColor;
        uniform float time;
        void main(){
          vColor = color;
          vec3 p = position;
          float a = time * 0.025;
          float ca = cos(a), sa = sin(a);
          p.xz = vec2(p.x * ca - p.z * sa, p.x * sa + p.z * ca);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = size * (260.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vColor;
        void main(){
          float d = length(gl_PointCoord - 0.5);
          if(d > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0 - smoothstep(0.0, 0.5, d));
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── Nebula — low-segment plane ─────────────────────────────────────
    const nebGeo = new THREE.PlaneGeometry(6000, 3000, 32, 32); // reduced from 80×80
    const nebMat = new THREE.ShaderMaterial({
      uniforms: {
        time:    { value: 0 },
        color1:  { value: new THREE.Color(0xc62b1e) },
        color2:  { value: new THREE.Color(0x280808) },
        opacity: { value: 0.18 },
      },
      vertexShader: `
        varying vec2 vUv; uniform float time;
        void main(){
          vUv = uv;
          vec3 p = position;
          p.z += sin(p.x * 0.008 + time) * cos(p.y * 0.008 + time) * 16.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 color1; uniform vec3 color2; uniform float opacity; uniform float time;
        varying vec2 vUv;
        void main(){
          float m = sin(vUv.x * 8.0 + time * 0.3) * cos(vUv.y * 8.0 + time * 0.3);
          vec3 c = mix(color1, color2, m * 0.5 + 0.5);
          float a = opacity * (1.0 - length(vUv - 0.5) * 2.0);
          gl_FragColor = vec4(c, max(a, 0.0));
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const nebula = new THREE.Mesh(nebGeo, nebMat);
    nebula.position.z = -700;
    scene.add(nebula);

    // ── Mountain silhouettes ───────────────────────────────────────────
    const mountainData = [
      { z: -50,  h: 50,  color: 0x0d0d0d },
      { z: -100, h: 70,  color: 0x111111 },
      { z: -160, h: 90,  color: 0x0e1818 },
      { z: -210, h: 110, color: 0x0a1010 },
    ];
    const mountains: THREE.Mesh[] = [];
    for (const { z, h, color } of mountainData) {
      const pts: THREE.Vector2[] = [];
      const seg = 36; // reduced from 50
      for (let i = 0; i <= seg; i++) {
        const x = (i / seg - 0.5) * 900;
        const y = Math.sin(i * 0.15) * h + Math.sin(i * 0.07) * h * 0.5 - 75;
        pts.push(new THREE.Vector2(x, y));
      }
      pts.push(new THREE.Vector2(450, -280), new THREE.Vector2(-450, -280));
      const geo = new THREE.ShapeGeometry(new THREE.Shape(pts));
      const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(0, z * 0.38, z);
      mesh.userData.baseY = z * 0.38;
      scene.add(mesh);
      mountains.push(mesh);
    }

    // ── Atmosphere rim ─────────────────────────────────────────────────
    const atmGeo = new THREE.SphereGeometry(550, 20, 20); // reduced from 28×28
    const atmMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec3 vN;
        void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        varying vec3 vN; uniform float time;
        void main(){
          float i = pow(0.65 - dot(vN, vec3(0.0, 0.0, 1.0)), 2.2);
          vec3 c = vec3(0.78, 0.17, 0.12) * i * (sin(time * 1.8) * 0.06 + 0.94);
          gl_FragColor = vec4(c, i * 0.18);
        }`,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // ── Animate ────────────────────────────────────────────────────────
    let raf: number;
    let prevTime = 0;

    const animate = (now: number) => {
      raf = requestAnimationFrame(animate);
      const delta = (now - prevTime) / 1000;
      prevTime = now;
      // Guard: skip heavy frames (tab switch, etc.)
      if (delta > 0.1) return;

      const t = now * 0.001;

      starMat.uniforms.time.value = t;
      nebMat.uniforms.time.value  = t * 0.35;
      atmMat.uniforms.time.value  = t;

      // Gentle float
      camera.position.x = Math.sin(t * 0.07) * 1.2;
      camera.position.y = 22 + Math.cos(t * 0.11) * 0.7;
      camera.lookAt(0, 6, -350);

      mountains.forEach((m, i) => {
        m.position.x = Math.sin(t * 0.07) * (0.8 + i * 0.3);
        m.position.y = m.userData.baseY + Math.cos(t * 0.11) * (0.4 + i * 0.2);
      });

      renderer.render(scene, camera); // direct render — no bloom overhead
    };
    raf = requestAnimationFrame(animate);

    // ── Resize ─────────────────────────────────────────────────────────
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ── Cleanup ────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      starGeo.dispose(); starMat.dispose();
      nebGeo.dispose();  nebMat.dispose();
      atmGeo.dispose();  atmMat.dispose();
      mountains.forEach(m => { m.geometry.dispose(); (m.material as THREE.Material).dispose(); });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
      aria-hidden="true"
    />
  );
}
