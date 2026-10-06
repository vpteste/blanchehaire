// BLANCHE FASHION HAIRE — JavaScript

const WHATSAPP_NUMBER = '2250799030589';

const products = [
    { id: 1, name: 'Perruque Body Wave 18"', type: 'body-wave', length: '18', color: 'naturel', price: 75000, status: 'disponible', badge: 'disponible', image: 'img/vente perruque.jpg', description: 'Perruque body wave en cheveux naturels, souple et brillante.' },
    { id: 2, name: 'Perruque Straight 20"', type: 'straight', length: '20', color: 'naturel', price: 80000, status: 'best', badge: 'best', image: 'img/vente perruque2.jpg', description: 'Perruque lisse et soyeuse, finition naturelle.' },
    { id: 3, name: 'Perruque Deep Wave 16"', type: 'deep-wave', length: '16', color: 'brun', price: 70000, status: 'disponible', badge: 'disponible', image: 'img/vente-perruque.jpg', description: 'Ondulations profondes et définies pour un look glamour.' },
    { id: 4, name: 'Perruque Curly 14"', type: 'curly', length: '14', color: 'naturel', price: 65000, status: 'nouveau', badge: 'nouveau', image: 'img/tresses.jpg', description: 'Boucles rebondies et volumineuses, parfaites au quotidien.' },
    { id: 5, name: 'Perruque Bob 12"', type: 'bob', length: '12', color: 'naturel', price: 55000, status: 'disponible', badge: 'disponible', image: 'img/coupe femme.jpg', description: 'Coupe bob moderne et élégante, facile à coiffer.' },
    { id: 6, name: 'Perruque Lace Front 22"', type: 'lace-front', length: '22', color: 'naturel', price: 95000, status: 'best', badge: 'best', image: 'img/tress2.jpg', description: 'Lace front pour une ligne de cheveux ultra-naturelle.' },
    { id: 7, name: 'Perruque HD Lace 24"', type: 'hd-lace', length: '24', color: 'ombré', price: 130000, status: 'nouveau', badge: 'nouveau', image: 'img/tresse.jpg', description: 'HD Lace invisible, rendu photoréaliste garanti.' },
    { id: 8, name: 'Perruque Personnalisée', type: 'lace-front', length: '20', color: 'blond', price: 150000, status: 'nouveau', badge: 'nouveau', image: 'img/tresse1.jpg', description: 'Création sur mesure selon vos envies et votre morphologie.' },
    { id: 9, name: 'Perruque Body Wave 26"', type: 'body-wave', length: '26', color: 'naturel', price: 90000, status: 'disponible', badge: 'disponible', image: 'img/coupe2.jpg', description: 'Longueurs spectaculaires, mouvement naturel.' },
    { id: 10, name: 'Perruque Straight 16"', type: 'straight', length: '16', color: 'roux', price: 70000, status: 'disponible', badge: 'disponible', image: 'img/coupes.jpg', description: 'Lisse rouge cuivré, couleur vibrante et durable.' },
    { id: 11, name: 'Perruque Curly 18"', type: 'curly', length: '18', color: 'naturel', price: 85000, status: 'best', badge: 'best', image: 'img/chion.jpg', description: 'Boucles généreuses et définies, volume exceptionnel.' },
    { id: 12, name: 'Perruque Bob 14"', type: 'bob', length: '14', color: 'ombré', price: 60000, status: 'disponible', badge: 'disponible', image: 'img/chions.jpg', description: 'Bob ombré tendance, coupe structurée et moderne.' }
];

const galleryImages = [
    { src: 'img/coupe femme.jpg', alt: 'Coiffure bouclée' },
    { src: 'img/coupe2.jpg', alt: 'Cheveux lisses' },
    { src: 'img/chions.jpg', alt: 'Coiffure sophistiquée' },
    { src: 'img/coupes.jpg', alt: 'Coupe courte' },
    { src: 'img/tresses.jpg', alt: 'Coiffure événementielle' },
    { src: 'img/tress2.jpg', alt: 'Perruque personnalisée' },
    { src: 'img/tresse.jpg', alt: 'Coloration' },
    { src: 'img/tresse1.jpg', alt: 'Style naturel' }
];

// DOM Elements
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-product');
const filterType = document.getElementById('filter-type');
const filterLength = document.getElementById('filter-length');
const filterColor = document.getElementById('filter-color');
const filterPrice = document.getElementById('filter-price');
const filterStatus = document.getElementById('filter-status');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const contactForm = document.getElementById('contact-form');
const aaContainer = document.querySelector('.aa-container');
const aaDivider = document.getElementById('aa-divider');
const aaAfter = document.querySelector('.aa-after');

let currentGalleryIndex = 0;

