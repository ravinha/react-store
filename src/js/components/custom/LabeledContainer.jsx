import React from "react";
import Label from "./Label.jsx";

//jak już coś to powinno się znaleźc w komponencie Label (jako props np).
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