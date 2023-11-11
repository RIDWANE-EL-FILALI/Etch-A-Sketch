let color = "black";
let click = false;

function createBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((square) => square.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let total = size * size;

    for (let i = 0; i < total; i++) {
        let div = document.createElement('div');
        div.addEventListener('mousedown', setColor);
        div.addEventListener('mouseover', setColor);
        div.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', div);
    }
}

function setColor() {
    if(click)
    {
        if (color === 'rainbow')
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        else
            this.style.backgroundColor = color;
    }
}

function updatesize(input) {
    document.querySelector('.changed').textContent = `${input} x ${input}`;
}

function changeSize(input) {
    updatesize(input)
    if (input >= 2 && input <= 64)
        createBoard(input);
    else
        alert('Enter a number between 1 and 64');
}

function changeColor(input) {
    color = input;
}

function reset()
{
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((square) => square.style.backgroundColor = 'white');
    color = 'black';
}

document.querySelector('.board').addEventListener('click', () => {
        click = !click;
        if (click)
            document.querySelector('.state').textContent = '🟢 Active';
        else
            document.querySelector('.state').textContent = '🔴 Not Active';
});

createBoard(16);






