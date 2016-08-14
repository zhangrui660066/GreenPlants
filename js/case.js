~function(){

    $(function(){
         //旋转木马
        var timer=null;
        var slide=$(".slide");
        var lis=slide.find("li");
        /*左右按钮的显示隐藏*/
        slide.hover(function(){

            $(this).children(".arrow").stop().fadeIn();
            window.clearInterval(timer);
        }, function(){
            window.clearInterval(timer);
            timer=window.setInterval(function(){
                move(true);
            },1000);

            $(this).children(".arrow").stop().fadeOut();
        });
        /*核心语句块*/
        json=[
            {
                width:553,
                top:20,
                left:50,
                opacity:0.2,
                // filter:alpha(opacity=20),
                z:2
            },
            {
                width:652,
                top:70,
                left:0,
                opacity:0.8,
                //filter:alpha(opacity=80),
                z:3
            },
            {
                width:764,
                top:0,
                left:93,
                opacity:1,
                //filter:alpha(opacity=10),
                z:4
            },
            {
                width:652,
                top:70,
                left:298,
                opacity:0.8,
                //filter:alpha(opacity=80),
                z:3

            },
            {
                width:553,
                top:20,
                right:0,
                opacity:0.2,
                //filter:alpha(opacity=20),
                z:2

            },
        ];
        move();
        /*按钮的点击*/


        var $prev= jQuery(".prev");

        var $next=jQuery(".next");
        var flag=true;
        $prev.on("click",function(){
            if(flag===true)
            {
                move(false);
                flag=false;
            }


        });
        $next.on("click",function(){
            if(flag)
            {
                move(true);
                flag=false;
            }

        });
        function move(obj)
        {
            if(obj!=undefined){
                if(obj)
                {
                    //把最后的一个json放到第一个
                    json.unshift(json.pop());
                }else
                {
                    json.push(json.shift());
                }
                $.each(json,function(index,item){
                    lis.eq(index).css("zIndex",json[index].z).stop().animate(json[index],1000,function(){
                        flag=true;
                    });

                })
            }

        }
        /*自动播放*/
        timer=window.setInterval(function(){
            move(true);
        },2000);

       /*选项卡*/
       var  $divlist= $("#case_list>div");
      $("#case_list li").on("click",function(){
       $(this).addClass("bg").siblings().removeClass("bg");
          var index= $(this).index();
          var $item=$divlist.eq(index);
          console.log($item.html());
          $item.addClass("divshow").siblings('div').removeClass("divshow");
      });
        //层的显示
        $(".box>li").hover(function(){

            $(this).children(".mark").stop().fadeIn();//.css("display","block").animate(3000);


        },function(){

            $(this).children(".mark").stop().fadeOut();//.css("display","none").animate(3000);
        });

    })

}();
