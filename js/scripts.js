$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var color= $("#color").val();
    var food= $("#food").val();
    var season= $("#season").val();
    var animal= $("#animal").val();
    var destination= $("#destination").val();

    var favorites1 = [color, food, season, animal, destination];

    var favorites2 = favorites1.slice(0,2); //color, food
    var favorites3 = favorites2.reverse(); //food, color
    var favorites4 = favorites3.concat(favorites1[2]); //food, color, season



    alert (favorites4);

  });
});
