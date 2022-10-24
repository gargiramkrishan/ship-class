"use strict";

var ship, shipimg, sea, seaimg;

function preload() {
  shipimg = loadAnimation("ship-1.png", "ship-2.png");
  seaimg = loadAnimation("sea.png");
}

function setup() {
  createCanvas(1920, 1080);
  sea = createSprite(200, 100);
  sea.addAnimation("sea flying", seaimg);
  ship = createSprite(200, 200);
  ship.addAnimation("ship sailing", shipimg);
}

function draw() {
  drawSprites();

  if (keyDown("right")) {
    ship.x = ship.x + 7;
  }

  if (keyDown("left")) {
    ship.x = ship.x - 7;
  }
}