var LANDLISTEMODULE = (function () {

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

});

var searchAllLand = function() {
  var output = ""; // initialize it outside the loop
  $.each(json.landListeJSON, function() {
    output += '<section class="landListeOutput">' + '<img src= "' + this.images + '" alt="' + this.name + '">' + '<p class="country">' + this.land + '</p>' + '<p class="city">' + this.by + '</p>' + '</section>';
  });
  $('.landOutput').html(output);
};

var searchLand = function() {
  var inputTxt = $("#searchDataTxt").val(); // initialize it outside the loop
  var result = "";
  $.each(json.landListeJSON, function(i, v) {
    if (v.land == inputTxt) {
      result += '<section class="landListeOutput">' + '<img src= "' + v.images + '" alt ="' + v.name + '">' + v.land + '<br>' + v.by + '</section>';
    }

  });
  $('.landOutput').html(result);


};

return {
  searchLand: searchLand,
  searchAllLand: searchAllLand
}

}());
