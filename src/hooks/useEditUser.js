// import React, {useEffect} from 'react'
// import apiUser from '../api/apiUser';
// import { CancelToken } from 'apisauce';

// export default function useEditUser(loginCreds, setLoginCreds, setError, setUser) {
// //get navigate
//     const login = async (cancelToken)=>{
//         const response = await apiUser(loginCreds.email, loginCreds.password,cancelToken)
//         console.log(response)
//         if(response.user?.token){
//             console.log('logged in');
//             setUser(response.user);
//             setLoginCreds({})
//             // navigate to the home page
//         }
//         setError(response.error);
//     }
    
    
//     useEffect(
//         ()=>{
//             const source = CancelToken.source()
//             if (loginCreds.email && loginCreds.password)
//             login(source.token)
//             return ()=>{source.cancel()}
//         },
//         [loginCreds,  setLoginCreds, setError, setUser]
//     )
    
// }