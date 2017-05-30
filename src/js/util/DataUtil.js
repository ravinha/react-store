var DataUtil = {

    getFilters: function () {
        return {
            size: [{item: "90x50mm", count: 0}, {item: "85x55mms", count: 0}],
            favorites: [{item: "Only favorites", count: 0}],
            industry: [
                {item: "All", count: 3123},
                {item: "Automotive", count: 22}, {item: "Fashion", count: 0},
                {item: "Law", count: 0}, {item: "IT", count: 0},
                {item: "Sport", count: 0}, {item: "Art", count: 0},
                {item: "Modelling", count: 11}, {item: "Food", count: 0}],
            style: [
                {item: "All", count: 0},
                {item: "Abstraction", count: 0}, {item: "Geometry", count: 0},
                {item: "Men", count: 0}, {item: "Women", count: 0},
                {item: "Children", count: 0}, {item: "Music", count: 0},
                {item: "Vintage", count: 0}, {item: "Flower", count: 0},
                {item: "Animals", count: 0}, {item: "House", count: 0}]
        }
    },

    getModel: function () {
        var model = {
            books: []
        };

        for (var i = 0; i < 100; i++) {
            model.books.push({
                title: "product " + i,
                orientation: "horizontal",
                size: "90x50mm",
                rating: 1,
                isFavorite: false,
                industry: "Sport",
                color: "red",
                style: "Music",
            });
        }

        return model;
    }
};

module.exports = DataUtil;