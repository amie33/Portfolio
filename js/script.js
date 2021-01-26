$(document).ready(function(){
    $("#preloader").fadeToggle(15000, function(){
        //$("#wrapperAll").css("display", "block");
        $("#wrapperAll").fadeIn(1000);  
    });
    
})

window.onload = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    //window.setTimeout(showPage, 9000); 
    
};
/*
function showPage(){
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('wrapperAll').style.display = 'block';
}
*/

