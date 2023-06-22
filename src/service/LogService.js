import { call } from "./ApiService";

export function sendurl(logDTO) {
  return call("/copy/log", "POST", logDTO).then((response) => {
    console.log("로그 데이터 저장 완료");
  });
}

export function updateurl(logDTO) {
  return call("/copy/log", "UPDATE", logDTO).then((response) => {
    console.log("로그데이터 업데이트 완료");
  });
}
export function mypagelist(logDTO) {
  return call("/copy/loglist", "POST", logDTO)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

export function texttimeline(textResultDTOList) {
  return call("/copy/textresult", "POST", textResultDTOList).then(
    (response) => {
      console.log("텍스트 표절 전송 완료");
    }
  );
}

export function imgtimeline(ImgResultDTOList) {
  return call("/copy/imgresult", "POST", ImgResultDTOList).then((response) => {
    console.log("이미지 표절 전송 완료");
  });
}

export function takelogdata(token) {
  return call("/copy/loglist", "GET", token).then((response) => {
    console.log("데이터 불러오기");
  });
}

export function report() {
  return call("/copy/report", "POST").then((response) => {});
}
