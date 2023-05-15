import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="main-title">| CopyKiller is ...</h1>
      </div>
      <div className="about-box">
        <div className="explain">
          <div className="title">Youtube CopyKiller
          </div>
          <div className="txt">유튜브 동영상 완성의 필수 관문입니다</div>
        </div>
        <ul id="data">
          
          <li className="about-data">
            <p>이미지별 표절률</p>
            <span>이미지 별로 표절률을 확인할 수 있고 어떤 부분인지 바로 찾아보기가 용이합니다.</span>
          </li>
          <li className="about-data">
            <p>마이페이지</p>
            <span>마이페이지에 기록이 남아 언제든지 다시 볼 수 있습니다.</span>
          </li>
          <li className="about-data">
            <p>다양한 데이터</p>
            <span>100억건 이상의 빅데이터를 대상으로 비교검사합니다.</span>
          </li>
        </ul>
      </div>
      <div className="division-line"></div>
      <div className="order">
        <header>
          <div className="number">01</div>
          <div className="big-title">회원가입&로그인</div>
        </header>
        <article>
          <div className="small-title">간편한 회원가입!</div>
          <div className="explain-list">회원가입하시면 보다 편리하게 기능을 사용할 수 있습니다.</div>
          <div className="explain-list">인증확인을 거친 후 정상적인 로그인이 가능합니다.</div>
        </article>
        <div className="nav-button">
          <a href="/signup2"><button>회원가입하러 바로가기</button></a>
          {/* <button onClick={navigate("/signup2")}>회원가입</button> */}
        </div>
      </div>
      <div className="order">
        <header>
          <div className="number">02</div>
          <div className="big-title">영상 업로드</div>
        </header>
        <article>
          <div className="small-title">무료검사가 가능합니다.</div>
          <div className="explain-list">파일업로드 (.mp4 지원)</div>
          <div className="explain-list">링크 첨부로 업로드가 가능합니다.</div>
        </article>
        <div className="nav-button">
          <a href="/"><button>영상업로드 바로가기</button></a>
        </div>
      </div>
      <div className="order">
        <header>
          <div className="number">03</div>
          <div className="big-title">표절 검사</div>
        </header>
        <article>
          <div className="small-title">100억 건 이상의 인터넷 공개 콘텐츠와 비교 검사합니다.</div>
          <div className="explain-list">텍스트 추출을 통한 문서 검사</div>
          <div className="explain-list">이미지 크롤링을 통한 문서 검사</div>
          <div className="explain-list">인터넷 공개 콘텐츠 포함 검사</div>
        </article>
        <div className="nav-button">
        </div>
      </div>
      <div className="order">
        <header>
          <div className="number">04</div>
          <div className="big-title">검사결과 확인</div>
        </header>
        <article>
          <div className="small-title">정확하고 빠릅니다. 업로드 후 10분 이내 확인!</div>
          <div className="explain-list">실시간 온라인 표절률 확인</div>
          <div className="explain-list">이미지 단위 표절률 확인 가능</div>
          <div className="explain-list">문장 단위 표절률 확인 가능</div>
          <div className="explain-list">문장별 상세 검사결과보기 가능</div>
          <div className="explain-list">표절 의심 부분을 한눈에 파악 가능</div>
        </article>
        <div className="nav-button">
        </div>
      </div>
      <div className="order">
        <header>
          <div className="number">05</div>
          <div className="big-title">결과확인서 다운로드</div>
        </header>
        <article>
          <div className="small-title">PDF 검사결과 확인서를 제공해 드립니다.</div>
          <div className="explain-list">동영상별 상세검사결과 확인서</div>
          <div className="call">더 궁금하신 점은 문의주세요.</div>
        </article>
        <div className="nav-button">
          <a href="/copykiller"><button>문의하기</button></a>
        </div>
      </div>
    </>
  );
};

export default Home;