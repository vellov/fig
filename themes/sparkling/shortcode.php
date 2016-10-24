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
    $form = '<form id="contact_form_2" action="">'."\n";

    $fname = '<p>Your name<span class="required-field">*</span>'."\n";
    $fname .= '<input type="text" id="contact_form_name" class="form-control" name="name" value="">'."\n";
    $fname .= '</p>'."\n";

    $email = '<p>Your email<span class="required-field">*</span>'."\n";
    $email .= '<input type="email" id="contact_form_email" class="form-control" name="email" value="">'."\n";
    $email .= '</p>'."\n";

    $subject = '<p>Subject'."\n";
    $subject .= '<input type="text" id="contact_form_subject" class="form-control" name="subject" value="">'."\n";
    $subject .= '</p>'."\n";

    $message = '<p>Message<span class="required-field"></span>'."\n";
    $message .= '<textarea class="form-control" id="contact_form_message" rows="10" class="form-control"></textarea>'."\n";
    $message .= '</p>'."\n";

    $submit = '<input type="button" id="contact_form_submit_button" class="btn btn-default" value="Send">'."\n";
    $form .= $fname;
    $form .= $email;
    $form .= $subject;
    $form .= $message;
    $form .= $submit;
    $form .= '</form>'."\n";
    $form .= '<script>ContactForm.init("'.admin_url('admin-ajax.php').'")</script>';
    return $form;
}
add_shortcode('contact-form', 'contact_form');
