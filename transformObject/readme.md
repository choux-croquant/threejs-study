# Matrix Transformation

Three.js의 3D Object는 matrices로 구성되어 있으며 position, rotation, scale속성을 공통으로 포함하고 있다.

transform을 시행하는 방법은 크게 2가지로
+ 위의 언급된 position, rotation, scale속성을 조작하는 방법
```
  object.position.copy( start_position );
  object.quaternion.copy( quaternion );
```
+ object.matrix를 직접 변경하는 방법이 존재한다. (https://threejs.org/docs/?q=tran#api/en/math/Matrix4)
```
  object.matrix.setRotationFromQuaternion( quaternion );
  object.matrix.setPosition( start_position );
```

기본적으로 object.matrixAutoUpdate속성이 true로 설정되어 transformation에 관련된 속성을 변경 시 자동으로 재연산-렌더되지만
false로 설정하고 의도적으로 update를 조절하여 성능을 높일 수 있다.

```
  object.matrixAutoUpdate = false;
  object.updateMatrix(); // 의도적 업데이트
```

## Rotation

Three.js의 회전방식은 2가지가 존재한다.
+ 오일러각을 활용한 방법 - X, Y, Z축에 대한 회전을 통해 나타내는 방식, 각 축에 대한 라디안 각도와 회전 축 정렬 순서를 인자로 가진다.
+ 사원수(quarternion)을 활용한 방식 - 특정 벡터에 대해 회전한 각도를 4개의 원소로 표현
```
  const quaternion = new THREE.Quaternion();
  quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );

  const vector = new THREE.Vector3( 1, 0, 0 );
  vector.applyQuaternion( quaternion );
```