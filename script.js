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
    const   inputs = form.querySelectorAll('input'),
            textarea = document.querySelector('textarea');
    
    inputs.forEach(input => {
        input.addEventListener('change', saveToLocalStorage)
    });
    textarea.addEventListener('change', saveToLocalStorage)
}

function loadDataFromLocalStorage() {
    const   inputs = form.querySelectorAll('input'),
            textarea = document.querySelector('textarea');
    let     newform = JSON.parse(localStorage.getItem(form.id)) || "";

    if (newform != "") {
        inputs.forEach(input => {
                input.value = newform[input.name] || ""
        });
        textarea.value = newform[textarea.id] || ""
    }
}

function saveToLocalStorage(event) {
    const   input = event.target;
	let     newform = localStorage.getItem(form.id);

	newform = newform ? JSON.parse(newform) : {};

    newform[input.name] = input.value;   
	localStorage.setItem(form.id, JSON.stringify(newform));
}
