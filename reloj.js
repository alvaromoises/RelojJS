console.log(document)

"use strict";

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


function reloj() {
    try {
        let date = new Date()
        horas.textContent = date.getHours().toString().padStart(2, 0)
        minutos.textContent = date.getMinutes().toString().padStart(2, 0)
        segundos.textContent = date.getSeconds().toString().padStart(2, 0)
    } catch (error) {
        console.log(error)
    }

}
setInterval(reloj, 100)

