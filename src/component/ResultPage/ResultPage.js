import React, { useState, useRef, useEffect } from "react";
import "./resultpage.css";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import {
  imgtimeline,
  report,
  texttimeline,
  updateurl,
} from "../../service/LogService";

const ResultPage = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = location.state; // 전달받은 데이터 추출

  const [inputValue, setInputValue] = useState([]);
  const [textList, setTextList] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [percent1, setPercent1] = useState("");
  const [percent2, setPercent2] = useState("");

  const [showTextTimeline, setShowTextTimeline] = useState(true);
  const [showImgTimeline, setShowImgTimeline] = useState(true);
  const [showEachTimeline, setShowEachTimeline] = useState(true);

  const [result, setResult] = useState({
    overall: "",
    text: "",
    image: "",
    text_time: [],
    image_time: [],
    percent: [],
    title1: "",
    title2: "",
  });

  useEffect(() => {
    if (location.state && location.state.result) {
      setResult(location.state.result);
    }
  }, [location.state]);

  var temp1 = 1;
  var temp2 = 1;
  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  function handleInputChange(event) {
    const sliceValue = event.target.value.slice(17);
    setInputValue(sliceValue);
    console.log(sliceValue);
  }

  const opts = {
    height: "360",
    width: "650",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  };

  const youtubePlayerRef1 = useRef(null);
  const youtubePlayerRef2 = useRef(null);

  const handleTimelineClick = (timeline1, timeline2, percent, textOrImage) => {
    if (youtubePlayerRef1.current && youtubePlayerRef2.current) {
      youtubePlayerRef1.current.internalPlayer.seekTo(timeline1);
      youtubePlayerRef2.current.internalPlayer.seekTo(timeline2);
      if (textOrImage === "text") {
        setPercent1(percent);
      } else {
        setPercent2(percent);
      }
      setShowEachTimeline(true);
    }
  };

  useEffect(() => {
    if (result.text_time) {
      const newTextList = result.text_time.map((item, index) => ({
        id: index + 1,
        timeline1: item[0],
        timeline2: item[1],
        copyrate: item[2],
      }));
      setTextList((textList) => newTextList);
    }
    if (result.image_time) {
      const newImgList = result.image_time.map((item, index) => ({
        id: index + 1,
        timeline1: item[0],
        timeline2: item[1],
        copyrate: item[2],
      }));
      setImgList((imgList) => newImgList);
    }
    console.log(textList);
  }, [result.text_time, result.image_time, percent1]);

  return (
    <>
      <div className='resultpage-container'>
        <div className='main-title'>| 검사 결과</div>
        <div className='resultpage-button'>
          {/* <button
            className='report-button'
            onClick={() => {
              youtubeReport();
            }}
          >
            신고하기
          </button> */}
          {/* <button
            className='ResultPageSend'
            onClick={() => {
              SendTextTimeline();
              SendImgTimeline();
              test();
            }}
          >
            전송하기
          </button> */}
        </div>
      </div>
      <div className='mainContainer'>
        <div className='app-container'>
          <div className='app-copy'>
            <div className={`youtube ${showTextTimeline ? "" : "hidden"}`}>
              <div className='youtube-playing'>
                <YouTube
                  videoId={`${data.url1}`}
                  opts={opts}
                  ref={youtubePlayerRef1}
                />
              </div>
              <div className='ResultPageCenter'>{"원본 영상"}</div>
              <div className='ResultPageCenter gray'>{`${data.url1}`}</div>
            </div>
            <div className={`youtube ${showImgTimeline ? "" : "hidden"}`}>
              <div className='youtube-playing'>
                <YouTube
                  videoId={`${data.url2}`}
                  opts={opts}
                  ref={youtubePlayerRef2}
                />
              </div>
              <div className='ResultPageCenter'>{"표절 영상"}</div>
              <div className='ResultPageCenter gray'>{`${data.url2}`}</div>
            </div>
          </div>
        </div>
        <div className='ExplainContainer'>
          <div className='ResultPageBigBig'>
            <div className='ResultPageBigName'>전체</div>
            <div className='ResultPageSmallName'></div>
            <div
              className='barStyle'
              style={{ width: result.overall * 11 + "px" }}
            >
              {result.overall}%
            </div>
          </div>
          <div className='ResultPageUnderline'></div>
          <div className='ResultPageBigBig'>
            <div className='ResultPageBigName'>요소별</div>
            <div className='ResultPageSmallName'>텍스트</div>
            <div
              className='barStyle'
              style={{ width: result.text * 11 + "px" }}
            >
              {result.text}%
            </div>
          </div>
          <div className='smallUnderline'></div>
          <div className='ResultPageBigBig'>
            <div className='ResultPageBigName white'>요소별</div>
            <div className='ResultPageSmallName'>이미지</div>
            <div
              className='barStyle'
              style={{ width: result.image * 11 + "px" }}
            >
              {result.image}%
            </div>
          </div>
          <div className='ResultPageUnderline'></div>
          <div className='ResultPageBigBig'>
            <div className='ResultPageBigName'>시간별</div>
            <div className='ResultPageSmallName'>텍스트</div>
            <div className='barStyle' style={{ width: percent1 * 11 + "px" }}>
              {percent1}%
            </div>
          </div>
          <div className='ResultPageBigBig'>
            <div className='ResultPageBigName white'>요소별</div>
            <div className='ResultPageSmallName white'>이미지</div>
            <div className='timelines'>
              {showTextTimeline &&
                showEachTimeline &&
                textList.slice(0, 10).map((item, index) => (
                  <button
                    key={item.id}
                    className='timeline'
                    onClick={() => {
                      handleTimelineClick(
                        item.timeline1,
                        item.timeline2,
                        item.copyrate,
                        "text"
                      );
                    }}
                  >
                    {item.timeline1} | {item.timeline2}
                  </button>
                ))}
            </div>
          </div>
          <div className='smallUnderline'></div>
          <div className='ResultPageBigBig'>
            <div className='ResultPageBigName white'>요소별</div>
            <div className='ResultPageSmallName'>이미지</div>
            <div className='barStyle' style={{ width: percent2 * 11 + "px" }}>
              {percent2}%
            </div>
          </div>
          <div className='ResultPageBigBig'>
            <div className='ResultPageBigName white'>요소별</div>
            <div className='ResultPageSmallName white'>이미지</div>
            <div className='timelines'>
              {showImgTimeline &&
                showEachTimeline &&
                imgList.slice(0, 10).map((item) => (
                  <button
                    key={item.id}
                    className='timeline'
                    onClick={() =>
                      handleTimelineClick(
                        item.timeline1,
                        item.timeline2,
                        item.copyrate,
                        "image"
                      )
                    }
                  >
                    {item.timeline1} | {item.timeline2}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;