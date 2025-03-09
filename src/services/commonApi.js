import axios from "axios" 

const commonApi=async (reqMethod, url, reqBody, reqHeaders)=>{
   const reqConfig={
        method:reqMethod,
        url,
        data:reqBody,
        headers:reqHeaders?reqHeaders : { "Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

 export default commonApi