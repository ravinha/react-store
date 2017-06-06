import React from "react";
import Checkbox from "../custom/Checkbox.jsx";
import Label from "../custom/Label.jsx";
import Rating from "../custom/Rating.jsx";

const FilterRow = ({type, chosen, item, count, onStateChanged}) => {
        return (
            <div className="FilterRow">
                <Checkbox
                    checked={chosen}
                    onStateChanged={onStateChanged}
                />
                { type === "rating" ?
                    <Rating rating={item}/>
                    :
                    <Label
                        color="dark"
                        content={item}
                    />
                }
                <Label content={count}/>
            </div>
        );
};

export default FilterRow;