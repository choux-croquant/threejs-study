import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Clock - (가능하다면)performance.now를 사용하여 시간을 표현하는 객체
const clock = new THREE.Clock()

// 애니메이션을 쉽게 구현할 수 있도록 보조하는 라이브러리 등이 존재
gsap.to(mesh.position, { duration:1, delay: 1, x: 2 })

// Animation with requestAnimationFrame
const frame = (number) => {

//   // Clock - getElapsedTime등의 메서드가 존재하여 처음 렌더시점으로부터 지난 시간 등을 알 수 있다.
//   const elapsedTime = clock.getElapsedTime()
//   console.log(elapsedTime)

//   // elapsedTime을 활용하여 시간에 따라 반복적인 애니메이션 등을 구현할 수 있다.
//   mesh.position.y = Math.sin(elapsedTime)
//   mesh.position.x = Math.cos(elapsedTime)

//   mesh.rotation.y += 0.02
//   mesh.rotation.x += 0.02
  renderer.render(scene, camera)
  window.requestAnimationFrame(() => frame(number + 1))
}

frame(1);