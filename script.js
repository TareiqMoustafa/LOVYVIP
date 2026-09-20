// تهيئة مكتبة AOS للرسوم المتحركة
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// تفعيل قائمة الأسئلة الشائعة
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // إغلاق جميع العناصر الأخرى
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // فتح العنصر الحالي إذا لم يكن مفتوحاً
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// تغيير خلفية شريط التنقل عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 26, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// تمرير سلس للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});