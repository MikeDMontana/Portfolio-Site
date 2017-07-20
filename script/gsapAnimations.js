window.onload = () => {
  TweenMax.from(".mdddLogo", 2, {scale:.5, opacity:0, rotation:30, ease:Ease.easeOut, delay:1});
  TweenMax.from(".icon-scroll", 1, {opacity:0, delay:8});
  TweenMax.staggerFrom(".letter", 1, {x:-10, opacity:0, color:"lime", delay:3.5, force3D:true}, 0.2);
  TweenMax.from(".tag", .2, {opacity:0, color:"lime", delay:4.5, y:-3, force3D:true}, 0.2);
}

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
