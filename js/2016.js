var like = document.getElementsByClassName('like')[0];
var xie = document.getElementsByClassName('xie')[0];

var share = document.getElementsByClassName('share')[0];
var huan = document.getElementsByClassName('huan')[0];

like.addEventListener('click',function(){
    xie.src="./image/xinRedh.png"
});

share.addEventListener('click',function(){
    huan.src="./image/shareh_yj1.png" 
});