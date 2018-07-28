
var gem1="images/gem1.jpg";  gem2="images/gem2.jpg"; gem3="images/gem3.jpg"; gem4="images/gem4.jpg";
var images =[gem1,gem2 , gem3, gem4 ];
var counter=0;
var matchvalue;
var win=0; losses=0;

$("#afterPlayLose").hide();
$("#afterPlayWin").hide();

// Crystal 1-12 and random 19-120.
$(document).ready(function() {        

    $("#random-button").on("click", function() {

        matchvalue = Math.round((Math.random()*101) + 19 );      
        $("#random").html(matchvalue);
    });
     
    for (var i =0; i< images.length; i++){

        var newimage=$("<img>");
        newimage.attr("src", images[i]);
        newimage.attr("id", ("gem" + (i+1)));
        newimage.attr("info", Math.round(Math.random()*12 +1));
        console.log(Math.round(Math.random()*12+1));
        newimage.addClass("crystal");
        $(".container #gems").append(newimage);
    };

    $(document).on("click",".crystal",function(){
         
        var result = ($(this).attr("info"));
        result = parseInt(result);
        counter = result + counter;
        console.log(counter);
        // console.log(result);
        $("#result").html(counter);

        if (counter === matchvalue) {
            win++;
            $("#win").html(win);
            $("#afterPlayWin").show();            
            setTimeout(function(){
                clearAfterPlay(event);
            },3000);
         }          
        else if (counter >= matchvalue) {
            losses++
            $("#lose").html(losses);
            $("#afterPlayLose").show();

            setTimeout(function(){
                clearAfterPlay(event);
            },3000);

          }

    });

    

});

function clearAfterPlay() {
     counter=0;
     matchvalue=0;
     $("#afterPlayLose").hide();
     $("#afterPlayWin").hide();
     $("#random, #result, #afterPlayLose, #afterPlayWin").empty();
  }


$("#restart").on("click", function restart (event)
{
    location.reload();
});
//document ready


    

