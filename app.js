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
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Title: ${item.inputName}</h5>
          <p class="card-text">Dec: ${item.inputdec}</p>
        </div>
        <ul class="list-group list-group-flush">
          <h1 class="list-group-item">Price: ${item.inputcash}</h1>
      </div>
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

