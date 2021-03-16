
function init_hlight() {
    // $('.tohlight').setAttribute('onMouseEnter','tohlight(this)')
    $('.hlb').mouseover(function () { tohlight($(this)) });
    $('.hlb').mouseout(function () { outhlight($(this)) });
    $('.hlb').on('click',lightclick);
}
function tohlight(ele) {
    var lh = parseInt($(ele).css('lineHeight'), 10);
    if ($(ele)[0].innerText.length > 0) {
        var w = (lh * $(ele)[0].innerText.length);
    } else {
        var w = parseInt($(ele).css('width'), 10) * 1.5;
    }
    $('.hlight').css('width', w + 'px')
    // $('.hlight').css('marginTop',lh/4+'px');
    // $('.hlight').css('height',lh/2+'px')
    $('.hlight').css('height', lh + 'px')
    $('.hlight').css('top', $(ele).offset().top);
    $('.hlight').css('left', $(ele).offset().left - w / 4);
    $('.hlight').css('opacity', 1);
    $(ele).css('z-index', 10);
}
function outhlight(ele) {
    $('.hlight').css('opacity', 0);
    $(ele).css('z-index', 1);
}
function lightclick() {
    var h = $('.hlight');
    var left = parseInt(h.css('left'), 10);
    var top = parseInt(h.css('top'), 10);
    var width = parseInt(h.css('width'), 10);
    var height = parseInt(h.css('height'), 10);
    // h.css('left',(left-width/2)+'px');
    var freq = 12;
    var anime = setInterval(() => {
        var newWidth = parseInt(h.css('width'), 10)
        var newLeft = parseInt(h.css('left'), 10)
        var newHeight = parseInt(h.css('height'), 10)
        var newTop = parseInt(h.css('top'), 10)
        if (newWidth > 2 * (width+500)) {
            h.css('opacity', 0);
            clearInterval(anime)
        } else {
            h.css('width', (newWidth + (width+500) / freq) + 'px')
            h.css('height', (newHeight - height / freq / 2) + 'px')
            h.css('left', (newLeft - (width+500) / freq / 2) + 'px')
            h.css('top', (newTop + height / freq / 2) + 'px')
        }
    }, 6);
}