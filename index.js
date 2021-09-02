var inputBackground = document.querySelector("#input1");
var inputPrimary = document.querySelector("#input2");
var inputSecondary = document.querySelector("#input3");
var inputButton = document.querySelector("#input4");
var inputFooter = document.querySelector("#footer-color");
var inputNavigation = document.querySelector("#navigation");
var mainText = document.querySelector("#text");
var subText = document.querySelector(".para");
var primaryButton = document.querySelector("#primary-button")
var secondaryButton = document.querySelector("#secondary-button")
var footerOutput = document.querySelector(".footer");
var navOutput = document.querySelectorAll(".nav")


function backgroundInputHandler(){
    var backgroundColor = (inputBackground.value);
    document.body.style.backgroundColor = backgroundColor;
}

function primaryInputHandler(){
    var primaryColor = (inputPrimary.value);
    mainText.style.color = primaryColor

}

function secondaryInputHandler(){
    var secondaryColor = (inputSecondary.value);
    // console.log(secondaryColor)
    subText.style.color = secondaryColor
}

function buttonInputHandler(){
    var buttonColor = (inputButton.value);
    // console.log(buttonColor)
    primaryButton.style.backgroundColor = buttonColor
    primaryButton.style.borderColor = buttonColor
    primaryButton.style.color = inputBackground.value
    secondaryButton.style.borderColor = buttonColor
    secondaryButton.style.color = buttonColor
}

function footerInputHandler(){
    var footerColor = inputFooter.value;
    footerOutput.style.color = footerColor
}

function navigationInputHandler(){
    // navOutput.style.color = inputNavigation.value
    for (i = 0; i < navOutput.length; i++) {
        navOutput[i].style.color = inputNavigation.value;
      }
}

inputBackground.addEventListener("input", backgroundInputHandler);
inputPrimary.addEventListener("input", primaryInputHandler);
inputSecondary.addEventListener("input", secondaryInputHandler);
inputButton.addEventListener("input", buttonInputHandler);
inputFooter.addEventListener("input", footerInputHandler);
inputNavigation.addEventListener("input", navigationInputHandler);