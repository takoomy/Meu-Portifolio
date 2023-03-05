var typed = new Typed(".multiplos-texto", {
    strings: ["Desenvolvedor Front-end" , "Graduando", "TI!!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


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