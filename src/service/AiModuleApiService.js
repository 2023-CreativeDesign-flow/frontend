import { API_AI_BASE_URL } from "./app-config";

export function aiCall(request) {
  let url = `${API_AI_BASE_URL}/?url1=${request.url1}&url2=${request.url2}`;
  return fetch(url)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      console.log("Ooops!");
      if (error.status === 403) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    });
}
// //aiModule에 url 전송
export function sendAiModule(data) {
  console.log(data.url1, data.url2);
  return aiCall(data)
    .then((response) => {
      if (response) {
        alert("검사를 완료했습니다.");
        return response;
      }
    })
    .catch((error) => {
      console.log(data);
      console.log("Oops!");
      console.log(error.status);
      console.log("Ooops!");
      return Promise.reject(error);
    });
}

export function hello() {
  return aiCall("", "GET")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Oops!");
      console.log(error.status);
      console.log("Ooops!");
      return Promise.reject(error);
    });
}
