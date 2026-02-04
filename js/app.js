const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_solutions: "حلولنا",
        nav_products: "منتجاتنا",
        nav_contact: "تواصل معنا",
        title_about: "من نحن",
        about_main_desc: "تأسست شركة آفاق لحلول الطاقة الشمسية ASES في مدينة الإسكندرية – جمهورية مصر العربية عام 2025، لتكون إحدى الشركات الرائدة في قطاع الطاقة المتجددة في المنطقة. تعتمد الشركة على خبرات هندسية متقدمة وفريق عمل متخصص يمتلك خبرة تمتد لأكثر من 17 عامًا في مجال تصميم وتنفيذ وتشغيل أنظمة الطاقة البديلة.",
        about_exp_title: "خبراتنا.",
        about_exp_list: "• يضم فريقنا خبراء عملوا في مجال الطاقة المتجددة منذ عام 2008.<br>• لدينا شركاء يُعتبرون من أوائل مطوّري مشاريع الطاقة الشمسية حول العالم منذ 1995.<br>• نفذ خبراؤنا وشركاؤنا مشاريع كبرى وعملاقة في عدة دول حول العالم.",
        about_serv_title: "خدماتنا",
        about_serv_list: "نقدم خدمات شاملة ومتكاملة تشمل:<br>• دراسة وتصميم أنظمة الطاقة البديلة.<br>• توريد وتركيب وتشغيل أنظمة الطاقة الشمسية.<br>• الفحص والاختبار والاعتماد الفني للمشاريع.<br>• الاستشارات الهندسية في جميع نواحي الطاقة البديلة.<br>• حلول توفير الطاقة للمنازل والمزارع والمصانع والمدن والمشاريع الحكومية العملاقة.",
        about_fields_title: "مجالات عملنا",
        about_fields_list: "نعمل في جميع أنظمة الطاقة المتجددة:<br>• ON-GRID الأنظمة المرتبطة بالشبكة.<br>• OFF-GRID الأنظمة المنفصلة عن الشبكة.<br>• HYBRID SYSTEMS الأنظمة الهجينة.<br>• ON-TIME SYSTEMS أنظمة التشغيل الفوري.",
        about_vision_title: "رؤيتنا",
        about_vision_desc: "أن نكون الشركة الأبرز في المنطقة في تقديم حلول الطاقة المتجددة، وأن نساهم في دفع عجلة التحول العالمي نحو الطاقة النظيفة عبر مشاريع مستدامة وبجودة عالية.",
        about_goals_title: "أهدافنا",
        about_goals_list: "• نشر ثقافة الطاقة النظيفة وتقليل الاعتماد على مصادر الوقود التقليدية.<br>• تنفيذ مشاريع متكاملة تدعم التنمية المستدامة.<br>• توفير حلول طاقة اقتصادية وآمنة وذات موثوقية عالية.<br>• توسيع شبكة العلاقات العالمية مع أهم المصنعين والمطورين."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_solutions: "Solutions",
        nav_products: "Products",
        nav_contact: "Contact Us",
        title_about: "About Us",
        about_main_desc: "AFAQ Solar Energy Solutions (ASES) was established in Alexandria, Egypt in 2025, to become a leading company in the renewable energy sector. The company relies on advanced engineering expertise and a specialized team with over 17 years of experience in designing, implementing, and operating alternative energy systems.",
        about_exp_title: "Our Expertise.",
        about_exp_list: "• Our team includes experts who have worked in renewable energy since 2008.<br>• We have partners recognized as pioneer developers of solar energy projects worldwide since 1995.<br>• Our experts and partners have executed mega-projects in various countries globally.",
        about_serv_title: "Our Services",
        about_serv_list: "We provide comprehensive services including:<br>• Study and design of alternative energy systems.<br>• Supply, installation, and operation of solar systems.<br>• Technical inspection, testing, and certification.<br>• Engineering consultancy.<br>• Energy-saving solutions for homes, factories, and giant government projects.",
        about_fields_title: "Fields of Work",
        about_fields_list: "We operate in all renewable systems:<br>• ON-GRID systems.<br>• OFF-GRID systems.<br>• HYBRID SYSTEMS.<br>• ON-TIME SYSTEMS.",
        about_vision_title: "Our Vision",
        about_vision_desc: "To be the most prominent company in the region in providing renewable energy solutions and contributing to the global transition towards clean energy.",
        about_goals_title: "Our Goals",
        about_goals_list: "• Spreading clean energy culture.<br>• Implementing integrated sustainable projects.<br>• Providing safe and reliable energy solutions.<br>• Expanding global manufacturer networks."
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('selectedLang') || 'ar');
});

window.setLanguage = setLanguage;