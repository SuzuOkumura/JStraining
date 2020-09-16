(function($, window) {
  $(function() {
    $('#login').on('click', function(e) {
      var email = $('#email').val(),
          password = $('#password').val();
      alert(email);
      alert(password);
    });
  });
})(jQuery, window);