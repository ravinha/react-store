var DataUtil = {

    getFilters: function (model) {
        var filters = {
            size: [{item: "90x50mm", count: 0, chosen: false}, {item: "85x55mm", count: 0, chosen: false}],
            favorites: [{item: "Only favorites", count: 0, chosen: false}],
            orientation: [{item: "horizontal", count: 0, chosen: true}, {item: "vertical", count: 0, chosen: false}],
            rating: [
                {item: 5, count: 0, chosen: false},{item: 4, count: 0, chosen: false},
                {item: 3, count: 0, chosen: false},{item: 2, count: 0, chosen: false},
                {item: 1, count: 0, chosen: false}],
            industry: [
                {item: "All", count: model.books.length, chosen: false},
                {item: "Automotive", count: 0, chosen: true}, {item: "Fashion", count: 0, chosen: false},
                {item: "Law", count: 0, chosen: true}, {item: "IT", count: 0, chosen: false},
                {item: "Sport", count: 0, chosen: false}, {item: "Art", count: 0, chosen: false},
                {item: "Modelling", count: 0, chosen: true}, {item: "Food", count: 0, chosen: false}],
            style: [
                {item: "All", count: model.books.length, chosen: false},
                {item: "Abstraction", count: 0, chosen: false}, {item: "Geometry", count: 0, chosen: false},
                {item: "Men", count: 0, chosen: true}, {item: "Women", count: 0, chosen: false},
                {item: "Children", count: 0, chosen: true}, {item: "Music", count: 0, chosen: false},
                {item: "Vintage", count: 0, chosen: false}, {item: "Flower", count: 0, chosen: false},
                {item: "Animals", count: 0, chosen: false}, {item: "House", count: 0, chosen: false}]
        };

        for (var i = 0; i < model.books.length; i++) {
            this.fillCounters(filters.size, model.books[i].size);
            this.fillCounters(filters.industry, model.books[i].industry);
            this.fillCounters(filters.style, model.books[i].style);
            this.fillCounters(filters.orientation, model.books[i].orientation);
            this.fillCounters(filters.rating, model.books[i].rating);

            if (model.books[i].isFavorite) {
                filters.favorites[0].count += 1;
            }

        }

        return filters;
    },

    fillCounters: function (filtersArray, bookProperty) {
        for (var j = 0; j < filtersArray.length; j++) {
            if (filtersArray[j].item === bookProperty) {
                filtersArray[j].count += 1;
                break;
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
        var colors = ["red", "blue", "orange"];
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

    getRandomArrayValue: function (array) {
        return array[Math.floor(Math.random() * (array.length))]
    }
};

module.exports = DataUtil;