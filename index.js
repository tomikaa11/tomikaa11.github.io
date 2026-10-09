
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 22px rgba(0, 0, 0, 0.7)';
    } else {
        navbar.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.6)';
    }
});


const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotPanel = document.querySelector('.chatbot-panel');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotForm = document.querySelector('.chatbot-form');
const chatbotInput = document.querySelector('.chatbot-input');
const chatbotMessages = document.querySelector('.chatbot-messages');

const translations = {
    hu: {
        "nav-home": "Kezdőlap",
        "nav-services": "Szolgáltatások",
        "nav-about": "Rólunk",
        "nav-portfolio": "Portfólió",
        "nav-contact": "Kapcsolat",
        "nav-pricing": "Áraink",
        "hero-title": "Modern weboldalak, amelyek kiemelnek az online térben<br>SHADOWWSITE",
        "hero-desc": "Modern, gyors és mobilbarát weboldalak — magánszemélyeknek, kisvállalkozásoknak, cégeknek.",
        "hero-subtitle": "Egyedi dizájn, átlátható fejlesztés, megbízható karbantartás",
        "hero-cta-primary": "Kérj árajánlatot",
        "hero-cta-secondary": "Szolgáltatások",
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
        "portfolio-hint": "Kattints az első kártyára a bemutató oldal megnyitásához.",
        "port-1-title": "Vállalati weboldal",
        "port-1-desc": "Bemutató oldal nagyvállalati stílusban.",
        "port-2-title": "Kisbolt webshop",
        "port-2-desc": "Egyszerű termékfeltöltés és modern vásárlói élmény.",
        "port-3-title": "Landing oldal",
        "port-3-desc": "Konverzió-optimalizált kampányoldalak.",
        "about-title": "Rólunk",
        "about-p1": "Z generációs fiatal csapatként pontosan értjük a mai digitális világ gyors változásait, az aktuális trendeket és azt, hogyan gondolkodnak a modern felhasználók.",
        "about-p2": "Az első beszélgetéstől a kész weboldalig végigkísérjük ügyfeleinket, hogy elképzeléseik valódi, működő megoldásokká formálódjanak. Munkánk alapja az átlátható folyamat és az ügyfélközpontú kommunikáció.",
        "about-p3": "A tervezés során kiemelt figyelmet fordítunk a letisztult megjelenésre, a logikus felépítésre és a gyors, felhasználóbarát működésre. Fiatalos, lendületes szemléletünk ötvözi a kreativitást a tudatos tervezéssel, így weboldalaink nemcsak esztétikusak, hanem hatékonyak is.",
        "about-b1-title": "Z-Generációs lendület",
        "about-b1-desc": "A legújabb trendek és technológiák naprakész alkalmazása.",
        "about-b2-title": "Transzparens folyamat",
        "about-b2-desc": "Minden lépés érthető, követhető és kiszámítható az elejétől a végéig.",
        "about-b3-title": "Egyedi dizájn",
        "about-b3-desc": "Nincsenek sablonok, minden oldalt a te márkádra szabunk.",
        "contact-title": "Kapcsolat",
        "contact-desc": "Küldj e-mailt az igényeiddel, vagy töltsd ki az űrlapot, és 24 órán belül válaszolunk.",
        "contact-det1-title": "E-mail cím",
        "contact-phone-title": "Telefonszám",
        "contact-det2-title": "Gyors segítség",
        "contact-chat-link": "Csevegj az élő chatbotunkkal!",
        "form-name-label": "Név",
        "form-name-ph": "Kovács János",
        "form-email-label": "E-mail cím",
        "form-email-ph": "janos@pelda.hu",
        "form-message-label": "Üzenet / Igények",
        "form-message-ph": "Írd le röviden a projektet...",
        "form-submit": "Üzenet küldése",
        "footer-gtc": "ÁSZF",
        "footer-privacy": "Adatvédelmi szerződés",
        "chat-toggle": "Kérdésed van?",
        "chat-title": "SHADOW Chat",
        "chat-input-ph": "Írd be a kérdésed...",
        "chat-send": "Küldés",
        "chat-welcome": "Szia! Miben segíthetek?",
        "chat-default-reply": "Köszönöm a kérdést! Írd le röviden az igényt, és hamarosan válaszolunk.",
        "nav-blog": "Blog",
        "blog-back": "← Vissza a főoldalra",
        "blog-title": "SHADOWWSITE Blog",
        "blog-subtitle": "Tippek, trendek és tudás a webfejlesztés világából",
        "blog-p1-date": "2026. február 22.",
        "blog-p1-title": "Miért fontos a mobilbarát weboldal?",
        "blog-p1-desc1": "A mai felhasználók többsége mobilról böngészi az internetet. A statisztikák azt mutatják, hogy az internetes forgalom 60-70%-a mobil eszközökről érkezik. Ennek megfelelően a weboldal tervezésénél azt kell elsősorban figyelembe venni, hogy a felhasználók mobil telefonról érkeznek.",
        "blog-p1-desc2": "A mobilbarát weboldal nem csupán esztétikailag fontos, hanem a keresőmotorok (Google) is preferálják az olyan oldalakat, amelyek jól működnek kis képernyőkön. Ezt az úgynevezett \"mobile-first indexing\" szolgáltatás alatt értjük.",
        "blog-p1-read": "📝 5 perc olvasás",
        "blog-p1-team": "👤 SHADOWWSITE csapat",
        "blog-p2-date": "2026. február 15.",
        "blog-p2-title": "SEO alapok: Hogyan javítsd meg a keresőmotor-rangsorolásod",
        "blog-p2-desc1": "A Search Engine Optimization (SEO) azon technikák összessége, amelyekkel a weboldalad jobb pozíciót érhet el a Google keresési eredményeiben. Ez nem csak a nagyobb vállalatok feladata – a kisvállalkozások és magánszemélyek számára még inkább kritikus lehet.",
        "blog-p2-desc2": "Az alapvető SEO elemek közé tartozik a megfelelő kulcsszóhasználat, a meta description optimalizálása, az oldal betöltési sebességének javítása, valamint a backlinkek szerzése. Ezen faktorok kombinálásával lépésenként emelkedhet az oldal láthatósága a keresőmotorban.",
        "blog-p2-read": "📝 8 perc olvasás",
        "blog-p2-team": "👤 SHADOWWSITE csapat",
        "blog-p3-date": "2026. február 8.",
        "blog-p3-title": "A weboldalad betöltési sebessége kritikus",
        "blog-p3-desc1": "Az internethasználók türelmetlenek. Ha egy oldal több mint 3 másodpercig betöltődik, a látogatók nagy valószínűséggel elhagyják az oldalt. Ez közvetlenül befolyásolja a konverziót és a keresőmotorban való rangsorolást is.",
        "blog-p3-desc2": "A weboldal sebessége számos faktortól függ: a képek optimalizálása, a kód minimalizálása, a cache kezelés, valamint a hosting minősége. Ezért fontos, hogy a webfejlesztő ezeket az elemeket már a tervezés szakaszában figyelembe vegye.",
        "blog-p3-read": "📝 6 perc olvasás",
        "blog-p3-team": "👤 SHADOWWSITE csapat",
        "blog-p4-date": "2026. január 30.",
        "blog-p4-title": "Weboldal biztonsága: Mit kell tudnod az SSL tanúsítványról?",
        "blog-p4-desc1": "Az SSL tanúsítvány már nem luxus, hanem szükséglet. Biztosítja az adatszállítás titkosítottságát a felhasználó böngészője és a szerver között. A Google 2018 óta az összes HTTP oldalt \"nem biztonságos\"-nak jelöli.",
        "blog-p4-desc2": "A SHADOWWSITE oldalain segítünk kiválasztani és beállítani az Ön weboldalához szükséges SSL tanúsítványt, hogy ügyfeleink információja mindig védett maradjon.",
        "blog-p4-read": "📝 7 perc olvasás",
        "blog-p4-team": "👤 SHADOWWSITE csapat"
    },
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-about": "About Us",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "nav-pricing": "Pricing",
        "hero-title": "Modern websites that stand out in the digital space<br>SHADOWWSITE",
        "hero-desc": "Modern, fast, and mobile-friendly websites — for individuals, small businesses, and corporations.",
        "hero-subtitle": "Unique design, transparent development, reliable maintenance",
        "hero-cta-primary": "Request a Quote",
        "hero-cta-secondary": "Services",
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
        "portfolio-hint": "Click the first card to open the demo website.",
        "port-1-title": "Corporate Website",
        "port-1-desc": "Presentation page styled for corporate business needs.",
        "port-2-title": "Small Business Webstore",
        "port-2-desc": "Simple product uploading process and modern customer experience.",
        "port-3-title": "Landing Page",
        "port-3-desc": "Conversion-optimized landing and campaign sites.",
        "about-title": "About Us",
        "about-p1": "As a Gen Z young team, we understand today's fast-changing digital environment, current trends, and how modern users think.",
        "about-p2": "We accompany our clients from the first kickoff conversation to the finished, launched website, ensuring that ideas take shape as functional digital solutions. Our work is built upon transparency and client-first communication.",
        "about-p3": "During development, we pay premium attention to visual clarity, logical structure, and rapid, user-friendly speeds. Our youthful and energetic perspective combines creativity with structured planning, so our websites are not only aesthetic but highly effective.",
        "about-b1-title": "Gen Z Momentum",
        "about-b1-desc": "Up-to-date application of the latest modern trends and web technologies.",
        "about-b2-title": "Transparent Process",
        "about-b2-desc": "Every single step is clear, trackable, and predictable from beginning to end.",
        "about-b3-title": "Custom Design",
        "about-b3-desc": "No pre-made templates used, we tailor every single page to represent your brand.",
        "contact-title": "Contact Us",
        "contact-desc": "Send us an email outlining your project requirements or fill out the form, and we will reply within 24 hours.",
        "contact-det1-title": "Our Email",
        "contact-phone-title": "Phone number",
        "contact-det2-title": "Quick Help",
        "contact-chat-link": "Chat with our live support bot!",
        "form-name-label": "Name",
        "form-name-ph": "John Doe",
        "form-email-label": "Email Address",
        "form-email-ph": "john@example.com",
        "form-message-label": "Message / Project details",
        "form-message-ph": "Briefly describe your project...",
        "form-submit": "Send Message",
        "footer-gtc": "Terms & Conditions",
        "footer-privacy": "Privacy Policy",
        "chat-toggle": "Have a question?",
        "chat-title": "SHADOW Chat",
        "chat-input-ph": "Type your question here...",
        "chat-send": "Send",
        "chat-welcome": "Hello! How can I help you today?",
        "chat-default-reply": "Thank you for your question! Briefly describe what you need, and we will reply soon.",
        "nav-blog": "Blog",
        "blog-back": "← Back to main page",
        "blog-title": "SHADOWWSITE Blog",
        "blog-subtitle": "Tips, trends, and knowledge from the world of web development",
        "blog-p1-date": "February 22, 2026",
        "blog-p1-title": "Why is a Mobile-Friendly Website Important?",
        "blog-p1-desc1": "The majority of today's users browse the internet on mobile devices. Statistics show that 60-70% of web traffic comes from mobile devices. Accordingly, when designing a website, the primary consideration should be mobile responsiveness.",
        "blog-p1-desc2": "A mobile-friendly website is not only visually important, but search engines like Google also favor websites that perform well on small screens under mobile-first indexing.",
        "blog-p1-read": "📝 5 min read",
        "blog-p1-team": "👤 SHADOWWSITE team",
        "blog-p2-date": "February 15, 2026",
        "blog-p2-title": "SEO Basics: How to Improve Your Search Engine Ranking",
        "blog-p2-desc1": "Search Engine Optimization (SEO) is the set of techniques used to help your website achieve a better ranking in Google search results. This is critical for small businesses and individuals alike.",
        "blog-p2-desc2": "Core SEO elements include strategic keyword usage, optimizing meta descriptions, improving page load speeds, and building backlinks to steadily increase online visibility.",
        "blog-p2-read": "📝 8 min read",
        "blog-p2-team": "👤 SHADOWWSITE team",
        "blog-p3-date": "February 8, 2026",
        "blog-p3-title": "Your Website's Loading Speed is Critical",
        "blog-p3-desc1": "Internet users are impatient. If a page takes more than 3 seconds to load, visitors are highly likely to bounce. This directly impacts conversion rates and search rankings.",
        "blog-p3-desc2": "Speed depends on image optimization, code minification, proper caching, and quality hosting. It's essential to address speed right from the planning phase.",
        "blog-p3-read": "📝 6 min read",
        "blog-p3-team": "👤 SHADOWWSITE team",
        "blog-p4-date": "January 30, 2026",
        "blog-p4-title": "Website Security: What You Need to Know About SSL Certificates",
        "blog-p4-desc1": "An SSL certificate is no longer optional—it is a necessity. It encrypts data sent between browser and server. Google flags all non-SSL HTTP sites as 'not secure'.",
        "blog-p4-desc2": "At SHADOWWSITE, we help you select and configure the right SSL certificate for your site so your visitors' data stays protected.",
        "blog-p4-read": "📝 7 min read",
        "blog-p4-team": "👤 SHADOWWSITE team"
    }
};

