window.onload = () => {
  var socialStagger = TweenMax.staggerFrom(".socialIcon", 1, {x:-10, opacity:0}, 0.2);

  TweenLite.set(".icon-scroll", {delay:7.9, visibility:"visible"});
  TweenMax.from(".mdddLogo", 2, {scale:.5, opacity:0, rotation:30, ease:Ease.easeOut, delay:1});
  TweenMax.from(".icon-scroll", 1, {opacity:0, delay:8});
  TweenLite.set(".letter", {delay:2.9, visibility:"visible"});
  TweenLite.set(".tag", {delay:3.7, visibility:"visible"});
  TweenMax.staggerFrom(".letter", 1, {x:-10, opacity:0, color:"lime", delay:3, force3D:true}, 0.2);
  TweenMax.from(".tag", .2, {opacity:0, color:"lime", delay:3.75, y:-3, force3D:true}, 0.2);

  var tl1 = new TimelineMax({repeat: -1});

  tl1.insert(TweenMax.to($("img.headerBkgd1"), 4, {css:{autoAlpha:1}, delay:4}) );
  tl1.insert(TweenMax.to($("img.headerBkgd1"), 2, {css:{autoAlpha:0}, delay:8}) );
  tl1.insert(TweenMax.to($("img.headerBkgd2"), 4, {css:{autoAlpha:1}, delay:10}) );
  tl1.insert(TweenMax.to($("img.headerBkgd2"), 2, {css:{autoAlpha:0}, delay:14}) );
  tl1.insert(TweenMax.to($("img.headerBkgd3"), 4, {css:{autoAlpha:1}, delay:16}) );
    tl1.insert(TweenMax.to($("img.headerBkgd3"), 2, {css:{autoAlpha:0}, delay:20}) );
  tl1.insert(TweenMax.to($("img.headerBkgd4"), 4, {css:{autoAlpha:1}, delay:22}) );
  tl1.insert(TweenMax.to($("img.headerBkgd4"), 2, {css:{autoAlpha:0}, delay:26}) );
  tl1.insert(TweenMax.to($("img.headerBkgd5"), 4, {css:{autoAlpha:1}, delay:28}) );
    tl1.insert(TweenMax.to($("img.headerBkgd5"), 2, {css:{autoAlpha:0}, delay:32}) );

  $(".designTab").hover(function(){
          $('.designSubTitle').toggleClass('hidden');
          $('.shortLine').toggleClass('hidden');
  });

  $(".developTab").hover(function(){
          $('.developSubTitle').toggleClass('hidden');
          $('.shortLine2').toggleClass('hidden');
  });

  //design tab move in
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger1"
  })
    .setTween(".animate1", 1.5, {opacity: 1, x: 200})
    .addTo(controller);

  // develop tab move in
  var controller2 = new ScrollMagic.Controller();

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger1"
  })
    .setTween(".animate2", 1.5, {opacity: 1, x: -200})
    .addTo(controller2);

  //about text fade in
    var controller3 = new ScrollMagic.Controller();

    var scene3 = new ScrollMagic.Scene({
      triggerElement: ".trigger1"
    })
      .setTween(".animate3", 5, {opacity: 1, y:-20})
      .addTo(controller3);

  //cvAbout text fade in
    var controller4 = new ScrollMagic.Controller();

    var scene4 = new ScrollMagic.Scene({
      triggerElement: ".cvTrigger"
    })
      .setTween(".cvAboutText", 5, {opacity: 1, y:-20})
      .addTo(controller4);

  //social Icons Move In
    var controller5 = new ScrollMagic.Controller();

    var scene4 = new ScrollMagic.Scene({
      triggerElement: ".cvTrigger"
    })
      .setTween(socialStagger)
      .addTo(controller5);

}
