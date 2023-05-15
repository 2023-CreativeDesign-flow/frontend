import "../css/Mypage.css";
import { useState } from "react";
import Bar from "./Bar";

function Mypage() {
  const [percent, setPercent] = useState({
    Percent: 60,
  });

  return (
    <>
      <div>
        <h1 className="main-title">| 마이페이지</h1>
      </div>
      <div className="results-container">
        <div className="result-container">
          <div className="youtube-container">
            <div className="img">
              <img src=""></img>
            </div>
            <div className="youtube-title">영상제목</div>
          </div>
          <div className="percent-container">
            <div className="box">
              <div className="text">텍스트 표절률</div>
              <div className="percent">
                <Bar percent={percent.Percent} />
              </div>
            </div>
            <div className="box">
              <div className="text">영상 표절률</div>
              <div className="percent">
                <Bar percent={percent.Percent} />
              </div>
            </div>
          </div>
          <div className="youtube-container">
            <div className="img">
              <img src=""></img>
            </div>
            <div className="youtube-title">영상제목</div>
          </div>
        </div>
        <div className="result-container">
          <div className="youtube-container">
            <div className="img">
              <img src=""></img>
            </div>
            <div className="youtube-title">영상제목</div>
          </div>
          <div className="percent-container">
            <div className="box">
              <div className="text">텍스트 표절률</div>
              <div className="percent">
                <Bar percent={percent.Percent} />
              </div>
            </div>
            <div className="box">
              <div className="text">영상 표절률</div>
              <div className="percent">
                <Bar percent={percent.Percent} />
              </div>
            </div>
          </div>
          <div className="youtube-container">
            <div className="img">
              <img src=""></img>
            </div>
            <div className="youtube-title">영상제목</div>
          </div>
        </div>
        <div className="result-container">
          <div className="youtube-container">
            <div className="img">
              <img src=""></img>
            </div>
            <div className="youtube-title">영상제목</div>
          </div>
          <div className="percent-container">
            <div className="box">
              <div className="text">텍스트 표절률</div>
              <div className="percent">
                <Bar percent={percent.Percent} />
              </div>
            </div>
            <div className="box">
              <div className="text">영상 표절률</div>
              <div className="percent">
                <Bar percent={percent.Percent} />
              </div>
            </div>
          </div>
          <div className="youtube-container">
            <div className="img">
              <img src=""></img>
            </div>
            <div className="youtube-title">영상제목</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
