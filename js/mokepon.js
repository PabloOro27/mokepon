let ataqueJugador 
let ataqueEnemigo
let vidaEnenmigo = 3 
let vidaJugador = 3
let mokepones = []
let opcionDeMokepones 
let opcionDeAtaque
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')
let mascotaJugador

//variables extraidas de elememtos html funcion iniciarJuego 
const sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const botonMascotaJugador = document.getElementById(`selectMascota`)
const botonReiniciar = document.getElementById('selectReiniciar')
let botonFuego 
let botonAgua 
let botonTierra 

//seleccion de mascotas 
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let inputLangostelvis 
let inputTucalma 
let inputPydos 
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
//------------------------------------------------------------------
//clases 
class Mokepon
{
    constructor(nombre, foto, vida) 
    {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
//creacion de mokepones
let hipodoge = new Mokepon('Hipodoge', './assets/mokepones/hipodoge.png', 4)
let capipepo = new Mokepon('Capipepo', './assets/mokepones/capipepo.png', 4)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepones/ratigueya.png', 4)
let langostelvis = new Mokepon('Langostelvis', './assets/mokepones/langostelvis.png', 4)
let tucalma = new Mokepon('Tucalma', './assets/mokepones/tucalma.png', 4)
let pydos = new Mokepon('Pydos', './assets/mokepones/pydos.png', 4)

//agragar los ataque de los moquepones 
hipodoge.ataques.push(
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'🌱', id: 'selectTierra'}
)
capipepo.ataques.push(
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'🔥', id: 'selectFuego'}
)
ratigueya.ataques.push(
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'💧', id: 'selectAgua'}
)
langostelvis.ataques.push(
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'🌱', id: 'selectTierra'}
)
tucalma.ataques.push(
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'🔥', id: 'selectFuego'},
    {nombre:'💧', id: 'selectAgua'}
)
pydos.ataques.push(
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'💧', id: 'selectAgua'},
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'🌱', id: 'selectTierra'},
    {nombre:'🔥', id: 'selectFuego'}
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucalma,pydos)
//-----------------------------------------------------------------
function iniciarJuego()
{
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => 
    {
        opcionDeMokepones = `
          <input type="radio" name="mascota" id=${mokepon.nombre} />
           <label class="tarjeta-mokepon" for=${mokepon.nombre}>
              <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

    })

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucalma = document.getElementById('Tucalma')
        inputPydos = document.getElementById('Pydos')

    botonMascotaJugador.addEventListener(`click`, seleccionarMascotaJugador)

 
    botonReiniciar.addEventListener('click', reiniciar) 
    botonReiniciar.style.display = 'none'

}
//seleccion de mascotas
function seleccionarMascotaJugador()
{
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSelecconarMascota.style.display = 'none'

    if(inputHipodoge.checked) 
    {
        alert("Seleccionaste a Hipodoge")
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }
    else if (inputCapipepo.checked)
    {
        alert("Seleccionaste a Capipego")
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } 
    else if (inputRatigueya.checked) 
    {
        alert("Seleccionaste a Ratigueya")
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }
    else if (inputLangostelvis.checked) 
    {
        alert("Seleccionaste a Langostelvis")
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }
    else if (inputTucalma.checked) 
    {
        alert("Seleccionaste a Tucalma") 
        spanMascotaJugador.innerHTML = inputTucalma.id
        mascotaJugador = inputTucalma.id
    }
    else if (inputPydos.checked) 
    {
        alert("Seleccionaste a Pydos")
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    }

    else // si la eleccion esta en blanco 
    {
        alert("No has seleccionado nada, Selecciona una mascota")
        location.reload()
    }  
 
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()       
   // habilitarBotones()
}

function extraerAtaques(mascotaJugador)
{
    let ataques 
    for(let i = 0; i < mokepones.length; i++)
    {
        if(mascotaJugador == mokepones[i].nombre)
        {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques)
{
    ataques.forEach((ataque) =>
    {
        opcionDeAtaque = `
            <button id = ${ataque.id} class ="botonesAtaque"> ${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += opcionDeAtaque   

    })

        botonFuego = document.getElementById('selectFuego')
        botonAgua = document.getElementById('selectAgua')
        botonTierra = document.getElementById('selectTierra')

     botonFuego.addEventListener('click', ataqueFuego)
     botonAgua.addEventListener('click', ataqueAgua)
     botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria = aleatorio(1, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
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
 