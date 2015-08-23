var data = [];

var dataStr ='dsxs<br><br>导演：昆汀<br>类型：动作<br>地区：美国<br>语言：英语<br><br><br>xxl<br><br>导演：unknown<br>类型：爱情<br>地区：美国<br>语言：英语<br><br><br>gys<br><br>导演：unknown<br>类型：爱情<br>地区：中国<br>语言：中文<br><br><br>bxgj<br><br>导演：unknown<br>类型：搞笑<br>地区：美国<br>语言：英语<br><br><br>dzd4<br><br>导演：unknown<br>类型：动作<br>地区：美国<br>语言：英语<br><br><br>hyj<br><br>导演：陈<br>类型：动作<br>地区：中国<br>语言：中文<br><br><br>s6<br><br>导演：unknown<br>类型：爱情，动作，赛车<br>地区：美国<br>语言：英语<br><br><br>d9q<br><br>导演：卡梅隆<br>类型：爱情，战争，外星人<br>地区：美国<br>语言：英语<br><br><br>xskdjs<br><br>导演：unknown<br>类型：爱情<br>地区：美国<br>语言：英语';

	var d = dataStr.split('<br><br><br>');
	for(var i=0;i<d.length;i++){
		var c = d[i].split('<br><br>');
		data.push({
			img:c[0]+'.jpg',
			caption:c[0],
			desc:c[1]
		});
		
	}
	//console.log(data);


