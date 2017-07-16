(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < 250; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck());
        window.addEventListener('resize', resize());
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
        })();

        function flare() {
          // use setInterval to gracefully animate circle getting brighter by .05 (every 100 miliseconds) until...
          // ... circle gets to .6 alpha. Then stop that animation
          setInterval(function(){_this.alpha += .05;(_this.alpha >= .6) ? clearInterval() : ""; }, 100);
          // use setTimeout to wait a half second then gracefully animate using setInterval
          // ... to decrease alpha by .10 every 100 miliseconds
          setTimeout(function(){setInterval(function(){_this.alpha -= .10;}, 100)}, 500);
        }

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.10;
            _this.scale = 0.1+Math.random()*1;
            _this.velocity = Math.random()*.7;

        }

        this.draw = function() {
            let randomNum = Math.random();
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.x -= Math.random()*0.5;
            _this.pos.y -= _this.velocity;
            _this.alpha -= Math.random()*0.0005;
            _this.scale += Math.random()*.01;
            // IF random number is tiny call flare function to emulate a flare effect on SOME circles
            (randomNum <= .0007) ? flare() : randomNum = randomNum;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*5, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(155,255,255,'+ _this.alpha/2+')';
            ctx.fill();
        };
    }

})();