// Header scroll
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Render products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="400">
                <span class="product-badge badge-${product.badge}">${product.badge === 'best' ? 'Best Seller' : product.badge === 'nouveau' ? 'Nouveau' : 'Disponible'}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-details">${product.length}" • ${product.color} • ${product.type}</p>
                <p class="product-price">${product.price.toLocaleString('fr-FR')} FCFA</p>
                <div class="product-actions">
                    <button class="btn btn-outline btn-sm" onclick="showProductDetail(${product.id})">Voir le produit</button>
                    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour Blanche Fashion Haire, je suis intéressée par ${encodeURIComponent(product.name)}. Je voudrais avoir plus d'informations. Voir la fiche: ${encodeURIComponent(window.location.href.split('#')[0] + '#produit-' + product.id)}" target="_blank" class="btn btn-whatsapp btn-sm">Commander</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts() {
    const type = filterType.value;
    const length = filterLength.value;
    const color = filterColor.value;
    const price = filterPrice.value;
    const status = filterStatus.value;
    const search = searchInput.value.toLowerCase();

    let filtered = products.filter(product => {
        if (type !== 'all' && product.type !== type) return false;
        if (length !== 'all' && product.length !== length) return false;
        if (color !== 'all' && product.color !== color) return false;
        if (status !== 'all' && product.status !== status) return false;
        if (search && !product.name.toLowerCase().includes(search)) return false;
        if (price !== 'all') {
            const [min, max] = price.split('-').map(Number);
            if (product.price < min || product.price > max) return false;
        }
        return true;
    });

    renderProducts(filtered);
}

// Event listeners for filters
[filterType, filterLength, filterColor, filterPrice, filterStatus].forEach(el => {
    el.addEventListener('change', filterProducts);
});
searchInput.addEventListener('input', filterProducts);

// Product detail modal
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="product-modal-overlay" onclick="closeProductModal()"></div>
        <div class="product-modal-content">
            <button class="product-modal-close" onclick="closeProductModal()">&times;</button>
            <div class="product-modal-grid">
                <div class="product-modal-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-modal-info">
                    <h2>${product.name}</h2>
                    <p class="product-modal-price">${product.price.toLocaleString('fr-FR')} FCFA</p>
                    <p class="product-modal-status">${product.badge === 'best' ? 'Best Seller' : product.badge === 'nouveau' ? 'Nouveau' : 'Disponible'}</p>
                    <p class="product-modal-description">${product.description}</p>
                    <ul class="product-modal-details">
                        <li><strong>Matière:</strong> Cheveux naturels</li>
                        <li><strong>Longueur:</strong> ${product.length}"</li>
                        <li><strong>Couleur:</strong> ${product.color}</li>
                        <li><strong>Type:</strong> ${product.type}</li>
                        <li><strong>Densité:</strong> 150%</li>
                        <li><strong>Lace:</strong> HD Lace invisible</li>
                    </ul>
                    <div class="product-modal-actions">
                        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour Blanche Fashion Haire, je suis intéressée par ${encodeURIComponent(product.name)}. Je voudrais avoir plus d'informations. Voir la fiche: ${encodeURIComponent(window.location.href.split('#')[0] + '#produit-' + product.id)}" target="_blank" class="btn btn-whatsapp">Commander sur WhatsApp</a>
                        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour Blanche Fashion Haire, je souhaite plus d'informations sur ${encodeURIComponent(product.name)}. Voir la fiche: ${encodeURIComponent(window.location.href.split('#')[0] + '#produit-' + product.id)}" target="_blank" class="btn btn-outline">Demander plus d'informations</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Gallery lightbox
function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightboxImage() {
    lightboxImage.src = galleryImages[currentGalleryIndex].src;
    lightboxImage.alt = galleryImages[currentGalleryIndex].alt;
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
});
lightboxNext.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    updateLightboxImage();
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        openLightbox(parseInt(item.dataset.index));
    });
});

// Close lightbox on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxPrev.click();
        if (e.key === 'ArrowRight') lightboxNext.click();
    }
    if (e.key === 'Escape') closeProductModal();
});

// Contact form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const nom = formData.get('nom');
    const telephone = formData.get('telephone');
    const sujet = formData.get('sujet');
    const message = formData.get('message');

    const whatsappMessage = `Bonjour Blanche Fashion Haire,\n\nNom: ${nom}\nTéléphone: ${telephone}\nSujet: ${sujet}\n\nMessage:\n${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
});

// Before/After slider
let isDragging = false;

function updateSliderPosition(clientX) {
    const rect = aaContainer.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    aaDivider.style.left = percentage + '%';
    aaAfter.style.width = percentage + '%';
}

aaDivider.addEventListener('mousedown', () => { isDragging = true; });
aaDivider.addEventListener('touchstart', () => { isDragging = true; });

document.addEventListener('mousemove', (e) => {
    if (isDragging) updateSliderPosition(e.clientX);
});
document.addEventListener('touchmove', (e) => {
    if (isDragging) updateSliderPosition(e.touches[0].clientX);
});

document.addEventListener('mouseup', () => { isDragging = false; });
document.addEventListener('touchend', () => { isDragging = false; });

aaContainer.addEventListener('click', (e) => {
    if (e.target !== aaDivider && !aaDivider.contains(e.target)) {
        updateSliderPosition(e.clientX);
    }
});

// Scroll animations
const revealElements = document.querySelectorAll('.section-header, .category-card, .product-card, .prestation-card, .gallery-item, .pourquoi-card, .avis-card, .accessoire-card, .nouveaute-card, .contact-item, .form-group');

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// Hero slider
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroDots.forEach(dot => dot.classList.remove('active'));
    heroSlides[index].classList.add('active');
    heroDots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % heroSlides.length);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopSlideShow();
        showSlide(parseInt(dot.dataset.slide));
        startSlideShow();
    });
});

startSlideShow();

// Initialize
renderProducts(products);
