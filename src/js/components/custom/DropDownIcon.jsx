import React from "react";

const DropDownIcon = ({onStateChanged}) => {
    return (
        <div className="DropDownIcon" onClick={onStateChanged}/>
    );
};
export default DropDownIcon;