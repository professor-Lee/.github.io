var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange' , function () {
	if(document.hidden) {
		$('[rel="icon"]').attr('href',"/img/banner-icon.png");
		document.title = '(っ °Д °;)っ喵喵喵!';
		clearTimeout(titleTime);
	}
	else {
		$('[rel="icon"]').attr('href',"/img/banner-icon.png");
		document.title = OriginTitle + 'ˋ( ° ▽、° ) ';
		titleTime = setTimeout(function () {
			document.title = OriginTitle;
		}, 2000);
	}
});