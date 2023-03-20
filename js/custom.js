
  (function ($) {
  
  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // PROJECTS IMAGE RESIZE
    function NewsImageResize(){      
      var LargeImage = $('.projects-thumb-small .projects-image').height();

      $('.projects-thumb-large').css('height', LargeImage + 'px');
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


// IMAGE GALLERY

const fullImgBox = document.getElementById("full-ImgBox");
const fullImg = document.getElementById("full-img");

function openFullImg(reference){
  fullImgBox.style.display="flex";
  fullImg.src = reference
}
function closeImg(){
  fullImgBox.style.display="none";

}


// POPUP GENERAL
const fulImgBoxdr7 = document.getElementById("ful-ImgBox-dr7");
const fulImgdr7 = document.getElementById("fulImg-dr7");
function closeImgdr7(){
  fulImgBoxdr7.style.display = "none";
}
function openImgdr7(){
  fulImgBoxdr7.style.display = "flex";
}


// CLIC DERECHO
document.oncontextmenu = function(){
  return false;
}

function enviarFormulario() {
    document.querySelector('.alert').style.display = 'flex';
}