/**
 * ЭЛЕМЕНТЫ
 * <li> #w307w_tagSets - облако тегов вверху (как правило вверху) </li>
 * <li> .w307w_tagPress - виджет тега располагающегося в #w307w_tagSets </li>
 * <li> .w307w_tags - контейнер для тегов каком либо конкретном элементе; сами теги в этом случае это обычный span </li>
 * <li> w307w_selectedTextTags - массив нажатых тегов </li>
 */

var w307w_selectedTextTags = [];
$(document).ready(function () {

    //===
    $(".w307w_tags").children("span").click(function () {
        var text = $(this).text();
        if (w307w_selectedTextTags.indexOf(text) === -1) {
            w307w_selectedTextTags.push(text);
        } else {
            var int03 = w307w_selectedTextTags.indexOf(text);
            w307w_selectedTextTags.splice(int03, 1);
        }
        w307w_update();
    });

    //===
    var w307w_elem16;
    if ($("#w307w_tagSets").size() < 1) {
        if ($("#x44z_comm").size() < 1) {
            w307w_elem16 = $("#shapka");
        } else {
            w307w_elem16 = $("#x44z_comm");
        }
        w307w_elem16.after("<div id='w307w_tagSets'></div>");
    }

    //===
    var w307w_tags = $(".w307w_tags").children("span");
    var w307w_arrTextTags = [];
    w307w_tags.each(function () {
        var w307w_st59 = $(this).text();
        if (w307w_arrTextTags.indexOf(w307w_st59) === -1) {
            w307w_arrTextTags.push(w307w_st59);
        }
    });
    w307w_arrTextTags.sort();

    for (var i = 0; i < w307w_arrTextTags.length; i++) {
        var w307w_elem20 = $("<span class='w307w_tagPress'>" + w307w_arrTextTags[i] + "</span>");
        w307w_elem20.click(function () {
            var txt = $(this).text();
            if (w307w_selectedTextTags.indexOf(txt) === -1) {
                $(this).css('background', 'yellow');
                w307w_selectedTextTags.push(txt);
            } else {
                $(this).css('background', 'transparent');
                var int03 = w307w_selectedTextTags.indexOf(txt);
                w307w_selectedTextTags.splice(int03, 1);
            }

            w307w_update();
        });
        $("#w307w_tagSets").append(w307w_elem20);
        w307w_elem20.after("<span class='w307w_ctTags'>0</span>");
    }

    w307w_update();

});

function w307w_update() {

    var tagContainers = $(".w307w_tags");
    tagContainers.each(function () {
        var children = $(this).children("span");
        var ct = 0;
        children.each(function () {
            var tagText = $(this).text();
            if (w307w_selectedTextTags.indexOf(tagText) !== -1) {
                ct++;
            }
        });
        if (ct < w307w_selectedTextTags.length) {
            $(this).parent().hide();
        } else {
            $(this).parents().show();
        }
    });

    //===
    var tags2 = $(".w307w_tags:visible").children("span");
    $('.w307w_tagPress').each(function () {
        var b = 0;
        var t1 = $(this).text();
        tags2.each(function () {
            var t2 = $(this).text();
            if (t1 === t2) b++;
        });
        if (b === 0) {
            $(this).css("background", "#4F86C6");
        } else {
            if (w307w_selectedTextTags.indexOf(t1) !== -1) {
                $(this).css("background", "yellow");
            } else {
                $(this).css("background", "transparent");
            }
        }
    });

    //===
    tags2.each(function () {
        if (w307w_selectedTextTags.indexOf($(this).text()) !== -1) {
            $(this).css('background', 'yellow');
        } else {
            $(this).css('background', 'transparent');
        }
    });

    //===
    $(".w307w_tagPress").each(function () {
        var t1 = $(this).text();
        var ct = 0;
        $(".w307w_tags:visible").children("span").each(function () {
            var t2 = $(this).text();
            if (t1 === t2) ct++;
        });
        $(this).next().text(ct);
    });

}





