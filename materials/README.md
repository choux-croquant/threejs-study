# Materials

### TextureLoader
+ 텍스쳐를 가져오기 위한 로더, 내부적으로 이미지로더를 사용

### CubeTextureLoader
+ 큐브맵 텍스쳐를 가져오기 위한 로더, 환경이 오브젝트에 반사되는 것을 구현하기 위한 것

기본적으로 준비한 이미지 텍스쳐를 로더를 통해 가져온 후 .load를 통해 material를 정의해 주는 것으로 사용할 수 있다.

### Material의 종류
+ MeshBasicMaterial - 지오메트리를 플랫하게 표현, 조명의 영향이 없다.
+ MeshDepthMaterial - 카메라를 기준으로 한 거리를 통해 간단하게 Depth로 음영을 표현
+ MeshDistanceMaterial - pointlight의 shadowmapping에 사용되는 material, 지오메트리의 transparent한 부분과 아닌 부분의 그림차 차이 등을 내는 것에 활용 가능
+ MeshLambertMaterial - 램버시안 반사 모델을 구현하는 material, 하이라이트 등을 표현할 수 없다. 반사모델이 간단하기 때문에 조명을 표현할 수 있는 모델 중에서 퍼포먼스가 좋은 편
+ MeshMatcapMaterial - Matcap텍스쳐를 기반으로 컬러를 추출하여 텍스쳐를 입히는 방식, 텍스쳐에서 그대로 색과 음영을 가져오기 때문에 조명에 영향을 받지 못함.
+ MeshNormalMaterial - 지오메트리의 normal vetor에 색상을 매핑하는 방식의 material, 방식으로 인해 퍼포먼스가 좋음, 주로 normal vector를 디버깅하는 데 사용된다.
+ MeshPhongMaterial - 반사광과 하이라이트를 표현하는데 사용되는 material, Blinn-phong model을 사용하기 때문에 phong material이 되었다. standard model과 physical model에 비해서 퍼포먼스가 좋은 편이다.
+ MeshStandardMaterial - Physically Base Rendering(PBR)을 통해 렌더되는 material, 비교적 사실적인 빛의 표현이 가능하다. 최근의 3D모델 표준인 GLTF모델의 material표현 방식과 같기 때문에 standard라고 함. 물리적으로 올바른 렌더링을 위해 PMREMGenerator를 통해 생성된 environment map을 추가하는 것이 좋다.
+ MeshPhysicalMaterial - standard material의 확장, 비금속성 오브젝트에 대한 반사속성, 투명한 오브젝트, Clearcoat등의 부분에서 보다 추가적인 기능이 존재하는 material. 추가적 연산이 실행되기 때문에 퍼포먼스가 떨어짐
+ MeshToonMaterial - 툰 셰이딩을 사용하는 material, 그래디언트 맵 등을 지정하여 단계를 나눌 수 있음
+ PointsMaterial - 점에 부여되는 material, 파티클에 사용된다.
+ RawShaderMaterial - 커스텀 셰이더 등을 만드는 목적일 때 사용할 수 있는 material, built-in uniform과 속성등을 사용하지 않음
+ ShaderMaterial - 커스텀 셰이더 등을 만드는 목적일 때 사용할 수 있는 material
+ ShadowMaterial - 그림자를 받을 수 있는 material, 기본적으로 투명하고 오브젝트의 그림자를 표현할 수 있다.
+ SpriteMaterial - Sprite와 함께 사용되는 material

+ 추가적으로 라인에 사용되는 material등이 존재.