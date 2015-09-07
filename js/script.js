
   var canvas, ctx;
   var monsterX=100, monsterY=100, monsterAngle=0;

   window.onload = init;
    var canvas, ctx;
    var width, height;
    var x, y;
    // Move 3 pixels left or right at each frame
    var incX = 3;
    var size = 10;

    // Called after the DOM is ready (page loaded)
    function init() {
      // init the different variables
      canvas = document.querySelector("#mycanvas");
      ctx = canvas.getContext('2d');
      animationLoop();
    }

    function animationLoop() {
    }
