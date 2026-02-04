// نظام الترجمة الثنائي (عربي/إنجليزي)
const translations = {
    ar: {
        nav_home: "الرئيسية",
        hero_title: "AFAQ SOLAR ENERGY SOLUTIONS - ASES",
        calc_title: "حاسبة النظام الشمسي الذكية",
        // أضف جميع المفاتيح هنا
    },
    en: {
        nav_home: "Home",
        hero_title: "ASES - Afaq Solar Energy Solutions",
        calc_title: "Smart Solar Calculator",
        // Add all keys here
    }
};

// تبديل اللغة
let currentLang = 'ar';
document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateUI();
});

function updateUI() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.textContent = translations[currentLang][key];
    });
}

// تبديل الوضع الليلي والنهاري
const themeBtn = document.getElementById('theme-switch');
const mainLogo = document.getElementById('main-logo');

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // تغيير اللوجو بناءً على الوضع
    mainLogo.src = newTheme === 'light' ? 'images/logow.jpg' : 'images/logob.jpg';
    
    // تغيير الأيقونة
    themeBtn.innerHTML = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// حاسبة النظام الشمسي
function calculateSystem() {
    const consumption = document.getElementById('monthly-consumption').value;
    const panelPower = 600; // واط
    const panelArea = 2.6; // متر مربع
    
    // فرضية هندسية: النظام يحتاج لتغطية الاستهلاك اليومي (الاستهلاك / 30 يوم / 4 ساعات ذروة)
    const dailyNeededKW = (consumption / 30) / 4;
    const numberOfPanels = Math.ceil((dailyNeededKW * 1000) / panelPower);
    const totalArea = (numberOfPanels * panelArea).toFixed(1);

    const resultsDiv = document.getElementById('calc-results');
    resultsDiv.innerHTML = `
        <div class="result-item">حجم النظام: ${dailyNeededKW.toFixed(2)} KW</div>
        <div class="result-item">عدد الألواح المطلوبة: ${numberOfPanels}</div>
        <div class="result-item">المساحة المطلوبة: ${totalArea} م²</div>
    `;
}

// أرقام متزايدة للإحصائيات
function animateStats() {
    // كود بسيط لزيادة الأرقام عند التمرير
    let projects = 150;
    setInterval(() => {
        projects += Math.floor(Math.random() * 2);
        document.getElementById('stat-projects').textContent = projects + "+";
    }, 5000);
}

animateStats();