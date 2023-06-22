import React, { useEffect } from "react";
import YouTube from "react-youtube";
import Bar from "../js/Bar";
import { call } from "../../service/ApiService";
import { useNavigate } from "react-router-dom";

const Row = ({ row }) => {
  const navigate = useNavigate();
  const opts = {
    height: "200px",
    width: "350px",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  };

  useEffect(() => {
    console.log(row);
  }, []);

  const rollbacklogdata = () => {
    call("/copy/rollback", "POST", { id: row.id })
      .then((response) => {
        const text = response.textList;
        const img = response.imgList;

        const textAry = text.map((item) => {
          return [item.timeline1, item.timeline2, item.text_copy_rate];
        });
        const imgAry = img.map((item) => {
          return [item.timeline1, item.timeline2, item.img_copyrate];
        });
        console.log(row.textrate);
        console.log(row.title1);
        const data = {
          url1: row.url1,
          url2: row.url2,
          result: {
            overall: row.totalrate,
            text: row.textrate,
            image: row.imgrate,
            text_time: textAry,
            image_time: imgAry,
          },
          textList: response.textList,
          imgList: response.textList,
        };
        navigate("/resultpage", {
          state: data,
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className='results-container'>
      <div className='result-container'>
        <div className='youtube-container'>
          <div className='youtube-playing'>
            <YouTube videoId={row.url1} opts={opts} />
          </div>
        </div>
        <div className='percent-container'>
          <div className='box'>
            <div className='text'>텍스트 표절률</div>
            <div className='percent'>
              <Bar percent={row.textrate} />
            </div>
          </div>
          <div className='box'>
            <div className='text'>영상 표절률</div>
            <div className='percent'>
              <Bar percent={row.imgrate} />
            </div>
          </div>
        </div>
        <div className='youtube-container'>
          <div className='youtube-playing'>
            <YouTube videoId={row.url2} opts={opts} />
          </div>
          <div
            className='youtube-title'
            onClick={() => {
              rollbacklogdata();
            }}
          >
            {"클릭"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
