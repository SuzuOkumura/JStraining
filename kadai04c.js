(function($, window) {
  const config = {
	  wrap: true,
      defaultDate: 'today',
	  locale: 'ja',
  }
  //コンストラクタ
  let fp = flatpickr('.flatpickr', config);
  
/*
  document.getElementById('openCalendar').addEventListener('mouseover', function() {
    fp.open();
  }, false);
*/
})(jQuery, window);