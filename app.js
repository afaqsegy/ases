// ================= بيانات الترجمة (Translation Data) =================
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_solutions: "حلولنا",
        nav_products: "منتجاتنا",
        nav_gallery: "أعمالنا",
        nav_brochure: "بروشورات",
        nav_calc: "حاسبة النظام",
        nav_contact: "تواصل معنا",
        hero_title: "شــركـة آفــاق لـحــلـــول الـطــاقـــة",
        hero_slogan1: "الطاقة النظيفة.. استثمار ذكي لمستقبل مستدام",
        hero_slogan2: "نقدم أحدث تكنولوجيا الطاقة الشمسية الكندية (UGP) لضمان أعلى كفاءة وتوفير.",
        btn_contact: "اطلب استشارة مجانية",
        stat_projects: "مشاريع منفذة",
        stat_power: "قدرة مركبة (KW)",
        stat_satisfaction: "نسبة رضا العملاء %",
        title_about: "من نحن",
        about_desc: "شركة آفاق لحلول الطاقة الشمسية (ASES) هي شركة رائدة في مجال الطاقة المتجددة في مصر. نحن نهدف إلى تقديم حلول طاقة ذكية ومستدامة.",
        title_solutions: "حلول الطاقة",
        sol_home: "أنظمة منزلية",
        sol_home_desc: "تخلص من فواتير الكهرباء وحقق استقلالاً تاماً.",
        sol_commercial: "أنظمة تجارية",
        sol_commercial_desc: "حلول ذكية للمصانع والشركات.",
        sol_agriculture: "أنظمة زراعية",
        sol_agriculture_desc: "ضخ المياه بالطاقة الشمسية.",
        sol_ev: "شحن سيارات",
        sol_ev_desc: "محطات شحن السيارات الكهربائية.",
        title_calc: "حاسبة النظام الشمسي",
        lbl_consumption: "أدخل معدل استهلاكك الشهري (كيلو واط):",
        btn_calc: "احسب الآن",
        calc_note: "* الحساب مبني على ألواح UGP بقدرة 600 واط وتكنولوجيا HJT.",
        res_size: "حجم النظام المقترح",
        res_panels: "عدد الألواح",
        res_area: "المساحة المطلوبة",
        panels_unit: "لوح",
        title_products: "منتجاتنا",
        filter_all: "الكل",
        filter_panels: "ألواح شمسية",
        filter_inverters: "إنفرترات",
        filter_batteries: "بطاريات",
        prod_desc_1: "أحدث تكنولوجيا كندية، كفاءة عالية.",
        prod_desc_2: "محول هجين ذكي يدعم الشبكة والبطاريات.",
        title_gallery: "معرض الأعمال",
        title_contact: "تواصل معنا",
        address: "جمهورية مصر العربية - الاسكندرية",
        btn_send: "إرسال",
        ph_name: "الاسم",
        ph_phone: "رقم الهاتف",
        ph_msg: "رسالتك",
        
        // قسم من نحن (النص الكامل)
        about_main_desc: "تأسست شركة آفاق لحلول الطاقة الشمسية ASES في مدينة الإسكندرية – جمهورية مصر العربية عام 2025، لتكون إحدى الشركات الرائدة في قطاع الطاقة المتجددة في المنطقة. تعتمد الشركة على خبرات هندسية متقدمة وفريق عمل متخصص يمتلك خبرة تمتد لأكثر من 17 عامًا في مجال تصميم وتنفيذ وتشغيل أنظمة الطاقة البديلة.",
        about_exp_title: "خبراتنا.",
        about_exp_list: "• يضم فريقنا خبراء عملوا في مجال الطاقة المتجددة منذ عام 2008.<br>• لدينا شركاء يُعتبرون من أوائل مطوّري مشاريع الطاقة الشمسية حول العالم منذ 1995.<br>• نفذ خبراؤنا وشركاؤنا مشاريع كبرى وعملاقة في عدة دول حول العالم.",
        about_serv_title: "خدماتنا",
        about_serv_list: "نقدم خدمات شاملة ومتكاملة تشمل:<br>• دراسة وتصميم أنظمة الطاقة البديلة.<br>• توريد وتركيب وتشغيل أنظمة الطاقة الشمسية.<br>• الفحص والاختبار والاعتماد الفني للمشاريع.<br>• الاستشارات الهندسية في جميع نواحي الطاقة البديلة.<br>• حلول توفير الطاقة للمنازل والمزارع والمصانع والمدن والمشاريع الحكومية العملاقة.",
        about_fields_title: "مجالات عملنا",
        about_fields_list: "نعمل في جميع أنظمة الطاقة المتجددة:<br>• ON-GRID الأنظمة المرتبطة بالشبكة.<br>• OFF-GRID الأنظمة المنفصلة عن الشبكة.<br>• HYBRID SYSTEMS الأنظمة الهجينة.<br>• ON-TIME SYSTEMS أنظمة التشغيل الفوري.",
        about_ugp_title: "وكالاتنا وشركاؤنا UGP",
        about_ugp_desc: "لدينا شبكة من الشركاء الاستراتيجيين في عدة دول لتوفير أحدث تقنيات الطاقة المتجددة.",
        about_vision_title: "رؤيتنا",
        about_vision_desc: "أن نكون الشركة الأبرز في المنطقة في تقديم حلول الطاقة المتجددة، وأن نساهم في دفع عجلة التحول العالمي نحو الطاقة النظيفة عبر مشاريع مستدامة وبجودة عالية.",
        about_goals_title: "أهدافنا",
        about_goals_list: "• نشر ثقافة الطاقة النظيفة وتقليل الاعتماد على مصادر الوقود التقليدية.<br>• تنفيذ مشاريع متكاملة تدعم التنمية المستدامة.<br>• توفير حلول طاقة اقتصادية وآمنة وذات موثوقية عالية.<br>• توسيع شبكة العلاقات العالمية مع أهم المصنعين والمطورين.",
        about_dir_title: "توجهنا",
        about_dir_desc: "نعتمد أعلى معايير الجودة والاحترافية في جميع مراحل العمل، مع التركيز على الابتكار الهندسي والكفاءة التشغيلية لتحقيق أفضل النتائج.",
        feat_1: "شريك معتمد لشركة UGP العالمية (تكنولوجيا HJT).",
        feat_2: "ضمان حقيقي وفريق هندسي متخصص.",
        feat_3: "خدمة ما بعد البيع وصيانة دورية.",
        title_brochure: "بروشورات الشركة"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_solutions: "Solutions",
        nav_products: "Products",
        nav_gallery: "Our Work",
        nav_brochure: "Brochures",
        nav_calc: "Calculator",
        nav_contact: "Contact",
        hero_title: "AFAQ SOLAR ENERGY SOLUTIONS",
        hero_slogan1: "Clean Energy... Smart Investment for a Sustainable Future",
        hero_slogan2: "Providing the latest Canadian Solar Technology (UGP) for highest efficiency.",
        btn_contact: "Get Free Consultation",
        stat_projects: "Projects Completed",
        stat_power: "Installed Capacity (KW)",
        stat_satisfaction: "Customer Satisfaction %",
        title_about: "About Us",
        about_desc: "AFAQ Solar Energy Solutions (ASES) is a leader in renewable energy in Egypt. We aim to provide smart and sustainable energy solutions.",
        title_solutions: "Energy Solutions",
        sol_home: "Residential Systems",
        sol_home_desc: "Eliminate electricity bills and achieve independence.",
        sol_commercial: "Commercial Systems",
        sol_commercial_desc: "Smart solutions for factories and companies.",
        sol_agriculture: "Agricultural Systems",
        sol_agriculture_desc: "Solar water pumping with high efficiency.",
        sol_ev: "EV Charging",
        sol_ev_desc: "Clean energy charging stations for EVs.",
        title_calc: "Solar Calculator",
        lbl_consumption: "Enter Monthly Consumption (kWh):",
        btn_calc: "Calculate Now",
        calc_note: "* Calculation based on UGP 600W Panels & HJT Technology.",
        res_size: "Suggested System Size",
        res_panels: "Number of Panels",
        res_area: "Required Area",
        panels_unit: "Panels",
        title_products: "Our Products",
        filter_all: "All",
        filter_panels: "Solar Panels",
        filter_inverters: "Inverters",
        filter_batteries: "Batteries",
        prod_desc_1: "Latest Canadian technology, high efficiency.",
        prod_desc_2: "Smart hybrid inverter supports grid & battery.",
        title_gallery: "Gallery",
        title_contact: "Contact Us",
        address: "Alexandria, Egypt",
        btn_send: "Send",
        ph_name: "Name",
        ph_phone: "Phone Number",
        ph_msg: "Your Message",

        // About Us Section (Professional Translation)
        about_main_desc: "AFAQ Solar Energy Solutions (ASES) was established in Alexandria, Egypt in 2025, to become a leading company in the renewable energy sector. The company relies on advanced engineering expertise and a specialized team with over 17 years of experience in designing, implementing, and operating alternative energy systems.",
        about_exp_title: "Our Expertise.",
        about_exp_list: "• Our team includes experts who have worked in renewable energy since 2008.<br>• We have partners recognized as pioneer developers of solar energy projects worldwide since 1995.<br>• Our experts and partners have executed mega-projects in various countries globally.",
        about_serv_title: "Our Services",
        about_serv_list: "We provide comprehensive and integrated services including:<br>• Study and design of alternative energy systems.<br>• Supply, installation, and operation of solar systems.<br>• Technical inspection, testing, and certification.<br>• Engineering consultancy in all aspects of renewable energy.<br>• Energy-saving solutions for homes, farms, factories, cities, and giant government projects.",
        about_fields_title: "Our Fields of Work",
        about_fields_list: "We operate across all renewable energy systems:<br>• ON-GRID: Grid-tied systems.<br>• OFF-GRID: Standalone systems.<br>• HYBRID SYSTEMS: Combined energy solutions.<br>• ON-TIME SYSTEMS: Immediate operation systems.",
        about_ugp_title: "Agencies & Partners (UGP)",
        about_ugp_desc: "We have a network of strategic partners in several countries to provide the latest renewable energy technologies.",
        about_vision_title: "Our Vision",
        about_vision_desc: "To be the most prominent company in the region in providing renewable energy solutions, contributing to the global transition towards clean energy through sustainable, high-quality projects.",
        about_goals_title: "Our Goals",
        about_goals_list: "• Spreading clean energy culture and reducing reliance on traditional fuel sources.<br>• Implementing integrated projects that support sustainable development.<br>• Providing economical, safe, and highly reliable energy solutions.<br>• Expanding our global network with major manufacturers and developers.",
        about_dir_title: "Our Approach",
        about_dir_desc: "We adopt the highest standards of quality and professionalism in all work stages, focusing on engineering innovation and operational efficiency to achieve the best results.",
        feat_1: "Certified Partner for UGP Global (HJT Technology).",
        feat_2: "Genuine Warranty & Specialized Engineering Team.",
        feat_3: "After-Sales Service & Regular Maintenance.",
        title_brochure: "Company Brochures"
    }
};

