import React from "react";
import "../../css/resultpage.css";
import styled from "styled-components";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Bar from "./js/Bar";

const CopyKillerTest = () => {
  const [percent, setPercent] = useState({
    Percent: 60,
    titlePercent: 80,
    thumbnail: 70,
  });
  const [textList, setTextList] = useState([
    {
      id: 1,
      text1: "실험실 안전수칙1: 실험복을 꼭 입어야 합니다.",
      timeline1: "13.32",
      text2: "실험실 안전1: 실험복 챙겨오세요",
      timeline2: "10.30",
      percent: 85,
    },
    {
      id: 2,
      text1: "실험실 안전수칙2: 실험복을 꼭 입어야 합니다.",
      timeline1: "15.42",
      text2: "실험실 안전2: 실험복 챙겨오세요",
      timeline2: "10.30",
      percent: 75,
    },
    {
      id: 3,
      text1: "실험실 안전수칙3: 실험복을 꼭 입어야 합니다.",
      timeline1: "18.12",
      text2: "실험실 안전3: 실험복 챙겨오세요",
      timeline2: "10.53",
      percent: 90,
    },
  ]);
  const [imgList, setImgList] = useState([
    {
      id: 1,
      img1: "/img/img1-1.jpg",
      timeline1: "3.22",
      img2: "/img/img1-2.jpg",
      timeline2: "22.52",
      percent: 70,
    },
    {
      id: 2,
      img1: "/img/img2-1.jpg",
      timeline1: "13.32",
      img2: "/img/img2-2.jpg",
      timeline2: "1.32",
      percent: 60,
    },
    {
      id: 3,
      img1: "/img/img3-1.jpg",
      timeline1: "15.42",
      img2: "/img/img3-2.jpg",
      timeline2: "10.53",
      percent: 50,
    },
  ]);

  const barStyle = {
    padding: 0,
    height: "20px",
    backgroundColor: "red",
    color: "white",
    transition: "width 0.5s ease-in-out",
  };

  const MyBox = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding-left: 1%;
    padding-top: 0px;
    width: 98%;
    float: left;
  `;
  
  const showCopyPercent = (idx) => {
    console.log(idx);
    const newWindow = window.open(
      "./Detail",
      "_blank",
      "top=140, left=300, width=500, height=600"
    );
    newWindow.props = idx;
  };
  return (
    <>
      <table className='resultTable'>
        <tbody>
          <tr className='resultTr'>
            <th className='resultTh'>영상링크 1</th>
            <td className='resultTd'></td>
          </tr>
          <tr className='resultTr'>
            <th className='resultTh'>영상제목</th>
            <td className='resultTd'>유튜브카피킬러</td>
            <th className='resultTh'>종합표절률</th>
            <td>
              <Bar percent={percent.Percent} />
            </td>
          </tr>
          <tr className='resultTr'>
            <th className='resultTh'>제목표절률</th>
            <td>
              <Bar percent={percent.titlePercent} />
            </td>
            <th className='resultTh'>썸네일표절률</th>
            <td>
              <Bar percent={percent.thumbnail} />
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginRight: "auto", paddingLeft: "1%" }}>검사결과</h2>
        <Button variant='contained' color='primary' sx={{ mr: "2%" }}>
          다운로드
        </Button>
      </div>
      {/* 표절검사결과 */}
      <div className='Container'>
        <MyBox>
          <p>표절의심 부분</p>
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
                <button
                  onClick={() => {
                    const newWindow = window.open(
                      "./Detail",
                      "_blank",
                      "top=140, left=300, width=500, height=600"
                    );
                    newWindow.props = { idx };
                  }}
                >
                  표절률보기
                </button>
                <Bar percent={idx.percent} />
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
        </MyBox>
      </div>
    </>
  );
};

export default CopyKillerTest;
