import {createContext, useState} from 'react';

export const AppContext = createContext();

const AppContextProvider=({children})=>{
    

    // get user out of local storage
    const getUserFromLS = ()=>{
        let user = localStorage.getItem('user')
        if (user){
            // parse will undo stringify; so if there is a user that is in storage then give me back the user as anobject
            return JSON.parse(user)
        }
    }
    // have _setUser has _ because want to override setUser that you export
    const [user, _setUser] = useState(getUserFromLS) 

    // below will use _setUser and save the setUser to local storage; you dont want someone to log in and when page refreshes you lose everything including token
    const setUser =()=>{
        // using stringify because cannot store objects in local storage
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }
    // now export the ability to see user and set the user (SetUser)
    const values={
        user,
        setUser
    }
    // return the JSX that will show the children and wrap it in our provider
    return (
        // values is the user and setUser(you have a const on line 9 that equals this). You have to tell it what values you want.
        // the AppContext is what you called the function and always put in .provider.
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider

