$(document).ready(function() {
    $('button').click(function() {
        $('.box')
        .animate({left: '100px'}, 1500)
        .animate({height: '100px', width: '100px'}, 1500)
        .animate({backgroundColor: 'blue'}, 5000);

        $('button')
        .animate({left: '100px'}, 1500)
        .animate({height: '10px', width: '30px'}, 1500);

        $('i').delay(1500).animate({fontSize: '5px'}, 1500);

        $('h2').delay(8000).animate({opacity: '1'}, 1000);
        }); 
});




