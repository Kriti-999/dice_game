// JavaScript source code
var random_var = Math.random();
var p = Math.floor(random_var * 6 + 1);
var image = "fg" + p + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", image);

var random_var2 = Math.random();
var p2 = Math.floor(random_var2 * 6 + 1);
var image2 = "fg" + p2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", image2);
if (p> p2) {
    document.querySelector("h1").innerHTML = "Hey player 1 you win";
}
else if (p < p2) {
    document.querySelector("h1").innerHTML = "Hey player 2 you won";

}
else {
    document.querySelector("h1").innerHTML = "Draw";
}