
import { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import apiUser  from '../api/apiUser';
import { AppContext } from '../context/AppContext'

export default function useEditUser(users) {   
    let response
    const {user, setAlert} =useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const editUsers=async()=>{
                response = await apiUser.put(user.token, users, source.token);
                if (response){
                    setAlert({msg:`User: ${users.name} Edited`, cat:'success'})
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(users?.first_name){
                editUsers();
            };
            return ()=>{source.cancel()}
        },[users]
    )
  
}
