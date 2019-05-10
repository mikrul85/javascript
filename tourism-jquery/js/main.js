$(document).ready(function() {

    //Открываем окно
    $.fn.openBtn = function () {
        $(this).on('click', function () {
            $('.overlay:first').fadeIn( "slow" );
            $('.modal:first').slideToggle();
        });
    }

    // Закрываем окно на крестик
    $('.close').on('click', function () {
        $('.overlay:first').fadeOut( "slow" );
        $('.modal:first').slideToggle();
    });
    
    $('.main_btn:first').openBtn();
    $('.main_btna:first').openBtn();
    $('.main_nav nav ul li:eq(1)').openBtn();

    

});