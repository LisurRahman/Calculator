
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // If display shows "Error" or a calculated result, clear it first
    if (display.value === "Error" || display.dataset.justCalculated === "true") {
        display.value = '';
        display.dataset.justCalculated = "false";
    }
    
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    display.dataset.justCalculated = "false";
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
        display.dataset.justCalculated = "true"; // Mark that calculation just happened
    } catch (error) {
        display.value = "Error";
        display.dataset.justCalculated = "true"; // Mark that error just happened
    }
}