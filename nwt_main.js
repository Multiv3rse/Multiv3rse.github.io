// Nennleistung: ?
// Mittlere Globalstrahlung im Jahr BW: 1116 kwh/m²*a
// Neigung: ?
// Azimut: ?
// Temperaturkorrekturfaktor: 0,9378

// E[ideal] = Nennleistung * Globalstrahlung * Neigung+Azimut * Temperaturkorrekturfaktor
// E[real] = E[ideal] * Verlustfaktoren (0,975 * 0,98 * 0,983 * 0,97 * 0,993 * 0,985 * 0,94 * 0,995)

var p = 0
var g = 1116
var a = 0
var b = 0
var ab = 0
var t = 0.9378
var l = 0.975 * 0.98 * 0.983 * 0.97 * 0.993 * 0.985 * 0.94 * 0.995

function calc() {
    p = document.getElementById("p").value
    g = document.getElementById("g").value
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    console.log(a)
    console.log(b)
    console.log(`${p} ${g} ${a} ${b}`)
    ab = getAB(a, b)
    console.log(ab)
    var eIdeal = Math.round(p * g * ab * t)
    var eReal = Math.round(eIdeal * l)
    printIdeal(eIdeal)
    printReal(eReal)
    console.log(eIdeal)
    console.log(eReal)
}

function printIdeal(eIdeal) {
    calcOutputIdeal = document.getElementById("calc-ideal")
    var textIdeal = document.createElement("span")
    textIdeal.setAttribute("id", "text-ideal")
    calcOutputIdeal.appendChild(textIdeal)
    document.getElementById("text-ideal").innerHTML = eIdeal + " kWh/Jahr"
}

function printReal(eReal) {
    calcOutputReal = document.getElementById("calc-real")
    var textReal = document.createElement("span")
    textReal.setAttribute("id", "text-real")
    calcOutputReal.appendChild(textReal)
    document.getElementById("text-real").innerHTML = eReal + " kWh/Jahr"
}

function getAB(a, b) {
    switch (a) {
        case "-60":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.05
                case "30":
                    return 1.05
                case "45":
                    return 1.05
                case "60":
                    return 1
            }
        case "-45":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.1
                case "30":
                    return 1.1
                case "45":
                    return 1.1
                case "60":
                    return 1.05
            }
        case "-30":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.1
                case "30":
                    return 1.15
                case "45":
                    return 1.1
                case "60":
                    return 1.05
            }
        case "-15":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.1
                case "30":
                    return 1.15
                case "45":
                    return 1.15
                case "60":
                    return 1.1
            }
        case "0":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.1
                case "30":
                    return 1.15
                case "45":
                    return 1.15
                case "60":
                    return 1.1
            }
        case "15":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.1
                case "30":
                    return 1.15
                case "45":
                    return 1.15
                case "60":
                    return 1.1
            }
        case "30":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.1
                case "30":
                    return 1.15
                case "45":
                    return 1.1
                case "60":
                    return 1.05
            }
        case "45":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.1
                case "30":
                    return 1.1
                case "45":
                    return 1.1
                case "60":
                    return 1.05
            }
        case "60":
            switch (b) {
                case "0":
                    return 1.05
                case "15":
                    return 1.05
                case "30":
                    return 1.05
                case "45":
                    return 1.05
                case "60":
                    return 1
            }
    }
}