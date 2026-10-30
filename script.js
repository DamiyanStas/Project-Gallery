const galleryCards = document.querySelectorAll('.card-gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Открытие галереи
galleryCards.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndex = index;
        modalImg.src = element.href;
        modal.classList.add('active');
    });
});

// Закрытие галереи
function closeModal() {
    modal.classList.remove('active');
}

// Закрытие по клику на пустом фоне
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});

// Навигация (стрелки)
function showImage(index) {
    if (index < 0) index = galleryCards.length - 1;
    if (index >= galleryCards.length) index = 0;
    currentIndex = index;
    modalImg.src = galleryCards[currentIndex].href;
}

prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

// Управление с помощью клавиатуры
document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('active')) return;

    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (event.key === 'ArrowRight') showImage(currentIndex + 1);
});
