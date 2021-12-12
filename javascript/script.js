var getH1Element = document.getElementsByTagName('h1')[0];
getH1Element.style.background = 'lightblue';
getH1Element.style.textAlign = 'center'; 
getH1Element.style.color = 'whitesmoke';

function button2() {
    var x = 'button2 clicked';
    alert(x);
}

var getbutton3 = document.getElementsByTagName('button')[2];
getbutton3.addEventListener('click' , button3);
function button3() {
    alert('button3 clicked');
}

const number1 = document.getElementById('number1');
number1.addEventListener('click' , writeNumber1);
function writeNumber1() {
    document.getElementById('calculator-screen').innerHTML = 1;
}
const number2 = document.getElementById('number2');
number2.addEventListener('click' , writenumber2);
function writenumber2() {
    document.getElementById('calculator-screen').innerHTML = 2;
}

const clear = document.getElementById('clear');
clear.addEventListener('click' , clearscreen);
function clearscreen() {
    document.getElementById('calculator-screen').innerHTML = 0;
}
    
const plus = document.getElementById('plus');
plus.addEventListener('click', plusFunction);

function plusFunction(){
    document.getElementById('calculator-screen').innerHTML = '+';
}







//

const x = 555;
const y = 'paras';
const z = true;
document.getElementById('p1').innerHTML =` type of x is ${typeof x}, and value of x is ${x} , type of y is ${typeof y}, and value is${y}, type of z ${typeof z}, and vlaue is ${z}`;


//

const a = 300;
const b = 200;
const c = true;
document.getElementById('p2').innerHTML = 'value of a' + a + 'type of a ' +  typeof a;