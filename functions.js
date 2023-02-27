//Menú lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}



//CONTACTO: cambio de texto

document.getElementById('boton').onclick = function (){    //dentro d function especifico lo que quiero que haga
    console.log= "Capturamos el evento click";
    document.getElementById("demo").innerHTML = "1234567891"
}

document.getElementById('boton1').onclick = function (){    //dentro d function especifico lo que quiero que haga
    console.log= "Capturamos el evento click";
    document.getElementById("demo1").innerHTML = "karenbrite@gmail.com"
}

document.getElementById('boton2').onclick = function (){    //dentro d function especifico lo que quiero que haga
    console.log= "Capturamos el evento click";
    document.getElementById("demo2").innerHTML = "karenbrite.com"
}