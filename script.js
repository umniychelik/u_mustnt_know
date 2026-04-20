let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `${i}`)
    field.appendChild(cell)
}
document.addEventListener('mousedown', function() {
    IS_CLICKED = true;
});
document.addEventListener('mouseup', function() {
    IS_CLICKED = false;
});
let cells = document.querySelectorAll('.cell')
for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.addEventListener('click', function() {
        if (!FILL_MODE) {
            cell.style.backgroundColor = CURRENT_COLOR;
        }
    });
    cell.addEventListener('mouseover', function() {
        if (IS_CLICKED && !FILL_MODE) {
            cell.style.backgroundColor = CURRENT_COLOR;
        }
    });
