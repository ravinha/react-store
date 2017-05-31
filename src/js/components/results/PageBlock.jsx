import React from "react";
import Label from "../custom/Label.jsx";

export default class PageBlock extends React.Component {

    constructor(props) {
        super(props);
        this.selectPage = this.selectPage.bind(this);
    }

    selectPage() {
        if (this.props.page.clickable) {
            this.props.selectPage(this.props.page.number);
        }
    }

    render() {
        return (
            <div className="PageBlock" onClick={this.selectPage}>
                <Label content={this.props.page.number}/>
            </div>
        );
    }
}
