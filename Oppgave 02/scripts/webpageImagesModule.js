// Jørn Lyder hansen Innlevering 01 Oppgave 02
//Modul som inneholder alle bilder av nettsteder
var WEBPAGEIMAGESMODULE = (function() {

  //JSON-objekt-liste
  var webpageListJSON = {
    "webpageList": [{
      "title": "marsvin",
      "info": "Dette er Fredrik og Frank de er bestevenner. De møttes i barnehagen og har vært venner siden den gang",
      "bildeSrc": "marsvin1.jpg"
    }, {
      "title": "marsin2",
      "info": "Her har vi Rikke. Hun er den søteste du kan tenke deg. Hun liker blomster og blomkål.",
      "bildeSrc": "marsvin2.jpg"
    }, {
      "title": "marsvin3",
      "info": "Dette er Roberto. Med sin slanke lange kropp så får han plass i hvilket som helst hamster hjul.",
      "bildeSrc": "marsvin3.jpg"
    }, {
      "title": "marsvin4",
      "info": "Dette er trillingene Knask. De er alltid klar for litt fest og morro. ",
      "bildeSrc": "marsvin4.jpg"
    }, {
      "title": "marsvin5",
      "info": "Her har vi André. Han er en dreven basket spiller og sier at det kommer fra kostholdet hans.",
      "bildeSrc": "marsvin5.jpg"
    }, {
      "title": "marsvin6",
      "info": "Stripa, eller kalt Zebra. Hun liker fjellturer og er en mester på friklattring.",
      "bildeSrc": "marsvin6.jpg"
    }, {
      "title": "marsvin7",
      "info": "Ronny, er den store sportsidioten sammen med Roberto. Han sier også at alt kommer fra kostholdet.",
      "bildeSrc": "marsvin7.jpg"
    }, {
      "title": "marsvin8",
      "info": "Så til slutt så har vi Frikke, hun er det blideste marsvinet du kan tenke deg. Hun elsker ballonger og konfetti.",
      "bildeSrc": "marsvin8.jpg"
    }]
  };
  // function for getting image SRC from JSON
  var getImageSrc = function(imageIndex) {
    return webpageListJSON.webpageList[imageIndex].bildeSrc;
  };
  // function for getting "length" of the JSON
  var getNumberOfImages = function() {
    return webpageListJSON.webpageList.length;
  };
  // function for getting "info" from JSON
  var getImageInfo = function(imageIndex) {
    return webpageListJSON.webpageList[imageIndex].info;
  };

  // returnerer funksjonene så de kan bli brukt i app
  return {
    getImageSrc: getImageSrc,
    getNumberOfImages: getNumberOfImages,
    getImageInfo: getImageInfo,
  };

}()); //--end WEBPAGEIMAGESMODULE
