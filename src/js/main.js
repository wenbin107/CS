require(['jquery'],function($){
	// alert(1);
	$.ajax({
            url: 'json/hot.json',
            type: 'get',
            dataType: 'json',
            data: {
                name: 'lishijie'
            },
            success:function(data){
                console.log(data);
            }
        });
	
	
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
