let ataqueJugador 
let ataqueEnemigo
let vidaEnenmigo = 3 
let vidaJugador = 3

//variables extraidas de elememtos html funcion iniciarJuego 
const sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const botonMascotaJugador = document.getElementById(`selectMascota`)
const botonFuego = document.getElementById('selectFuego')
const botonReiniciar = document.getElementById('selectReiniciar')
const botonAgua = document.getElementById('selectAgua')
const botonTierra = document.getElementById('selectTierra')

//seleccion de mascotas 
const inputCapipego = document.getElementById(`Capipego`)
const inputHipodoge = document.getElementById(`Hipodoge`)
const inputLangostelvis = document.getElementById(`Langostelvis`)
const inputRatigueya = document.getElementById(`Ratigueya`)
const inputPydos = document.getElementById(`Pydos`)
const inputTucalma = document.getElementById(`Tucalma`)
const spanMascotaJugador = document.getElementById('nombreMascota')
const sectionSelecconarMascota = document.getElementById('seleccionar_mascota')

//funcion enemigo 
const spanMascotaEnemigo = document.getElementById('nombreEnemigo')

//funcion vidas 
const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')

//funcion mensaje 
const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataquesDelJugador') //jalar informacion del html 
const ataqueDelEnemigo = document.getElementById('ataquesDelEnemigo')

//funcion revisar vidas 

//-----------------------------------------------------------------
function iniciarJuego()
{
    sectionSeleccionarAtaque.style.display = 'none'

    botonMascotaJugador.addEventListener(`click`, seleccionarMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
 
    botonReiniciar.addEventListener('click', reiniciar) 
    botonReiniciar.style.display = 'none'

}
//seleccion de mascotas
function seleccionarMascotaJugador()
{

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

    else // si la eleccion esta en blanco 
    {
        alert("No has seleccionado nada, Selecciona una mascota")
        location.reload()
    }  

 
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSelecconarMascota.style.display = 'none'

    seleccionarMascotaEnemigo()       
   // habilitarBotones()
}

function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria = aleatorio(1, 6)

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
 