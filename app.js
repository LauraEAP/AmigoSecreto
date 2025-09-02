// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosIngresados = [];
let amigoIngresado = '';
const listaUl = document.getElementById("listaAmigos");
const listaHTML = document.getElementById('listaAmigos');

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function agregarAmigo(){
    asignarTextoElemento('p',``);
    listaHTML.innerHTML = '';
    amigoIngresado = document.getElementById('amigo').value;
    if(amigoIngresado!=''){
    listaAmigosIngresados.push(amigoIngresado);
    document.querySelector('#amigo').value = '';
        for (let i = 0; i < listaAmigosIngresados.length; i++){
            //console.log("Hello", listaAmigosIngresados[i]);
            const li = document.createElement('li'); // Crea un nuevo elemento <li>
            li.textContent = listaAmigosIngresados[i]; // Establece el texto del `<li>`
            listaHTML.appendChild(li); // Añade el `<li>` al `<ul>`
          
        }
    }else{
        alert('Por favor ingrese nombre del amigo secreto');
    }

   
}

function sortearAmigo(){
    listaHTML.innerHTML = '';
    totalAmigos = listaAmigosIngresados.length;
    let numeroGenerado = Math.floor(Math.random()*totalAmigos);
    asignarTextoElemento('p',`El amigo secreto es: ${listaAmigosIngresados[numeroGenerado]}`);
    lelistaAmigosIngresados = '';
}
