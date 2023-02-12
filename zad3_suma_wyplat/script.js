const a = [];
let sum = 0;
$(document).ready(function() {
    $('#count-sum').click(function() {
        $('.salary').each(function(index){
            a[index] = $(this).text();
            sum += Number(a[index]);
        });
        $('#sum').text(sum);
        sum = 0;
        }); 
});