let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const paginacao = document.getElementById('paginacao');

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    paginacao.textContent = `${index + 1} / ${slides.length}`;
}

mostrarSlide(slideAtual);

document.getElementById('proximo').addEventListener('click', () => {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
});

document.getElementById('voltar').addEventListener('click', () => {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(slideAtual);
});
