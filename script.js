//script

//現在時間の取得
setInterval(() => {
const date = new Date();
const M = date.getMonth() + 1;
const D = date.getDate();
const d = date.getDay();
const h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

if(s < 10){
    s = s.toString();
    s = '0' + s ;
}else if(m < 10){
    m = m.toString();
    m = '0' + m ;
}

const elementDate = document.querySelector(".date");
const elementTime = document.querySelector(".time");

const day = ['日','月','火','水','木','金','土']; //曜日表示

elementDate.textContent = M + '/' + D + ' ' + day[d] + '曜日';
elementTime.textContent = h + ':' + m + ':' + s;

//平時と水曜日の日程
var stimetb  = [900,955,1050,1145,1305,1400,1455];
var etimetb  = [945,1040,1135,1230,1350,1445,1540];
var stimetbw = [850,945,1040,1135,1255,1350,1445,1540];
var etimetbw = [935,1030,1125,1220,1340,1435,1530,1625];

//各曜日の授業
var mon = ['数A','科人','芸術','保健','英論','地理','歴史'];
var tue = ['英C','数A','体育','家庭','情報','現国','数Ⅰ'];
var wed = ['数I','英論','言文','芸術','現国','英C','LHR','かしのは'];
var thu = ['歴史','数I','体育','言文','科人','数A','情報'];
var fri = ['体育','英C','家庭','言文','英論','現国','地理'];
var subs = ['日曜日いいいい', mon , tue , wed , thu , fri ,'土曜日いいいいい'];


const elementClasses = document.querySelector(".classes"); //本日の教科
elementClasses.textContent = subs[d];

const elementNxsbj = document.querySelector(".nextsbj");
const elementRem = document.querySelector(".rem");

var TimeCode = h.toString() + m.toString();

if(d == 3){
    if(TimeCode < stimetbw[0] && TimeCode > 840){
        elementNxsbj.textContent = subs[d][0]; 
    }else if(TimeCode >= etimetbw[0] && TimeCode < stimetbw[1]){
        elementNxsbj.textContent = subs[d][1];
        elementRem.textContent = 'あと'+((stimetb[1] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetbw[1] && TimeCode < stimetbw[2]){
        elementNxsbj.textContent = subs[d][2];
        elementRem.textContent = 'あと'+((stimetb[2] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetbw[2] && TimeCode < stimetbw[3]){
        elementNxsbj.textContent = subs[d][3];
        elementRem.textContent = 'あと'+((stimetb[3] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetbw[3] && TimeCode < stimetbw[4]){
        elementNxsbj.textContent = subs[d][4];
        elementRem.textContent = 'あと'+((stimetb[4] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetbw[4] && TimeCode < stimetbw[5]){
        elementNxsbj.textContent = subs[d][5];
        elementRem.textContent = 'あと'+((stimetb[5] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetbw[5] && TimeCode < stimetbw[6]){
        elementNxsbj.textContent = subs[d][6];
        elementRem.textContent = 'あと'+((stimetb[6] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetbw[6] && TimeCode < stimetbw[7]){
        elementNxsbj.textContent = subs[d][7];
        elementRem.textContent = 'あと'+((stimetb[7] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= 850 && TimeCode <= 1625){
        elementNxsbj.textContent = '授業中';
        elementRem.textContent = null ;
    }else{
        elementNxsbj.textContent = '時間外'
        elementRem.textContent = null ;
    }
}else{
    if(TimeCode < stimetb[0] && TimeCode > 850){
        elementNxsbj.textContent = subs[d][0]; 
    }else if(TimeCode >= etimetb[0] && TimeCode < stimetb[1]){
        elementNxsbj.textContent = subs[d][1];
        elementRem.textContent = 'あと'+((stimetb[1] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetb[1] && TimeCode < stimetb[2]){
        elementNxsbj.textContent = subs[d][2];
        elementRem.textContent = 'あと'+((stimetb[2] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetb[2] && TimeCode < stimetb[3]){
        elementNxsbj.textContent = subs[d][3];
        elementRem.textContent = 'あと'+((stimetb[3] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetb[3] && TimeCode < stimetb[4]){
        elementNxsbj.textContent = subs[d][4];
        elementRem.textContent = 'あと'+((stimetb[4] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetb[4] && TimeCode < stimetb[5]){
        elementNxsbj.textContent = subs[d][5];
        elementRem.textContent = 'あと'+((stimetb[5] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= etimetb[5] && TimeCode < stimetb[6]){
        elementNxsbj.textContent = subs[d][6];
        elementRem.textContent = 'あと'+((stimetb[6] - h*100 - m)*60 - s)+'秒';
    }else if(TimeCode >= 900 && TimeCode <= 1540){
        elementNxsbj.textContent = '授業中';
        elementRem.textContent = null ;
    }else{
        elementNxsbj.textContent = '時間外'
        elementRem.textContent = null ;
    }
}
},1000);
