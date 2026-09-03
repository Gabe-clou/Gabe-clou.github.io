$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(500, 0, 20, 290);
createPlatform(1350, 400, 50, 50, "red");
createPlatform(400, 200, 20, 290);
createPlatform(850, 700, 40, 50, "red");
createPlatform(228, 700, 40, 50, "red");
createPlatform(228, 500, 40, 50, "red");
createPlatform(100, 600, 40, 50, "red");
createPlatform(100, 400, 40, 50, "red");
createPlatform(228, 340, 40, 50, "red");
createPlatform(325, 220, 40, 50, "red");
createPlatform(420, 400, 40, 50, "red");
createPlatform(650, 650, 40, 50, "red");
createPlatform(1000, 600, 40, 50, "red");
createPlatform(1200, 500, 40, 50, "red");
createPlatform(1100, 300, 40, 50, "lightblue");
createPlatform(1350, 200, 40, 50, "red");
    // TODO 3 - Create Collectables
createCollectable("max", 1350, 50);
createCollectable("database", 200, 170, 0.5, 0.7);
createCollectable("database", 500, 700, 0.5, 0.7);

    
    // TODO 4 - Create Cannons

createCannon("top", 200, 1900);
createCannon("top", 220, 1900);
createCannon("top", 300, 1550);
createCannon("top", 315, 1550);
createCannon("top", 310, 1550);
createCannon("right", 800, 100);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
