
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;
  uniform float uIntensity;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) { 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vUv = uv;
    vNormal = normal;
    vec3 pos = position;
    // Slow, disciplined organic deformation representing intelligence
    float noise = snoise(pos * 1.5 + uTime * 0.15) * (0.05 + uIntensity * 0.04);
    pos += normal * noise;
    vPosition = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 eye = normalize(vec3(0.0, 0.0, 5.0) - vPosition);
    
    float rim = pow(1.0 - max(dot(eye, normal), 0.0), 3.5);
    
    // Veira Brand Palette
    vec3 colorBase = vec3(44.0/255.0, 13.0/255.0, 54.0/255.0);    // #2C0D36 (Deep Plum)
    vec3 colorWave = vec3(120.0/255.0, 61.0/255.0, 119.0/255.0);  // #783D77 (Soft Wave Purple)
    vec3 colorHighlight = vec3(155.0/255.0, 75.0/255.0, 182.0/255.0); // #9B4BB6 (Highlight Purple)
    
    vec3 finalColor = colorBase;
    
    // Data flow visualization
    float flow = sin(vPosition.y * 1.8 + uTime * 0.3) * 0.5 + 0.5;
    finalColor = mix(finalColor, colorWave, flow * 0.12);
    
    // Soft rim lighting for "Dignified" quality
    finalColor = mix(finalColor, colorHighlight, rim * 0.45);
    
    // Controlled sheen - boring equals trustworthy
    float spec = pow(max(dot(reflect(-eye, normal), eye), 0.0), 40.0);
    finalColor += spec * 0.04;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

interface Logo3DProps {
  className?: string;
  state?: 'idle' | 'syncing' | 'active';
}

const Logo3D: React.FC<Logo3DProps> = ({ className, state = 'idle' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      });
    } catch (e) {
      setWebGLSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4;

    const geometry = new THREE.SphereGeometry(1.2, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: state === 'syncing' ? 0.3 : 0.0 },
      },
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseRef.current = { 
        x: (e.clientX - rect.left) / rect.width * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height * 2 - 1)
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const time = clock.getElapsedTime();
      material.uniforms.uTime.value = time;
      
      // Stillness: certainty under pressure
      mesh.rotation.y = time * 0.1;
      
      // Syncing pulse state
      if (state === 'syncing') {
        material.uniforms.uIntensity.value = 0.2 + Math.sin(time * 2.0) * 0.1;
      } else {
        const dist = Math.sqrt(mouseRef.current.x ** 2 + mouseRef.current.y ** 2);
        material.uniforms.uIntensity.value += (dist * 0.08 - material.uniforms.uIntensity.value) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const size = containerRef.current.clientWidth;
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      geometry.dispose(); material.dispose(); renderer.dispose();
    };
  }, [state]);

  if (!webGLSupported) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-full h-full rounded-full bg-deep-plum border border-wave-purple shadow-xl"></div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`${className} flex items-center justify-center relative orb-pulse`}>
      <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
    </div>
  );
};

export default Logo3D;
