$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('.autoplay-video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            if (!($(this)).hasClass('autoplayed')) {
                var yTopMedia = $(this).offset().top;
                var yBottomMedia = $(this).height() + yTopMedia;

                if (scrollTop < yBottomMedia && scrollBottom > yTopMedia){ 
                    $(this).get(0).play();
                    $(this).prop('loop', false);
                    $(this).addClass('autoplayed');
                } else {
                    $(this).get(0).pause();
                }
            }
        });
    }
    $(document).on('scroll', checkMedia);
});