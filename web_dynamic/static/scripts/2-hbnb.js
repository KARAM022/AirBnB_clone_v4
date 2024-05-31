$('document').ready(function () {
    $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
        if (data.status === 'OK') {
        $('#api_status').addClass('available');
        } else {
        $('#api_status').removeClass('available');
        }
    });

    const amenities = {};
    $('input[type="checkbox"]').change(function () {
        if (this.checked) {
        amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
        delete amenities[$(this).attr('data-id')];
        }
        const names = Object.values(amenities);
        if (names.length > 0) {
        $('.amenities h4').text(Object.values(amenities).join(', '));
        } else {
        $('.amenities h4').html('&nbsp;');
        }
    });
});