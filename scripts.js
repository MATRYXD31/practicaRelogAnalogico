const digital = document.getElementById("horaDigital")
const manijas = document.getElementById("manijas")
const manijaminutos = document.querySelectorAll("span")
const root = document.documentElement

let segundo = new Date()
let minuto = new Date()
let hora = new Date()



segundo = segundo.getSeconds()
minuto = minuto.getMinutes()
hora = hora.getHours()


let giroMinutos = minuto * 6
let giroHoras = (hora * 2) * 15;

if (minuto >= 30) giroHoras += 15



root.style.setProperty("--transform-rotarMinutos", "rotate(" + giroMinutos + "deg)")
root.style.setProperty("--transform-rotarHoras", "rotate(" + giroHoras + "deg)")



const minutos = () => {
    setInterval(() => {
        hora = new Date();
        hora = hora.getHours()
        giroHoras = (hora * 2) * 15;
        giroMinutos = minuto * 6

        root.style.setProperty("--transform-rotarMinutos", "rotate(" + giroMinutos + "deg)")

        if (minuto == 30) {

            giroHoras += 15
            root.style.setProperty("--transform-rotarHoras", "rotate(" + giroHoras + "deg)")
        }
    }, 500);
}

const segundos = () => {
    setInterval(() => {

        segundo = new Date();
        segundo = segundo.getSeconds()
        minuto = new Date();
        minuto = minuto.getMinutes()
        hora = new Date();
        hora = hora.getHours()

        if (segundo < 10) digital.textContent = hora + ":" + minuto + "::0" + segundo

        if (hora < 10) digital.textContent = "0" + hora + ":" + minuto + "::" + segundo

        if (minuto < 10) digital.textContent = + hora + ":0" + minuto + "::" + segundo

        if (hora > 10 && minuto > 10 && segundo > 10) digital.textContent = hora + ":" + minuto + "::" + segundo


    }, 500);
}

minutos()
segundos()