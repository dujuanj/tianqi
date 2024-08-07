$(document).ready(function(){
    $('#header').load('common/header.html')
    $('#footer').load('common/footer.html')
    $('.part2 h3').addClass('fadeIn-animation animated')
    setTimeout(() => {
      $('.part2 h3+p').addClass('fadeIn-animation animated')
    }, 100)
  
    $(document).scroll(function(){
      var scroH = $(document).scrollTop();  //滚动高度

      if (scroH > 168) {
        $('.part2 .lg').addClass('scale-animation animated')
      }
      if (scroH > 676) {
        $('.part3 h3').addClass('fadeIn-animation animated')
        setTimeout(() => {
          $('.part3 #pills-tab').addClass('fadeIn-animation animated')
        },300)
      }
      if (scroH > 1015) {
        $('#medical_img').addClass('scale-animation animated')
        $('#medical').addClass('fadeIn-animation animated')
      }
      if (scroH > 1447) {
        $('.part4 h3').addClass('fadeIn-animation animated')
        setTimeout(() => {
          $('.part4 .col').eq(0).addClass('fadeIn-left')
          $('.part4 .col').eq(1).addClass('fadeIn-right')
        },300)
      }
      if (scroH > 2201) {
        $('.part5 h3').addClass('fadeIn-animation animated')
        setTimeout(() => {
          $('.part5 #pills-tab').addClass('fadeIn-animation animated')
        },300)
        setTimeout(() => {
          $('.part5 .lg #medical_img').addClass('scale-animation animated')
          $('.part5 .lg #medical').addClass('fadeIn-animation animated')
        },300)
      }
    }) 
});
 // 解决方案切换
function switchAnimate(val,ele) {
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
        case 'seven':
          ele.addClass('animated_seven')
              break;
      }
 }
 function handleChange(val){
    const ele=$('.part3 .tabs-ink-bar-animated')
    ele.removeClass('animated_one animated_two animated_three animated_four animated_five animated_six animated_seven')
    switchAnimate(val,ele)
}
function handleScence(val) {
    const ele=$('.part5 .tabs-ink-bar-animated')
    ele.removeClass('animated_one animated_two animated_three animated_four animated_five animated_six')
    switchAnimate(val,ele)
}