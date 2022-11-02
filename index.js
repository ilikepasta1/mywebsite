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