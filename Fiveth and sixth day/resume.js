var oTag = document.getElementById("change");
var styleLink = document.getElementsByTagName("link")[0];
var i = 1;
let time = document.getElementById('time');
oTag.onclick = function() {
        if (i == 4) {
            i = 1;
        }

        styleLink.href = "style_" + i + ".css";
        i++;
    }
    //根据当前时间问好
setInterval(greeting, 1000);
const week = ['一', '二', '三', '四', '五', '六', '日'];

function greeting() {
    let D = new Date();
    let g = "";
    let year = D.getFullYear();
    let month = D.getMonth();
    let date = D.getDate();
    let day = D.getDay();
    let hour = D.getHours();
    let minute = D.getMinutes();
    let second = D.getSeconds();
    switch (true) {
        case hour < 8:
            g = "早上好!";
            break;
        case hour < 11:
            g = "上午好！";
            break;
        case hour < 13:
            g = "中午好!";
            break;
        case hour < 18:
            g = "下午好!";
            break;
        case hour < 23:
            g = "晚上好!";
            break;
    };
    let str = g + "今天是:" + year + "年" + month + "月" + date + "日，" + "星期" + week[day] + "<br>" + "现在的时间是：" + hour + "时" + minute + "分" + second + "秒";
    time.innerHTML = str;
    console.log(hour);
}