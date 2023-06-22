import "./Mypage.css";
import { useEffect, useState } from "react";
import { call } from "../../service/ApiService";
import Row from "./Row";

function Mypage() {
  const [loglist, setLoglist] = useState([]);

  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  const takeloglist = () => {
    call("/copy/loglist", "POST", { token: accessToken })
      .then((response) => {
        console.log(response.data);
        setLoglist(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  // 클릭시 자동 리로딩하기 위함
  useEffect(() => {
    takeloglist();
  }, []);

  return (
    <>
      <div className='header'>
        <h1 className='main-title'>| 마이페이지</h1>
      </div>

      {loglist.map((row) => (
        <Row row={row} />
      ))}
    </>
  );
}

export default Mypage;
