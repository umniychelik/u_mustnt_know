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
