//getting the display elements 
display = document.querySelector('#disc');

// Function to display buttons 
function appendToDisplay(input) {
    display.value += input
}

//function to clear display 
function clearDisplay(){
  display.value ="";
}

// function to  delete display 
function deleteDisplay(){
    display.value = display.value.toString().slice(0,-1);
}

// = function 
function calculate(){
    try{
        let expression = display.value.replace(/\^/g, '**');
        display.value = eval(expression);
    }
    catch(error){
        "error"
    }
}
// ^ function
function square(){
try {
    let currentValue = parseFloat(display.value);
    display.value = Math.pow(currentValue,"");
}catch (error) {
    display.value = "error"
}
}
// % function
function percent() {
    try {
        let currentValue = parseFloat(display.value);
        display.value = currentValue / 100;
    } catch (error) {
        display.value = "Error";
    }
}