"option strict"

$().ready(function(){
    $("#inbox")
    .css("color", "blue");
    $('button')
    .css("color", "red")
    .css("fontWeight", "bold").click(function(){
       var txt = $('#inbox').val();
       $('label').text(txt);
    });



    $("body").css("background-color", "blue")
});



   
