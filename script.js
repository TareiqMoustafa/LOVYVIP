/* ===== تهيئة مكتبة AOS ===== */
AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
});

/* ===== تغيير شريط التنقل عند التمرير ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* ===== تفاعل الأسئلة الشائعة ===== */
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;
        const isActive = currentItem.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});

/* ===== تمرير سلس للروابط الداخلية ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ===== عدّاد الأرقام في قسم البطل ===== */
const counters = document.querySelectorAll('.stat-number[data-count]');
const animateCounter = (el) => {
    const target = +el.getAttribute('data-count');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCount = () => {
        current += step;
        if (current < target) {
            el.textContent = '+' + Math.floor(current).toLocaleString('en-US');
            requestAnimationFrame(updateCount);
        } else {
            el.textContent = '+' + target.toLocaleString('en-US');
        }
    };
    updateCount();
};

/* ===== مراقب ظهور العناصر لبدء العدّاد ===== */
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const count = el.getAttribute('data-count');
            if (count === '10000') {
                animateCounter(el);
            } else if (count === '99') {
                let current = 0;
                const interval = setInterval(() => {
                    current++;
                    if (current >= 99) {
                        el.textContent = '99%';
                        clearInterval(interval);
                    } else {
                        el.textContent = current + '%';
                    }
                }, 20);
            }
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

/* ===== تأثير ظهور العناصر تدريجياً ===== */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
