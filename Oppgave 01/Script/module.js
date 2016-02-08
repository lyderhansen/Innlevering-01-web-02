// Jørn Lyder hansen Innlevering 01 Oppgave 01
//module pattern

var HTMLGENERATOR = (function() {

  var hentElementArray = function(tag, antall) {
      var elementArray = [];
      // creates CSS values of the divs when they ar generated
      for (var i = 0; i < antall; i++) {
        var $newElement = $("<" + tag + ">")
          .text(i + 1)
          .css({
            "width": "50px",
            "height": "50px",
            "background-color": "rgb(77, 105, 87)",
            "color": "rgb(255, 245, 0)",
            "border-radius": "5px",
            "float": "left",
            "margin": "2px",
            "text-align": "center",
            "opacity": "0.5",
            "cursor": "pointer"

          })
          // generates new elements ("div")
        elementArray.push($newElement);
      }
      // returns the element array
      return elementArray;
    }
    // returns the function that generate x
  return {
    hentElementArray: hentElementArray
  }

}());
// -- end HTMLGENERATOR
