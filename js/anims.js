let t1 = anime.timeline({
    easing:'easeInOutCubic',
    duration:500,
});

//add homepage fade class to nav if page is wide enough
if($('#nav-outer').css('display') != 'none') $('#nav-outer').addClass("page-fade");

//hide all elements to fade
(function hide() {
    $('.page-fade').css('opacity', 0);
    $('#typewriter').html('');
}());
//Homepage title typing script.
var typedString = "MIKE</br>HOLBROOK ",
    currentLetterIndex = 0,
    isTag,
    textSoFar;

function type() {
    textSoFar = typedString.slice(0, ++currentLetterIndex);
    if (textSoFar === typedString) {
        t1.add({
            targets: '.page-fade',
            opacity:[0,1],
            delay: anime.stagger(300),
        });
        return;
    }

    
    document.getElementById('typewriter').innerHTML = textSoFar;


    var char = textSoFar.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 120);
}

$(document).ready(function () {
    //only run on homepage
    console.log(window.location.pathname);
    if(window.location.pathname == "/index.html" || window.location.pathname =="/" ) {
        setTimeout(type, 250);
    } else {
        t1.add({
            targets: '.page-fade',
            opacity:[0,1],
            delay: anime.stagger(200),
        }).
        add({
            targets: '.card',
            opacity:[0,1],
            delay: anime.stagger(100),
        });
    }
});





  