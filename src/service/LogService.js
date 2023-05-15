import { call } from "./ApiService";

export function sendurl(logDTO) {
  console.log("ACCESS_TOKEN");
  return call("/copy/log", "POST", logDTO).then((response) => {});
}