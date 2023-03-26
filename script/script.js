// let stage;
// let stageHeight;
// let stageWidth;

$(function () {
    // stage = $('#renderer')
    // stageHeight = stage.innerHeight();
    // stageWidth = stage.innerWidth();

    // for (let i=0; i < data.length; i++){
    //     let currentTerm = data[i];
    //     let title = currentTerm.title;
    //     let shortExplanation = currentTerm.short_explanation;
    //     let tags = currentTerm.tags;
    // }

    $.each(data, function(index, value) {
        let title = value.title;
        let shortExplain = value.short_explanation;
        let explain = value.explanation;
        let tags = value.tags;

        //Titel
        $('.tile-headline h3').text(value.title);
        $('.tile-text p').text(value.short_explanation);
        $('.hover-text').text(value.explanation);
        // $('.tile-tags li').text(value.tags);

        //Tags
        let tagList = $('.tile-tags ul');
        tagList.empty(); // clear any existing tags

        $.each(tags, function(index, tag) {
            let tagItem = $('<li>').text(tag);
            tagList.append(tagItem);
        });

        //Text einfügen
        title.text(value.title);
        shortExplain.text(value.short_explanation);
        explain.text(value.explanation);
        // tags.text(value.tags);

        $('#tiles').append(tile);
    });
});

