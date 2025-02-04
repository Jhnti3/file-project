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

// Adicione este código ao seu site.js  FAZ DIFERANÇA NA ROLAGEM, SUGESTAO IA
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Ajuste este valor conforme a altura do seu menu
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Quando o scroll passar de 50px
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// Adicione este código ao seu site.js
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            // Se for #home ou #, scroll para o topo
            if (targetId === '#home' || targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offset = 80; // Ajuste este valor conforme a altura do seu menu
                    const targetPosition = targetElement.offsetTop - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// funcao para esmaecer as imgs da hero section

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.background-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let isTransitioning = false;

    // Função para trocar os slides com fade
    function changeSlide(nextSlide = undefined) {
        if (isTransitioning) return;
        isTransitioning = true;

        // Remove active de todos os dots
        dots.forEach(dot => dot.classList.remove('active'));

        // Determina o próximo slide
        const next = nextSlide !== undefined ? nextSlide : (currentSlide + 1) % slides.length;

        // Adiciona classe active ao dot correspondente
        dots[next].classList.add('active');

        // Inicia o fade out do slide atual
        slides[currentSlide].classList.add('fade-out');

        // Prepara o próximo slide
        slides[next].style.opacity = '0';
        slides[next].classList.add('active');

        // Força um reflow para garantir que as transições ocorram
        void slides[next].offsetWidth;

        // Inicia o fade in do próximo slide
        slides[next].style.opacity = '1';

        // Remove a classe active do slide anterior após a transição
        setTimeout(() => {
            slides[currentSlide].classList.remove('active', 'fade-out');
            isTransitioning = false;
            currentSlide = next;
        }, 2500); // Tempo igual ao da transição CSS
    }

    // Inicia o carrossel com intervalo maior para melhor visualização do efeito
    setInterval(() => changeSlide(), 7000); // 7 segundos entre cada transição

    // Funcionalidade dos dots com prevenção de cliques durante a transição
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentSlide && !isTransitioning) {
                changeSlide(index);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contatoForm = document.querySelector(".contato-form");

    if (contatoForm) {
        contatoForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Evita recarregar a página

            const nome = contatoForm.querySelector("input[placeholder='Nome']").value;
            const email = contatoForm.querySelector("input[placeholder='Insira o seu email aqui*']").value;
            const telefone = contatoForm.querySelector("input[id='telefone']").value;
            const mensagem = contatoForm.querySelector("textarea").value;
            const opcaoSelecionada = contatoForm.querySelector("input[name='opcao']:checked");

            if (!opcaoSelecionada) {
                alert("Por favor, selecione uma opção antes de enviar o formulário.");
                return;
            }

            const opcao = opcaoSelecionada.value;

            const formData = {
                Nome: nome,
                Email: email,
                Telefone: telefone,
                Mensagem: mensagem,
                Opcao: opcao
            };

            try {
                const response = await fetch("/Contato/EnviarEmail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert("Mensagem enviada com sucesso!");
                    contatoForm.reset();
                } else {
                    alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
                }
            } catch (error) {
                console.error("Erro ao enviar formulário:", error);
                alert("Erro ao enviar mensagem. Verifique sua conexão.");
            }
        });
    }
});
