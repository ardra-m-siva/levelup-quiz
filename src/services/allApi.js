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
    return commonApi('GET',`${serverUrl}/api/questions?difficulty=${difficulty}&subject=${subject}`) 
}
    