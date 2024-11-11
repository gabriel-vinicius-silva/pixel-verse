const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

// Função para mover o carrossel automaticamente
function moveToNextSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Função para adicionar animações nos slides
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });
}

// Mudar slide a cada 3 segundos
setInterval(moveToNextSlide, 3000);
updateSlides();

// Função de busca
function searchHQs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    slides.forEach(slide => {
        const title = slide.querySelector('h3').textContent.toLowerCase();
        slide.style.display = title.includes(searchInput) ? 'block' : 'none';
    });
}

// Função de filtro por gênero
function filterByGenre() {
    const genre = document.getElementById('genre-filter').value;
    slides.forEach(slide => {
        slide.style.display = genre === '' || slide.dataset.genre === genre ? 'block' : 'none';
    });
}
