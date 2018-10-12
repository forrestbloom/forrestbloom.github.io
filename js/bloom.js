new TypeIt('#intro', {
    speed: 45,
    autoStart: false,
    lifeLike: true,
    startDelay: 600
    })
    .type('Forrest Bloom')
    .pause(100)
    .break()
    .type('Music Production, Mixing, and Mastering')
    .pause(1000)
    .type(' (just a bit)');

var $first = $('li:first', 'ul'),
    $last = $('li:last', 'ul');
$("#next").click(function () {
    var $next, $selected = $(".selected");


    $next = $selected.next('li').length ? $selected.next('li') : $first;
    $selected.removeClass("selected");
    $next.addClass('selected');
});

$("#prev").click(function () {
    var $prev, $selected = $(".selected");

    $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
    $selected.removeClass("selected");
    $prev.addClass('selected');
});
   