var DataUtil = {

    getFilters: function () {
        return {
            size: [{item: "90x50mm", count: 0, chosen: true}, {item: "85x55mm", count: 0, chosen: false}],
            favorites: [{item: "Only favorites", count: 0, chosen: false}],
            industry: [
                {item: "All", count: 3123, chosen: false},
                {item: "Automotive", count: 22, chosen: false}, {item: "Fashion", count: 0, chosen: false},
                {item: "Law", count: 0, chosen: false}, {item: "IT", count: 0, chosen: false},
                {item: "Sport", count: 0, chosen: false}, {item: "Art", count: 0, chosen: false},
                {item: "Modelling", count: 11, chosen: true}, {item: "Food", count: 0, chosen: false}],
            style: [
                {item: "All", count: 0, chosen: false},
                {item: "Abstraction", count: 0, chosen: false}, {item: "Geometry", count: 0, chosen: false},
                {item: "Men", count: 0, chosen: false}, {item: "Women", count: 0, chosen: false},
                {item: "Children", count: 0, chosen: false}, {item: "Music", count: 0, chosen: true},
                {item: "Vintage", count: 0, chosen: false}, {item: "Flower", count: 0, chosen: false},
                {item: "Animals", count: 0, chosen: false}, {item: "House", count: 0, chosen: false}]
        }
    },

    getModel: function () {
        var model = {
            books: []
        };

        for (var i = 0; i < 97; i++) {
            model.books.push({
                title: "product " + i,
                orientation: "horizontal",
                size: "90x50mm",
                rating: 1,
                isFavorite: false,
                industry: "Sport",
                color: "red",
                style: "Music",
                icon: "Book1.png"
            });
        }

        return model;
    }
};

module.exports = DataUtil;