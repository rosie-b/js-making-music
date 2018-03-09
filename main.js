// function to simplify calls to getElementById
function id(x) {
    return document.getElementById(x);
}

function playNote(val) {
    if (val === 'C') {new Audio("sounds/c.mp3").play()}
    else if (val === 'D') {new Audio("sounds/d.mp3").play()}
    else if (val === 'E') {new Audio("sounds/e.mp3").play()}
    else if (val === 'F') {new Audio("sounds/f.mp3").play()}
    else if (val === 'G') {new Audio("sounds/g.mp3").play()}
    else if (val === 'A') {new Audio("sounds/a.mp3").play()}
    else if (val === 'B') {new Audio("sounds/b.mp3").play()}
    id('screen').value = val
}

