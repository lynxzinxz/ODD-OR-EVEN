let result = 0;
let evenNumbers = ""; 
let oddNumbers = ""; 
for (let a = 0; a < 10; a++) {
    const p = Number(prompt("Number: "));
    if (p % 2 === 0) {
        evenNumbers += p + ", ";
        result += p;
    } else {
        oddNumbers += p + ", ";
    }
}

// Remove trailing comma and space from evenNumbers and oddNumbers
evenNumbers = evenNumbers.slice(0, -2);
oddNumbers = oddNumbers.slice(0, -2);

document.getElementById("even").innerHTML = evenNumbers;
document.getElementById("odd").innerHTML = oddNumbers;
document.getElementById("res").innerHTML = "SUM OF EVEN NUMBERS: " + result;
