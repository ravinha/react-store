import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import ColorRow from "./ColorRow.jsx";

const FilterColorBlock = () => {
    return (
        <div className="FilterBlock">
            <FilterBlockHeader title="Color" subTitle="Choose color(s)"/>
            <ColorRow/>
        </div>
    );
};
export default FilterColorBlock;