// This should be the entry point of the Three.js application

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.25,
  20,
);
camera.position.set(-1.8, 0.6, 2.7);

const renderer = new THREE.WebGLRenderer();

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
      new GLTFLoader().setPath(
        "assets/models/DamagedHelmet/glTF/",
      )
        .load("DamagedHelmet.gltf", function (gltf) {
          scene.add(gltf.scene);

          render();
        });
    });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);

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
