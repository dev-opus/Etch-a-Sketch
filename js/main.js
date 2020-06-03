const gridContainer = document.querySelector('.container');
const blackPen = document.querySelector('.black');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const randomPen = document.querySelector('.random');


let grid = 2500;

for (let i = 0; i < grid; i++) {
	let tempDiv = document.createElement('div');
	tempDiv.setAttribute('class', 'item');

	tempDiv.innerText = ''; //without adding text to the divs, i dont get any cells.

	gridContainer.appendChild(tempDiv);
}

let cells = document.querySelectorAll('.item');

function blackInk() {
	cells.forEach((cell) => {
		cell.addEventListener('mouseenter', (event) => {
			cell.style.backgroundColor = 'black';
		});
	});
}


function eraseCell() {
	cells.forEach((cell) => {
		cell.addEventListener('mouseenter', () => {
			cell.style.backgroundColor = 'white';
		});
	});
}

function clearGrid() {
	cells.forEach((cell) => {
		cell.style.backgroundColor = 'white';
	});
}




blackPen.addEventListener('click', () => {
	blackInk();
});


eraser.addEventListener('click', () => {
	eraseCell();
});


clear.addEventListener('click', () => {
	clearGrid();
});



