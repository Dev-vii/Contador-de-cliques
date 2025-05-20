let h1 = document.getElementById('h1')
let clicks = 0

function addclick() {
    clicks++
    h1.innerHTML = `Contador: ${clicks}`
}

function resetclick() {
    h1.innerHTML = `Contador: 0`
}