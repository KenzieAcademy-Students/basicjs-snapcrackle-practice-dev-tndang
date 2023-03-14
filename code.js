// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
function snapCrackle(maxValue) {
    for (number = 1; number <= maxValue; number++) {
        if (number % 2 !== 0) {
            if (number % 5 === 0) {
                document.write("SnapCrackle, ");
            } else {
            document.write("Snap, ");
            }
        }
        else if (number % 5 === 0) {
            document.write("Crackle, ");
        } else {
            document.write(number + ", ");
        }
    }
}

snapCrackle(15);