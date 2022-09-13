import React from "react";
import ProductCard from "./ProductCard";
import {toysData} from "../data/Data";

const ToysContent = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {toysData.map((product, index) => (
        <ProductCard item={product} key={index} />
      ))}
    </div>
  );
};
export default ToysContent;
