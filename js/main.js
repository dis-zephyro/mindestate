// placeholders --------
$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});


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

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});


// Collapse panel_main

$('.collapse_link').click(function (event) {
    event.preventDefault();
    var panel = $(this).closest('div.panel_main');
    var icon = $(this).find('i:first');
    var body = panel.find('div.panel_body');
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


$('input[type="checkbox"]').click(function() {
    var rows = $(this).closest('tr');
    var check = rows.find('span.check i');
    var checkbox = ($(this).is(':checked'));

    if (checkbox) {
        check.addClass('text-success');
    }
    else{
        check.removeClass('text-success');
    }
});
