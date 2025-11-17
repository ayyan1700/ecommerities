let sidebar = document.querySelector('.sidebar');

document.getElementById('open').addEventListener('click' , function(){
    console.log("work")
   sidebar.style.right = '0%'
});

document.getElementById('close').addEventListener('click' , function(){
     console.log("work")
 sidebar.style.right = '-100%'
});


const scrollElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // optional: animate only once
    }
  });
}, { threshold: 0.2 }); // 20% visible

scrollElements.forEach(el => observer.observe(el));


const sidebarLinks = document.querySelectorAll('.sidebar main a');
const sidebari = document.querySelector('.sidebar');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebari.style.right = '-100%';
    });
});



  // Wait for 3 seconds, then hide preloader
    window.addEventListener('load', () => {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 3000); // 3000ms = 3 seconds
    });










