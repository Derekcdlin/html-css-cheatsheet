/* .innerHTML button example */
let innerP = document.getElementById("innerParagraph");
let innerHButton = document.getElementById("innerHButton");
let innerUButton = document.getElementById("innerUButton");
innerUButton.hidden = true;
innerHButton.onclick = function(){
    innerP.innerHTML = "You changed the text!";
    innerUButton.hidden = false;
    innerHButton.hidden = true;
};
innerUButton.onclick = function(){
    innerP.innerHTML = "document.body.innerHTML  = 'This is the text of the body element';";
    innerUButton.hidden = true;
    innerHButton.hidden = false;
};

/* .style button example */
let styleHButton = document.getElementById("styleHButton");
let styleUButton = document.getElementById("styleUButton")
let styleCode = document.getElementById("styleCode");
styleUButton.hidden = true;
styleHButton.onclick = () => {
    styleCode.style['background-color'] = "darkslategray";
    styleCode.firstChild.style['color'] = "cyan";
    styleUButton.hidden = false;
    styleHButton.hidden = true;
};
styleUButton.onclick = () => {
    styleCode.style.backgroundColor = "white";
    styleCode.firstChild.style.color = "mediumvioletred";
    styleUButton.hidden = true;
    styleHButton.hidden = false;
};

/* .createElement .appendChild .removeChild button example*/
let removeButton = document.getElementById("removeButton");
let appendButton = document.getElementById("appendButton");
let preAdd = document.getElementById("preAdd");
removeButton.hidden = true;

let newParagraph = document.createElement('p');
newParagraph.id = "newP";
newParagraph.innerHTML = 'We created and added this text with a click of a button';

appendButton.onclick = () => {
    preAdd.appendChild(newParagraph);
    removeButton.hidden = false;
    appendButton.hidden = true;
};
removeButton.onclick = () => {
    preAdd.removeChild(newParagraph);
    removeButton.hidden = true;
    appendButton.hidden = false;
};

/* .hidden button example */
let hideButton = document.getElementById("hide");
let unhideButton = document.getElementById("unhide");
unhideButton.hidden = true;
hideButton.onclick = function(){
    document.getElementById("hidden").hidden = true;
    unhideButton.hidden = false;
    hideButton.hidden = true;
};
unhideButton.onclick = function(){
    document.getElementById("hidden").hidden = false;
    unhideButton.hidden = true;
    hideButton.hidden = false;
};