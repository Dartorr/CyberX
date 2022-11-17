
autoSlider();
var left = 0;
var timer;

function autoSlider(){
	timer = setTimeout(sliderLeft,2000);
}

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 170;
	if(left < -510){
		left = 0;
		clearTimeout(timer);
	}
	polosa.style.left = left + 'px';
	autoSlider();
}


