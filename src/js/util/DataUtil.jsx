import FilterBlock from "../components/filters/FilterBlock.jsx";
import * as React from "react";
import FilterOrientationBlock from "../components/filters/orientation/FilterOrientationBlock.jsx";
import FilterColorBlock from "../components/filters/color/FilterColorBlock.jsx";

/**
 * już po samych importach podejrzewałem, że coś tutaj będzie nie tak :)
 * w takich miejscach powinniśmy raczej omijać jakiekolwiek komponenty
 *
 * zwróćmy także uwagę, że stan początkowy aplikacji może przyjść z serwera. Wtedy na pewno nie będzie to czysty json,
 * nie będzie definicji komponentu
 *
 * proponuje zwracać jsona + dla każdego pola dodatkowe pole type i to jego wykorzystujesz to wyświetlania w apliacji w
 * jakimś bloku switch czy if. Tam też powinno nastąpić powiązanie z konkretną akcją "activateFilter".
 */
const DataUtil = {

    getFilters: function (model) {
        var filters = [
            {
                name: "Orientation",
                properties: [{item: "horizontal", count: 0, chosen: true}, {item: "vertical", count: 0, chosen: false}],
                component: (activateFilter, properties, name, key) => <FilterOrientationBlock
                    key={key}
                    filters={properties}
                    activateFilter={(filterItem) => activateFilter(name, properties, properties.find(filter => filter.item === filterItem))}
                />
            },
            {
                name: "Size",
                properties: [{item: "90x50mm", count: 0, chosen: false}, {item: "85x55mm", count: 0, chosen: false}],
                component: (activateFilter, properties, name, key) => <FilterBlock
                    key={key}
                    title={name}
                    filters={properties}
                    activateFilter={(filter) => activateFilter(name, properties, filter)}
                />
            },
            {
                name: "Favorites",
                properties: [{item: "Only favorites", count: 0, chosen: false}],
                component: (activateFilter, properties, name, key) => <FilterBlock
                    key={key}
                    title={name}
                    filters={properties}
                    activateFilter={(filter) => activateFilter(name, properties, filter)}
                />
            },
            {
                name: "Rating",
                properties: [
                    {item: 5, count: 0, chosen: false}, {item: 4, count: 0, chosen: false},
                    {item: 3, count: 0, chosen: false}, {item: 2, count: 0, chosen: false},
                    {item: 1, count: 0, chosen: false}],
                component: (activateFilter, properties, name, key) => <FilterBlock
                    key={key}
                    title="Customer Rating"
                    subTitle="At least"
                    type="rating"
                    filters={properties}
                    activateFilter={(filter) => activateFilter(name, properties, filter)}
                />
            },
            {
                name: "Industry",
                properties: [
                    {item: "All", count: model.books.length, chosen: false},
                    {item: "Automotive", count: 0, chosen: true}, {item: "Fashion", count: 0, chosen: false},
                    {item: "Law", count: 0, chosen: true}, {item: "IT", count: 0, chosen: false},
                    {item: "Sport", count: 0, chosen: false}, {item: "Art", count: 0, chosen: false},
                    {item: "Modelling", count: 0, chosen: true}, {item: "Food", count: 0, chosen: false}],
                component: (activateFilter, properties, name, key) => <FilterBlock
                    key={key}
                    title={name}
                    filters={properties}
                    activateFilter={(filter) => activateFilter(name, properties, filter)}
                    visibleFiltersCount={7}
                />
            },
            {
                name: "Color",
                properties: [
                    {item: "#6a71e6", count: 0, chosen: false},
                    {item: "#0192ff", count: 0, chosen: true}, {item: "#61d2fe", count: 0, chosen: false},
                    {item: "#48dc6c", count: 0, chosen: true}, {item: "#fe4a65", count: 0, chosen: false},
                    {item: "#ff5534", count: 0, chosen: false}, {item: "orange", count: 0, chosen: false},
                    {item: "#fed201", count: 0, chosen: true}, {item: "#9fa0a4", count: 0, chosen: false}],
                component: (activateFilter, properties, name, key) => <FilterColorBlock
                    key={key}
                    filters={properties}
                    activateFilter={(filter) => activateFilter(name, properties, filter)}
                />
            },
            {
                name: "Style",
                properties: [
                    {item: "All", count: model.books.length, chosen: false},
                    {item: "Abstraction", count: 0, chosen: false}, {item: "Geometry", count: 0, chosen: false},
                    {item: "Men", count: 0, chosen: true}, {item: "Women", count: 0, chosen: false},
                    {item: "Children", count: 0, chosen: true}, {item: "Music", count: 0, chosen: false},
                    {item: "Vintage", count: 0, chosen: false}, {item: "Flower", count: 0, chosen: false},
                    {item: "Animals", count: 0, chosen: false}, {item: "House", count: 0, chosen: false}],
                component: (activateFilter, properties, name, key) => <FilterBlock
                    key={key}
                    title={name}
                    filters={properties}
                    activateFilter={(filter) => activateFilter(name, properties, filter)}
                    visibleFiltersCount={9}
                />
            }
        ];

        for (var i = 0; i < model.books.length; i++) {
            this.fillCounters("Size", model.books[i].size, filters);
            this.fillCounters("Orientation", model.books[i].orientation, filters);
            this.fillCounters("Rating", model.books[i].rating, filters);
            this.fillCounters("Industry", model.books[i].industry, filters);
            this.fillCounters("Color", model.books[i].color, filters);
            this.fillCounters("Style", model.books[i].style, filters);

            if (model.books[i].isFavorite) {
                //bez sensu ta pętla. Lepiej znaleźć taki filtr i zwiększać jego counter
                for (var j = 0; j < filters.length; j++) {
                    if (filters[j].name === "Favorites")
                        filters[j].properties[0].count += 1;
                }
            }

        }

        return filters;
    },

    fillCounters: function (filterName, bookProperty, filters) {
        for (var i = 0; i < filters.length; i++) {
            //bez sensu. Lepiej użyć np. underscore _.find()  i tam wykonać operacje
            if (filters[i].name === filterName) {
                for (var j = 0; j < filters[i].properties.length; j++) {
                    if (filters[i].properties[j].item === bookProperty) {
                        filters[i].properties[j].count += 1;
                        break;
                    }
                }
            }
        }
    },

    getModel: function () {
        var model = {
            books: []
        };

        var titles = ["Omater", "Driver", "Seven", "Plummer", "Jumper", "Abrahamoska", "Automobil", "Kilum", "Eleven", "Swimmer"];
        var orientation = ["horizontal", "vertical"];
        var sizes = ["90x50mm", "85x55mm"];
        var rating = [0, 1, 2, 3, 4, 5];
        var favorite = [false, true];
        var industry = ["Automotive", "Law", "Sport", "Modelling"];
        var colors = ["#6a71e6", "#0192ff", "#61d2fe", "#48dc6c", "#fe4a65", "#ff5534", "orange", "#fed201", "#9fa0a4"];
        var style = ["Abstraction", "Men", "Children", "Vintage", "Animals"];
        var icons = ["Book1.png", "Book2.png"];

        for (var i = 0; i < 97; i++) {
            model.books.push({
                title: this.getRandomArrayValue(titles),
                orientation: this.getRandomArrayValue(orientation),
                size: this.getRandomArrayValue(sizes),
                rating: this.getRandomArrayValue(rating),
                isFavorite: this.getRandomArrayValue(favorite),
                industry: this.getRandomArrayValue(industry),
                color: this.getRandomArrayValue(colors),
                style: this.getRandomArrayValue(style),
                icon: this.getRandomArrayValue(icons),
            });
        }

        return model;
    },

    //raczej do ArrayUtil'a
    getRandomArrayValue: function (array) {
        return array[Math.floor(Math.random() * (array.length))]
    }
};
export default DataUtil;