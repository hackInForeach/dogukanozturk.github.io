
// Navbar Code 
var navlink = document.querySelectorAll(".navlink");
function activeLink() {
    navlink.forEach((item) => {
        item.classList.remove("active");
    }); this.classList.add("active");
}
navlink.forEach((item) => item.addEventListener('click', activeLink));

// Scrolling Animation Code 
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1600,
    delay: 400
});

// Modal'ı açma ve içeriği gösterme
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Linkin varsayılan davranışını engelle

        const title = this.getAttribute('data-title');
        const content = this.getAttribute('data-content');

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-content').innerText = content;

        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
    });
});

// Modal'ı kapatma
document.querySelector('.close').addEventListener('click', function () {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

// Kullanıcı modal dışına tıklarsa modal'ı kapat
window.addEventListener('click', function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Ziyaret sayacı
fetch('https://api.countapi.xyz/hit/dogukanozturk.github.io/visits')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitor-counter').innerText = data.value;
  })
  .catch(error => console.error('Ziyaret sayacı alınamadı:', error));


ScrollReveal().reveal('.navbar, .aboutimg-box', { origin: 'left' });
ScrollReveal().reveal('.details-box', { origin: 'right' });
ScrollReveal().reveal('.subHeading,  .heading, .scroll-down', { origin: 'top' });
ScrollReveal().reveal('.social-icons, .person-detail, .person-img, .service-box, .img-box, .text-box, .testi-container, .contact-container', { delay: 400, origin: 'bottom' });
