import commonApi from "./commonApi";
import serverUrl from "./serverUrl";

export const registerApi=(reqBody)=>{
    return commonApi('POST',`${serverUrl}/register`,reqBody)
}

export const loginApi=(reqBody)=>{
    return commonApi('POST',`${serverUrl}/login`,reqBody)
}