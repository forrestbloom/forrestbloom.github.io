
(function() {
    function main() {
        var tabButtons = [].slice.call(document.querySelectorAll('ul.tab-nav li a.button'));

        tabButtons.map(function(button) {
            button.addEventListener('click', function() {
                document.querySelector('li a.active.button').classList.remove('active');
                button.classList.add('active');

                document.querySelector('.tab-pane.active').classList.remove('active');
                document.querySelector(button.getAttribute('href')).classList.add('active');
            })
        })
    }

    if (document.readyState !== 'loading') {
        main();
    } else {
        document.addEventListener('DOMContentLoaded', main);
    }
})();

$(document).ready(function() {
    $('.step-tabs').on('click', function() {
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 800);
    });
});


$('#next').click(function() {
    $('.tab-nav > .selected').next('li').find('a').trigger('click');
});


$('#prev').click(function() {
    $('.tab-nav > .selected').prev('li').find('a').trigger('click');
});