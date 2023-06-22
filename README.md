# 유튜브 카피킬러
### 2023-1 창설 팀 플로우
2023년초, 유튜브 영상 표절로 인하여 관련 업계가 떠들썩한 시기가 있었습니다.  
유튜브에서는 주로 사운드(음원, 노래 등)를 위주로 저작권을 검열하지만 대본, 이미지로 검사하지 않습니다.  

유튜브 카피킬러는 유튜브 영상 2개를 놓고 표절 검사를 해주는 웹 서비스입니다.  
영상 표절 검사로 유튜브 크리에이터들의 저작권을 지켜줄 수 있습니다.  

비교하고싶은 영상 2개의 url을 등록하고 검사하면 텍스트 검사모델, 이미지 검사모델이 각각 대본과 영상을 비교합니다.   
이를 종합하여 최종 표절률을 출력하고, 영상의 어떤 구간에서 표절률이 높게 나왔는지 확인할 수 있도록 합니다.  

해당 페이지는 유튜브 카피킬러의 frontend repository로 카피킬러의 사용자 인터페이스(UI)를 담당하며, 사용자가 텍스트를 입력하고 검사를 요청할 수 있는 기능을 제공합니다.


## 개요
  - 목적: 유튜브 영상 2개의 표절검사
  - 사용 언어: Javascript
  - 사용 패키지 및 API:
    - React: 컴포넌트 기반의 UI 개발
    - react-router-dom: React 애플리케이션의다양한 페이지 간의 경로 관리
    - axios: HTTP 클라이언트로써 비동기적인 데이터 요청과 응답 처리
    - Material-UI: 사용자 인터페이스를 구성하기 위한 UI 컴포넌트 라이브러리
   

## 코드 사용법

### 디렉토리 구조
![image](https://github.com/2023-CreativeDesign-flow/frontend/assets/88234067/aea050e9-8184-45a5-a753-9ffcf8766aa3)

### 설명
### - component 폴더
영상 표절 검사를 위한 사용자 인터페이스에 대한 소스코드가 정의되어 있는 폴더입니다.

### - component/CopyKiller.js
사용자가 url 두 개를 입력하여 검사할 수 있는 소스코드입니다. 두 개의 url을 입력하면 자동으로 영상이 업로드되고, 검사 시작하기 버튼을 누르면 AI 서버로 검사를 요청할 수 있습니다.

### - component/Home.js
사용자가 서비스를 편리하게 사용할 수 있도록 Youtube CopyKiller에 대해 간단히 설명한 페이지입니다.

### - component/Login.js
사용자가 서비스를 사용하기 위해서 로그인을 할 수 있는 페이지입니다. 이메일 주소와 패스워드를 입력하여 로그인할 수 있습니다.

### - component/SignUp.js
사용자가 서비스를 사용하기 전에 회원가입을 할 수 있는 페이지입니다. 사용자 이름, 이메일 주소, 패스워드를 입력하여 회원가입할 수 있습니다.

### - component/Mypage.js
사용자가 이전에 검사한 내역을 조회할 수 있는 페이지입니다. 영상 제목을 클릭하면 해당 영상에 대한 검사 결과 페이지로 이동하게 되어 상세 내용을 확인할 수 있습니다.

## 오픈소스, API, 라이브러리의 출처와 버전
### React
   react: 18.2.0
   react-router-dom: 6.11.0
   @mui/icons-material: 5.11.11


## 기여자   
  
<div align="center">
  <a href="https://github.com/seolsis">
    <img src="[https://user-images.githubusercontent.com/102962030/206461747-4d56a152-6963-46ea-853a-603465037070.png](https://static.wikia.nocookie.net/catchteenieping/images/a/ac/%ED%95%98%EC%B8%84%EC%9E%89_%EC%8B%9C%EC%A6%8C_2.png/revision/latest/thumbnail/width/360/height/360?cb=20211024200626&path-prefix=ko)https://static.wikia.nocookie.net/catchteenieping/images/a/ac/%ED%95%98%EC%B8%84%EC%9E%89_%EC%8B%9C%EC%A6%8C_2.png/revision/latest/thumbnail/width/360/height/360?cb=20211024200626&path-prefix=ko", width=200, alt="seolsis", title="seolsis"/>
  </a>
</div>
