(function($, window) {
  //通常は、これでOnクリックを察知できる。
  //#flatpickrのfocus()が動作するのを確認済。
  //$('#pickerbox').on('click', function() {
     // $('#flatpickr').focus();
  //};
    const config = {
      defaultDate: 'today',
	  locale: 'ja',
    }
	//この記述でinputボックスを指定
    let fp = flatpickr('.flatpickr', config);

	//させたい動作
	//$('#pickerbox')と書くとなぜか動かないので、通常の呼び出しで記述
	//この辺は、jQueryの動作がよくわからないといいますか、納得しづらいです。
    document.getElementById('pickerbox').addEventListener('click', function() {
      fp.open();
    }, false);
    document.getElementById('clearbox').addEventListener('click', fp.clear, false);
})(jQuery, window);