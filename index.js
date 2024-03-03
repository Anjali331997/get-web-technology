function responsiveFn(){
    var menu = document.getElementById("menu-listid");
    if(menu.className === "menu-list"){
        menu.className += " responsive-menu"
        document.getElementById("menu-res-icon").className="fa fa-close"
    }else{
        menu.className = "menu-list"
        document.getElementById("menu-res-icon").className="fa fa-bars"
    }
}