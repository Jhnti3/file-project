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

// Função para alternar automaticamente a cada 5 segundos
function autoSlide() {
    setInterval(() => {
        // Atualiza o índice
        currentIndex = (currentIndex + 1) % heroContent.length;

        // Atualiza a seção hero com o novo índice
        updateHeroSection(currentIndex);
    }, 5000); // 5000ms = 5 segundos
}

// Inicia o slide automático
autoSlide();


function autoResize(textarea) {
    textarea.style.height = 'auto'; // Reseta a altura para calcular a nova
    textarea.style.height = textarea.scrollHeight + 'px'; // Define a nova altura
}


const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
    // Remove qualquer caractere que não seja número ou os seguintes caracteres especiais: +, -, (, ), e espaço
    telefoneInput.value = telefoneInput.value.replace(/[^0-9+()\-\s]/g, '');
});


