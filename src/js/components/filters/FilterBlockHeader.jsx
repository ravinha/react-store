import React from "react";
import Label from "../custom/Label.jsx";

export default class FilterBlockHeader extends React.Component {


    render() {
        return (
            <div className="FiltersBlockHeader">
                <div className="TitleHeader">
                    <Label
                        bold={true}
                        className="big"
                        content={this.props.title}/>
                    <img src={require('../../../resources/icons/close_mark.png')}
                         className="TitleHeader__close"/>
                </div>
                <Label
                    bold={true}
                    color="dark"
                    content={this.props.subTitle}/>
            </div>
        );
    }
}
