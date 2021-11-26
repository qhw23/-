window.addEventListener('load',function(){
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

    ajax_.open('get','http://192.168.31.5:3000/useing/public',true);

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

            for(var j of val){
                console.log(j);
                str += `
                <li>
                        <a href="">
                            <span class="sf">`
                var sf = (typeof j.sf == 'undefined')?'首发':j.info_ty;
                            str+=`${sf}</span>
                            <img src="${j.img}" alt="" width="220px" height="130px">
                            <p class="name">${j.text}</p>
                            <p class="tabs">
                                <span>`
                               var totalnum = (typeof j.totalnum == 'undefined')?'2032':j.totalnum;
                                str+=`${totalnum}</span>
                                <span>`
                                var num = (typeof j.num == 'undefined')?'20':j.num;
                                str+=`${num}台</span>
                            </p>
                            <p class="sq">
                                <span>`
                            var apply = (typeof j.apply == 'undefined')?'1303':j.apply;
                                str+=`${apply}</span>
                                申请
                            </p>
                            <p class="baogao">
                                报告数量：8
                            </p>
                        </a>
                    </li>
                `;
            }
        var ul = document.getElementsByClassName('list')[0];
        ul.innerHTML = str;

        // for(var i of val){
        //     str += '<li>';
        //     str += '<img src="'+i.img+'" alt="">';
        //     str += '<p>'+i.text+'</P>';
        //     str += '<div>'+i.note+'</div>';
        //     str += '</li>';
        // }
        // var ul = document.getElementsByClassName('list')[0];
        // ul.innerHTML = str;
    }

});