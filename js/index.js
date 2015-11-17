    function ran(n,m){
                return parseInt(n+Math.random()*(m-n));
         };
        window.onload=function(){
            var oTotalBox=document.getElementById("totalBox");
             var oPage=document.getElementById("page");
             var oPage1=document.getElementById("page1");
             var oScrollPage=document.getElementById("scrollPage");
             //门的样式
            
            var oSpan=document.getElementsByClassName("door")[0].   
                        getElementsByTagName("span")[0];
            var oDoor1=document.getElementById("door1");
            var oDoor2=document.getElementById("door2");
            var oDoor=document.getElementsByClassName("door")[0];
             var speed=0;
            var i=0;
            var iNow=0;
            oSpan.onclick=function(){
                oDoor1.style.transform="perspective(800px) rotateY(90deg)";
                oDoor2.style.transform="perspective(800px) rotateY(-90deg)";
                this.style.display="none";
                setTimeout(function(){
                    oIndexUi.style.zIndex=5;
                    oNav.style.zIndex=5;
                    oDoor.style.display="none";
                    //开星星定时器
                    showTotal();
                    createIntorationA();
                },800)
            };
        //创键星星
         var oStar=document.getElementsByClassName("star")[0];
         // var bScroll=false有问题需要解决的
         function showTotal(){
              if(iNow==0){
                   star1=setInterval(showStar, 200);
                   star2=setInterval(showMetorA, 1500);
                   star3=setInterval(showMetorB, 3000);
               }else{
                  clearInterval(star1);
                   clearInterval(star2);
                    clearInterval(star3)
               }
         }
        function showStar(){
            var oStarMore=document.createElement("span");
            oStarMore.className="star"+ran(1,5);
            oPage1.appendChild(oStarMore);
            oStarMore.style.left=ran(0,oPage1.offsetWidth-oStarMore.offsetWidth)+'px';
            oStarMore.style.top=ran(0,oPage1.offsetHeight-oStarMore.offsetHeight)+'px';
            move(oStarMore,{opacity:1},{duration:1000,complete:function(){
                    setTimeout(function(){
                        move(oStarMore,{opacity:0},{complete:function(){
                                oPage1.removeChild(oStarMore);
                        }})
                    },500)
            }})
        };
        //创建流星
        function showMetorA(){
            var oMetor=document.createElement("span");
            oMetor.className="meteor2";
            oPage1.appendChild(oMetor);
            oMetor.style.left=ran(0,oPage1.offsetWidth-oMetor.offsetWidth)+'px';
            oMetor.style.top=ran(0,oPage1.offsetHeight-oMetor.offsetHeight)+'px';
            move(oMetor,{opacity:1},{duration:200,easing:Tween.Linear,complete:function(){
                    oPage1.removeChild(oMetor);
            }})
        };
        function showMetorB(){
            var oMetor=document.createElement("span");
            oMetor.className="meteor2";
            oTotalBox.appendChild(oMetor);
            oMetor.style.left=ran(0,oTotalBox.offsetWidth-oMetor.offsetWidth)+'px';
            oMetor.style.top=ran(0,oTotalBox.offsetHeight-oMetor.offsetHeight)+'px';
            move(oMetor,{opacity:1},{duration:200,easing:Tween.Linear,complete:function(){
                    oTotalBox.removeChild(oMetor);
            }})
        };
            ///////////// 第一页
         
        var oIntoration=document.getElementById("intorduction")
        var iNum=0;
        var str="  欢迎来到我的个人网站，这里仅展示我的部分水平及作品。由于时间有限，未能兼容全部浏览器，请用Chrome等高级浏览器打开。若您觉得我符合您公司的要求，请与我联系吧！";
         for (var i = 0; i < str.length; i++) {
            var oSpan=document.createElement("span");
            oIntoration.appendChild(oSpan);
             oSpan.innerHTML=str.charAt(i);
         };
         function createIntorationA(){
            var createIntoration=setInterval(function(){
                move(oIntoration.children[iNum],{opacity:1},{complete:function(){
                    if(iNum==oIntoration.children.length){
                         clearInterval(createIntoration);
                    }
                }})
                iNum++;
            }, 80)
        };
      /*
      首页几个链接
       */ 
        function move2(obj,iTarget){
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                speed+=(iTarget-obj.offsetLeft)/5;
                speed*=0.7;
               // left+=speed;
                obj.style.left=Math.round(speed)+obj.offsetLeft+'px';
                if(obj.offsetLeft==iTarget&&Math.abs(speed)<1){
                    clearInterval(obj.timer);
                }
            }, 30)
        };
       var oIndexUi=document.getElementById("ul1");
       var aIndexUiLi=oIndexUi.children;
       var oIndexDamo=aIndexUiLi[aIndexUiLi.length-1];
       var left=0;
       for (var i = 0; i < aIndexUiLi.length-1; i++) {
            aIndexUiLi[i].index=i;
            aIndexUiLi[i].onmouseover=function(){
                iNow=this.index;
                left=this.offsetLeft;
                liandong1(left);
                liandong2(iNow);
                showTotal();
            }
       }
        //联动首页的链接
        function liandong1(b){
            move2(oIndexDamo,b)
            tabSwitch(iNow)
        };
        //联动右侧的导航
        function liandong2(b){
            var aI=oNav.getElementsByTagName("i");
                for (var i = 0; i < aI.length; i++) {
                   oNav.removeChild(aI[i]);
                };
                var oI=document.createElement("i");
                oI.style.top=b*20+"px";
                oI.innerHTML=arr[iNow];
                oNav.appendChild(oI);
                for (var i = 0; i < aNavList.length; i++) {
                    aNavList[i].style.backgroundPositionY=0;
                };
                aNavList[b].style.backgroundPositionY="-15px";
                liandong1(b*aIndexUiLi[0].offsetWidth);
                
        };
      /*
        右侧导航条
       */
      var oNav=document.getElementById("nav");
      var aNavList=oNav.children;
      var arr=["首页","个人作品","小游戏","联系我吧"];
      for (var i = 0; i < aNavList.length; i++) {
        (function(index){
            aNavList[i].onmouseover=function(){
                iNow=index;
                liandong2(iNow);
                showTotal();
            };
            aNavList[i].onmouseout=function(){
                var aI=oNav.getElementsByTagName("i");
                for (var i = 0; i < aI.length; i++) {
                   aI[i].innerHTML=""
                };
                liandong2(iNow);
            };
        })(i)
       };

      //滚轮滚动
      addMouseWheel(oScrollPage,function(down){
            if(down){
                iNow++;
               if(iNow==4){
                    iNow=3;
               }
            }else{
                iNow--;
                if(iNow==-1){
                    iNow=0;
                }
            }
            tabSwitch(iNow);
            b=iNow*aIndexUiLi[0].offsetWidth;
            liandong1(b);
            liandong2(iNow);
            showTotal();
      });
     //封装tabSwitch
      function tabSwitch(index){
            move(oPage,{top:-index*oPage.children[0].offsetHeight});
      };
