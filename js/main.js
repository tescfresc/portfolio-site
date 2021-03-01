//mobile menu toggle function
function toggleMenu() {
    let menu = document.getElementById("nav-mobile-menu");
    let btn = document.getElementById("nav-mobile-btn");
    if(menu.style.display == "block") {
        btn.innerHTML = "MENU";
        anime({
            targets:'#nav-mobile-menu',
            height:[0,500],
            direction:'reverse',
            easing:'easeInOutQuint',
            duration:500,
            complete: function(anim) {
                menu.style.display = "none";
            }
        });

    } else {
        menu.style.display = "block";
        btn.innerHTML = "CLOSE";
        anime({
            targets:'#nav-mobile-menu',
            height:[0,500],
            duration:500,
            easing:'easeInOutQuint',
        });
    }
    
}



