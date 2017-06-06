import React from "react";
import ColorFilter from "./ColorFilter.jsx";
import * as ArrayUtils from "../../../util/ArrayUtil";

const ColorRow = ({type}) => {

    var colors = ArrayUtils.getNextNumbers(10);
    return (
        <div className="ColorRow">
            {
                colors.map((color, i) =>
                    <ColorFilter
                        key={i}
                        last={color === 9}
                        color={color + 1}
                        type={type}
                    />
                )
            }
        </div>
    );
};
export default ColorRow;