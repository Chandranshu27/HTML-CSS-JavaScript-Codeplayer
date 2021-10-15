function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $('#CSSPanel').val() + "</style></head> <body>" + $('#htmlPanel').val()) + "</body></html>";

    document.getElementById('outputPanel').contentWindow.eval($('#JavaScriptPanel').val());

}

$('.element').hover(function() {
    $(this).addClass('highlighted');
}, function() {
    $(this).removeClass('highlighted');
});

$('.element').click(function() {
    $(this).toggleClass('clickBlue');
    $(this).removeClass('highlighted');

    var panelID = $(this).attr('id') + 'Panel';

    $('#' + panelID).toggleClass('hidden');

    var activePanel = 4 - $('.hidden').length;

    $('.panel').width(($(window).width() / activePanel) - 10);



});

$('.panel').height($(window).height() - $('#heading').height() - 25);

$('.panel').width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function() {
    updateOutput();
});