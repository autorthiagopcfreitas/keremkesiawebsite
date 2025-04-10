// Chat functionality
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Simple AI responses
const aiResponses = {
    'hello': 'Olá! Como posso ajudar você hoje?',
    'help': 'Estou aqui para ajudar você a entender melhor suas necessidades emocionais. O que você gostaria de saber?',
    'anxiety': 'A ansiedade é uma experiência comum. Você gostaria de aprender algumas técnicas de enfrentamento?',
    'depression': 'A depressão é uma condição séria que requer ajuda profissional. Você gostaria de agendar uma consulta?',
    'stress': 'O gerenciamento do estresse é importante. Você gostaria de aprender algumas técnicas de relaxamento?',
    'therapy': 'Oferecemos várias abordagens terapêuticas adaptadas às suas necessidades. Você gostaria de saber mais?',
    'session': 'As sessões padrão têm duração de 50 minutos, mas podemos agendar sessões mais longas de acordo com suas necessidades.',
    'insurance': 'Sim, aceitamos a maioria dos planos de saúde. Entre em contato conosco para verificar a cobertura do seu convênio.',
    'default': 'Entendo. Você gostaria de saber mais sobre nossos serviços de terapia?'
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Add user message
        addMessage(message, true);
        
        // Clear input
        userInput.value = '';
        
        // Simulate AI response
        setTimeout(() => {
            const response = getAIResponse(message.toLowerCase());
            addMessage(response, false);
        }, 1000);
    }
}

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(message) {
    // Check for keywords in the message
    for (const [keyword, response] of Object.entries(aiResponses)) {
        if (message.includes(keyword)) {
            return response;
        }
    }
    return aiResponses.default;
}

// Enhanced Parallax effect
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    const scrolled = window.pageYOffset;
    
    parallaxSections.forEach((section, index) => {
        // Calculate different speeds for each section
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        
        // Apply parallax effect
        section.style.backgroundPositionY = `${yPos}px`;
        
        // Add a subtle scale effect
        const scale = 1 + (scrolled * 0.0005);
        section.style.transform = `scale(${scale})`;
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    newsletterForm.reset();
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll with Intersection Observer
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add neuron-like animation elements
            if (entry.target.classList.contains('parallax-section')) {
                addNeuronLines(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Function to add neuron-like animation elements
function addNeuronLines(section) {
    // Remove existing neuron lines
    const existingLines = section.querySelectorAll('.neuron-line');
    existingLines.forEach(line => line.remove());
    
    // Add new neuron lines
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'neuron-line';
        
        // Random position and delay
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        
        line.style.top = `${top}%`;
        line.style.left = `${left}%`;
        line.style.animationDelay = `${delay}s`;
        
        section.appendChild(line);
    }
}

// Initialize neuron lines for the hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        addNeuronLines(heroSection);
    }
}); 
