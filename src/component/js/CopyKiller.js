import React, { useState } from "react";
import "../css/CopyKiller.css";
import YouTube from "react-youtube";
import axios from "axios";

function CopyKiller() {
  const [inputValue, setInputValue] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  // function testStart() {
  //   window.location.href = '/resultpage';
  // }

  function handleInputChange(event) {
    const sliceValue = event.target.value.slice(17);
    setInputValue(sliceValue);
    console.log(sliceValue);
  }

  const opts = {
    height: "310",
    width: "550px",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  };

  // 서버로 youtube 데이터 전송
  function handleUploadClick() {
    const videoTitle = "영상 제목"; // 크롤링된 영상 제목
    const youtubeUrl = `https://www.youtube.com/watch?v=${inputValue}` // 첨부한 유튜브 링크
    const data = {videoTitle, youtubeUrl}; //서버로 보낼 데이터

    axios
      .post("/update", data) // /update 경로에 POST 요청을 보냄.
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="header">
        <div className="main-title">| 영상 업로드</div>
      <button className="test-start" onClick={handleUploadClick}>검사 시작하기</button>
      </div>
      <div className="explain">유튜브 영상 링크를 회색 바를 클릭하여 첨부하세요. 자동으로 영상이 업로드 됩니다.<br />검사는 약 10분정도 소요될 수 있습니다.</div>
      <div>
        <div className="app-container">
          <div className="app-copy">
            <div className="youtube">
              <input
                  className="youtube-urlbar"
                  onChange={handleInputChange}
              ></input>
              <div className="youtube-playing">
                  <YouTube videoId={inputValue} opts={opts} />
              </div>
              <div className="CopykillerTitle">{videoTitle}영상 제목</div>
            </div>
            <div className="youtube">
              <input
                  className="youtube-urlbar"
                  onChange={handleInputChange}
              ></input>
              <div className="youtube-playing">
                  <YouTube videoId={inputValue} opts={opts} />
              </div>
              <div className="CopykillerTitle">{videoTitle}영상 제목</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CopyKiller;