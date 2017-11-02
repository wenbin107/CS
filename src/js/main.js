require(['jquery'],function($){
	// alert(1);
	$(function(){
        $.ajax({
            url: '../json/hot.json',
            type: 'Get',
            dataType: 'json',
            // data: {
            //     offset: 0,
            // },
            success:function(data){
                
                for(var i = 0; i < data.items.length;i++){
                	for(var k = 0;k<data.items[i].pc.length;k++){
                          if(data.items[i].pc[k].poi_category != "景点"&&data.items[i].pc[k].poi_category != "其它"){
                		console.log(data.items[i].pc[k].desc);
                	var box1 = $('<div style="border:1px solid red;width:300px;"  class="box1 left"><img style="width:300px;height:400px;"  src="'+data.items[i].pc[k].poi_category+'"><p>'+data.items[i].pc[k].desc+'</p></div>')
                     $('#bigBox').append(box1[k]);
                	}
                	
                	}
                	

                }   
            }
        });

         var arr =
			{
	"hot":[
	{   
		"name":"高野山四天三晚避世体验",
		"value":"¥3500",
		"src":"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg",
        
	},
	{   
		"name":"麻烦跟我去厦门疯一回『厦门3天2夜放浪体验』",
		"value":"¥3500",
		"src":"http://img.chufaba.me/c98635fa52925ca8bef2a9d80240433c.jpg",
        
	},
	{   
		"name":"高野山四天三晚避世体验",
		"value":"¥3500",
		"src":"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg",
        
	},
	{   
		"name":"巴厘岛6天5晚度假体验",
		"value":"¥3760",
		"src":"http://img.chufaba.me/f7f8736774e8fa9c5f57f1206d1d9a15.jpg",
        
	},
	{   
		"name":"微笑之下的迷之乐园『斯里兰卡8天7晚迷之体验』",
		"value":"¥5360",
		"src":"http://img.chufaba.me/704a4f13bc197f04541af76e99a208da.jpg",
        
	},
	{   
		"name":"美西1号公路自驾游定制",
		"value":"¥7599",
		"src":"http://img.chufaba.me/afdc171217b081835e47aafeccea44dc.jpg",
        
	},
	{   
		"name":"策马飞奔向草原『呼伦贝尔小众定制体验』",
		"value":"¥4599",
		"src":"http://img.chufaba.me/4e9a55357ed4ed20d5e382927379ccb3.jpg",
        
	},
	{   
		"name":"高野山四天三晚避世体验",
		"value":"¥3500",
		"src":"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg",
        
	},
	{   
		"name":"美西黄石自驾游定制",
		"value":"¥3500",
		"src":"http://img.chufaba.me/c3a2e419422948a3f3fd03162d3bc807.jpg",
        
	},
	{   
		"name":"高野山四天三晚避世体验",
		"value":"¥3500",
		"src":"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg",
        
	},
	{   
		"name":"新西兰南岛自驾12天11晚定制体验",
		"value":"¥8360",
		"src":"http://img.chufaba.me/572c571d9b1622b789ccda17202d9a4d.jpg",
        
	},
	{   
		"name":"高野山四天三晚避世体验",
		"value":"¥3500",
		"src":"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg",
        
	}]
};
// console.log(arr.hot);
for(var i = 0;i<arr.hot.length;i++){
	var lis = $('<li style="width: 25%;"><div id="black"><img style="width: 50%;margin-top: 100px;margin-left: 80px;" src="images/9D82A3000F19ED32376D2AED51CC0AD9.jpg"><p style="margin-top: 20px;font-size: 20px;color: #fff;text-align: center;">扫码手机上体验更佳</p></div><img style="width:100%" src="'+arr.hot[i].src+'"><p style ="margin-top:-80px;font-size:20px;color:#fff;">'+arr.hot[i].name+'</p><p style="font-size:20px;color:#fff">'+arr.hot[i].value+'</p></li>');
    console.log(lis.get(0));
    $('#hot ul p').css('overflow','hidden').css('width','100%').css("white-space","nowrap").css("text-overflow","ellipsis");
    $('#hot ul').append(lis);
    $('#hot ul li').css({
    	"width":"295px",
    	'height':'474px',
    })
}
var index = 0;
var Left = 0;

var luntimer =null;
fn();

 function fn(){
 
 	luntimer = setInterval(function(){
 	$('#btn div').css('background','#ccc');
    $('#btn div').eq(index).css('background','#000');
    $('#hot').scrollLeft(Left); 
    index++;
    Left=1180*index;
    if(Left>=3540){
    	Left = 0;
    	index=0;
    }
    // $('#hot ul').get(0).scrollLeft = Left +"px";
},3000);

 }
$('#btn div').hover(function() {
	 clearInterval(luntimer); 
	index = $(this).index();
	$('#btn div').css('background','#ccc');
    $('#btn div').eq(index).css('background','#000');
      $('#hot').scrollLeft(index*1180);
  
});

$('#hot ul li').hover(function(){
	$(this).children("#black").show()
	clearInterval(luntimer);

},function(){
	$(this).children("#black").hide();
	clearInterval(luntimer);
	fn();
	
});
var zaiTimer = null;
$('.change').click(function(){
	$('.zai').css('background','#ccc')
	clearInterval(zaiTimer);
	$('.nav').css('display','block');
	$('.route1').css('display','none');
	var index = 0;
	zaiTimer = setInterval(function(){
		
		$('.zai').eq(index).css('background','red')
		if(index>=4){
			$('.nav').css('display','none');
	        $('.route1').css('display','block');
		}
		index++;
	},500)
})
$('#bwdz').click(function(){
	location.href = "help.html"
});
$('#zzdz').click(function(){
	location.href = "help1.html"
})


	})
	
	
	
});
