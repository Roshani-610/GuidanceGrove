const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainNavLinks = document.querySelector('.main-nav__links');

mainNavToggle.addEventListener('click', () => {
  mainNavLinks.classList.toggle('show-dropdown');
});

// navigation links
const navLinks = [
  { text: 'Home', href: 'index.html', id:'home'},
  { text: 'Services', href: 'services.html'},
  { text: 'Experts', href: 'experts.html' },
  { text: 'About us', href: 'about.html', id:'about'},
  { text: 'Login', href: 'login.html', isButton: true }
];

const mainNav = document.querySelector('.main-nav__links ul');

const currentPage = window.location.href.toLowerCase();
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.main-nav__link');
  links.forEach(link => {
    if (link.href.toLowerCase() === currentPage) {
      link.classList.add('active');
    }
  });
});

navLinks.forEach(linkData => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  
  link.textContent = linkData.text;
  link.href = linkData.href;
  link.className = 'main-nav__link';
  
  if (linkData.isButton) {
    link.classList.add('primary-button');
  }

  if (linkData.id) {
    link.id = linkData.id;
  }

  // if (linkData.href.toLowerCase() === currentPage) {
  //   link.classList.add('active');
  // }

  // Add an event listener to highlight the active button
  // link.addEventListener('click', function () {
  //   // Remove the "active" class from all buttons
  //   const buttons = document.querySelectorAll('.main-nav__link');
  //   buttons.forEach(button => button.classList.remove('active'));

  //   // Add the "active" class to the clicked button
  //   this.classList.add('active');
  // });
  
  listItem.appendChild(link);
  mainNav.appendChild(listItem);
});

const extractedLinkData = navLinks.map(linkData => ({
  text: linkData.text,
  href: linkData.href
}));

console.log(extractedLinkData);

// active link

//var nav = document.getElementById("")




// feature cards
const featureData = [
    { imgSrc: './images/Vector.png', category: 'IT Field' },
    { imgSrc: './images/Vector (1).png', category: 'Medical' },
    { imgSrc: './images/Vector (2).png', category: 'Teacher' },
    { imgSrc: './images/Group.png', category: 'Researcher' },
    { imgSrc: './images/Group (1).png', category: 'Agriculture' },
    { imgSrc: './images/Vector (3).png', category: 'Law' }
  ];
  
  const featureSection = document.querySelector('.feature-section__field');
  
  featureData.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('feature-section__card');
    
    const img = document.createElement('img');
    img.src = data.imgSrc;
    img.alt = data.category + '-icon';
    
    const p = document.createElement('div');
    p.classList.add('feature-section__card-text')
    p.textContent = data.category;
    
    card.appendChild(img);
    card.appendChild(p);
    
    featureSection.appendChild(card);
  });
  
  const extractedCardData = featureData.map(data => ({
    imgSrc: data.imgSrc,
    category: data.category
  }));
  
  console.log(extractedCardData);

  // feature slider

  $(document).ready(function () {
    $(".feature-section__field").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2100,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },

        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });
  
  
// Experts and seekers toggle

let mainContent = document.querySelector("#about__seekers");
let secondaryContent = document.querySelector("#about__experts");

document.querySelector(".toggle__input").addEventListener("change", e => {
mainContent.style.display = e.target.checked ? "block " : "none";
secondaryContent.style.display =  e.target.checked ? "none" : "block";
});

//testimonial swipper

var swiper = new Swiper(".myswiper", {
  slidesPerView: 3,
  spaceBetween: 20,
});

// webinar

var swiper = new Swiper(".mySwiper", {
  spaceBetween: -400,
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
414: {
 slidesPerView: 2,
 spaceBetween: 10,
},

769: {
slidesPerView: 2,
},

390: {
  slidesPerView: 2,
  spaceBetween: 10,
 },

 375: {
  slidesPerView: 2,
  spaceBetween: 10,
 },

 360: {
  slidesPerView: 2,
  spaceBetween: 10,
 },

 820: {
  slidesPerView: 2,
  spaceBetween: 1,
 },

},

});