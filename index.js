var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");
var heading = document.getElementById("heading");
changecolor = function (color) {
    return function (event) {
        heading.style.color = color;

    }
};
button1.onclick = changecolor("red");
button2.onclick = changecolor("blue");
button3.onclick = changecolor("green");
button4.onclick = changecolor("black");
increment = function () {
    return function (event) {
       var i = parseInt (event.target.innerHTML);
       event.target.innerHTML = i + 1;
    }
};
buttons = document.getElementsByClassName("increment-button");
for (var i = 0;
     i < buttons.length; i++) {
    var button = buttons [i];
    button.addEventListener("click", increment());
}

button1.addEventListener("click", changecolor("red"));

