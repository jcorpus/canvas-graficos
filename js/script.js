/*
$( window ).load(function() {
        console.log( "window loaded" );
    });
*/

$(document).ready(function(){



	var canvas = document.getElementById("dibujo");//$("#dibujo").val();
	//contexto = ctx
	if (canvas.getContext) {
	var ctx = canvas.getContext("2d");
	//#0095C2
	ctx.fillStyle = "rgb(0,149,194)";
	ctx.fillRect(100,100,50,50);

	ctx.fillStyle = "rgba(0,194,142,0.5)";
	ctx.fillRect(150,150,50,50);

	ctx.fillStyle = "rgba(0,194,142,0.5)";
	ctx.fillRect(250,250,50,50);

	ctx.fillStyle = "#222";
	ctx.fillRect(350,200,100,100);///fillrectcon relleno el
	ctx.clearRect(355,205,90,90);
	ctx.strokeRect(50,50,50,50);///strokebordes

	ctx.beginPath();
	ctx.fillStyle = "#222";
	ctx.moveTo(350,150);
	ctx.lineTo(800,0);
	ctx.lineTo(350,160);
	ctx.fill(); //cierra el camiino



	}


});




/**
	var salto = "<br>";
	var hola = "";
	for (var i = 1 ; i<7  ; i++) {

		 hola = hola+"#"+salto;
		var bk = document.getElementById("palabra");
		bk.innerHTML = hola;
		//console.log(hola);

	}

*/
