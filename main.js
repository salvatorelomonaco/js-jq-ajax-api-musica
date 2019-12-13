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
                var currentGenre = information[i].genre;
                console.log(currentGenre);

                var attributes = {
                    'cover':currentImg,
                    'titolo':currentTitle,
                    'nome': currentName,
                    'anno': currentYear,
                    "genere": currentGenre
                }

                var html = templateFunction(attributes);
                console.log(html);
                $('.container-songs').append(html);
            };
        },
        'error': function() {

        }
    });

    $('#generi').change(function() {
        var genereSelettore = $('#generi').val();
        if (genereSelettore == '') {
            $('.song').show();
        } else {

            $('.song').hide();

            $('.song').each(function() {
                var genereCorrente = $(this).attr('data-genere');
                if (genereCorrente.toLowerCase() == genereSelettore.toLowerCase()) {
                    $(this).show();
                }
            });
        }
    });
});

$(document).on('scroll', function () {
    $('header').addClass('orange-border');
})
