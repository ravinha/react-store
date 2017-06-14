import React from "react";

const Label = ({color, bold, className, content}) => {

        var _color = color ? `Label__${color}` : "";
        var _bold = bold ? " Label__bold" : "";
        var _className = className ? " Label__" + className : "";
        //z classnames npm'a

	/**
     * formatowanie
     *
     * zastanawiam się czy jest większy sens wrzuceania każdego napisu do labela. Akurat tekst wystepuje w tylu formach, że
     * lepiej go pisać normalnie w strukturze html i dodawać klasy css. Co innego inne kontrolki
	 */
	return (
        <div className={"Label " + _color + _bold + _className}>
                {content}
            </div>
        );
};

export default Label;