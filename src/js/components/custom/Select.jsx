import React from "react";
import SelectBox from "./SelectBox.jsx";

export default class Select extends React.Component {

    constructor(props) {
        super(props);
        this.selectHandler = this.selectHandler.bind(this);
        this.state = {
            items: this.props.items,
            primary: this.props.primary,
            isDropped: false
        }
    }

    selectHandler(item) {
        if (item === this.state.primary) {
            this.setState({
                isDropped: !this.state.isDropped
            })
        } else {
            this.setState({
                primary: item,
                isDropped: false
            });
            this.props.onClick(item)
        }
    }

    render() {
        return (
            <div className="Select">
                <SelectBox
                    isDropped={true}
                    position="first"
                    name={this.state.primary}
                    title={this.props.title}
                    select={this.selectHandler}
                />
                <ol>
                    {
                        this.state.items
                            .filter(bookCount => bookCount !== this.state.primary)
                            .map((bookCount, i) =>
                                <li key={i}>
                                    <SelectBox
                                        isDropped={this.state.isDropped}
                                        position={i === this.state.items.length - 2 ? "last" : ""}
                                        name={bookCount}
                                        select={this.selectHandler}
                                    />
                                </li>
                            )
                    }
                </ol>
            </div>
        )
    }
}
