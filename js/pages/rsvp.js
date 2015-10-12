;(function($) {
  'use strict'

  var req;

  $( "#rsvpForm" ).submit(function( ev ) {
    ev.preventDefault();

    $( "#rsvp-status" ).empty();
    $( "#rsvp-status" ).css({"color":"#CC181E"});

    if (req) {
      req.abort();
    }

    var $form = $( this ),
    ans = $('input[name=rsvp]:checked').val(),
    email = $( "#rsvp-email" ).val(),
    names = $( "#rsvp-names" ).val(),
    msg = $( "#rsvp-msg" ).val();

    var ok = true;
    if (!ans) {
      $( "#rsvp-status" ).append('Please select whether or not you can come.<br>');
      ok = false;
    } 
    if (!email) {
      $( "#rsvp-status" ).append('Please provide your email address.<br>');
      ok = false;
    }
    if (!names) {
      $( "#rsvp-status" ).append('Please provide the names you are RSVPing for.');
      ok = false;
    }

    if (ok) {
      $( "#rsvp-status" ).css({"color":"#101010"});
      $( "#rsvp-status" ).append("Submitting...");

      req = $.post( '/rsvp.php', $form.serialize(), function(data, status){
        $( "#rsvp-status" ).css({"color":"#CC181E"});
        $( "#rsvp-status" ).empty();

        if (data === "invalid email") {
          $( "#rsvp-status" ).append('This email is not on our guestlist. Please use the email at which you received an invite.');
        } else if (data === "success" ) {
          $( "#rsvp-status" ).css({"color":"#00B878"}); // success color
          if (ans == 1) {
            $( "#rsvp-status" ).append('Thank you for your RSVP. We are excited to see you at our cellebration!');
          } else {
            $( "#rsvp-status" ).append('Thank you for your RSVP. We are sorry that you will miss our cellebration!');
          }
          $( "#rsvp-yes" ).prop('checked', false);
          $( "#rsvp-no" ).prop('checked', false);
          $( "#rsvp-email" ).val('');
          $( "#rsvp-names" ).val('');
          $( "#rsvp-msg" ).val('');
        } else {
          alert("Sorry, something went wrong. Please contact Matthew or Fauzia if you are seeing this.\nData: " + data);
        }
      });
}
});

})(jQuery); 