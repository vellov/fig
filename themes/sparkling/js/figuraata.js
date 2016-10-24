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
      /*  jQuery("#contact_form_2").on("submit",function(e){
            var name = jQuery("#contact_form_name");
            var email = jQuery("#contact_form_email");
            var subject = jQuery("#contact_form_subject");
            var message = jQuery("#contact_form_message");

            jQuery.ajax({
                url: url,
                type: "post",
                data: {
                    "action": "agreement_modal_cb",
                    "data": {
                        name: name,
                        email: email,
                        subject: subject,
                        message: message
                    }
                },
                success: function(data){
                    console.log(data);
                    if(data.error){
                        //    $("#error-msg").show();
                        //    $("#error-msg").html(data.msg);
                    } else {

                        //   $("#agreement_form").addClass('hidden');
                        //  $("#agreement_success").removeClass('hidden');
                        // $("#agreement_email_2").html(email);
                    }
                }

            });
            e.stopPropagation();
            e.preventDefault();
        });*/
        jQuery("#contact_form_submit_button").on('click', function(){
            var name = jQuery("#contact_form_name").val();
            var email = jQuery("#contact_form_email").val();
            var subject = jQuery("#contact_form_subject").val();
            var message = jQuery("#contact_form_message").val();

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
                    console.log(data);
                    if(data.error){
                        //    $("#error-msg").show();
                        //    $("#error-msg").html(data.msg);
                    } else {

                        //   $("#agreement_form").addClass('hidden');
                        //  $("#agreement_success").removeClass('hidden');
                        // $("#agreement_email_2").html(email);
                    }
                }

            });
        })


    }
};