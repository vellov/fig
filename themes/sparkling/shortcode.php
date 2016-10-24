<?php
/**
 * Created by PhpStorm.
 * User: vellovaherpuu
 * Date: 24/10/2016
 * Time: 18:03
 */


/**
 * Allow shortcodes in text_widget
 */
add_filter('widget_text','do_shortcode');


/**
 * Contact form shortcode
 */
function contact_form(){
    $successMsg = '<div class="alert alert-success" style="display: none" id="contact_form_success"></div>'."\n";

    $form = '<form id="contact_form" action="">'."\n";

    $error = '<div class="alert alert-danger" style="display: none" id="contact_form_error"></div>';
    $fname = '<p>'.fig_translate("Your name").'<span class="required-field">*</span>'."\n";
    $fname .= '<input type="text" id="contact_form_name" class="form-control" name="name" value="" required>'."\n";
    $fname .= '</p>'."\n";

    $email = '<p>'.fig_translate("Your email").'<span class="required-field">*</span>'."\n";
    $email .= '<input type="email" id="contact_form_email" class="form-control" name="email" value="" required>'."\n";
    $email .= '</p>'."\n";

    $subject = '<p>'.fig_translate("Subject").''."\n";
    $subject .= '<input type="text" id="contact_form_subject" class="form-control" name="subject" value="">'."\n";
    $subject .= '</p>'."\n";

    $message = '<p>'.fig_translate("Message").'<span class="required-field">*</span>'."\n";
    $message .= '<textarea class="form-control" id="contact_form_message" rows="10" class="form-control" required></textarea>'."\n";
    $message .= '</p>'."\n";

    $submit = '<input type="button" id="contact_form_submit_button" class="btn btn-default" value="'.fig_translate("Send").'">'."\n";

    $form .= $error;
    $form .= $fname;
    $form .= $email;
    $form .= $subject;
    $form .= $message;
    $form .= $submit;

    $form .= '</form>'."\n";
    $form .= '<script>ContactForm.init("'.admin_url('admin-ajax.php').'")</script>';
    return $successMsg . $form;
}
add_shortcode('contact-form', 'contact_form');
