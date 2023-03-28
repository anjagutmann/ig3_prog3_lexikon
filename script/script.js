$(function () {

    //each-Schleife verwenden, um über jedes Objekt in der Array-Variable "data" zu iterieren 
    //und Inhalt in die entsprechenden Kacheln einzufügen

    $.each(data, function(index, value) {
        
        let title = value.title;
        let shortExplain = value.short_explanation;
        let explain = value.explanation;
        let tags = value.tags;
    
        // alle Kacheln mit dem $.each-Operator durchlaufen und auf Elemente in Kachel zugreifen
        let tile = $('.tile').eq(index); // mit .eq(index) wird das Element ausgewählt, das dem aktuellen Index in der Schleife entspricht
        tile.find('.tile-headline h3').text(title);
        tile.find('.tile-text p').text(shortExplain);
        tile.find('.hover-text').text(explain);
    
        let tagList = tile.find('.tile-tags ul');
        tagList.empty(); // alle Tags löschen und die erstellen, die gebraucht werden
        $.each(tags, function(index, tag) {
            tagList.append($('<li>').text(tag));
        });
    });
       
});

