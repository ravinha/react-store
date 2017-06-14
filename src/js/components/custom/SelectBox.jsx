import React from "react";
import Label from "./Label.jsx";


//przeczytaj komentarz w Select.jsx
export default class SelectBox extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseEnterLeave = this.onMouseEnterLeave.bind(this);
        this.state = {
            entered: false
        }
    }

    onMouseEnterLeave(entered) {
        this.setState({
            entered: entered
        })
    }

    render() {
        var first = this.props.position === "first";
        var last = this.props.position === "last";
        var firstClass = first ? " FirstSelectBox" : " NotFirstSelectBox";
        var lastClass = last ? " LastSelectBox" : "";
        var hiddenClass = this.props.isDropped ? "" : " HiddenBox";
        var enteredClass = this.state.entered ? " EnteredBox" : "";
        return (
            <div
                className={`SelectBox${firstClass}${lastClass}${hiddenClass}${enteredClass}`}
                onClick={() => this.props.select(this.props.name)}
                onMouseEnter={() => this.onMouseEnterLeave(true)}
                onMouseLeave={() => this.onMouseEnterLeave(false)}>
                {
                    first ?
                        <div className="FirstSelectBoxContent">
                            <Label content={this.props.title}/>
                            <Label content={this.props.name}/>
                            <img
                                src={require('../../../resources/icons/DropDown.png')}
                                className="SelectBox__dropDown"
                            />
                        </div>
                        :
                        <Label content={this.props.name}/>
                }
            </div>
        );
    }
}
