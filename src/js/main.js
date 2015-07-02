$('.couleur').draggable({
    revert : true
});

$('.bille').droppable({
    drop : function(event, ui){
        $(this).css({
            "background-color" : $(ui.draggable).css("background-color")
        })
    }
});