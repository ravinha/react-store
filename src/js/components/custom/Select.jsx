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

        //staraj się pisać tak metody aby wykonywały tylko raz setState(), nawet jeżeli rozróżnione jest to if'em
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
                                    /**
                                    * jak dla mnie tutaj mogłeś zawszeć ten komponent (nie potrzebuje aż takiej logiki
                                    * jak to przedstawiłeś w SelectBox).
                                    */
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
