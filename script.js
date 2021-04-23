$(document).ready(function(){
    $.getJSON("cars.json", function(result){
        alert(result)
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
});