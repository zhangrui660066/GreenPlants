

/*回到顶部*/
   var back_btn=document.getElementById("back_top");
   window.onscroll=computedDisplay;
   function computedDisplay()
  {
      var curTop=document.documentElement.scrollTop||document.body.scrollTop;
      var curHeight=document.documentElement.clientHeight||document.body.clientHeight;/*一屏的高度*/
      back_btn.style.display=curTop>curHeight?"block":"none";

  }
back_btn.onclick=function(){
        this.style.display="none";
        window.onscroll=null;
        var  duration=500,interval=10,target=document.documentElement.scrollTop||document.body.scrollTop;
        var step=(target/duration)*interval;
    var timer=window.setInterval(function(){
         var curTop=document.documentElement.scrollTop||document.body.scrollTop;
         if(curTop===0)
         {
             window.clearInterval(timer);
             window.onscroll=computedDisplay;
             return;
         }
         curTop-=step;
        document.documentElement.scrollTop=curTop;  //滚动条滚动的高度
        document.body.scrollTop=curTop;
    },interval)

};

/*鱼缸租赁*/
 $(function(){
    $(".fish-context").on("mouseover",function(){
        $("#check_fish").addClass("check_fish");
    });
    $(".fish-context").on("mouseout",function(){
        $("#check_fish").removeClass("check_fish");
    });
})
