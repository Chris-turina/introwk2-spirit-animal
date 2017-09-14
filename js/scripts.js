$(document).ready(function(){
  $("form#quiz").submit(function(event){


  var gender = $("#gender").val();
  var colors = $("select#color").val();
  var numbers = $("select#number").val();

  var colorR = $(".color-r").val();
  var colorB = $(".color-b").val();
  var colorG = $(".color-g").val();

  var numberOne = $(".number-1").val();
  var numberTwo = $(".number-2").val();
  var numberThree = $(".number-3").val();

  if (gender === male) {
    if (colors === colorR && numbers === numberOne){
    }
  }

  event.preventDefault();
  }); //form#quiz event LINE2//
}); //DOCUMENT LINE1//
