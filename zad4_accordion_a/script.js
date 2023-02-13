$('.accordion-content').slideUp();
$('.fa-solid').removeClass('fa-circle-up');
$(document).ready(function() {
    $('.accordion-item').click(function() {
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('#arrowUp').removeClass('fa-circle-up');
            $(this).find('#arrowDown').addClass('fa-circle-down');
            $(this).find('.accordion-content').slideUp();
        } else {
            $(this).addClass('open');
            $(this).find('#arrowUp').addClass('fa-circle-up');
            $(this).find('#arrowDown').removeClass('fa-circle-down');
            $(this).find('.accordion-content').slideDown();
        }
    });
});