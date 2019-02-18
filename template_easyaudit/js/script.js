$(document).ready(function(){

  $('.toggle_1').click(function () {
    $(".menu_1").fadeToggle(500);
  });

  $('.login_container').click(function () {
    $(".login").fadeToggle(500);
  });
  /* -------------------------------slider---------------------------------- */
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
      $(outsideWindow).animate({'left': (-100 * dir) + '%'}, 1000, function () {
        $(outsideWindow + ' .slide_content').fadeOut();
      });
      $(middleWindow).animate({'left': '0%'}, 1000, function () {
        flag = true;
        $(middleWindow +' .slide_content').fadeIn();
      });     
      
    }

    $(".prev").click(() => {$(outsideWindow).css({"left": "-100%"}); slide(-1, 'click');});
    $(".next").click(() => {$(outsideWindow).css({"left": "100%"}); slide(1, 'click');});

     /* ------------------------workers slide--------------------- */
    var team = $('.team');
    var teamPosition = ['-200%','-100%','0%', '100%', '200%', '300%',];
    var team1 = [];
    for (let i = 0; i < team.length; i++) {
      team1.push(team.eq(i));
      team1[i].css({'left': teamPosition[i]});
    }
    
    console.log(team1);
    $('#d1').click(left);
    $('#d2').click(right);
    function left() {
      team1.unshift(team1.pop());
      change();
    }
    function right() {
      team1.push(team1.shift());
      change();
    }

    function change() {
      for (let i = 0; i < team1.length; i++) {
        if (i == 2) {
          team1[i].children().children('img').css({'width': '175px', 'margin-top': '35px'});
          team1[i].css({'border-top': '5px solid #37ca8a',
                        'border-bottom': '5px solid #37ca8a',
                        'border-left': '1px solid #e5e7e9',
                        'border-right': '1px solid #e5e7e9'
                      });
        } else {
          team1[i].children().children('img').css({'width': '160px', 'margin-top': '50px'});
          team1[i].css({'border-top': '5px solid transparent',
                        'border-bottom': '5px solid transparent',
                        'border-left': '1px solid transparent',
                        'border-right': '1px solid transparent'
                      });
        }
        team1[i].css({'left': teamPosition[i]});
      }
      
    }

    // team.eq(1).children().children('img').css({'width': '170px', 'margin-top': '30px'});
    // for (let i = 0; i < team.length; i++) {
    //   team.eq(i).css({'left': teamPosition[i]});
    // }

});
