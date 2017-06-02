import React from "react";
import Label from "../custom/Label.jsx";

export default class FilterBox extends React.Component {


    render() {
        return (
            <div className="FilterBox">
                <Label content={this.props.name}/>
                <img src={require('../../../resources/icons/CloseGrey.png')} className="FilterBox__close"/>
            </div>
        );
    }
}
