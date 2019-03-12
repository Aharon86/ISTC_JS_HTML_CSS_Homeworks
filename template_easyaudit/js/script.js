$(document).ready(function(){
/* -----------------------------------menu------------------------ */
  var toggle = true;
  $('#drop-down').click(function() {
    if (toggle) {
      $('#p1').css({transform: 'rotate(43deg)'});
      $('#p2').css({display: 'none'});
      $('#p3').css({transform: 'rotate(-43deg)'});

      $('.drop-menu').addClass('menu1');
      $('.menu1').animate({width: '380px', height: '306px'});
      toggle = false;
    }else{
      $('#p1').css({transform: 'rotate(0deg)'});
      $('#p2').css({display: 'block'});
      $('#p3').css({transform: 'rotate(0deg)'});

      $('.drop-menu').animate({width: '0px',height: '0px'}, function () {
        $(".drop-menu").removeClass("menu1");
      });
      
      toggle = true;
    }
    
  });



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
    var teamPosition = ['-200%','-100%','0%', '100%', '200%', '300%'];
    var team1 = [];
    for (let i = 0; i < team.length; i++) {
      team1.push(team.eq(i));
    }
    change();
    
    // console.log(team1);
    $('.left').click(left);
    $('.right').click(right);
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
        if (i == (team1.length - 1)) {
          $(team1[i]).css({'display': 'none'});
        }else{
          $(team1[i]).css({'display': 'block'});
        }
        
        team1[i].css({'left': teamPosition[i]});
        
      }
      
    }

    /* ------------------------------main--------------------------------- */
    var mainArr = [
          {
            name: 'Amelia Lee', 
            post: 'Sales, demolink.org', 
            exp: '-20%', 
            prof: '+17%', 
            about: 'I would not hesitate even one bit to work with them for my future tax and accounting needs.'
          },
          {
            name: 'Mark Wilson', 
            post: 'CEO “WilsonCompany”', 
            exp: '-30%', 
            prof: '+22%', 
            about: 'I’ve never known another auditor more prepared or focused. You havethe ability to dissect a case much like a skilled surgeon, with absolute calm. Nothing seems to rattle you or distract from the goal on a case.'
          },
          {
            name: 'Jill Miller', 
            post: 'Artist', 
            exp: '-29%', 
            prof: '+19%', 
            about: 'I am happy that I chose Easy Audit for my US tax returns and would recommend it to everyone.'
          },
          {
            name: 'Christopher Taylor', 
            post: 'Financial Consultant', 
            exp: '-20%', 
            prof: '+17%', 
            about: 'Over the last 6 years I have found their services to be reliable and their advice to be practical and clear.'
          }
      ];
      var liArr = Array.prototype.slice.call($('#main_img>li'));

      $('#main_img>li').click(showAbout);

      showAbout(liArr[0]);

      function showAbout(el) {
        var index = liArr.indexOf(this);
        if (index != -1) {
          el = this;
        }else{
          index = liArr.indexOf(el);
        }
        for (let iterator of liArr) {
          $(iterator).children().css({'border': '2px solid transparent'});
        }
        $(el).children().css({'border': '2px solid #fccb56'});

        $('.main_about .name').text(mainArr[index].name);
        $('.main_about .post').text(mainArr[index].post);
        $('.expenses>.percent').text(mainArr[index].exp);
        $('.profit>.percent').text(mainArr[index].prof);
        $('.message>p').text(mainArr[index].about);
      }

      /* ----------------------------------scroll------------------------------- */
      var section = $("section").position();
      var article = $("article").position();
      var flag = true;
      

      $(window).scroll(function(){
        if ($(window).scrollTop() > (section.top - 600)) {
          
          $('section .icon').fadeIn(0);
          $('section .icon').animate({'left': '0'}, 1000);
          $('section .item').fadeIn(0);
          $('section .item').animate({'top': '0'}, 1000);
        }

        if ($(window).scrollTop() > (article.top) && flag) {
          console.log($(window).scrollTop(), article.top );
          $('.article-2').animate({'top': '0'}, 500);
            increment(850, '.num_1')();
            increment(48, '.num_2')();
            increment(21, '.num_3')();
            increment(16, '.num_4')();
          flag = false;
          
        }
        
      })
      
      function increment(num, elem) {
        var count = 0;
        var ink;
        var time = 9000 / num;
        function plus() {
          $(elem).text(count);
          ink = setTimeout(() => { plus();  }, time );
          count++;
          if (count > num) {
            clearTimeout(ink);
            return;
          }
        }
        return plus;
      }

      
      

});
