import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// 일반적인 박스 모델 생성 방식
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// Object Group - 그룹에 속한 오브젝트들을 함께 transform할 수 있다.
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color: 0x00ff00})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color: 0xff0000})
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube3.position.x = 2
group.add(cube3)

// 위치를 이동하는 tranform의 기본 방법 - position.set
group.position.set(0.5, -0.5, -0.5)

// Scale - 3dObject의 크기를 transform하는 방법 - scale.set
group.scale.set(1, 0.5, 0.5)

// rotation - with rotation method, radian단위로 회전
// reorder > 회전 축의 순서를 재정렬
group.rotation.reorder('ZXY')
group.rotation.y = Math.PI * 0.5
group.rotation.x = Math.PI * 0.3

// rotation - quertenion
// Axes helper - x,y,z축을 시각화해주는 helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1, 1, 3)
scene.add(camera)

// lookAt - 카메라가 바라보는 지점(중심점)을 지정
camera.lookAt(new THREE.Vector3(0, 0, 0))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)