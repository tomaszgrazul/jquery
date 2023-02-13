$(document).ready(function() {
   $('.hamburger').click(function() {
        $('.main-menu').toggleClass('open');
   }); 

   $('.main-menu-item a').click(function(element) {
        element.preventDefault();
    
        $('body').fadeOut(1000, function() {
            // window.location.href = 'https://wp.pl';
            window.location.href = $(element.target).attr('href');
        });
    });
});