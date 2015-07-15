
(function($) {

  $( document ).ready(function() {
    var url      = window.location.href;
    $.post( "http://api.storlyay.com/logevent", { event_name: "page_load", uid: url, urlreferr: document.referrer} );
  });

})(jQuery);
