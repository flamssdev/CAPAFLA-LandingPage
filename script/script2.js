

window.addEventListener("load", function() {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  document.getElementById("body").classList.remove("loading-open");
  
  document.getElementById("header").style.display = "block";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";

  mudarClientes();
  }, 5000);
});



// Função Abrir menu Mobile

const botaoCheck = document.getElementById("check");
const containerMobile = document.getElementById("container-mobile");
const navMobile = document.getElementById("nav-menu");

botaoCheck.addEventListener("click", () => {
  if (botaoCheck.checked) {
    navMobile.classList.remove("close-menu");
    navMobile.classList.add("open-menu");
    containerMobile.classList.add("opacityIn");
    containerMobile.style.display = "unset";
  } else {
    navMobile.classList.toggle("close-menu");
    navMobile.classList.toggle("open-menu");

    setTimeout(() => {
      containerMobile.classList.toggle("opacityIn");
      containerMobile.style.display = "none";
    }, 300);
  }
});


// Função para os Clientes ficarem em animação

function mudarClientes() {
  clientUm = document.getElementById("content-imagem-1");
  clientDois = document.getElementById("content-imagem-2");

  clientUm.classList.add("anima1");
  clientDois.classList.add("anima2");

  setInterval(() => {
    if (clientUm.classList.contains("anima1")) {
      clientUm.classList.remove("anima1");
      clientUm.classList.add("anima2");
    }
  }, 10000);
}




// Funções para adicionar Depoimentos Dinamicamente

const objDepoimentos = [
  {
    indice: 0,
    foto: "1-imagens/8-depoimentos/maria.png",
    nome: "Maria Vitoria Martins",
    empresa: "CEO Studio 21",
    content:
      "Trabalhar com a Capafla foi uma experiência incrível. Eles são profissionais, eficientes e altamente criativos. Não poderíamos estar mais satisfeitos com os resultados que eles nos entregaram. ",
  },
  {
    indice: 1,
    foto: "1-imagens/8-depoimentos/mauricio.png",
    nome: "Maurício Filho",
    empresa: "Dono da MSF Soluções",
    content:
      "A Capafla foi a melhor escolha que fizemos para a nossa empresa. Eles não só criaram um site incrível, mas também nos ajudaram a desenvolver uma estratégia de marketing que realmente funciona. Altamente recomendado!",
  },

  {
    indice: 2,
    foto: "1-imagens/8-depoimentos/riadh.png",
    nome: "Rhiad Castro",
    empresa: "CEO Casa Blanca",
    content:
      "Trabalhar com a Capafla foi uma experiência incrível. Eles são profissionais, eficientes e altamente criativos. Não poderíamos estar mais satisfeitos com os resultados que eles nos entregaram.",
  },
];

const cardDepoimentos = document.getElementById("objeto-depoimento");
let indice = 0;

cardDepoimentos.innerHTML = `
    <img src="${objDepoimentos[indice].foto}" alt="" class="avatar-depoimento">
    <span class="nome-depoimento">${objDepoimentos[indice].nome} <br>${objDepoimentos[indice].empresa}</span>
    <span class="content-depoimento">${objDepoimentos[indice].content}</span>
`;



// Funções para avançar e retrocedor no card de Depoimento

const nextDepoimento = document.getElementById("next");
const prevDepoimento = document.getElementById("prev");

function esconderSetasDepoimentos() {
  if(indice === 0){
    prevDepoimento.style.display = "none";
    nextDepoimento.style.display = "unset"
  } else if (indice === objDepoimentos.length -1) {
    prevDepoimento.style.display = "unset"
    nextDepoimento.style.display = "none"
  } else {
    
    prevDepoimento.style.display = "unset"
    nextDepoimento.style.display = "unset"
  }
}

esconderSetasDepoimentos();

