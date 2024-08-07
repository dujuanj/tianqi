$().ready(function () {
    $('#header').load('common/header.html')
    $('#footer').load('common/footer.html')
    $('.part2 h3').addClass('fadeIn-animation animated')
    
    setTimeout(() => {
        $('.part2 h3+p').addClass('fadeIn-animation animated')
    },100)


    $(document).scroll(function () {
        var scroH = $(document).scrollTop();  //滚动高度
        if (scroH > 60) {
            $('.part2 .row .col:first-child').addClass('fadeIn-left animated')
            $('.part2 .row .col:last-child').addClass('fadeIn-right animated')
        }
        if (scroH > 676) {
            $('.part3 h3').addClass('fadeIn-animation animated')
            setTimeout(() => {
                $('.part3 h3+p').addClass('fadeIn-animation animated')
            }, 300)
            setTimeout(() => {
                $('.part3 img').addClass('scale-animation animated')
            },600)
        }
        if (scroH > 1353) {
            $('.part4 h3').addClass('fadeIn-animation animated')
            setTimeout(() => {
                $('.part4 .row .col:first-child').addClass('fadeIn-left animated')
                $('.part4 .row .col:last-child').addClass('fadeIn-right animated')
            },400)
        }
        if (scroH > 2201) {
            $('.part5 h3').addClass('fadeIn-animation animated')
            setTimeout(() => {
                $('.part5 .col:eq(0)').addClass('fadeIn-animation animated')
            }, 300)
            setTimeout(() => {
                $('.part5 .col:eq(1)').addClass('fadeIn-animation animated')
            }, 500)
            setTimeout(() => {
                $('.part5 .col:eq(2)').addClass('fadeIn-animation animated')
            },800)
        }
    })
})