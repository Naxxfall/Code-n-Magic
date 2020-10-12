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
}

function renderPlayerGistogram(ctx, name, time, color, width, height, startPoint){
  ctx.fillStyle = color;
  ctx.fillRect(startPoint.x,startPoint.y-height, width, height);
  ctx.fillStyle = "#000000"
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(name, startPoint.x + width/2, startPoint.y);
  ctx.save();
  ctx.translate(startPoint.x, startPoint.y);
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.rotate(-90 * Math.PI / 180);
  //ctx.fillText(time.toString(), startPoint.x + width/2, startPoint.y + 5);
  ctx.fillText((time / 1000.0).toFixed(1) + ' c.', 5, width/2);
  ctx.restore();
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
  var gistogramColor;
  var gistogramStartPoint = new Dot (155, 220);
  var gistogramMaxTime = Math.max.apply(this, times);
  renderCloud(ctx, "#ffffff", cloudDot1, cloudDot2, cloudDot3, cloudDot4, cloudDot5, cloudDot6, shadowOffset);
  ctx.fillStyle = "#000000"
  ctx.font = "16px PT Mono sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Ура вы победили!", 310, 16);
  ctx.fillText("Список результатов:", 310, 38);
  for (var i=0; i<names.length; i++ ){
    if (names[i] === "Вы"){
      gistogramColor = "rgba(255, 0, 0, 1)";
    }
    else {
      gistogramColor = 'rgba(0, 0, 255, ' + Math.random().toString() + ')';
    }
    renderPlayerGistogram(ctx, names[i], times[i], gistogramColor, 40, Math.floor(150*times[i]/gistogramMaxTime), gistogramStartPoint);
    gistogramStartPoint.x += 90;
  }

}
