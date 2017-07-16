import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import ColorFilter from "./ColorFilter.jsx";
import Label from "../../custom/Label.jsx";
import LabeledContainer from "../../custom/LabeledContainer.jsx";

const FilterColorBlock = ({filters, activateFilter}) => {
    return (
        <div className="FilterBlock">
            <FilterBlockHeader
                title="Color"
                subTitle="Choose color(s)"
            />
            <div className="ColorRow">
                {
                    filters.concat([10]).map((filter, i) =>
                        <ColorFilter
                            key={i}
                            last={i === 9}
                            color={filter.item}
                            checked={filter.chosen}
                            activateFilter={() => activateFilter(filter)}
                        />
                    )
                }
            </div>
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