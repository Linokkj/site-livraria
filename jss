let imagens = [
    "https://leitura.com.br/image/cache/catalog/BANNER%20%C3%81LBUM%20DISNEY%202-1920x300.png",
    "https://leitura.com.br/image/cache/catalog/Banner%20-%20site%20Leitura%201920%20x%20300%20px%20(1)-1920x300.jpg",
    "https://checkout.drummondlivraria.com.br/resizer/banner/1920/550/false/false/1759521230.jpg",
    "https://darkside.vtexassets.com/assets/vtex.file-manager-graphql/images/f0e348be-99ec-4dd6-b5db-1d3e78199e88___779f3f088c17f35bc61a9b8544519e04.jpg.jpg",
];

let index = 0;
let slide = document.getElementById("slide");

// Trocar imagem
function mostrarImagem(i) {
    slide.style.opacity = 0;
    setTimeout(() => {
        slide.src = imagens[i];
        slide.style.opacity = 1;
    }, 300);
}

// Troca automática
let tempoTroca = 5000;
let autoTroca = setInterval(() => {
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
}, tempoTroca);

// Botão next
const nextBtn = document.getElementById("next");
if (nextBtn) {
    nextBtn.onclick = () => {
        index = (index + 1) % imagens.length;
        mostrarImagem(index);
        clearInterval(autoTroca);
        autoTroca = setInterval(() => {
            index = (index + 1) % imagens.length;
            mostrarImagem(index);
        }, tempoTroca);
    };
}

// Botão prev
const prevBtn = document.getElementById("prev");
if (prevBtn) {
    prevBtn.onclick = () => {
        index = (index - 1 + imagens.length) % imagens.length;
        mostrarImagem(index);
        clearInterval(autoTroca);
        autoTroca = setInterval(() => {
            index = (index + 1) % imagens.length;
            mostrarImagem(index);
        }, tempoTroca);
    };
}



// Seleciona elementos
const faixa = document.getElementById("faixa");
const btnEsquerda = document.getElementById("btnEsquerda");
const btnDireita = document.getElementById("btnDireita");

// Função para mover o carrossel
function rolarDirecao(direcao){
    const card = faixa.querySelector(".card");
    const estilo = window.getComputedStyle(faixa);
    const espaco = parseInt(estilo.gap) || 28;
    const larguraCard = card.getBoundingClientRect().width;
    const distancia = larguraCard + espaco;

    faixa.scrollBy({
        left: direcao * distancia,
        behavior: "smooth"
    });
}

// Eventos dos botões
btnEsquerda.addEventListener("click", () => rolarDirecao(-1));
btnDireita.addEventListener("click", () => rolarDirecao(1));

function criarCarrossel(faixaId, btnEsqId, btnDirId) {
  const faixa = document.getElementById(faixaId);
  const btnEsq = document.getElementById(btnEsqId);
  const btnDir = document.getElementById(btnDirId);

  let scrollAmount = 0;

  btnDir.onclick = () => {
    faixa.scrollBy({ left: 300, behavior: "smooth" });
  };

  btnEsq.onclick = () => {
    faixa.scrollBy({ left: -300, behavior: "smooth" });
  };
}

criarCarrossel("faixa", "btnEsquerda", "btnDireita");
criarCarrossel("faixa2", "btnEsquerda2", "btnDireita2");
