
const scrollContainer = document.querySelector('.box-container');
document.querySelector('.scroll-left').onclick = () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
};
document.querySelector('.scroll-right').onclick = () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
};

const faqs = document.querySelectorAll('.faq-question');

faqs.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isOpen = answer.style.maxHeight;
        document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
        document.querySelectorAll('.plus').forEach(p => p.textContent = '+');
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            btn.querySelector('.plus').textContent = '×';
        }
    });
});
