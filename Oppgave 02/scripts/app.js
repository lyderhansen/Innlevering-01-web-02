//APP pattern (Object literal)

/*
1:click
2:attribut
3:css
4:animate
5:append
6:prevAll
7:remove
8:html


*/
var SLIDESHOWAPP = {

  //variabler
  imageIndex: 0,
  filstiBilder: "slidebilder/",

  //HTML-objekter
  $slideshow: null,
  $forrigeBildeBtn: null,
  $nesteBildeBtn: null,
  $infoPopup: null,

  //init-funksjoner
  init: function() {

    var SA = SLIDESHOWAPP;

    var setElements = function() {
      SA.$slideshow = $("#slideshow");
      SA.$infoPopup = $("#infoPopup");
      SA.$forrigeBildeBtn = $("#forrigeBildeBtn");
      SA.$nesteBildeBtn = $("#nesteBildeBtn");
    }();

    var setEvents = function() {
      SA.$forrigeBildeBtn.click(SA.showPreviousImage);
      SA.$nesteBildeBtn.click(SA.showNextImage);
      SA.$slideshow.click(SA.showImageInfo);

    }();

    var setPage = function() {
      SA.showImage();
    }();

  }, //--end init

  //app-logikk og støttefunksjoner
  showPreviousImage: function() {

    var SA = SLIDESHOWAPP;

    if (SA.imageIndex > 0) {
      SA.imageIndex--;
    } else {
      SA.imageIndex = WEBPAGEIMAGESMODULE.getNumberOfImages() - 1;
    }

    SA.showImage("-500px");
  }, //--end showPreviousImage

  showNextImage: function() {

    var SA = SLIDESHOWAPP;

    if (SA.imageIndex < (WEBPAGEIMAGESMODULE.getNumberOfImages() - 1)) {
      SA.imageIndex++;
    } else {
      SA.imageIndex = 0;
    }

    SA.showImage("500px");
  }, //--end showNextImage

  showImage: function(startPosition) {

      var index = SLIDESHOWAPP.imageIndex;
      var filsti = SLIDESHOWAPP.filstiBilder;

      var bildeSrc = WEBPAGEIMAGESMODULE.getImageSrc(index);

      var $newImage = $("<img>")
        .attr("src", filsti + bildeSrc)
        .css({
          "left": startPosition,
          "opacity": "0"
        })
        .animate({
          "left": "0px",
          "opacity": "1"
        }, 750, function() {
          $(this).prevAll("img").remove();
        });



      SLIDESHOWAPP.$slideshow.append($newImage);

      SLIDESHOWAPP.$infoPopup.html("");



    }, //--end showImage

    showImageInfo: function() {
    var index = SLIDESHOWAPP.imageIndex;
    var bildeInfo = WEBPAGEIMAGESMODULE.getImageInfo(index);

    var $imageInfo = $('<p id="popupText">').html(bildeInfo)
    .css({
      "opacity": "0"
    })
    .animate({
      "opacity": "1"
    }, 100);
    SLIDESHOWAPP.$infoPopup.html($imageInfo);

  }


}; //--end SLIDESHOWAPP

//document.ready trigger vår SLIDESHOWAPP når DOM er klart
$(function() {
  SLIDESHOWAPP.init();
});
