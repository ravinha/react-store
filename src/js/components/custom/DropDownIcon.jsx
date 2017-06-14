import React from "react";

/**
 * ten komponent powinien zniknąć
 */
const DropDownIcon = ({onStateChanged}) => {
    return (
        <div className="DropDownIcon" onClick={onStateChanged}/>
    );
};
export default DropDownIcon;