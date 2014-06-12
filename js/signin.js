$('div.toggle').click(function () {
    $('.container').hide();
    $('#' + $(this).data('page')).toggle();
});
