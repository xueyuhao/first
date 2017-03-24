//实现页面图片切换功能
  var colors=["#ea3838","#1089c7","#ff8f04","#ffbe00","#19c971","#1069cf","#ff1548","#471f7a"],
      // isSwitched=0,
      ban_info=document.getElementsByClassName("ban_info"),
      ban_a=document.getElementsByClassName("ban_a")
      change_active=document.getElementById("change_active"),
      banners==document.getElementById("banners"),
      n=0,
      ban_info_content=[
        `<p class="ban_title">微商城</p>
              <p class="ban_descript">
                  强大的微商城，完整的移动电商解决方案
                <br>
                  面向线下实体门店和线上传统电商 
                <br>
                <br> 
                <br> 
                <br> 
                <br>  
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">免费试用</a>
                <a href="" class="ban_to_detail">了解详情</a>
              </div>`,
        `<p class="ban_title">微小店</p>
              <p class="ban_descript">
                  免费的手机开店工具
                <br>
                  简单好用，满足日常经营需求 
                <br>
                <br> 
                <br> 
                <br> 
                <br>
                  <span>全面支持iPhone和Android主流机型</span>
                </p>
              <div class="ban_a">

                <a href="" class="ban_test" id="ban_test">免费下载
                  <span class="weixin_img">
                    <span>微信扫码下载</span>
                    <img src="img/wxd_code1130.png">
                    <i></i>
                  </span>
                </a>
                <a href="" class="ban_to_detail">了解详情</a>
              </div>`,
              `<p class="ban_title">有赞收银</p>
              <p class="ban_descript">
                  一站式收银解决方案
                <br>
                  零成本接入微信支付、支付宝、刷卡 
                <br>
                <br> 
                <br> 
                <br> 
                <br>  
                  <span>全面支持iPhone和Android</span> 
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">立即下载
                  <span class="weixin_img collect_money">
                    <span>微信扫码下载</span>
                    <img src="img/mobile_code_new_20161004@2x.png">
                    <img src="img/ipad_code_2X.png">
                    <b>手机版</b><b>iPad版</b>
                    <i></i>
                  </span>
                </a>
                <a href="" class="ban_to_detail">了解详情</a>
              </div>`,
              `<p class="ban_title">有赞批发</p>
              <p class="ban_descript">
                  传统批发+互联网解决方案
                <br>
                  服务于：批发市场+批发档口+进货商 
                <br>
                <br> 
                <br> 
                <br> 
                <br>
                  <span></span> 
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">了解详情</a>
              </div>`,
              `<p class="ban_title">有赞小程序</p>
              <p class="ban_descript">
                  一键生成，快速拥有
                <br>
                  帮商家快速对接微信小程序 
                <br>
                无需单独开发
                <br> 
                <br> 
                <br> 
                <br>  
                  <span></span>
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">立即使用</a>
                <a href="" class="ban_to_detail">了解详情</a>
              </div`,
              `<p class="ban_title">开放平台</p>
              <p class="ban_descript">
                  与第三方合作，全力推进线上线下互通
                <br>
                  对接软件、硬件、插件、App开发者等 
                <br>
                  合作伙伴
                <br> 
                <br> 
                <br> 
                <br>
                <span></span>
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">了解详情</a>
              </div>`,
              `<p class="ban_title">微商城</p>
              <p class="ban_descript">
                  强大的微商城，完整的移动电商解决方案
                <br>
                  面向线下实体门店和线上传统电商 
                <br>
                
                <br> 
                <br> 
                <br> 
                <br>  
                  <span>上传统电商</span>
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">免费试用</a>
                <a href="" class="ban_to_detail">了解详情</a>
              </div>`,
              `<p class="ban_title">商家社区</p>
              <p class="ban_descript">
                  有赞商家在线交流社区
                <br>
                  官方咨询、产品动态、营销玩法、 
                <br>
                  明星店铺、新手教程
                <br> 
                <br> 
                <br> 
                <br>  
                  <span></span>
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">了解详情</a>
              </div>`,
              `<p class="ban_title">服务支持</p>
              <p class="ban_descript">
                  专属服务经理对接商家
                <br>
                  商家还可通过学堂、商盟、沙龙、 
                <br>
                  提升运营能力
                <br> 
                <br> 
                <br> 
                <br>  
                  <span></span>
                </p>
              <div class="ban_a">
                <a href="" class="ban_test" id="ban_test">了解详情</a>
      </div>`];
      for (var i=0;i<ban_a.length;i++){
        //console.dir(ban_a[0].children[0]);
        ban_a[i].children[0].style.color=colors[i];
        ban_a[i].children[1].innerHTML==""&&(ban_a[i].children[1].style.display="none");
        ban_info[i].children[0].style.backgroundImage = "url(./img/index_banner_"+(i+1)+"@2x.jpg)";

      }
      change_active.onmousemove=change_active.touch=change_active.onclick=function(e){
      // if (isSwitched==0){
      // //是否在切换状态 -->
      //   var interval=null;
      //   //清除定时器0.1秒监测一次 监测防止动画叠加-->
      //   isSwitched=1; 
      //   interval=setTimeout(function(){isSwitched=0;},100);
        var target=e.target,tar_class=target.className;
        if (target.nodeName=="LI"&&tar_class.indexOf("active")==-1){
        //元素判断
            var target_childs=target.parentNode.children,length=target_childs.length;
            //console.dir(ban_info);
            ban_info[n].style.display="none";
            ban_info[n].style.opacity="0";
            //去除存在的active。calss -->
            for (var i=0;i<length;i++){
              (target_childs[i].className!="")&&(target_childs[i].className="");
              (target_childs[i]==target)&&(n=i);
            }
            <!-- 修改背景样式等属性 -->
            target.className="active";
            ban_info[n].style.backgroundColor = colors[n];
            banners.style.backgroundColor = colors[n];
            ban_info[n].style.display="block";
            ban_info[n].style.opacity="1";
        }
      // }else{
      //   return;
      // }
    }
