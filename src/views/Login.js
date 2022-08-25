import React from "react";
import LoginForm from "../forms/LoginForm";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import cloud from "../login_clouds.jpg";







export default function Login(props) {
  
  const theme = useTheme();
 

  return (

    // <Paper  style={{backgroundImage: `url(${cloud})`, backgroundSize: "cover", color: "#f5f5f5"}}>

    /* //   // backgroundImage: `url(${require('../login_clouds.jpg')})` ,
      //   backgroundImage:`url(${cloud})`,

       
        
      //   // backgroundRepeat: "no-repeat",
      //   // width: 100,
      //   // height:100,
      // }} */
    <Box  sx={{backgroundImage: `url(${cloud})` }}>
      
      
      <Box
        sx={{
          width: 500,
          height: 500,
          padding: 5,
          margin: "auto",
          backgroundColor: "rgba(0,0,0,0.4)",
          // marginTop: "5%",
        }}
      >
        <h4 style={{ textAlign: "center", fontSize: "2rem" }}>Login</h4>
        <LoginForm />
      </Box>
      {/* /* </Paper> */}
    </Box>
  );
}
