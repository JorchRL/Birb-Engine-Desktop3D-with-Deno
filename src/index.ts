// This should be the entry point of the Three.js application

import { GLTFLoader, OrbitControls, RGBELoader, THREE } from "./appDeps.ts";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.25,
  20,
);
camera.position.set(-1.8, 0.6, 2.7);

const renderer = new THREE.WebGL1Renderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", onWindowResize);

init();

render();

function init() {
  new RGBELoader()
    .setPath("assets/textures/equirectangular/")
    .load("royal_esplanade_1k.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.background = texture;
      scene.environment = texture;

      render();
    });

  const loader = new GLTFLoader().setPath("assets/models/DamagedHelmet/glTF/")
    .load("DamagedHelmet.gltf", function (gltf) {
      scene.add(gltf.scene);

      render();
    });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render);
  controls.minDistance = 2;
  controls.maxDistance = 10;
  controls.target.set(0, 0, -0.2);
  controls.update();
}

function render() {
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}
