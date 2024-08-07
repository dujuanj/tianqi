$(document).ready(function(){
    $('#header').load('common/header.html')
    $('#footer').load('common/footer.html')

    $('.part2 h3').addClass('fadeIn-animation animated')
    setTimeout(() => {
         $('.part2 h3+p').addClass('fadeIn-animation animated')
    },300)
    $(document).scroll(function () {
        if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            console.log('mobile')
            var scroH = $(document).scrollTop();  //滚动高度
            console.log(scroH)
            if (scroH > 167) {
                $('.part2 .pro_form1').addClass('fadeIn-left animated')
                $('.part2 .pro_form2').addClass('fadeIn-right animated')
            }
            if (scroH > 407) {
                $('.part2 .pro_form3').addClass('fadeIn-left animated')
                $('.part2 .pro_form4').addClass('fadeIn-right animated')
            }
            if (scroH > 630) {
                $('.part2 .pro_form5').addClass('fadeIn-left animated')
                $('.part2 .pro_form6').addClass('fadeIn-right animated') 
            }
            if (scroH > 940) {
                $('.part3 h3').addClass('fadeIn-animation animated')
                setTimeout(() => {
                    $('.part3 .row:eq(0)').addClass('fadeIn-animation animated')
                }, 300)
                setTimeout(() => {
                    $('.part3 .row:eq(1)').addClass('fadeIn-animation animated')
                },600)
            }
        } else {
            console.log('pc')
            var scroH = $(document).scrollTop();  //滚动高度
            if (scroH > 167) {
                $('.part2 .pro_form1').addClass('fadeIn-left animated')
                $('.part2 .pro_form2').addClass('fadeIn-right animated')
            }
            if (scroH > 507) {
                $('.part2 .pro_form3').addClass('fadeIn-left animated')
                $('.part2 .pro_form4').addClass('fadeIn-right animated')
            }
            if (scroH > 1200) {
                $('.part2 .pro_form5').addClass('fadeIn-left animated')
                $('.part2 .pro_form6').addClass('fadeIn-right animated') 
            }
            if (scroH > 1900) {
                $('.part3 h3').addClass('fadeIn-animation animated')
                setTimeout(() => {
                    $('.part3 .row:eq(0)').addClass('fadeIn-animation animated')
                }, 300)
                setTimeout(() => {
                    $('.part3 .row:eq(1)').addClass('fadeIn-animation animated')
                },600)
            }
        }
       
   })
});