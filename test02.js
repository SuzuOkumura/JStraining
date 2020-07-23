(function($, window) {
  $(function() {
    // この中に処理を書きます
/*     
      $('#index').find('li').each(function() {
      // ループ内の処理
      alert($(this).text());
	  })
*/
	$('h2').show();
    //課題<1> 要素を削除する
	$('h2').remove();
	
	//課題<2> #index
    //alert( $('#index').text() );//文字のみが表示される
    //alert( $('#index').html() );//要素のhtmlコードがそのまま取得・表示される

	//課題<3> #index
    //$('#index').append('<li>メソッド</li>');
	
	//課題<4> #index li 要素の文字数
/*
 	  $('#index').find('li').each(function() {
      alert($(this).text().length);
	  })
*/
    //課題<5>
 	  $('#index').find('li').each(function() {
      $(this).append('[' + $(this).text().length + ']');
	  })
	
  });
})(jQuery, window);