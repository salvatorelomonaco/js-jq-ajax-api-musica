$(document).ready(function() {

    var templateFunction = Handlebars.compile($('#template').html());

    var attributes = {
        'cover':'https:\/\/www.onstageweb.com\/wp-content\/uploads\/2018\/09\/bon-jovi-new-jersey.jpg',
        'titolo':'New Jersey',
        'nome': 'Bon Jovi',
        'anno': '1998'
    }

    var html = templateFunction(attributes);
    $('.container-songs').append(html);

    $.ajax({
        'url': ' https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data) {
            console.log(data);
        },
        'error': function() {

        }
    });
});
