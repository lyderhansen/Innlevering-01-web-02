//Modul som inneholder alle bilder av nettsteder
var WEBPAGEIMAGESMODULE = (function(){

    //JSON-objekt-liste
    var webpageListJSON = {"webpageList":[
        {"title": "marsvin", "bildeSrc": "marsvin1.jpg"},
        {"title": "marsin2", "bildeSrc": "marsvin2.jpg"},
        {"title": "marsvin3", "bildeSrc": "marsvin3.jpg"},
        {"title": "marsvin4", "bildeSrc": "marsvin4.jpg"},
        {"title": "marsvin5", "bildeSrc": "marsvin5.jpg"},
        {"title": "marsvin6", "bildeSrc": "marsvin6.jpg"},
        {"title": "marsvin7", "bildeSrc": "marsvin7.jpg"},
        {"title": "marsvin8", "bildeSrc": "marsvin8.jpg"}
    ]};

    var getImageSrc = function(imageIndex){
        return webpageListJSON.webpageList[imageIndex].bildeSrc;
    };

    var getNumberOfImages = function(){
        return webpageListJSON.webpageList.length;
    };
//.-----------

var marsvinInfo = function() {
  var vistMarsvin = "";
  var bildeTxt ="";

  $("#slideshow").on("click", function() {
        vistMarsvin = $(this).children().attr("src");

        for (i = 0; i < 8; i++) {
          if (vistMarsvin == webpageListJSON.webpageList[i].bildeSrc) {
            bildeTxt = webpageListJSON.webpageList.title;


          }
          alert(bildeTxt)
        }


});

}




    //-----------------

    return {
        getImageSrc: getImageSrc,
        getNumberOfImages: getNumberOfImages,
        marsvinInfo: marsvinInfo
    };

}());//--end WEBPAGEIMAGESMODULE
