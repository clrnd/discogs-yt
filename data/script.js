$(function(){
    var artist = $('#profile_title').find('a:eq(0)').text();

    $('table.playlist tr.track').each(function(){
        var $title = $(this).find('span.tracklist_track_title');

        var qs = artist + ' ' + $title.text();

        var $a = $('<a/>')
            .css('float', 'right')
            .prop('href', 'https://www.youtube.com/results?search_query=' + qs)
            .text('Youtube');
        $title.append($a);
    });
});
