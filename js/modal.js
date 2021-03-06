let modalCont = $('.modal-popup-container');
let modalBg = $('.modal-background');
let body = $('body');

function openModal () {
    modalBg.css('opacity', 1);
    modalCont.css('opacity', 0);
    modalBg.css('display', 'block');
    modalCont.css('display', 'block');
    body.addClass('modal-open');
    anime({
        targets:'.modal-fade',
        duration:300,
        opacity:[0,1],
        easing:"easeInOutCubic",
        delay:anime.stagger(100)
    });

}

function closeModal () {
    modalBg.css('display', 'none');
    modalCont.css('display', 'none');
    body.removeClass('modal-open');

}