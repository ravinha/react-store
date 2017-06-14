import React from "react";
import Label from "../custom/Label.jsx";

/**
 * zamiast wyświetlania komponentu dałbym w obiekcie filtrów typ i po prostu titaj w pętli switch/if i osadzał poszczególne filtry
 * wtedy nie zawsze musisz przesyłać komplet tych samych propsów do każdego z nich
 * json taki może przyjść z serwera
 * same korzyści :)
 *
 * kolejna, rzecz to lepiej wyszukiwać i refaktoryzować taki kod
 */
const FiltersView = ({activateFilter, filters}) => {
    return (
        <div className="FiltersView">
            <Label
                color="dark"
                bold={true}
                className="big"
                content="Narrow results"
            />
            {
                filters.map((filter, i) => {
                    return filter.component(activateFilter, filter.properties, filter.name, i)
                })
            }
        </div>
    );
};

export default FiltersView;
