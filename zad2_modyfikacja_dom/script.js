// $(document).ready(function() {
//     $('#btnUp').click(function() {
//         const getLiUp = $('.paragraph').first();
//         $('.paragraph').first().remove();
//         $('ul').append(getLiUp);
//         }); 

//     $('#btnDown').click(function() {
//         let getLiDown = $('.paragraph').last();
//         $('.paragraph').last().remove();
//         $('ul').prepend(getLiDown);
//     }); 
// });

$(document).ready(function() {
    $('.btnUp').click(function() {
        const getUp = $('.par').last().remove();
        // $('.par').last().remove();
        $('.box').prepend(getUp);
        }); 

    $('.btnDown').click(function() {
        const getDown = $('.par').first().remove();
        // $('.par').first().remove();
        $('.box').append(getDown);
        
    }); 
});




