'use script';

let clicks = 0;
let shown = 0;
let allProducts = []; // pushed from constructor function


//****CONSTRUCTOR & RENDER FUNCTIONS****//

function Product(name, id, src) {
    this.name = name;
    this.id = id;
    this.src = './images/' + src;
    this.clicked = 0;  // votes
    this.shown = 0;

    allProducts.push(this);
}

function renderProducts() {
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
    const petsweep = new Product ('Pet Sweep', 'petsweep', 'pet-sweep.jpg');
    const scissors = new Product ('Scissors', 'scissors', 'scissors.jpg');
    const shark = new Product ('Shark', 'shark', 'shark.jpg');
    const sweep = new Product ('Sweep', 'sweep', 'sweep.png');
    const tauntaun = new Product ('Tauntaun', 'tauntaun', 'tauntaun.jpg');
    const unicorn = new Product ('Unicorn', 'unicorn', 'unicorn.jpg');
    const usb = new Product ('USB', 'usb', 'usb.gif');
    const watercan = new Product ('Water Can', 'watercan', 'water-can.jpg');
    const wineglass = new Product ('Wine Glass', 'wineglass', 'wine-glass.jpg');
}

renderProducts();
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
    // const h2 = document.createElement('h2');
    img.src = this.src;
    // h2.textContent = this.name
    
    // TODO check if it's adding a id
    img.classList.add(this.id);
    sectionSurvey.appendChild(img);
    // sectionSurvey.appendChild(h2);
    return img;
};


//****DISPLAY FUNCTIONS****//   //display three random images

function showRandomProduct() {     // use the random function, retrieve by index 
    // const sectionSurvey = document.getElementById('survey'); // remove
    randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)]; // show random image from allProducts array, save in randomProduct
    randomProduct.render(); // returns img element
    // sectionSurvey.appendChild(randomProductEle);
}

for (let i = 0; i < 3; i++) {
    showRandomProduct();
}


//****VOTING FUNCTIONS****//

survey.addEventListener('click', clickHandler);

function clickHandler (e) {
    const clickedProduct = e.target; // html element that was clicked
    console.log(clickedProduct);
    
    // exit function if survey section was clicked
    if (clickedProduct.id === 'survey') return; 

    // loop over product array to find product instance to update
    for (let i = 0; i < allProducts.length; i ++) {
        const productClass = clickedProduct.classList.value;
        if (allProducts[i].id === productClass) {
            allProducts[i].wasClicked();
            console.log('Product name and number of clicks: ', allProducts[i].name, allProducts[i].clicked);
        }
    }

    // remove product when clicked
    const images = document.querySelectorAll('img');
        for (let i = 0; i < 3; i++) {
            images[i].remove();
        }

    // render a new element
        for (let i = 0; i < 3; i++) {   
            showRandomProduct();
        }
        
    // end survey, increase number of times clicked and if over 5, call endSurvey()
        clicks++;
        if (clicks >= 5) {
            endSurvey();
        }
}


//****END SURVEY****//

function endSurvey () {
    // remove click listener on survey section
    const survey = document.getElementById('survey');
    survey.removeEventListener('click', clickHandler);

    console.table(allProducts);
    drawChart();
}

//****DISALLOW REPEATS****//
