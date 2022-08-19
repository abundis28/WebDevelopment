var imagenes = ["img/sonic-1-0.png", "img/sonic-1-1.png", "img/sonic-1-2.png", "img/sonic-1-3.png", "img/sonic-1-4.png"]
var contador = 0;

function rotar_imagenes(){
    contador++;
    document.getElementById("sonic").src=imagenes[contador];
    if(contador >= 4) contador = 0;
}

onload = function(){
    rotar_imagenes;
    this.setInterval(rotar_imagenes, 75);
}