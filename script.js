/*gerador de texto */

var typed = new Typed(".multiplos-texto", {
    strings: ["Desenvolvedor Front-end" , "Graduando!!", "Analista de Sistemas"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*Links para seguir para cada area da pagina */

const linkSobre = document.querySelector("a[href='#sobre']");
const sectionSobre = document.querySelector("#sobre");
linkSobre.addEventListener("click", () => {
  sectionSobre.scrollIntoView({ behavior: "smooth" });
});

const linkHabilidades = document.querySelector("a[href='#habilidades']");
const sectionHabilidades = document.querySelector("#habilidades");
linkSobre.addEventListener("click", () => {
  sectionSobre.scrollIntoView({ behavior: "smooth" });
});

const linkHome = document.querySelector("a[href='#home']");
const sectionHome = document.querySelector("#home");
linkSobre.addEventListener("click", () => {
  sectionSobre.scrollIntoView({ behavior: "smooth" });
});


/*Para as Habilidades*/
const porcentagens = [85, 75, 40, 35];

const barrasDeProgresso = document.querySelectorAll('.progress-bar');

const observador = new IntersectionObserver((entradas) => {
  if (entradas[0].boundingClientRect.top < window.innerHeight) {
    for (let i = 0; i < barrasDeProgresso.length; i++) {
      let largura = 0;
      const porcentagem = porcentagens[i];
      const intervalo = setInterval(() => {
        if (largura >= porcentagem) {
          clearInterval(intervalo);
        } else {
          largura++;
          barrasDeProgresso[i].style.width = largura + '%';
        }
      }, 10);
    }
  }
});

const footer = document.querySelector('footer');
observador.observe(footer);





