require(["jquery"],function(e){e(function(){function c(){f=setInterval(function(){e("#btn div").css("background","#ccc"),e("#btn div").eq(n).css("background","#000"),e("#hot").scrollLeft(l),(l=1180*++n)>=3540&&(l=0,n=0)},3e3)}for(var a={hot:[{name:"高野山四天三晚避世体验",value:"¥3500",src:"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg"},{name:"麻烦跟我去厦门疯一回『厦门3天2夜放浪体验』",value:"¥3500",src:"http://img.chufaba.me/c98635fa52925ca8bef2a9d80240433c.jpg"},{name:"高野山四天三晚避世体验",value:"¥3500",src:"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg"},{name:"巴厘岛6天5晚度假体验",value:"¥3760",src:"http://img.chufaba.me/f7f8736774e8fa9c5f57f1206d1d9a15.jpg"},{name:"微笑之下的迷之乐园『斯里兰卡8天7晚迷之体验』",value:"¥5360",src:"http://img.chufaba.me/704a4f13bc197f04541af76e99a208da.jpg"},{name:"美西1号公路自驾游定制",value:"¥7599",src:"http://img.chufaba.me/afdc171217b081835e47aafeccea44dc.jpg"},{name:"策马飞奔向草原『呼伦贝尔小众定制体验』",value:"¥4599",src:"http://img.chufaba.me/4e9a55357ed4ed20d5e382927379ccb3.jpg"},{name:"高野山四天三晚避世体验",value:"¥3500",src:"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg"},{name:"美西黄石自驾游定制",value:"¥3500",src:"http://img.chufaba.me/c3a2e419422948a3f3fd03162d3bc807.jpg"},{name:"高野山四天三晚避世体验",value:"¥3500",src:"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg"},{name:"新西兰南岛自驾12天11晚定制体验",value:"¥8360",src:"http://img.chufaba.me/572c571d9b1622b789ccda17202d9a4d.jpg"},{name:"高野山四天三晚避世体验",value:"¥3500",src:"http://img.chufaba.me/64b778c1777a07f8e4c125ebc3c429b7.jpg"}]},t=0;t<a.hot.length;t++){var i=e('<li style="width: 25%;"><div id="black"><img style="width: 50%;margin-top: 100px;margin-left: 80px;" src="images/9D82A3000F19ED32376D2AED51CC0AD9.jpg"><p style="margin-top: 20px;font-size: 20px;color: #fff;text-align: center;">扫码手机上体验更佳</p></div><img style="width:100%" src="'+a.hot[t].src+'"><p style ="margin-top:-80px;font-size:20px;color:#fff;">'+a.hot[t].name+'</p><p style="font-size:20px;color:#fff">'+a.hot[t].value+"</p></li>");console.log(i.get(0)),e("#hot ul p").css("overflow","hidden").css("width","100%").css("white-space","nowrap").css("text-overflow","ellipsis"),e("#hot ul").append(i),e("#hot ul li").css({width:"295px",height:"474px"})}var n=0,l=0,f=null;c(),e("#btn div").hover(function(){clearInterval(f),n=e(this).index(),e("#btn div").css("background","#ccc"),e("#btn div").eq(n).css("background","#000"),e("#hot").scrollLeft(1180*n)}),e("#hot ul li").hover(function(){e(this).children("#black").show(),clearInterval(f)},function(){e(this).children("#black").hide(),clearInterval(f),c()})})});