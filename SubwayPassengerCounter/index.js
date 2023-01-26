// document.getElementById("count-el").innerText = 5


// let count = 0
// count = 5
// console.log(count);
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let x = count + " - "
    saveEl.textContent += x
    console.log(count);
    countEl.textContent = 0
    count = 0
}