// src/js/threeConfig.js
import * as THREE from 'three';

export function initThreeJS() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('threejs-container').appendChild(renderer.domElement);

  // Geometría 3D interactiva
  const geometry = new THREE.IcosahedronGeometry(10, 0);
  const material = new THREE.MeshBasicMaterial({ 
    color: 0x00ffff,
    wireframe: true,
    transparent: true,
    opacity: 0.5
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}