var ArrayUtils = require('./ArrayUtil');

var PagesUtil = {

    //bardzo nieczytelna funkcja. Może moglibyśmy napisać ją prościej?
    generatePagesNumbers: function (page, max) {
        if (max < 4)
            return ArrayUtils.getNextNumbers(max).map(current => {
                return {
                    number: current + 1,
                    clickable: page !== current + 1,
                    isCurrent: page === current + 1
                }
            });
        if (page === 1 || page === 2)
            return [{number: 1, clickable: page !== 1, isCurrent: page === 1},
                {number: 2, clickable: page !== 2, isCurrent: page === 2},
                {number: "...", clickable: false, isCurrent: false},
                {number: max, clickable: true, isCurrent: false}];
        if (page === max || page === max - 1)
            return [{number: 1, clickable: page !== 1, isCurrent: page === 1},
                {number: "...", clickable: false, isCurrent: false},
                {number: max - 1, clickable: page !== max - 1, isCurrent: page === max - 1},
                {number: max, clickable: page !== max, isCurrent: page === max}];
        return [{number: 1, clickable: true, isCurrent: false},
            {number: "...", clickable: false, isCurrent: false},
            {number: max - 1, clickable: false, isCurrent: true},
            {number: "...", clickable: false, isCurrent: false},
            {number: max, clickable: true, isCurrent: false}]
    }

};

module.exports = PagesUtil;