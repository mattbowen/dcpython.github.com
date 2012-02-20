
function flip_cursor(){
    $('#cursor').toggle();
    setTimeout('flip_cursor();', 700);
}

$(document).ready(function(){
    flip_cursor();
});