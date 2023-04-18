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

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    console.log(button.value)
    
        if (button.value == "C") {
            display.innerText = "";
        }
        else if (button.value == "=") {
            display.innerText = eval(display.innerText) ;
        }
        else {
            display.innerText += button.value;
        }
        console.log(display.value)
    })})