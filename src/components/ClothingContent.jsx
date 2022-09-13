import { React } from "react";
import ProductCard from "./ProductCard";
import { clothesData } from "../data/Data";

const ClothingContent = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {clothesData.map((product, index) => (
        <ProductCard item={product} key={index} />
      ))}
    </div>
  );
};
export default ClothingContent;
