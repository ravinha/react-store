import React from "react";
import Label from "./Label.jsx";

const LabeledContainer = ({color, bold, className, content}) => {
    return (
        <div className="LabeledContainer">
            <Label
                color={color}
                bold={bold}
                className={className}
                content={content}
            />
        </div>
    );
};

export default LabeledContainer;