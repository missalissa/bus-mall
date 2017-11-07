'use strict';

let clicks = 0;
let shown = 0;

// Product Data

let allProducts = [];

// for (let i = 0; i < 25; i ++) {
//     appendRandomProduct();
// }


// Constructor & Instances
function Product(name, id, src) {
    this.name = name;
    this.id = id;
    this.src = './images/' + src;
    this.votes = 0;
    this.shown = 0;

    allProducts.push(this); 
} 

// number of votes; needs to tie click function

Product.prototype.votes = function() {
    this.votes += 1;
};


// number of displays

Product.prototype.shown = function() {
    this.shown += 1;
};

Product.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.classList.add(this.name);

    return ele;
}


function buildProducts () {
    const bag = new Product ('R2D2 Travel Bag', 'bag', 'bag.jpg');
    const banana = new Product ('Banana Slicer', 'banana', 'banana.jpg' );
    const bathroom = new Product ('Bathroom', 'bathroom', 'bathroom.jpg');
    const boots = new Product ('Boots', 'boots', 'boots.jpg');
    const breakfast = new Product ('Breakfast', 'breakfast', 'breakfast.jpg');
    const bubblegum = new Product ('Bubblegum', 'bubblegum', 'bubblegum.jpg');
    const chair = new Product ('Chair', 'chair', 'chair.jpg');
    const cthulhu = new Product ('Cthulhu', 'cthulhu', 'cthulhu.jpg');
    const dogduck = new Product ('Dog Duck', 'dogduck', 'dog-duck.jpg');
    const dragon = new Product ('Dragon', 'dragon', 'dragon.jpg');
    const pen = new Product ('Pen', 'pen', 'pen.jpg');
    const petsweep = new Product ('Pet Sweep', 'petsweep', 'pet-sweep');
    const scissors = new Product ('Scissors', 'scissors', 'scissors.jpg');
    const shark = new Product ('Shark', 'shark', 'shark.jpg');
    const sweep = new Product ('Sweep', 'sweep', 'sweep.png');
    const tauntaun = new Product ('Tauntaun', 'tauntaun', 'tauntaun.jpg');
    const unicorn = new Product ('Unicorn', 'unicorn', 'unicorn.jpg');
    const usb = new Product ('USB', 'usb', 'usb.gif');
    const watercan = new Product ('Water Can', 'watercan', 'water-can.jpg');
    const wineglass = new Product ('Wine Glass', 'wineglass', 'wine-glass.jpg');
}

function appendRandomProduct() {
    const survey = document.getElementById('survey');

    // select random product object from product array, save in randomProduct
    randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
    const randomProductEle = randomProduct.build(); // returns img element
    survey.appendChild(randomProductEle);
}


function endSurvey () {
    // remove click listener on survey section
    const survey = document.getElementById('survey');
    survey.removeEventListener('click', clickHandler);

    console.table(allProducts);
}