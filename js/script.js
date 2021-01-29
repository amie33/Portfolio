/**
 * function to create the preloader page
 */
$(document).ready(function(){
    $("#preloader").fadeOut(9000, function(){
        $("#wrapperAll").fadeIn(200); 
    })
    
})

/**
 * so the page always starts at the top when loaded
 */
window.onload = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    //window.setTimeout(showPage, 9000); 
};



