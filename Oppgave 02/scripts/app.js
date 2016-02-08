// Jørn Lyder hansen Innlevering 01 Oppgave 02
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

    var SAPP = SLIDESHOWAPP;

    var setElements = function() {
      SAPP.$slideshow = $("#slideshow");
      SAPP.$infoPopup = $("#infoPopup");
      SAPP.$forrigeBildeBtn = $("#forrigeBildeBtn");
      SAPP.$nesteBildeBtn = $("#nesteBildeBtn");
    }();

    var setEvents = function() {
      SAPP.$forrigeBildeBtn.click(SAPP.showPreviousImage);
      SAPP.$nesteBildeBtn.click(SAPP.showNextImage);
      SAPP.$slideshow.click(SAPP.showImageInfo);
    }();

    var setPage = function() {
      SAPP.showImage();
    }();

  }, //--end init

  //app-logikk og støttefunksjoner
  showPreviousImage: function() {

    var SAPP = SLIDESHOWAPP;

    if (SAPP.imageIndex > 0) {
      SAPP.imageIndex--;
    } else {
      SAPP.imageIndex = WEBPAGEIMAGESMODULE.getNumberOfImages() - 1;
    }

    SAPP.showImage("-500px");
  }, //--end showPreviousImage

  // function to show the next image
  showNextImage: function() {

    var SAPP = SLIDESHOWAPP;

    if (SAPP.imageIndex < (WEBPAGEIMAGESMODULE.getNumberOfImages() - 1)) {
      SAPP.imageIndex++;
    } else {
      SAPP.imageIndex = 0;
    }

    SAPP.showImage("500px");
  }, //--end showNextImage

  // function for show the images
  showImage: function(startPosition) {

    var index = SLIDESHOWAPP.imageIndex;
    var filsti = SLIDESHOWAPP.filstiBilder;

    var bildeSrc = WEBPAGEIMAGESMODULE.getImageSrc(index);
    // styling an gets the image
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
    // appends the image in slideshow
    SLIDESHOWAPP.$slideshow.append($newImage);

    SLIDESHOWAPP.$infoPopup.html("");
  }, //--end showImage

  // function to show the info about the image  from the JSON list
  showImageInfo: function() {
    var index = SLIDESHOWAPP.imageIndex;
    var bildeInfo = WEBPAGEIMAGESMODULE.getImageInfo(index);
    // animate the text in the popup box
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

//runs the function
$(function() {
  SLIDESHOWAPP.init();
});
