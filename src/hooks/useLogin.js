import {useEffect} from 'react'
import {getUser} from '../api/apiBasicAuth';
import { CancelToken } from 'apisauce';

export default function useLogin(loginCreds, setLoginCreds, setError, setUser) {
//get navigate

    
    
    useEffect(
        ()=>{
            const login = async (cancelToken)=>{
                console.log("login creds: ",loginCreds.email, loginCreds.password)
                let response = await getUser(loginCreds.email, loginCreds.password,cancelToken)
                console.log('useLogin response: ',response)
                if(response.user?.token){
                    setUser(response.user);
                    setLoginCreds({})
                    console.log('logged in', response.user.first_name);
                    return
                    // navigate to the home page
                }
                setError("useLogin setError",response.error);
            }
            const source = CancelToken.source()
            if (loginCreds.email && loginCreds.password)
            login(source.token)
            return ()=>{source.cancel()}
        },
        [loginCreds,  setLoginCreds, setError, setUser]
    )
    
}