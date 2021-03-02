//slick carousel 
$(document).ready(function(){
    $('#carousel-container').slick({
    "arrows": false,
    "autoplay":true,
    "autoplaySpeed":5000,
    "centerMode":true,
    "centerPadding":"10%"
    });
  });

  $('.carousel-slide').on('edge', function(event, slick, direction){
    console.log('edge was hit')
  });
