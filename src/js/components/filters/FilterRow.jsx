import React from "react";
import Checkbox from "../custom/Checkbox.jsx";
import Label from "../custom/Label.jsx";
import Rating from "../custom/Rating.jsx";

const FilterRow = ({type, chosen, item, count, onStateChanged}) => {
    return (
        <div className="FilterRow">
            {
                (type === "More") ?
                    <div className="DropDownIcon" onClick={onStateChanged}/> :
                    <Checkbox
                        checked={chosen}
                        onStateChanged={onStateChanged}
                    />
            }
            {
                (type === "rating") ?
                    <Rating
                        rating={item}
                        maxRating={5}
                    /> :
                    <Label
                        color={type === "More" ? "primary" : "dark"}
                        className="FilterContent"
                        content={item}
                    />
            }
            <Label
                color={type === "More" ? "primary" : "grey"}
                content={count}/>
        </div>
    );
};

export default FilterRow;