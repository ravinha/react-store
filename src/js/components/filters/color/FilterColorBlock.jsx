import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import ColorRow from "./ColorRow.jsx";
import Label from "../../custom/Label.jsx";
import LabeledContainer from "../../custom/LabeledContainer.jsx";

/**
 * tak jak w przypadku FiltruOrientacji całą logikę mógłbyś zawrzec w tutaj zamiast w ColorRow
 */
const FilterColorBlock = ({filters, activateFilter}) => {
    return (
        <div className="FilterBlock">
            <FilterBlockHeader
                title="Color"
                subTitle="Choose color(s)"
            />
            <ColorRow
                filters={filters}
                activateFilter={activateFilter}
            />
            <Label
                className="margin"
                content="or"
            />
            <Label
                bold={true}
                color="dark"
                className="margin"
                content="Use colors from your logo"
            />
            <LabeledContainer
                bold={true}
                color="dark"
                className="margin"
                content="UPLOAD LOGO"
            />
        </div>
    );
};
export default FilterColorBlock;