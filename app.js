const inputName = document.querySelector('#name')
const inputdec = document.querySelector('#dec')
const inputcash = document.querySelector('#cash')
const form = document.querySelector('#form')
const div = document.querySelector('div')


const arr = [];



function renderItem() {
    div.innerHTML = ``
    arr.map((item) => {
        div.innerHTML += `
        <h1>${item.inputName} </h1>
        <h1>${item.inputcash} </h1>
        <h1>${item.inputdec} </h1>
    `
    })
}


form.addEventListener('submit', event => {
    event.preventDefault()
    arr.push({
        inputName: inputName.value,
        inputdec: inputdec .value,
        inputcash: inputcash .value
    });
    inputName.value = ''
    inputcash.value = ''
    renderItem()
})

