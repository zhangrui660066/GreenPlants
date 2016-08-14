var banner = document.getElementById("contact-header");
var bannerImg = banner.getElementsByTagName("img")[0];

function lazyImg() {
    var trueImg = bannerImg.getAttribute("zImg");

    var oImg = new Image;
    oImg.src = trueImg;

    oImg.onload = function () {
        bannerImg.src = trueImg;
        bannerImg.style.display = "block";
        oImg = null;
    }
}


window.setTimeout(lazyImg, 1000);
