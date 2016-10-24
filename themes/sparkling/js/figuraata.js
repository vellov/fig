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

var ContactForm = {
    init: function(url){
        jQuery("#contact_form_error").hide();
        jQuery("#contact_form_submit_button").on('click', function(){
            var name = jQuery("#contact_form_name").val();
            var email = jQuery("#contact_form_email").val();
            var subject = jQuery("#contact_form_subject").val();
            var message = jQuery("#contact_form_message").val();
            jQuery("#contact_form :input").prop("disabled", true);

            jQuery.ajax({
                url: url,
                type: "post",
                data: {
                    "action": "contact_form_callback",
                    "data": {
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    }
                },
                success: function(data){
                    jQuery("#contact_form :input").prop("disabled", false);
                    if(data.error){
                        jQuery("#contact_form_success").hide();
                        jQuery("#contact_form_error").show();
                        jQuery("#contact_form_error").html(data.msg);
                    } else {
                        jQuery("#contact_form_error").hide();
                        jQuery("#contact_form_success").show();
                        jQuery("#contact_form_success").html(data.msg);
                        resetContactForm()
                    }
                }
            });
        });

        function resetContactForm() {
            jQuery("#contact_form_name").val("");
            jQuery("#contact_form_email").val("");
            jQuery("#contact_form_subject").val("");
            jQuery("#contact_form_message").val("");
        }
    }
};