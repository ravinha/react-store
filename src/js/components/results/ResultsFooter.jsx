import React from "react";
import {generatePagesNumbers} from "../../util/PagesUtil";
import PageBlock from "./PageBlock.jsx";

const ResultsFooter = ({page, max, selectPage}) => {
    return (
        <div className="ResultsFooter">
            <img src={require('../../../resources/icons/ArrowLeft.png')}/>      //powinno być realizowane jako <a> bądź <button>, grafika jako svg/icon font
            {
                generatePagesNumbers(page, max).map((_page, i) =>
                    <PageBlock
                        key={i}
                        page={_page}
                        selected={_page.number === page}
                        selectPage={selectPage}
                    />
                )
            }
            <img src={require('../../../resources/icons/ArrowRight.png')}/>
        </div>
    );
};
export default ResultsFooter;