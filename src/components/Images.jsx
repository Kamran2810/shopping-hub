import React from "react";
import { Paper } from "@mui/material";

function Images({item}) {
  return (
    <Paper >
      <div className="slider flex justify-center ">
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "50%",
            padding: "10px",
            height: { sx: '25vh', md: '40vh', lg: '75vh'}
          }}
          
        />
      </div>
      <div className="img-title flex justify-center bg-[#171614] text-white p-[10px]">
        <h2>{item.title}</h2>
      </div>
    </Paper>
  );
}

export default Images;
