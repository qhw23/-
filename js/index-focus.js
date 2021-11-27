var focus=document.getElementsByClassName('focus-info')[0]
// console.log(focus);
let focus_people=document.getElementById('focus-people')
let focus_tai=document.getElementById('focus-tai')
let a=126;
let b=20;
focus.onclick=function(){
    // console.log('1');
    a++;
    focus_people.innerHTML=a+'人申请';
    b--;
    let B=b>9?b:'0'+b;
    focus_tai.innerHTML=B+'台';
    
    if(b<=0){
        focus_tai.innerHTML='已售完';
        focus_people.innerHTML=(a+b)+'人申请';
        focus.innerHTML='已售完'
    }
}


