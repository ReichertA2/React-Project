import React from "react";
import LoginForm from "../forms/LoginForm";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';

export default function Login() {
  const theme = useTheme();

  return (
  
    <Box  sx={{width:500, height:500, padding:5, margin:'auto', backgroundColor:'rgba(0,0,0,0.05)', marginTop:"5%"}}>
      <h4 style={{textAlign: 'center', fontSize:'2rem'}}>Login</h4>
      <LoginForm />
    </Box>

  );
}
