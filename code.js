// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

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
            message += (index + ", ");
        }
    }
    return message;
}

console.log(snapCrackle(12));