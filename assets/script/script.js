//menu//
var menu = document.querySelector('.hamburger');
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}
menu.addEventListener('click', toggleMenu, false);{}

//cursor
const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 12) + "px; left:" + (e.pageX - 9) + "px;")
})

//text__typed//
var typed = new Typed('.typed', {
	strings: [
		'<i class="mascota">Freelancer</i>',
		'<i class="mascota">Designer Web</i>',
		'<i class="mascota">Designer UI|UX</i>',
		'<i class="mascota">Enterprising</i>',
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 200, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 750, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});