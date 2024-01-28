## 중간 점검 리드미

**진행상황**

- **회원가입/로그인**
    - 디자인(90%)
- **홈 화면**
    - 디자인(50%)
- **검색 (전체 상품 리스트 조회)**
    - 디자인(70%)
- **채팅**
    - 디자인(0%)
- **마이페이지**
    - 디자인(70%)
- **상품등록페이지**
    - 디자인(80%)
- **구매페이지**
    - 디자인(0%)

**질문 사항**

- **라우팅**
    - 현재 `router.tsx`에서 각 페이지 라우팅을 하고 있습니다. (ex `/mypage` )
    - 각 페이지 내 하위 페이지들을 `outlet`을 이용해서 메인페이지/하위페이지 형태로 관리하고 있습니다.  (ex `/mypage/detail`)
    <br/>
    저희가 현재 짜놓은 구조가 적절한지 궁금합니다! 그리고, 하위 페이지가 많은 경우에 추천해주실만한 라우팅 구조가 있는지도 궁금합니다!
<br/>

- **폴더 구조**
    - src 하위에 공통으로 사용하는 assets, components, ... 폴더가 있습니다.
    - src/pages 폴더 내부에 각각의 page가 존재합니다.
    - 각각 page별 폴더 내부에 다시 해당 페이지에서 사용되는 assets, components, ... 폴더가 있습니다.

    ```
    📂 src
        📂 apis 
        📂 assets 
        📂 components 
        📂 hooks 
        📂 styles 
        📂 types 
        📂 stores 
        📂 utils 
        📂 themes 
        📂 constants 
        📂 tests 
        📂 pages 
            📂 some
                - index.tsx
                - 📂 apis
                - 📂 components
                - 📂 hooks
                - 📂 styles
                - 📂 types
                - 📂 utils
                - 📂 tests
                - 📂 stores
                - 📂 constants
    ```
    
    - 폴더 구조 설계 목적
        - vscode explore에서 여러 개의 폴더를 열어놓았을 때, 작업중인 파일들을 한눈에 볼 수 있다는 장점이 있습니다.
        - import 경로가 깔끔하게 상대 경로로 불러오기 때문에 코드의 가독성이 높아집니다.
        - 단점은 각 페이지마다 기능별 폴더들이 있어 폴더의 갯수가 늘어나는 것이라고 생각합니다.

    현재 폴더가 너무 많아 오히려 가독성이 떨어져 보이는 것 같습니다. 혹시 더 좋은 구조가 있는지 궁금합니다!

**링크**

- **피그마**
    - [링크 바로가기](https://www.figma.com/file/PFco2Sebl6rofWqWDywZHn/5%EC%A1%B0%EC%9D%98-%EB%A7%88%EB%B2%95%EC%82%AC-%EC%9E%91%EC%97%85%EA%B3%B5%EA%B0%84?node-id=2159%3A44888&mode=dev)
- **API 명세서**
    - [링크 바로가기](https://www.notion.so/API-f06ff05bd8d0495489a1f40c5462b2e4?pvs=21)
