'use script';

let clicks = 0;
let shown = 0;
let allProducts = []; // pushed from constructor function


// product constructor function

function Product(name, id, src) {
    this.name = name;
    this.id = id;
    this.src = './images/' + src;
    this.clicked = 0;  // votes
    this.shown = 0;

    allProducts.push(this);
}

// function renderProducts() {
        const bag = new Product('R2D2 Travel Bag', 'bag', 'bag.jpg');
        const banana = new Product('Banana Slicer', 'banana', 'banana.jpg' );
        const bathroom = new Product('Bathroom', 'bathroom', 'bathroom.jpg');
        const boots = new Product ('Boots', 'boots', 'boots.jpg');
        const breakfast = new Product ('Breakfast', 'breakfast', 'breakfast.jpg');
        const bubblegum = new Product ('Bubblegum', 'bubblegum', 'bubblegum.jpg');
// }
// renderProducts();
console.log(allProducts);


// number of votes; needs to tie click function

Product.prototype.wasClicked = function () {
    this.clicked += 1;
};


// number of displays

Product.prototype.wasShown = function() {
    this.shown += 1;
};


Product.prototype.render = function () {
    const sectionSurvey = document.getElementById('survey');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    img.src = this.src;
    h2.textContent = this.name
    // TODO check if it's adding a id
    img.classList.add(this.id);
    sectionSurvey.appendChild(img);
    sectionSurvey.appendChild(h2);
    // return img;
};

// show three random images 
function showRandomProduct () {     // use the random function, retrieve by index 
    const survey = document.getElementById('survey');

    // show random image from allProducts array, save in randomProduct
    randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];
    const randomProductEle = randomProduct.render(); // returns img element
}

for (let i = 0; i < 3; i++) {
    showRandomProduct();
}

// backup of new Products

// const bag = new Product ('R2D2 Travel Bag', 'bag', 'bag.jpg');
// const banana = new Product ('Banana Slicer', 'banana', 'banana.jpg' );
// const bathroom = new Product ('Bathroom', 'bathroom', 'bathroom.jpg');
// const boots = new Product ('Boots', 'boots', 'boots.jpg');
// const breakfast = new Product ('Breakfast', 'breakfast', 'breakfast.jpg');
// const bubblegum = new Product ('Bubblegum', 'bubblegum', 'bubblegum.jpg');
// const chair = new Product ('Chair', 'chair', 'chair.jpg');
// const cthulhu = new Product ('Cthulhu', 'cthulhu', 'cthulhu.jpg');
// const dogduck = new Product ('Dog Duck', 'dogduck', 'dog-duck.jpg');
// const dragon = new Product ('Dragon', 'dragon', 'dragon.jpg');
// const pen = new Product ('Pen', 'pen', 'pen.jpg');
// const petsweep = new Product ('Pet Sweep', 'petsweep', 'pet-sweep');
// const scissors = new Product ('Scissors', 'scissors', 'scissors.jpg');
// const shark = new Product ('Shark', 'shark', 'shark.jpg');
// const sweep = new Product ('Sweep', 'sweep', 'sweep.png');
// const tauntaun = new Product ('Tauntaun', 'tauntaun', 'tauntaun.jpg');
// const unicorn = new Product ('Unicorn', 'unicorn', 'unicorn.jpg');
// const usb = new Product ('USB', 'usb', 'usb.gif');
// const watercan = new Product ('Water Can', 'watercan', 'water-can.jpg');
// const wineglass = new Product ('Wine Glass', 'wineglass', 'wine-glass.jpg');

// let allProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];


// display images

// for (let i = 0; i < 6; i ++) {  // change to 25, for number of entries
//     appendRandomProduct();
// };

// // //****FROM CLASS DEMO FRUITS****//

// /* attaching event listeners to every image tag */
// // const imgs = document.querySelectorAll('img');
// // console.log( imgs );

// // will give each individual img an event listener
// // for (let i = 0; i < imgs.length; i++) {
//     //     imgs[i].addEventListener('click', function (e) {
//         //         console.log('heard by the img', e.target);
//         //     });
//         // }
        

// // will not work because imgs is not a single element
// // imgs.addEventListener('click', clickHandler);


// /* demo event propagation */
// // const game = document.getElementById('game');
// // const main = document.querySelector('main');

// // game.addEventListener('click', function (e) {
// //     console.log('heard by game', e.target);
// // });

// // main.addEventListener('click', function (e) {
// //     console.log('heard by main', e.target);
// // });


// const survey = document.getElementById('survey');
// survey.addEventListener('click', clickHandler);

// function clickHandler (e) {
//     const clickedProduct = e.target; // is the html element that was clicked
    
//     // will exit the function if the game section was clicked
//     if (clickedFruit.id === 'game') return; 

