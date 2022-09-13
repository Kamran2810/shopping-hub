import React from "react";
import { Typography } from "@mui/material";
import ElectronicsContent from "../components/ElectronicsContent";

const ElectronicsPage = () => {
  return (
    <>
      <Typography variant="h2" className="text-center uppercase shadow-2xl">
        Electronics
      </Typography>
      <ElectronicsContent />
    </>
  );
};

export default ElectronicsPage;
