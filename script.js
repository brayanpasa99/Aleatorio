function holaMundo()
{
    console.log("Hola mundo");
}
var datoUsuario;
var lista;
var camposLista = [];
function getdatoUsuario()
{
    datoUsuario = document.getElementById("numU").value;
    console.log("El valor del dato: " + datoUsuario);  
    generaAleatorios();
}

function generaAleatorios()
{
    lista = document.getElementById("lAleatorios"); 
    var ndatoUsuario = datoUsuario*-1;
    for(var i=0; i<20; i++){
        if(lista.childNodes.length <= 20){
            var newline = document.createElement("li");
            newline.innerHTML = Math.floor(Math.random() * ( datoUsuario - ndatoUsuario + 1 ) + ndatoUsuario );
            camposLista.push(newline);
            lista.appendChild(newline);
        } else {
            camposLista[i].innerHTML = Math.floor(Math.random() * ( datoUsuario - ndatoUsuario + 1 ) + ndatoUsuario );    
        }
    }

}


