# RayCaster

광선을 사용하여 표면과의 교차점을 체크하는 컴퓨터 그래픽스 기법의 하나. Three.js에서는 Ray Class를 기반으로 구현

+ 기본적으로 다음의 값들을 constructor로 요구한다.
  + Origin - Ray를 시작하는 지점
  + Direction - Ray의 방향, normalize를 통해 단위 벡터로 만들어 주어야 한다.

+ Ray를 통한 표면과의 관계를 알아내기 위해서는 아래의 메서드를 사용할 수 있다.
  + intersectObject - 가장 먼저 탐지되는 오브젝트 하나와의 교차면에 대한 정보를 테스트
  + intersectObjects - Ray방향의 여러 오브젝트와의 교차면에 대한 배열을 테스트
  + 반환하는 테스트에 대한 결과는 다음의 정보들을 포함한다.
    + distance - 대상과의 거리
    + face, faceIndex - 대상 표면에 대한 정보
    + object - 대상 오브젝트에 대한 정보
    + point - 접촉 포인트에 대한 정보
    + uv - 접촉면의 평면좌표계에 대한 정보

+ 일반적으로 카메라시점에서 raycasting을 해야하는 경우가 많기 때문에 setFromCamera를 사용하여 카메라 기준으로 레이캐스팅을 시행할 수 있다.
  + mouse, camera를 인자로 받고, 카메라 시점에서의 마우스 위치(Vector2)를 기준으로 Ray를 발사