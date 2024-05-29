/*===========================-- alternador style --===========================*/

const stylecambioalternador = document.querySelector(".style_cambio_alternador");
stylecambioalternador.addEventListener("click", () => {
    document.querySelector(".style_cambio").classList.toggle("open")
})

//ocultar alternador al pasar el scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style_cambio").classList.contains("open")) {
        document.querySelector(".style_cambio").classList.remove("open")
    }
})

/*===========================-- tema de colores --===========================*/
const alternadorestilo = document.querySelectorAll(".alternador-estilo");
function setActiveStyle(color) 
{
    alternadorestilo.forEach((style) => {
        if(color === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
} 
/*===========================-- blanco y negro --===========================*/
const dianoche = document.querySelector(".dia-noche");
dianoche.addEventListener("click", ()=> {
    dianoche.querySelector("i").classList.toggle("fa-sun");
    dianoche.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

})
window.addEventListener("load", ()=> {
    if(document.body.classList.contains("dark"))
    {
        dianoche.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        dianoche.querySelector("i").classList.add("fa-moon")

    }
})
// Función para abrir una pestaña específica
function openTab(evt, tabName) {
    // Ocultar todos los contenidos de las pestañas
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Desactivar todos los botones de las pestañas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Mostrar el contenido de la pestaña seleccionada y activar el botón correspondiente
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  