
if (sessionStorage.getItem('tt-logo-refresh') === '1') {
    sessionStorage.removeItem('tt-logo-refresh');
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-panel');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

document.querySelectorAll('a[href^="#"]:not(.logo-link)').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.logo-link').forEach((logo) => {
    logo.addEventListener('click', (event) => {
        const href = logo.getAttribute('href') || '';
        if (!href.startsWith('#')) return;

        event.preventDefault();

        const refreshAtTop = () => {
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            const cleanUrl = location.pathname + location.search;
            if (location.hash) {
                history.replaceState(null, '', cleanUrl);
            }
            window.scrollTo({ top: 0, behavior: 'auto' });
            sessionStorage.setItem('tt-logo-refresh', '1');
            location.reload();
        };

        if (window.scrollY <= 1) {
            refreshAtTop();
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
        const started = performance.now();
        const waitForTop = () => {
            if (window.scrollY <= 1 || performance.now() - started > 1500) {
                refreshAtTop();
                return;
            }
            requestAnimationFrame(waitForTop);
        };
        requestAnimationFrame(waitForTop);
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 22px rgba(0, 0, 0, 0.7)';
    } else {
        navbar.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.6)';
    }
});



const translations = {
    hu: {
        "nav-home": "Kezdőlap",
        "nav-services": "Szolgáltatások",
        "nav-about": "Rólam",
        "nav-portfolio": "Portfólió",
        "nav-contact": "Kapcsolat",
        "nav-pricing": "Áraink",
        "hero-title": "Modern weboldalak, amelyek kiemelnek az online térben",
        "hero-desc": "Modern, gyors és mobilbarát weboldalak — magánszemélyeknek, kisvállalkozásoknak, cégeknek.",
        "hero-subtitle": "Egyedi dizájn, átlátható fejlesztés, megbízható karbantartás",
        "hero-cta-primary": "Árajánlat igénylése",
        "services-title": "Szolgáltatások",
        "service-1-title": "Weboldal készítés",
        "service-1-desc": "Reszponzív, Modern és gyors weboldalak egyedi igényekre.",
        "service-2-title": "Webshopok",
        "service-2-desc": "Teljes körű e-kereskedelmi megoldások, biztonságos fizetéssel.",
        "service-3-title": "Karbantartás",
        "service-3-desc": "Frissítések, biztonsági mentések és folyamatos támogatás.",
        "pricing-title": "Áraink",
        "pricing-subtitle": "Átlátható csomagok, rugalmas bővítési lehetőségekkel.",
        "price-1-title": "Starter",
        "price-1-val": "100 000 Ft-tól",
        "price-1-f1": "1-3 oldalas bemutatkozó oldal",
        "price-1-f2": "Mobilbarát, gyors betöltés",
        "price-1-f3": "Alap SEO beállítások",
        "price-2-title": "Standard",
        "price-2-val": "149 000 Ft-tól",
        "price-2-f1": "5-8 aloldal, egyedi dizájn",
        "price-2-f2": "Kapcsolati űrlap és térkép",
        "price-2-f3": "Adminisztrációs útmutató",
        "price-3-title": "Premium",
        "price-3-val": "299 000 Ft-tól",
        "price-3-f1": "Teljes arculati tervezés",
        "price-3-f2": "Komplex funkciók és integrációk",
        "price-3-f3": "Prémium karbantartási opciók",
        "pricing-note": "Az árak tájékoztató jellegűek, pontos árajánlatot az igények alapján adunk.",
        "portfolio-title": "Portfólió",
        "port-1-title": "Vállalati weboldal",
        "port-1-desc": "Bemutató oldal nagyvállalati stílusban.",
        "port-2-title": "Kisbolt webshop",
        "port-2-desc": "Egyszerű termékfeltöltés és modern vásárlói élmény.",
        "port-3-title": "Landing oldal",
        "port-3-desc": "Konverzió-optimalizált kampányoldalak.",
        "about-title": "Rólam",
        "about-lead": "Egyedi ötletekből digitális megoldások.",
        "about-p1": "A TT-t azzal a céllal hoztam létre, hogy segítsek a vállalkozásoknak megvalósítani elképzeléseiket a digitális térben. Számomra a webfejlesztés nem csupán kódolásból és weboldalak elkészítéséből áll, hanem arról is szól, hogyan lehet egy ötletből átgondolt, modern és valóban hasznos megoldást létrehozni.",
        "about-p2": "Programozási tapasztalatomra és a technológia iránti érdeklődésemre építve minden projektben arra törekszem, hogy az elkészült weboldal ne csak megjelenésében legyen igényes, hanem felépítésében, működésében és felhasználói élményében is megfeleljen a céloknak.",
        "about-p3": "A TT egy személyes vállalkozás, ahol minden projektet én kezelek az első egyeztetéstől a megvalósításon át egészen az átadásig. Ez lehetővé teszi a közvetlen kommunikációt, az átlátható munkafolyamatokat és azt, hogy minden részletre megfelelő figyelmet fordítsak.",
        "about-p4": "Nem előre gyártott megoldásokban gondolkodom. Minden vállalkozásnak mások az igényei, ezért fontosnak tartom, hogy a közös munka során megismerjem az elképzeléseket, megértsem a célokat, és ezekhez igazítsam a fejlesztést.",
        "about-p5": "A célom nem egyszerűen egy weboldal elkészítése, hanem egy olyan digitális megoldás létrehozása, amely hosszú távon is értéket képvisel a vállalkozás számára.",
        "about-p6": "Számomra minden projekt lehetőség arra, hogy valami újat alkossak, fejlődjek, és olyan munkát adjak ki a kezemből, amelyre én is büszke lehetek.",
        "about-tagline": "TT – Nem sablonokban gondolkodom. Megoldásokat építek.",
        "contact-title": "Kapcsolat",
        "contact-desc": "Küldj e-mailt az igényeiddel, vagy töltsd ki az űrlapot, és 24 órán belül válaszolunk.",
        "contact-det1-title": "E-mail cím",
        "contact-phone-title": "Telefonszám",
        "form-name-label": "Név",
        "form-name-ph": "Kovács János",
        "form-email-label": "E-mail cím",
        "form-email-ph": "janos@pelda.hu",
        "form-message-label": "Üzenet / Igények",
        "form-message-ph": "Írd le röviden a projektet...",
        "form-submit": "Üzenet küldése",
        "footer-gtc": "ÁSZF",
        "footer-privacy": "Adatvédelmi szerződés",
        "nav-blog": "Blog",
        "blog-back": "← Vissza a főoldalra",
        "blog-title": "TT Blog",
        "blog-subtitle": "Tippek, trendek és tudás a webfejlesztés világából",
        "blog-p1-date": "2026. február 22.",
        "blog-p1-title": "Miért fontos a mobilbarát weboldal?",
        "blog-p1-desc1": "A mai felhasználók többsége mobilról böngészi az internetet. A statisztikák azt mutatják, hogy az internetes forgalom 60-70%-a mobil eszközökről érkezik. Ennek megfelelően a weboldal tervezésénél azt kell elsősorban figyelembe venni, hogy a felhasználók mobil telefonról érkeznek.",
        "blog-p1-desc2": "A mobilbarát weboldal nem csupán esztétikailag fontos, hanem a keresőmotorok (Google) is preferálják az olyan oldalakat, amelyek jól működnek kis képernyőkön. Ezt az úgynevezett \"mobile-first indexing\" szolgáltatás alatt értjük.",
        "blog-p1-read": "📝 5 perc olvasás",
        "blog-p1-team": "👤 TT csapat",
        "blog-p2-date": "2026. február 15.",
        "blog-p2-title": "SEO alapok: Hogyan javítsd meg a keresőmotor-rangsorolásod",
        "blog-p2-desc1": "A Search Engine Optimization (SEO) azon technikák összessége, amelyekkel a weboldalad jobb pozíciót érhet el a Google keresési eredményeiben. Ez nem csak a nagyobb vállalatok feladata – a kisvállalkozások és magánszemélyek számára még inkább kritikus lehet.",
        "blog-p2-desc2": "Az alapvető SEO elemek közé tartozik a megfelelő kulcsszóhasználat, a meta description optimalizálása, az oldal betöltési sebességének javítása, valamint a backlinkek szerzése. Ezen faktorok kombinálásával lépésenként emelkedhet az oldal láthatósága a keresőmotorban.",
        "blog-p2-read": "📝 8 perc olvasás",
        "blog-p2-team": "👤 TT csapat",
        "blog-p3-date": "2026. február 8.",
        "blog-p3-title": "A weboldalad betöltési sebessége kritikus",
        "blog-p3-desc1": "Az internethasználók türelmetlenek. Ha egy oldal több mint 3 másodpercig betöltődik, a látogatók nagy valószínűséggel elhagyják az oldalt. Ez közvetlenül befolyásolja a konverziót és a keresőmotorban való rangsorolást is.",
        "blog-p3-desc2": "A weboldal sebessége számos faktortól függ: a képek optimalizálása, a kód minimalizálása, a cache kezelés, valamint a hosting minősége. Ezért fontos, hogy a webfejlesztő ezeket az elemeket már a tervezés szakaszában figyelembe vegye.",
        "blog-p3-read": "📝 6 perc olvasás",
        "blog-p3-team": "👤 TT csapat",
        "blog-p4-date": "2026. január 30.",
        "blog-p4-title": "Weboldal biztonsága: Mit kell tudnod az SSL tanúsítványról?",
        "blog-p4-desc1": "Az SSL tanúsítvány már nem luxus, hanem szükséglet. Biztosítja az adatszállítás titkosítottságát a felhasználó böngészője és a szerver között. A Google 2018 óta az összes HTTP oldalt \"nem biztonságos\"-nak jelöli.",
        "blog-p4-desc2": "A TT oldalain segítünk kiválasztani és beállítani az Ön weboldalához szükséges SSL tanúsítványt, hogy ügyfeleink információja mindig védett maradjon.",
        "blog-p4-read": "📝 7 perc olvasás",
        "blog-p4-team": "👤 TT csapat"
    },
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-about": "About Me",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "nav-pricing": "Pricing",
        "hero-title": "Modern websites that stand out in the digital space",
        "hero-desc": "Modern, fast, and mobile-friendly websites — for individuals, small businesses, and corporations.",
        "hero-subtitle": "Unique design, transparent development, reliable maintenance",
        "hero-cta-primary": "Request a Quote",
        "services-title": "Services",
        "service-1-title": "Website Development",
        "service-1-desc": "Responsive, modern, and fast websites customized to your needs.",
        "service-2-title": "Webshops",
        "service-2-desc": "End-to-end e-commerce solutions with secure payment integrations.",
        "service-3-title": "Maintenance",
        "service-3-desc": "Updates, security backups, and continuous support.",
        "pricing-title": "Pricing",
        "pricing-subtitle": "Transparent packages with flexible customization options.",
        "price-1-title": "Starter",
        "price-1-val": "From 100,000 HUF",
        "price-1-f1": "1-3 page presentation website",
        "price-1-f2": "Mobile-friendly, fast loading speed",
        "price-1-f3": "Basic SEO configuration",
        "price-2-title": "Standard",
        "price-2-val": "From 149,000 HUF",
        "price-2-f1": "5-8 subpages, custom layout design",
        "price-2-f2": "Contact form and map integration",
        "price-2-f3": "Administration and user guide",
        "price-3-title": "Premium",
        "price-3-val": "From 299,000 HUF",
        "price-3-f1": "Complete brand identity design",
        "price-3-f2": "Complex operations and third-party API integrations",
        "price-3-f3": "Premium maintenance and support plans",
        "pricing-note": "Prices are indicative, precise quotes are prepared based on individual project requirements.",
        "portfolio-title": "Portfolio",
        "port-1-title": "Corporate Website",
        "port-1-desc": "Presentation page styled for corporate business needs.",
        "port-2-title": "Small Business Webstore",
        "port-2-desc": "Simple product uploading process and modern customer experience.",
        "port-3-title": "Landing Page",
        "port-3-desc": "Conversion-optimized landing and campaign sites.",
        "about-title": "About Me",
        "about-lead": "Digital solutions from unique ideas.",
        "about-p1": "I created TT to help businesses bring their ideas to life in the digital space. For me, web development is not only about writing code and building websites — it is also about turning an idea into a thoughtful, modern, and genuinely useful solution.",
        "about-p2": "Drawing on my programming experience and interest in technology, I aim for every website to meet its goals not only in appearance, but also in structure, functionality, and user experience.",
        "about-p3": "TT is a personal business. I handle every project myself, from the first conversation through implementation to handover. That allows direct communication, transparent workflows, and proper attention to every detail.",
        "about-p4": "I do not think in ready-made solutions. Every business has different needs, so I make a point of getting to know the ideas, understanding the goals, and shaping the development around them.",
        "about-p5": "My goal is not simply to deliver a website, but to create a digital solution that continues to create value for the business over the long term.",
        "about-p6": "For me, every project is a chance to create something new, keep growing, and hand over work I can be proud of.",
        "about-tagline": "TT – I don't think in templates. I build solutions.",
        "contact-title": "Contact Us",
        "contact-desc": "Send us an email outlining your project requirements or fill out the form, and we will reply within 24 hours.",
        "contact-det1-title": "Our Email",
        "contact-phone-title": "Phone number",
        "form-name-label": "Name",
        "form-name-ph": "John Doe",
        "form-email-label": "Email Address",
        "form-email-ph": "john@example.com",
        "form-message-label": "Message / Project details",
        "form-message-ph": "Briefly describe your project...",
        "form-submit": "Send Message",
        "footer-gtc": "Terms & Conditions",
        "footer-privacy": "Privacy Policy",
        "nav-blog": "Blog",
        "blog-back": "← Back to main page",
        "blog-title": "TT Blog",
        "blog-subtitle": "Tips, trends, and knowledge from the world of web development",
        "blog-p1-date": "February 22, 2026",
        "blog-p1-title": "Why is a Mobile-Friendly Website Important?",
        "blog-p1-desc1": "The majority of today's users browse the internet on mobile devices. Statistics show that 60-70% of web traffic comes from mobile devices. Accordingly, when designing a website, the primary consideration should be mobile responsiveness.",
        "blog-p1-desc2": "A mobile-friendly website is not only visually important, but search engines like Google also favor websites that perform well on small screens under mobile-first indexing.",
        "blog-p1-read": "📝 5 min read",
        "blog-p1-team": "👤 TT team",
        "blog-p2-date": "February 15, 2026",
        "blog-p2-title": "SEO Basics: How to Improve Your Search Engine Ranking",
        "blog-p2-desc1": "Search Engine Optimization (SEO) is the set of techniques used to help your website achieve a better ranking in Google search results. This is critical for small businesses and individuals alike.",
        "blog-p2-desc2": "Core SEO elements include strategic keyword usage, optimizing meta descriptions, improving page load speeds, and building backlinks to steadily increase online visibility.",
        "blog-p2-read": "📝 8 min read",
        "blog-p2-team": "👤 TT team",
        "blog-p3-date": "February 8, 2026",
        "blog-p3-title": "Your Website's Loading Speed is Critical",
        "blog-p3-desc1": "Internet users are impatient. If a page takes more than 3 seconds to load, visitors are highly likely to bounce. This directly impacts conversion rates and search rankings.",
        "blog-p3-desc2": "Speed depends on image optimization, code minification, proper caching, and quality hosting. It's essential to address speed right from the planning phase.",
        "blog-p3-read": "📝 6 min read",
        "blog-p3-team": "👤 TT team",
        "blog-p4-date": "January 30, 2026",
        "blog-p4-title": "Website Security: What You Need to Know About SSL Certificates",
        "blog-p4-desc1": "An SSL certificate is no longer optional—it is a necessity. It encrypts data sent between browser and server. Google flags all non-SSL HTTP sites as 'not secure'.",
        "blog-p4-desc2": "At TT, we help you select and configure the right SSL certificate for your site so your visitors' data stays protected.",
        "blog-p4-read": "📝 7 min read",
        "blog-p4-team": "👤 TT team"
    }
};

let currentLang = localStorage.getItem('siteLang') || 'hu';

window.setLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update toggle button text
    const langTextEl = document.querySelector('.lang-toggle-btn .lang-text');
    if (langTextEl) {
        langTextEl.textContent = lang === 'hu' ? 'EN' : 'HU';
    }
};

window.toggleLanguage = function() {
    const nextLang = currentLang === 'hu' ? 'en' : 'hu';
    window.setLanguage(nextLang);
};

// Initial language setup
const initLanguage = () => window.setLanguage(currentLang);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
