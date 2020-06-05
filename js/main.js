const gridContainer = document.querySelector('.container');
const blackPen = document.querySelector('.black');
const randomPen = document.querySelector('.random');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const reset = document.querySelector('.reset');

let grid = 256;
for (let i = 0; i < grid; i++) {
	let tempDiv = document.createElement('div');
	tempDiv.setAttribute('class', 'item');
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

function randomInk() {
	let randomValue = Math.floor(Math.random() * 255) * 1;

	cells.forEach((cell) => {
		cell.addEventListener('mouseenter', () => {
			cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
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

function resetGrid() {
	let columns = prompt('Enter a new size for the grid between 1 and 100');

	if (columns === null || columns === '' || isNaN(columns) === true) {
		console.log('yes');
		return;
	} else if (+columns < 1 || +columns > 100) {
		alert(
			`Invalid grid size ${
				columns * columns
			}\nEnter a number between 1 and 100 inclusive.`,
		);
		return;
	} else {
		console.log('success!!');
		gridContainer.innerHTML = '';

		grid = +columns * +columns;

		for (let i = 0; i < grid; i++) {
			let tempDiv = document.createElement('div');
			tempDiv.setAttribute('class', 'item');
			gridContainer.appendChild(tempDiv);
		}

		cells = document.querySelectorAll('.item');
		gridContainer.style.cssText = `grid-template-columns: repeat(${columns}, minmax(2px, 1fr))`;
	}
}

/* 
this section marks the end of the functions (callbacks) declartion 
and the beginning of the addition of the event listeners
*/

blackPen.addEventListener('click', () => {
	blackInk();
});

randomPen.addEventListener('click', () => {
	randomInk();
});
eraser.addEventListener('click', () => {
	eraseCell();
});

clear.addEventListener('click', () => {
	clearGrid();
	eraseCell();
});

reset.addEventListener('click', () => {
	resetGrid();
});
