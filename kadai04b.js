(function($, window) {
  const config = {
    defaultDate: 'today',
	locale: 'ja',
  }
  
  let fp = flatpickr('.flatpickr', config);
  document.getElementById('openCalendar').addEventListener('mouseover', function() {
    fp.open();
  }, false);
})(jQuery, window);