import React from "react";
import ProductCard from "./ProductCard";
import { electronicsData } from "../data/Data";

const ElectronicsContent = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {electronicsData.map((product, index) => (
        <ProductCard item={product} key={index} />
      ))}
    </div>
  );
};

export default ElectronicsContent;
