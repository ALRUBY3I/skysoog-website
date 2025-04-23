// WhatsApp Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create WhatsApp button element
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://api.whatsapp.com/send?phone=9647739999464';
    whatsappBtn.className = 'whatsapp-btn';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    
    // Append to body
    document.body.appendChild(whatsappBtn);
    
    // Show button after 3 seconds
    setTimeout(function() {
        whatsappBtn.classList.add('show');
    }, 3000);
});
