"use strict"
  //实现页面图片切换功能
  var colors=["#ea3838","#1089c7","#ff8f04","#ffbe00","#19c971","#1069cf","#ff1548","#471f7a"],
      ban_info=document.getElementsByClassName("ban_info"),
      ban_a=document.getElementsByClassName("ban_a"),
      banners=document.getElementById("banners"),
      n=0,
      len=ban_a.length;
      for (var i=0;i<len;i++){
        //console.dir(ban_a[0].children[0]);
        ban_a[i].children[0].style.color=colors[i];
        ban_a[i].children[1].innerHTML==""&&(ban_a[i].children[1].style.display="none");
      }
      change_active.onmousemove=change_active.touch=change_active.onclick=function(e){
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
            banners.style.backgroundColor = ban_info[n].style.backgroundColor = colors[n];
            ban_info[n].style.display="block";
            ban_info[n].style.opacity="1";
        }
    }