
$(document).ready(function() {

//append new element 100 times
for (i = 0; i < 40; i++) { 
  $("body").append( "<div class='element' style='background-color: #b2b2b2;'></div>" );
  console.log("element " + i + " added");
}

  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','white');
  });

  $('.element').mouseout(function(){
    $(this).css('background-color','#ffbb99');
  });
});