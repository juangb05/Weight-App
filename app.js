let output = document.getElementById('output')
//output.style.visibility = 'hidden';

let weight = document.getElementById('weight')

console.log(weight)


let lbsInput = document.querySelector('#input')

lbsInput.addEventListener('input', function(e) {
    //output.style.visibility = 'visible'
    let pounds = e.target.value;
    let gramsOutput = document.getElementById('gramsOutput').innerHTML = pounds/0.0022046 + ' grams'

    let kgOutput = document.getElementById('kgOutput').innerHTML = pounds/2.2046 + ' kilogrames'

    let ouncesOutput = document.getElementById('ouncesOutput').innerHTML = pounds*16 + ' ounces'
})