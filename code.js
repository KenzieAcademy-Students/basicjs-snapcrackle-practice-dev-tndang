// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let snapCrackle = function (maxValue) {
    let message;
    let number = 1;
    while (number <= maxValue) {
        if (number % 2 !== 0) {
            if (number % 5 === 0) {
                message = "SnapCrackle, ";
            } else {
            message = "Snap, ";
            }
        }
        else if (number % 5 === 0) {
            message = "Crackle, ";
        } else {
            message = number + ", ";
        }
        number++;
    }
    return message;
}

console.log(snapCrackle(12));