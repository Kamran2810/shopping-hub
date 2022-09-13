import React from "react";
import { Typography } from "@mui/material";
import ClothingContent from "../components/ClothingContent";

const ClothingPage = () => {
  return (
    <>
      <Typography variant="h2" className="text-center uppercase shadow-2xl">
        Clothes
      </Typography>
      <ClothingContent />
    </>
  );
};

export default ClothingPage;
