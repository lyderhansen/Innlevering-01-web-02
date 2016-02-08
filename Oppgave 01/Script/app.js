// Jørn Lyder hansen Innlevering 01 Oppgave 01
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
          // get input from user
          var antallDivs = $("#inputDivAmount").val();
          // puts inn type of element and amoutn from user
          MANGEDIV_APP.divArray = HTMLGENERATOR.hentElementArray("div", antallDivs);
          // creates the divs
          MANGEDIV_APP.$mangeDivSection.html(MANGEDIV_APP.divArray);
          // styles the divs and sets click and dbclick functions
          $("div").hover(function() {
                $(this).css("opacity", "1");
              }, // start hover opacity
              function() {
                $(this).css("opacity", "0.5");
              }) // -- end hover opacity function
            // adds colors to div clicked and the next and previus div
            .click(function() {
              $(this)
                .add($(this).next())
                .add($(this).prev())
                .css("background-color", "rgb(246, 0, 111)")
            }) // -- end click
            // adds colors to div doubleclicked and the all the divs
            .dblclick(function() {
              $(this).siblings().css("background-color", "rgb(42, 218, 236)");
            }); // -- end dblclick

        }); // -- end submit click function

      }(); // -- end set events

    } // end init

}; // end MANGEDIV_APP

MANGEDIV_APP.init(); // run init function
