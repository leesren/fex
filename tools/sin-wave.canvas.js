var c = document.getElementById("c");
var ctx = c.getContext("2d");

var c2 = document.getElementById("c2");
var ctx2 = c2.getContext("2d");

var c3 = document.getElementById("c3");
var ctx3 = c3.getContext("2d");

var cw = c.width = c2.width = c3.width = 314 * 2;
var ch = c.height = c2.height = c3.height = 200;
var cx = cw / 2,
    cy = ch / 2;


var rad = Math.PI / 180;
var w = 314 * 8;// 数量
var h = 120;// 高度
var amplitude = h;// 丰富度
var frequency = 0;// // 波长 值越大 波长越短
var phi = 0;
var frames = 0;
var frames2 = 0;
var frames3 = 0;

var cycle = 60;
var cycle1 = 60;
var cycle2 = 60;

var stopped = true;

ctx.lineWidth = 1;
ctx2.lineWidth = 1;
ctx3.lineWidth = 1;

function show(ctx, frequency, frames, offset, style, cycle, dir) {

    phi = frames / cycle;

    ctx.clearRect(0, 0, cw, ch);
    ctx.beginPath();
    //   ctx.strokeStyle = "hsl(" + frames + ",100%,50%)";// 设置样式
    ctx.strokeStyle = style;
    var points = [];
    for (var x = 0; x < w; x++) {
        y = Math.sin(x * frequency + dir * phi) * amplitude / 2 + amplitude / 2;
        ctx.lineTo(x, y + offset); // 40 = offset
        points.push({ x: x, y: y + offset });
    }
    ctx.stroke();
    ctx.beginPath();

    for (i = 0; i < points.length - 1; i++) {
        var item = points[i], item1 = points[0];
        ctx.rect(item.x, item.y, item1.x, 2 * h);
    }
    ctx.stroke();
}
function Draw() {
    frames += 1;
    var color = 'rgba(255,255,255,0.3)';
    // ctx,frequency 波长,frames 快慢,offset,style,cycle,dir
    show(ctx, 0.02, frames, 40, color, cycle, -1);

    frames2 += 1;
    color = 'rgba(255,255,255,0.2)';
    show(ctx2, 0.022, frames2, 40, color, cycle1, -1);

    frames3 += 2;
    color = 'rgba(255,255,255,0.3)';
    show(ctx3, 0.02, frames3, 40, color, cycle2, 1);

    requestId = window.requestAnimationFrame(Draw);
}
// requestId = window.requestAnimationFrame(Draw);
Draw()