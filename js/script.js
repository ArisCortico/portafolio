//saanimacion de los nombres

document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".typing", {
        strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "Software Developer", "Software Designer", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
//menu lateral (aside)
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"), // Usa querySelectorAll para seleccionar todos los elementos li dentro de .nav
    totalnavlist = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length
for (let i = 0; i < totalnavlist; i++) {

    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalnavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
                //   allSection[j].classList.add("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectiontogglerbtn();
        }
    })
}

function removeBackSection (){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    const totalSection = allSection.length; // Agregar esta línea si no está definida totalSection previamente.
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const targetId = element.getAttribute("href").split("#")[1];
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add("active");
    } 
}


function updateNav(element) {
    // Elimina la clase "active" de todos los enlaces en navlist
    for (let i = 0; i < totalnavlist; i++) {
        navlist[i].querySelector("a").classList.remove("active");
          // Obtén el targetId fuera del bucle
    const targetId = element.getAttribute("href").split("#")[1];
    // Realiza alguna acción con targetId si es necesario
    if(targetId === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
    {
        navlist[i].querySelector("a").classList.add("active");
    }
    }
  
}

document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
  //  console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navtogglerbtn = document.querySelector(".nav-alternador"),
    aside = document.querySelector(".aside");
navtogglerbtn.addEventListener("click", () =>
 {
    asideSectiontogglerbtn();
})
function asideSectiontogglerbtn() {
 
        aside.classList.toggle("open");
        navtogglerbtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++)
         {
            allSection[i].classList.toggle("open");
        }
    
}

//alertas de vacio
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const Subject = document.getElementById("Subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `
    Full Name: ${fullName.value}<br>
    Email: ${email.value}<br>
    Subject: ${Subject.value}<br>
    Message: ${mess.value}<br>
    `;
    Email.send({
        SecureToken:"eb60db09-f4e0-44ea-ba77-b8126d6cf38d.",

        To : 'ariscortico09@gmail.com',
        From : "ariscortico09@gmail.com",
        Subject : Subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Éxito!",
                    text: "Mensaje enviado con éxito!",
                    icon: "success"
                }).then(() => {
                    // Limpiar los campos del formulario después de que se haya enviado con éxito
                    fullName.value = "";
                    email.value = "";
                    Subject.value = "";
                    mess.value = "";
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});


document.getElementById("openPdfButton").addEventListener("click", function() {
    // URL de tu archivo PDF
    const pdfUrl = "./img/CV/CV.pdf"; // Corregir las barras diagonales y eliminar el espacio en blanco en el nombre del archivo

    // Abrir el PDF en una nueva pestaña
    window.open(pdfUrl, "_blank");
});

// funcion para el mensaje 

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.removeClassButton');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const element = document.getElementById('myElement');
            if (element) { 
                element.classList.remove('oculto');
            } 
        });
    });
});
function cerrarMensaje() {
    // Obtener el elemento por su ID
    var elemento = document.getElementById("myElement");
    
    // Verificar si el elemento existe
    if (elemento) {
      // Agregar la clase "oculto" al elemento
      elemento.classList.add("oculto");
    } 
  }
  