nextDepoimento.addEventListener("click", () => {
  if (indice < objDepoimentos.length - 1) {
    indice++;
    cardDepoimentos.innerHTML = `
            <img src="${objDepoimentos[indice].foto}" alt="" class="avatar-depoimento">
            <span class="nome-depoimento">${objDepoimentos[indice].nome} <br>${objDepoimentos[indice].empresa}</span>
            <span class="content-depoimento">${objDepoimentos[indice].content}</span>
        `;

        esconderSetasDepoimentos()
  }
});

prevDepoimento.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    cardDepoimentos.innerHTML = `
            <img src="${objDepoimentos[indice].foto}" alt="" class="avatar-depoimento">
            <span class="nome-depoimento">${objDepoimentos[indice].nome} <br>${objDepoimentos[indice].empresa}</span>
            <span class="content-depoimento">${objDepoimentos[indice].content}</span>
        `;

        esconderSetasDepoimentos()
  }
});



// Função para abrir o modal com a imagem clicada
function abrirModal(src) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalImg").style.display = "unset";
  document.getElementById("modalVideo").style.display = "none";
  document.getElementById("modalImg").src = src;
  body.classList.add("no-scroll");
}

// Função para fechar o modal
function fecharModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modalImg").src = "";
  document.getElementById("modalVideo").src = "";
  body.classList.remove("no-scroll");
}

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    fecharModal();
  }
};



// Loading


"use strict";

var _a, _b;

const ID = "bongo-cat";
const s = (selector) => `#${ID} ${selector}`;
const notes = document.querySelectorAll(".note");
for (let note of notes) {
    (_a = note === null || note === void 0 ? void 0 : note.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(note.cloneNode(true));
    (_b = note === null || note === void 0 ? void 0 : note.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(note.cloneNode(true));
}
const music = { note: s(".music .note") };
const cat = {
    pawRight: {
        up: s(".paw-right .up"),
        down: s(".paw-right .down"),
    },
    pawLeft: {
        up: s(".paw-left .up"),
        down: s(".paw-left .down"),
    },
};
const style = getComputedStyle(document.documentElement);
const green = style.getPropertyValue("--green");
const pink = style.getPropertyValue("--pink");
const blue = style.getPropertyValue("--blue");
const orange = style.getPropertyValue("--orange");
const cyan = style.getPropertyValue("--cyan");
gsap.set(music.note, { scale: 0, autoAlpha: 1 });
const animatePawState = (selector) => gsap.fromTo(selector, { autoAlpha: 0 }, {
    autoAlpha: 1,
    duration: 0.01,
    repeatDelay: 0.19,
    yoyo: true,
    repeat: -1,
});
const tl = gsap.timeline();
tl.add(animatePawState(cat.pawLeft.up), "start")
    .add(animatePawState(cat.pawRight.down), "start")
    .add(animatePawState(cat.pawLeft.down), "start+=0.19")
    .add(animatePawState(cat.pawRight.up), "start+=0.19")
    .timeScale(1.6);

const noteElFn = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);
const noteEls = noteElFn(music.note);
const numNotes = noteEls.length / 3;
const notesG1 = noteEls.splice(0, numNotes);
const notesG2 = noteEls.splice(0, numNotes);
const notesG3 = noteEls;
const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true);
const rotator = gsap.utils.random(-50, 50, 1, true);
const dir = (amt) => `${gsap.utils.random(["-", "+"])}=${amt}`;
const animateNotes = (els) => {
    els.forEach((el) => {
        gsap.set(el, {
            stroke: colorizer(),
            rotation: rotator(),
            x: gsap.utils.random(-25, 25, 1),
        });
    });
    return gsap.fromTo(els, {
        autoAlpha: 1,
        y: 0,
        scale: 0,
    }, {
        duration: 2,
        autoAlpha: 0,
        scale: 1,
        ease: "none",
        stagger: {
            from: "random",
            each: 0.5,
        },
        rotation: dir(gsap.utils.random(20, 30, 1)),
        x: dir(gsap.utils.random(40, 60, 1)),
        y: gsap.utils.random(-200, -220, 1),
        onComplete: () => animateNotes(els),
    });
};
tl.add(animateNotes(notesG1)).add(animateNotes(notesG2), ">0.05").add(animateNotes(notesG3), ">0.25");
