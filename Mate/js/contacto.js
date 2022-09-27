let enviar = document.getElementById('enviar');
let formulario = document.getElementById('formulario');
let datos = []

class Usuario{
    constructor(nombre,apellido,email,contrasenia,celular,fecha){
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.contrasenia = contrasenia,
        this.celular = celular,
        this.fecha = fecha
    }
}

if (localStorage.getItem('datos')){
    datos = JSON.parse(localStorage.getItem('datos'))
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let contrasenia = document.getElementById('contraseña').value;
    let celular = document.getElementById('celular').value;
    let fecha = document.getElementById('fecha').value;

    let usuario = new Usuario(nombre,apellido,email,contrasenia,celular,fecha)

    datos.push(usuario)

    let datosJSON = JSON.stringify(datos)
    localStorage.setItem('datos',datosJSON)

    formulario.reset()
})



function mostarToast(){
    Toastify({
        text: "Formulario enviado correctamente",
        duration: 3000
    }).showToast();
}

enviar.onclick = mostarToast




