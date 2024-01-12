## 중간 점검 리드미

**진행상황**

- 회원가입/로그인
    - 디자인(%)
- 홈 화면
    - 디자인(%)
- 검색 (전체 상품 리스트 조회)
    - 디자인(%)
- 채팅
- 마이페이지
    - 디자인(%)
- 상품등록페이지
    - 디자인(%)

**질문 사항**

- 라우팅
    - 현재 router.tsx에서 각 페이지 라우팅을 하고 있습니다. (ex `/mypage` )
    - 각 페이지 내 하위 페이지들을 outlet이용해서 메인페이지/하위페이지 형태로 관리하고 있습니다.  (ex `/mypage/detail`)
- 폴더 구조
    - 기능별로 나눈 폴더(ex.hooks,styles,types)가 루트폴더와 각 페이지폴더로 나뉘어있습니다.
        
        📂 src
        
        📂 apis 
        
        📂 assets 
        
        📂 components 
        
        📂 hooks 
        
        📂 styles 
        
        📂 types 
        
        📂 stores 
        
        📂 utils 
        
        📂 themes 
        
        📂 constants 
        
        📂 tests 
        
        📂 pages 
        
        📂 some
        
        index.tsx
        
        Login
        
        ```tsx
        const Login = () => {
          return <LoginForm />;
        };
        
        export default Login;
        ```
        
        📂 apis
        
        📂 components
        
        📂 hooks
        
        📂 styles
        
        📂 types
        
        📂 utils
        
        📂 tests
        
        📂 stores
        
        📂 constants
        
    - 1) 루트폴더/기능별폴더(ex.hooks,styles,types)/페이지/파일 혹은 2) 루트폴더/페이지/기능별폴더/파일 이렇게 두가지 방법을 고민하다가 2번을 선택했습니다.
    - 위와 같이 폴더구조를 잡은 이유는 1번의 경우 페이지 작업을 하다가 분리된 파일들을 루트폴더에서 찾는데 번거로움이 있어서 페이지 폴더 내에서 열어두고 가까이서 파일들을 찾을 수 있다는 편리함 때문이고 또한 import 경로가 지저분하지 않게 같은 폴더에서 상대경로로 불러오는게 보기에도 좋아서 2번을 선택했습니다.
    - 단점을 꼽자면 각 페이지마다 기능별 폴더들이 있다보니 폴더의 갯수가 굉장히 많아진다는 것 외에는 큰 단점을 발견하지는 못했습니다. 작업하기 편한대로 폴더구조를 잡았는데 유지보수하기에 저희가 고려하지 못한 애로사항이 있는지 궁금합니다.

**링크**

- 피그마
    - [https://www.figma.com/file/PFco2Sebl6rofWqWDywZHn/5조의-마법사-작업공간?node-id=2159%3A44888&mode=dev](https://www.figma.com/file/PFco2Sebl6rofWqWDywZHn/5%EC%A1%B0%EC%9D%98-%EB%A7%88%EB%B2%95%EC%82%AC-%EC%9E%91%EC%97%85%EA%B3%B5%EA%B0%84?node-id=2159%3A44888&mode=dev)
- API 명세서
    - [**https://www.notion.so/API-f06ff05bd8d0495489a1f40c5462b2e4?pvs=4**](https://www.notion.so/API-f06ff05bd8d0495489a1f40c5462b2e4?pvs=21)
