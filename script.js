function holaMundo()
{
    console.log("Hola mundo");
}
var datoUsuario;
function getdatoUsuario()
{
    datoUsuario = document.getElementById("numU").value;
    console.log("El valor del dato: " + datoUsuario);  
    generaAleatorios();
}

function generaAleatorios()
{
    var ndatoUsuario = datoUsuario*-1;
    for(var i=0; i<20; i++){
        console.log(Math.floor(Math.random() * ( datoUsuario - ndatoUsuario + 1 ) + ndatoUsuario ));
    }

}

