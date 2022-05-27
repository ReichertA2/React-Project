import apiClientNoAuth from './clientNoAuth';

const endpoint ='/user'; 

const post= async (data, cancelToken)=>{
    const response = await apiClientNoAuth(cancelToken).post(endpoint, data);
    return response.ok
}

export default {
    post,
}



