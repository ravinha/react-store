import React from "react";
import FilterBlockHeader from "./FilterBlockHeader.jsx";
import FilterRow from "./FilterRow.jsx";

export default class FilterBlock extends React.Component {

    constructor(props) {
        super(props);
        this.onDropDown = this.onDropDown.bind(this);
        this.state = {
            visibleFiltersCount: props.visibleFiltersCount ? props.visibleFiltersCount : props.filters.length
        }
    }

    onDropDown() {
        this.setState({
            visibleFiltersCount: this.props.filters.length
        })
    }

    render() {
        var hiddenFiltersCount =
            this.props.filters
                .slice(this.state.visibleFiltersCount, this.props.filters.length)
                .map(a => a.count)
                .reduce((a, b) => a + b, 0);
        return (
            <div className="FilterBlock">
                <FilterBlockHeader title={this.props.title} subTitle={this.props.subTitle ? this.props.subTitle : ""}/>
                {
                    this.props.filters.slice(0, this.state.visibleFiltersCount).map((filter, i) =>
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
                {
                    this.state.visibleFiltersCount < this.props.filters.length &&
                    <FilterRow
                        item="Show more..."
                        type="More"
                        count={hiddenFiltersCount}
                        onStateChanged={this.onDropDown}
                    />
                }
            </div>
        );
    }
};
// ({title, subTitle = "", type, filters, activateFilter, visibleFiltersCount = filters.length - 1}) => {
