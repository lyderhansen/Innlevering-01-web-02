// Jørn Lyder hansen Innlevering 01 Oppgave 03 
// Module
var LANDLISTEMODULE = (function() {
// JSON liste
  var json = {
    "landListeJSON": [{
      "land": "Spania",
      "by": "Barcelona",
      "images": "images/barcelona.jpg"
    }, {
      "land": "Tyskland",
      "by": "Berlin",
      "images": "images/berlin.jpg"
    }, {
      "land": "Tyskland",
      "by": "Hamburg",
      "images": "images/hamburg.jpg"
    }, {
      "land": "England",
      "by": "Liverpool",
      "images": "images/liverpool.jpg"
    }, {
      "land": "England",
      "by": "London",
      "images": "images/london.jpg"
    }, {
      "land": "Spania",
      "by": "Madrid",
      "images": "images/madrid.jpg"
    }, {
      "land": "Frankrike",
      "by": "Nice",
      "images": "images/nice.jpg"
    }, {
      "land": "Frankrike",
      "by": "Paris",
      "images": "images/paris.jpg"
    }]
  };
// function that autocomplete input to help with searchDataTxt
// beacause now it have to be === to the land in the JSON list
  $(function() {
    var countries = [
      "Spania",
      "Tyskland",
      "England",
      "Frankrike"
    ];

    $("#searchDataTxt").autocomplete({
      source: countries
    });
  }); // end autocomplete function

  // search for all lands
  var searchAllLand = function() {
    var output = ""; // initialize it outside the .each and puts inn .landOutput
    $.each(json.landListeJSON, function() {
      output += '<section class="landListeOutput">' + '<img src= "' + this.images + '" alt ="' + this.name + '">' + '<p>' + this.land + '<br>' + this.by + '</p>' + '</section>';
    });
    $('.landOutput').html(output);
  }; // end searchAllLand

  // search on sepecific land
  var searchLand = function() {
    var inputTxt = $("#searchDataTxt").val(); // get the val() of the input
    var result = ""; // initialize it outside the .each and puts inn .landOutput
    $.each(json.landListeJSON, function() {
      if (inputTxt.toLowerCase() == this.land.toLowerCase()) { // if function so you can search for a sepecific land
        result += '<section class="landListeOutput">' + '<img src= "' + this.images + '" alt ="' + this.name + '">' + this.land + '<br>' + this.by + '</section>';
      }
    });
    $('.landOutput').html(result);
  }; // end searchLand

  // returns the search function to be able to use in the APP
  return {
    searchLand: searchLand,
    searchAllLand: searchAllLand
  }

}()); // end the module
