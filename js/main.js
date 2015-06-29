// menu --------

$(document).ready(function() {
// Указываем переменные
    var accordion_head = $('.sidenav  li > a'),
        accordion_body = $('.sidenav li > .sub_menu');

// Функция клика
    accordion_head.on('click', function(event) {
// Скрывает открытый раздел по повторному клику
        event.preventDefault();
        if ($(this).attr('class') == 'active'){
            accordion_body.slideUp('normal')
            $(this).removeClass('active');
            return false;
        }
// Открывает следующий, скрывая открытый
        if ($(this).attr('class') != 'active'){
            accordion_body.slideUp('normal');
            $(this).next().stop(true,true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        }
    });
});


$(function() {
    var pull = $('.sidenav_toggle');
    menu = $('.sidenav');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});



$(function(){
    var navHeight = $('.sidenav_inner').height();
    var browserHeight = $(window).height();
    console.log(navHeight);
    console.log(browserHeight);

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > (navHeight - browserHeight)) $('.sidenav_inner').addClass('sidenav_fixed');
        else $('.sidenav_inner').removeClass('sidenav_fixed');
    })
});



// Collapse panel_main

$('.collapse_link').click(function (event) {
    event.preventDefault();
    var panel = $(this).closest('div.panel_main');
    var icon = $(this).find('i:first');
    var body = panel.find('div.panel_body');
    var footer = panel.find('div.panel_footer');
    body.slideToggle(300);


    // Toggle icon from up to down
    icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    panel.toggleClass('').toggleClass('panel_collapse');
    setTimeout(function () {
        panel.resize();
        panel.find('[id^=map-]').resize();
    }, 50);
});


// Close panel_main

$('.close_link').click(function (event) {
    event.preventDefault();
    var panel = $(this).closest('div.panel_main');
    panel.remove();
});