// ================= دالة تبديل اللغة (Language Switcher) =================
function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // تحديث Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ar';
    setLanguage(savedLang);
});

// ربط الدالة بالنافذة لتعمل مع onclick في HTML
window.setLanguage = setLanguage;

// ================= إدارة اللغة (Language Handling) =================
let currentLang = 'ar'; // اللغة الافتراضية
const langToggleBtn = document.getElementById('lang-toggle');

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage();
});

function updateLanguage() {
    // تغيير الاتجاه
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    // تحديث زر التبديل
    langToggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'عربي';

    // تحديث النصوص
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // تحديث الـ Placeholder
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if(translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
}

// ================= الوضع الليلي (Dark Mode) =================


// استهداف زر التبديل وصورة اللوجو
const themeBtn = document.getElementById('theme-toggle'); // تأكد أن هذا هو ID الزر عندك
const mainLogo = document.getElementById('main-logo');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        // 1. تبديل الكلاس في الـ body
        document.body.classList.toggle('dark-theme');

        // 2. التحقق من الوضع الحالي وتغيير اللوجو
        if (document.body.classList.contains('dark-theme')) {
            mainLogo.src = 'images/logob.jpg'; // اللوجو الخاص بالوضع الليلي
            localStorage.setItem('theme', 'dark');
        } else {
            mainLogo.src = 'images/logow.jpg'; // اللوجو الخاص بالوضع النهاري
            localStorage.setItem('theme', 'light');
        }
    });
}

