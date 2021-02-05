/* .innerHTML button example */
let innerP = document.getElementById("innerParagraph");
let innerHideB = document.getElementById("innerHButton");
let innerUnhideB = document.getElementById("innerUButton");
innerUnhideB.hidden = true;
innerHideB.onclick = function(){
    innerP.innerHTML = "You changed the text!";
    innerUnhideB.hidden = false;
    innerHideB.hidden = true;
}
innerUnhideB.onclick = function(){
    innerP.innerHTML = "This changes the innerHTML of the document's body (You changed the text back!)";
    innerUnhideB.hidden = true;
    innerHideB.hidden = false;
}


/* .hidden button example */
let hideButton = document.getElementById("hide");
let unhideButton = document.getElementById("unhide");
unhideButton.hidden = true;
hideButton.onclick = function(){
    document.getElementById("hidden").hidden = true;
    unhideButton.hidden = false;
    hideButton.hidden = true;
}
unhideButton.onclick = function(){
    document.getElementById("hidden").hidden = false;
    unhideButton.hidden = true;
    hideButton.hidden = false;
}