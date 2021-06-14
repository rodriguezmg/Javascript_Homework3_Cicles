let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
let textFor = ""

for (let i = 0; i < cars.length; i++) {
    textFor += cars[i] + "<br>";
}
document.getElementById("practiceFor").innerHTML = textFor

function functionDoWhile() {
    let textDoWhile = ""
    let n = 0
    do {
        textDoWhile += "<br>The number is " + n
        n++
    } while (n < 5);
    document.getElementById("practiceDoWhile").innerHTML = textDoWhile
}

let textWhile = ""
let j = 0
while (j < 10) {
    textWhile += "<br>The number is " + j
    j++
}
document.getElementById("practiceWhile").innerHTML = textWhile
