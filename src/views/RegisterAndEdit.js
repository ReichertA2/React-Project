import React from "react";
import RegisterEditForm from "../forms/RegisterEditForm";
import Box from "@mui/material/Box";
import cloud from "../login_clouds.jpg";

export default function RegisterAndEdit() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cloud})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        minHeight: 920,
      }}
    >
      <Box
        style={{}}
        sx={{
          width: 500,
          height: 500,
          padding: "3rem",
          margin: "auto",
          backgroundColor: "rgba(0,0,0,0.4)",
          position: "relative",
          top: "150px",
          color: "white",

          // display: "inline-block",

          // marginTop: "5%",
        }}
      >
        <RegisterEditForm />
      </Box>
      {/* /* </Paper> */}
    </Box>
  );
}
