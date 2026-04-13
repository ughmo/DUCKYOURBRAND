"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Optimised starfield + mountain silhouettes.
 * - Throttled to 30 fps (halves GPU work vs 60 fps)
 * - Paused via IntersectionObserver when off-screen
 * - DPR capped at 1 — biggest single win on high-DPI devices
 * - Reduced geometry counts
 */
export function HorizonBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = canvas.clientWidth  || window.innerWidth;
    const H = canvas.clientHeight || window.innerHeight;

    // Cap DPR at 1 — rendering at 2× is expensive and invisible at this scale
    const dpr = 1;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.00022);

    const camera = new THREE.PerspectiveCamera(70, W / H, 0.1, 1500);
    camera.position.set(0, 22, 100);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
      precision: "mediump", // mediump vs highp — big win, invisible difference here
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(dpr);

    // ── Stars ─────────────────────────────────────────────────────────
    const starCount = 1200; // was 2000
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const r = 250 + Math.random() * 650;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);

      if (Math.random() < 0.88) {
        const v = 0.65 + Math.random() * 0.35;
        starColors[i * 3] = v; starColors[i * 3 + 1] = v; starColors[i * 3 + 2] = v;
      } else {
        starColors[i * 3] = 0.776; starColors[i * 3 + 1] = 0.169; starColors[i * 3 + 2] = 0.118;
      }
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color",    new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // ── Nebula glow plane ─────────────────────────────────────────────
    const nebGeo = new THREE.PlaneGeometry(4000, 2000);
    const nebMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xc62b1e),
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const nebula = new THREE.Mesh(nebGeo, nebMat);
    nebula.position.z = -600;
    scene.add(nebula);

    // ── Mountain silhouettes ──────────────────────────────────────────
    const mountainData = [
      { z: -50,  h: 50,  color: 0x0d0d0d },
      { z: -100, h: 70,  color: 0x111111 },
      { z: -160, h: 90,  color: 0x0e1818 },
      { z: -220, h: 108, color: 0x0a1010 },
    ];
    const mountains: THREE.Mesh[] = [];
    for (const { z, h, color } of mountainData) {
      const pts: THREE.Vector2[] = [];
      const seg = 20; // was 32
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

    // ── Red horizon glow sphere ───────────────────────────────────────
    const glowGeo = new THREE.SphereGeometry(400, 8, 8); // was 16,16
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xc62b1e),
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    // ── Animation loop — throttled to 30 fps ─────────────────────────
    let raf: number;
    let lastRender = 0;
    let visible = true;
    const TARGET_MS = 1000 / 30; // 30 fps

    const animate = (now: number) => {
      raf = requestAnimationFrame(animate);

      // Skip entirely when tab/section off-screen
      if (!visible) return;

      // Throttle: skip frames to hit ~30 fps
      if (now - lastRender < TARGET_MS) return;
      lastRender = now;

      const t = now * 0.001;

      starField.rotation.y = t * 0.015;
      starField.rotation.x = Math.sin(t * 0.04) * 0.015;

      camera.position.x = Math.sin(t * 0.06) * 1.0;
      camera.position.y = 22 + Math.cos(t * 0.10) * 0.6;
      camera.lookAt(0, 6, -350);

      mountains.forEach((m, i) => {
        m.position.x = Math.sin(t * 0.06) * (0.7 + i * 0.25);
        m.position.y = (m.userData.baseY as number) + Math.cos(t * 0.10) * (0.25 + i * 0.12);
      });

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    // ── Pause when off-screen ─────────────────────────────────────────
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // ── Resize ────────────────────────────────────────────────────────
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ── Cleanup ───────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      starGeo.dispose(); starMat.dispose();
      nebGeo.dispose(); nebMat.dispose();
      glowGeo.dispose(); glowMat.dispose();
      mountains.forEach(m => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
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
