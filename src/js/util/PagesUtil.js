var PagesUtil = {
    generatePagesNumbers: function(page, max) {
        console.log("generated page from: "+page +" and max is: "+max);
        console.log(page===2);
        if (max < 4)
            return [...Array(max).keys()].map(current => {
                return {
                    number: current,
                    clickable: page !== current,
                    isCurrent: page === current
                }
            });
        console.log("generated page from: "+page +" and max is: "+max);
        if (page === 1 || page === 2)
            return [{number: 1, clickable: page !== 1, isCurrent: page === 1},
                {number: 2, clickable: page !== 2, isCurrent: page === 2},
                {number: "...", clickable: false, isCurrent: false},
                {number: max, clickable: true, isCurrent: false}];
        console.log("generated page from: "+page +" and max is: "+max);
        if (page === max || page === max - 1)
            return [{number: 1, clickable: page !== 1, isCurrent: page === 1},
                {number: "...", clickable: false, isCurrent: false},
                {number: max -1, clickable: page !== max - 1, isCurrent: page === max - 1},
                {number: max, clickable: page !== max, isCurrent: page === max}];
        console.log("generated page from: "+page +" and max is: "+max);
        return [{number: 1, clickable: true, isCurrent: false},
            {number: "...", clickable: false, isCurrent: false},
            {number: max - 1, clickable: false, isCurrent: true},
            {number: "...", clickable: false, isCurrent: false},
            {number: max, clickable: true, isCurrent: false}]
    }

};

module.exports = PagesUtil;