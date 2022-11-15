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

//*buttom__top*//
document.addEventListener('DOMContentLoaded', function() {
    class PageTopScroller {
        constructor(options = null) {
            this.BODY = document.body;
            this.PARENT_BOX;
            this.PARENT_BOX_ID = 'ptsBox';
            this.IMG_SRC = null;
            this.ANIMATE_DURATION = 1000;
            this.ANIMATE_INCREMENT = 30;
            
            // options
            if(options !== null && Object.keys(options).length > 0) {

                if(options['IMG_SRC']) {
                    this.IMG_SRC = options['IMG_SRC'];
                }
                
                if(options['ANIMATE_DURATION']) {
                    this.ANIMATE_DURATION = options['ANIMATE_DURATION'];
                }
                

                if(options['ANIMATE_DURATION']) {
                    this.ANIMATE_DURATION = options['ANIMATE_DURATION'];
                }
            }
        }
        generateHTML() {
            this.PARENT_BOX = document.createElement('DIV');
            this.PARENT_BOX.id = this.PARENT_BOX_ID;
            this.PARENT_BOX.classList.add(this.PARENT_BOX_ID);
            this.BODY.appendChild(this.PARENT_BOX);
            const a = document.createElement('A');
            this.PARENT_BOX.appendChild(a);
            if(this.IMG_SRC) {
                const img = document.createElement('IMG');
                img.src = this.IMG_SRC;
                a.appendChild(img);
            } else {
                const arrowUp = document.createElement('SPAN');
                arrowUp.classList.add('arrowUp');
                a.appendChild(arrowUp);
            }
        }
        easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if(t < 1) {
                return c / 2 * t * t + b;
            }
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        eventListener() {
            let scrollTimerId;
            window.addEventListener('scroll', (e) => {
                if(scrollTimerId != null) {
                    clearTimeout(scrollTimerId);
                }
                scrollTimerId = setTimeout(() => {
                    if(window.pageYOffset > 0) {
                        this.PARENT_BOX.classList.add('active');
                    } else {
                        this.PARENT_BOX.classList.remove('active');
                    }
                }, 100);
            }, false);
            this.PARENT_BOX.addEventListener('click', () => {
                const duration = this.ANIMATE_DURATION;
                const start = window.pageYOffset;
                const change = -start;
                const increment = this.ANIMATE_INCREMENT;
                let currentTime = 0;
                
                const animateScroll = () => {
                    currentTime += increment;
                    const val = this.easeInOutQuad(currentTime, start, change, duration);
                    window.scrollTo(0, val);
                    if (currentTime < duration) {
                        setTimeout(animateScroll, 10);
                    } else {
                        window.scrollTo(0, 0);
                    }
                };
                animateScroll();
            }, false);
        }
        Main() {
            this.generateHTML();
            this.eventListener();
        }
        
    }
    options = {
        'IMG_SRC': null,
        'ANIMATE_DURATION': null,
        'ANIMATE_INCREMENT': null,
    }
    const instance = new PageTopScroller(options);
    instance.Main();
    
}, false);