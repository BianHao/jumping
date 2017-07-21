//轮播图
window.onload = function(){
	
	//获取操作的节点
	var banner = document.getElementById('banner');
	var oUl = document.getElementById('banner').getElementsByTagName('ul')[0];
	var aLi = document.getElementById('banner').getElementsByTagName('li');
	var btnLeft = document.getElementById('left');
	var btnRight = document.getElementById('right');
	
	//控制图片轮播的速度
	var speed = 2;
	
	//计算出整个ul的宽度
	oUl.style.width =  aLi[0].offsetWidth * aLi.length + "px";

	function scroll(){

		//控制向左轮播位移
		if(oUl.offsetLeft < - oUl.offsetWidth/2){
			oUl.style.left = "0px";
		}

		//控制向右轮播位移
		if(oUl.offsetLeft > 0){
			oUl.style.left = - oUl.offsetWidth/2 + "px";
		}

		//控制每次的偏移量
		oUl.style.left = oUl.offsetLeft - speed + "px";
	}

	//设置定时器
	var time = setInterval(scroll,30);

	//鼠标移上去，定时器停止
	banner.onmouseover = function(){
		window.clearInterval(time);
	}

	//鼠标移出时，启动定时器
	banner.onmouseout = function(){
		time = setInterval(scroll,30);
	}

	//通过改变speed的值，来改变轮播的方向
	btnLeft.onclick=function(){
		speed = 2;
	}
	btnRight.onclick=function(){
		speed = -2;
	}

}


//滚动条监听事件
$(document).ready(function(){
	
	// 回到顶部
	$('#toTop').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);		
	});

	//向上箭头的显示和隐藏
	$(window).scroll(function(event) {

		var sTop = $(window).scrollTop();

		// 只有滚动条超过100px才有必要显示回到顶部按钮
		if (sTop >= 100) {
			$('#toTop').fadeIn('slow');
		} else {
			$('#toTop').fadeOut('slow');
		}
	});

	//锚点连接过渡
	
	//about按钮连接
	$('#about').click(function(event) {
		var offsetTop = 736;

		$('html,body').animate({scrollTop:offsetTop}, 1000);

		return false; //只要是链接当按钮一定要阻止默认行为
	});

	//blog按钮连接
	$('#blog1').click(function(event) {
		var offsetTop = 1911;

		$('html,body').animate({scrollTop:offsetTop}, 1000);

		return false; //只要是链接当按钮一定要阻止默认行为
	});


});