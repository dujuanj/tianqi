        // 页面总高
        var totalH =
            document.body.scrollHeight || document.documentElement.scrollHeight;
        // 可视高
        var clientH =
            window.innerHeight || document.documentElement.clientHeight;


$(document).ready(function () {
    $('#header').load('common/header.html')
  $('#footer').load('common/footer.html')
  if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    console.log('mobile') // 移动端
    $('.pt1-title').addClass('pt1-title-animation')
    $('.pt2-title').addClass('pt1-title-animation')
    setTimeout(()=>{
      $('.pt1-title2').addClass('pt1-title2-animation')
    },200)
    setTimeout(()=>{
      $('.pt1-title3').addClass('pt1-title3-animation')
      $('.intro').addClass('fadeIn-animation')
    },300)
    setTimeout(()=>{
      $('.smart-banner img').removeClass('scale-animation')
    }, 3000)
    $(document).scroll(function () {
      var validH = totalH - clientH
    // 滚动高度
    var scroH = document.body.scrollTop || document.documentElement.scrollTop;
    var result =((scroH / validH) * 100).toFixed(2);
      // console.log(result)
      if (result > 9) {
        $('.part3-core h3').addClass('fadeIn-animation animated')
        setTimeout(()=>{
        $('.pt3_img ').addClass('scale-animation animated')
        }, 300)
      }
      if (result > 20) {
        $('.pt3_site_l').addClass('fadeIn-animation animated')
      }
      if (result > 35) {
        $('.pt3_site_r').addClass('fadeIn-animation animated')
      }
      if (result > 46) {
        $('.part4-communication h3').addClass('fadeIn-animation animated')
        setTimeout(()=>{
          $('.part4-communication .times').addClass('fadeIn-animation animated')
        },300)
      }
      if (result > 51) {
        $('.part5-data h3').addClass('fadeIn-animation animated')
      }
      if (result > 61) {
        $('.part6-solution h3').addClass('fadeIn-animation animated')
      }
      if (result > 70) {
        $('.part7-client h3').addClass('fadeIn-animation animated')
        setTimeout(()=>{
          $('.part7-client .row').addClass('fadeIn-animation animated')
        },300)
      }
    })
 }else{
    console.log('pc') // PC端
  // $('.carousel').carousel() //轮播
  $('.smart-banner img').addClass('scale-animation animated')
  $('.pt1-title').addClass('pt1-title-animation')
  $('.pt2-title').addClass('pt1-title-animation')
  setTimeout(()=>{
    $('.pt1-title2').addClass('pt1-title2-animation')
  },200)
  setTimeout(()=>{
    $('.pt1-title3').addClass('pt1-title3-animation')
    $('.intro').addClass('fadeIn-animation')
  },300)
  setTimeout(()=>{
    $('.smart-banner img').removeClass('scale-animation')
  },3000)
  $(document).scroll(function(){
    // 有效高
    var validH = totalH - clientH
    // 滚动高度
    var scroH = document.body.scrollTop || document.documentElement.scrollTop;
    var result =((scroH / validH) * 100).toFixed(2);
    // console.log(result)
    if(result>9){
      $('.part3-core h3').addClass('fadeIn-animation animated')
        setTimeout(()=>{
        $('.pt3_site_l').addClass('part3-core-animate-left animated')
        $('.pt3_site_r').addClass('part3-core-animate-right animated')
        $('.pt3_img ').addClass('scale-animation animated')
      },300)
    }
    if(scroH>1000){
      $('.part4-communication h3').addClass('fadeIn-animation animated')
      setTimeout(()=>{
        $('.part4-communication .times').addClass('fadeIn-animation animated')
      },300)
    }
    if(scroH>1400){
      $('.part5-data h3').addClass('fadeIn-animation animated')
      setTimeout(() => {
        $('.part5-data img').addClass('scale-big animated')
      },700)
    }
    if(scroH>2300){
      $('.part6-solution h3').addClass('fadeIn-animation animated')
      setTimeout(()=>{
        $('#medical').addClass('fadeIn-animation animated')
        $('#medical_img').addClass('scale-animation animated')
      },300)
    }
    if(scroH>2500){
      $('.part7-client h3').addClass('fadeIn-animation animated')
      setTimeout(()=>{
        $('.part7-client .row').addClass('fadeIn-animation animated')
      },300)
    }
  })
}
     
});
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