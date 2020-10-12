'use strict';

function renderCloud (ctx, color, dot1, dot2, dot3, dot4, dot5, dot6, shadowOffset){
  if (shadowOffset){
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.beginPath();
    ctx.moveTo(dot1.x + shadowOffset, dot1.y + shadowOffset);
    ctx.lineTo(dot2.x + shadowOffset, dot2.y + shadowOffset);
    ctx.lineTo(dot3.x + shadowOffset, dot3.y + shadowOffset);
    ctx.lineTo(dot4.x + shadowOffset, dot4.y + shadowOffset);
    ctx.lineTo(dot5.x + shadowOffset, dot5.y + shadowOffset);
    ctx.lineTo(dot6.x + shadowOffset, dot6.y + shadowOffset);
    ctx.lineTo(dot1.x + shadowOffset, dot1.y + shadowOffset);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(dot1.x, dot1.y);
  ctx.lineTo(dot2.x, dot2.y);
  ctx.lineTo(dot3.x, dot3.y);
  ctx.lineTo(dot4.x, dot4.y);
  ctx.lineTo(dot5.x, dot5.y);
  ctx.lineTo(dot6.x, dot6.y);
  ctx.lineTo(dot1.x, dot1.y);
  ctx.closePath();
  ctx.fill();
};

function renderPlayerGistogram(ctx, name, width, height, startPoint){
  var color;
  if (name === "ВЫ"){
    color = "rgba(255, 0, 0, 1)";
  }
  else {
    color = 'rgba(0, 0, 255, ' + Math.random().toString() + ')';
  }
  ctx.fillStyle = "color";
  ctx.fillRect(startPoint.x,startPoint.y-height, width, height);
}

class Dot{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

window.renderStatistics = function (ctx, names, times) {
  var cloudDot1 = new Dot(100, 10);
  var cloudDot2 = new Dot(520, 10);
  var cloudDot3 = new Dot(500, 145);
  var cloudDot4 = new Dot(520, 280);
  var cloudDot5 = new Dot(100, 280);
  var cloudDot6 = new Dot(120, 145);
  var shadowOffset = 10;
  renderCloud(ctx, "#ffffff", cloudDot1, cloudDot2, cloudDot3, cloudDot4, cloudDot5, cloudDot6, shadowOffset);

};
