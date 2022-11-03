const rows = 5
const columns = 6
let output=''

for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
        output += '*'
    }
    console.log(output)
    output = ''
}

const textboxName = document.getElementById("nameinput")
const textboxButton = document.getElementById("namebutton")

textboxButton.onclick = function () {
    const name = textboxName.value
    document.getElementById('nameoutput').innerHTML = "Hello " + name
}

const sideatext = document.getElementById("sideainput")
const sidebtext = document.getElementById("sidebinput")
const sidecoutput = document.getElementById("coutput")
const calcbutton = document.getElementById("coutputbutton")

calcbutton.onclick = function () {
    let sidea = sideatext.value
    sidea = Number(sidea)

    let sideb = sidebtext.value
    sideb = Number(sideb)

    const output = Math.sqrt(Math.pow(sidea, 2) + Math.pow(sideb, 2))
    sidecoutput.innerHTML = "The length of side c is: " + output
}

const todoaddbutton = document.getElementById("todoadd")
const todoslist = document.getElementById("todos")
const todoaddbox = document.getElementById("todotextbox")

let todosarray = []

todoaddbutton.onclick = function () {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(todoaddbox.value));
    todosarray.push(todoaddbox.value)
    localStorage.setItem("todos", JSON.stringify(todosarray))
    todoslist.appendChild(li)
}

const hastodos = JSON.parse(localStorage.getItem("todos"))
if (hastodos == null) {
    todosarray = []
} else {
    todosarray = hastodos
}

todosarray.forEach (todo => {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(todo))
    todoslist.appendChild(li)
})

const countaddbutton = document.getElementById("counterbutton")
let count = 0

countaddbutton.onclick = function () {
    count++
    countaddbutton.innerHTML = "count is: " + count
}