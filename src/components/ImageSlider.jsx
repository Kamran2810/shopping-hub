import React from "react";
import Carousel from "react-material-ui-carousel";
import Images from "./Images";
import { imagesData } from "../data/Data";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";

const ImageSlider = () => {
  return (
    <div>
      <Carousel IndicatorIcon={<AcUnitTwoToneIcon />}>
        {imagesData.map((item) => (
          <Images key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
