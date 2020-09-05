$(document).ready(function(){
      $("p").mouseover(function(){
        $("p").css({"color":"ghostwhite","transition":"1s","font-size":"60px"});
      });
      $("p").mouseout(function(){
        $("p").css({"color":"ghostwhite","font-size":"40px"});
      });
    });