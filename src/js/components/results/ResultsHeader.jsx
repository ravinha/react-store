import React from "react";
import Label from "../custom/Label.jsx";
import LayoutSelector from "../custom/LayoutSelector.jsx";
import Select from "../custom/Select.jsx";

const ResultsHeader = ({count, selectItemsPerPage, selectColumns, columns}) => {
    return (
        <div className="ResultsHeader">
            <Label
                color="dark"
                bold={true}
                className="left"
                content={`Search Results: `}
            />
            <Label
                className={"right"}
                content={`${count}`}/>
            <Select
                items={["20", "40", "80", "All"]}
                title="Show:"
                primary="20"
                onClick={selectItemsPerPage}
            />
            <LayoutSelector
                selected={columns === 4}
                columns={4}
                selectColumns={selectColumns}
            />
            <LayoutSelector
                selected={columns === 3}
                columns={3}
                selectColumns={selectColumns}
            />
            <LayoutSelector
                selected={columns === 2}
                columns={2}
                selectColumns={selectColumns}
            />
        </div>
    );
};
export default ResultsHeader;