const localizedChatbotReplies = {
    hu: [
        {
            keywords: ['programozási nyelv', 'programozási nyelvek', 'milyen nyelven', 'milyen technológiával', 'technológia', 'html', 'css', 'javascript'],
            reply: 'Az oldalak alapját HTML, CSS és JavaScript adja. A pontos technológiát az igényekhez igazítjuk; összetettebb funkcióknál egyeztetjük a megfelelő megoldást.'
        },
        {
            keywords: ['mobilbarát', 'mobilon', 'telefonon', 'reszponzív', 'responsive'],
            reply: 'Igen, az oldalakat mobilra és más képernyőméretekre is optimalizáljuk, hogy minden eszközön jól használhatók legyenek.'
        },
        {
            keywords: ['seo', 'keresőoptimalizálás', 'google találat', 'keresőben'],
            reply: 'Az alap SEO-beállítások a csomag részét képezik. A részletes keresőoptimalizálási igényeket az ajánlatkéréskor tudjuk egyeztetni.'
        },
        {
            keywords: ['szöveget', 'szövegeket', 'képeket', 'fotókat', 'tartalmat', 'tartalom'],
            reply: 'A szövegek és képek rendelkezésre állását érdemes a projekt elején egyeztetni. Írd meg, miben van szükséged segítségre, és megbeszéljük a lehetőségeket.'
        },
        {
            keywords: ['domain', 'tárhely', 'hoszting', 'hosting'],
            reply: 'A domainnel és tárhellyel kapcsolatos igényeket a projekt elején egyeztetjük, és segítünk megtalálni a megfelelő megoldást.'
        },
        {
            keywords: ['egyedi dizájn', 'egyedi design', 'sablon', 'arculat', 'megjelenés'],
            reply: 'Egyedi megjelenésű oldalakat készítünk, az arculatot és a funkciókat a vállalkozásodhoz és az igényeidhez igazítva.'
        },
        {
            keywords: ['ár', 'árajánlat', 'költség', 'díj', 'csomag', 'árak'],
            reply: 'Az árajánlatot a projekt részletei alapján készítjük. Írd meg az igényeidet, és 24 órán belül visszajelzünk.'
        },
        {
            keywords: ['webshop', 'bolt', 'e-kereskedelem'],
            reply: 'Webshopot is készítünk: termékkezelés, fizetés, szállítási beállítások és admin felület is megoldható.'
        },
        {
            keywords: ['idő', 'határidő', 'mennyi', 'mikor', 'kész', 'készen lesz', 'mennyi idő', 'mennyi idő alatt'],
            reply: 'A legtöbb projekt 1–4 hét alatt készül el a terjedelemtől és az anyagok rendelkezésre állásától függően.'
        },
        {
            keywords: ['karbantartás', 'frissítés', 'támogatás', 'utólagos', 'utólag', 'később', 'későbbi'],
            reply: 'Vállalunk karbantartást, frissítést és folyamatos támogatást is.'
        },
        {
            keywords: ['kapcsolat', 'email', 'telefon', 'elérhetőség', 'hogyan', 'hogy', 'hol', 'elérhetőségek'],
            reply: 'Írj a shadowwsite@gmail.com címre, vagy hagyd itt a kérdésed, és visszajelzünk.'
        }
    ],
    en: [
        {
            keywords: ['programming language', 'what language', 'technology', 'technologies', 'html', 'css', 'javascript'],
            reply: 'Websites are built on HTML, CSS, and JavaScript. We choose the exact technologies based on your needs and discuss suitable options for more complex features.'
        },
        {
            keywords: ['mobile-friendly', 'mobile friendly', 'on mobile', 'responsive'],
            reply: 'Yes, we optimize websites for mobile and other screen sizes so they work well across devices.'
        },
        {
            keywords: ['seo', 'search engine optimization', 'google ranking', 'search results'],
            reply: 'Basic SEO setup is included in our packages. We can discuss more detailed search optimization requirements when you request a quote.'
        },
        {
            keywords: ['text', 'texts', 'images', 'photos', 'content'],
            reply: 'It is best to discuss the availability of text and images at the start of the project. Tell us what you need help with, and we can talk through the options.'
        },
        {
            keywords: ['domain', 'hosting'],
            reply: 'We discuss domain and hosting requirements at the start of the project and can help you find a suitable solution.'
        },
        {
            keywords: ['custom design', 'template', 'branding', 'visual design'],
            reply: 'We create custom-designed websites, tailoring the look and functionality to your business and requirements.'
        },
        {
            keywords: ['price', 'quote', 'cost', 'fee', 'package', 'prices', 'pricing'],
            reply: 'We prepare the quote based on the project details. Write us your requirements, and we will get back to you within 24 hours.'
        },
        {
            keywords: ['webshop', 'store', 'shop', 'e-commerce'],
            reply: 'We also build webshops: product management, payment, shipping setup, and an admin dashboard can be implemented.'
        },
        {
            keywords: ['time', 'deadline', 'how long', 'when', 'ready', 'completed', 'duration'],
            reply: 'Most projects are completed in 1 to 4 weeks, depending on scope and the availability of assets.'
        },
        {
            keywords: ['maintenance', 'update', 'support', 'aftercare', 'later', 'future'],
            reply: 'We offer maintenance, updates, and continuous support after launch.'
        },
        {
            keywords: ['contact', 'email', 'phone', 'reach', 'how to', 'address', 'details'],
            reply: 'Write to shadowwsite@gmail.com, or leave your question here, and we will get back to you.'
        }
    ]
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

window.toggleTheme = function() {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('siteTheme', next);
};

window.toggleLanguage = function() {
    const nextLang = currentLang === 'hu' ? 'en' : 'hu';
    window.setLanguage(nextLang);
};

const saveChatHistory = () => {
    const messages = Array.from(chatbotMessages.children).map(msg => ({
        text: msg.textContent,
        type: msg.classList.contains('user') ? 'user' : 'bot'
    }));
    localStorage.setItem('shadowChatHistory', JSON.stringify(messages));
};

const loadChatHistory = () => {
    const history = localStorage.getItem('shadowChatHistory');
    if (history) {
        const messages = JSON.parse(history);
        messages.forEach(msg => {
            addMessageWithoutSave(msg.text, msg.type);
        });
    }
};

const addMessageWithoutSave = (text, type) => {
    if (!chatbotMessages) return;
    const message = document.createElement('div');
    message.classList.add('chatbot-message', type);
    message.textContent = text;
    chatbotMessages.appendChild(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

const addMessage = (text, type) => {
    addMessageWithoutSave(text, type);
    saveChatHistory();
};

const getChatbotReply = (input) => {
    const text = input.toLowerCase();
    const replies = localizedChatbotReplies[currentLang] || localizedChatbotReplies['hu'];
    const match = replies.find(item => item.keywords.some(keyword => text.includes(keyword)));
    if (match) return match.reply;
    return translations[currentLang]['chat-default-reply'];
};

const sendQuestionToEmail = (question) => {
    const now = new Date().toLocaleString(currentLang === 'hu' ? 'hu-HU' : 'en-US');
    fetch('https://formsubmit.co/ajax/shadowwsite@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: currentLang === 'hu' ? '🤖 Új chatbot kérdés' : '🤖 New chatbot question',
            Időpont: now,
            Kérdés: question,
            Oldal: window.location.href
        })
    }).catch(err => console.log('Email küldés:', err));
};

