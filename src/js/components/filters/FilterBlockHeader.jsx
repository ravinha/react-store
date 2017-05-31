import React from "react";
import Label from "../custom/Label.jsx";

export default class FilterBlockHeader extends React.Component {


    render() {
        return (
            <div className="FiltersBlockHeader">
                <Label
                    bold={true}
                    content={this.props.title}/>
                <img src={require('../../../resources/icons/close_mark.png')}
                     className="FiltersBlockHeader__close"/>
            </div>
        );
    }
}
