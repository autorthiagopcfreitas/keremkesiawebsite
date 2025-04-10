// Chat functionality
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Simple AI responses
const aiResponses = {
    'hello': 'Hello! How can I help you today?',
    'help': 'I\'m here to help you understand your emotional needs better. What would you like to know?',
    'anxiety': 'Anxiety is a common experience. Would you like to learn some coping techniques?',
    'depression': 'Depression is a serious condition that requires professional help. Would you like to schedule a consultation?',
    'stress': 'Stress management is important. Would you like to learn some relaxation techniques?',
    'default': 'I understand. Would you like to learn more about our therapy services?'
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

// Parallax effect
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        section.style.backgroundPositionY = `${rate}px`;
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
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 