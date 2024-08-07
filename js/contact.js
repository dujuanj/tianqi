$(document).ready(function(){
    $('#header').load('common/header.html')
    $('#footer').load('common/footer.html')

    $('.part2 h3').addClass('fadeIn-animation animated')
    setTimeout(() => {
        $('.part2 .lf_animate').addClass('fadeIn-left animated')
        $('.part2 .r_animate').addClass('fadeIn-right animated')  
    }, 400)

    $(document).scroll(function () {
        var scroH = $(document).scrollTop();  //滚动高度
        if (scroH > 400) {
            $('.part3 h3').addClass('fadeIn-animation animated')
        }
        if (scroH > 450) {
            $('.part3 .row').addClass('fadeIn-animation animated')
        }
   })
});