const color1=document.querySelector('#color1');
const color2=document.querySelector('#color2');
const body=document.querySelector('body');
const prevw=document.querySelector('.previw-color');
const codecss=document.querySelector('.codigocss');
const dr=document.querySelector('#rotate');

color1.addEventListener('input', function(e) {
	colores()

});
color2.addEventListener('input', function(e) {
	colores()
});

dr.addEventListener('click',cambiar);

let valor='to right'

const positioncr = ['to bottom','to right','to top','to left','50deg','300deg']

let contador;
	
function colores(){
	const colo1v=color1.value
	const colo2v=color2.value
	let codigo='';

	body.style.background=`linear-gradient(${valor},${colo1v}, ${colo2v})`
	codigo=`
	<p>background: ${colo1v};</p>
	<p>background: linear-gradient(${valor}, ${colo1v}, ${colo2v});</p>
	`
	codecss.innerHTML = codigo;
}


function cambiar(e){
	e.preventDefault()
	if (contador < positioncr.length - 1 ) {
		contador++
		
	}
	else{
		contador=0
	}

	valor=positioncr[contador]
	colores()

}