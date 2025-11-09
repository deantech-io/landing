import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const HDRI_URL = "https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr";
const ROBOT_URL = "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb";

function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#050110", 0.09);

    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(-4.5, 2.4, 7.5);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const lightingRig = new THREE.Group();
    scene.add(lightingRig);

    const ambientLight = new THREE.AmbientLight(0x9775ff, 0.6);
    lightingRig.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffd972, 1.4);
    keyLight.position.set(4, 6, 6);
    lightingRig.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff3fcf, 1.1);
    rimLight.position.set(-5, 3, -4);
    lightingRig.add(rimLight);

    const fillLight = new THREE.PointLight(0x5a4bff, 0.8, 20, 2);
    fillLight.position.set(0, 2, 4);
    lightingRig.add(fillLight);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const rgbeLoader = new RGBELoader().setDataType(THREE.FloatType);
    rgbeLoader.load(HDRI_URL, (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;
      texture.dispose();
      pmremGenerator.dispose();
    });

    const loader = new GLTFLoader();
    const heroModelGroup = new THREE.Group();
    rootGroup.add(heroModelGroup);

    loader.load(
      ROBOT_URL,
      (gltf) => {
        const model = gltf.scene;
        model.scale.setScalar(1.8);
        model.position.set(0, -1.8, 0);
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        heroModelGroup.add(model);
      },
      undefined,
      (error) => {
        console.error("Failed to load 3D model", error);
      }
    );

    const holographicHalo = new THREE.Mesh(
      new THREE.TorusGeometry(4.2, 0.08, 24, 200),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ff57c5"),
        transparent: true,
        opacity: 0.32,
        emissive: new THREE.Color("#ff57c5"),
        emissiveIntensity: 1.4,
        metalness: 0.9,
        roughness: 0.15,
      })
    );
    holographicHalo.rotation.x = Math.PI / 2;
    holographicHalo.position.y = -1.4;
    rootGroup.add(holographicHalo);

    const floatingArtifacts = new THREE.Group();
    rootGroup.add(floatingArtifacts);

    const artifactMaterials = [
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#f5d742"),
        metalness: 0.8,
        roughness: 0.2,
        emissive: new THREE.Color("#f2b705"),
        emissiveIntensity: 0.28,
      }),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#6f4aff"),
        metalness: 0.9,
        roughness: 0.18,
        emissive: new THREE.Color("#4a2cff"),
        emissiveIntensity: 0.4,
      }),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ff57c5"),
        metalness: 0.85,
        roughness: 0.24,
        emissive: new THREE.Color("#ff249e"),
        emissiveIntensity: 0.36,
      }),
    ];

    const artifactGeometries = [
      new THREE.IcosahedronGeometry(0.9, 1),
      new THREE.TorusKnotGeometry(0.7, 0.22, 120, 18, 3, 7),
      new THREE.SphereGeometry(0.8, 24, 24),
    ];

    for (let i = 0; i < 12; i += 1) {
      const geometry = artifactGeometries[i % artifactGeometries.length];
      const material = artifactMaterials[i % artifactMaterials.length].clone();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        Math.random() * 6 - 1,
        (Math.random() - 0.5) * 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      const scale = 0.6 + Math.random() * 0.8;
      mesh.scale.setScalar(scale);
      floatingArtifacts.add(mesh);
    }

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1200;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = Math.random() * 20 - 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    const clock = new THREE.Clock();
    const parallaxTarget = new THREE.Vector2();
    const parallaxEase = new THREE.Vector2();

    const onPointerMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      parallaxTarget.set(x, y);
    };

    const onDeviceOrientation = (event) => {
      const { beta = 0, gamma = 0 } = event;
      const normalizedX = THREE.MathUtils.clamp(gamma / 45, -1, 1);
      const normalizedY = THREE.MathUtils.clamp(beta / 45, -1, 1);
      parallaxTarget.set(normalizedX, normalizedY);
    };

    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    let animationFrame;
    const animate = () => {
      const elapsed = clock.getElapsedTime();

      floatingArtifacts.children.forEach((mesh, index) => {
        mesh.rotation.x += 0.002 + (index % 3) * 0.001;
        mesh.rotation.y += 0.003 + (index % 5) * 0.001;
        mesh.position.y += Math.sin(elapsed * 0.6 + index) * 0.0018;
      });

      holographicHalo.scale.y = 1 + Math.sin(elapsed * 1.2) * 0.06;
      holographicHalo.material.opacity = 0.26 + Math.sin(elapsed * 2.4) * 0.06;
      heroModelGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.15;

      parallaxEase.x += (parallaxTarget.x - parallaxEase.x) * 0.05;
      parallaxEase.y += (parallaxTarget.y - parallaxEase.y) * 0.05;
      rootGroup.rotation.y = parallaxEase.x * 0.25;
      rootGroup.rotation.x = parallaxEase.y * 0.1;

      starField.rotation.y += 0.0006;

      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("deviceorientation", onDeviceOrientation);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("deviceorientation", onDeviceOrientation);

      starGeometry.dispose();
      starMaterial.dispose();

      floatingArtifacts.children.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });

      holographicHalo.geometry.dispose();
      holographicHalo.material.dispose();

      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => mat.dispose?.());
          } else {
            child.material?.dispose?.();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}

export default HeroScene;

