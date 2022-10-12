# 마우스 이펙트

## 1. 마우스 따라다니기, 오버 효과
  ### 1) 이벤트 핸들러의 차이
  - mouseleave / mouseenter (->자식요소는 감지 X)   
  - mouseout / mouseover (->자식 요소까지 감지)
  ### 2) getAttribute()
  - getAttribute(); 요소의 특정값을 가져오는 함수
  ### 3) 화면 관련 매서드
  - clientX, Y - 브라우저 페이지를 기준으로 x, y좌표의 위치 (현재 내가 보는 뷰포트 만큼만)
  - offsetX, Y - 선택한 객체를 기준으로 x, y좌표의 위치
  - pageX, Y - 전체 문서를 기준으로 x, y좌표의 위치 (스크롤 화면 포함)
  - screenX, Y 모니터 스크린을 기준으로 x,y좌표의 위치
  ### 4) for문 이슈
  ```
  <!-- em은 두 갠데 <= em.length 해버리면 em[2]이 없어서 에러! -->
  let em = document.querySelectorAll('.mouseCont em');
    for(let i=0; i< em.length; i++){
    em[i].style.color = '#f00';
  }
  ```
---
## 2. 마우스 따라다니기, 오버 효과
  ### 1) gsap 활용
---
## 3. 브랜딩 이펙트
---
## 4. 조명 효과
  ### 1) Element.getBoundingClientRect() : 요소의 정보값
---
## 5. 이미지 효과
  ### 1) 처음 원리 이해가 조금 어려워서 설명
  - 가운데를 기준점으로 현재 마우스 좌표를 뺀값 만큼을 움직여라
  - 해당 값을 이미지에 transform 값으로 넣음
  - 넘치면 마이너스가 되니까 마우스가 오른쪽에 있을때 이미지는 왼쪽으로 이동
---
## 6. 이미지 효과2
  ### 1) 최대값 최소값 설정
  ```
  let maxX = Math.max(-800, Math.min(800, standardX));
  let maxY = Math.max(-250, Math.min(250, standardY));
  ```
  ### 2) parseInt() 정수를 반환 함수
---
## 7. 텍스트 효과
---
## 8. 마우스 오버 효과
  ### 1)Math 함수
  - Math.sqrt() 제곱근 구하기
  - 

