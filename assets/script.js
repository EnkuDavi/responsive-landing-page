function openNav(){
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('side');
    nav.style.width = "180px";
}

function closeNav(){
    const nav = document.querySelector('nav ul');
    nav.style.width = "0px";
}
