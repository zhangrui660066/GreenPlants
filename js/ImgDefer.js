~function(){
    function img_defer(imgList) {

        var  $cup=$("."+imgList);
        var $imgList=$cup.find("img");
        var $divList = $cup.children("div").children("div");

        window.setTimeout(lazyImg, 500);
        function lazyImg() {
            $imgList.each(function (index, item) {
                var _this = this;
                var oImg = new Image;
                oImg.src = $(this).attr("zImg");
                oImg.onload = function () {
                    $(_this).prop("src", this.src).css("display", "block");
                }
            });
            $divList.eq(0).css("zIndex", 1).animate({opacity: 1}, 300);

        }

    }
    jQuery.fn.extend({
        ImgDefer:img_defer
    });

}();
