# 파이널 리드미

# 야나바다

![1](https://github.com/Yanabada/Yanabada_FE/assets/93538221/db01633c-5200-4964-af6d-cd705a54391d)

무료 예약 취소 불가한 양도/거래 플랫폼

## 프로젝트 소개

‘야놀자’ 와 ‘아나바다’의 합성어로
취소 불가 상품에 대해 판매자는 수수료를 절약하고, 구매자는 값싼 가격에 구매할 수 있는,
야놀자와 숙박업주 또한 취소 건의 판매전환으로 인한 이득을 얻기 위해 기획한
야놀자의 패밀리 서비스

## 팀원 및 구현 기능

<table>
<tr>
<td align="center" width="150px">
<img src="https://avatars.githubusercontent.com/u/123650056?v=4"/>
</td>
<td align="center" width="150px">
<img src="https://avatars.githubusercontent.com/u/113079102?v=4"/>
</td>
<td align="center" width="150px">
<img src="https://avatars.githubusercontent.com/u/93538221?v=4"/>
</td>
<td align="center" width="150px">
<img src="https://avatars.githubusercontent.com/u/95595106?v=4"/>
</td>
<td align="center" width="150px">
<img src="https://avatars.githubusercontent.com/u/83440978?v=4"/>
</td>
</tr>
<tr>
<td align="center">
<a href="[https://github.com/Gaoridang](https://github.com/Gaoridang)" target="_blank">
FE 이재준
</a>
</td>
<td align="center">
<a href="[https://github.com/SOL-MI](https://github.com/SOL-MI)" target="_blank">
FE 고솔미
</a>
</td>
<td align="center">
<a href="[https://github.com/seungsimdang](https://github.com/seungsimdang)" target="_blank">
FE 이승현
</a>
</td>
<td align="center">
<a href="[https://github.com/furaha707](https://github.com/furaha707)" target="_blank">
FE 이예인
</a>
</td>
<td align="center">
<a href="[https://github.com/lilviolie](https://avatars.githubusercontent.com/u/83440978?v=4)" target="_blank">
FE 장수빈
</a>
</td>
</tr>
<tr>
<td align="center">
- 홈<br>
- 전체 상품 리스트<br>
- 검색 페이지<br>
- 지도<br>
- 알림 페이지<br>
- 공통 컴포넌트<br>
</td>
<td align="center">
- 일반 & 소셜 로그인<br>
- 회원가입<br>
- 실시간 채팅<br>
- 공통컴포넌트 10종<br>
- axios instance <br>
</td>
<td align="center">
- 마이페이지<br>
- 승인요청 관리<br>
- 프로필<br>
- 판매/구매내역<br>
- 거래내역서<br>
- 구매<br>
- 결제완료<br>
- 공통 컴포넌트<br>
</td>
<td align="center">
- 양도상품 조회<br>
- 양도등록 및 수정<br>
- 야놀자페이 가입<br>
- 페이 거래내역 조회<br>
- 페이 충전 및 결제<br>
</td>
<td align="center">
- 홈<br>
- 검색 페이지<br>
- 전체 상품 리스트<br>
- 숙소 상세 페이지<br>
- 페이 충전/인출<br>
- 공통 컴포넌트<br>
</td>
</tr>
</table>

## 테스트 아이디 / 비밀번호

- 구매자: [buyer1@google.com](mailto:buyer1@google.com) / password123!
- 판매자: [test@naver.com](mailto:test@naver.com) / password123!

## 개발 기간

2024.01.07 - 2024.01.28

## 페이지 별 디자인 및 기능

### 홈

- 메인
    - 헤더
    - 검색바
    - 누적 상품 조회
    - 최근 본 상품
    - 카테고리 별 상품 목록
    - 알림 도착 시 플로팅 버튼
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 35 18" src="https://github.com/Yanabada/Yanabada_FE/assets/83440978/9645859d-83b0-43e9-a6a8-98dd90f3d928">
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 58 48" src="[https://github.com/Yanabada/Yanabada_FE/assets/83440978/d687f767-759b-4ba1-99a8-997a94d4fb4d](https://github.com/Yanabada/Yanabada_FE/assets/83440978/d687f767-759b-4ba1-99a8-997a94d4fb4d)">
    
    ```jsx
    💡 야나바다의 각종 상품을 주제별로 확인할 수 있고,누적된 상품 조회로 야나바다의 ~~를 확인할 수 있어요
    더불어, 상품 승인 요청이 들어오면 즉시 알림이 표시되어, 놓치지 않고 빠르게 상품을 승인할 수 있습니다!
    ```
    
- 알림
    - 구매, 판매, 채팅방 개설 알림
    - 알림 삭제
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 53 43" src="[https://github.com/Yanabada/Yanabada_FE/assets/123650056/82640af1-5955-4122-8919-a65fc0db5c68](https://github.com/Yanabada/Yanabada_FE/assets/123650056/82640af1-5955-4122-8919-a65fc0db5c68)">
    
    ```jsx
    💡 나에게 온 알림을 관리하는 페이지입니다.
    ```
    

### 로그인 / 회원가입

- 일반 & 카카오 로그인 + 비밀번호 재설정
    
    ```jsx
    💡이메일 또는 카카오 계정으로 로그인할 수 있는 페이지입니다.
    ```
    
    - queryString을 활용해 회원가입 페이지 재활용
    
    <img width="360" alt="스크린샷 2024-01-29 오후 12 48 13" src="[https://github.com/Yanabada/Yanabada_FE/assets/83440978/60615593-8916-47d4-b0f8-840cc7c80443](https://github.com/Yanabada/Yanabada_FE/assets/83440978/60615593-8916-47d4-b0f8-840cc7c80443)">
    
- 회원가입
    
    ```jsx
    💡이메일 또는 카카오 계정으로 회원가입이 가능합니다. 이메일 인증을 통해 본인 계정으로만
    가입할 수 있습니다. 
    ```
    
    - react-hook-form 을 활용한 유효성 검사
    - 데이터 관리
        - 일반 회원가입 : Zustand
        - 소셜 회원가입: 쿠키
    - 회원가입 성공시 Cookie로 데이터 관리
        
        ![회원가입전체.gif](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/%25ED%259A%258C%25EC%259B%2590%25EA%25B0%2580%25EC%259E%2585%25EC%25A0%2584%25EC%25B2%25B4.gif)
        
    - <img width="357" alt="스크린샷 2024-01-29 오후 12 58 39" src="[https://github.com/Yanabada/Yanabada_FE/assets/123650056/b30af4b9-be43-43dd-84fe-9c6a4e1947c7](https://github.com/Yanabada/Yanabada_FE/assets/123650056/b30af4b9-be43-43dd-84fe-9c6a4e1947c7)">

### 검색 / 상세

- 숙소 목록
    
    ```jsx
    💡 야나바다에 등록된 모든 숙소를 조건에 맞게 볼 수 있는 페이지입니다.
    ```
    
    - 카테고리, 옵션, 조건 별 필터링
    - 무한 스크롤
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 38 21" src="https://github.com/Yanabada/Yanabada_FE/assets/83440978/fb1b85e3-831c-4031-a306-f0b24eb29559">
- 검색
    
    ```jsx
    💡 키워드, 날짜, 인원수에 맞게 숙소를 검색할 수 있습니다.
    최근 검색 기록을 눌러 더 편리하게 검색할 수 있습니다.
    ```
    
    - 최근 검색 기록
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 42 44" src="[https://github.com/Yanabada/Yanabada_FE/assets/123650056/62935d43-ec4d-4556-ad9a-0c883e13ceb6](https://github.com/Yanabada/Yanabada_FE/assets/123650056/62935d43-ec4d-4556-ad9a-0c883e13ceb6)">
    - 키워드, 날짜, 인원수 별 검색
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 36 32" src="[https://github.com/Yanabada/Yanabada_FE/assets/123650056/c328af35-f12c-421a-a89d-1d3e19753b81](https://github.com/Yanabada/Yanabada_FE/assets/123650056/c328af35-f12c-421a-a89d-1d3e19753b81)">
- 상세
    
    ```jsx
    💡 숙소의 상세 정보를 확인하고 결제를 하거나, 정보를 변경할 수 있습니다.
    또한 가격 제안이 가능한 경우, 판매자와 채팅을 주고 받을 수 있습니다.
    ```
    
    - 숙소에 대한 정보 확인 가능
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 39 21" src="https://github.com/Yanabada/Yanabada_FE/assets/83440978/204bc25c-1b97-49a4-b32d-9e0bebf2614e">
    - 해당 숙소 지역 지도
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 47 50" src="[https://github.com/Yanabada/Yanabada_FE/assets/123650056/c8ec4c43-0f1e-422a-9294-5e9b154cb022](https://github.com/Yanabada/Yanabada_FE/assets/123650056/c8ec4c43-0f1e-422a-9294-5e9b154cb022)">
    - 판매자와 채팅
    - 결제
    
- 지도
    
    ```jsx
    💡 검색한 숙소 목록을 지도에서 한 눈에 볼 수 있습니다.
    ```
    
    - 숙소 목록 커스텀 마커, 클러스터러
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 49 58" src="[https://github.com/Yanabada/Yanabada_FE/assets/123650056/7d5f6e7e-60d5-4bca-a86f-f4d27eda53bc](https://github.com/Yanabada/Yanabada_FE/assets/123650056/7d5f6e7e-60d5-4bca-a86f-f4d27eda53bc)">
    - 내 위치로 가기
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 50 30" src="[https://github.com/Yanabada/Yanabada_FE/assets/123650056/54a3c79c-28af-441a-b2a3-95c2daf3acea](https://github.com/Yanabada/Yanabada_FE/assets/123650056/54a3c79c-28af-441a-b2a3-95c2daf3acea)">
    - 현 위치에서 숙소 재검색
    - <img width="360" alt="스크린샷 2024-01-29 오후 12 40 36" src="[https://github.com/Yanabada/Yanabada_FE/assets/83440978/25864d2e-64ee-43e4-966c-3690fd7d65fe](https://github.com/Yanabada/Yanabada_FE/assets/83440978/25864d2e-64ee-43e4-966c-3690fd7d65fe)">

### 채팅

- 채팅
    
    ```jsx
    💡 네고를 제안할 수 있는 실시간 채팅 페이지입니다. 구매자는 이곳에서 바로 결제할 수 있고,
    판매자는 이곳에서 바로 가격을 변경할 수 있습니다.
    ```
    
    - WebSocket 실시간 채팅
        
         <img width="360" alt="스크린샷 2024-01-29 오후 12 45 37" src="[https://github.com/Yanabada/Yanabada_FE/assets/83440978/c48eb989-8958-425e-97b4-fcffde0ff1e5](https://github.com/Yanabada/Yanabada_FE/assets/83440978/c48eb989-8958-425e-97b4-fcffde0ff1e5)">
        
        ![Untitled](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/Untitled%201.png)
        
    - 무한스크롤
    - PWA + FCM을 활용한 디바이스 알림 기능 구
    - 안 읽은 알림 수 Polling을 활용하여 표기
        
        <img width="360" alt="스크린샷 2024-01-29 오후 12 53 44" src="[https://github.com/Yanabada/Yanabada_FE/assets/83440978/8d018421-9a6e-4e9a-9258-9d587686ef14](https://github.com/Yanabada/Yanabada_FE/assets/83440978/8d018421-9a6e-4e9a-9258-9d587686ef14)">
        

### 등록

```jsx
💡 야놀자에서 구매했던 상품을 양도에 등록할 수 있는 리스트를 조회하는 페이지입니다.
```

- 상품 리스트 및 상세 조회
    - 상품 선택시 Framer motion 애니메이션 적용

[https://github.com/Yanabada/Yanabada_FE/assets/95595106/bb8bc737-79a8-4d2f-81ba-fea2a8aa223d](https://github.com/Yanabada/Yanabada_FE/assets/95595106/bb8bc737-79a8-4d2f-81ba-fea2a8aa223d)

```jsx
💡 상품을 양도하기 위해 등록하는 페이지입니다. 수수료 정책은 입실일을 기준으로 하여, 
선택된 날짜에 따라 수수료가 달라집니다. 이에 따라, 날짜를 선택할 때 해당 날짜의 수수료가 명시됩니다. 
또한, 사용자는 판매가, 가격 협상 여부, 판매 종료일, 자동 취소 여부 등을 선택하여 상품을 등록할 
수 있습니다. 
```

- 상품 등록 및 수정
    - react calendar 날짜 객체 관리
    - 정책에 따른 날짜배열 및 수수료 계산 로직
    - zustand 전역상태 관리

[https://github.com/Yanabada/Yanabada_FE/assets/95595106/917c45bb-a0ba-4177-beea-491c14f19bfc](https://github.com/Yanabada/Yanabada_FE/assets/95595106/917c45bb-a0ba-4177-beea-491c14f19bfc)

### 야놀자 페이

```jsx
💡 자체 결제수단인 야놀자 페이 가입하는 페이지입니다. 연동할 계좌번호와 비밀번호를 등록해 야놀자 페이로
   충전하여 상품 결제가 가능합니다.
```

- 페이 가입
    - 랜덤 숫자 키패드 생성
    - 비밀번호 등록 및 확인 로직
    
    [https://github.com/Yanabada/Yanabada_FE/assets/95595106/d3d9731a-fc1c-4e79-8252-5874136a5bb8](https://github.com/Yanabada/Yanabada_FE/assets/95595106/d3d9731a-fc1c-4e79-8252-5874136a5bb8)
    

```jsx
💡 야놀자 페이 충전 및 인출하는 페이지입니다. 페이로 충전/인출한 내역 및 거래내역을 한 페이지에서
   필터하여 한 눈에 확인할 수 있습니다.
```

- 충전 및 인출
    - 거래내역 리스트 필터 및 무한스크롤 구현
    - 금액 유효성 검사
    - 충전/인출/결제 케이스 대비 에러문구 노출
    
    [https://github.com/Yanabada/Yanabada_FE/assets/95595106/e7771baa-7bdd-459f-8a62-f9d4f32fc698](https://github.com/Yanabada/Yanabada_FE/assets/95595106/e7771baa-7bdd-459f-8a62-f9d4f32fc698)
    
    [https://github.com/Yanabada/Yanabada_FE/assets/95595106/f2327810-19eb-4148-8359-16363b31a50b](https://github.com/Yanabada/Yanabada_FE/assets/95595106/f2327810-19eb-4148-8359-16363b31a50b)
    

### 마이페이지

- 마이페이지 홈
    
    ![Untitled](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/Untitled%202.png)
    
    ```jsx
    💡 각종 페이지로 이동할 수 있는 마이페이지 홈 입니다.
    로그인 여부 및 야놀자페이 가입 여부에 따라 페이지의 내용이 달라집니다.
    ```
    
- 승인요청 관리
    
    ![Untitled](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/Untitled%203.png)
    
    ```jsx
    💡 판매된 상품들의 승인 여부를 선택할 수 있는 승인요청관리 페이지입니다.
    상품을 판매 승인 및 거절할 수 있으며 승인 완료 및 취소된 건에 대해 거래내역서를 확인할 수 있습니다. 
    ```
    
- 프로필
    
    ![Untitled](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/Untitled%204.png)
    
    ```jsx
    💡 로그인한 회원의 정보를 볼 수 있는 프로필 페이지입니다.
    개인 정보를 확인할 수 있으며 닉네임, 비밀번호, 휴대폰번호 수정이 가능합니다.
    ```
    
- 판매 / 구매내역
    
    ![Untitled](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/Untitled%205.png)
    
    ```jsx
    💡 판매 및 구매한 상품을 볼 수 있는 페이지입니다.
    판매 및 구매된 상품에 대한 거래내역서를 확인할 수 있으며, 
    판매내역 페이지에서 판매 대기인 거래에 대해서 승인요청 페이지로 이동해 판매를 승인, 거절할 수 있습니다.
    또한, 구매내역 페이지에서 승인 대기인 거래에 대해서 구매 취소 및 판매 게시글 확인이 가능합니다.
    ```
    
- 거래내역서
    
    ![Untitled](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/Untitled%206.png)
    
    ```jsx
    💡 상품의 거래 내역을 확인할 수 있는 페이지입니다.
    상품의 결제 정보와 거래 정보를 확인할 수 있습니다.
    ```
    

### 구매

- 구매
    
    ![1.gif](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/1.gif)
    
    ```jsx
    💡 결제 페이지입니다.
    이용자 정보, 예약자 정보, 결제 수단, 약관 동의를 해야 결제하기 버튼이 활성화됩니다.
    결제하기 버튼을 누르면 선택한 결제 수단으로 결제가 진행됩니다.
    ```
    
- 결제 프로세스
    
    ![3.gif](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/3.gif)
    
    ```jsx
    💡 결제 프로세스 페이지입니다.
    선택한 결제 수단으로 테스트 결제 프로세스를 체험할 수 있습니다.
    결제 후에는 결제 완료 페이지로 리다이렉트됩니다.
    ```
    
- 결제 완료
    
    ![2.gif](%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%82%E1%85%A5%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3%E1%84%86%E1%85%B5%20a8618ccbb79042db92da7520ea8915c7/2.gif)
    
    ```jsx
    💡 결제 후 결제 정보를 확인할 수 있는 페이지입니다.
    이후 구매내역 및 홈으로 이동할 수 있습니다.
    ```
    

## 기술 스택 및 선택 이유

- React
    
    React는 부드러운 사용자 경험을 제공하는 대표적인 SPA앱이며, 풍부한 라이브러리와 레퍼런스를 가지고 있기 떄문에 선택하였습니다. 그리고 컴포넌트 단위로 코드를 관리하는 측면에서 협업에도 좋고 재사용성도 높다는 장점을 가지고 있어 선택하였습니다.
    
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    
- firebase
    
    PWA + FCM을 활용한 알림 기능 구현을 위해 도입했습니다. 
    
    <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
    
- framer-motion
    
    컴포넌트의 상태와 연동하여 애니메이션 상태를 효율적으로 제어할 수 있으며 복잡한 애니메이션도 css animation 보다는 간결한 코드로 작성할 수 있기 때문에 선택했습니다.
    
    <img src="https://img.shields.io/badge/framer-0055FF?style=for-the-badge&logo=framer&logoColor=white">
    
- Emotion
    
    Styled-component 대비 실행 시간과 컴파일 시간이 빠르기 때문에 성능면을 고려해서 선택하였고 공통 스타일을 객체로 묶어 코드의 재사용성을 향상시켰습니다.
    
    <img src="https://img.shields.io/badge/Emotion-D36AC2?style=for-the-badge&logo=npm&logoColor=white">
    
- Zustand
    
    Redux 대비 보일러 플레이트가 적고, ContextAPI와 달리 불필요한 리렌더링을 최소화 할 수 있어서 선택했습니다.
    
    <img src="https://img.shields.io/badge/Zustand-E9C773?style=for-the-badge&logo=npm&logoColor=white">
    
- axios
    
    instance와 intercepter를 통해 API 기능을 모듈화를 해서 공통된 요청과 응답을 처리하기 위해 선택했습니다.
    
    <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
    
- tanstack react query
    
    서버 상태를 선언적, 효율적으로 관리하기 위해 선택했습니다. 
    React 어플리케이션 내에서 데이터 패칭, 캐싱, 동기적, 그리고 서버의 상태의 업데이트를 좀 더 용이하게 할 수 있는 환경을 만들 수 있을 것이라 기대했습니다.
    
    <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=white">
    
- react hook form
    
    여러 input의 유효성 관리를 효율적으로 하기 위해 선택했습니다. 에러 메세지 표기 뿐만 아니라 getValue등의 속성을 활용해 최적화 또한 기대할 수 있을 것이라 생각했습니다.
    
    <img src="https://img.shields.io/badge/react hook form-EC5990?style=for-the-badge&logo=react hook form&logoColor=white">
    

Build & CI/CD

- Vite
    
    Vite는 기본적으로 ESM (ECMAScript Modules)을 사용하여 개발을 진행하며, 필요한 경우 프로덕션 빌드 시에만 모듈 번들링을 수행합니다. 이로 인해 개발 및 빌드 속도가 향상되기 떄문에 개발 시간을 효율적으로 만들 수 있게 하고자 했습니다.
    
    <img src="https://img.shields.io/badge/vite-646cff?style=for-the-badge&logo=vite&logoColor=white">
    
- vercel
    
    자동 배포를 설정해두어 최종 제출 시에 배포로 인한 문제를 사전 차단하고자 했고, pr을 올릴 때마다 preview할 수 있도록 설정해 디테일한 확인을 가능하게 하고자 했습니다.
    
    <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
    

## 아키텍처

![image](https://github.com/Yanabada/Yanabada_FE/assets/93538221/b281bbe0-875e-418f-b829-6e1d4049e123)


## 폴더 구조

```
📦src
 ┣ 📂animations
 ┣ 📂apis
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂functions
 ┣ 📂hooks
 ┣ 📂mocks
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂data
 ┣ 📂pages
 ┃ ┣ 📂charge
 ┃ ┃ ┣ 📂apis
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂constants
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂stores
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂tests
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┣ 📂utils
 ┃ ┣ 📂chat
 ┃ ┣ 📂home
 ┃ ┣ 📂login
 ┃ ┣ 📂myPage
 ┃ ┣ 📂notice
 ┃ ┣ 📂products
 ┃ ┣ 📂purchase
 ┃ ┣ 📂sample
 ┃ ┣ 📂search
 ┃ ┣ 📂sell
 ┃ ┣ 📂signIn
 ┃ ┣ 📂speicialProducts
 ┃ ┗ 📂term
 ┣ 📂routes
 ┣ 📂styles
 ┣ 📂tests
 ┃ ┣ 📂helpers
 ┣ 📂themes
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜Layout.tsx
 ┣ 📜firebase-messaging-sw.ts
 ┣ 📜main.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 회고

- 재준 ✨
    
    혼자서는 해결하지 못하던 문제를 둘이서 해결하고 또 둘이서 해결 못하는 문제는 셋이서 금방 해결할 때가 많았습니다. 프로그래밍이란 컴퓨터와 하는 일이지만, 역설적이게도 사람과의 소통이 더욱 중요하다는 걸 느끼는 한 달이었습니다.
    어떻게 보면 기획부터 개발까지 이번 프로젝트가 부트캠프에서 있었던 모든 프로젝트 중에 가장 아쉬운 프로젝트 였던 것도 같습니다. 미니 프로젝트와 같은 숙박이라는 주제, RFP에 충실한 무난한 기획, 빠듯한 개발 시간으로 인한 충분하지 못한 공부량 등 여러가지가 있지만 가장 큰 이유는 가장 열심히 했기 때문이 아닐까 싶습니다.
    그렇기에 마크업 포함 실제 개발 기간이 2-3주 정도로 짧았음에도 한 명도 빠짐없이 책임감 있게 잘 해내준 팀원들이 너무 자랑스럽습니다. 앞으로는 밤 새지 말고 좋은 개발 문화 아래에서 원하는 공부 마음껏 했으면 좋겠습니다.
    
- 솔미
    
     이번 프로젝트에서 잘한 점들이 정말 많지만, 그 중 공통 컴포넌트의 활용과 팀문화를 꼽을 수 있을 것 같습니다.
     공통 컴포넌트를 만들고 작업을 시작했더니 페이지 마크업 작업 속도가 빨라짐을 경험했습니다. 버튼, 뱃지부터 비슷한 레이아웃의 페이지와 애니메이션까지 다양한 공통 컴포넌트를 제작했습니다. 여러 페이지에서 어떻게 쓰이는지 확인하고, 확장성있는 컴포넌트를 만들기 위해 많은 고민을 해보았습니다.  또한 이 과정에서 디자이너와 효율적으로 소통하는 법을 배웠고, 디자인도 더 통일성있게 업그레이드 될 수 있었습니다.
     이슈가 생겼다고 하면 모두 달려와 같이 고민하고 해결하는 팀문화가 형성되어 좋았습니다. 모르는 것을 모른다고 쉽게 질문할 수 있는 분위기였기에 더욱 빠르게 이슈 해결이 가능했고, 해결했지만 찝찝했던 것들도 질문을 통해 더 좋은 견해를 얻어갈 수도 있었습니다. 열정넘치고 똑똑한 팀원분들 덕분에 기능적인 것들 뿐만 아니라 올바른 팀문화에 대해서도  많은 걸 배울 수 있었습니다.
    
     기획, 아트, 프론트엔드, 백엔드 모두가 참여하는 대규모 프로젝트는 이번에 처음 경험해 보았는데, 각 파트에서 중요시하는 부분이 달라 많은 우여곡절이 있었습니다. 하지만 서로의 작업을 존중하는 마음을 갖고 소통을 한다면 어떤 문제든 타협점을 찾아갈 수 있다는 것을 경험했습니다.
    
- 예인 ✨
    
    이번 프로젝트는 제가 리액트를 사용한 가장 큰 규모의 프로젝트였습니다.
    
    이전까지는 주로 새로운 기능을 찾아보고 적용하는 데 중점을 두었지만, 이번 프로젝트에서는 각 기능들이 유기적으로 연결되어 전체적인 흐름을 이루는 데 필요한 부분에 집중했습니다. 특히 한 페이지 내에서 다양한 케이스를 대비한 분기 처리, 여러 곳에서 사용되는 데이터 관리, 그리고 데이터를 가지고 있다가 한 번에 API 호출하는 방법 등에 많은 고민과 시간을 할애했습니다.
    
    또한 알게 된 것은 개발에 착수하기 전에 기획서를 받고 구현할 기능을 예상하는 과정에서, 기획의 누락된 부분을 파악하고 전체 흐름을 그려보는 것이 얼마나 중요한지 깨달았습니다. 미리 플로우를 그려보고 대비했다면 개발 막바지에 급하게 시간에 쫓기는 상황을 피할 수 있었을 것 같아 예측 능력 또한 실력임을 깨우친 계기였습니다. 그리고 QA 과정에서 수정 사항들을 진행하면서 사이드 이펙트를 일으켜 수정하는데 복잡도가 매우 높았다 보니 평소 사이드 이펙트를 최소화하는 것의 중요성을 몸소 느낀 시간이었습니다.
    
    이번 프로젝트를 통해 기능적으로 많이 고민하고 배우기도 했지만, 무엇보다 팀원들의 실력, 열정, 그리고 동료를 돕는 자세에서 많은 영향을 받았습니다. 단기간에 프로젝트를 완성하기 위해 정신적, 육체적으로 지친 상태임에도 불구하고 서로를 배려하고 작은 이슈에도 진심으로 함께 궁금증을 가지고 해결하려는 태도가 큰 힘이 되었습니다. 팀원들의 문제 해결에 대한 진심 어린 모습을 보며 개발에 임하는 자세에 대해 다시 한번 스스로를 돌아보고 배우는 계기가 되어 팀원들에게 너무나도 감사합니다.
    
- 승현 ✨
    
    이번 프로젝트는 협업에서 가장 중요한 것은 소통이라는 것을 느낀 프로젝트였습니다.
    
    그간 개발자들끼리만 협업을 진행하다가 처음으로 기획, 디자이너 분들과 협업을 진행하였습니다. 개발에 앞서서 기획과 간단한 디자인을 진행하였는데, 기획자들이 원하는 프로젝트 방향은 “주어진 주제 안에서 완성도 있는 프로젝트 구현”이 목표였고 개발자들이 원하는 프로젝트 방향은 “우리 프로젝트만의 킬러 기능을 만들어보자” 라는 약간의 의견 차이가 있었습니다. 이 밖에도 UX적 측면을 고려해야 하다보니 세세한 의견 충돌이 있었습니다. 그럴 때마다 회의를 통해 의견을 좁혀나가면서 서로의 의견을 최대한 반영하려고 노력했습니다. 이렇게 소통을 통해 민주적으로 갈등을 해결한 것은 우리 팀의 큰 장점이라고 생각합니다.
    
    반면, 소통적인 측면에서 아쉬운 점도 있었습니다. 각 파트 내에서 회의하거나 특정 파트끼리만 얘기가 된 내용이 다른 파트 사람들과 공유가 되지 않아, 개발 도중에 기획과 디자인이 수정되는 일이 있었습니다. 가령, 포인트 페이지 마크업을 모두 진행해놨는데 관련 API 설계가 안되어있었습니다. 기획과 FE의 회의 내용이 제대로 전달되지 않아 BE분들이 포인트 기능을 구현하지 않는다고 생각하셨기 때문이었습니다.  결국 포인트 페이지를 삭제할 수밖에 없었습니다.
    
    위와 같은 경험들을 통해 규모가 있는 프로젝트를 진행할 때에는 더욱더 소통에 신경을 써야겠구나라는 생각이 들었습니다. 생각보다 개발 기간이 타이트했지만, 다행히도 이번 프로젝트에서 열정적이고 좋은 팀원들을 만나 큰 마찰 없이 프로젝트를 마무리할 수 있어서 너무 좋았고, 이번 경험을 계기로 단순히 “코딩 잘하는 개발자” 가 아니라 “커뮤니케이션 잘하는 개발자” 가 되기 위해 노력할 것입니다.
    
- 수빈 ✨
    
    다양한 직군과 제대로 된 협업이 처음이었음에도 불구하고, 모두 좋은 분들을 만나 큰 갈등없이 프로젝트가 진행된 거 같습니다! 모두 서로의 의견을 존중하고 배려하다보니 좋은 결과로 이어지게 된 거 같습니다.
    
    항상 디스코드에 상주하며 해결이 잘 안되거나 어려움 일이 있을때마다 자신의 일처럼 한마음 한뜻으로 도움을 준 프론트 팀원분들에게 감사의 마음을 전하고 싶습니다! 잦은 밤샘으로 체력적으로 힘들었지만, 팀원분들이 있어서 힘든 순간도 즐거웠고 많은 추억을 쌓아갑니다 🥺🍀✨