////////////////////////////第二页开始//////////////
      var oUl2=document.getElementById("ul2");
      var oUl2Li=oUl2.children;
      var aAnchor=document.getElementsByTagName("a");
      var oBtn=document.getElementById("btn");
      var oBtnSpan=oBtn.children;
        //选项卡切换
      for (var i = 0; i < oBtnSpan.length; i++) {
          oBtnSpan[i].index=i;
           oBtnSpan[i].onmouseover=function(){
              for (var i = 0; i < oBtnSpan.length; i++) {
                  oBtnSpan[i].className="";
                  oUl2Li[i].className="";
              };
              this.className="active";
              oUl2Li[this.index].className="cur";
          };
      };
      function getPos(obj){
          var l=0;
          var t=0;
          while(obj){
              l+=obj.offsetLeft;
              t+=obj.offsetTop;
              obj=obj.offsetParent;
          }
          return {left:l,top:t}
      };
      function getDir(obj,oEvent){
          var x=oEvent.clientX-getPos(obj).left-obj.offsetWidth/2;
          var y=getPos(obj).top+obj.offsetHeight/2-oEvent.clientY;
          return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
      };

      for (var i = 0; i < aAnchor.length; i++) {
              lagou(aAnchor[i])
      };
      function lagou(obj){
        obj.onmouseover=function(ev){
            var oEvent=ev||event;
            var oI=this.children[1];
            var oFrom=oEvent.fromElement||oEvent.relatedTarget;
            if(oFrom&&obj.contains(oFrom))return;
            var n=getDir(obj,oEvent);
            switch(n){
                case 0:
                    oI.style.left="-230px";
                    oI.style.top=0;
                    break;
                case 1:
                    oI.style.left=0;
                    oI.style.top="150px";
                    break;
                case 2:
                    oI.style.left="230px";
                    oI.style.top=0;
                    break;
                case 3:
                    oI.style.left=0;
                    oI.style.top="-150px";
                    break;
            }
            move(oI,{left:0,top:0},{easing:Tween.Linear})
        };
        obj.onmouseout=function(ev){
            var oEvent=ev||event;
            var oI=this.children[1];
            var oTo=oEvent.toElement||oEvent.relatedTarget;
            if(oTo&&obj.contains(oTo))return;
            var n=getDir(obj,oEvent);
            switch(n){
                case 0:
                    move(oI,{left:-230,top:0},{easing:Tween.Linear})
                    break;
                case 1:
                    move(oI,{left:0,top:150},{easing:Tween.Linear})
                    break;
                case 2:
                    move(oI,{left:230,top:0},{easing:Tween.Linear})
                    break;
                case 3:
                    move(oI,{left:0,top:-150},{easing:Tween.Linear})
                    break;      
                 }
           };
        }



















































    }    
