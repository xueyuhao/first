"use strict"
  // 配置banner页面数据
  var pages=new Vue({
    el:'#page',
    data:{
      Content:[
          {Title:"微商城",Descript:"强大的微商城，完整的移动电商解决方案<br>面向线下实体门店和线上传统电商",Support:"",Btn:["免费试用","了解详情","0"]},
          {Title:"微小店",Descript:"免费的手机开店工具<br>简单好用，满足日常经营需求",Support:"全面支持 iPhone 和 Android 主流机型",
            Btn:["免费下载","了解详情","1",{class:"weixin_img"},"微信扫码下载",{imgone:"img/wxd_code1130.png"},""]},
          {Title:"有赞收银",Descript:"一站式收银解决方案<br>零成本接入微信支付、支付宝、刷卡",Support:"全面支持 iPhone 和 Android",
            Btn:["立即下载","了解详情","2",{class:"weixin_img collect_money"},"微信扫码下载",{imgone:"img/mobile_code_new_20161004@2x.png",imgtwo:"img/ipad_code_2X.png"},["手机版","iPad版"]]},
          {Title:"有赞批发",Descript:"传统批发+互联网解决方案<br>服务于：批发市场+批发档口+进货商",Support:"",Btn:["了解详情","","0"]},
          {Title:"有赞小程序",Descript:"一键生成，快速拥有<br>帮商家快速对接微信小程序<br>无需单独开发",Support:"",
            Btn:["立即使用","了解详情","1",{class:"weixin_img"},"微信扫码下载",{imgone:"img/ipad_code_2X.png"}]},
          {Title:"开放平台",Descript:"与第三方合作，全力推进线上线下互通<br>对接软件、硬件、插件、App开发者等<br>合作伙伴",Support:"",Btn:["了解详情","","0"]},
          {Title:"商家社区",Descript:"有赞商家在线交流社区<br>官方咨询、产品动态、营销玩法、<br>明星店铺、新手教程",Support:"",Btn:["了解详情","","0"]},
          {Title:"服务支持",Descript:"专属服务经理对接商家<br>商家还可通过学堂、商盟、沙龙、<br>提升运营能力",Support:"",Btn:["了解详情","","0"]}
      ]
    }
  });
  // 配置nav页面数据
  var navs=new Vue({
    el:'#nav',
    data:{
      Content:[
          {Title:"首页",aclass:"active"},
          {Title:"产品中心",class:"nav_sub",aclass:"nav_product",list:["微商城基出版","微商城商业版","微小店","有赞收银","有赞批发","有赞小程序","买家版"],i:"1"},
          {Title:"行业方案"},
          {Title:"开放平台"},
          {Title:"商家社区"},
          {Title:"服务支持"},
          {Title:"消费保障"},
          {Title:"登录",class:"last",aclass:"nav_login"},
          {Title:"注册",class:"last",aclass:"nav_register"},
      ]
    }
  });
  // 配置banner_bar页面数据
  var bars=new Vue({
    el:'#change_active',
    data:{
      Content:[
          {Title:"微商城"},
          {Title:"微小店"},
          {Title:"有赞收银"},
          {Title:"有赞批发"},
          {Title:"有赞小程序"},
          {Title:"开放平台"},
          {Title:"商家社区"},
          {Title:"服务支持"}
      ]
    }
  });
  // 配置banner_bar页面数据
  var solves=new Vue({
    el:'#solve',
    data:{
      Content:[
          {Title:"多门店解决方案",Descript:"面向实体零售，完整的多门店线上经营方案 <br>全渠道信息化管理工具"},
          {Title:"票务解决方案",Descript:"在线售票，到场核销，提升售验票效率 <br>触达用户，精准营销，助力营收增长"},
          {Title:"媒体服务解决方案",Descript:"面向媒体行业提供粉丝互动、渠道选货、在 <br>线营销、仓储物流等全方位的运营支持"},
          {Title:"App开店解决方案",Descript:"用SDK把有赞微商城接入到App里 <br>用App大师快速制作出App"}
      ]
    }
  });
  // 配置页面数据
  var bodyss=new Vue({
    el:'#bodys',
    data:{
      serveContent:[
        {Title:"服务市场"},
        {Title:"有赞会员"},
        {Title:"商家社区"},
        {Title:"有赞学堂"},
        {Title:"有赞商盟"},
        {Title:"开放平台"},
        {Title:"SDK"},
        {Title:"消费保障"}
      ],
      dynamicContent:[
        {Content:"搜狐｜有赞携智能收银硬件亮相微信支付合作伙伴大会"},
        {Content:"联商｜有赞携手21CN聚投诉 合力维护消费者权益"},
        {Content:"红商｜ 中国扶贫基金会携手有赞，探索“互联网＋扶贫”"},
        {Content:"联商｜企业服务风口已来，有赞亿元巨资扶植代理商"},
        {Content:"网易｜文怡、醉鹅娘有赞开店,抢滩内容电商热潮"},
        {Content:"新华网｜沪花拾者携手有赞 帮千家花店老板网上开店"},
        {Content:"中国网｜有赞推千万粉丝大号，助力商家做成交"}
      ],
      footServeContent:[
        {Content:["微商城","有赞收银","有赞批发","服务市场"]},
        {Content:["供货商","微小店","全员开店","开放平台"]},
        {Content:["行业方案","买家版","消费保障","公益开店"]}
      ]
    }
  });

//实现页面图片切换功能
  //声明变量
  var isSwitched=0,
      ban_info=document.getElementsByClassName("ban_info"),
      banners=document.getElementById("banners"),
      solve=document.getElementById("solve"),
      page=document.getElementById("page"),
      n=0;
  //绑定鼠标事件
  change_active.onmousemove=change_active.touch=change_active.onclick=mouseEvent;

  //鼠标进入事件方法
  function mouseEvent(e){
    if (isSwitched==0){
      //是否在切换状态 -->
      var interval=null;
      //清除定时器0.1秒监测一次 监测防止动画叠加-->
      isSwitched=1; 
      interval=setTimeout(function(){isSwitched=0;},200);
      var target=e.target,tar_class=target.className;
      if (target.nodeName=="LI"&&tar_class.indexOf("active")==-1){
          // 元素判断
          var target_childs=target.parentNode.children,length=target_childs.length;
          // 隐藏元素
          ban_info[n].style.display="none";
          ban_info[n].style.opacity="0";
          // 去除存在的active calss -->
          for (var i=0;i<length;i++){
            (target_childs[i].className!="")&&(target_childs[i].className="");
            (target_childs[i]==target)&&(n=i);
          }
          // 显示元素
          target.className="active";
          ban_info[n].style.display="block";
          ban_info[n].style.opacity="1";
      }
    }else{
      return;
    }
  }
  //鼠标进入事件方法结束

