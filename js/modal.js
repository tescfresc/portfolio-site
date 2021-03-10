let modalCont = $('.modal-popup-container');
let modalBg = $('.modal-background');
let body = $('body');

function openModal(fileString) {
    modalCont.load(`../projects/${fileString}.html`, () => {
        //link close buttons once modal is loaded
        $('.close-modal-btn').click(() => {
            location.hash = "";
        });
    });
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
    anime({
        targets:'.modal-fade',
        duration:300,
        opacity:[0,1],
        easing:"easeInOutCubic",
        delay:anime.stagger(100),
        direction:"reverse",
        complete: function(anim) {
            modalBg.css('display', 'none');
            modalCont.css('display', 'none');
            body.removeClass('modal-open');
        }
    });
    

}

$( document ).ready(function() {
    //when page loads check if there is a URL hash, if so open the appropriate modal.
    if(location.hash != "") {
        let fileString = location.hash;
        fileString = fileString.replace("#", "");
        openModal(fileString);
    }

    //listen for changes to the url hash for browser button modal navigation
    window.addEventListener("hashchange", hashChange, false);


});

function hashChange () {
    if(location.hash != "") {
        let fileString = location.hash;
        fileString = fileString.replace("#", "");
        openModal(fileString);
    } else {
        closeModal();
    }
}


//sets up onclick for cards on page
(function setupLinks() {
    $('.card').each((i, obj) => {
        $(obj).click( () => {
            openModal($(obj).attr('data-target'));
            location.hash = `#${$(obj).attr('data-target')}`;
        });
    })

    $('.modal-background').click(() => {
        location.hash = "";
    });
}());

//openModal("blankmodal");