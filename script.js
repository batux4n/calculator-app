const display = document.getElementById("display");

// Adds input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clears the display
function clearDisplay() {
    display.value = "";
}

// Performs the calculation
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {

        appendToDisplay(key);
    } else if (["+","-","*","/"].includes(key)) {

        appendToDisplay(key);
    } else if (key === "Enter") {

        calculate();
    } else if (key === "Backspace") {

        display.value = display.value.slice(0, -1);
    } else if (key === "Delete") {
        clearDisplay();
    } else if (key === ".") {
        appendToDisplay(key);
    }
});
