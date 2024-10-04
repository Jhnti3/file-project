
// Conjunto de dados para alternar entre imagens e textos
const heroContent = [
    {
        title: "GMEDICA",
        text: "Instrumental Cirúrgico",
        imageUrl: "/images/background.jpg"
    },
    {
        title: "GMEDICADois",
        text: "Nosso mercado",
        imageUrl: "/images/background2.png"
    },
    {
        title: "Outra Marca 2",
        text: "teste",
        imageUrl: "/images/background3.png"
    },
    {
        title: "tewstand",
        text: "Outro Texto 3",
        imageUrl: "/images/background4.png"
    },
    {
        title: "AAAAAAAAA",
        text: "Oeaeaeaeae",
        imageUrl: "/images/background5.png"
    }
];

// Função para alterar o conteúdo
function changeHeroContent(index) {
    const heroTitle = document.getElementById('hero-title');
    const heroText = document.getElementById('hero-text');
    const heroSection = document.querySelector('.hero-section');
    const dots = document.querySelectorAll('.dot');

    // Atualiza o título, texto e imagem de fundo
    heroTitle.textContent = heroContent[index].title;
    heroText.textContent = heroContent[index].text;
    heroSection.style.backgroundImage = `url(${heroContent[index].imageUrl})`;

    // Atualiza a bolinha ativa
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Adiciona event listeners para as bolinhas
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        changeHeroContent(index);
    });
});

// Inicializa com o conteúdo da primeira posição
changeHeroContent(0);



    document.querySelector('.saiba-mais-btn').addEventListener('click', function() {
        // Aqui você pode adicionar a lógica para "Saiba Mais"
       alert('Você clicou em Saiba Mais!');
        // Ou redirecionar para uma página com mais informações:
        // window.location.href = '/sobre-nos';
    });
