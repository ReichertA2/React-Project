import React from "react";
import LoginForm from "../forms/LoginForm";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';

export default function Login() {
  const theme = useTheme();

  return (
    <Box sx={{width:500, height:500, backgroundColor:'#3F616D', padding:5, margin:'auto', backgroundImage: "linear-gradient(to top, #3f616d, #3e6a79, #3d7285, #3b7b92, #38849f, #36809a, #347d96, #327991, #30687a, #2e5865, #2b4850, #27383d);", opacity:'0.9'}}>
      <h4 style={{textAlign: 'center', fontSize:'2rem'}}>Login</h4>
      <LoginForm />
    </Box>
  );
}
