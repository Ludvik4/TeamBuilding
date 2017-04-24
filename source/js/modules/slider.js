var programs_animate = false;
$(function()
{
    setInterval(function(){
        moveProgramsLeft()
    }, 5000);
    $("#programs_left_over").on("click", function(e)
    { moveProgramsLeft(); });
    $("#programs_right_over").on("click", function(e)
    { moveProgramsRight(); console.log(1); });
    $("#programs_left_arrow").on("click", function(e)
    { moveProgramsLeft(); });
    $("#programs_right_arrow").on("click", function(e)
    { moveProgramsRight(); });
});

function moveProgramsLeft()
{
    if(!programs_animate)
    {

        programs_animate = true;
        var l = $(".programs_hidden_right").length;
        $(".programs_hidden_right").eq(l-1).clone(true).removeClass("programs_hidden_right").addClass("programs_hidden_left").prependTo("#programs_cards");
        $(".programs_hidden_right").eq(l-1).remove();
        $(".programs_right").addClass("programs_hidden_right").removeClass("programs_right");
        $(".programs_central").removeClass("programs_central").addClass("programs_right");
        $(".programs_left").removeClass("programs_left").addClass("programs_central");
        $(".programs_hidden_left").eq(0).removeClass("programs_hidden_left").addClass("programs_left");

        setTimeout("setProgramsLeft()", 500);
    }
}
function moveProgramsRight()
{
    if(!programs_animate)
    {

        programs_animate = true;
        $(".programs_left").addClass("programs_hidden_left").removeClass("programs_left");
        $(".programs_central").removeClass("programs_central").addClass("programs_left");
        $(".programs_right").removeClass("programs_right").addClass("programs_central");
        $(".programs_hidden_right").eq(0).removeClass("programs_hidden_right").addClass("programs_right");

        $("#programs_symbol_left").removeClass("programs_symbol").addClass("programs_symbol_hidden").delay(200).queue(function()
        {
            $(this).children('span').css("background-image","url('img/"+sl+".png')");
            $(this).children('div').html(""+programs_titles[sl]+"");
            $(this).removeClass("programs_symbol_hidden").addClass("programs_symbol").dequeue();
        });

        setTimeout("setProgramsRight()", 500);
    }
}
function setProgramsLeft()
{
    programs_animate = false;
}
function setProgramsRight()
{
    programs_animate = false;
    $(".programs_hidden_left").eq(0).clone(true).removeClass("programs_hidden_left").addClass("programs_hidden_right").appendTo("#programs_cards");
    $(".programs_hidden_left").eq(0).remove();

}