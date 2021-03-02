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

function nightMode() {
/*     --dark1: #252525;
    --dark2: #333333;
    --dark3: #494949;
    --light1: #c4c4c4;
    --light2: #afafaf;
    --light3: #929292;
    --shadow: #0000002d; */
    let root = document.documentElement;
    let dark1 = getComputedStyle(root).getPropertyValue('--dark1');
    console.log(dark1);
    if(true) {
        //in night mode, switch to day
        console.log("Test");
        root.style.setProperty('--dark1', "#c4c4c4");
        root.style.setProperty('--dark2', "#afafaf");
        root.style.setProperty('--dark3', "#929292");
        root.style.setProperty('--light1', "#252525");
        root.style.setProperty('--light2', "#333333");
        root.style.setProperty('--light3', "#494949");
    } else {
        //in day mode, switch to night
    }
    
}



