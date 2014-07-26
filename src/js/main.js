var couleur = "blanc";

Sortable.create(
    $('liste_couleur'),{
        tag: 'li',
        overlap: 'horizontal',
        constraint: false,
        onDrag : function(e){
            couleur = e.css('background-color');
        }
    }
);
Droppables.add('bille',{
   accept:'liste_couleur',
    onDrop: function(element){
        element.setStyle('background-color',couleur);
    }
});
    /*

    $('btn_start').on('click', function (e) {
        $('#testBlock').removeClass('hide');

    });

    $$('.btn_valider').first().on('click', function (e) {
        $('div_bille').appendChild($('testBlock').clone(true));
    });
*/

/*

    $$('.couleur').each(function (element) {
       var ma_couleur =new Draggable(element.readAttribute('id'),{revert: true});


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
 */
