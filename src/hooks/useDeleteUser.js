// import {useEffect, useState} from 'react';
// import apiUser from '../api/apiUser';
// import {CancelToken} from 'apisauce';

// export default function useDeleteUser(){
//     const [users, setusers]=useState([])

//     useEffect(
//         ()=>{
//             const source=CancelToken.source();
//             const deleteUsers=async()=>{
//                 const response = await apiUser.del(source.token, CancelToken)
//                 setusers(response)
//             }
//             deleteUsers()
//             return ()=>{source.cancel();}

//         },
//         []
//     )

//     return users
// }

import { useEffect, useContext } from 'react';
import { CancelToken } from 'apisauce';
import apiUser  from '../api/apiUser';
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom';

export default function useDeleteUser(users) {   
    
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            const deleteUser=async()=>{
                response = await apiUser.del(user.token, source.token);
                if (response){
                    setAlert({msg:`User: ${user.first_name} Deleted`, user:'success'})
                    console.log("deleted: " , user.first_name)
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, user:'warning'})
                    navigate('/')
                    ///redirect to the login page
                }
            }
            if(user?.first_name){
                deleteUser();
            };
            return ()=>{source.cancel()}
        },[users]
    )
  
}