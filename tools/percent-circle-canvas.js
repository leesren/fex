/**
 * ### canvas 绘制圆百分比
 * @param selector [number] canvas 选择器id
 * @param precent [number] 百分比
 * @param content [string|Array] 内容
 * @param config [Object] 配置选项 
 * @useage 看 README
 */
 export default function drawPercentCircle(selector, precent, content, config) {
    var defaultConfig = {
        startAngle: 180,// 起始的位置 默认是 180 可以是 从 0 开始 
        width: 150,// 画布的宽度
        height: 150,// 画布的高度
        lineWidth: 10,// 圆弧的粗细
        radius: 40,
        shadingColor: 'rgba(255,255,255,.4)',// 最底圆的颜色
        linearGradient: [// 渐变数组 
            { stop: 0, color: '#58bad7' },
            { stop: 0.25, color: '#fc424d' },
            { stop: 0.5, color: '#fcdd43' },
            { stop: 1, color: '#58bad7' },
        ],// 渐变配置
        font: {// 字体配置
            fontSize: '11pt',
            fontFamily: 'Calibri',
            textAlign: 'center',
            color: '#FFFFFF',
            marginTop: 17,
            fontSize_small: '9pt',
        },
        flagArc: {// 小白圆的样式
            radius: 6,// 半径
            lineColor: '#FFFFFF',
            lineWidth: 2, // 白色弧线的线宽
            scale: 0.9 // 比例关系
        }
    };
    function initConfit(data, obj) {
        // 初始化配置
        if (typeof data === "object") {
            for (var key in data) {
                if (typeof data[key] === 'object' && !(data[key] instanceof Array)) {
                    initConfit(data[key], obj[key]);
                } else {
                    obj[key] = data[key] || obj[key];
                }
            }
        }
    }
    //console.log('---------------');
    //console.log(defaultConfig,null,2); 

    initConfit(config, defaultConfig);
    //console.log(defaultConfig,null,2);
    //console.log('---------------');

    var c = document.getElementById(selector);
    // 设置canvas的宽和高
    c.width = defaultConfig.width;
    c.height = defaultConfig.height;


    var ctx = c.getContext("2d");
    var canvasCenterX = defaultConfig.width / 2;// 画布的中心
    var canvasCenterY = defaultConfig.height / 2;

    // 绘制底圆
    var startAngle = (0 + defaultConfig.startAngle) * Math.PI / 180;
    var endAngle = (precent * 360 / 100 + defaultConfig.startAngle) * Math.PI / 180;
    ctx.lineWidth = defaultConfig.lineWidth;
    ctx.beginPath();
    ctx.strokeStyle = defaultConfig.shadingColor;// 底圆的颜色
    ctx.arc(canvasCenterX, canvasCenterY, defaultConfig.radius, startAngle, 360);
    ctx.stroke();

    // 渐变 
    var grd = ctx.createLinearGradient(0, defaultConfig.height, defaultConfig.height, 0);
    //     grd.addColorStop(0, '#58bad7');
    //     grd.addColorStop(0.25, '#fc424d');
    //     grd.addColorStop(0.5, '#fcdd43');
    //     grd.addColorStop(1, '#58bad7');
    for (var i = 0; i < defaultConfig.linearGradient.length; i++) {
        var item = defaultConfig.linearGradient[i];
        grd.addColorStop(item.stop, item.color);
    }
    // 绘制圆弧
    ctx.strokeStyle = grd;
    ctx.lineCap = 'round';// 圆角设置
    ctx.beginPath();
    ctx.arc(canvasCenterX, canvasCenterY, defaultConfig.radius, startAngle, endAngle, false);
    ctx.stroke();

    function drawText(value) {
        ctx.fillText(value, canvasCenterX, canvasCenterY + defaultConfig.font.marginTop / 3);
    }
    // 绘制文字 
    ctx.font = defaultConfig.font.fontSize + ' ' + defaultConfig.font.fontFamily;
    ctx.textAlign = defaultConfig.font.textAlign;
    ctx.fillStyle = defaultConfig.font.color;
    // 文字设置
    if (typeof content === 'string') {
        drawText(content);
    }

    if (content instanceof Array) {
        var lineHeight = 0;
        if (content.length === 1) {
            drawText(content[0]);
        } else {
            for (j = 0; j < content.length; j++) {
                if (j > 0) {
                    ctx.font = defaultConfig.font.fontSize_small + ' ' + defaultConfig.font.fontFamily;
                }
                ctx.fillText(content[j], canvasCenterX, canvasCenterY + lineHeight);// 加上向上偏移量
                lineHeight += defaultConfig.font.marginTop;
            }
        }

    }

    var radius_m = defaultConfig.flagArc.radius;
    var deg = precent * 360 / 100;
    var centerX, centerY;
    if (defaultConfig.startAngle === 0) {
        // 绘制圆弧上的圆
        centerX = canvasCenterX + defaultConfig.radius * Math.cos((360 - deg) * Math.PI / 180);
        centerY = canvasCenterX - defaultConfig.radius * Math.sin((360 - deg) * Math.PI / 180);
    } else if (defaultConfig.startAngle === 180) { // 位置正好是上面 0的反向值
        console.log(deg, 360 - deg);
        centerX = canvasCenterX - defaultConfig.radius * Math.cos((360 - deg) * Math.PI / 180);
        centerY = canvasCenterX + defaultConfig.radius * Math.sin((360 - deg) * Math.PI / 180);
    }
    // 绘制标志圆的 底圆 
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius_m, 0, 2 * Math.PI, true);
    ctx.stroke();

    // 绘制标志圆的 弧线
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius_m * defaultConfig.flagArc.scale, 0, 2 * Math.PI, true);
    ctx.lineWidth = defaultConfig.flagArc.lineWidth;// 线宽
    ctx.strokeStyle = defaultConfig.flagArc.lineColor;
    ctx.stroke();
} 
/**
 * @useage 
    var cc = {
        shadingColor: 'rgba(255,255,255,.25)',// 最底圆的颜色 // 渐变配置
        radius: 48,
        font: {
            fontSize: '14pt'
        },
        linearGradient: [
            { stop: 0, color: '#00ff00' },
            { stop: 0.25, color: '#fc424d' },
            { stop: 0.5, color: '#fcdd43' },
            { stop: 1, color: '#00ff00' },
        ]
    };
    draw('c', 85, ['200人', '50%'], cc);// 画布的宽高， 角度【计算圆】,

 */
