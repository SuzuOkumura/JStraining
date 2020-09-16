(function($, window) {
  $(function() {
    $('#email').on('blur', function() {
      alert($(this).val());
    });
    $('#password').on('focus', function() {
    });
    $('#password').on('blur', function() {
      alert($(this).val());
    });
  });
})(jQuery, window);