// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// // Form handler
// document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     alert("Pesan berhasil dikirim!");
// });

// Animate skills when visible
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});

// Filter project berdasarkan kategori
function filterProject(category, el) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    // reset semua tombol
    buttons.forEach(btn => btn.classList.remove('active'));

    // aktifkan tombol yang diklik
    el.classList.add('active');

    // filter card
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = "flex";
        } else {
            if (card.getAttribute('data-category') === category) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        }
    });

    checkNavVisibility();
}



// Hover animation Experience
const expCards = document.querySelectorAll('.exp-card');

expCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "translateY(-12px) scale(1.05)";
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "none";
    });
});


// Toggle menu mobile
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

//autoclose nav mobile
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});


// Back to top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



//nav kiri kanan
function scrollProjects(direction) {
    const container = document.getElementById('projectSlider');
    const scrollAmount = 504;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// cek jumlah card dan tampilkan/hide tombol
function checkNavVisibility() {
    const isMobile = window.innerWidth <= 768;

    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');

    if (isMobile) {
        btnLeft.style.display = "none";
        btnRight.style.display = "none";
        return;
    }

    const cards = document.querySelectorAll('.card');
    let visible = 0;

    cards.forEach(card => {
        if (card.style.display !== "none") visible++;
    });

    if (visible <= 4) {
        btnLeft.style.display = "none";
        btnRight.style.display = "none";
    } else {
        btnLeft.style.display = "block";
        btnRight.style.display = "block";
    }
}

window.addEventListener('resize', checkNavVisibility);
window.addEventListener('load', checkNavVisibility);

//modal
function openImage(src) {
    document.getElementById("popupModal").style.display = "block";

    const img = document.getElementById("modalImg");
    const video = document.getElementById("modalVideo");

    img.style.display = "block";
    video.style.display = "none";

    img.src = src;
}

function openVideo(url) {
    document.getElementById("popupModal").style.display = "block";

    const img = document.getElementById("modalImg");
    const video = document.getElementById("modalVideo");

    img.style.display = "none";
    video.style.display = "block";

    video.src = url;
}

function closeModal() {
    document.getElementById("popupModal").style.display = "none";

    document.getElementById("modalVideo").src = "";
}

//klik diluar
window.onclick = function(e) {
    const modal = document.getElementById("popupModal");
    if (e.target === modal) {
        closeModal();
    }
}