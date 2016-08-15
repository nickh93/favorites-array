$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var color= $("#color").val();
    var food= $("#food").val();
    var season= $("#season").val();
    var animal= $("#animal").val();
    var destination= $("#destination").val();
    var favorites = [color, food, season, animal, destination];

    alert (favorites);
  });
});
