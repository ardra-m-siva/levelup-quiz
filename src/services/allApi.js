import commonApi from "./commonApi";
import serverUrl from "./serverUrl";

export const registerApi = (reqBody) => {
    return commonApi('POST', `${serverUrl}/register`, reqBody)
}

export const loginApi = (reqBody) => {
    return commonApi('POST', `${serverUrl}/login`, reqBody)
}

export const editProfileApi = (reqBody, reqHeader) => {
    return commonApi('PUT', `${serverUrl}/update`, reqBody, reqHeader)
}

// fetching questions 

export const fetchQuestionsApi = (difficulty,subject) => {
    return commonApi('GET', `https://quizapi.io/api/v1/questions?limit=10&difficulty=${difficulty}&subject=${subject}`, {}, {
        "Content-Type": "application/json",
        "X-Api-Key": "sRpa7uJ5d3lW3UiqlF5S1xuhlzvZL5xx5v2Jmhhv"  // API Key required for authorization);
    })}