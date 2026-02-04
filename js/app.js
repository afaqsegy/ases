
// ======================= app.js =======================
const translations={
 ar:{
  nav_home:"الرئيسية",
  nav_about:"من نحن",
  hero_title:"AFAQ SOLAR ENERGY SOLUTIONS - ASES",
  about_title:"من نحن",
  about_text:`تأسست شركة آفاق لحلول الطاقة الشمسية في مدينة الإسكندرية – جمهورية مصر العربية عام 2025، لتكون إحدى الشركات الرائدة في قطاع الطاقة المتجددة في المنطقة. تعتمد الشركة على خبرات هندسية متقدمة وفريق عمل متخصص يمتلك خبرة تمتد لأكثر من 17 عامًا في مجال تصميم وتنفيذ وتشغيل أنظمة الطاقة البديلة.

خبراتنا
• يضم فريقنا خبراء عملوا في مجال الطاقة المتجددة منذ عام 2008.
• لدينا شركاء يُعتبرون من أوائل مطوّري مشاريع الطاقة الشمسية حول العالم منذ 1995.
• نفذ خبراؤنا وشركاؤنا مشاريع كبرى وعملاقة في عدة دول حول العالم.

خدماتنا
نقدم خدمات شاملة ومتكاملة تشمل:
• دراسة وتصميم أنظمة الطاقة البديلة.
• توريد وتركيب وتشغيل أنظمة الطاقة الشمسية.
• الفحص والاختبار والاعتماد الفني للمشاريع.
• الاستشارات الهندسية في جميع نواحي الطاقة البديلة.
• حلول توفير الطاقة للمنازل والمزارع والمصانع والمدن والمشاريع الحكومية العملاقة.

مجالات عملنا
نعمل في جميع أنظمة الطاقة المتجددة:
• ON-GRID الأنظمة المرتبطة بالشبكة.
• OFF-GRID الأنظمة المنفصلة عن الشبكة.
• HYBRID SYSTEMS الأنظمة الهجينة.
• ON-TIME SYSTEMS أنظمة التشغيل الفوري.

وكالاتنا وشركاؤنا
UGP
ولدينا شبكة من الشركاء الاستراتيجيين في عدة دول لتوفير أحدث تقنيات الطاقة المتجددة.

رؤيتنا
أن نكون الشركة الأبرز في المنطقة في تقديم حلول الطاقة المتجددة، وأن نساهم في دفع عجلة التحول العالمي نحو الطاقة النظيفة عبر مشاريع مستدامة وبجودة عالية.

أهدافنا
• نشر ثقافة الطاقة النظيفة وتقليل الاعتماد على مصادر الوقود التقليدية.
• تنفيذ مشاريع متكاملة تدعم التنمية المستدامة.
• توفير حلول طاقة اقتصادية وآمنة وذات موثوقية عالية.
• توسيع شبكة العلاقات العالمية مع أهم المصنعين والمطورين.

توجهنا
نعتمد أعلى معايير الجودة والاحترافية في جميع مراحل العمل، مع التركيز على الابتكار الهندسي والكفاءة التشغيلية لتحقيق أفضل النتائج.

موقع الشركة`
 }
};

let currentLang='ar';

function formatAboutText(text){
 const titles=["خبراتنا","خدماتنا","مجالات عملنا","وكالاتنا وشركاؤنا","رؤيتنا","أهدافنا","توجهنا","موقع الشركة"];
 let html=text;
 titles.forEach(t=>{
  html=html.replace(new RegExp('^'+t+'$','gm'),`<h3 class="about-heading">${t}</h3>`);
 });
 html=html.replace(/•/g,'<span class="bullet">•</span>');
 return html.replace(/\n/g,'<br>');
}

// lightbox
const lightbox=document.createElement('div');
lightbox.className='lightbox';
lightbox.innerHTML='<span class="lightbox-close">×</span><img />';
document.body.appendChild(lightbox);
const lbImg=lightbox.querySelector('img');
lightbox.querySelector('.lightbox-close').onclick=()=>lightbox.classList.remove('active');
lightbox.onclick=e=>{if(e.target===lightbox)lightbox.classList.remove('active')};

document.querySelectorAll('.about-images img').forEach(img=>{
 img.onclick=()=>{lbImg.src=img.src;lightbox.classList.add('active')};
});

// brochure slider logic
const slider=document.querySelector('.brochure-slider');
const btnPrev=document.querySelector('.brochure-btn.prev');
const btnNext=document.querySelector('.brochure-btn.next');

btnNext.onclick=()=>slider.scrollBy({left:250,behavior:'smooth'});
btnPrev.onclick=()=>slider.scrollBy({left:-250,behavior:'smooth'});

// auto scroll
setInterval(()=>{
 if(slider) slider.scrollBy({left:250,behavior:'smooth'});
},4000);

// bind lightbox to brochure images
document.querySelectorAll('.brochure-slider img').forEach(img=>{
 img.onclick=()=>{lbImg.src=img.src;lightbox.classList.add('active')};
});

function applyLang(){
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const key=el.dataset.i18n;
  if(key==='about_text') el.innerHTML=formatAboutText(translations[currentLang][key]);
  else el.textContent=translations[currentLang][key];
 });
}

applyLang();
