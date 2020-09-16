(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#zip7').jpostal({
        click : '#btn_postcodeSearch',
		postcode : [
            '#zip7'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);