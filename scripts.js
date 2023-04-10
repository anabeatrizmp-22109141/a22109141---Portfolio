showMenu = function () {
    var bar1 = document.querySelector(".bar1");
    var bar2 = document.querySelector(".bar2");
    var bar3 = document.querySelector(".bar3");

    if (document.getElementsByClassName('menu-container')[0].style.visibility === "visible") {
        document.getElementsByClassName('menu-container')[0].style.visibility = "hidden";
        bar1.classList.remove("change");
        bar2.classList.remove("change");
        bar3.classList.remove("change");
    } 
    else {
        document.getElementsByClassName('menu-container')[0].style.visibility = "visible";
        bar1.classList.add("change");
        bar2.classList.add("change");
        bar3.classList.add("change");
    }
}



