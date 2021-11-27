            //正则验证表单
            var phone=document.getElementById('phone')
            var img=document.getElementById('img')
            var number=document.getElementById('number')
            var user=document.getElementById('user')
            var pw=document.getElementById('pw')
            var pws=document.getElementById('pws')
            var yanz=document.getElementById('yanz')
            var span_=document.getElementsByTagName('span')
            phone.onfocus=function(){
                span_[0].innerHTML="<i>输入十一位手机号</i>"
            }
            phone.onblur=function(){
                var reg = /^1[3-9][0-9]{9}$/;
                if(phone.value==''){
                    span_[0].innerHTML="<i>不能为空</i>"
                    return false
                }else if(!reg.test(phone.value)){
                    span_[0].innerHTML="<i>错误 请重新输入</i>"
                    return false
                }else{
                    span_[0].innerHTML="<i>OK</i>"
                    return true
                } 
            }
            img.onfocus=function(){
                span_[1].innerHTML="<i>输入图案内容</i>"
            }
            img.onblur=function(){
                if(img.value==''){
                    span_[1].innerHTML="<i>不能为空</i>"
                    return false
                }else if(img.value!=='r2B7'){
                    span_[1].innerHTML="<i>错误 请重新输入</i>"
                    return false
                }else{
                    span_[1].innerHTML="<i>OK</i>"
                    return true
                } 
            }
            number.onfocus=function(){
                span_[2].innerHTML="<i>输入弹框验证</i>"
            }
            yanz.onclick=function(num){
                alert('验证码是：4566')
                return num;
            }
            number.onblur=function(){
                if(number.value==''){
                    span_[2].innerHTML="<i>不能为空</i>"
                    return false
                }else if(number.value!=='4556'){
                    span_[2].innerHTML="<i>错误 请重新输入</i>"
                    return false
                }else{
                    span_[2].innerHTML="<i>OK</i>"
                    return true
                } 
            }
            user.onfocus=function(){
                span_[3].innerHTML="<i>6-12字符推荐用中文会员名</i>"
            }
            user.onblur=function(){
                // reg=/^[\w\u4e00-\u9fa5]{6,12}$/;
                if(user.value==''){
                    span_[3].innerHTML="<i>不能为空</i>"
                    return false
                }else if(user.value.length<6||user.value.length>12){
                    span_[3].innerHTML="<i>长度不在范围内或者存在非法字符</i>"
                    return false
                }else{
                    span_[3].innerHTML="<i>OK</i>"
                    return true
                } 
            }

            pw.onfocus=function(){
                span_[4].innerHTML="<i>6-12个字符</i>"
            }
            pw.onblur=function(){
                var reg=/^\w{6,12}$/;
                var reg1=/[^0-9]/;
                var reg2=/[^a-zA-Z]/;
                if(pw.value==''){
                    span_[4].innerHTML="<i>不能为空</i>"
                    return false
                }else if(!reg.test(pw.value)){
                    span_[4].innerHTML="<i>长度不在范围内或者存在非法字符</i>"
                    return false
                }else if(!reg1.test(pw.value)){
                    span_[4].innerHTML="<i>不能全是数字</i>"
                    return false
                }else if(!reg2.test(pw.value)){
                    span_[4].innerHTML="<i>不能全是字母</i>"
                    return false
                }
                else{
                    span_[4].innerHTML="<i>OK</i>"
                    return true
                } 
            }
            pws.onfocus=function(){
                span_[5].innerHTML="<i>请输入相同密码</i>"
            }
            pws.onblur=function(){
                if(pw.value==''){
                    span_[5].innerHTML="<i>不能为空</i>"
                    return false
                }else if(pw.value!==pws.value){
                    span_[5].innerHTML="<i>密码不一样</i>"
                    return false
                }
                else{
                    span_[5].innerHTML="<i>OK</i>"
                    return true
                } 
            }
            var but=document.getElementsByTagName('button')[1]
            but.onclick=function(){
                user.value=''
                pw.value=''
                pws.value=''
                alert('注册成功！')
            }