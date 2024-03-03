// let viewAll = false;


let view = document.getElementsByClassName("view-all-button");
let viewLess=document.getElementsByClassName("view-less-button");

viewlessProducts()

function viewAllProducts() {
    let productsDiv = document.getElementsByClassName("best-seller-div");
    for (var i = 0; i < productsDiv.length; i++) {
        productsDiv[i].style.display = "none"
    }

    for (var i = 0; i < productsDiv.length; i++) {
        productsDiv[i].style.display = "grid"
    }
    document.getElementById("all").style.display="none";
    document.getElementById("less").style.display="block";

}

function viewlessProducts() {
    let productsDiv = document.getElementsByClassName("best-seller-div");
    for (var i = 0; i < productsDiv.length; i++) {
        productsDiv[i].style.display = "none"
    }

    for (var i = 0; i < productsDiv.length - 2; i++) {
        productsDiv[i].style.display = "grid"
    }
    document.getElementById("less").style.display="none";
    document.getElementById("all").style.display="block";
}