// 3. كود إضافي لضمان بقاء اللوجو الصحيح عند تحديث الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        mainLogo.src = 'images/logob.jpg';
    } else {
        mainLogo.src = 'images/logow.jpg';
    }
});




// ================= عداد الإحصائيات (Stats Counter) =================
const counters = document.querySelectorAll('.counter');
let started = false; // للتأكد من تشغيل العداد مرة واحدة

function startCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        
        const updateCounter = () => {
            const c = +counter.innerText;
            if (c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// تشغيل العداد عند الوصول للقسم
window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    if (window.scrollY >= statsSection.offsetTop - 500 && !started) {
        startCounters();
        started = true;
    }
});

// ================= حاسبة الطاقة الشمسية (Solar Calculator) =================
function calculateSolar() {
    const consumption = document.getElementById('monthly-consumption').value;
    
    if (consumption && consumption > 0) {
        // الفرضيات الهندسية
        // متوسط ساعات سطوع الشمس الفعال في مصر = 5 ساعات
        // فقد الطاقة التقريبي = 1.3
        
        // 1. حساب حجم النظام (KW)
        // المعادلة: (الاستهلاك الشهري / 30 يوم) / ساعات الشمس * معامل الفقد
        const dailyConsumption = consumption / 30;
        const systemSize = (dailyConsumption / 5) * 1.2; 

        // 2. عدد الألواح (UGP 600W)
        const panelWatt = 600;
        const numPanels = Math.ceil((systemSize * 1000) / panelWatt);

        // 3. المساحة المطلوبة (اللوح 2.6 متر مربع)
        const panelArea = 2.7;
        const totalArea = (numPanels * panelArea).toFixed(1);

        // عرض النتائج
        document.getElementById('res-kw').innerText = systemSize.toFixed(2);
        document.getElementById('res-panels').innerText = numPanels;
        document.getElementById('res-area').innerText = totalArea;
        
        document.getElementById('calc-result').style.display = 'block';
        document.getElementById('calc-result').scrollIntoView({behavior: "smooth"});
    } else {
        alert("يرجى إدخال رقم صحيح للاستهلاك");
    }
}

