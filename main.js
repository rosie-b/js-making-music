// play sound and change background colour when key clicked
function playNote(val) {
		key(val)
		colour(val)
}

// find audio file to match key clicked
function key(val) {
    if (val === 'C') {new Audio("sounds/c.mp3").play()}
    else if (val === 'D') {new Audio("sounds/d.mp3").play()}
    else if (val === 'E') {new Audio("sounds/e.mp3").play()}
    else if (val === 'F') {new Audio("sounds/f.mp3").play()}
    else if (val === 'G') {new Audio("sounds/g.mp3").play()}
    else if (val === 'A') {new Audio("sounds/a.mp3").play()}
    else if (val === 'B') {new Audio("sounds/b.mp3").play()}
}

// set the class to change the background colour
function colour(val) {
	document.body.className = val
}