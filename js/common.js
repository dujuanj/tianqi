$().ready(function () {
    $(document).scroll(function() {
    var scroH = $(document).scrollTop();  //滚动高度
    var contentH = $(document).height();  //内容高度
    if(scroH >100){  //距离顶部大于100px时
        // console.log(scroH)
        $('.header-wrap').attr('style','background-color:#fff')
    } else {
        $('.header-wrap').attr('style','background-color:none')
        }
    if (scroH > 400) {
        $('.back-top').show()
    } else {
        $('.back-top').hide()
    }
    });
    $('.back-top').on('click', function () {
        $('body,html').animate({scrollTop:0},800); 
    })
})

