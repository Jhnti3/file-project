// Conjunto de dados para alternar entre imagens e textos
const heroContent = [
    {
        title: "GMEDICA",
        text: "Instrumental Cirúrgico",
        imageUrl: "/images/background.jpg" // Corretamente referenciado
    },
    {
        title: "GMEDICADois",
        text: "Nosso mercado",
        imageUrl: "/images/background2.png" // Corretamente referenciado
    },
    {
        title: "Outra Marca 2",
        text: "teste",
        imageUrl: "/images/background3.png" // Corretamente referenciado
    },

    {
        title: "tewstand",
        text: "Outro Texto 3",
        imageUrl: "/images/background4.png" // Corretamente referenciado
    },

    {
        title: "AAAAAAAAA",
        text: "Oeaeaeaeae",
        imageUrl: "/images/background5.png" // Corretamente referenciado
    },
    // Adicione quantos itens precisar
];



        //// Função para alterar o conteúdo
        //function changeHeroContent(index) {
        //    const heroTitle = document.getElementById('hero-title');
        //    const heroText = document.getElementById('hero-text');
        //    const heroSection = document.querySelector('.hero-section');
        //    const dots = document.querySelectorAll('.dot');

        //    // Atualiza o texto e a imagem de fundo
        //    heroTitle.textContent = heroContent[index].title;
        //    heroText.textContent = heroContent[index].text;
        //    heroSection.style.backgroundImage = `url(${heroContent[index].imageUrl})`;

        //    // Atualiza a bolinha ativa
        //    dots.forEach(dot => dot.classList.remove('active'));
        //    dots[index].classList.add('active');
        //}



        //// Adiciona event listeners para as bolinhas
        //document.querySelectorAll('.dot').forEach(dot => {
        //    dot.addEventListener('click', function () {
        //        const index = this.getAttribute('data-index');
        //        changeHeroContent(index);
        //    });
        //});


const dots = document.querySelectorAll('.dot');
const heroSection = document.querySelector('.hero-section');
const heroTitle = document.querySelector('.hero-content h1');
const heroText = document.querySelector('.hero-content p');

let currentIndex = 0;

function updateHeroSection(index) {
    const content = heroContent[index];

    // Atualiza o título e o texto
    heroTitle.textContent = content.title;
    heroText.textContent = content.text;

    // Atualiza a imagem de background
    heroSection.style.backgroundImage = `url('${content.imageUrl}')`;

    // Remove a classe 'active' de todos os dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Adiciona a classe 'active' ao dot atual
    dots[index].classList.add('active');
}

// Evento para alternar quando clicado em um dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateHeroSection(currentIndex);
    });
});

// Inicializa com o conteúdo da primeira posição
updateHeroSection(currentIndex);