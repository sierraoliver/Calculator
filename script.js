function add (num1, num2){
    return num1 + num2
}

function subtract (num1, num2){
    return num1 - num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function operate (operator, num1, num2){
    let result = null;
    if (operator === "+"){
        result = add(num1,num2);
    }
    else if (operator === "-"){
        result = subtract(num1,num2);
    }
    else if (operator === "/"){
        result = divide (num1, num2);
    }
    else if (operator === "x"){
        result = multiply (num1, num2);
    }
    return result;
}

let value1 = '';
let value2 = '';
let op = null;
let final = null;
let enteredNumber = false;
let display = document.querySelector('.text');
const exp = document.querySelector('.exp');
const numbers = document.getElementsByClassName("number");
for (let x = 0; x<numbers.length;x++){
    setNumberListener(numbers[x]);
}

function setNumberListener (number){
    number.addEventListener("click", function(){   
        if (final === value1 && op === null){
            display.innerHTML = '';
            value1 = '';
            enteredNumber = false;
        }
        display.innerHTML += number.innerText;
        exp.innerHTML = '';
        if (!enteredNumber){
            value1 += number.innerText;
        }
        else{
            value2 += number.innerText;
        }
    })
}

const operators = document.getElementsByClassName("operator");
for (let x = 0; x<operators.length;x++){
    setOperatorListener(operators[x]);
}

function setOperatorListener(operator){
    operator.addEventListener ("click", function(){
        if (display.innerHTML.trim()!=="" && op === null){
            exp.innerHTML = '';
            op = operator.innerText; 
            display.innerHTML += op;
            enteredNumber = true;
        }
        
    })
}

const equal = document.querySelector(".equals");
equal.addEventListener("click", function(){
    if (value1 !== '' && op !== null && value2 !== ''){
        final = operate(op, parseFloat(value1), parseFloat(value2));
        exp.innerHTML = value1 + " " + op + " " + value2 + " =";
        final = final.toFixed(1);
        display.innerHTML = final;
    
        clearValues();
        value1 = final;
    }
});

const clear = document.querySelector(".reset");
clear.addEventListener("click", function(){
    clearValues();
    display.innerHTML = '';
    exp.innerHTML = '';
    enteredNumber = false;
})

function clearValues(){
    value1 = '';
    value2 = '';
    op = null;
}
