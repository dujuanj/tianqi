$(document).ready(function () {
    $('#header').load('common/header.html')
    $('#footer').load('common/footer.html')
    $('.part2 h3').addClass('fadeIn-animation animated')

    setTimeout(() => {
        $('.part2 .col-6').eq(0).addClass('fadeIn-animation animated')
    }, 400)
    setTimeout(() => {
        $('.part2 .col-6').eq(1).addClass('fadeIn-animation animated')
    }, 600)
    setTimeout(() => {
        $('.part2 .col-6').eq(2).addClass('fadeIn-animation animated')
    }, 800)
    setTimeout(() => {
        $('.part2 .col-6').eq(3).addClass('fadeIn-animation animated')
    }, 1000)
    
    $(document).scroll(function () {
        var scroH = $(document).scrollTop();  //滚动高度
        if (scroH > 167) {
            $('.part3 h3').addClass('fadeIn-animation animated')
        }
        if (scroH > 350) {
            $('.part3 .lg ul').addClass('fadeIn-animation animated')
            $('.part3 img').addClass('scale-animation animated')
            $('.part3 h5').addClass('fadeIn-animation animated')
            setTimeout(() => {
                $('.part3 p').addClass('fadeIn-animation animated')
            },300)
        }
        if (scroH > 800) {
            $('.part4 h3').addClass('fadeIn-animation animated')
            setTimeout(() => {
                $('.part4 .one_row .col').eq(0).addClass('fadeIn-left')
                $('.part4 .one_row .col').eq(1).addClass('fadeIn-right')
            }, 300)
            setTimeout(() => {
                $('.part4 .two_row .col').eq(0).addClass('fadeIn-left')
                $('.part4 .two_row .col').eq(1).addClass('fadeIn-right')
            },600)
        }
    })
})

 // 解决方案切换
 function handleChange(val){
    const ele=$('.tabs-ink-bar-animated')
    ele.removeClass('animated_one animated_two animated_three animated_four animated_five animated_six')
    switch (val){
      case 'one':
        ele.addClass('animated_one')
        break;
      case 'two':
        ele.addClass('animated_two')
        break;
      case 'three':
        ele.addClass('animated_three')
        break;
      case 'four':
        ele.addClass('animated_four')
        break;
      case 'five':
        ele.addClass('animated_five')
        break;
      case 'six':
        ele.addClass('animated_six')
        break;
    }
    }