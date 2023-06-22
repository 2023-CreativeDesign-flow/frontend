import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CopyKiller.css";
import YouTube from "react-youtube";
import { sendAiModule } from "../../service/AiModuleApiService";
import {
  imgtimeline,
  report,
  texttimeline,
  updateurl,
} from "../../service/LogService";
import { API_BASE_URL } from "../../service/app-config";

function CopyKiller() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [title1, setTitle1] = useState([]);
  const [title2, setTitle2] = useState([]);
  const [isTesting, setIsTesting] = useState(false);
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const navigate = useNavigate();

  const SendTextTimeline = (textList) => {
    texttimeline(textList).then((response) => {});
  };
  const SendImgTimeline = (imgList) => {
    imgtimeline(imgList).then((resposne) => {});
  };
  

  const sendResult = (result) => {
    console.log(result);

    return fetch("https://yt-copykiller-back-8082.run.goorm.site/copy/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept" : "application/json",
      },
      body: JSON.stringify({
        token: accessToken,
        url1: inputValue1,
        url2: inputValue2,
        title1: "title1",
        title2: "title2",
        imgrate: result.image,
        textrate: result.text,
        totalrate: result.overall,
      })
    })
      .then((response) => {
        console.log("데이터 전송성공");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handleInputChange1(event) {
    let sliceValue = "";
    if (event.target.value.length > 40) {
      sliceValue = event.target.value.slice(32);
    } else {
      sliceValue = event.target.value.slice(17);
    }

    setInputValue1(sliceValue);
    console.log(sliceValue);
  }
  function handleInputChange2(event) {
    let sliceValue = "";
    if (event.target.value.length > 40) {
      sliceValue = event.target.value.slice(32);
    } else {
      sliceValue = event.target.value.slice(17);
    }
    setInputValue2(sliceValue);
    console.log(sliceValue);
  }

  // 인공지능 모듈 전달
  const testOnSubmit = async (event) => {
    try {
      let result2 = await sendAiModule({
        url1: `${inputValue1}`,
        url2: `${inputValue2}`,
      });
      return result2;
    } catch (error) {
      console.log(error);
    }
  };

  const opts = {
    height: "310",
    width: "550px",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  };

  const clicked2 = (result2) => {
    const data = {
      url1: inputValue1,
      url2: inputValue2,
      result: {
        overall: result2.overall,
        text: result2.text,
        image: result2.image,
        text_time: result2.text_time,
        image_time: result2.image_time,
        title1: result2.title1,
        title2: result2.title2,
        video_time: result2.video_time,
      },
    };
    navigate("/resultpage", {
      state: data,
    });
  };

  const handleButtonClick = async () => {
    try {
      setIsTesting(true);
      let result2 = await testOnSubmit();

      clicked2(result2);
      sendResult(result2);

    } catch (error) {
      console.log(error);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <>
      <div className='header'>
        <div className='main-title'>| 영상 업로드</div>
        <button
          className={`test-start ${isTesting ? "gray-button" : ""}`}
          onClick={() => {
            handleButtonClick();
          }}
          disabled={isTesting}
        >
          {isTesting ? "검사 진행중 ..." : "검사 시작하기"}
        </button>
      </div>
      <div className='explain'>
        유튜브 영상 링크를 회색 바를 클릭하여 첨부하세요. 자동으로 영상이 업로드
        됩니다.
        <br />
        검사는 약 10분정도 소요될 수 있습니다.
      </div>
      <div>
        <div className='app-container'>
          <div className='app-copy'>
            <div className='youtube'>
              <input
                className='youtube-urlbar'
                onChange={handleInputChange1}
              ></input>
              <div className='youtube-playing'>
                <YouTube videoId={inputValue1} opts={opts} />
              </div>
              <div className='CopykillerTitle'>{title1}</div>
            </div>
            <div className='youtube'>
              <input
                className='youtube-urlbar'
                onChange={handleInputChange2}
              ></input>
              <div className='youtube-playing'>
                <YouTube videoId={inputValue2} opts={opts} />
              </div>
              <div className='CopykillerTitle'>{title2}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CopyKiller;