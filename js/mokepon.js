let ataqueJugador = []
let ataqueEnemigo = []
let vidaEnenmigo = 3 
let vidaJugador = 3
let mokepones = []
let opcionDeMokepones 
let opcionDeAtaque
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')
let mascotaJugador
let botones = []
let ataquesMokeponEnemigo
let indexAtaqueEnemigo
let indexAtaqueJugador
let victoriasJugador = 0 
let victoriasEnemigo = 0 

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
            <button id = ${ataque.id} class ="botonesAtaque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionDeAtaque   

    })

        botonFuego = document.getElementById('selectFuego')
        botonAgua = document.getElementById('selectAgua')
        botonTierra = document.getElementById('selectTierra')
        botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque()
{
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
             if(e.target.textContent === '🔥')
             {
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112f58'
                boton.disabled = true 
             }
             else if(e.target.textContent === '💧')
             {
                ataqueJugador.push('AGUA')
                boton.style.background = '#112f58'
                boton.disabled = true 
             }
             else if(e.target.textContent === '🌱')
             {
                ataqueJugador.push('TIERRA')
                boton.style.background = '#112f58'
                boton.disabled = true 
             }
             ataqueEnemigoAleatorio()
            })
        })
    
}

function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria = aleatorio(1, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
     secuenciaAtaque()
}

//funciona aleatorio
function aleatorio (min, max)
{
    return Math.floor(Math.random()*(max - min + 1)+min)
}

//funciones de ataque Jugador

//ataque enemigo 
function ataqueEnemigoAleatorio()
{
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) ataqueEnemigo.push ('FUEGO')
    else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) ataqueEnemigo.push ('AGUA')
    else ataqueEnemigo.push ('TIERRA')

    iniciarPelea()//mensaje despues de los ataques 
}

//creacion de mensajes 
function crearMensaje(resultado)
{
    //let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p') //creacion de parrafos 
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador //variables globales del ataque
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    //sectionMensajes.appendChild(resultado)
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//
function iniciarPelea()
{
    if(ataqueJugador.length === 5)
    {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo)
{
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
//funncion de pelea 
function combate()
{
    for(let index = 0; index < ataqueJugador.length; index++)
    {
        if(ataqueJugador[index] === ataqueEnemigo[index])
        {
            indexAmbosOponentes(index, index);
            crearMensaje("EMPATE");
        } 

        else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA')
         {
            indexAmbosOponentes(index, index);
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
            crearMensaje("GANASTE");
        } 

        else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') 
        {
            indexAmbosOponentes(index, index);
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
            crearMensaje("GANASTE");
        } 
        
        else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA')
         {
            indexAmbosOponentes(index, index);
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
            crearMensaje("GANASTE");
        }

        else 
        {
            indexAmbosOponentes(index, index);
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
            crearMensaje("PERDISTE");
        }
    } 
    
    //---------REVISAR LAS VIDAS 
    revisarVictorias()
}

function revisarVictorias()
{
    if(victoriasJugador === victoriasEnemigo)
     {
        alert('EMPATAMOS LA BATALLA')
        botonReiniciar.style.display = 'flex'
        crearMensaje("EMPATE");
     }

    if(victoriasJugador > victoriasEnemigo)
     {
        alert('GANAMOS LA BATALLA')
        botonReiniciar.style.display = 'flex'
        crearMensaje("GANASTE");
     }

    else if(victoriasJugador < victoriasEnemigo) 
    {
        alert('PERDISTE LA BATALLA :(')
        botonReiniciar.style.display = 'flex'
        crearMensaje("PERDISTE");
    }
}

//reinicio del juego 
function reiniciar()
{
    location.reload()
}

window.addEventListener(`load`, iniciarJuego)
 