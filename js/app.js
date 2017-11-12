'use script';

let clicks = 0;
let shown = 0;
let allProducts = []; // is no longer pushed from constructor function

// Getting all products from local storage

if (localStorage.allProducts) {
    console.log('We have products');

    // if we have products in localStorage
    // get them, instantiate them, and them in our products array

    //productsAray is an array of object literals—not Product (constructor)
    const productsArray = JSON.parse(localStorage.allProducts);
    console.log('productsArray:', productsArray);

    for (let i = 0; i < productsArray.length; i++) {
        // productsArray[i] === {name: 'R2D2 Travel Bag', id: 'bag', src: './images/...', clicked: 1}
        // make sure each product has an updated sliced property
        const product = new Product(productsArray[i].name, productsArray[i].id, productsArray[i].src, productsArray[i].clicked);

        allProducts.push(product);
    }
    console.log('current product: ', allProducts);
    console.log('products array:', allProducts);

} else {
    // if we don't have stored products:
    // create new products and put them in our product array

    const bag = new Product ('R2D2 Travel Bag', 'bag', './images/bag.jpg');
    const banana = new Product ('Banana Slicer', 'banana', './images/banana.jpg' );
    const bathroom = new Product ('Bathroom', 'bathroom', './images/bathroom.jpg');
    const boots = new Product ('Boots', 'boots', './images/boots.jpg');
    const breakfast = new Product ('Breakfast', 'breakfast', './images/breakfast.jpg');
    const bubblegum = new Product ('Bubblegum', 'bubblegum', './images/bubblegum.jpg');
    const chair = new Product ('Chair', 'chair', './images/chair.jpg');
    const cthulhu = new Product ('Cthulhu', 'cthulhu', './images/cthulhu.jpg');
    const dogduck = new Product ('Dog Duck', 'dogduck', './images/dog-duck.jpg');
    const dragon = new Product ('Dragon', 'dragon', './images/dragon.jpg');
    const pen = new Product ('Pen', 'pen', './images/pen.jpg');
    const petsweep = new Product ('Pet Sweep', 'petsweep', './images/pet-sweep.jpg');
    const scissors = new Product ('Scissors', 'scissors', './images/scissors.jpg');
    const shark = new Product ('Shark', 'shark', './images/shark.jpg');
    const sweep = new Product ('Sweep', 'sweep', './images/sweep.png');
    const tauntaun = new Product ('Tauntaun', 'tauntaun', './images/tauntaun.jpg');
    const unicorn = new Product ('Unicorn', 'unicorn', './images/unicorn.jpg');
    const usb = new Product ('USB', 'usb', './images/usb.gif');
    const watercan = new Product ('Water Can', 'watercan', './images/water-can.jpg');
    const wineglass = new Product ('Wine Glass', 'wineglass', './images/wine-glass.jpg');

    allProducts = [bag, banana, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];
}

showRandomProduct();


//+++++VOTING FUNCTIONS+++++//

const survey = document.getElementById('survey');
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
        showRandomProduct();
    
        
    // end survey, increase number of times clicked and if over 5, call endSurvey()
        clicks++;
        if (clicks >= 5) {
            endSurvey();
        }
}


//+++++DISPLAY FUNCTIONS+++++//   display three random images

function showRandomProduct() {     // use the random function, retrieve by index 
    const survey = document.getElementById('survey');
    const imagesShown = [];  // tracking what image has be shown
    
    while (imagesShown.length < 3) {
        // get random product
        randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)]; // show random image from allProducts array, save in randomProduct
        
        // check if it's inside of imagesShown
        
        // if it is there, don't do anything
        // if it's not there, add it to images shown and render in DOM
        if (!imagesShown.includes(randomProduct)) {
            imagesShown.push(randomProduct);  
            const randomProductEle = randomProduct.render(); // returns img element
            survey.appendChild(randomProductEle);
        }
    }
}


//+++++END SURVEY, DRAW CHART+++++//

function endSurvey () {
    // remove click listener on survey section
    const survey = document.getElementById('survey');
    survey.removeEventListener('click', clickHandler);

    console.table(allProducts);
    drawChart();

    // TODO save the fruits in localstorage!
    // JSON.stringify turns an array of objects into a nice string
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    // ^ same thing as: localStorage.fruits = fruits;
}


//+++++DRAW CHART, INPUT RECEIVED+++++//

function drawChart () {

    // get canvas element and its context
    // const canvas = document.getElementById('endCard'); 
    // const context = canvas.getContext('2d');

        // TODO USE THIS IF THERE IS TIME
        // add text that says "input received"
        // context.font = '20px sans-serif';
        // for (let i = 0; i < 10; i++) {
        // context.fillText('input received', 200, 200);
        // }
  
    //+++++ADD PERSISTENCE+++++//
    const productNames = [];
    const clickedData = []; 
  
    for ( let i = 0; i < allProducts.length; i++ ){
        productNames.push(allProducts[i].name); // check this if you run into trouble, was fruits[i]
        clickedData.push(allProducts[i].clicked); // 
  
        console.log( 'product names:', productNames );
        console.log( 'clicked data:', clickedData );
    }
  

    // TODO add a chart that shows number of votes per product
    Chart.defaults.global.defaultFontFamily = "Open Sans";    
    const chartCanvas = document.getElementById('chart');
    const chartCtx = chartCanvas.getContext('2d');

    const chart = new Chart (
        chartCtx, // first parameter is the canvas context
        { // first level children: type, data, options
            type: 'bar',
            data: { // data's children: labels, datasets
                labels: productNames, // y axis labels
                datasets: [
                    { // dataset object's children: label, data, backgroundColor
                        label: 'Votes Received',
                        data: clickedData, // [5,2,0], // data points
                        backgroundColor: '#fad680',
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Product Survey',
                    fontColor: 'white',
                    fontSize: 32
                },
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: 'white',
                            fontSize: 12,
                            stepSize: 1,
                            beginAtZero: true,
 
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: 'white',
                            fontSize: 12,
                            stepSize: 1,
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }]
                }
            }
        }
    );
}