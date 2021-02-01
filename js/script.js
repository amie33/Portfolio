//alert('test');
/**
 * function to create the preloader page
 */
// $(document).ready(function(){
//     $("#preloader").fadeOut(10, function(){
//         $("#wrapperAll").fadeIn(500); 
//     })
// })
jQuery(window).on('load', function(){
    jQuery('#wrapperAll').hide();
    if (sessionStorage.getItem('dontLoad') == null)
    {
        jQuery("#preloader").fadeOut(10000, function(){
            $('#wrapperAll').fadeIn(500);
            
        });
    }
        
    
})

/**
 * so the page always starts at the top when loaded
 */
// window.onload = function() {
//     document.body.scrollTop = document.documentElement.scrollTop = 0;
//     //window.setTimeout(showPage, 9000); 
// };



