
const menuHamburger = document.querySelector(".toggle")
 const navLinks = document.querySelector(".menu")
 const Kebab = document.querySelector(".chef")
 const barre = document.querySelector(".croix")


 menuHamburger.addEventListener('click',()=>{
    navLinks.classList.remove('menu1');
    Kebab.classList.remove('menu2');
    menuHamburger.classList.remove('coucou');
    barre.classList.remove('ferme')
    navLinks.classList.add('mobile-menu');
    Kebab.classList.add('dur');
    barre.classList.add('coco')
    menuHamburger.classList.add('crabe');
}
)


barre.addEventListener('click',()=>{
    navLinks.classList.remove('mobile-menu');
    Kebab.classList.remove('dur');
    barre.classList.remove('coco')
    menuHamburger.classList.remove('crabe');
    navLinks.classList.add('menu1');
    Kebab.classList.add('menu2');
    menuHamburger.classList.add('coucou');
    barre.classList.add('ferme')  
}
)





