//预加载
var oPreload = document.querySelector('.preload')
var oSpan = document.querySelector('.preload span')
var iStatus = 0;

var imgData = [
	'img/bg.jpg',
	'img/bg1.jpg',
	'img/banner03.jpg'
];


for (var i = 0; i < imgData.length; i++) {
	var oImg = new Image();
	oImg.onload = function () {
		iStatus++;
		oSpan.innerHTML = Math.floor(iStatus / imgData.length * 100);
		if (iStatus == imgData.length) {
			oPreload.style.height = '0'
			// 			setTimeout(function(){
			// 				oPreload.remove()
			// 			},1000)
		}
	}
	oImg.src = imgData[i];
}

//获取案例
  $.ajax({
	url:'http://192.168.0.115:3000/getDemo',
	method:'get',
	success:function(res){
		if(res.code == 0 && res.data.length){
			var listStr = ''
			var resultData = res.data
			resultData.map((item)=>{
				listStr += `
				<li>
					<em class='mark'>${item.tag}</em>
					<a href="${item.detail_md}" target="_blank">
						<div class="pic">
							<img src="${item.thumb}" alt="">
						</div>
						<div class="info">
							<h5 title="${item.title}">${item.title}</h5>
							<h3 class="name">${item.sub_title}</h3>
							<img src="img/star.png" alt="">
							<p>技术:${item.skill}</p>
							<div class="download">猛击详情</div>
						</div>
					</a>
				</li>
			`
			})
			$('.zhufeng_video ul').append(listStr)
		}
	}
	});

//2017年
$('#history-2017').on('mouseenter', function () {
	layer.tips('牛闪闪的公司,在这让自己得到了升华,各种类型的项目都进行了尝试开发,官网,电商,移动端,小程序,app,没有做不到,只有想不到', '#history-2017', {
		tips: [1, '#0FA6D8'],
		time:20000
	});
})

//2015-2017年
$('#history-2015-2017').on('mouseenter', function () {
	layer.tips('负责配合网站编辑和其他部门完成专题页面开发制作,参与核心项目B2C商城的架构开发与前后端数据交互逻辑,负责公司现有项目和新项目的前端修改调试和开发工作', '#history-2015-2017', {
		tips: [1, '#0FA6D8'],
		time:20000
	});
})

//2014-2015年
$('#history-2014-2015').on('mouseenter', function () {
	layer.tips('公司官网的推广与搜索引擎优化,负责公司企业网站部分版块的开发与内容改版更新,负责天猫淘宝店铺的运营,宝贝上下架,编辑,优化,推广,宣传', '#history-2014-2015', {
		tips: [1, '#0FA6D8'],
		time:20000
	});
})

//2014-2015年
$('#history-2011-2014').on('mouseenter', function () {
	layer.tips('往事不堪回首,折腾让自己更强大', '#history-2011-2014', {
		tips: [1, '#0FA6D8']
	});
})
