import React from "react";

const Label = ({color, bold, className, content}) => {

        var _color = color === "dark" ? "Label__dark" : "Label";
        var _bold = bold ? " Label__bold" : "";
        var _className = className ? " Label__" + className : "";
        return (
            <div className={"Label " + _color + _bold + _className}>
                {content}
            </div>
        );
};

export default Label;