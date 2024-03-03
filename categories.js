
hairButtonClick();
function hairButtonClick() {
    let buttons = document.getElementsByClassName("categories-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = "categories-button";
    }
    var button = document.getElementById("hair-button");
    button.className += " active"

    document.getElementById("face-products").style.display="grid";
    document.getElementById("hair-products").style.display="none";
    document.getElementById("skin-products").style.display="none";
}

function faceButtonClick() {
    let buttons = document.getElementsByClassName("categories-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = "categories-button";
    }

    var button = document.getElementById("face-button");
    button.className += " active"
    document.getElementById("face-products").style.display="none";
    document.getElementById("hair-products").style.display="grid";
    document.getElementById("skin-products").style.display="none";
}

function skinButtonClick() {
    let buttons = document.getElementsByClassName("categories-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = "categories-button";
    }

    var button = document.getElementById("skin-button");
    button.className += " active"
    document.getElementById("face-products").style.display="none";
    document.getElementById("hair-products").style.display="none";
    document.getElementById("skin-products").style.display="grid";
}