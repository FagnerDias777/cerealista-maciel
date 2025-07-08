// Contato
document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const numero = "5511999999999";
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(link, "_blank");
  });
// Rolagem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Botão subir

const btnsubir = document.getElementById("subir");

window.onscroll = function () {
  if (window.scrollY > 300) {
    btnsubir.style.display = "block";
  } else {
    btnsubir.style.display = "none";
  }
};

btnsubir.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Menu

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    var banner = this.document.getElementById("banner")
    if (window.scrollY > 150) {
      nav.classList.add("fixo");
      banner.style.marginTop = "80px"
    } else {
      nav.classList.remove("fixo");
      banner.style.marginTop = "0px"
    }
  });
  
  const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove('show');
      }
    });


