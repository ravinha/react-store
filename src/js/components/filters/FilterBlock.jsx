import React from "react";
import FilterBlockHeader from "./FilterBlockHeader.jsx";
import FilterRow from "./FilterRow.jsx";

export default class FilterBlock extends React.Component {

    render() {
        //TODO DEFAULT VALUE PROPS SUBTITLE

        return (
            <div className="FilterBlock">
                <FilterBlockHeader title={this.props.title} subTitle={this.props.subTitle ? this.props.subTitle : ""}/>
                {
                    this.props.filters.map((filter, i) =>
                        <FilterRow
                            key={i}
                            item={filter.item}
                            type={this.props.type}
                            count={filter.count}
                            chosen={filter.chosen}
                            onStateChanged={() => this.props.activateFilter(filter)}
                        />
                    )
                }
            </div>
        );
    }
}

