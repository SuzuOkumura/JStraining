//課題(1)～(2)

var answer = prompt('数字を入力してください');
if (isNaN(answer)==true){
  alert('数字を入力してください')
} else if (answer > 0 ) {
  alert('正の数です');
} else if (answer < 0 ) {
  alert('負の数です');
} else {
  alert('0以外を入力してください');
} 

//課題(3)～(5)
var animals = ['パンダ', 'ライオン', 'キリン'];
var answer = prompt('パンダ,ライオン,キリンのうち、見たくないものは？');
if (animals.indexOf(answer)=== -1){
  alert('パンダ,ライオン,キリンのどれでもありません。動物園にはまたいらしてください');
} else if (answer == 'ライオン'){
  alert('ライオン'+' '+'うーん残念です。動物園にはまたいらしてください');
} else {
  alert('ようこそ！　動物園のメンバーを紹介します！ぜひ見てくださいね💛');
  var i = 0;
  while (true) {
    if (i >= animals.length) {
      break;
    }
    alert(animals[i]);
    i++;
  }
  alert('ありがとうございます！')
}

//課題(6)～(7)
var animals2 = [
  {'name': 'パンダ', 'weight': 80},  
  {'name': 'ライオン', 'weight': 200},
  {'name': 'キリン', 'weight': 300}
];
var answer = prompt('パンダ,ライオン,キリンのうち、知りたい体重の動物は？');
switch (answer) {
  case 'パンダ':
    alert(animals2[0].name + 'は' +animals2[0].weight + 'Kgです');
    break; 
  case 'ライオン':
    alert(animals2[1].name + 'は' +animals2[1].weight + 'Kgです');
    break; 
  case 'ライオン':
    alert(animals2[2].name + 'は' +animals2[2].weight + 'Kgです');
    break; 
  default:
    alert('パンダ,ライオン,キリンのどれかを入れてください。またお越しください。');
    break; 
}

//課題(8)
function calc(x) {
  return x ** 2 * 3.14;
}
var answer = prompt('円の半径を入力して下さい。面積を計算します');

var regex = new RegExp('(d{0,3})(.[0-9]+)?$', 'g');
if (answer.search(regex) === -1) {
  alert('小数を含む、半角数字を入力してください。')
} else if (isFinite(answer)==false){
  alert('文字列を含まない、小数を含む、半角数字を入力してください。')
} else {
  alert('円の面積は　' + calc(answer)+'　です');
}