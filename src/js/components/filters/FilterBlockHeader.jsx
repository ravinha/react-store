import React from "react";
import Label from "../custom/Label.jsx";

const FilterBlockHeader = ({title, subTitle = ""}) => {
    return (
        <div className="FiltersBlockHeader">
            <div className="TitleHeader">
                <Label
                    bold={true}
                    className="big"
                    content={title}/>
                <img src={require('../../../resources/icons/close_mark.png')}
                     className="TitleHeader__close"/>
            </div>
            <Label
                bold={true}
                color="dark"
                content={subTitle}/>
        </div>
    );
};

export default FilterBlockHeader;