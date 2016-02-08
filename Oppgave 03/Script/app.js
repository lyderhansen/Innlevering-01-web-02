// Jørn Lyder hansen Innlevering 01 Oppgave 03
(function() {

  var FERIESTEDERAPP = {

    $searchLandBtn: null,
    $searchAllBtn: null,

    init: function() {

      var FA = FERIESTEDERAPP;

      var setElements = function() {
        FA.$searchLandBtn = $("#searchLandBtn");
        FA.$searchAllBtn = $("#searchAllBtn");

      }(); // end setElements

      var setEvents = function() {
        FA.$searchLandBtn.click(FA.searchLand);
        FA.$searchAllBtn.click(FA.searchAllLand);
      }(); // end setEvents

    }, // end init

    searchLand: function() {
      LANDLISTEMODULE.searchLand();
    }, // end searchLand

    searchAllLand: function() {
      LANDLISTEMODULE.searchAllLand();
    }, // end searchAllLand

  }; // end FERIESTEDERAPP

  $(function() {
    FERIESTEDERAPP.init();
  });

})();


/*
  $("#searchLandBtn").click(function() {
    LANDLISTEMODULE.searchLand();
  });

  $("#searchAllBtn").click(function() {
    LANDLISTEMODULE.searchAllLand();
  });
  */
