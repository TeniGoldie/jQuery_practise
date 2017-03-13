//$(window).load(function(){ ... }); img load
//$(function(){ ... });

$(document).ready(function(){

// JQUERY FILTERS

	/*$("header nav li:first").css({border: "2px solid red"});
    $("header nav li:last").css({border: "2px solid blue"});*/

  /*$("#contact ul:first-child").css({border: "2px solid red"});
    $("#contact ul:last-child").css({border: "2px solid green"});*/

  /*$("header nav li:even").css({border: "2px solid red"});
    $("header nav li:odd").css({border: "2px solid pink"});*/

  //$("section:not('#contact')").css({border: "2px solid green"});

  /*$("#social-nav li:lt(3)").css({border: "2px solid blue"});
    $("#social-nav li:gt(2)").css({border: "2px solid blue"});*/

  

// ATTR FILTERS

  /*$("img[alt]").css({border: "2px solid pink"});
    $("img[alt=quote]").css({border: "2px solid purple"});*/

  /*$("#contact-methods").next().css({border: "2px solid grey"});
    $("#social-nav").prev().css({border: "2px solid blue"});*/

  /*$(".banner-title").parent().css({border: "2px solid pink"});
    $("#social-nav").children().css({border: "3px solid green"});*/

  /*$("#contact").find('.facebook').css({border: "3px solid purple"});*/

  /*$("#social-nav").closest('.wrapper').css({border: "3px solid green"});*/



// ADD CONTENT

/*var tweet = "<div style='margin:20px 0; padding: 10px; background:#eee'> The big live: Ham vs Cheese!</div>";*/

  //add some content to the bottom of the element(after p)
  /*$("#tweets div").append(tweet);*/

  //add some content to the top of the element(before p)
  /*$("#tweets div").prepend(tweet);*/

  //add some content before element(p)
  /*$("#tweets div p").before(tweet);*/

  //add some content after element(p)
  /*$("#tweets div p").after(tweet);*/

  //change the whole html of the element
  /*$("#tweets div").html(tweet);*/

  //change the text of the element
  /*$("#tweets div p").text(tweet);*/



// WRAP/UNWRAP CONTENT
  
  //wrap each elem into the div
  /*$("section").wrap("<div>");*/

  //find the nearest parent and unwrap
  /*$("section").unwrap();*/

  //wrap all elem into one div
  /*$("section").wrapAll("<div>");*/



    var wrapper = "<div class='wrapper'>";
    var button = $(".button");
    var wrapped = true;

  button[0].onclick = function(){

  if(wrapped){
      $("section").unwrap();
      wrapped = false;
      button.text("Wrap");
  }else{
      $("section").wrapAll(wrapper);
      wrapped = true;
      button.text("Unwrap");
    }
  }



// REMOVE CONTENT

  //empty the inner HTML
  /*$(".button").empty();*/

  //remove element completely
  /*$("#contact img").remove();*/



// CHANGE ATTR

  //remove attr completely
  /*$("#contact img").removeAttr("alt");*/

  //change or set attr
  /*$("#contact img").attr("alt", "location");*/



// CSS PROP

/*  var newObject = {
      "top" : "-400px",
      "left" : "150px",
      "opacity" : "0.5",
      "border-top" : "4px solid red"
  }*/

/*  $("#social-nav").css({
      "top" : "-400px",
      "left" : "150px",
      "opacity" : "0.5",
      "border-top" : "4px solid red"
  });*/



// ADD/REMOVE CLASSES

  // remove class from matched elements
  /*$('header .wrapper').removeClass("wrapper");*/

  // add class to matched elements
  /*$('header > div').addClass("wrapper");*/



 var button = $("#lead-banner a");

  button[0].onclick = function(){

      $("#points-of-sale").toggleClass("closed");
      return false;

  };



// BIND/UNBIND EVENT. CALLBACK funct 


  /*var myLis = $("#points-of-sale li");

  myLis.on("click", function(){
    
        $(this).css({"background" :"#eee"});
        myLis.off("click");
    });*/



// ANIMATIONS(numerical). CALLBACK funct

  /*function complete(){
    alert("Are you sure you want to leave this site?");
  }

  $("section > h2").on("click", function(){
    $(this).animate({"width": "300px"}, 600, "swing", complete);
  });*/



// FADE IN-OUT-TO

  $("section > h2").on("click", function(){

    //$(this).fadeOut(500).fadeIn(500);
      $(this).fadeTo(1000, 0.2).fadeTo(1000, 0.8);

  });



// HIDE/SHOW/TOGGLE

$("#tweets > h2").on("click", function(){

  /*$(this).hide(1000).show(1000);*/
  $("p").toggle(1000);

});



// SLIDING ELEM

/*  $(".slide-button-up").on("click", function(){
    $("#lead-banner").slideUp(1000);
  });

  $(".slide-button-down").on("click", function(){
    $("#lead-banner").slideDown(1000);
  });*/

/*$(".slide-button-up").on("click", function(){
    $("#lead-banner").slideToggle(1000);
  });*/



// FADING ANIMATION

  var allQuotes = $("blockquote");
  var currentQuote = 0;
  var quoteTimer = setInterval(changeQuote, 3000);

  function changeQuote(){

    $(allQuotes[currentQuote]).fadeOut(200, function(){

        if(currentQuote == allQuotes.length - 1){
          currentQuote = 0;
        }else {
          currentQuote++;
        }

    $(allQuotes[currentQuote]).fadeIn(200);

    });
  }



// SLIDING ANIMATION

  var items = $("#points-of-sale li");

  items.on("click", function(){

    $(this).find("p").slideToggle(500).css({"background" :"#eee"});

  });









  /*$(".rslides").responsiveSlides();*/






});