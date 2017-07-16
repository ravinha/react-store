import React from "react";
import classNames from "classnames";

const Label = ({color, bold, className, content}) => {
    var labelClassNames = classNames(
        'Label',
        {
            [`Label__${color}`]: color,
            'Label__bold': bold,
            [`Label__${className}`]: className,
        });
    return (
        <div className={labelClassNames}>
            {content}
        </div>
    );
};

export default Label;