const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function removiendoLi() {
  const listasEl = document.querySelectorAll("ul li");

  listasEl.forEach(element => {
    element.remove()
  });
}

function creandoLiNuevos() {
  const ul = document.querySelector("ul");

  return cosasQueAprendimos.forEach(element => {
    const nuevasListas = document.createElement("li");
    ul.appendChild(nuevasListas);
    
    nuevasListas.textContent = element.tema;
    nuevasListas.classList = element.class;
  })
  
}

function main() {
  removiendoLi();
  creandoLiNuevos();
}

main();
