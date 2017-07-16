window.onload = () => {
  TweenMax.from(".mdddLogo", 2, {scale:.5, opacity:0, rotation:30, ease:Ease.easeOut, delay:1});
  TweenMax.from(".icon-scroll", 1, {opacity:0, delay:8});
  TweenMax.staggerFrom(".letter", 1, {x:-10, opacity:0, color:"lime", delay:3.5, force3D:true}, 0.2);
  TweenMax.from(".tag", .2, {opacity:0, color:"lime", delay:4.5, y:-3, force3D:true}, 0.2);
}

$(".designTab h2").hover(function(){
        $('.designSubTitle').toggleClass('hidden');
});

$(".developTab h2").hover(function(){
        $('.developSubTitle').toggleClass('hidden');
});
