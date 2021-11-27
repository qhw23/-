function yuandan(){
    //获取当前时间
    var now_time=new Date();
    //创建指定到达时间
    var time =new Date(2022,0,1);
    //获取时间差
    var go_time=time-now_time;
    //利用math方法进行时间转换
    var day=Math.floor(go_time/1000/60/60/24);
    var h=Math.floor(go_time/1000/60/60%24);
    var m=Math.floor(go_time/1000/60%60);
    var s=Math.floor(go_time/1000%60);

    document.getElementById('focus-times').innerHTML='倒计时'+day+'天'+h+'时'+m+'分'+s+'秒';
}
//计时器 没一秒执行一次
setInterval(yuandan,1000);