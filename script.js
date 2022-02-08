$(".thirdImage").hide();
$(".fourthImage").hide();
$(".comeback").hide();

$(".start-button").click(function() {
});

$(".reply-yes").click(function() {
    $(".farmers-reply").text("Yep");
    $(".reply-yes").hide();
    $(".reply-no").hide();
    $(".start-button").hide();
    $(".endgame").hide();
    $(".dblclick").show();
    $("body").css("background-color", "Green");
    $(".thirdImage").hide();
    $(".goodjob").hide();
});

$(".SECImage").dblclick(function() {
    $(".goodjob").hide();
    $(".SECImage").hide();
    $(".thirdImage").hide();
    $(".thirdImage").show();
    $(".Doubleclk").hide();
    $(".goodjob").show();
});        

$(".thirdImage").dblclick(function() {
    $(".thirdImage").hide();
    $(".fourthImage").show();
    $(".goodjob").hide();
    $(".comeback").show();
    
    
});


$(".reply-no").click(function() {
    $(".farmers-reply").text("No");
    $("body").css("background-color", "Red");
    $(".reply-no").hide();
    $(".reply-yes").hide();
    $(".start-button").hide();
    $(".endgame").show();
    $(".Doubleclk").hide();
    $(".thirdImage").hide();
    $(".goodjob").hide();
    
});