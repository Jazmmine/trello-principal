window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	var textoLista = document.getElementById("texto-lista");
	var inputLista = document.getElementById("ingresar-texto-lista");
	var contenedor = document.getElementById("contenedor");

	var textoListaClick = function(){
		textoLista.classList.add("oculta-txt-lista");
	};

	textoLista.addEventListener("click",textoListaClick);

	var botonClick = function(e){
		e.preventDefault();
		var nombreLista = inputLista.value;
		textoLista.classList.remove("oculta-txt-lista");
		textoLista.innerHTML = nombreLista;
		inputLista.value = "";
	};

	var tarjetaClick = function(){
		var textoTarjeta = document.createElement(div);
		var anadirTarjeta = contenedor.appendChild(textoTarjeta);
		textoTarjeta.innerHTML = "Añadir tarjeta ...";
	};

	boton.addEventListener("click", function(){
		botonClick(),
		tarjetaClick();
	});



});