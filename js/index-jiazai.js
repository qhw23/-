var but=document.getElementById('but')
var img=document.getElementById('text-img')
but.onclick=function(){
    img.src='./img-icon/loading-icon.gif'
    but.innerHTML='正在加载中'
}