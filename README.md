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
    - 디자인(0%)

**질문 사항**

- **라우팅**
    - 현재 `router.tsx`에서 각 페이지 라우팅을 하고 있습니다. (ex `/mypage` )
    - 각 페이지 내 하위 페이지들을 `outlet`을 이용해서 메인페이지/하위페이지 형태로 관리하고 있습니다.  (ex `/mypage/detail`)

- **폴더 구조**
    - 기능별로 나눈 폴더(ex. hooks, styles, types)가 루트 폴더와 각 페이지 폴더로 나뉘어있습니다.
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
    - 선택한 폴더 구조는 2가지입니다.
      1.  루트폴더/기능별폴더(ex. hooks, styles, types)/페이지/파일
      2.  루트폴더/페이지/기능별폴더/파일
    - 선택 이유:
        - a의 경우, 페이지 작업 시 분리된 파일을 루트 폴더에서 찾는데 번거로움이 있어 페이지 폴더 내에서 열어두면 가까이서 파일을 찾을 수 있습니다. 또한, import 경로가 깔끔하게 상대 경로로 불러오기 때문에 코드의 가독성이 높아집니다.
        - 단점은 각 페이지마다 기능별 폴더들이 있어 폴더의 갯수가 늘어나는 것이지만, 편리성을 우선시하였습니다. 현재까지는 큰 단점이 보이지 않습니다.  

**링크**

- **피그마**
    - [링크 바로가기](https://www.figma.com/file/PFco2Sebl6rofWqWDywZHn/5%EC%A1%B0%EC%9D%98-%EB%A7%88%EB%B2%95%EC%82%AC-%EC%9E%91%EC%97%85%EA%B3%B5%EA%B0%84?node-id=2159%3A44888&mode=dev)
- **API 명세서**
    - [링크 바로가기](https://www.notion.so/API-f06ff05bd8d0495489a1f40c5462b2e4?pvs=21)
