// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let highestNumber = prompt("What is the highest number?");

let snapCrackle = function(maxValue) {
    let message = "";
    for (let index = 1; index <= maxValue; index++) {
        if (index % 2 !== 0) {
            if (index % 5 === 0) {
                message += "SnapCrackle, ";
            } else {
            message += "Snap, ";
            }
        }
        else if (index % 5 === 0) {
            message += "Crackle, ";
        } else {
            message += `${index}, `;
        }
    }
    return message;
}

let render = function(text, maxValue) {
    document.write("<h1>Snap Crackle!</h1>");
    document.write(`<h3>Max Value: ${maxValue}</h3>`);
    document.write(`<p>${text}<p>`);
}

let result = snapCrackle(highestNumber);

console.log(result);
render(result, highestNumber);
