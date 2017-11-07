// product constructor function

function Product(name, id, src) {
    this.name = name;
    this.id = id;
    this.src = './images/' + src;
    this.clicked = 0;  // votes
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
    const divSurvey = document.getElementById('survey');
    const img = document.createElement('img');
    img.src = this.src;
    // TODO check if it's adding a id
    img.classList.add(this.id);
    divSurvey.appendChild.img;
    return img;
}