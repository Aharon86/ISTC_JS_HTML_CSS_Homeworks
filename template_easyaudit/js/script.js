$(document).ready(function(){

    // $(".toggle_1").mouseenter(function(){
    //   $(".menu_1").animate({'top': '15px'});
    // });
    function slide() {
      $(".item1").animate({'left': -100+'%'}, 1000);
      $(".item2").css({"display": "block"});
      $(".item2").animate({'left': '0%'}, 1000, function() {
        $(".item1").css({"display": "none"});
      });
    }
   
    setInterval(slide, 1000);

});

// setInterval(slide, 1000);
// var item1 = document.getElementsByClassName('item1')[0];
// var item2 = document.getElementsByClassName('item2')[0];
// function slide() {
//   item1.style.left = 
//   console.log(item1.offsetLeft);
//   item1.style.left = '20px';
// }