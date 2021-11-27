window.addEventListener('load',function(){
    var ajax=new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

    ajax.open('get','http://192.168.31.5:3000/play/new',true);

    ajax.send();

    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status==200){
                var res=JSON.parse(ajax.responseText);
                 console.log(res);
                 show(res);
            }
        }
    }
    function show(v){
        var str=``;
        for (var i of v){
            for(var j of i){
                str+=`
                    <li>
                        <a href="#">
                            <img src="${j.img}">
                        </a>
                            <p>"${j.text}"</p>
                            <h3>${j.price}</h3>
                        <div class="righ-icon">
                            <span class="xin">${j.like}</span>
                            <span class="look">${j.words}</span>
                        </div>
                `;
            }

        }

        document.getElementById('myDiv').innerHTML=str;

    }

})
