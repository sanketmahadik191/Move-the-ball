let ball = document.getElementById("ball");
document.addEventListener("keydown", moveball);
let topPosition = 0;
let leftPosition = 0;
let degLR = 0

function moveball(shift) {
    let pageHeight = document.documentElement.clientHeight;
    let pageWidth = document.documentElement.clientWidth;
    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight;
    //moving to top side
    if (shift.keyCode == "38" || shift.keyCode == "87") {
        if (topPosition - 20 >= 0) {
            ball.style.top = topPosition - 20 + "px";
            topPosition -= 20;
        }
    }
    //moving to bottom side
    else if (shift.keyCode == "39" || shift.keyCode == "68") {
        if (leftPosition + ballWidth + 30 <= pageWidth) {
            ball.style.left = leftPosition + 20 + "px";
            leftPosition += 20;
            degLR = degLR + 20
            ball.style.transform = `rotateZ(${degLR}deg)`
        }
    }
    //moving to right side
    else if (shift.keyCode == "40" || shift.keyCode == "83") {
        if (topPosition + ballHeight + 40 <= pageHeight) {
            ball.style.top = topPosition + 20 + "px";
            topPosition += 20;
        }
    }
    //moving to left side
    else if (shift.keyCode == "37" || shift.keyCode == "65") {
        if (leftPosition - 20 >= 0) {
            ball.style.left = leftPosition - 20 + "px";
            leftPosition -= 20;
            degLR = degLR - 20
            ball.style.transform = `rotateZ(${degLR}deg)`
        }
    }

}