//module pattern - den koden som en del andre utviklere ønsker å bruke

var HTMLGENERATOR = (function() {

  var hentElementArray = function(tag, antall) {
      var elementArray = [];

      for (var i = 0; i < antall; i++) {
        var $newElement = $("<" + tag + ">")
          .text(i + 1)
          .css({
            "width": "50px",
            "height": "50px",
            "background-color": "rgb(0, 0, 0)",
            "color": "rgb(255, 245, 0)",
            "border-radius": "5px",
            "float": "left",
            "margin": "2px",
            "text-align": "center",
            "opacity": "0.5",

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

//APP/module pattern - blanding av kode som du ønsker
//å dele samtidig som du ønsker å beskytte mest mulig

var MANGEDIV_APP = {
  //HTML objekter
  $mangeDivSection: null,

  //Lister [array]
  divArray: null,

  //init
  init: function() {
      var setElements = function() {
        MANGEDIV_APP.$mangeDivSection = $("#mangeDivSection");
      }(); // end setElements


      var setEvents = function() {
        $("#submitBtn").click(function() {
          var antallDivs = $("#inputDivAmount").val();
          MANGEDIV_APP.divArray = HTMLGENERATOR.hentElementArray("div", antallDivs);
          MANGEDIV_APP.$mangeDivSection.append(MANGEDIV_APP.divArray);

          $("div").hover(function() {
                $(this).css("opacity", "1");
              },
              function() {
                $(this).css("opacity", "0.5");
              }) // -- end hover opacity function

            .click(function() {
              $(this)
                .add($(this).next())
                .add($(this).prev())
                .css("background-color", "red")
            }) // -- end click

            .dblclick(function() {
              $(this).siblings().css("background-color", "blue");
            }); // -- end dblclick

        }); // -- end submit click function

      }(); // -- end set events

    } // end init

}; // end MANGEDIV_APP

MANGEDIV_APP.init();
