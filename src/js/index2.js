;(function(){

    var aimg = document.querySelectorAll("img[lazySrc]");
	var arr = Array.from(aimg);
	
//	2.如何判断这张图片是否在可视区域内
//	页面的可视区域的大小
	var clientH = document.documentElement.clientHeight;
	
	lazyLoad();
//	滚动事件
	onscroll = function(){
//		滚动的距离
		lazyLoad();
	}

	function lazyLoad(){
		var scrollT = document.documentElement.scrollTop;
		for(var i=0;i<arr.length;i++){
//			当前图片距离顶部的位置
			if(arr[i].offsetTop - clientH < scrollT){
				arr[i].src = arr[i].getAttribute("lazySrc");
				
//				1.注意伪数组是否被转成真数组
				arr.splice(i,1);
//				2.注意在数组的遍历中修改数组的长度而导致的后果
				i--;
			}
		}
	}


})();