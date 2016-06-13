//////////////////// FUNÇÃO PARA O BANNER ////////////////////////
// nessa função determinamos as coisas que serão usadas no banner, 
// apontamos a classe ou id que determinamos para o banner, no nosso 
// caso slider, e chamamos a função cycle dentro dela determinamos o 
// tempo(timeout) para a passagem das imagens, qual será o tipo da transição 
// das imagens com o fx, e onde é colocado o indice(pager) que nonosso 
// caso é o span que tem a classe pagina e em seguida foi criado uma ancora 
// para adicionar a tag a ao span e depois, dizemos qual é o nome da classe 
// para ser usada quando o indice apontar a imagem(activePagerClass)
$(function(){
	$('.slider').cycle({
		timeout: 3000,
		fx: 'scrollLeft',
		pager: $('.pagina'),
		pagerAnchorBuilder: function(index, DOMelement){
			return '<a></a>';
		},
		activePagerClass: 'slideativo'
	});
}); 

//////////////// FUNÇÃO DO BANNER FINALIZADA ///////////////////////

$(function () { // wait for document ready
	// init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// get all slides
	var slides = document.querySelectorAll("section.movit");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
		.setPin(slides[i])
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}
});


