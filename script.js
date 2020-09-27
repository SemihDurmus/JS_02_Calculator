const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");

const decimalBtn = document.querySelector("#dot");
const acBtn = document.querySelector("#ac");
const backspaceBtn = document.querySelector("#del");
const display_area = document.querySelector("#screen");

var displayVal = "0";
var pendingVal;
var evalArray = [];

const nrButtons = document.querySelectorAll(".nr_btn");
const opButtons = document.querySelectorAll(".op_btn");


for (let i=0; i < nrButtons.length; i++) {
    nrButtons[i].addEventListener("click", updateDisplayVal)
}
// for (let i=0; i < opButtons.length; i++) {
//     opButtons[i].addEventListener("click", doOperation)
// }


function updateDisplayVal(){
    var btnText;
    //nrButtons.forEach(element =>  btnText = element.innerText);
    // for (var x in nrButtons){
    //     console.log(nrButtons.x)
    //     btnText = x.innerText;
    // }
    for (let i=0; i < nrButtons.length; i++) {
        btnText = nrButtons[i].innerText;
    }

    if (displayVal === "0") {
        displayVal === "";
    }

    displayVal += btnText;
    display_area.innerText = displayVal;
}