//     // looping over fruits array to find the fruit instance to update
//     for (let i = 0; i < fruits.length; i ++) {
//         const fruitClass = clickedFruit.classList.value;
//         if (fruits[i].type === fruitClass) {
//             fruits[i].wasSliced();
//             console.log('number of slices', fruits[i].sliced);
//         }
//     }

//     // remove element
//     clickedFruit.remove();
    
    // render a new element
    // appendRandomProduct();
    
//     // increase number of times clicked and if over 5, call endGame()
//     clicks++;
//     if (clicks >= 5) {
//         endGame();
//     }
// }




// function appendRandomFruit () {
//     const game = document.getElementById('game');

//     // select random fruit object from fruits array, save in randomFruit
//     randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
//     const randomFruitEle = randomFruit.render(); // returns img element
//     game.appendChild(randomFruitEle);
// }

// function endGame () {
//     // remove click listener on game section
//     const game = document.getElementById('game');
//     game.removeEventListener('click', clickHandler);

//     console.table(fruits);
// }


// //****FROM CLASS FOLDER RESTAURANTS****//


// //****DATA****//

// var allRestaurants = [];

// //****CONSTRUCTOR & INSTANCES****//

// function Restaurant(name, id) {
//     this.name = name;
//     this.id = id;
//     this.votes = 0;

//     allRestaurants.push(this);
// }

// function instantiateRestaurants() {
//     const hand = new Restaurant('Hansel and Gretel\'s Dessert Shoppe', 'hansel-and-gretel');
//     const bob = new Restaurant('Bob\'s Burgers', 'bobs-burgers');
//     const sun = new Restaurant('Sunstrings', 'sunstrings');
//     const spa = new Restaurant('Spaghetti and Ice Cream', 'spaghetti-ice-cream');
// }

// //****DISPLAY & VOTING FUNCTIONS****//

// const tracker = {
//     option1: document.getElementsByClassName('option1')[0],
//     option2: document.getElementsByClassName('option2')[0],
//     displaySection: document.getElementById('display'),
//     votes: 0,

//     randomIndex: function (arr) {
//         return Math.floor(Math.random() * arr.length);
//     },

//     getIndices: function (arr) {
//         const selectedIndices = [];
//         while (selectedIndices.length < 2) {
//             const item = this.randomIndex(arr);

//             // using indexOf
//             if (selectedIndices.indexOf(item) === -1) {
//                 selectedIndices.push(item);
//             }

//             // using for loop
//             // if (selectedIndices.length === 0) {
//             //     selectedIndices.push(item);
//             // }

//             // for ( var i = 0 ; i < selectedIndices.length; i ++ ) {
//             //     if ( selectedIndices[i] === item ) {
//             //         break;
//             //     } else {
//             //         selectedIndices.push( item );
//             //         break;
//             //     }
//             // }
//         }

//         return selectedIndices;
//     },

//     displayOptions: function () {
//         // TODO get 2 random restaurants
//         const randomRestaurants = this.getIndices(allRestaurants);
//         const index1 = randomRestaurants[0];
//         const index2 = randomRestaurants[1];

//         const restaurant1 = allRestaurants[index1];
//         const restaurant2 = allRestaurants[index2];

//         // TODO append to DOM
//         this.option1.innerText = restaurant1.name;
//         this.option2.innerText = restaurant2.name;

//         this.option1.id = restaurant1.id;
//         this.option2.id = restaurant2.id;

//     },

//     tallyVote: function (id) {
//         this.votes += 1;

//         // for loop
//         // for ( var i = 0; i < allRestaurants.length; i ++ ) {
//         //     var restaurant = allRestaurants[i];
//         //     if ( restaurant.id === id ) {
//         //         restaurant.votes += 1;
//         //     }
//         // }

//         // for each loop
//         allRestaurants.forEach(function moo(restaurant) {
//             if (restaurant.id === id) {
//                 restaurant.votes += 1;
//             }
//         });



//         if (this.votes > 3) {
//             this.showResults();
//         }
//     },

//     showResults: function () {
//         this.displaySection.removeEventListener('click', voteHandler);
//         console.table(allRestaurants);
//         // for ( var i = 0; i < allRestaurants.length; i ++ ) {
//         //     var restaurant = allRestaurants[i];
//         //     console.log( restaurant.name + ': ' + restaurant.votes );
//         // }
//     }
// }


// //****EVENT LISTENERS****//

// tracker.displaySection.addEventListener('click', voteHandler);
// function voteHandler() {
//     if (event.target.id !== 'display') {
//         tracker.tallyVote(event.target.id);
//         tracker.displayOptions();
//     }
// }

// //****INITIALIZE APP****//

// instantiateRestaurants();
// tracker.displayOptions();