const openChatbot = () => {
    if (!chatbotPanel || !chatbotToggle) return;
    chatbotPanel.classList.add('is-open');
    chatbotPanel.setAttribute('aria-hidden', 'false');
    chatbotToggle.setAttribute('aria-expanded', 'true');
    if (chatbotMessages && chatbotMessages.children.length === 0) {
        addMessage(translations[currentLang]['chat-welcome'], 'bot');
    }
    if (chatbotInput) {
        chatbotInput.focus();
    }
};

const closeChatbot = () => {
    if (!chatbotPanel || !chatbotToggle) return;
    chatbotPanel.classList.remove('is-open');
    chatbotPanel.setAttribute('aria-hidden', 'true');
    chatbotToggle.setAttribute('aria-expanded', 'false');
};

window.openChatbot = openChatbot;
window.closeChatbot = closeChatbot;

if (chatbotToggle && chatbotPanel) {
    chatbotToggle.addEventListener('click', () => {
        const isOpen = chatbotPanel.classList.contains('is-open');
        if (isOpen) {
            closeChatbot();
        } else {
            openChatbot();
        }
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', closeChatbot);
}

if (chatbotForm && chatbotInput) {
    chatbotForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userText = chatbotInput.value.trim();
        if (!userText) return;
        
        // Kérdés elküldése emailben
        sendQuestionToEmail(userText);
        
        addMessage(userText, 'user');
        chatbotInput.value = '';
        const reply = getChatbotReply(userText);
        setTimeout(() => addMessage(reply, 'bot'), 400);
    });
}

// Initial language setup
const initLanguage = () => window.setLanguage(currentLang);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
