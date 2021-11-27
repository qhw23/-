window.onload=()=>{
    $.ajax({
        type:'get',
        url:'http://192.168.31.5:3000/guid/hot',
        success:function (data) {
            console.log(data);
            show(data)
        }
    })
}
function show(data) {
    let all= document.querySelector(".all");
for ( var i of data){
    console.log(i.img);
}
    all.innerHTML+=`
            <li>
                <img src="${data[0].img}" alt="">
                <span>${data[0].text}</span>
            </li>
    `
}