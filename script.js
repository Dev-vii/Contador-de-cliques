const h1 = document.getElementById('h1')
var clicks = 0
let clickes = clicks.value
let click = Number(clicks.value)

function addclick() {
    h1.innerHTML = `Contador: ${click + 1}`
}