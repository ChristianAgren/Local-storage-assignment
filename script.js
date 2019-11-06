window.addEventListener('load', main)

let form

function main() {
    loadGlobalVariables()
    setupEventListeners()
    loadDataFromLocalStorage()
}

function loadGlobalVariables() {
    form = document.querySelector('form')
}

function setupEventListeners() {
    const   inputs = form.querySelectorAll('input')
            textarea = document.querySelector('textarea')
    
    inputs.forEach(input => {
        input.addEventListener('input', saveToLocalStorage)
    });
    textarea.addEventListener('input', saveToLocalStorage)
}

function loadDataFromLocalStorage() {
    const   inputs = form.querySelectorAll('input')
            textarea = document.querySelector('textarea')
    inputs.forEach(input => {
        input.value = localStorage.getItem(input.name)
    });
    textarea.value = localStorage.getItem(textarea.id)
}

function saveToLocalStorage(event) {
    const input = event.target
    console.log(event.target);
    console.log(input.name);
    
    localStorage.setItem(input.name, input.value)
}