// ================= فلتر المنتجات (Products Filter) =================
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const btns = document.querySelectorAll('.filter-btn');

    // تحديث الأزرار
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // الفلترة
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ================= Lightbox (تكبير الصور) =================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(imgElement) {
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

function closeLightbox() {
    lightbox.style.display = "none";
}


// كود تحريك روابط القائمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-links li');
    
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = '照顾 translateY(-10px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index); // تظهر الروابط واحداً تلو الآخر بفارق زمني بسيط
    });
});


// كود تغيير شكل القائمة عند النزول للأسفل
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
        // يمكن إضافة ظل خفيف عند النزول
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        nav.classList.remove('nav-scrolled');
        nav.style.boxShadow = "none";
    }
});





function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const btns = document.querySelectorAll('.filter-btn');

    // تغيير حالة الزر النشط
    btns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // إخفاء وإظهار المنتجات مع حركة انسيابية
    cards.forEach(card => {
        card.style.display = 'none'; // إخفاء الكل أولاً
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block'; // إظهار المختار فقط
            card.style.animation = 'fadeIn 0.5s ease forwards';
        }
    });
}



function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // تغيير شكل الزر النشط
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    cards.forEach(card => {
        // إذا كان التصنيف الكل أو يطابق الفئة المختارة
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block'; // إظهار
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.opacity = '0'; // إخفاء تدريجي
            card.style.display = 'none'; // إخفاء نهائي من الصفحة
        }
    });
}




