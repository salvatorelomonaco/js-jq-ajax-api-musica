$(document).ready(function() {

    var templateFunction = Handlebars.compile($('#template').html());

    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data) {
            var information = data.response;
            for (var i = 0; i < information.length; i++) {
                var currentImg = information[i].poster;
                var currentTitle = information[i].title;
                var currentName = information[i].author;
                var currentYear = information[i].year;

                var attributes = {
                    'cover':currentImg,
                    'titolo':currentTitle,
                    'nome': currentName,
                    'anno': currentYear
                }

                var html = templateFunction(attributes);
                $('.container-songs').append(html);
            };
        },
        'error': function() {

        }
    });

    $('#generi').click()
});

$(document).on('scroll', function () {
    $('header').addClass('orange-border');
})
