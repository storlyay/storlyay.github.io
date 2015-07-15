
(function($) {

  $( document ).ready(function() {
    var pathname = window.location.pathname;
    $.post( "http://api.storlyay.com/logevent", { event_name: "page_load", uid: pathname, urlreferr: document.referrer} );
  });

})(jQuery);
