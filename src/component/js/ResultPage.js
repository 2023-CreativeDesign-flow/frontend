import React, { useEffect, useState } from "react";
import "../css/resultpage.css";
import YouTube from "react-youtube";
import axios from "axios";

const ResultPage = () => {
  const [textTimelines, setTextTimelines] = useState([]);
  const [imageTimelines, setImageTimelines] = useState([]);
  const [timelineCount, setTimelineCount] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

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

  const [percent, setPercent] = useState({
    Percent: 60,
    titlePercent: 80,
    thumbnail: 70,
  });

  const handleTimelineClick = (time) => {
    const videoPlayer = document.getElementById("video");
    videoPlayer.currentTime = time;
  };

  const handleAddTimeline = () => {
    setTimelineCount(timelineCount + 1);
  };

  useEffect(() => {
    axios.get("/timelines").then((response) => {
      setTextTimelines(response.data);
    });
  }, []);

  return (
    <>
      <div className="resultpage-container">
        <div className="main-title">| 검사 결과</div>
        <div className="resultpage-button">
          <button className="download-button">결과 다운로드</button>
          <button className="report-button">신고하기</button>
        </div>
      </div>
      <table className="resultTable">
        <tbody>
          <tr className="resultTr">
            <th className="resultTh-title">링크</th>
            <td className="resultTd"></td>
            <th className="resultTh-title">링크</th>
            <td className="resultTd"></td>
          </tr>
          <tr className="resultTr">
            <th className="resultTh-title">영상제목</th>
            <td className="resultTd"></td>
            <th className="resultTh-title">영상제목</th>
            <td className="resultTd"></td>
          </tr>
          <th className="resultTh-percent">텍스트 표절률</th>
          <td className="resultpage-totalResultbar">
            {/* <div style={{ ...barStyle, width: percent.Percent + "%"}}>{percent.Percent}%</div> */}
            <div className="barStyle" style={{ width: percent.Percent + "%" }}>
              {percent.Percent}%
            </div>
          </td>
          <th className="resultTh-percent">이미지 표절률</th>
          <td className="resultpage-totalResultbar">
            <div className="barStyle" style={{ width: percent.Percent + "%" }}>
              {percent.Percent}%
            </div>
          </td>
          <th className="resultTh-percent">전체 표절률</th>
          <td className="resultpage-totalResultbar">
            <div className="barStyle" style={{ width: percent.Percent + "%" }}>
              {percent.Percent}%
            </div>
          </td>
        </tbody>
      </table>
      <div className="mainContainer">
        <div className="app-container">
          <div className="app-copy">
            <div className="youtube">
              <div className="youtube-playing">
                  <YouTube videoId={inputValue} opts={opts} />
              </div>
            </div>
            <div className="youtube">
              <div className="youtube-playing">
                  <YouTube videoId={inputValue} opts={opts} />
              </div>
            </div>
          </div>
        </div>
        <div className="timelines">
          <button className="timeline">1</button>
          <button className="timeline">2</button>
          <button className="timeline">3</button>
          <button className="timeline">4</button>
          <button className="timeline">5</button>
        </div>
      </div>
      {/* <div className='Container'>
        <MyBox>
          <p>텍스트 표절의심 부분</p>
          <hr />
          {textList.map((idx) => (
            <div
              key={idx.id}
              style={{
                padding: "3px",
                float: "right",
                width: "100%",
                backgroundColor: " #1b2430",
                color: "white",
              }}
            >
              표절률
              <div className='resultpage-totalResultbar' style={{ float: "right" }}>
                <div
                  style={{
                    ...barStyle,
                    width: idx.percent + "%",
                    color: "white",
                  }}
                >
                  {idx.percent}%
                </div>
              </div>
              <div>
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <h4 style={{ margin: 0, padding: 0 }}>텍스트1</h4>
                  <p>
                    타임라인:{idx.timeline1}
                    <br />
                    {idx.text1}
                  </p>
                  <br />
                  <h4 style={{ margin: 0, padding: 0 }}>텍스트2</h4>
                  <p>
                    타임라인:{idx.timeline2}
                    <br />
                    {idx.text2}
                  </p>
                </Box>
              </div>
            </div>
          ))}
        </MyBox> */}
      {/* <MyBox>
          <p>영상 표절의심 부분</p>
          <hr />
          {imgList.map((idx) => (
            <div key={idx.id}>
              <div
                key={idx.id}
                style={{
                  padding: "3px",
                  float: "right",
                  width: "100%",
                  backgroundColor: " #1b2430",
                  color: "white",
                }}
              >
                표절률
                <div className='resultpage-totalResultbar' style={{ float: "right" }}>
                  <div
                    style={{
                      ...barStyle,
                      width: idx.percent + "%",
                      color: "white",
                    }}
                  >
                    {idx.percent}%
                  </div>
                </div>
              </div>
              <Card sx={{ float: "left", pl: "5px" }}>
                <CardMedia
                  component='img'
                  alt={idx.img1}
                  style={{ objectFit: "cover", height: 200, width: 345 }}
                  image={idx.img1}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    타임라인: {idx.timeline1}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ float: "right" }}>
                <CardMedia
                  component='img'
                  alt={idx.img2}
                  style={{
                    objectFit: "cover",
                    height: 200,
                    width: 345,
                    padding: 5,
                  }}
                  image={idx.img2}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    타임라인: {idx.timeline2}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </MyBox> */}
      {/* </div> */}
    </>
  );
};

export default ResultPage;
