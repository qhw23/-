window.addEventListener('load',function(){
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

    ajax_.open('get','http://192.168.31.5:3000/guid/hot',true);

    ajax_.send();

    ajax_.onreadystatechange = function(){
        if(ajax_.readyState == 4){
            if(ajax_.status == 200){
                var data = JSON.parse(ajax_.responseText);
                showData(data);
            }
        }
    }


    function showData(val){
        var str = ``;

            for(var i of val){
                console.log(i);
                str += `
                <li>
                    <a href="./2016钢笔装逼.html">
                        <img src="${i.img}"" width="220" height="130">
                        <div class="describe">
                            <p>${i.text}</p>
                            <p class="xiaozi">
                                <img src="./img-icon/xin.png" alt="">${i.like}
                                <span><img src="./img-icon/zan.png" alt="">3</span>
                            </p>
                        </div>
                    </a>
                    <img src="./img-icon/listbg.jpg" alt="">
                </li>
                `;
            }
        var ul = document.getElementsByClassName('xiaou')[0];
        ul.innerHTML = str;

    }

});