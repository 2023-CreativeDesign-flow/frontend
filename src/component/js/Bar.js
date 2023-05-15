import React from "react";
import "../css/resultpage.css";

// 백분율 바 컴포넌트
const Bar = (props) => {
  const barStyle = {
    padding: 0,
    height: "100%",
    backgroundColor: "#1b2430",
    color: "white",
    transition: "width 0.5s ease-in-out",
    float: "left",
    display: "inline-block",
    borderRadius: "6px",
    textAlign: "center",
    fontSize : "15px",
    fontWeight: "bold",
  };

  return (
    <div className='totalResultbar' style={{ float: "right" }}>
      <div
        style={{
          ...barStyle,
          width: props.percent + "%",
          color: "white",
        }}
      >
        {props.percent}%
      </div>
    </div>
  );
};

export default Bar;