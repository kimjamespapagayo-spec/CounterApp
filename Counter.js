let counter = 0;


function incrementCounter() {
    let increase = 1;
    
    
    while (increase > 0) {
        counter++;
        increase--;
    }
    
    updateDisplay();
    updateStatus('Counter incremented');
}

function decrementCounter() {
    let decrease = 1;
    
   
    while (decrease > 0) {
        counter--;
        decrease--;
    }
    
    updateDisplay();
    updateStatus('Counter decremented');
}


function resetCounter() {
    counter = 0;
    updateDisplay();
    updateStatus('Counter has been reset');
}


function updateDisplay() {
    const display = document.getElementById('counterDisplay');
    display.textContent = counter;
    
   
    if (counter > 0) {
        display.style.color = '#51cf66';
    } else if (counter < 0) {
        display.style.color = '#ff6b6b'; 
    } else {
        display.style.color = '#667eea'; 
    }
}


function updateStatus(message) {
    const status = document.getElementById('status');
    status.textContent = message + ' | Current value: ' + counter;
}


document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
});
