import React from "react";
import {generatePagesNumbers} from "../../util/PagesUtil";
import PageBlock from "./PageBlock.jsx";

export default class ResultsFooter extends React.Component {


    render() {
        return (
            <div className="ResultsFooter">
                <img src={require('../../../resources/icons/ArrowLeft.png')}/>
                {
                    generatePagesNumbers(this.props.page, this.props.max).map((page, i) =>
                        <PageBlock
                            key={i}
                            page={page}
                            selected={page.number === this.props.page}
                            selectPage={this.props.selectPage}
                        />
                    )
                }
                <img src={require('../../../resources/icons/ArrowRight.png')}/>
            </div>
        );
    }
}
