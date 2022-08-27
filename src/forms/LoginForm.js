import React, {useContext, useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import { AppContext } from '../context/AppContext';
import Error from '../components/Error';
import useLogin from '../hooks/useLogin';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';


//Defining our yup validation
const FormSchema=Yup.object(
    {
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required()
    }
)

const initialValues={
    email:'',
    password:''
}


export default function LoginForm(){
    const {user, setUser} = useContext(AppContext);
    const [loginCreds, setLoginCreds] = useState({});
    const [error, setError] = useState('')
    
    
    useLogin(loginCreds, setLoginCreds, setError, setUser)

    const handleSubmit=(values)=>{
        console.log('login handleSubmit', values)
        setLoginCreds(values)
    }




    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })

    return(
        <Grid align='center' >
        <>

        <form style={{}} onSubmit={formik.handleSubmit} >
            <TextField 
                id="email"
                name="email"
                // fullWidth
                sx={{mb:2, mt:2, width:"80%"}}
                label="Email" 
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}            
            />
<div>
            <TextField
                id="password"
                name="password"
                type="password"
                // fullWidth
                sx={{mb:2, width:"80%"}}
                label="Password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}            
            />

           
            </div>
        </form>
        <Button type="submit" sx={{width:"80%", mb: 2, textTransform:'capitalize', fontSize:'18px'}}>Login</Button>
            
            <Error>{error}</Error>
        <p style={{textAlign:'left', marginLeft:'100px'}}>Not a member?</p>
        <Link to='/RegisterEdit' style={{ textDecoration:'none'}}><Button type="submit" variant='text'sx={{width:"20%", mt:0,position:'relative', left:'50px', top:'-48px', textTransform:'capitalize', fontSize:'16px' }}>{user.first_name?"Edit Profile":"Register"}</Button></Link> 
        
        </>
        </Grid>
    )

}