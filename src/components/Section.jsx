import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Section = ({ item }) => {
  return (
    <>
      <Link to={item.title}>
        <div className="flex-1 m-2 shadow-lg overflow-hidden rounded-md relative">
          <img src={item.image} alt={item.title} className="w-[100%]" />
          <div>
            <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
              <Button
                sx={{ color: "white", border: 2, fontSize: "24px" }}
                variant="outlined"
                size="50"
              >
                {item.title}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Section;
