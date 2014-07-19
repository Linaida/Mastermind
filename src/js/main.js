$(function () {
    var couleur = "blanc";
    $('btn_start').on('click', function (e) {
        $('#testBlock').removeClass('hide');

    });
    $$('.btn_valider').first().on('click', function (e) {
        $('div_bille').appendChild($('testBlock').clone(true));
    });

    $$('.couleur').each(function (element) {
        element.draggable({
            appendTo: "body",
            revert: true
        })

    });

    $$('.couleur').each(function (element) {
        element.on('drag', function () {
            couleur = $(this).css('background-color');
        })

    });

    $$('.bille').each(function (element) {
        element.droppable({
            activeClass: "ui-state-default",
            drop: function () {
                $(this).css('background-color', couleur);
                console.log(couleur);
            }

        })
    });

});