let operators = ['+', '-', '*', '/'];  // Default operators
let operatorsAll = ['**', '%', '&&', '||', '&', '|', '^', '==', '===', '>', '<'];  // All possible operators

// Function to initialize the calculator on page load
function startCalculator() {
    document.getElementById("calculator").style.display = "initial";
    document.getElementById("operators").style.display = "none";
    document.getElementById("memory").style.display = "none";
    loadOperators();  // Load default operators
    loadAllOperators(); // Load all possible operators for adding
}

// Function to dynamically load operators into the calculator's select field
function loadOperators() {
    let selectOperator = document.getElementById("selectOperator");
    selectOperator.innerHTML = ""; // Clear any existing options
    for (let operator of operators) {
        let option = document.createElement('option');
        option.value = operator;
        option.innerHTML = operator;
        selectOperator.appendChild(option);
    }
}

// Function to load all possible operators for the Add Operator section
function loadAllOperators() {
    let selectAddOperator = document.getElementById("selectAddOperator");
    selectAddOperator.innerHTML = ""; // Clear existing options
    for (let operator of operatorsAll) {
        let option = document.createElement('option');
        option.value = operator;
        option.innerHTML = operator;
        selectAddOperator.appendChild(option);
    }
}

// Function to handle the calculator operation
function calculate() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = document.getElementById("selectOperator").value;
    
    // Evaluate the result
    let result = eval(`${number1} ${operator} ${number2}`);
    
    // Check if the result is valid
    if (!isNaN(result) && result !== Infinity) {
        document.getElementById("result").value = result;
        document.getElementById("error").innerHTML = "";
        insertRow(number1, operator, number2, result); // Add calculation to history
    } else {
        document.getElementById("error").innerHTML = "Invalid input or operator.";
        document.getElementById("result").value = "";
    }
}

// Function to switch to the Operators section
function toOperators() {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("operators").style.display = "initial";
    document.getElementById("memory").style.display = "none";
}

// Function to switch to the Calculator section
function toCalculator() {
    document.getElementById("calculator").style.display = "initial";
    document.getElementById("operators").style.display = "none";
    document.getElementById("memory").style.display = "none";
}

// Function to switch to the Memory section
function seeHistory() {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("operators").style.display = "none";
    document.getElementById("memory").style.display = "initial";
}

// Function to add an operator from the list of all operators
function addOperator() {
    let selectOperator = document.getElementById("selectOperator");
    let selectAddOperator = document.getElementById("selectAddOperator");
    let option = selectAddOperator.options[selectAddOperator.selectedIndex];
    selectOperator.appendChild(option);
}

// Function to remove an operator from the calculator's select field
function removeOperator() {
    let selectOperator = document.getElementById("selectOperator");
    let selectAddOperator = document.getElementById("selectAddOperator");
    let option = selectOperator.options[selectOperator.selectedIndex];
    selectAddOperator.appendChild(option);
}

// Function to insert a row in the history table
function insertRow(n1, op, n2, result) {
    let table = document.getElementById("memoryCalculations");
    let row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${n1}</td>
        <td>${op}</td>
        <td>${n2}</td>
        <td>=</td>
        <td>${result}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
    
    table.appendChild(row);
}

// Function to delete a row from the memory table
function deleteRow(button) {
    button.parentElement.parentElement.remove();
}
