import React from "react";
import LoginForm from "../forms/LoginForm";
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import cloud from "../login_clouds.jpg";
import Grid from "@mui/material/Grid";

export default function Login(props) {
  const theme = useTheme();

  return (
    // <Paper  style={{backgroundImage: `url(${cloud})`, backgroundSize: "cover", color: "#f5f5f5"}}>

    /* //   // backgroundImage: `url(${require('../login_clouds.jpg')})` ,
      //   backgroundImage:`url(${cloud})`,

       
        
      //   // 
      //   // width: 100,
      //   // height:100,
      // }} */

    <Grid
      sx={{
        backgroundImage: `url(${cloud})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        minHeight: 920,
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 500,
          padding: "3rem",
          // marginTop:"10px",
          margin: "auto",
          backgroundColor: "rgba(0,0,0,0.4)",

          // marginTop: "5%",
        }}
      >
        <h4 style={{ textAlign: "center", fontSize: "2rem", padding: "0px",}}>
          Login
        </h4>
        <LoginForm />
      </Box>
      {/* /* </Paper> */}
    </Grid>
  );
}
