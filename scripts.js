showMenu = function (bars) {
    if (document.getElementsByClassName('menu-container')[0].style.visibility === "visible") {
        document.getElementsByClassName('menu-container')[0].style.visibility = "hidden";
        bars.classList.toggle("change");
    } 
    else {
        document.getElementsByClassName('menu-container')[0].style.visibility = "visible";
        bars.classList.toggle("change");
    }
}



