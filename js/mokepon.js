let ataqueJugador 
let ataqueEnemigo
let vidaEnenmigo = 3 
let vidaJugador = 3

function iniciarJuego()
{
    let sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById(`selectMascota`)
    botonMascotaJugador.addEventListener(`click`, seleccionarMascotaJugador)

    let botonFuego = document.getElementById('selectFuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('selectAgua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('selectTierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('selectReiniciar')
    botonReiniciar.addEventListener('click', reiniciar) 
    botonReiniciar.style.display = 'none'

}
//seleccion de mascotas
function seleccionarMascotaJugador()
{
    let inputHipodoge = document.getElementById(`Hipodoge`)
    let inputCapipego = document.getElementById(`Capipego`)
    let inputRatigueya = document.getElementById(`Ratigueya`)
    let inputLangostelvis = document.getElementById(`Langostelvis`)
    let inputTucalma = document.getElementById(`Tucalma`)
    let inputPydos = document.getElementById(`Pydos`)

    let spanMascotaJugador = document.getElementById('nombreMascota')


    if(inputHipodoge.checked) 
    {
        alert("Seleccionaste a Hipodoge")
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if (inputCapipego.checked)
    {
        alert("Seleccionaste a Capipego")
        spanMascotaJugador.innerHTML = 'Capipego'
    } 
    else if (inputRatigueya.checked) 
    {
        alert("Seleccionaste a Ratigueya")
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else if (inputLangostelvis.checked) 
    {
        alert("Seleccionaste a Langostelvis")
        spanMascotaJugador.innerHTML = 'Langostelvis'
    }
    else if (inputTucalma.checked) 
    {
        alert("Seleccionaste a Tucalma") 
        spanMascotaJugador.innerHTML = 'Tucalma'
    }
    else if (inputPydos.checked) 
    {
        alert("Seleccionaste a Pydos")
        spanMascotaJugador.innerHTML = 'Pydos'
    }


    else alert("No has seleccionado nada, Selecciona una mascota") // si la eleccion esta en blanco 

    let sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    let sectionSelecconarMascota = document.getElementById('seleccionar_mascota')
    sectionSelecconarMascota.style.display = 'none'

    seleccionarMascotaEnemigo()       
   // habilitarBotones()
}

//habilitar botones de ataque 
/*function habilitarBotones()
{
    let botonFuego = document.getElementById('selectFuego')
    botonFuego.disabled = false
    let botonAgua = document.getElementById('selectAgua')
    botonAgua.disabled = false
    let botonTierra = document.getElementById('selectTierra')
    botonTierra.disabled = false
}*/

function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('nombreEnemigo')

    if(mascotaAleatoria == 1) { spanMascotaEnemigo.innerHTML = 'Hipodoge'}
    else if (mascotaAleatoria == 2) {spanMascotaEnemigo.innerHTML = 'Capipepo'} //capipepo
    else if (mascotaAleatoria == 3) {spanMascotaEnemigo.innerHTML = 'Ratigueya'} //Ratigueya
    else if (mascotaAleatoria == 4) {spanMascotaEnemigo.innerHTML = 'Lasgostelvis'}
    else if (mascotaAleatoria == 5) {spanMascotaEnemigo.innerHTML = 'Tucalma'}
    else {spanMascotaEnemigo.innerHTML = 'Pydos'}
}
//funciona aleatorio
function aleatorio (min, max)
{
    return Math.floor(Math.random()*(max - min + 1)+min)
}

//funciones de ataque Jugador
function ataqueFuego()
{
    ataqueJugador = 'Fuego'
    ataqueEnemigoAleatorio()
}

function ataqueAgua()
{
    ataqueJugador = 'Agua'
    ataqueEnemigoAleatorio()
}

function ataqueTierra()
{
    ataqueJugador = 'Tierra'
    ataqueEnemigoAleatorio()
    
}


//ataque enemigo 
function ataqueEnemigoAleatorio()
{
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) ataqueEnemigo = 'Fuego'
    else if (ataqueAleatorio == 2) ataqueEnemigo = 'Agua'
    else ataqueEnemigo = 'Tierra'

    combate()//mensaje despues de los ataques 
}

//creacion de mensajes 
function crearMensaje(resultado)
{
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataquesDelJugador') //jalar informacion del html 
    let ataqueDelEnemigo = document.getElementById('ataquesDelEnemigo')

    //let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p') //creacion de parrafos 
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador //variables globales del ataque
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo 

    //sectionMensajes.appendChild(resultado)
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
//funncion de pelea 
function combate()
{
    let spanVidasJugador = document.getElementById('vidasJugador')
    let spanVidasEnemigo = document.getElementById('vidasEnemigo')

    if(ataqueEnemigo == ataqueJugador) crearMensaje("--EMPATE") //EMPATE
        else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') //GANE
        {
            crearMensaje("--GANASTE")
            vidaEnenmigo--
            spanVidasEnemigo.innerHTML = vidaEnenmigo
        }
        else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') //GANE
        {
            crearMensaje("--GANASTE")
            vidaEnenmigo--
            spanVidasEnemigo.innerHTML = vidaEnenmigo
        }
        else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') //GANE
        {
            crearMensaje("--GANASTE")
            vidaEnenmigo--
            spanVidasEnemigo.innerHTML = vidaEnenmigo
        }
        else //PERDI
        {
            crearMensaje("--PERDISTE :(") 
            vidaJugador--
            spanVidasJugador.innerHTML = vidaJugador
        }

        //---------REVISAR LAS VIDAS 
        revisarVidas()
}

function revisarVidas()
{
    let botonReiniciar = document.getElementById('selectReiniciar')
    let botonFuego = document.getElementById('selectFuego')
    let botonAgua = document.getElementById('selectAgua')
    let botonTierra = document.getElementById('selectTierra')

    if(vidaEnenmigo == 0)
     {
        alert('GANAMOS LA BATALLA')
         botonReiniciar.style.display = 'flex'
         botonAgua.style.display = 'none'
         botonFuego.style.display = 'none'
         botonTierra.style.display = 'none'
     }
    else if(vidaJugador == 0) 
    {
        alert('PERDISTE LA BATALLA :(')
         botonReiniciar.style.display = 'flex'
         botonAgua.style.display = 'none'
         botonFuego.style.display = 'none'
         botonTierra.style.display = 'none'
    }
}

//reinicio del juego 
function reiniciar()
{
    location.reload()
}

window.addEventListener(`load`, iniciarJuego)
