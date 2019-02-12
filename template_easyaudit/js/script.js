$(document).ready(function(){
  
    var outsideWindow = '#item2';
    var middleWindow = '#item1';
    var par;
    var flag = true;
    var setI = setTimeout(() => { 
      $(outsideWindow).css({"left": "100%"}); 
      slide(1);
    }, 5000);
    
    function slide(dir = 1, who) {
      if (who == 'click') {
        clearTimeout(setI);
      }

      setI = setTimeout(() => { 
        $(outsideWindow).css({"left": "100%"}); 
        slide(1);
      }, 5000);
      
      if (flag) {
        flag = false;
      }else{
        return;
      }
      
      par = outsideWindow;
      outsideWindow = middleWindow;
      middleWindow = par;
      $(outsideWindow).animate({'left': (-100 * dir) + '%'}, 1000);
      $(middleWindow).animate({'left': '0%'}, 1000, function () {
        flag = true;
      });
      
    }

    $("#d1").click(() => {$(outsideWindow).css({"left": "-100%"}); slide(-1, 'click');});
    $("#d2").click(() => {$(outsideWindow).css({"left": "100%"}); slide(1, 'click');});

});
