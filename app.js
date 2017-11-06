'use strict';

// Product Data

const allProducts = [];

// const allProducts = [
//         new Product ('R2D2 Travel Bag', 'bag'),
//         new Product ('Banana Slicer', 'banana'),
//         new Product ('Bathroom', 'bathroom'),
//         new Product ('Boots', 'boots'),
//         new Product ('Breakfast', 'breakfast'),
//         new Product ('Bubblegum', 'bubblegum'),
//         new Product ('Chair', 'chair'),
//         new Product ('Cthulhu', 'cthulhu'),
//         new Product ('Dog Duck', 'dogduck'),
//         new Product ('Dragon', 'dragon'),
//         new Product ('Pen', 'pen'),
//         new Product ('Pet Sweep', 'petsweep'),
//         new Product ('Scissors', 'scissors'),
//         new Product ('Shark', 'shark'),
//         new Product ('Sweep', 'sweep'),
//         new Product ('Tauntaun', 'tauntaun'),
//         new Product ('Unicorn', 'unicorn'),
//         new Product ('USB', 'usb'),
//         new Product ('Water Can', 'watercan'),
//         new Product ('Wine Glass', 'wineglass'),
// ];


// Constructor & Instances
function Product(name, id) {
    this.name = name;
    this.id = id;
    this.votes = 0;

    allProducts.push(this);
}

function buildProducts () {
    const bag = new Product ('R2D2 Travel Bag', 'bag');
    const banana = new Product ('Banana Slicer', 'banana' );
    const bathroom = new Product ('Bathroom', 'bathroom');
    const boots = new Product ('Boots', 'boots');
    const breakfast = new Product ('Breakfast', 'breakfast');
    const bubblegum = new Product ('Bubblegum', 'bubblegum');
    const chair = new Product ('Chair', 'chair');
    const cthulhu = new Product ('Cthulhu', 'cthulhu');
    const dogduck = new Product ('Dog Duck', 'dogduck');
    const dragon = new Product ('Dragon', 'dragon');
    const pen = new Product ('Pen', 'pen');
    const petsweep = new Product ('Pet Sweep', 'petsweep');
    const scissors = new Product ('Scissors', 'scissors');
    const shark = new Product ('Shark', 'shark');
    const sweep = new Product ('Sweep', 'sweep');
    const tauntaun = new Product ('Tauntaun', 'tauntaun');
    const unicorn = new Product ('Unicorn', 'unicorn');
    const usb = new Product ('USB', 'usb');
    const watercan = new Product ('Water Can', 'watercan');
    const wineglass = new Product ('Wine Glass', 'wineglass');
}
// Product.prototype.build = function () {
//     const allProducts = document.getElementById('products')
// }


// Display & Voting. Display images, 3 per page, randomly without repeating

const tracker = {
    opt1: document.getElementsByClassName('opt1')[0],
    opt2: document.getElementsByClassName('opt2')[0],
    opt3: document.getElementsByClassName('opt3')[0],
    displaySection: document.getElementById('products'),
    votes: 0,

    randomIndex: function (arr) {
        return Math.floor(Math.random() * arr.length);
    },

    getIndices: function (arr) {
        const selectedIndices = [];
        while (selectedIndices.length < 2) {
            const item = this.randomIndex(arr);

            // using indexOf
            if (selectedIndices.indexOf(item) === -1) {
                selectedIndices.push(item);
            }

            // using for loop
            // if (selectedIndices.length === 0) {
            //     selectedIndices.push(item);
            // }

            // for ( var i = 0 ; i < selectedIndices.length; i ++ ) {
            //     if ( selectedIndices[i] === item ) {
            //         break;
            //     } else {
            //         selectedIndices.push( item );
            //         break;
            //     }
            // }
        }

        return selectedIndices;
    },

    displayOptions: function () {
        // TODO get 3 random products
        const randomProduct = this.getIndices(allProducts);
        const index1 = randomProduct[0];
        const index2 = randomProduct[1];
        const index3 = randomProduct[2];

        const product1 = allProducts[index1];
        const product2 = allProducts[index2];
        const product3 = allProducts[index3];

        // TODO append to DOM
        this.opt1.innerText = product1.name;
        this.opt2.innerText = product2.name;
        this.opt3.innerText = product2.name;

        this.opt1.id = product1.id;
        this.opt2.id = product2.id;
        this.opt3.id = product2.id;

    },

    tallyVote: function (id) {
        this.votes += 1;

        // for loop
        // for ( var i = 0; i < allRestaurants.length; i ++ ) {
        //     var restaurant = allRestaurants[i];
        //     if ( restaurant.id === id ) {
        //         restaurant.votes += 1;
        //     }
        // }

        // for each loop
        allProducts.forEach(function moo(product) {
            if (product.id === id) {
                product.votes += 1;
            }
        });



        if (this.votes > 3) {
            this.showResults();
        }
    },

    showResults: function () {
        this.displaySection.removeEventListener('click', voteHandler);
        console.table(allproducts);
        // for ( var i = 0; i < allRestaurants.length; i ++ ) {
        //     var restaurant = allRestaurants[i];
        //     console.log( restaurant.name + ': ' + restaurant.votes );
        // }
    }
}


//****EVENT LISTENERS****//

tracker.displaySection.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id !== 'display') {
        tracker.tallyVote(event.target.id);
        tracker.displayOptions();
    }
}

//****INITIALIZE APP****//

buildProducts();
tracker.displayOptions();