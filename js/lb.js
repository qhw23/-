var mySwiper = new Swiper ('.swiper-container', {
    // effect:'fade',//平面切换效果
    // effect:'cube',//3D盒模型切换效果
    // effect:'coverflow',//插入切换效果
    // effect:'flip',//翻页切换效果
    // effect:'cards',//平滑切换效果
    effect:'creative',//默认切换效果


    //设置自动切换图片
    autoplay:{
      delay:3000,
    },

    direction: 'horizontal', //horizontal 横向切换 vertical：竖向切换
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }) 