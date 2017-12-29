data;
$(document).ready(function () {
    $('.gmaps').gmaps();
    var valor;
    var values = "";
    function restaurant() {
        for (i = 0; i < data.length; i++) {
            $('.container').append('<div class=" col-md-3 restaurant " ><p class="tipo_comida">' + data[i].name + '</p><img class="img-restaurant"  src=' + data[i].photo + '></div>');
            if (data[i].value ==="comida peruana"){
               
                $('ol').prepend('<li class= "col-m-2"> <p class="valuos">' + data[i].value + '</p ></li>');
                values = data[i].value;
              
            } 
            if (data[i].value === "comida china") {

                $('ol').append('<li class= "col-m-2"> <p class="valuos">' + data[i].value + '</p ></li>');
                values = data[i].value;
            
            } 
            if (data[i].value === "comida mexicana") {

                $('ol').append('<li class= "col-m-2"> <p class="valuos">' + data[i].value + '</p ></li>');
                values = data[i].value;
                
            } 
            if (data[i].value === "comida italiana") {

                $('ol').append('<li class= "col-m-2"> <p class="valuos">' + data[i].value + '</p ></li>');
                values = data[i].value;
               
            } 
        }
        
    }
    restaurant();


        $('#submit').click(function () {
            event.preventDefault();
            valor = $('#text1').val();
        });
       
    
    

});













/*
 $.each(data[0], function (key, value) {
        $('li:first-child').append( key + " =" + value);
        console.log( key + " = " + value);
    });


var $myata = data;
var $div =data[0];
$(document).ready(function () {
   console.log($div);
   $('div').append($div.address);
    //$("#div1").delay("1800").fadeOut('slow');
    for (key in $div) {
       $('.container').prepend([key] + $div[key]);
    }
   $.each($myata, function (key, value) {
        console.log("key", key, " = value", value);
    });
 });*/