var typedString = "MIKE</br>HOLBROOK ",
    currentLetterIndex = 0,
    isTag,
    textSoFar;

(function type() {
    textSoFar = typedString.slice(0, ++currentLetterIndex);
    if (textSoFar === typedString) {
        anime({
            targets:'#subtitle',
            opacity:[0,1],
            duration:250,
            easing:'easeInCirc',
        });

        anime({
            targets: ['#about-container'],
            opacity:[0, 1],
            duration:2000,
            easing:'easeInCirc',
        });

        anime({
            targets: ['#carousel-container'],
            opacity:[0, 1],
            duration:1000,
            easing:'easeInCirc',
        });

        anime({
            targets: ['#nav-outer'],
            opacity:[0, 1],
            duration:500,
            easing:'easeInCirc',
        });
        return;
    }

    
    document.getElementById('typewriter').innerHTML = textSoFar;


    var char = textSoFar.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 100);
}());



  