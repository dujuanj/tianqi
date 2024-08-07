$(document).ready(function(){
    $('#header').load('common/header.html')
    $('#footer').load('common/footer.html')
    
  $('.part2 h3').addClass('fadeIn-animation animated')
  setTimeout(() => {
    $('.part2 .lf_animate').addClass('fadeIn-left animated')
    $('.part2 .r_animate').addClass('fadeIn-right animated')
  },400)
    $(document).scroll(function(){
      var scroH = $(document).scrollTop();  //滚动高度
     
      if(scroH>150){
       
       
        setTimeout(() => {
          $('.part2 .lf_animate2').addClass('fadeIn-left animated')
          $('.part2 .r_animate2').addClass('fadeIn-right animated')
        },300)
      }
      if (scroH > 846) {
        $('.part3 h3').addClass('fadeIn-animation animated')
        setTimeout(() => {
          $('.part3 .advantage_1').addClass('fadeIn-animation animated')
        }, 300)
        setTimeout(() => {
          $('.part3 .advantage_2').addClass('fadeIn-animation animated')
        }, 500)
        setTimeout(() => {
          $('.part3 .advantage_3').addClass('fadeIn-animation animated')
        }, 700)
        setTimeout(() => {
          $('.part3 .advantage_4').addClass('fadeIn-animation animated')
        },900)
      }
      if (scroH > 1523) {
        $('.part4 h3').addClass('fadeIn-animation animated')
        setTimeout(() => {
          $('.part4 #pills-tab').addClass('fadeIn-animation animated')
        }, 300)
        setTimeout(() => {
          $('.part4 #pills-tabContent').addClass('scale-animation animated')
        },300)
      }
     
    }) 
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