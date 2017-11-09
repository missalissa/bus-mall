// product constructor function

function Product(name, id, src, clicked) {
    this.name = name;
    this.id = id;
    this.src = src;
    this.clicked = clicked || 0;  // votes
    this.shown = 0;
}


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
    img.src = this.src;    
    img.classList.add(this.id);
    sectionSurvey.appendChild(img);
    return img;
};
