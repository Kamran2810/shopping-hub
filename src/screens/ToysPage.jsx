import React from "react";
import { Typography } from "@mui/material";
import ToysContent from "../components/ToysContent";

const ToysPage = () => {
  return (
    <>
      <Typography variant="h2" className="text-center uppercase shadow-2xl">
        Toys
      </Typography> 
      <ToysContent />
    </>
  );
};

export default ToysPage;
