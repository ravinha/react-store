import React from "react";
import Label from "../custom/Label.jsx";
import LayoutSelector from "../custom/LayoutSelector.jsx";
import Select from "../custom/Select.jsx";

export default class ResultsHeader extends React.Component {

    render() {
        return (
            <div className="ResultsHeader">
                <Label
                    color="dark"
                    bold={true}
                    className="margin"
                    content={`Search Results: `}
                />
                <Label
                    content={`${this.props.count}`}/>
                <Select
                    items={["20", "40", "80", "All"]}
                    title="Show:"
                    primary="20"
                    onClick={this.props.selectItemsPerPage}
                />
                <LayoutSelector
                    selected={this.props.columns === 4}
                    columns={4}
                    selectColumns={this.props.selectColumns}
                />
                <LayoutSelector
                    selected={this.props.columns === 3}
                    columns={3}
                    selectColumns={this.props.selectColumns}
                />
                <LayoutSelector
                    selected={this.props.columns === 2}
                    columns={2}
                    selectColumns={this.props.selectColumns}
                />
            </div>
        );
    }
}
