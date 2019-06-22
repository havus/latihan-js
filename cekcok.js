// fungsi kurung adalah func yg dijalankan ketika html sudah ready
// (function() {
//     $('h1').addClass('tittle');
// })()

let countClick = 0;

$('#pencet').on('click', function() {
    // e.preventDefault();
    if (countClick == 0) {
        $('h1').fadeIn(1000);
        $('h1').removeClass('tittle');
    } else if (countClick == 1){
        $('h1').addClass('tittle');
    } else {
        $('h1').fadeOut(1000);
        countClick = -1;
    }
    console.log(countClick);
    countClick++;
})