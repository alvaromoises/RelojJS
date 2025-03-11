console.log(document)

"use strict";

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const fecha = document.getElementById('fecha')


function reloj() {
    try {
        let date = new Date()
        horas.textContent = date.getHours().toString().padStart(2, 0)
        minutos.textContent = date.getMinutes().toString().padStart(2, 0)
        segundos.textContent = date.getSeconds().toString().padStart(2, 0)
        let meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let dia = `${date.getDate().toString().padStart(2, 0)} ${meses[date.getMonth()]} ${date.getFullYear()}`
        fecha.textContent = dia
    } catch (error) {
        console.log(error)
    }

}
setInterval(reloj, 100)