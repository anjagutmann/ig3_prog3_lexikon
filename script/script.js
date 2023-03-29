// $(function () {

//     //each-Schleife verwenden, um über jedes Objekt in der Array-Variable "data" zu iterieren 
//     //und Inhalt in die entsprechenden Kacheln einzufügen

//     $.each(data, function(index, value) {
        
//         let title = value.title;
//         let shortExplain = value.short_explanation;
//         let explain = value.explanation;
//         let tags = value.tags;
    
//         // alle Kacheln mit dem $.each-Operator durchlaufen und auf Elemente in Kachel zugreifen
//         let tile = $('.tile').eq(index); // mit .eq(index) wird das Element ausgewählt, das dem aktuellen Index in der Schleife entspricht
//         tile.find('.tile-headline h3').text(title);
//         tile.find('.tile-text p').text(shortExplain);
//         tile.find('.hover-text').text(explain);
    
//         let tagList = tile.find('.tile-tags ul');
//         tagList.empty(); // alle Tags löschen und die erstellen, die gebraucht werden
//         $.each(tags, function(index, tag) {
//             tagList.append($('<li>').text(tag));
//         });
//     });
       
// });

$(function () {

    for (let i = 0; i < data.length; i++) {
        let title = data[i].title;
        let shortExplain = data[i].short_explanation;
        let explain = data[i].explanation;
        let tags = data[i].tags;
      
        let tile = $('<div class="tile"></div>');
        let tileContent = $('<div class="tile-content"></div>');
      
        //Titel
        let tileHeadline = $('<div class="tile-headline"></div>');
        let tileHeadlineText = $('<h3></h3>').text(title);
        tileHeadline.append(tileHeadlineText);
      
        //Kurze Erklärung
        let tileText = $('<div class="tile-text"></div>');
        let tileTextContent = $('<p></p>').text(shortExplain);
        tileText.append(tileTextContent);
      
        //Hovertext
        let hoverText = $('<div class="hover-text"></div>').text(explain);
      
        //Tags
        let tileTags = $('<div class="tile-tags"></div>');
        let tagList = $('<ul></ul>');
        $.each(tags, function(index, tag) {
          let tagItem = $('<li></li>').text(tag);
          tagList.append(tagItem);
        });
        tileTags.append(tagList);
      
        //Inhalt einfügen
        tileContent.append(tileHeadline);
        tileContent.append(tileText);
        tileContent.append(hoverText);
        tileContent.append(tileTags);
        tile.append(tileContent);
      
        $('#tiles').append(tile);
      }      
      
});

