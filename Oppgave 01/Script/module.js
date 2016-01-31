//module pattern

var HTMLGENERATOR = (function() {

  var hentElementArray = function(tag, antall) {
      var elementArray = [];

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
        elementArray.push($newElement);
      }
      return elementArray;
    }
    // attributtet er et valgfritt navn: verdien er navn på funksjon som skal være tilgjengelig
  return {
    hentElementArray: hentElementArray
  }

}());
// -- end HTMLGENERATOR
