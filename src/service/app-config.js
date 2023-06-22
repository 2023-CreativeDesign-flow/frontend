let backendHost;
let aiModuleHost;

const hostname = window && window.location && window.location.hostname;

console.log("hostname", hostname);

//aiModuleHost = "https://inspection.run-asia-northeast1.goorm.site";
aiModuleHost = "http://34.85.58.56:52758";
//aiModuleHost = "api";
backendHost = "https://yt-copykiller-back-8082.run.goorm.site";
export const API_BASE_URL = `${backendHost}`;
export const API_AI_BASE_URL = `${aiModuleHost}`;
