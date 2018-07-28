
var gem1="images/gem1.jpg";  gem2="images/gem2.jpg"; gem3="images/gem3.jpg"; gem4="images/gem4.jpg";
var images =[gem1,gem2 , gem3, gem4 ];

// Crystal 1-12 and random 19-120.

var matchvalue=0;
var result=0;


$(document).ready(function() {

        

    $("#random-button").on("click", function() {

        matchvalue=Math.round((Math.random()*101) + 19 );      
        $("#random").html(matchvalue);
    });
     
    for (var i =0; i< images.length; i++){

        var newimage=$("<img>");
        newimage.attr("src", images[i]);
        newimage.attr("id", ("gem" + (i+1)));
        newimage.attr("info", Math.ceil(Math.random()*12));
        console.log(Math.ceil(Math.random()*12));
        newimage.addClass("crystal");
        $(".container #gems").append(newimage);
    };

    $(document).on("click",".crystal",function(){
        var value = $(this).attr("info");
        console.log(value);
        result = value + result;
        console.log(result);
        $("#result").html(result);

    });

    

});

$("#restart").on("click", function restart (event)
{
    location.reload();
});
//document ready
    

