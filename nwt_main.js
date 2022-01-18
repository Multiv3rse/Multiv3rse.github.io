// Nennleistung: ?
// Mittlere Globalstrahlung im Jahr BW: 1116 kwh/m²*a
// Neigung: ?
// Azimut: ?
// Temperaturkorrekturfaktor: 0,9378

// E[ideal] = Nennleistung * Globalstrahlung * Neigung+Azimut * Temperaturkorrekturfaktor
// E[real] = E[ideal] * Verlustfaktoren (0,975 * 0,98 * 0,983 * 0,97 * 0,993 * 0,985 * 0,94 * 0,995)

var peakLeistung = 0
var globalStrahlung = 0
var azimut = 0
var neigung = 0
var monat = ""
var ausrichtungsKorrektur = 0
var temperaturKorrektur = 0.9378
var sonstKorrektur = 0.975 * 0.98 * 0.983 * 0.97 * 0.993 * 0.985 * 0.94 * 0.995

var globalStrahlungen = {
    "jahr": 1146.1,
    "januar": 28.52,
    "februar": 45.64,
    "märz": 86.8,
    "april": 134.1,
    "mai": 155.93,
    "juni": 169.8,
    "juli": 165.54,
    "august": 140.12,
    "september": 101.1,
    "oktober": 62.93,
    "november": 33.3,
    "dezember": 23.25
}


function calc() {
    peakLeistung = document.getElementById("peak-leistung").value
    monat = document.getElementById("monat").value
    azimut = document.getElementById("azimut").value
    neigung = document.getElementById("neigung").value

    globalStrahlung = globalStrahlungen[monat]
    ausrichtungsKorrektur = getKorrektur(azimut, neigung, monat)

    var energieIdeal = Math.round(peakLeistung * globalStrahlung * ausrichtungsKorrektur * temperaturKorrektur)
    var energieReal = Math.round(energieIdeal * sonstKorrektur)
    printIdeal(energieIdeal)
    printReal(energieReal)
}

function printIdeal(energieIdeal) {
    calcOutputIdeal = document.getElementById("calc-ideal")
    var textIdeal = document.createElement("span")
    textIdeal.setAttribute("id", "text-ideal")
    calcOutputIdeal.appendChild(textIdeal)
    document.getElementById("text-ideal").innerHTML = energieIdeal + " kWh/Jahr"
}

function printReal(energieReal) {
    calcOutputReal = document.getElementById("calc-real")
    var textReal = document.createElement("span")
    textReal.setAttribute("id", "text-real")
    calcOutputReal.appendChild(textReal)
    document.getElementById("text-real").innerHTML = energieReal + " kWh/Jahr"
}


function getKorrektur(azimut, neigung, monat) {
    var data = {
        "süd": {
            "20": { "januar": 1.53, "februar": 1.37, "märz": 1.21, "april": 1.11, "mai": 1.03, "juni": 1, "juli": 1.01, "august": 1.08, "september": 1.17, "oktober": 1.31, "november": 1.49, "dezember": 1.57, "jahr": 1.13 },
            "37": { "januar": 1.81, "februar": 1.56, "märz": 1.3, "april": 1.13, "mai": 1, "juni": 0.95, "juli": 0.97, "august": 1.08, "september": 1.24, "oktober": 1.46, "november": 1.76, "dezember": 1.9, "jahr": 1.17 },
            "45": { "januar": 1.89, "februar": 1.62, "märz": 1.32, "april": 1.12, "mai": 0.96, "juni": 0.91, "juli": 0.93, "august": 1.05, "september": 1.24, "oktober": 1.5, "november": 1.85, "dezember": 1.98, "jahr": 1.16 },
            "60": { "januar": 1.98, "februar": 1.65, "märz": 1.3, "april": 1.05, "mai": 0.86, "juni": 0.8, "juli": 0.83, "august": 0.97, "september": 1.2, "oktober": 1.51, "november": 1.92, "dezember": 2.08, "jahr": 1.09 },
            "90": { "januar": 1.83, "februar": 1.47, "märz": 1.05, "april": 0.74, "mai": 0.53, "juni": 0.45, "juli": 0.49, "august": 0.65, "september": 0.93, "oktober": 1.3, "november": 1.76, "dezember": 1.95, "jahr": 0.8 }
        },
        "südwestost": {
            "20": { "januar": 1.37, "februar": 1.25, "märz": 1.14, "april": 1.07, "mai": 1.01, "juni": 0.99, "juli": 1, "august": 1.05, "september": 1.11, "oktober": 1.21, "november": 1.34, "dezember": 1.39, "jahr": 1.09 },
            "37": { "januar": 1.54, "februar": 1.37, "märz": 1.19, "april": 1.07, "mai": 0.98, "juni": 0.95, "juli": 0.96, "august": 1.03, "september": 1.14, "oktober": 1.3, "november": 1.51, "dezember": 1.61, "jahr": 1.09 },
            "45": { "januar": 1.59, "februar": 1.39, "märz": 1.18, "april": 1.06, "mai": 0.95, "juni": 0.91, "juli": 0.93, "august": 1.01, "september": 1.13, "oktober": 1.31, "november": 1.55, "dezember": 1.67, "jahr": 1.08 },
            "60": { "januar": 1.62, "februar": 1.37, "märz": 1.13, "april": .99, "mai": .86, "juni": .82, "juli": .83, "august": .93, "september": 1.08, "oktober": 1.27, "november": 1.56, "dezember": 1.7, "jahr": 1.01 },
            "90": { "januar": 1.41, "februar": 1.14, "märz": .88, "april": .71, "mai": .58, "juni": .53, "juli": .55, "august": .65, "september": .82, "oktober": 1.03, "november": 1.35, "dezember": 1.51, "jahr": .74 }
        },
        "westost": {
            "20": { "januar": 1, "februar": .98, "märz": .97, "april": .97, "mai": .97, "juni": .96, "juli": .96, "august": .96, "september": .97, "oktober": .98, "november": .99, "dezember": 1, "jahr": .97 },
            "37": { "januar": .98, "februar": .95, "märz": .93, "april": .92, "mai": .91, "juni": .9, "juli": .9, "august": .91, "september": .92, "oktober": .94, "november": .97, "dezember": .97, "jahr": .92 },
            "45": { "januar": .95, "februar": .92, "märz": .9, "april": .89, "mai": .87, "juni": .86, "juli": .86, "august": .87, "september": .89, "oktober": .91, "november": .94, "dezember": .95, "jahr": .89 },
            "60": { "januar": .88, "februar": .85, "märz": .81, "april": .8, "mai": .78, "juni": .77, "juli": .77, "august": .78, "september": .81, "oktober": .83, "november": .86, "dezember": .87, "jahr": .8 },
            "90": { "januar": .63, "februar": .61, "märz": .58, "april": .57, "mai": .54, "juni": .53, "juli": .53, "august": .54, "september": .57, "oktober": .59, "november": .62, "dezember": .62, "jahr": .56 }
        }
    }
    korrektur = data[azimut][neigung][monat]
    console.log(korrektur)
    return korrektur
}