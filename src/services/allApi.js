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

export const getStreakDetailsApi = (reqHeaders) => {
    return commonApi('POST', `${serverUrl}/streak`, {},reqHeaders)
}

export const getStreaksApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/get-streak`, {},reqHeaders)
}

// add gifts
export const addOnTimeApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/addtime-gift`, {},reqHeaders)
}
export const skipGiftApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/skip-gift`, {},reqHeaders)
}
export const getHintApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/hint`, {},reqHeaders)
}
export const pauseTimeApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/pause-time`, {},reqHeaders)
}

// get all gifts
export const getAllGiftsApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/all-gifts`, {},reqHeaders)
}

// remove gifts
export const removeAddTimeGiftsApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/remove-addtime`, {},reqHeaders)
}
export const removeSkipGiftsApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/remove-skip`, {},reqHeaders)
}
export const removeHintGiftsApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/remove-hint`, {},reqHeaders)
}
export const removePauseGiftsApi = (reqHeaders) => {
    return commonApi('GET', `${serverUrl}/remove-pause`, {},reqHeaders)
}