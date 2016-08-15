$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var color= $("#color").val();
    var food= $("#food").val();
    var season= $("#season").val();
    var animal= $("#animal").val();
    var destination= $("#destination").val();

    var favorites1 = [color, food, season, animal, destination]; //gathers each of these form input values and places them into one array.

    var favorites2 = favorites1.slice(0,2); //color, food
    var favorites3 = favorites2.reverse(); //food, color
    var favorites4 = favorites3.concat(favorites1[2]); // builds a new array out of only the second, first and third elements of the first array, in that order.

    var newArray = favorites4.push(favorites1[0],favorites1[1],favorites1[2],favorites1[3],favorites1[4]); //use square bracket notation to access each element of the original array, and use the push() method to add these elements to the new array.

    $(".listOutput").show();
    $("#output0").text(favorites4[0]);
    $("#output1").text(favorites4[1]);
    $("#output2").text(favorites4[2]);
    $("#output3").text(favorites4[3]);
    $("#output4").text(favorites4[4]);
    $("#output5").text(favorites4[5]);
    $("#output6").text(favorites4[6]);
    $("#output7").text(favorites4[7]);
    //display the new array for the user in your page's HTML as list items in a <ul> tag.

  });
});
