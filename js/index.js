const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


//nav
let nav = document.querySelectorAll('nav a')
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

//cta
let banner = document.getElementById('cta-img');
let ctaText = document.querySelector('.cta-text h1');
let ctaBtn =document.querySelector('.cta-text button');


banner.setAttribute('src',siteContent['cta']['img-src']);
ctaText.textContent= siteContent['cta']['h1'];
ctaBtn.textContent = siteContent['cta']['button']


//main-contact

let topContent = document.querySelectorAll(`.top-content .text-content `);
let bottomContent = document.querySelectorAll('.bottom-content .text-content')

let topContentArr =Array.from(topContent)
let bottomContentArr = Array.from(bottomContent)

//features h4 and p
topContentArr[0].children[0].textContent= siteContent['main-content']['features-h4'];
topContentArr[0].children[1].textContent= siteContent['main-content']['features-content'];


//About h4 and p
topContentArr[1].children[0].textContent= siteContent['main-content']['about-h4']
topContentArr[1].children[1].textContent= siteContent['main-content']['about-content']


//middle img
let middleImg = document.getElementById('middle-img');

middleImg.setAttribute(['src'],siteContent['main-content']['middle-img-src'])
//=========================================================================================

//services
bottomContentArr[0].children[0].textContent = siteContent['main-content']['services-h4'];
bottomContentArr[0].children[1].textContent = siteContent['main-content']['services-content'];

//product

bottomContentArr[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottomContentArr[1].children[1].textContent = siteContent['main-content']['product-content']


//vision

bottomContentArr[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottomContentArr[2].children[1].textContent =siteContent['main-content']['vision-content']



//===========================================================================================
//contact
let contact = document.querySelectorAll('.contact');

let contactArr = Array.from(contact);

let footer =document.querySelector('footer p')

console.log(contactArr[0]);

contactArr[0].children[0].textContent = siteContent['contact']['contact-h4'];
contactArr[0].children[1].textContent = siteContent['contact']['address'];
contactArr[0].children[2].textContent = siteContent['contact']['phone'];
contactArr[0].children[3].textContent = siteContent['contact']['email'];

//==========================================================================
//footer

footer.textContent = siteContent['footer']['copyright']

