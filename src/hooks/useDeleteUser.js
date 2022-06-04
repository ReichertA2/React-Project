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

export default function useDeleteUser(users) {   
    let response
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const deleteUser=async()=>{
                response = await apiUser.del(user.token, source.token);
                if (response){
                    setAlert({msg:`User: ${user.name} Deleted`, user:'success'})
                    console.log("deleted: " , user.first_name)
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, user:'warning'})
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