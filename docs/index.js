
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
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

const chatbotReplies = [
    {
        keywords: ['ár', 'árajánlat', 'költség', 'díj', 'csomag', 'árak',],
        reply: 'Az árajánlatot a projekt részletei alapján készítjük. Írd meg az igényeidet, és 24 órán belül visszajelzünk.'
    },
    {
        keywords: ['webshop', 'bolt', 'e-kereskedelem'],
        reply: 'Webshopot is készítünk: termékkezelés, fizetés, szállítási beállítások és admin felület is megoldható.'
    },
    {
        keywords: ['idő', 'határidő', 'mennyi', 'mikor', 'kész', 'készen lesz', 'mennyi idő', 'mennyi idő alatt', 'mennyi időt vesz igénybe'],
        reply: 'A legtöbb projekt 1–4 hét alatt készül el a terjedelemtől és az anyagok rendelkezésre állásától függően.'
    },
    {
        keywords: ['karbantartás', 'frissítés', 'támogatás', 'utólagos', 'utólag', 'később', 'későbbi', 'későbbiekben', 'későbbiek', 'későbbiekben is', 'későbbiekben is vállalunk', 'későbbiekben is tudunk', 'későbbiekben is biztosítunk'],
        reply: 'Vállalunk karbantartást, frissítést és folyamatos támogatást is.'
    },
    {
        keywords: ['kapcsolat', 'email', 'telefon', 'elérhetőség', 'hogyan', 'hogy', 'hol', 'milyen módon', 'milyen úton', 'elérhetőségek', 'elérhetőségeitek', 'elérhetőségeink', 'elérhetőségeinket', 'elérhetőségeinkre', 'elérhetőségeinket megadnátok', 'elérhetőségeinket megadnád', 'elérhetőségeinket megadnátok', 'elérhetőségeinket megadnád,'],
        reply: 'Írj a shadowwsite@gmail.com címre, vagy hagyd itt a kérdésed, és visszajelzünk.'
    }
];

const addMessage = (text, type) => {
    if (!chatbotMessages) return;
    const message = document.createElement('div');
    message.classList.add('chatbot-message', type);
    message.textContent = text;
    chatbotMessages.appendChild(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

const getChatbotReply = (input) => {
    const text = input.toLowerCase();
    const match = chatbotReplies.find(item => item.keywords.some(keyword => text.includes(keyword)));
    if (match) return match.reply;
    return 'Köszönöm a kérdést! Írd le röviden az igényt, és hamarosan válaszolunk.';
};

const openChatbot = () => {
    if (!chatbotPanel || !chatbotToggle) return;
    chatbotPanel.classList.add('is-open');
    chatbotPanel.setAttribute('aria-hidden', 'false');
    chatbotToggle.setAttribute('aria-expanded', 'true');
    if (chatbotMessages && chatbotMessages.children.length === 0) {
        addMessage('Szia! Miben segíthetek?', 'bot');
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
        addMessage(userText, 'user');
        chatbotInput.value = '';
        const reply = getChatbotReply(userText);
        setTimeout(() => addMessage(reply, 'bot'), 400);
    });
}
