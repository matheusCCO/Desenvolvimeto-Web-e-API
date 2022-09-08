$(document).ready(function(){
    $("#p2").hide();

    $("#btn").click( function(){
        $("#p2").slideToggle(3000, function(){
            $("#p2").html("tudo bem? sim");
        });
    });




    $("#btnAdicionar").click( function(){
       var item = "<li>"+$("#prod").val() +"</li>";
       $("#produtos").append(item);
       $("#prod").val("");
       
    });
});
