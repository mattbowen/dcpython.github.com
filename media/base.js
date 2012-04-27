
function flip_cursor(){
    $('#cursor').toggle();
    setTimeout('flip_cursor();', 700);
}

$(document).ready(function(){
    flip_cursor();
    
    // smooth scroll for links:
    $('nav a, .back-up').click(function(){
        smooth_scroll(this.href.split('#')[1]);
    });
});


// Animates a smooth scroll to #id
function smooth_scroll(id){
    $('html,body').animate({
        scrollTop:$('#' + id).offset().top
        }, 0);
    
    setTimeout(function(){
        window.location.hash = '#' + id;
        }, 0);
    
    return false;
}
