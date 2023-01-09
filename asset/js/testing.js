alert('Selamat Berkenalan Kepada Anda Semua')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }   else {
        entry.target.classList.remove('show');
    }
    });
});

const hiddenElements = document.querySelectorAll('.explanation, .more, .others, .pagination, .container, .about');
hiddenElements.forEach((el) => observer.observe(el));


   

