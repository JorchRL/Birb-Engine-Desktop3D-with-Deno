// import * as THREE from "./js/three.module.js";
// console.log(THREE)




const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(window.devicePixelRatio)
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1;
// renderer.outputEnconding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

camera.position.z = 5




function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}

animate()