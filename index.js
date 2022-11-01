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