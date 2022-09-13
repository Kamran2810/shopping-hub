import React from "react";
import Section from "./Section";
import { sectionData } from "../data/Data";

const Sections = () => {
  return (
    <div className="flex justify-between items-center p-5 sm:flex-col">
      {sectionData.map((section, index) => {
        return <Section item={section} key={index} />;
      })}
    </div>
  );
};

export default Sections;
