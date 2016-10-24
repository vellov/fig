/**
 * Created by vellovaherpuu on 24/10/2016.
 */

jQuery(document).ready(function($) {
    function setContentBottomPaddingByFooterHeight(){
        var footerH = $("#footer-area").height();
        var content = $("#content");

        content.css('padding-bottom', footerH);
    }

    setContentBottomPaddingByFooterHeight();

    $( window ).resize(function() {
        setContentBottomPaddingByFooterHeight();
    });
});