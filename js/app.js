window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	var textoLista = document.getElementById("texto-lista");

	var textoListaClick = function(){
		textoLista.classList.add("oculta-txt-lista");
	}

	textoLista.addEventListener("click",textoListaClick);

});