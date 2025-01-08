//プルダウンメニュー
//let performanceSelect = document.getElementById('performance_select');
//performanceSelect.options[0].selected = true;

var performanceNowSelect;
let ledNow10FadeTime = 2000;
let totalPage = [ [] , [] , [] , [] , [] ];
let nowPerformanceNumber = 0;

function jsSetting(myFolderName,myOriginalName,dayMainThisPage,daySubThisPage,nightMainThisPage,nightSubThisPage,led10FadeTime = 2000) {
    let performanceOption = document.createElement('option');
    performanceOption.value = myFolderName;
    performanceOption.textContent = myOriginalName;
    
    performanceSelect.appendChild(performanceOption);

    totalPage[0][nowPerformanceNumber] = dayMainThisPage;
    totalPage[1][nowPerformanceNumber] = daySubThisPage;
    totalPage[2][nowPerformanceNumber] = nightMainThisPage;
    totalPage[3][nowPerformanceNumber] = nightSubThisPage;
    totalPage[4][nowPerformanceNumber] = led10FadeTime;

    nowPerformanceNumber++;

    /*window["performance"+myFolderName+"DayMainTotalPage"] = dayMainThisPage;
    window["performance"+myFolderName+"DaySubTotalPage"] = daySubThisPage;
    window["performance"+myFolderName+"NightMainTotalPage"] = nightMainThisPage;
    window["performance"+myFolderName+"NightSubTotalPage"] = nightSubThisPage;
    window["performance"+myFolderName+"led10FadeTime"] = led10FadeTime;*/
}

//jsページ設定
var mainNowPage = 1;
var subNowPage = 1;
var mainTotalPage = 1;
var subTotalPage = 1;
var dnNowSelect = 0;

let pageText1 = document.getElementById('maintotalpage');
let pageText2 = document.getElementById('subtotalpage');
let pageText3 = document.getElementById('mainnowpage');
let pageText4 = document.getElementById('subnowpage');
let pageText5 = document.getElementById('dn');

pageText1.innerHTML = mainTotalPage;
pageText2.innerHTML = subTotalPage;
pageText3.innerHTML = mainNowPage;
pageText4.innerHTML = subNowPage;
pageText5.innerHTML = "Day";

function dnScript() {
    mainNowPage = 1;
    subNowPage = 1;

    do {
        let whileFinish = 0;

        if ( whileFinish >= 10 ) {
            break;
        } else if ( mainTotalPage === 0 ) {
            whileFinish++;
            dnNowSelect = 1 - dnNowSelect;
        }

        if ( dnNowSelect === 0 ) {
            pageText5.innerHTML = "Day";

            mainTotalPage = totalPage[0][performanceSelect.selectedIndex];
            subTotalPage = totalPage[1][performanceSelect.selectedIndex];
            //eval("mainTotalPage = performance" + performanceSelect.value + "DayMainTotalPage;");
            //eval("subTotalPage = performance" + performanceSelect.value + "DaySubTotalPage;");
        } else {
            pageText5.innerHTML = "Night";

            mainTotalPage = totalPage[2][performanceSelect.selectedIndex];
            subTotalPage = totalPage[3][performanceSelect.selectedIndex];

            //eval("mainTotalPage = performance" + performanceSelect.value + "NightMainTotalPage;");
            //eval("subTotalPage = performance" + performanceSelect.value + "NightSubTotalPage;");
        }

    } while( mainTotalPage === 0 )

    pageText1.innerHTML = mainTotalPage;
    pageText2.innerHTML = subTotalPage;
    pageText3.innerHTML = mainNowPage;
    pageText4.innerHTML = subNowPage;
    
}

function characterLength(character) {
    let long = 2;

    switch ( character ) {
        case 'a': long = 0.55; break;
        case 'b': long = 0.58; break;
        case 'c': long = 0.52; break;
        case 'd': long = 0.58; break;
        case 'e': long = 0.56; break;
        case 'f': long = 0.34; break;
        case 'g': long = 0.55; break;
        case 'H': long = 0.75; break;
        case 'i': long = 0.27; break;
        case 'j': long = 0.3; break;
        case 'k': long = 0.53; break;
        case 'l': long = 0.27; break;
        case 'm': long = 0.86; break;
        case 'n': long = 0.58; break;
        case 'o': long = 0.56; break;
        case 'p': long = 0.58; break;
        case 'q': long = 0.58; break;
        case 'r': long = 0.37; break;
        case 's': long = 0.51; break;
        case 't': long = 0.35; break;
        case 'u': long = 0.58; break;
        case 'v': long = 0.49; break;
        case 'w': long = 0.77; break;
        case 'x': long = 0.49; break;
        case 'y': long = 0.49; break;
        case 'z': long = 0.46; break;
        case 'A': long = 0.65; break;
        case 'B': long = 0.68; break;
        case 'C': long = 0.68; break;
        case 'D': long = 0.74; break;
        case 'E': long = 0.62; break;
        case 'F': long = 0.61; break;
        case 'G': long = 0.73; break;
        case 'H': long = 0.75; break;
        case 'I': long = 0.3; break;
        case 'J': long = 0.4; break;
        case 'K': long = 0.69; break;
        case 'L': long = 0.6; break;
        case 'M': long = 0.92; break;
        case 'N': long = 0.75; break;
        case 'O': long = 0.73; break;
        case 'P': long = 0.66; break;
        case 'Q': long = 0.73; break;
        case 'R': long = 0.67; break;
        case 'S': long = 0.63; break;
        case 'T': long = 0.63; break;
        case 'U': long = 0.74; break;
        case 'V': long = 0.65; break;
        case 'W': long = 0.93; break;
        case 'X': long = 0.65; break;
        case 'Y': long = 0.65; break;
        case 'Z': long = 0.61; break;
        case '0': long = 0.56; break;
        case '1': long = 0.56; break;
        case '2': long = 0.56; break;
        case '3': long = 0.56; break;
        case '4': long = 0.56; break;
        case '5': long = 0.56; break;
        case '6': long = 0.56; break;
        case '7': long = 0.56; break;
        case '8': long = 0.56; break;
        case '9': long = 0.56; break;
        case '`': long = 0.5; break;
        case '~': long = 0.7; break;
        case '!': long = 0.34; break;
        case '@': long = 0.86; break;
        case '#': long = 0.58; break;
        case '$': long = 0.58; break;
        case '%': long = 0.8; break;
        case '^': long = 0.5; break;
        case '&': long = 0.72; break;
        case '*': long = 0.48; break;
        case '(': long = 0.38; break;
        case ')': long = 0.38; break;
        case '-': long = 0.43; break;
        case '_': long = 0.5; break;
        case '=': long = 0.72; break;
        case '+': long = 0.72; break;
        case '[': long = 0.38; break;
        case '{': long = 0.38; break;
        case ']': long = 0.38; break;
        case '}': long = 0.38; break;
        case '\\': long = 0.58; break;
        case '|': long = 0.38; break;
        case ';': long = 0.28; break;
        case ':': long = 0.28; break;
        case '\'': long = 0.22; break;
        case '"': long = 0.41; break;
        case ',': long = 0.26; break;
        case '<': long = 0.72; break;
        case '.': long = 0.26; break;
        case '>': long = 0.72; break;
        case '/': long = 0.48; break;
        case '?': long = 0.53; break;
        case ' ': long = 0.35; break;
        default: long = 1; break;
    }

    return long;
}
/*
const text = 'abcdefgHijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
const span = document.createElement('span');
for (let i = 0; i < text.length; i++) {
    span.style.display = 'inline-block';
    span.style.fontSize = '100px';
    span.style.fontFamily = 'Yu Gothic Medium';
    span.textContent = text[i];
    document.body.appendChild(span);
    //console.log(text[i]);
    console.log("case '" + text[i] + "': long = " + span.clientWidth / 100 + "; break;");
}*/

var subSelectStyle = 0;
var subCode = -1;
var insCode = 45;
var delCode = 0;
var ua = window.navigator.userAgent.toLowerCase();
if(ua.indexOf("mac os x") !== -1) {
    insCode = 124;
}

var ub = window.navigator.userAgent.toLowerCase();
if ( ub.indexOf("ipad") > -1 || ( ub.indexOf("macintosh") > -1 && "ontouchend" in document ) ) {
    subSelectStyle = 1;
    insCode = 8;
}

//ファンクションキー無効化
window.document.onkeydown = function(event){
    if(event.keyCode >= 112 && event.keyCode <= 123) {
        event.keyCode = null;
        event.returnValue = false;
    }
}

function performanceTitleSizeChange() {
    let nowSelectTitle = performanceSelect.options[performanceSelect.selectedIndex].innerText;

    //console.log(performanceSelect.style.fontSize);

    let nowLong = 0;
    //console.log(nowSelectTitle.length);
    for ( var i = 0 ; i < nowSelectTitle.length ; i++ ) {
        nowLong += characterLength(nowSelectTitle[i]);
        /*console.log(nowSelectTitle[i]);
        console.log(nowLong);*/
    }    

    //console.log(nowLong);

    let performanceTitleNowFontSize = nowLong * performanceTitleFontSize;
    //console.log(performanceTitleNowFontSize)
    if ( performanceTitleNowFontSize > performanceTitleWidth ) {//9.7
        performanceSelect.style.fontSize = performanceTitleFontSize / performanceTitleNowFontSize * performanceTitleWidth + "px";
    } else {
        performanceSelect.style.fontSize = performanceTitleFontSize + "px";
    }
}

//let performanceTitleFontSize = parseFloat(window.getComputedStyle(performanceSelect).getPropertyValue('font-size'));
//let performanceTitleWidth = performanceSelect.clientWidth - 33;
//console.log(performanceTitleFontSize)
//console.log(performanceTitleWidth)
function performanceChange(dnNowSelectNumber = 0) {
    dnNowSelect = dnNowSelectNumber;

    dnScript();

    performanceNowSelect = performanceSelect.value;

    ledNow10FadeTime = totalPage[4][performanceSelect.selectedIndex];
    //eval("ledNow10FadeTime = performance" + performanceSelect.value + "led10FadeTime;");

    performanceTitleSizeChange();
}

performanceSelect.addEventListener("change", function() {
    performanceChange();
});

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    //console.log(key);

    if ( subSelectStyle === 0 ) {
        if ( code >= 112 && code <= 123 ) subCode = code - 111;
        else if ( code === 27 ) subCode = 0;
        else subCode = -1;
    } else {
        if ( e.shiftKey ) {
            subCode = -1;
            var keyPic = [ '|' , '!' , '"' , '#' , '$' , '%' , '&' , '\'' , '(' , ')' , '0' , '=' , '~' ];
            for ( var i = 0 ; i <= 12 ; i++ ) {
                if ( key === keyPic[i] ) {
                    subCode = i;
                    break;
                }
            }
        } else {
            subCode = -1;
        }
    }

    if ( performanceNowSelect !== -1 ) {
        if ( key === '¥' ) { // \
            if ( mainNowPage < mainTotalPage ) {
                mainNowPage++;
            } else {
                mainNowPage = 1;
            }

            pageText3.innerHTML = mainNowPage;

        } else if ( !(e.metaKey) && code === insCode ) { // Ins
            if ( subNowPage < subTotalPage ) {
                subNowPage++;
            } else {
                subNowPage = 1;
            }

            pageText4.innerHTML = subNowPage;

        } else if ( subSelectStyle === 0 && code === 46 || subSelectStyle === 1 && e.metaKey && key === 'Backspace' ) { // Del
            dnNowSelect = 1 - dnNowSelect;

            dnScript();
        } else if ( code === 37 || code === 38 ) {
            let nowSelectedNumber = performanceSelect.selectedIndex - 1;
            if ( nowSelectedNumber === -1 ) nowSelectedNumber = performanceSelect.options.length - 1;

            performanceSelect.options[nowSelectedNumber].selected = true;

            performanceChange();
        } else if ( code === 39 || code === 40 ) {
            let nowSelectedNumber = performanceSelect.selectedIndex + 1;
            if ( nowSelectedNumber === performanceSelect.options.length ) nowSelectedNumber = 0;

            performanceSelect.options[nowSelectedNumber].selected = true;

            performanceChange();
        }
    }
});


//localStorage
/*
performanceSelect.addEventListener("click", function() {
    let selectNowNumber;
    for ( var i = 0 ; i < performanceSelect.length ; i++ ) {
        if ( performanceSelect.selectedOptions[i].value === performanceSelect.value ) selectNowNumber = i;
    }
    localStorage.saveKey = selectNowNumber;
});

performanceSelect.addEventListener("load", function() {
    let selectNowNumber = localStorage.saveKey;
    performanceSelect.options[selectNowNumber].selected = true;
});
*/

//時間取得
function nowTimeGet( startTime , fadeTime , useNumber = -1 , somethingSetInterval = 0 , somethingMyNumber = -1 , useChildrenNumber = -1 , somethingChildrenMyNumber = -1 ) {
    let nowTime = [];
    nowTime[0] = Date.now() - startTime;
    
    if ( somethingChildrenMyNumber !== -1 && ( useNumber !== somethingMyNumber || useChildrenNumber !== somethingChildrenMyNumber ) ) {
        clearInterval(somethingSetInterval);
    } else if ( useNumber !== -1 && useNumber !== somethingMyNumber ) {
        clearInterval(somethingSetInterval);
    }

    if ( nowTime[0] > fadeTime ) {
        nowTime[1] = nowTime[0] - fadeTime;
    } else {
        nowTime[1] = 0;
    }

    return nowTime;
}

function mod(i,j) {
    return ( i % j ) < 0 ? ( i % j ) + 0 + ( j < 0 ? -j : j ) : ( i % j + 0 );
}

//LED
var ledNumberInsideColor = [ [], [], [] ];
for ( var i = 0 ; i < 3 ; i++ ) {
    for ( var j = 0 ; j < ledNumberInside ; j++ ) {
        ledNumberInsideColor[i][j] = 0;
    }
}

var ledNumberOutsideColor = [ [], [], [] ];
for ( var i = 0 ; i < 3 ; i++ ) {
    for ( var j = 0 ; j < ledNumberOutside ; j++ ) {
        ledNumberOutsideColor[i][j] = 0;
    }
}

var ledUseNumber = 0;
var ledUseChildrenNumber = 0;
var ledNumberInsideFirstColor = [ [], [], [] ];
var ledNumberOutsideFirstColor = [ [], [], [] ];
let ledSetTimeout = [];
let ledActualSetTimeout;

function ledSetting(ledUseNowNumber = -1) {
    for ( var i = 0 ; i < 3 ; i++ ) {
        for ( var j = 0 ; j < ledNumberInside ; j++ ) {
            ledNumberInsideFirstColor[i][j] = ledNumberInsideColor[i][j];
        }
    }
    for ( var i = 0 ; i < 3 ; i++ ) {
        for ( var j = 0 ; j < ledNumberOutside ; j++ ) {
            ledNumberOutsideFirstColor[i][j] = ledNumberOutsideColor[i][j];
        }
    }

    if ( ledUseNowNumber === -1 ) {
        ledUseChildrenNumber = 0;

        for ( var i = 0 ; i < ledSetTimeout.length ; i++ ) {
            clearTimeout(ledSetTimeout[i]);
        }
        ledSetTimeout = [];
        clearTimeout(ledActualSetTimeout);

        ledUseNumber++;
        return ledUseNumber;
    } else if ( ledUseNowNumber === ledUseNumber ) {
        ledUseChildrenNumber++;
        return ledUseChildrenNumber;
    } else {
        return -1;
    }
}

function ledColorArrayUpdate(ledIO,ledNumber,colorRed,colorGreen,colorBlue) {
    if ( ledIO === 1 ) {
        ledNumberInsideColor[0][ledNumber-1] = colorRed;
        ledNumberInsideColor[1][ledNumber-1] = colorGreen;
        ledNumberInsideColor[2][ledNumber-1] = colorBlue;
    } else {
        ledNumberOutsideColor[0][ledNumber-1] = colorRed;
        ledNumberOutsideColor[1][ledNumber-1] = colorGreen;
        ledNumberOutsideColor[2][ledNumber-1] = colorBlue;
    }
}

function ledColorChange(ledIO,ledNumber,colorRed,colorGreen,colorBlue,nowTime,fadeTime,sustainable = 1,ledSetInterval = 0) {
    let changeColor = [], maxColor = 0;
    changeColor[0] = colorRed;
    changeColor[1] = colorGreen;
    changeColor[2] = colorBlue;

    if ( nowTime <= fadeTime ) {
        if ( ledIO === 1 ) {
            changeColor[0] = ledNumberInsideFirstColor[0][ledNumber-1] + ( changeColor[0] - ledNumberInsideFirstColor[0][ledNumber-1] ) / fadeTime * nowTime;
            changeColor[1] = ledNumberInsideFirstColor[1][ledNumber-1] + ( changeColor[1] - ledNumberInsideFirstColor[1][ledNumber-1] ) / fadeTime * nowTime;
            changeColor[2] = ledNumberInsideFirstColor[2][ledNumber-1] + ( changeColor[2] - ledNumberInsideFirstColor[2][ledNumber-1] ) / fadeTime * nowTime;
        } else {
            changeColor[0] = ledNumberOutsideFirstColor[0][ledNumber-1] + ( changeColor[0] - ledNumberOutsideFirstColor[0][ledNumber-1] ) / fadeTime * nowTime;
            changeColor[1] = ledNumberOutsideFirstColor[1][ledNumber-1] + ( changeColor[1] - ledNumberOutsideFirstColor[1][ledNumber-1] ) / fadeTime * nowTime;
            changeColor[2] = ledNumberOutsideFirstColor[2][ledNumber-1] + ( changeColor[2] - ledNumberOutsideFirstColor[2][ledNumber-1] ) / fadeTime * nowTime;
        }
    } else if ( nowTime > fadeTime + 1000 && sustainable === 0 && ledSetInterval !== 0 ) {
        clearInterval(ledSetInterval);
    }

    for ( var i = 0 ; i < 3 ; i++ ) {
        if ( changeColor[i] > maxColor ) maxColor = changeColor[i];
    }
    ledColorArrayUpdate(ledIO,ledNumber,changeColor[0],changeColor[1],changeColor[2]);

    if ( maxColor < 255 ) {
        for ( var i = 0 ; i < 3 ; i++ ) changeColor[i] *= ( 255 / maxColor );
    }

    let ledCoordinateNumber = document.getElementById(`LED_${ledIO}-${ledNumber}`);
    ledCoordinateNumber.style.backgroundColor = "rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ")";
    ledCoordinateNumber.style.opacity = Math.sin( maxColor / 255 / 2 * Math.PI );
    //ledCoordinateNumber.style.filter = "brightness(" + ( 100 + 150 / 255 * ( 255 - maxColor ) ) + "%)";
}

//水中照明
var waterLightUseNumber = 0;
var waterLightUseChildrenNumber = 0;
var waterLightColor = [ [], [], [] ];
var waterLightFirstColor = [ [], [], [] ];
var waterLightSetTimeout = [];
let waterLightActualSetTimeout;

for ( var i = 0 ; i < 3 ; i++ ) {
    for ( var j = 0 ; j < waterLightNumber ; j++ ) {
        waterLightColor[i][j] = 0;
    }
}

function waterLightSetting(waterLightUseNowNumber = -1) {
    for ( var i = 0 ; i < 3 ; i++ ) {
        for ( var j = 0 ; j < waterLightNumber ; j++ ) {
            waterLightFirstColor[i][j] = waterLightColor[i][j];
        }
    }

    if ( waterLightUseNowNumber === -1 ) {
        waterLightUseChildrenNumber = 0;

        for ( var i = 0 ; i < waterLightSetTimeout.length ; i++ ) {
            clearTimeout(waterLightSetTimeout[i]);
        }
        waterLightSetTimeout = [];
        clearTimeout(waterLightActualSetTimeout);

        waterLightUseNumber++;
        return waterLightUseNumber;
    } else if ( waterLightUseNowNumber === waterLightUseNumber ) {
        waterLightUseChildrenNumber++;
        return waterLightUseChildrenNumber;
    } else {
        return -1;
    }
}

function waterLightColorArrayUpdate(waterLightNowNumber,colorRed,colorGreen,colorBlue) {
    waterLightColor[0][waterLightNowNumber-1] = colorRed;
    waterLightColor[1][waterLightNowNumber-1] = colorGreen;
    waterLightColor[2][waterLightNowNumber-1] = colorBlue;
}

function waterLightColorChange(waterLightNowNumber,colorRed,colorGreen,colorBlue,nowTime,fadeTime,sustainable = 1,waterLightSetInterval = 0) {
    if ( nowTime <= fadeTime ) {
        colorRed = waterLightFirstColor[0][waterLightNowNumber-1] + ( colorRed - waterLightFirstColor[0][waterLightNowNumber-1] ) / fadeTime * nowTime;
        colorGreen = waterLightFirstColor[1][waterLightNowNumber-1] + ( colorGreen - waterLightFirstColor[1][waterLightNowNumber-1] ) / fadeTime * nowTime;
        colorBlue = waterLightFirstColor[2][waterLightNowNumber-1] + ( colorBlue - waterLightFirstColor[2][waterLightNowNumber-1] ) / fadeTime * nowTime;
    } else if ( sustainable === 0 && waterLightSetInterval !== 0 ) {
        clearInterval(waterLightSetInterval);
    }

    let waterLightCoordinateNumber = document.getElementById(`WATER_LIGHT_${waterLightNowNumber}`);
    waterLightCoordinateNumber.style.background = "linear-gradient(rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ") , transparent)";
    waterLightColorArrayUpdate(waterLightNowNumber,colorRed,colorGreen,colorBlue);
}

//白色照明
var whiteLightArray = [];
for ( var i = 0 ; i < whiteLightNumber ; i++ ) {
    whiteLightArray[i] = 1;
}

const whiteLightHalfArray = [ 1 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 1 , 0 , 0 ];

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( e.altKey ) {
        performanceNowSelect = -1;
        if ( key === '1' || key === '¡' ) {
            var i = 1;
            var whiteLightSetInterval = setInterval(function() {
                for ( var j = i ; j <= whiteLightNumber ; j++ ) {
                    if ( whiteLightArray[j-1] === 1 ) {
                        let whiteLightCoordinateNumber = document.getElementById(`WHITE_LIGHT_${j}`);
                        whiteLightCoordinateNumber.style.opacity = 0;
                        whiteLightArray[j-1] = 0;
                        i = j + 1;
                        break;
                    } else if ( j === whiteLightNumber ) {
                        clearInterval(whiteLightSetInterval);
                    }
                }
            },440);
        } else if ( key === '2' || key === '™' ) {
            var i = 1;
            var whiteLightSetInterval = setInterval(function() {
                for ( var j = i ; j <= whiteLightNumber ; j++ ) {
                    if ( whiteLightHalfArray[j-1] === 0 && whiteLightArray[j-1] === 1 ) {
                        let whiteLightCoordinateNumber = document.getElementById(`WHITE_LIGHT_${j}`);
                        whiteLightCoordinateNumber.style.opacity = 0;
                        whiteLightArray[j-1] = 0;
                        i = j + 1;
                        break;
                    } else if ( whiteLightHalfArray[j-1] === 1 && whiteLightArray[j-1] === 0 ) {
                        let whiteLightCoordinateNumber = document.getElementById(`WHITE_LIGHT_${j}`);
                        whiteLightCoordinateNumber.style.opacity = 1;
                        whiteLightArray[j-1] = 1;
                        i = j + 1;
                        break;
                    } else if ( j === whiteLightNumber ) {
                        clearInterval(whiteLightSetInterval);
                    }
                }
            },440);
        } else if ( key === '3' || key === '£' ) {
            var i = 1;
            var whiteLightSetInterval = setInterval(function() {
                for ( var j = i ; j <= whiteLightNumber ; j++ ) {
                    if ( whiteLightArray[j-1] === 0 ) {
                        let whiteLightCoordinateNumber = document.getElementById(`WHITE_LIGHT_${j}`);
                        whiteLightCoordinateNumber.style.opacity = 1;
                        whiteLightArray[j-1] = 1;
                        i = j + 1;
                        break;
                    } else if ( j === whiteLightNumber ) {
                        clearInterval(whiteLightSetInterval);
                    }
                }
            },440);
        } else {
            var whiteLightNowNumber;

            switch ( key ) {
                case '4': whiteLightNowNumber = 1; break;
                case '5': whiteLightNowNumber = 2; break;
                case '6': whiteLightNowNumber = 3; break;
                case '7': whiteLightNowNumber = 4; break;
                case '8': whiteLightNowNumber = 5; break;
                case '9': whiteLightNowNumber = 6; break;
                case '0': whiteLightNowNumber = 7; break;
                case '-': whiteLightNowNumber = 8; break;
                case '^': whiteLightNowNumber = 9; break;
                case 'q': whiteLightNowNumber = 10; break;
                case 'w': whiteLightNowNumber = 11; break;
                case 'r': whiteLightNowNumber = 12; break;
                case 't': whiteLightNowNumber = 13; break;
                case 'y': whiteLightNowNumber = 14; break;
                case 'o': whiteLightNowNumber = 15; break;
                case 'p': whiteLightNowNumber = 16; break;
            }

            let whiteLightCoordinateNumber = document.getElementById(`WHITE_LIGHT_${whiteLightNowNumber}`);
            if ( whiteLightArray[whiteLightNowNumber-1] === 0 ) whiteLightCoordinateNumber.style.opacity = 1;
            else whiteLightCoordinateNumber.style.opacity = 0;

            whiteLightArray[whiteLightNowNumber-1] = 1 - whiteLightArray[whiteLightNowNumber-1];
        }
    } else if ( e.ctrlKey ) {
        performanceNowSelect = -1;
    } else {
        performanceNowSelect = performanceSelect.value;
    }
});

//パーライト
var parLightColor = [ [], [], [] ];
for ( var i = 0 ; i < 3 ; i++ ) {
    for ( var j = 0 ; j < parLightNumber ; j++ ) {
        parLightColor[i][j] = 0;
    }
}

var parLightUseNumber = 0;
let parLightAnimateOFF = 0;

function parLightColorArrayUpdate(parLightNowNumber,colorRed,colorGreen,colorBlue) {
    parLightColor[0][parLightNowNumber-1] = colorRed;
    parLightColor[1][parLightNowNumber-1] = colorGreen;
    parLightColor[2][parLightNowNumber-1] = colorBlue;
}

function parLightColorFadeChange(parLightNowNumber,colorRed,colorGreen,colorBlue,nowTime,fadeTime,parLightSetInterval) {

    if ( parLightUseNumber > 0 ) {
        parLightUseNumber = 0;
        parLightAnimateOFF = 1;
    }

    if ( nowTime > fadeTime ) {
        parLightColorArrayUpdate(parLightNowNumber,colorRed,colorGreen,colorBlue);        
        parLightAnimateOFF = 0;
        clearInterval(parLightSetInterval);
    } else if ( parLightAnimateOFF === 1 )  {
        
    } else {
        let changeTime = Math.sin( nowTime / fadeTime / 2 * Math.PI );
        colorRed = parLightColor[0][parLightNowNumber-1] + ( colorRed - parLightColor[0][parLightNowNumber-1] ) * changeTime;/// fadeTime * nowTime;
        colorGreen = parLightColor[1][parLightNowNumber-1] + ( colorGreen - parLightColor[1][parLightNowNumber-1] ) * changeTime;
        colorBlue = parLightColor[2][parLightNowNumber-1] + ( colorBlue - parLightColor[2][parLightNowNumber-1] ) * changeTime;
    }

    let parLightShadowCoordinateNumber = document.getElementById(`PAR_LIGHT_PARENT_${parLightNowNumber}`);
    let parLightCoordinateNumber = document.getElementById(`PAR_LIGHT_${parLightNowNumber}`);
    parLightCoordinateNumber.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    parLightShadowCoordinateNumber.style.filter = "drop-shadow( 0 0 " + parLightDiameter * 0.4 +"px rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ") )";

}

function parLightSetting() {
    parLightUseNumber++;
    return parLightUseNumber;
}

function parLightColorChange(parLightNowNumber,colorRed,colorGreen,colorBlue,parLightMyNumber,parLightSetInterval) {
    let parLightShadowCoordinateNumber = document.getElementById(`PAR_LIGHT_PARENT_${parLightNowNumber}`);
    let parLightCoordinateNumber = document.getElementById(`PAR_LIGHT_${parLightNowNumber}`);

    if ( parLightUseNumber !== parLightMyNumber ) {
        clearInterval(parLightSetInterval);
    }

    parLightCoordinateNumber.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    parLightShadowCoordinateNumber.style.filter = "drop-shadow( 0 0 8px rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ") )";
}

//スポットライト
var spotLightAct = [];
for ( var i = 0 ; i < spotLightNumber ; i++ ) {
    spotLightAct[i] = 1;
}

var spotLightShadowStrength = 0;
var spotLightUseNumber = 0;
var spotLightShadowProportion;
var spotLightProportion = [];
var spotON = 0; //f4用

var spotLightStrength = [];
for ( var i = 0 ; i < spotLightNumber ; i++ ) {
    spotLightStrength[i] = 0;
}

function spotLightChange(spotLightChangeStrength,spotLightChangeTime,startTime,spotLightArray = spotLightAct) {
    spotLightUseNumber = 1 - spotLightUseNumber;
    let spotLightMyNumber = spotLightUseNumber;

    let spotLightShadowFirstStrength = spotLightShadowStrength;
    let spotLightFirstStrength = [];
    for ( var i = 0 ; i < spotLightNumber ; i++ ) {
        spotLightFirstStrength[i] = spotLightStrength[i];
    }    

    let spotLightSetInterval = setInterval( function() {
        let nowTime = Date.now() - startTime;

        if ( spotLightMyNumber !== spotLightUseNumber ) {
            spotLightShadowStrength = spotLightShadowProportion;
            for ( var i = 0 ; i < spotLightNumber ; i++ ) {
                spotLightStrength[i] = spotLightProportion[i];
            }
            clearInterval(spotLightSetInterval);
        } else if ( nowTime <= spotLightChangeTime && spotLightChangeStrength >=0 && spotLightChangeStrength <= 1 ) {
            spotLightShadowProportion = spotLightShadowFirstStrength + ( spotLightChangeStrength - spotLightShadowFirstStrength ) / spotLightChangeTime * nowTime;
            let spotLightShadowCoordinate = document.getElementById(`SPOT_LIGHT`);
            spotLightShadowCoordinate.style.filter = "drop-shadow( 0  0 " + spotLightDiameter / 2 * Math.sin(spotLightShadowProportion/2*Math.PI) + "px #FFDC96 )";

            for ( var i = 1 ; i <= spotLightNumber ; i++ ) {
                var spotLightNowChangeStrength = spotLightChangeStrength;
                if ( spotLightArray[i-1] === 0 ) {
                    spotLightNowChangeStrength = 0;
                }
                spotLightProportion[i-1] = spotLightFirstStrength[i-1] + ( spotLightNowChangeStrength - spotLightFirstStrength[i-1] ) / spotLightChangeTime * nowTime;
                let spotLightCoordinateNumber = document.getElementById(`SPOT_LIGHT_${i}`);
                spotLightCoordinateNumber.style.opacity = 1;
                spotLightCoordinateNumber.style.height = spotLightDiameter * Math.sin(spotLightProportion[i-1]/2*Math.PI) + "px";
                spotLightCoordinateNumber.style.width = spotLightDiameter * Math.sin(spotLightProportion[i-1]/2*Math.PI) + "px";
            }

            spotLightShadowStrength = spotLightShadowProportion;
            for ( var i = 0 ; i < spotLightNumber ; i++ ) {
                spotLightStrength[i] = spotLightProportion[i];
            }
        } else {
            spotLightShadowStrength = spotLightChangeStrength;
            for ( var i = 0 ; i < spotLightNumber ; i++ ) {
                let spotLightCoordinateNumber = document.getElementById(`SPOT_LIGHT_${i+1}`);

                if ( spotLightArray[i] === 1 ) {
                    spotLightStrength[i] = spotLightChangeStrength;
                    if ( spotLightChangeStrength === 0 ) spotLightCoordinateNumber.style.opacity = 0;
                } else {
                    spotLightCoordinateNumber.style.opacity = 0;
                    spotLightStrength[i] = 0;
                }
            }
            clearInterval(spotLightSetInterval);
        }
    });
}

//客席照明
var audienceLightStrength = 1;
var audienceLightUseNumber = 0;
var audienceON = 1; //f2用
let audienceLightSetTimeout = [];

function audienceLightChange(audienceLightChangeStrength,audienceLightChangeTime,startTime,seTimeoutStop = 1) {
    if ( seTimeoutStop === 1 ) {
        for ( var i = 0 ; i < audienceLightSetTimeout.length ; i++ ) clearTimeout(audienceLightSetTimeout[i]);

        audienceLightSetTimeout = [];
    }
    
    audienceLightUseNumber = 1 - audienceLightUseNumber;
    let audienceLightMyNumber = audienceLightUseNumber;

    let audienceLightFirstStrength = audienceLightStrength;

    let audienceLightSetInterval = setInterval( function() {
        var nowTime = Date.now() - startTime;
        if ( audienceLightMyNumber !== audienceLightUseNumber ) {
            audienceLightStrength = audienceLightChangeStrength;
            clearInterval(audienceLightSetInterval);
        } else if ( nowTime <= audienceLightChangeTime && audienceLightChangeStrength >=0 && audienceLightChangeStrength <= 1 ) {
            var audienceLightProportion = audienceLightFirstStrength + ( audienceLightChangeStrength - audienceLightFirstStrength ) / audienceLightChangeTime * nowTime;
            let audienceLightShadowCoordinate = document.getElementById(`AUDIENCE_LIGHT`);
            audienceLightShadowCoordinate.style.filter = "drop-shadow( 0  0 " + audienceLightDiameter / 2 * Math.sin(audienceLightProportion/2*Math.PI) + "px #FFDC96 )";

            for ( var i = 1 ; i <= audienceLightNumber ; i++ ) {
                let audienceLightCoordinateNumber = document.getElementById(`AUDIENCE_LIGHT_${i}`);
                audienceLightCoordinateNumber.style.opacity = 1;
                audienceLightCoordinateNumber.style.height = audienceLightDiameter * Math.sin(audienceLightProportion/2*Math.PI) + "px";
                audienceLightCoordinateNumber.style.width = audienceLightDiameter * Math.sin(audienceLightProportion/2*Math.PI) + "px";
            }

            audienceLightStrength = audienceLightProportion;
        } else {
            audienceLightStrength = audienceLightChangeStrength;
            if ( audienceLightChangeStrength === 0 ) {
                for ( var i = 1 ; i <= audienceLightNumber ; i++ ) {
                    let audienceLightCoordinateNumber = document.getElementById(`AUDIENCE_LIGHT_${i}`);
                    audienceLightCoordinateNumber.style.opacity = 0;
                }
            }
            clearInterval(audienceLightSetInterval);
        }
    });
}

//ステージ照明
var stageLightStrength = 0;
var stageLightUseNumber = 0;
var stageON = 0; //f3用

function stageLightChange(stageLightChangeStrength,stageLightChangeTime,startTime) {
    stageLightUseNumber = 1 - stageLightUseNumber;
    let stageLightMyNumber = stageLightUseNumber;

    let stageLightFirstStrength = stageLightStrength;

    let stageLightSetInterval = setInterval( function () {
        var nowTime = Date.now() - startTime;
        if ( stageLightMyNumber !== stageLightUseNumber ) {
            stageLightStrength = stageLightChangeStrength;
            clearInterval(stageLightSetInterval);
        } else if ( nowTime <= stageLightChangeTime && stageLightChangeStrength >=0 && stageLightChangeStrength <= 1 ) {
            var stageLightProportion = stageLightFirstStrength + ( stageLightChangeStrength - stageLightFirstStrength ) / stageLightChangeTime * nowTime;
            let stageLightShadowCoordinate = document.getElementById(`STAGE_LIGHT`);
            stageLightShadowCoordinate.style.filter = "drop-shadow( 0  0 " + stageLightDiameter / 2 * Math.sin(stageLightProportion/2*Math.PI) + "px #FFDC96 )";

            for ( var i = 1 ; i <= 2 ; i++ ) {
                let stageLightCoordinateNumber = document.getElementById(`STAGE_LIGHT_${i}`);
                stageLightCoordinateNumber.style.opacity = 1;
                stageLightCoordinateNumber.style.height = stageLightDiameter * Math.sin(stageLightProportion/2*Math.PI) + "px";
                stageLightCoordinateNumber.style.width = stageLightDiameter * Math.sin(stageLightProportion/2*Math.PI) + "px";
            }

            stageLightStrength = stageLightProportion;
        } else {
            stageLightStrength = stageLightChangeStrength;
            if ( stageLightChangeStrength === 0 ) {
                for ( var i = 1 ; i <= 2 ; i++ ) {
                    let stageLightCoordinateNumber = document.getElementById(`STAGE_LIGHT_${i}`);
                    stageLightCoordinateNumber.style.opacity = 0;
                }
            }
            clearInterval(stageLightSetInterval);
        }
    });
}

//噴水
var waterCannonAngle = [];
var waterCannonFirstAngle = [];
var waterCannonUseNumber = 0;
var waterCannonSetTimeout = [];
for ( var i = 0 ; i < waterCannonLightNumber ; i++ ) {
    waterCannonAngle[i] = 0;
}

function waterCannonAngleChange(waterCannonNowNumber,waterCannonNowAngle,waterCannonChangeTime = 0,nowTime = 0) {
    let waterCannonCoordinateNumber = document.getElementById(`WATER_CANNON_${waterCannonNowNumber}`);
    if ( waterCannonChangeTime !== 0 ) {
        let waterCannonProportion = ( waterCannonNowAngle - waterCannonFirstAngle[waterCannonNowNumber-1] ) / waterCannonChangeTime;
        /*if ( waterCannonProportion < -0.01 ) {
            waterCannonProportion = -0.01;
        }*/
        waterCannonCoordinateNumber.style.height = ( waterCannonFirstAngle[waterCannonNowNumber-1] + waterCannonProportion * nowTime ) / 90 * 70 + "%";
        waterCannonCoordinateNumber.style.width = ( waterCannonFirstAngle[waterCannonNowNumber-1] + waterCannonProportion * nowTime ) / 90 * 70 + "%";
        waterCannonAngle[waterCannonNowNumber-1] = waterCannonFirstAngle[waterCannonNowNumber-1] + waterCannonProportion * nowTime;
    } else {
        waterCannonCoordinateNumber.style.height = waterCannonNowAngle / 90 * 70 + "%";
        waterCannonCoordinateNumber.style.width = waterCannonNowAngle / 90 * 70 + "%";
        waterCannonAngle[waterCannonNowNumber-1] = waterCannonNowAngle;
    }
}

function waterCannonColorChange(waterCannonNowNumber,colorRed,colorGreen,colorBlue) {
    let waterCannonLightCoordinateNumber = document.getElementById(`WATER_CANNON_LIGHT_${waterCannonNowNumber}`);
    waterCannonLightCoordinateNumber.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
}

function waterCannonJet(waterCannonNowNumber,OnOff,waterCannonMyNumber) {
    if ( waterCannonMyNumber === waterCannonUseNumber ) {
        let waterCannonCoordinateNumber = document.getElementById(`WATER_CANNON_${waterCannonNowNumber}`);
        let waterCannonJetColor = OnOff * 150 + 50;
        waterCannonCoordinateNumber.style.backgroundColor = "rgb(" + waterCannonJetColor + "," + waterCannonJetColor + "," + waterCannonJetColor + ")";
    }
}

function waterCannonSetting() {
    for ( var i = 0 ; i < waterCannonSetTimeout.length ; i++ ) {
        clearTimeout(waterCannonSetTimeout[i]);
    }
    waterCannonSetTimeout = [];

    for ( i = 0 ; i < waterCannonLightNumber ; i++ ) {
        waterCannonFirstAngle[i] = waterCannonAngle[i];
        waterCannonColorChange(i+1,0,0,0);
        waterCannonJet(i+1,0,waterCannonUseNumber);
    }

    waterCannonUseNumber++;
    return waterCannonUseNumber;
}

function waterCannonOFF() {
    for ( i = 1 ; i <= waterCannonLightNumber ; i++ ) {
        waterCannonAngleChange(i,0);
        waterCannonColorChange(i,0,0,0);
        waterCannonJet(i,0,waterCannonUseNumber);
    }
}

//ムービングライト
var movingLightInsideAngle = [ [] , [] ];
var movingLightOutsideAngle = [ [] , [] ];
var movingLightInsideFirstAngle = [ [] , [] ];
var movingLightOutsideFirstAngle = [ [] , [] ];
var movingLightUseNumber = 0;
var movingLightRotateUseNumber = 0;
var movingLightInsideImgType = [];
var movingLightOutsideImgType = [];
var movingLightInsideColor = [ [] , [] , [] , [] ];
var movingLightOutsideColor = [ [] , [] , [] , [] ];
var movingLightInsideFirstColor = [ [] , [] , [] , [] ];
var movingLightOutsideFirstColor = [ [] , [] , [] , [] ];
var movingLightInsideTripleType = [ [] , [] ];
var movingLightOutsideTripleType = [ [] , [] ];
var movingLightInsideRepresentGradientColor = [ [] , [] , [] ];
var movingLightOutsideRepresentGradientColor = [ [] , [] , [] ];
var movingLightInsidePictureSize = [];
var movingLightOutsidePictureSize = [];
var movingLightOutsideFirstPictureSize = [];
var movingLightInsideBrightness = [];
var movingLightOutsideBrightness = [];
var movingLightInsideOldColor = [ [] , [] , [] , [] ];
var movingLightInsideColorChangeStartTime = [];
var movingLightOutsideOldColor = [ [] , [] , [] , [] ];
var movingLightOutsideColorChangeStartTime = [];
var movingLightInsideDoublePictureON = [ 0 , 0 , 0 , 0 ];
var movingLightOutsideDoublePictureON = [ 0 , 0 , 0 , 0 , 0 ];
var movingLightOFFON = 0;

for ( var i = 0 ; i < movingLightInsideNumber ; i++ ) {
    for ( var j = 0 ; j < 2 ; j++ ) movingLightInsideAngle[j][i] = 0;

    for ( var j = 0 ; j < 4 ; j++ ) movingLightInsideColor[j][i] = 0;
}
for ( var i = 0 ; i < movingLightOutsideNumber ; i++ ) {
    for ( var j = 0 ; j < 2 ; j++ ) movingLightOutsideAngle[j][i] = 0;

    for ( var j = 0 ; j < 4 ; j++ ) movingLightOutsideColor[j][i] = 0;
}

function movingLightSetting(movingLightNowUseNumber = "nothing",movingLightOFFMode = 1) {
    for ( var i = 0 ; i < movingLightInsideNumber ; i++ ) {
        for ( var j = 0 ; j < 2 ; j++ ) {
            movingLightInsideFirstAngle[j][i] = movingLightInsideAngle[j][i];
        }
        for ( var j = 0 ; j < 4 ; j++ ) {
            movingLightInsideFirstColor[j][i] = movingLightInsideColor[j][i];
        }
    }
    for ( var i = 0 ; i < movingLightOutsideNumber ; i++ ) {
        movingLightOutsideFirstPictureSize[i] = movingLightOutsidePictureSize[i];
        for ( var j = 0 ; j < 2 ; j++ ) {
            movingLightOutsideFirstAngle[j][i] = movingLightOutsideAngle[j][i];
        }
        for ( var j = 0 ; j < 4 ; j++ ) {
            movingLightOutsideFirstColor[j][i] = movingLightOutsideColor[j][i];
        }
    }

    if ( movingLightNowUseNumber === "nothing" ) {
        movingLightUseNumber++;
        if ( movingLightOFFMode === 1 ) movingLightRotateUseNumber = movingLightUseNumber;
        return movingLightUseNumber;
    } else if ( movingLightNowUseNumber === 0 ) {
        if ( movingLightOFFMode === 1 ) movingLightRotateUseNumber = movingLightUseNumber;
    } else {
        movingLightUseNumber++;
        if ( movingLightOFFMode === 1 ) movingLightRotateUseNumber = movingLightUseNumber;
        let movingLightKeyNumber = movingLightUseNumber;
        let movingLightClearTimeout = setInterval( function() {
            if ( movingLightKeyNumber !== movingLightUseNumber ) {
                for ( var i = 0 ; i < movingLightNowUseNumber.length ; i++ ) {
                    clearTimeout(movingLightNowUseNumber[i]);
                }
                clearInterval(movingLightClearTimeout);
            }
        } );
        return movingLightUseNumber;
    }
}

function movingLightOFF() {
    let startTime = Date.now();
    let movingLightMyNumber = movingLightSetting();
    let movingLightFadeTime = 1500;
    let movingLightSetTimeoutDelay = 0;
    movingLightOFFON = 1;

    let movingLightInsideOFFColor = [ [] , [] , [] , [] ];
    let movingLightOutsideOFFColor = [ [] , [] , [] , [] ];

    for ( var i = 0 ; i < movingLightInsideNumber ; i++ ) {
        for ( var j = 0 ; j < 4 ; j++ ) {
            movingLightInsideOFFColor[j][i] = movingLightInsideFirstColor[j][i];
        }

        if ( movingLightInsideDoublePictureON[i] === 0 ) {
            if ( movingLightInsideImgType[i] >= 0 ) {
                movingLightPictureChange(1,i+1,0,movingLightInsidePictureSize[i]);
            } else {
                movingLightPictureChange(1,i+1,0,( 50 - movingLightInsideTripleType[0][i] / 2 ) / 100 * movingLightInsideTripleType[1][i] * 2 );/// movingLightInsidePictureSize[i] * 100);
            }
        } else {
            movingLightSetTimeoutDelay = 500;
            movingLightInsideDoublePictureON[i] = 0;
            for ( var j = 0 ; j < 3 ; j++ ) movingLightInsideOFFColor[j][i] = 255;
            movingLightInsideOFFColor[3][i] = 1;
        }
    }

    for ( var i = 0 ; i < movingLightOutsideNumber ; i++ ) {
        for ( var j = 0 ; j < 4 ; j++ ) {
            movingLightOutsideOFFColor[j][i] = movingLightOutsideFirstColor[j][i];
        }

        if ( movingLightOutsideDoublePictureON[i] === 0 ) {
            if ( movingLightOutsideImgType[i] >= 0 ) {
                movingLightPictureChange(2,i+1,0,movingLightOutsidePictureSize[i]);
            } else {
                movingLightPictureChange(2,i+1,0,( 50 - movingLightOutsideTripleType[0][i] / 2 ) / 100 * movingLightOutsideTripleType[1][i] * 2 );// / movingLightOutsidePictureSize[i] * 100);
            }
        } else {
            movingLightSetTimeoutDelay = 500;
            movingLightOutsideDoublePictureON[i] = 0;
            for ( var j = 0 ; j < 3 ; j++ ) movingLightOutsideOFFColor[j][i] = 255;
            movingLightOutsideOFFColor[3][i] = 1;
        }
    }

    setTimeout( function() {
        let movingLightOFFSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay,0,movingLightUseNumber,movingLightOFFSetInterval,movingLightMyNumber);
            
            if ( nowTime[0] <= movingLightFadeTime ) {
                for ( var i = 0 ; i < movingLightInsideNumber ; i++ ) {
                    movingLightAngleFadeChange(1,i+1,0,0,movingLightFadeTime,nowTime[0]);
    
                    let movingLightColorOpacity = movingLightInsideOFFColor[3][i] - movingLightInsideOFFColor[3][i] / movingLightFadeTime * nowTime[0];
    
                    if ( ( movingLightInsideOFFColor[0][i] === 0 && movingLightInsideOFFColor[1][i] === 0 && movingLightInsideOFFColor[2][i] === 0 ) || movingLightInsideOFFColor[3][i] === 0 ) {
                        movingLightColorChange(1,i+1,0,0,0,0);
                    } else if ( movingLightInsideOFFColor[0][i] < 0 && movingLightInsideOFFColor[1][i] < 0 && movingLightInsideOFFColor[2][i] < 0 ) {
                        movingLightColorChange(1,i+1,movingLightInsideRepresentGradientColor[0][i],movingLightInsideRepresentGradientColor[1][i],movingLightInsideRepresentGradientColor[2][i],movingLightColorOpacity);
                    } else {
                        movingLightColorChange(1,i+1,movingLightInsideOFFColor[0][i],movingLightInsideOFFColor[1][i],movingLightInsideOFFColor[2][i],movingLightColorOpacity);
                    }
                }
    
                for ( var i = 0 ; i < movingLightOutsideNumber ; i++ ) {
                    movingLightAngleFadeChange(2,i+1,0,0,movingLightFadeTime,nowTime[0]);                
    
                    let movingLightColorOpacity = movingLightOutsideOFFColor[3][i] - movingLightOutsideOFFColor[3][i] / movingLightFadeTime * nowTime[0];
    
                    if ( ( movingLightOutsideOFFColor[0][i] === 0 && movingLightOutsideOFFColor[1][i] === 0 && movingLightOutsideOFFColor[2][i] === 0 ) || movingLightOutsideOFFColor[3][i] === 0 ) {
                        movingLightColorChange(2,i+1,0,0,0,0);
                    } else if ( movingLightOutsideOFFColor[0][i] < 0 && movingLightOutsideOFFColor[1][i] < 0 && movingLightOutsideOFFColor[2][i] < 0 ) {
                        movingLightColorChange(2,i+1,movingLightOutsideRepresentGradientColor[0][i],movingLightOutsideRepresentGradientColor[1][i],movingLightOutsideRepresentGradientColor[2][i],movingLightColorOpacity);
                    } else {
                        movingLightColorChange(2,i+1,movingLightOutsideOFFColor[0][i],movingLightOutsideOFFColor[1][i],movingLightOutsideOFFColor[2][i],movingLightColorOpacity);
                    }
                }
    
            } else {
                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                    movingLightAngleChange(1,i,0,0);
                    movingLightPictureChange(1,i,0,0);
                    movingLightColorChange(1,i,0,0,0,0);
                }
            
                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                    movingLightAngleChange(2,i,0,0);
                    movingLightPictureChange(2,i,0,0);
                    movingLightColorChange(2,i,0,0,0,0);
                }

                movingLightOFFON = 0;
    
                clearInterval(movingLightOFFSetInterval);
            }
        });

    },movingLightSetTimeoutDelay);
    
}

function movingLightAngleChange(movingLightIO,movingLightNowNumber,movingLightAngleXY,movingLightAngleZ,movingLightAngleChangeTime = 0,nowTime = -1) {
    movingLightAngleXY = mod(movingLightAngleXY,360);

    if ( nowTime >= 0 && nowTime <= movingLightAngleChangeTime ) {
        if ( movingLightIO === 1 ) {
            if ( movingLightAngleXY - movingLightInsideFirstAngle[0][movingLightNowNumber-1] > 180 ) movingLightAngleXY -= 360;
            else if ( movingLightAngleXY - movingLightInsideFirstAngle[0][movingLightNowNumber-1] < -180 ) movingLightAngleXY += 360;

            movingLightAngleXY = movingLightInsideFirstAngle[0][movingLightNowNumber-1] + ( movingLightAngleXY - movingLightInsideFirstAngle[0][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
            movingLightAngleZ = movingLightInsideFirstAngle[1][movingLightNowNumber-1] + ( movingLightAngleZ - movingLightInsideFirstAngle[1][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
        } else {
            if ( movingLightAngleXY - movingLightOutsideFirstAngle[0][movingLightNowNumber-1] > 180 ) movingLightAngleXY -= 360;
            else if ( movingLightAngleXY - movingLightOutsideFirstAngle[0][movingLightNowNumber-1] < -180 ) movingLightAngleXY += 360;

            movingLightAngleXY = movingLightOutsideFirstAngle[0][movingLightNowNumber-1] + ( movingLightAngleXY - movingLightOutsideFirstAngle[0][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
            movingLightAngleZ = movingLightOutsideFirstAngle[1][movingLightNowNumber-1] + ( movingLightAngleZ - movingLightOutsideFirstAngle[1][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
        }
    }

    let movingLightCoordinateNumber;
    if ( movingLightIO === 1 ) {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_1-${movingLightNowNumber}`);
        movingLightInsideAngle[0][movingLightNowNumber-1] = movingLightAngleXY;
        movingLightInsideAngle[1][movingLightNowNumber-1] = movingLightAngleZ;
    } else {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_2-${movingLightNowNumber}`);
        movingLightOutsideAngle[0][movingLightNowNumber-1] = movingLightAngleXY;
        movingLightOutsideAngle[1][movingLightNowNumber-1] = movingLightAngleZ;
    }

    if ( movingLightAngleZ < 0 ) {
        movingLightAngleZ *= -1;
        movingLightAngleXY += 180;
    }

    if ( movingLightIO === 1 ) {
        movingLightAngleXY = 90 * ( 5 - movingLightNowNumber ) + movingLightAngleXY;
    } else {
        if ( movingLightNowNumber === 5 ) {
            movingLightAngleXY = 90 * ( 1.5 + 1 / 3 ) + movingLightAngleXY;
        } else {
            movingLightAngleXY = 90 * ( 5 - movingLightNowNumber - 0.5 ) + movingLightAngleXY;
        }
    }

    if ( movingLightAngleZ > 90 ) {
        movingLightAngleZ = 180 - movingLightAngleZ;
        movingLightCoordinateNumber.style.background = "linear-gradient(to top, #FFFFFF " + movingLightWidth * 0.2 + "px, #AAAAAA " + movingLightWidth * 0.2 + "px)";
    } else {
        movingLightCoordinateNumber.style.background = "linear-gradient(to top, #FFFFFF " + movingLightWidth * 0.2 + "px, #555555 " + movingLightWidth * 0.2 + "px)";
    }

    movingLightCoordinateNumber.style.height = ( movingLightAngleZ / 90 * movingLightWidth * 0.8 + movingLightAngleZ / Math.abs(movingLightAngleZ) * movingLightWidth * 0.2 ) + "px";
    movingLightCoordinateNumber.style.transform = "rotateZ(" + movingLightAngleXY + "deg)"
}

function movingLightAngleFadeChange(movingLightIO,movingLightNowNumber,movingLightAngleXY,movingLightAngleZ,movingLightAngleChangeTime,nowTime) {
    let movingLightProportionAngleXY, movingLightProportionAngleZ;
    if ( nowTime <= movingLightAngleChangeTime ) {
        movingLightAngleXY = mod(movingLightAngleXY,360);

        if ( movingLightIO === 1 ) {
            if ( movingLightAngleXY - movingLightInsideFirstAngle[0][movingLightNowNumber-1] > 180 ) movingLightAngleXY -= 360;
            else if ( movingLightAngleXY - movingLightInsideFirstAngle[0][movingLightNowNumber-1] < -180 ) movingLightAngleXY += 360;

            movingLightProportionAngleXY = movingLightInsideFirstAngle[0][movingLightNowNumber-1] + ( movingLightAngleXY - movingLightInsideFirstAngle[0][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
            movingLightProportionAngleZ = movingLightInsideFirstAngle[1][movingLightNowNumber-1] + ( movingLightAngleZ - movingLightInsideFirstAngle[1][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
        } else {
            if ( movingLightAngleXY - movingLightOutsideFirstAngle[0][movingLightNowNumber-1] > 180 ) movingLightAngleXY -= 360;
            else if ( movingLightAngleXY - movingLightOutsideFirstAngle[0][movingLightNowNumber-1] < -180 ) movingLightAngleXY += 360;

            movingLightProportionAngleXY = movingLightOutsideFirstAngle[0][movingLightNowNumber-1] + ( movingLightAngleXY - movingLightOutsideFirstAngle[0][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
            movingLightProportionAngleZ = movingLightOutsideFirstAngle[1][movingLightNowNumber-1] + ( movingLightAngleZ - movingLightOutsideFirstAngle[1][movingLightNowNumber-1] ) / movingLightAngleChangeTime * nowTime;
        }
        movingLightAngleChange(movingLightIO,movingLightNowNumber,movingLightProportionAngleXY,movingLightProportionAngleZ);
    }
}

function movingLightPictureChange(movingLightIO,movingLightNowNumber,movingLightPictureNumber,movingLightPictureSize,movingLightBrightness = 100,movingLightBlur = 0) {
    let movingLightCoordinateNumber, imgChangeProportion = 1;

    if ( movingLightBlur < 0 ) movingLightBlur = 0;

    if ( movingLightIO === 1 ) {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_1-${movingLightNowNumber}`);
        if ( movingLightInsideImgType[movingLightNowNumber-1] === movingLightPictureNumber ) imgChangeProportion = 0;
        movingLightInsidePictureSize[movingLightNowNumber-1] = movingLightPictureSize;
        movingLightInsideBrightness[movingLightNowNumber-1] = movingLightBrightness;
        movingLightInsideDoublePictureON[movingLightNowNumber-1] = 0;
    } else {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_2-${movingLightNowNumber}`);
        if ( movingLightOutsideImgType[movingLightNowNumber-1] === movingLightPictureNumber ) imgChangeProportion = 0;
        movingLightOutsidePictureSize[movingLightNowNumber-1] = movingLightPictureSize;
        movingLightOutsideBrightness[movingLightNowNumber-1] = movingLightBrightness;
        movingLightOutsideDoublePictureON[movingLightNowNumber-1] = 0;
    }

    if ( imgChangeProportion === 1 ) {
        movingLightCoordinateNumber.style.opacity = 0;

        while ( movingLightCoordinateNumber.firstChild ) {
            movingLightCoordinateNumber.removeChild(movingLightCoordinateNumber.firstChild);
        }

        //movingLightCoordinateNumber.style.background = "radial-gradient( #000000 69%, #000000 69%)";
    
        let movingLight_img = document.createElement('img');
        movingLight_img.src = `MovingLight_img/MovingLight_img_${movingLightPictureNumber}.png`;
        movingLight_img.classList.add('MOVING_LIGHT_PICTURE_SINGLEtype');
    
        movingLightCoordinateNumber.appendChild(movingLight_img);

        if ( movingLightIO === 1 ) {
            if ( movingLightInsideImgType[movingLightNowNumber-1] < 0 ) {
                if ( movingLightInsideColor[0][movingLightNowNumber-1] >= 0 ) {
                    movingLightCoordinateNumber.style.background = "radial-gradient( rgb(" + movingLightInsideColor[0][movingLightNowNumber-1] + "," + movingLightInsideColor[1][movingLightNowNumber-1] + "," + movingLightInsideColor[2][movingLightNowNumber-1] + ") 69%, #000000 69%)";
                } else {
                    for ( var i = 0 ; i < 3 ; i++ ) movingLightInsideColor[i][movingLightNowNumber-1] = 0;
                }
            }
            movingLightInsideImgType[movingLightNowNumber-1] = movingLightPictureNumber;
        } else {
            if ( movingLightOutsideImgType[movingLightNowNumber-1] < 0 ) {
                if ( movingLightOutsideColor[0][movingLightNowNumber-1] >= 0 ) {
                    movingLightCoordinateNumber.style.background = "radial-gradient( rgb(" + movingLightOutsideColor[0][movingLightNowNumber-1] + "," + movingLightOutsideColor[1][movingLightNowNumber-1] + "," + movingLightOutsideColor[2][movingLightNowNumber-1] + ") 69%, #000000 69%)";
                } else {
                    for ( var i = 0 ; i < 3 ; i++ ) movingLightOutsideColor[i][movingLightNowNumber-1] = 0;
                }
            }
            movingLightOutsideImgType[movingLightNowNumber-1] = movingLightPictureNumber;
        }

        if ( movingLightIO === 1 ) movingLightCoordinateNumber.style.opacity = movingLightInsideColor[3][movingLightNowNumber-1];
        else movingLightCoordinateNumber.style.opacity = movingLightOutsideColor[3][movingLightNowNumber-1];
    }

    movingLightCoordinateNumber.style.width = movingLightPictureSize + "%";
    movingLightCoordinateNumber.style.filter = "brightness(" + movingLightBrightness + "%) blur( " + movingLightBlur + "px)";

    /*if ( movingLightIO === 1 ) {
        movingLightCoordinateNumber.style.opacity = movingLightInsideColor[3][movingLightNowNumber-1];
        for ( var i = 0 ; i < 4 ; i++ ) {
            movingLightInsideFirstColor[i][movingLightNowNumber-1] = movingLightInsideColor[i][movingLightNowNumber-1];
        }
    } else {
        movingLightCoordinateNumber.style.opacity = movingLightOutsideColor[3][movingLightNowNumber-1];
        for ( var i = 0 ; i < 4 ; i++ ) {
            movingLightOutsideFirstColor[i][movingLightNowNumber-1] = movingLightOutsideColor[i][movingLightNowNumber-1];
        }
    }*/
}

function movingLightSizeChange(movingLightNowNumber,changeSize,changeTime,nowTime) {
    if ( nowTime < changeTime ) {
        let movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_2-${movingLightNowNumber}`);
        let movingLightNowPictureSize = movingLightOutsideFirstPictureSize[movingLightNowNumber-1] + ( changeSize - movingLightOutsideFirstPictureSize[movingLightNowNumber-1] ) / changeTime * nowTime;
        movingLightCoordinateNumber.style.width = movingLightNowPictureSize + "%";
        movingLightOutsidePictureSize[movingLightNowNumber-1] = movingLightNowPictureSize;
    }
}

function movingLightColorChange(movingLightIO,movingLightNowNumber,colorRed,colorGreen,colorBlue,opacity,changeTime = 0,nowTime = -1,gradientChange = 0) {
    let movingLightCoordinateNumber, movingLightCoordinateTripleNumber, fadePermission = 1, changeColor = [], changeway = 1, movingLightPictureRadius = 69;
    changeColor[0] = colorRed;
    changeColor[1] = colorGreen;
    changeColor[2] = colorBlue;
    changeColor[3] = opacity;

    if ( movingLightIO === 1 ) {
        for ( var i = 0 ; i < 3 ; i++ ) {
            if ( movingLightInsideColor[i][movingLightNowNumber-1] < 0 && changeColor[i] >= 0 ) {
                fadePermission = 0;
                break;
            }
        }
        if ( movingLightInsideImgType[movingLightNowNumber-1] < 0 ) {
            changeway = 0;
            if ( movingLightInsideImgType[movingLightNowNumber-1] === -1 ) movingLightPictureRadius = 71;
        }
    } else {
        for ( var i = 0 ; i < 3 ; i++ ) {
            if ( movingLightOutsideColor[i][movingLightNowNumber-1] < 0 && changeColor[i] >= 0 ) {
                fadePermission = 0;
                break;
            }
        }
        if ( movingLightOutsideImgType[movingLightNowNumber-1] < 0 ) {
            changeway = 0;
            if ( movingLightOutsideImgType[movingLightNowNumber-1] === -1 ) movingLightPictureRadius = 71;
        }
    }

    movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_${movingLightIO}-${movingLightNowNumber}`);

    if ( changeway === 0 ) {
        movingLightCoordinateTripleNumber = movingLightCoordinateNumber.getElementsByClassName(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE`);
        movingLightCoordinateNumber.style.background = "radial-gradient( #000000 69%, #000000 69%)";
    }

    if ( colorRed >= 0 && colorGreen >= 0 && colorBlue >= 0 ) {
        if ( movingLightIO === 1 ) {
            if ( changeTime > 0 && gradientChange === 0 ) {
                //let gradientON = 0;
                for ( var i = 0 ; i < 3 ; i++ ) {
                    if ( changeColor[i] !== movingLightInsideColor[i][movingLightNowNumber-1] ) {
                        movingLightInsideColorChangeStartTime[movingLightNowNumber-1] = nowTime;
                        for ( var i = 0 ; i < 3 ; i++ ) {
                            movingLightInsideOldColor[i][movingLightNowNumber-1] = movingLightInsideColor[i][movingLightNowNumber-1];
                            movingLightInsideColor[i][movingLightNowNumber-1] = changeColor[i];
                        }
                        break;
                    }
                }

                /*if ( gradientON === 1 ) {
                    movingLightInsideColorChangeStartTime[movingLightNowNumber-1] = nowTime;
                    for ( var i = 0 ; i < 3 ; i++ ) {
                        movingLightInsideOldColor[i][movingLightNowNumber-1] = movingLightInsideColor[i][movingLightNowNumber-1];
                        movingLightInsideColor[i][movingLightNowNumber-1] = changeColor[i];
                    }
                }*/
            }
            let gradientNowTime = nowTime - movingLightInsideColorChangeStartTime[movingLightNowNumber-1];

            if ( changeTime > 0 && movingLightInsideColorChangeStartTime[movingLightNowNumber-1] >= 0 && gradientNowTime < changeTime && fadePermission === 1 && gradientChange === 0 ) {
                let gradientColorProportion = 100 / changeTime * gradientNowTime;

                if ( changeway === 1 ) {
                    movingLightCoordinateNumber.style.background = "radial-gradient( transparent 69%, #000000 69%), linear-gradient( 135deg, rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") " + gradientColorProportion + "% , rgb(" + movingLightInsideOldColor[0][movingLightNowNumber-1] + "," + movingLightInsideOldColor[1][movingLightNowNumber-1] + "," + movingLightInsideOldColor[2][movingLightNowNumber-1] + ") " + gradientColorProportion + "% )";
                } else {
                    for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
                        movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( transparent " + movingLightPictureRadius + "%, #000000 " + movingLightPictureRadius + "%), linear-gradient( 135deg, rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") " + gradientColorProportion + "% , rgb(" + movingLightInsideOldColor[0][movingLightNowNumber-1] + "," + movingLightInsideOldColor[1][movingLightNowNumber-1] + "," + movingLightInsideOldColor[2][movingLightNowNumber-1] + ") " + gradientColorProportion + "% )";
                    }
                }
            } else {
                if ( changeway === 1 ) {
                    movingLightCoordinateNumber.style.background = "radial-gradient( rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") 69%, #000000 69%)";
                } else {
                    for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
                        movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") " + movingLightPictureRadius + "%, #000000 " + movingLightPictureRadius + "%)";
                    }
                }
                
                movingLightInsideColorChangeStartTime[movingLightNowNumber-1] = -1;
                for ( var i = 0 ; i < 3 ; i++ ) movingLightInsideColor[i][movingLightNowNumber-1] = changeColor[i];
            }

        } else if ( movingLightIO === 2 ) {
            let gradientNowTime;

            if ( gradientChange === 2 && changeTime > 0 ) {
                for ( var i = 0 ; i < 3 ; i++ ) {
                    if ( changeColor[i] !== movingLightOutsideColor[i][movingLightNowNumber-1] ) {
                        movingLightOutsideColorChangeStartTime[movingLightNowNumber-1] = nowTime;
                        for ( var i = 0 ; i < 3 ; i++ ) {
                            movingLightOutsideOldColor[i][movingLightNowNumber-1] = movingLightOutsideColor[i][movingLightNowNumber-1];
                            movingLightOutsideColor[i][movingLightNowNumber-1] = changeColor[i];
                        }
                        break;
                    }
                }

                /*if ( gradientON === 1 ) {
                    movingLightOutsideColorChangeStartTime[movingLightNowNumber-1] = nowTime;
                    for ( var i = 0 ; i < 3 ; i++ ) {
                        movingLightOutsideOldColor[i][movingLightNowNumber-1] = movingLightOutsideColor[i][movingLightNowNumber-1];
                        movingLightOutsideColor[i][movingLightNowNumber-1] = changeColor[i];
                    }
                }*/
                gradientNowTime = nowTime - movingLightOutsideColorChangeStartTime[movingLightNowNumber-1];
            }

            if ( gradientChange === 2 && movingLightOutsideColorChangeStartTime[movingLightNowNumber-1] >= 0 && gradientNowTime < changeTime && fadePermission === 1 ) {
                let gradientColorProportion = 100 / changeTime * gradientNowTime;

                if ( changeway === 1 ) {
                    movingLightCoordinateNumber.style.background = "radial-gradient( transparent 69%, #000000 69%), linear-gradient( 135deg, rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") " + gradientColorProportion + "% , rgb(" + movingLightOutsideOldColor[0][movingLightNowNumber-1] + "," + movingLightOutsideOldColor[1][movingLightNowNumber-1] + "," + movingLightOutsideOldColor[2][movingLightNowNumber-1] + ") " + gradientColorProportion + "% )";
                } else {
                    for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
                        movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( transparent " + movingLightPictureRadius + "%, #000000 " + movingLightPictureRadius + "%), linear-gradient( 135deg, rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") " + gradientColorProportion + "% , rgb(" + movingLightOutsideOldColor[0][movingLightNowNumber-1] + "," + movingLightOutsideOldColor[1][movingLightNowNumber-1] + "," + movingLightOutsideOldColor[2][movingLightNowNumber-1] + ") " + gradientColorProportion + "% )";
                    }
                }
            } else {
                if ( gradientChange === 0 && changeTime > 0 && nowTime <= changeTime && fadePermission === 1 ) {
                    for ( var i = 0 ; i < 3 ; i++ ) changeColor[i] = movingLightOutsideFirstColor[i][movingLightNowNumber-1] + ( changeColor[i] - movingLightOutsideFirstColor[i][movingLightNowNumber-1] ) / changeTime * nowTime;
                }
    
                for ( var i = 0 ; i < 3 ; i++ ) movingLightOutsideColor[i][movingLightNowNumber-1] = changeColor[i];
    
                if ( changeway === 1 ) {
                    movingLightCoordinateNumber.style.background = "radial-gradient( rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") 69%, #000000 69%)";
                } else {
                    for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
                        movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( rgb(" + changeColor[0] + "," + changeColor[1] + "," + changeColor[2] + ") " + movingLightPictureRadius + "%, #000000 " + movingLightPictureRadius + "%)";
                    }
                }
            }            
        }
    }

    if ( opacity >= 0 ) {
        if ( changeTime > 0 && nowTime <= changeTime && fadePermission === 1 ) {
            if ( movingLightIO === 1 ) {
                changeColor[3] = movingLightInsideFirstColor[3][movingLightNowNumber-1] + ( changeColor[3] - movingLightInsideFirstColor[3][movingLightNowNumber-1] ) / changeTime * nowTime;
            } else {
                changeColor[3] = movingLightOutsideFirstColor[3][movingLightNowNumber-1] + ( changeColor[3] - movingLightOutsideFirstColor[3][movingLightNowNumber-1] ) / changeTime * nowTime;
            }
        }
    
        if ( movingLightIO === 1 ) {
            movingLightInsideColor[3][movingLightNowNumber-1] = changeColor[3];
        } else {
            movingLightOutsideColor[3][movingLightNowNumber-1] = changeColor[3];
        }
    
        if ( changeway === 1 ) {
            movingLightCoordinateNumber.style.opacity = changeColor[3];
        } else {
            for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
                movingLightCoordinateTripleNumber[i].style.opacity = changeColor[3];
            }
        }
    }    

}

function movingLightGradientColorChange(movingLightIO,movingLightNowNumber,color1Red,color1Green,color1Blue,color1Proportion,color2Red,color2Green,color2Blue,color2Proportion,degree,opacity,changeTime = 0,nowTime = 0) {    
    let movingLightCoordinateNumber, movingLightCoordinateTripleNumber, changeway = 1, movingLightPictureRadius = 69;

    if ( movingLightIO === 1 ) {
        for ( var i = 0 ; i < 3 ; i++ ) {
            movingLightInsideColor[i][movingLightNowNumber-1] = -1;
        }
        if ( movingLightInsideImgType[movingLightNowNumber-1] < 0 ) {
            changeway = 0;
            if ( movingLightInsideImgType[movingLightNowNumber-1] === -1 ) movingLightPictureRadius = 71;
        }

        
        movingLightInsideRepresentGradientColor[0][movingLightNowNumber-1] = color1Red;
        movingLightInsideRepresentGradientColor[1][movingLightNowNumber-1] = color1Green;
        movingLightInsideRepresentGradientColor[2][movingLightNowNumber-1] = color1Blue;
    } else {
        for ( var i = 0 ; i < 3 ; i++ ) {
            movingLightOutsideColor[i][movingLightNowNumber-1] = -1;
        }
        if ( movingLightOutsideImgType[movingLightNowNumber-1] < 0 ) {
            changeway = 0;
            if ( movingLightOutsideImgType[movingLightNowNumber-1] === -1 ) movingLightPictureRadius = 71;
        }

        movingLightOutsideRepresentGradientColor[0][movingLightNowNumber-1] = color1Red;
        movingLightOutsideRepresentGradientColor[1][movingLightNowNumber-1] = color1Green;
        movingLightOutsideRepresentGradientColor[2][movingLightNowNumber-1] = color1Blue;
    }

    movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_${movingLightIO}-${movingLightNowNumber}`);

    if ( changeway === 0 ) {
        movingLightCoordinateTripleNumber = movingLightCoordinateNumber.getElementsByClassName(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE`);
    }

    movingLightCoordinateNumber.style.background = "radial-gradient( #000000 69%, #000000 69%)";

    if ( changeway === 1 ) {
        movingLightCoordinateNumber.style.background = "radial-gradient( transparent 69%, #000000 69%), linear-gradient(" + degree + "deg, rgb(" + color1Red + "," + color1Green + "," + color1Blue + ") " + color1Proportion + "% , rgb(" + color2Red + "," + color2Green + "," + color2Blue + ") " + color2Proportion + "% )";
    } else {
        for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
            movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( transparent " + movingLightPictureRadius + "%, #000000 " + movingLightPictureRadius + "%), linear-gradient(" + degree + "deg, rgb(" + color1Red + "," + color1Green + "," + color1Blue + ") " + color1Proportion + "% , rgb(" + color2Red + "," + color2Green + "," + color2Blue + ") " + color2Proportion + "% )";
        }
    }    

    if ( changeTime > 0 && nowTime <= changeTime ) {
        if ( movingLightIO === 1 ) opacity = movingLightInsideFirstColor[3][movingLightNowNumber-1] + ( opacity - movingLightInsideFirstColor[3][movingLightNowNumber-1] ) / changeTime * nowTime;
        else opacity = movingLightOutsideFirstColor[3][movingLightNowNumber-1] + ( opacity - movingLightOutsideFirstColor[3][movingLightNowNumber-1] ) / changeTime * nowTime;
    }

    if ( changeway === 1 ) {
        movingLightCoordinateNumber.style.opacity = opacity;
    } else {
        for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
            movingLightCoordinateTripleNumber[i].style.opacity = opacity;
        }
    }

    if ( movingLightIO === 1 ) {
        movingLightInsideColor[3][movingLightNowNumber-1] = opacity;
    } else {
        movingLightOutsideColor[3][movingLightNowNumber-1] = opacity;
    }
}

function movingLightRotateChange(movingLightIO,movingLightNowNumber,movingLightRotate) {
    let changeway = 1 , rotateYes = 1;
    if ( movingLightIO === 1 ) {
        if ( movingLightInsideImgType[movingLightNowNumber-1] < 0 ) {
            changeway = 0;
            if ( movingLightInsideImgType[movingLightNowNumber-1] === -1 ) rotateYes = 0;
        }
    } else {
        if ( movingLightOutsideImgType[movingLightNowNumber-1] < 0 ) {
            changeway = 0;
            if ( movingLightOutsideImgType[movingLightNowNumber-1] === -1 ) rotateYes = 0;
        }
    }
    
    let movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_${movingLightIO}-${movingLightNowNumber}`);

    if ( changeway === 1 ) {
        movingLightCoordinateNumber.firstChild.style.transform = "rotateZ(" + movingLightRotate + "deg)";
    } else if ( rotateYes === 1 ) {
        let movingLightCoordinateTripleNumber = movingLightCoordinateNumber.getElementsByClassName(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE`);
        for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
            movingLightCoordinateTripleNumber[i].firstChild.style.transform = "rotateZ(" + movingLightRotate + "deg)";
        }
    }
    
}

function movingLightBlurChange(movingLightIO,movingLightNowNumber,movingLightBlur) {
    let changeway = 1 ,movingLightBrightness;

    if ( movingLightBlur < 0 ) movingLightBlur = 0;

    if ( movingLightIO === 1 ) {
        if ( movingLightInsideImgType[movingLightNowNumber-1] < 0 ) changeway = 0;
        movingLightBrightness = movingLightInsideBrightness[movingLightNowNumber-1];
    } else {
        if ( movingLightOutsideImgType[movingLightNowNumber-1] < 0 ) changeway = 0;
        movingLightBrightness = movingLightOutsideBrightness[movingLightNowNumber-1];
    }
    
    let movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_${movingLightIO}-${movingLightNowNumber}`);

    if ( changeway === 1 ) {
        movingLightCoordinateNumber.style.filter = "brightness(" + movingLightBrightness + "%) blur( " + movingLightBlur + "px)";
    } else {
        let movingLightCoordinateTripleNumber = movingLightCoordinateNumber.getElementsByClassName(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE`);
        for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
            movingLightCoordinateTripleNumber[i].style.filter = "brightness(" + movingLightBrightness + "%) blur( " + movingLightBlur + "px)";
        }
    }
}

function movingLightTriplePositionDecision(movingLightIO,movingLightNowNumber,movingLightPictureLength,movingLightPictureSize,movingLightTripleRotate = 0) {
    let movingLightCenter = 50;
    movingLightPictureLength /= 2;
    for ( var i = 0 ; i < 3 ; i++ ) {
        let movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE_${movingLightIO}-${movingLightNowNumber}-${i+1}`);
        let movingLightTripleRad = ( 60 + 120 * i - movingLightTripleRotate ) / 180 * Math.PI;
        movingLightCoordinateNumber.style.top = ( Math.cos(movingLightTripleRad) * movingLightPictureLength + movingLightCenter ) + "%";
        movingLightCoordinateNumber.style.left = ( Math.sin(movingLightTripleRad) * movingLightPictureLength + movingLightCenter ) + "%";
        movingLightCoordinateNumber.style.width = ( ( 50 - movingLightPictureLength ) / 100 * movingLightPictureSize * 2 ) + "%";
    }
}

function movingLightTriplePictureChange(movingLightIO,movingLightNowNumber,movingLightPictureNumber,movingLightParentSize,movingLightPictureLength,movingLightPictureSize,movingLightBrightness = 100,movingLightBlur = 0) {
    let movingLightCoordinateNumber, imgChangeProportion = 1, movingLightCoordinateTripleNumber;

    if ( movingLightBlur < 0 ) movingLightBlur = 0;

    if ( movingLightIO === 1 ) {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_1-${movingLightNowNumber}`);
        if ( movingLightInsideImgType[movingLightNowNumber-1] === -1 * movingLightPictureNumber - 1 ) imgChangeProportion = 0;
        movingLightInsidePictureSize[movingLightNowNumber-1] = movingLightParentSize;
        movingLightInsideTripleType[0][movingLightNowNumber-1] = movingLightPictureLength;
        movingLightInsideTripleType[1][movingLightNowNumber-1] = movingLightPictureSize;
        movingLightInsideBrightness[movingLightNowNumber-1] = movingLightBrightness;
        movingLightInsideDoublePictureON[movingLightNowNumber-1] = 0;
    } else {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_2-${movingLightNowNumber}`);
        if ( movingLightOutsideImgType[movingLightNowNumber-1] === -1 * movingLightPictureNumber - 1 ) imgChangeProportion = 0;
        movingLightOutsidePictureSize[movingLightNowNumber-1] = movingLightParentSize;
        movingLightOutsideTripleType[0][movingLightNowNumber-1] = movingLightPictureLength;
        movingLightOutsideTripleType[1][movingLightNowNumber-1] = movingLightPictureSize;
        movingLightOutsideBrightness[movingLightNowNumber-1] = movingLightBrightness;
        movingLightOutsideDoublePictureON[movingLightNowNumber-1] = 0;
    }

    if ( imgChangeProportion === 1 ) {
        movingLightCoordinateNumber.style.opacity = 0;
        
        while ( movingLightCoordinateNumber.firstChild ) {
            movingLightCoordinateNumber.removeChild(movingLightCoordinateNumber.firstChild);
        }

        movingLightCoordinateNumber.style.background = "radial-gradient( #000000 69%, #000000 69%)";
        movingLightCoordinateNumber.style.filter = "brightness( 100% ) blur( 0 )";

        for ( var i = 1 ; i <= 3 ; i++ ) {
            let movingLight_div = document.createElement('div');
            movingLight_div.id = `MOVING_LIGHT_PICTURE_CONTENT_TRIPLE_${movingLightIO}-${movingLightNowNumber}-${i}`;
            movingLight_div.classList.add('MOVING_LIGHT_PICTURE_CONTENT_TRIPLE');
            movingLightCoordinateNumber.appendChild(movingLight_div);

            movingLightCoordinateTripleNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE_${movingLightIO}-${movingLightNowNumber}-${i}`);
            if ( movingLightPictureNumber > 0 ) {                
                let movingLight_img = document.createElement('img');
                movingLight_img.src = `MovingLight_img/MovingLight_img_${movingLightPictureNumber}.png`;
                movingLight_img.classList.add('MOVING_LIGHT_PICTURE_TRIPLEtype');
                movingLightCoordinateTripleNumber.appendChild(movingLight_img);
            }
            if ( movingLightIO === 1 ) movingLightCoordinateTripleNumber.style.opacity = movingLightInsideColor[3][movingLightNowNumber-1];
            else movingLightCoordinateTripleNumber.style.opacity = movingLightOutsideColor[3][movingLightNowNumber-1];
            movingLightCoordinateTripleNumber.style.filter = "brightness(" + movingLightBrightness + "%) blur( " + movingLightBlur + "px)";
        }

        movingLightCoordinateTripleNumber = movingLightCoordinateNumber.getElementsByClassName(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE`);

        let movingLightPictureRadius = 69;
        if ( movingLightPictureNumber === 0 ) movingLightPictureRadius = 71;

        if ( movingLightIO === 1 ) {
            /*for ( var i = 0 ; i < 3 ; i++ ) {
                movingLightInsideColor[i][movingLightNowNumber-1] = 0;
            }*/
            //movingLightInsideColor[3][movingLightNowNumber-1] = 0;
            if ( movingLightInsideColor[0][movingLightNowNumber-1] >= 0 ) {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( rgb(" + movingLightInsideColor[0][movingLightNowNumber-1] + "," + movingLightInsideColor[1][movingLightNowNumber-1] + "," + movingLightInsideColor[2][movingLightNowNumber-1] + ") " + movingLightPictureRadius + "%, #000000 69%)";
            } else {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightInsideColor[i][movingLightNowNumber-1] = 0;
            }
            movingLightInsideImgType[movingLightNowNumber-1] = -1 * movingLightPictureNumber - 1;
        } else {
            /*for ( var i = 0 ; i < 3 ; i++ ) {
                movingLightOutsideColor[i][movingLightNowNumber-1] = 0;
            }*/
            //movingLightOutsideColor[3][movingLightNowNumber-1] = 0;
            if ( movingLightOutsideColor[0][movingLightNowNumber-1] >= 0 ) {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( rgb(" + movingLightOutsideColor[0][movingLightNowNumber-1] + "," + movingLightOutsideColor[1][movingLightNowNumber-1] + "," + movingLightOutsideColor[2][movingLightNowNumber-1] + ") " + movingLightPictureRadius + "%, #000000 69%)";
            } else {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightOutsideColor[i][movingLightNowNumber-1] = 0;
            }
            movingLightOutsideImgType[movingLightNowNumber-1] = -1 * movingLightPictureNumber - 1;
        }
    }

    movingLightCoordinateNumber.style.width = movingLightParentSize + "%";
    //movingLightCoordinateNumber.style.filter = "brightness(" + movingLightBrightness + "%)";

    movingLightTriplePositionDecision(movingLightIO,movingLightNowNumber,movingLightPictureLength,movingLightPictureSize);

    movingLightCoordinateNumber.style.opacity = "1.0";

    /*if ( movingLightIO === 1 ) {
        for ( var i = 0 ; i < 4 ; i++ ) {
            movingLightInsideFirstColor[i][movingLightNowNumber-1] = movingLightInsideColor[i][movingLightNowNumber-1];
        }
    } else {
        for ( var i = 0 ; i < 4 ; i++ ) {
            movingLightOutsideFirstColor[i][movingLightNowNumber-1] = movingLightOutsideColor[i][movingLightNowNumber-1];
        }
    }*/
}

function movingLightTripleRotateChange(movingLightIO,movingLightNowNumber,movingLightRotate) {
    if ( movingLightIO === 1 ) {
        movingLightTriplePositionDecision(movingLightIO,movingLightNowNumber,movingLightInsideTripleType[0][movingLightNowNumber-1],movingLightInsideTripleType[1][movingLightNowNumber-1],movingLightRotate);
    } else {
        movingLightTriplePositionDecision(movingLightIO,movingLightNowNumber,movingLightOutsideTripleType[0][movingLightNowNumber-1],movingLightOutsideTripleType[1][movingLightNowNumber-1],movingLightRotate);
    }    
}

function movingLightDoublePicture(movingLightIO,movingLightNowNumber,movingLightPictureSize,movingLightPictureArray,movingLightLoopTime,startTime,movingLightMyNumber,movingLightBrightness = 100) {
    let movingLightCoordinateNumber;
    let movingLightNowDoubleNumber;
    if ( movingLightIO === 1 ) {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_1-${movingLightNowNumber}`);
        movingLightInsidePictureSize[movingLightNowNumber-1] = movingLightPictureSize;
        movingLightInsideDoublePictureON[movingLightNowNumber-1]++;
        movingLightNowDoubleNumber = movingLightInsideDoublePictureON[movingLightNowNumber-1];
    } else {
        movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_PICTURE_CONTENT_2-${movingLightNowNumber}`);
        movingLightOutsidePictureSize[movingLightNowNumber-1] = movingLightPictureSize;
        movingLightOutsideDoublePictureON[movingLightNowNumber-1]++;
        movingLightNowDoubleNumber = movingLightOutsideDoublePictureON[movingLightNowNumber-1];
    }

    while ( movingLightCoordinateNumber.firstChild ) {
        movingLightCoordinateNumber.removeChild(movingLightCoordinateNumber.firstChild);
    }

    movingLightCoordinateNumber.style.background = "radial-gradient( #000000 69%, #000000 69%)";
    //movingLightCoordinateNumber.style.opacity = "1.0";

    if ( movingLightIO === 1 ) {
        for ( var i = 0 ; i < 3 ; i++ ) {
            movingLightInsideColor[i][movingLightNowNumber-1] = 0;
        }
        //movingLightInsideColor[3][movingLightNowNumber-1] = 1;
        movingLightInsideImgType[movingLightNowNumber-1] = 'n';
    } else {
        for ( var i = 0 ; i < 3 ; i++ ) {
            movingLightOutsideColor[i][movingLightNowNumber-1] = 0;
        }
        //movingLightOutsideColor[3][movingLightNowNumber-1] = 1;
        movingLightOutsideImgType[movingLightNowNumber-1] = 'n';
    }

    movingLightCoordinateNumber.style.width = movingLightPictureSize + "%";
    movingLightCoordinateNumber.style.filter = "brightness(" + movingLightBrightness + "%)";

    for ( var i = 0 ; i < 2 ; i++ ) {
        let movingLight_div = document.createElement('div');
        movingLight_div.id = `MOVING_LIGHT_DOUBLE_PICTURE_HIDE_${movingLightIO}-${movingLightNowNumber}-${i}`;
        movingLight_div.classList.add('MOVING_LIGHT_DOUBLE_PICTURE_HIDE');
        movingLight_div.classList.add(`MOVING_LIGHT_DOUBLE_PICTURE_HIDE_NUMBER_${i}`);
        movingLightCoordinateNumber.appendChild(movingLight_div);
    }
    
    for ( var i = 0 ; i < movingLightPictureArray.length ; i++ ) {
        let movingLight_div = document.createElement('div');
        movingLight_div.id = `MOVING_LIGHT_DOUBLE_PICTURE_IMG_${movingLightIO}-${movingLightNowNumber}-${i}`;
        movingLight_div.classList.add('MOVING_LIGHT_DOUBLE_PICTURE_IMG');
        movingLightCoordinateNumber.appendChild(movingLight_div);

        let movingLightImgCoordinateNumber = document.getElementById(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_${movingLightIO}-${movingLightNowNumber}-${i}`);

        let movingLight_img_Frame = document.createElement('img');
        movingLight_img_Frame.src = `MovingLight_Frame.png`;
        movingLight_img_Frame.classList.add('MOVING_LIGHT_DOUBLE_PICTURE_IMG_FRAME');
        movingLightImgCoordinateNumber.appendChild(movingLight_img_Frame);

        let movingLight_img = document.createElement('img');
        movingLight_img.src = `MovingLight_img/MovingLight_img_${movingLightPictureArray[i]}.png`;
        movingLight_img.classList.add('MOVING_LIGHT_DOUBLE_PICTURE_IMG_ACTUAL');
        movingLightImgCoordinateNumber.appendChild(movingLight_img);
    }

    let finishTime = 0;
    let restTime;
    let rotateDirection = 0;
    let movingLightNewLoopTime = movingLightLoopTime;
    let fadeOutTime = 500;

    movingLightSetting(0);

    let movingLightSetInterval = setInterval( function() {
        let nowTime = nowTimeGet(startTime,0);

        if ( movingLightOFFON === 1 ) {
            if ( finishTime !== 0 && nowTime[0] - finishTime >= fadeOutTime ) {
                clearInterval(movingLightSetInterval);
            } else if ( finishTime === 0 ) {
                finishTime = nowTime[0];
                let k = finishTime % movingLightLoopTime;
                if ( k < movingLightLoopTime / 2 ) {
                    movingLightNewLoopTime = fadeOutTime / k * movingLightLoopTime;
                    restTime = finishTime + fadeOutTime;
                    rotateDirection = 1;
                } else {
                    movingLightNewLoopTime = fadeOutTime / ( movingLightLoopTime - k ) * movingLightLoopTime;
                    restTime = finishTime - k / movingLightLoopTime * movingLightNewLoopTime;
                }
            }

            movingLightColorChange(movingLightIO,movingLightNowNumber,255,255,255,1,800,nowTime[0]-finishTime);

            if ( rotateDirection === 1 ) nowTime[0] = restTime - nowTime[0];
            else nowTime[0] -= restTime;
        } else if ( ( movingLightIO === 1 && movingLightInsideDoublePictureON[movingLightNowNumber-1] !== movingLightNowDoubleNumber ) || ( movingLightIO === 2 && movingLightOutsideDoublePictureON[movingLightNowNumber-1] !== movingLightNowDoubleNumber ) ) {
            clearInterval(movingLightSetInterval);
        }

        let movingLightLoopTimeSplit = movingLightNewLoopTime / movingLightPictureArray.length;
        let j = Math.trunc( nowTime[0] / movingLightLoopTimeSplit ) % movingLightPictureArray.length;
        let movingLightJudgeTime = nowTime[0] % movingLightLoopTimeSplit;

        let movingLightSize = [];
        movingLightSize[0] = 100 / movingLightLoopTimeSplit * movingLightJudgeTime;
        movingLightSize[1] = 100 - movingLightSize[0];

        let movingLightCoordinate0Number = document.getElementById(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_${movingLightIO}-${movingLightNowNumber}-${Math.trunc( j + movingLightPictureArray.length / 2 ) % movingLightPictureArray.length}`);
        movingLightCoordinate0Number.style.top = null;
        movingLightCoordinate0Number.style.left = null;

        let movingLightCoordinateImgNumber0 = document.getElementById(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_${movingLightIO}-${movingLightNowNumber}-${j}`);
        let movingLightCoordinateImgNumber1 = document.getElementById(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_${movingLightIO}-${movingLightNowNumber}-${(j+1)%movingLightPictureArray.length}`);
        let movingLightCoordinateNumberHide0 = document.getElementById(`MOVING_LIGHT_DOUBLE_PICTURE_HIDE_${movingLightIO}-${movingLightNowNumber}-0`);
        let movingLightCoordinateNumberHide1 = document.getElementById(`MOVING_LIGHT_DOUBLE_PICTURE_HIDE_${movingLightIO}-${movingLightNowNumber}-1`);

        movingLightCoordinateImgNumber0.style.top = 0;
        movingLightCoordinateImgNumber0.style.left = 0;

        if ( rotateDirection === 1 ) {
            movingLightCoordinateImgNumber1.style.top = null;
            movingLightCoordinateImgNumber1.style.left = null;
        }

        movingLightCoordinateImgNumber1.style.bottom = 0;
        movingLightCoordinateImgNumber1.style.right = 0;

        movingLightCoordinateImgNumber0.style.width = movingLightSize[1] + "%";
        movingLightCoordinateImgNumber1.style.width = movingLightSize[0] + "%";

        movingLightCoordinateImgNumber0.getElementsByClassName(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_ACTUAL`)[0].style.objectViewBox = "inset( " +  movingLightSize[0] + "% 0 0 " + movingLightSize[0] +"% )";
        movingLightCoordinateImgNumber0.getElementsByClassName(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_FRAME`)[0].style.objectViewBox = "inset( " +  movingLightSize[0] + "% 0 0 " + movingLightSize[0] +"% )";
        movingLightCoordinateImgNumber1.getElementsByClassName(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_ACTUAL`)[0].style.objectViewBox = "inset( 0 " +  movingLightSize[1] + "% " + movingLightSize[1] +"% 0 )";
        movingLightCoordinateImgNumber1.getElementsByClassName(`MOVING_LIGHT_DOUBLE_PICTURE_IMG_FRAME`)[0].style.objectViewBox = "inset( 0 " +  movingLightSize[1] + "% " + movingLightSize[1] +"% 0 )";

        movingLightCoordinateNumberHide0.style.height = movingLightSize[1] + "%";
        movingLightCoordinateNumberHide0.style.width = movingLightSize[0] + "%";

        movingLightCoordinateNumberHide1.style.height = movingLightSize[0] + "%";
        movingLightCoordinateNumberHide1.style.width = movingLightSize[1] + "%";
        
    });
}

//看板照明
var logoboardLightON = 0;
var logoboardLightFirstON;
var logoboardLightColor = [ [] , [] , [] , [] ];
var logoboardLightOpacity = [];
var logoboardLightFirstColor = [ [] , [] , [] , [] ];
var logoboardLightFirstOpacity = [];
var logoboardLightUseNumber = [ 0 , 0 ];
var logoboardLightUseAnimateNumber = 0;
var logoboardLightUseColorNumber = [ 0 , 0 , 0 , 0 ];
var logoboardLightUseAnimateColorNumber = [ 0 , 0 , 0 , 0 ];
var logoboardLightAnimateOffRoad = 0;
var logoboardLightSetTimeout = [];
var logoboardLightAnimateColor = [ [] , [] , [], [] ];
var logoboardLightKeepColor = [ 1 , 1 , 1 , 1 ];
for ( var i = 0 ; i < logoboardLightNumber ; i++ ) {
    for ( var j = 0 ; j < 4 ; j++ ) {
        logoboardLightColor[j][i] = 0;
    }
    logoboardLightOpacity[i] = 0;
}

function logoboardLightSetting(logoboardLightMode/*,sustainable = 0*/) {
    if ( logoboardLightMode >= 2 ) {
        for ( var i = 0 ; i < logoboardLightSetTimeout.length ; i++ ) {
            clearTimeout(logoboardLightSetTimeout[i]);
        }
        logoboardLightSetTimeout = [];
    } else {
        for ( var i = 0 ; i < 4 ; i++ ) logoboardLightKeepColor[i] = 1;

        for ( var i = 0 ; i < logoboardLightNumber ; i++ ) {
            for ( var j = 0 ; j < 4 ; j++ ) {
                logoboardLightFirstColor[j][i] = logoboardLightColor[j][i];
                if ( logoboardLightFirstColor[j][i] === 0 ) logoboardLightKeepColor[j] = 0;
            }
            logoboardLightFirstOpacity[i] = logoboardLightOpacity[i];
        }

        logoboardLightAnimateOffRoad = 0;
        logoboardLightUseNumber[logoboardLightMode]++;
        logoboardLightFirstON = logoboardLightON;
        
        return logoboardLightUseNumber[logoboardLightMode];
    }
}

function logoboardLightColorDecision(logoboardLightNowNumber,colorRed,colorGreen,colorBlue,colorWhite) {
    let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${logoboardLightNowNumber}`);
    let logoboardLightChangeColor = [];

    logoboardLightChangeColor[0] = ( colorRed + colorWhite ) / 2;
    logoboardLightChangeColor[1] = ( colorGreen + colorWhite ) / 2;
    logoboardLightChangeColor[2] = ( colorBlue * 3 + colorWhite ) / 4;
    
    let maxColor = 0;
    for ( var i = 0 ; i < 3 ; i++ ) {
        if ( logoboardLightChangeColor[i] > maxColor ) maxColor = logoboardLightChangeColor[i];
    }

    logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + logoboardLightChangeColor[0] + "," + logoboardLightChangeColor[1] + "," + logoboardLightChangeColor[2] + "),transparent)";
    logoboardCoordinateNumber.style.filter = "brightness(" + ( 200 - 100 / 255 * maxColor ) + "%)";
    //logoboardCoordinateNumber.style.filter = "brightness(" + ( 150 - 60 / 255 * colorWhite ) + "%)";
}

function logoboardLightOFF(changeTime,settingNumber = 0) {
    logoboardLightSetting(0,settingNumber);

    logoboardLightUseNumber = [ 0 , 0 ];
    logoboardLightUseColorNumber = [ 0 , 0 , 0 , 0 ];
    logoboardLightUseAnimateColorNumber = [ 0 , 0 , 0 , 0 ];
    if ( changeTime === 0 || logoboardLightUseAnimateNumber === 1 ) {
        setTimeout( function(){
            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${i}`);
                logoboardCoordinateNumber.style.opacity = "0";
                logoboardCoordinateNumber.style.background = "linear-gradient(rgb(0,0,0),transparent)";
                for ( var j = 0 ; j < 4 ; j++ ) {
                    logoboardLightColor[j][i-1] = 0;
                }
                logoboardLightOpacity[i-1] = 0;
            }
            logoboardLightUseAnimateNumber = 0;
            logoboardLightON = 0;
        },10);
    } else {
        let startTime = Date.now();
        let logoboardLightMyNumber = 0;
        let logoboardOFFSetInterval = setInterval( function () {
            let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardOFFSetInterval,logoboardLightMyNumber);
            if ( nowTime[0] <= changeTime ) {
                for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                    let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${i}`);
                    //logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + ( logoboardLightFirstColor[0] + logoboardLightFirstColor[3] ) / 2 + "," + ( logoboardLightFirstColor[1] + logoboardLightFirstColor[3] ) / 2 + "," + ( logoboardLightFirstColor[2] + logoboardLightFirstColor[3] ) / 2 + "),transparent)";
                    logoboardLightColorDecision(i,logoboardLightFirstColor[0][i-1],logoboardLightFirstColor[1][i-1],logoboardLightFirstColor[2][i-1],logoboardLightFirstColor[3][i-1]);
                    let logoboardLightOpacityProportion = logoboardLightFirstOpacity[i-1] + ( - logoboardLightFirstOpacity[i-1] ) / changeTime * nowTime[0];
                    logoboardCoordinateNumber.style.opacity = logoboardLightOpacityProportion;
                    logoboardLightOpacity[i-1] = logoboardLightOpacityProportion;
                }
            } else {
                for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                    let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${i}`);
                    logoboardCoordinateNumber.style.background = "linear-gradient(rgb(0,0,0),transparent)";
                    for ( var j = 0 ; j < 4 ; j++ ) {
                        logoboardLightColor[j][i-1] = 0;
                    }
                }
                logoboardLightON = 0;
                clearInterval(logoboardOFFSetInterval);
            }
        });
    }
}

function logoboardLightFadeChage(logoboardLightNowNumber,colorRed,colorGreen,colorBlue,colorWhite,opacity = 1,changeTime = 0,nowTime = 0,logoboardSetInterval = 0,animateStop = 1) {
    let logoboardLightChangeColor = [], finish = 0, timeProportion, logoboraLightZIndex = 0, fadePermission = 0, maxColor = 0;
    logoboardLightChangeColor[0] = colorRed;
    logoboardLightChangeColor[1] = colorGreen;
    logoboardLightChangeColor[2] = colorBlue;
    logoboardLightChangeColor[3] = colorWhite;

    let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${logoboardLightNowNumber}`);

    for ( var i = 0 ; i < 4 ; i++ ) {
        if ( logoboardLightChangeColor[i] >= 0 ) {
            if ( logoboardLightUseColorNumber[i] > logoboardLightUseNumber[0] ) finish = 1;
            else if ( logoboardLightUseColorNumber[i] < logoboardLightUseNumber[0] ) logoboardLightUseColorNumber[i] = logoboardLightUseNumber[0];
        } else {
            logoboardLightChangeColor[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1];
            fadePermission = 1;
        }

        if ( logoboardLightChangeColor[i] > maxColor ) maxColor = logoboardLightChangeColor[i];
    }

    if ( animateStop === 2 ) fadePermission = 1;

    opacity *= maxColor / 255;

    if ( nowTime <= changeTime ) {

        logoboardLightON = 1;

        if ( fadePermission === 0 && finish === 1 && logoboardSetInterval !== 0 ) {
            clearInterval(logoboardSetInterval);
        }

        if ( changeTime === 0 ) {
            timeProportion = 1;
        } else {
            timeProportion = nowTime / changeTime;
        }
        
        if ( ( logoboardLightUseAnimateNumber === 1 || logoboardLightAnimateOffRoad === 1 ) && animateStop >= 1 ) {
            logoboardLightUseNumber[1] = 0;
            logoboardLightUseAnimateNumber = 0;
            logoboardLightUseAnimateColorNumber = [ 0 , 0 , 0 , 0 ];
            logoboardLightAnimateOffRoad = 1;

            if ( fadePermission === 1 ) {
                for ( var i = 0 ; i < 4 ; i++ ) logoboardLightChangeColor[i] = logoboardLightAnimateColor[i][logoboardLightNowNumber-1] + ( logoboardLightChangeColor[i] - logoboardLightAnimateColor[i][logoboardLightNowNumber-1] ) * timeProportion;
                opacity = logoboardLightFirstOpacity[logoboardLightNowNumber-1] + ( opacity - logoboardLightFirstOpacity[logoboardLightNowNumber-1] ) * timeProportion;
            }

            //logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + ( logoboardLightChangeColor[0] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[1] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[2] + logoboardLightChangeColor[3] ) / 2 + "),transparent)";
            //logoboardCoordinateNumber.style.filter = "brightness(" + ( 150 - 60 / 255 * logoboardLightChangeColor[3] ) + "%)";
            logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3]);
            for ( var i = 0 ; i < 4 ; i++ ) {
                logoboraLightZIndex += logoboardLightChangeColor[i];
            }
            logoboardLightOpacity[logoboardLightNowNumber-1] = opacity;
            logoboardCoordinateNumber.style.zIndex = logoboraLightZIndex;

            logoboardCoordinateNumber.style.opacity = opacity;

            for ( var j = 0 ; j < 4 ; j++ ) {
                logoboardLightColor[j][logoboardLightNowNumber-1] = logoboardLightChangeColor[j];
            }
            
        } else if ( logoboardLightFirstON === 0 ) {
            //logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + ( logoboardLightChangeColor[0] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[1] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[2] + logoboardLightChangeColor[3] ) / 2 + "),transparent)";
            //logoboardCoordinateNumber.style.filter = "brightness(" + ( 150 - 60 / 255 * logoboardLightChangeColor[3] ) + "%)";
            for ( var j = 0 ; j < 4 ; j++ ) {
                logoboardLightColor[j][logoboardLightNowNumber-1] = logoboardLightChangeColor[j];
            }
            if (  logoboardLightUseAnimateNumber === 0 ) {
                logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3]);
                for ( var i = 0 ; i < 4 ; i++ ) {
                    logoboraLightZIndex += logoboardLightChangeColor[i];
                }
                logoboardCoordinateNumber.style.zIndex = logoboraLightZIndex;

                let logoboardLightOpacityProportion = logoboardLightFirstOpacity[logoboardLightNowNumber-1] + ( opacity - logoboardLightFirstOpacity[logoboardLightNowNumber-1] ) * timeProportion;
                logoboardCoordinateNumber.style.opacity = logoboardLightOpacityProportion;
                
                logoboardLightOpacity[logoboardLightNowNumber-1] = logoboardLightOpacityProportion;
            }
        } else {    
            let logoboardLightColorProportion = [];
            let logoboardLightOpacityProportion = logoboardLightFirstOpacity[logoboardLightNowNumber-1] + ( opacity - logoboardLightFirstOpacity[logoboardLightNowNumber-1] ) * timeProportion;
            logoboardLightOpacity[logoboardLightNowNumber-1] = logoboardLightOpacityProportion;
            for ( var i = 0 ; i < 4 ; i++ ) {
                /*if ( logoboardLightChangeColor[i] === -1 ) {
                    logoboardLightColorProportion[i] = logoboardLightColor[i][logoboardLightNowNumber-1];
                } else */if ( logoboardLightKeepColor[i] === 1 ) {
                    if ( nowTime < changeTime / 2 ) logoboardLightColorProportion[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1];
                    else logoboardLightColorProportion[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1] + ( logoboardLightChangeColor[i] - logoboardLightFirstColor[i][logoboardLightNowNumber-1] ) / changeTime * 2 * ( nowTime - changeTime / 2 );
                } else {
                    if ( nowTime < changeTime / 2 ) logoboardLightColorProportion[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1] + ( logoboardLightChangeColor[i] - logoboardLightFirstColor[i][logoboardLightNowNumber-1] ) / changeTime * 2 * nowTime;
                    else logoboardLightColorProportion[i] = logoboardLightChangeColor[i];
                }
            }

            for ( var i = 0 ; i < 4 ; i++ ) logoboardLightColor[i][logoboardLightNowNumber-1] = logoboardLightColorProportion[i];

            if ( logoboardLightUseAnimateNumber === 0 || animateStop === 1 ) {
                //logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + ( logoboardLightColorProportion[0] + logoboardLightColorProportion[3] ) / 2 + "," + ( logoboardLightColorProportion[1] + logoboardLightColorProportion[3] ) / 2 + "," + ( logoboardLightColorProportion[2] + logoboardLightColorProportion[3] ) / 2 + "),transparent)";
                //logoboardCoordinateNumber.style.filter = "brightness(" + ( 150 - 60 / 255 * logoboardLightColorProportion[3] ) + "%)";
                logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightColorProportion[0],logoboardLightColorProportion[1],logoboardLightColorProportion[2],logoboardLightColorProportion[3]);
                for ( var i = 0 ; i < 4 ; i++ ) {
                    logoboraLightZIndex += logoboardLightColorProportion[i];
                }
                logoboardCoordinateNumber.style.zIndex = logoboraLightZIndex;

                logoboardCoordinateNumber.style.opacity = logoboardLightOpacityProportion;
            }
        }
    } else {
        //logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + ( logoboardLightChangeColor[0] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[1] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[2] + logoboardLightChangeColor[3] ) / 2 + "),transparent)";
        //logoboardCoordinateNumber.style.filter = "brightness(" + ( 150 - 60 / 255 * logoboardLightChangeColor[3] ) + "%)";
        logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3]);
        for ( var i = 0 ; i < 4 ; i++ ) {
            logoboraLightZIndex += logoboardLightChangeColor[i];
        }
        logoboardCoordinateNumber.style.zIndex = logoboraLightZIndex;

        logoboardCoordinateNumber.style.opacity = opacity;

        for ( var j = 0 ; j < 4 ; j++ ) {
            logoboardLightColor[j][logoboardLightNowNumber-1] = logoboardLightChangeColor[j];
        }
        logoboardLightOpacity[logoboardLightNowNumber-1] = opacity;

        clearInterval(logoboardSetInterval);
    }
}

function logoboardLightAnimateChange(logoboardLightNowNumber,colorRed,colorGreen,colorBlue,colorWhite,opacity = 1,changeTime = 0,nowTime = -1) {
    fadePermission = 1;
    logoboardLightON = 1;
    logoboardLightUseAnimateNumber = 1;
    let logoboardLightChangeColor = [];
    let logoboraLightZIndex = 0;
    let maxColor = 0;
    logoboardLightChangeColor[0] = colorRed;
    logoboardLightChangeColor[1] = colorGreen;
    logoboardLightChangeColor[2] = colorBlue;
    logoboardLightChangeColor[3] = colorWhite;

    let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${logoboardLightNowNumber}`);

    for ( var i = 0 ; i < 4 ; i++ ) {
        if ( logoboardLightChangeColor[i] === -1 ) {
            logoboardLightChangeColor[i] = logoboardLightColor[i][logoboardLightNowNumber-1];
            //fadePermission = 1;
        } else {
            logoboardLightUseAnimateColorNumber[i] = logoboardLightUseNumber[1];
        }

        if ( logoboardLightChangeColor[i] > maxColor ) maxColor = logoboardLightChangeColor[i];
    }

    opacity *= maxColor / 255;

    if ( logoboardLightUseNumber[1] > 1 ) fadePermission = 0;

    if ( fadePermission === 1 && changeTime > 0 && nowTime < changeTime ) {
        if ( logoboardLightFirstON === 0 ) {
            opacity = logoboardLightFirstOpacity[logoboardLightNowNumber-1] + ( opacity - logoboardLightFirstOpacity[logoboardLightNowNumber-1] ) / changeTime * nowTime;
        } else {
            for ( var i = 0 ; i < 4 ; i++ ) logoboardLightChangeColor[i] = logoboardLightColor[i][logoboardLightNowNumber-1] + ( logoboardLightChangeColor[i] - logoboardLightColor[i][logoboardLightNowNumber-1] ) / changeTime * nowTime;
        }
    }

    //logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + ( logoboardLightChangeColor[0] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[1] + logoboardLightChangeColor[3] ) / 2 + "," + ( logoboardLightChangeColor[2] + logoboardLightChangeColor[3] ) / 2 + "),transparent)";
    //logoboardCoordinateNumber.style.filter = "brightness(" + ( 150 - 60 / 255 * logoboardLightChangeColor[3] ) + "%)";
    logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3]);
    for ( var i = 0 ; i < 4 ; i++ ) {
        logoboardLightAnimateColor[i][logoboardLightNowNumber-1] = logoboardLightChangeColor[i];
        logoboraLightZIndex += logoboardLightChangeColor[i];
    }
    logoboardCoordinateNumber.style.zIndex = logoboraLightZIndex;
    logoboardCoordinateNumber.style.opacity = opacity;

    logoboardLightOpacity[logoboardLightNowNumber-1] = opacity;
}

//スモーク, スノウマシン

var smokeON = 0;
var smokeFadeRatio = 4;
var smokePushONTime;
var smokePushOFFTime;
var smokeSetInterval;
let smokeCoordinate = document.getElementById(`SMOKE_PARENT`);
let smokeImgCoordinate = smokeCoordinate.getElementsByTagName(`img`);
let smokeWriteCoordinate = document.getElementById(`smoke_machine_state`);
var snowON = 0;
var snowFadeRatio = 6;
var snowPushONTime;
var snowPushOFFTime;
var snowSetInterval1;
var snowSetInterval2;
let snowCoordinate = document.getElementById(`SNOW_PARENT`);
let snowImgCoordinate = snowCoordinate.getElementsByTagName(`img`);
let snowWriteCoordinate = document.getElementById(`snow_machine_state`);

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if ( performanceNowSelect !== -1 ) {
        if ( key === "-" ) {
            smokeON = 1 - smokeON;
            if ( smokeON === 1 ) {
                clearInterval(smokeSetInterval);
                smokePushONTime = Date.now();
                for ( var i = 0 ; i < smokeNumber ; i++ ) {
                    smokeImgCoordinate[i].style.width = smokeWidth + "px";
                }
                smokeCoordinate.style.opacity = 1;
                smokeWriteCoordinate.innerHTML = "ON";
            } else {
                smokePushOFFTime = Date.now();
                smokeWriteCoordinate.innerHTML = "OFF";
                let smokeFadeTime = 10000 + smokeFadeRatio * ( smokePushOFFTime - smokePushONTime );
                smokeSetInterval = setInterval( function () {
                    nowTime = Date.now() - smokePushOFFTime;
                    if ( nowTime <= smokeFadeTime ) {
                        for ( var i = 0 ; i < smokeNumber ; i++ ) {
                            smokeImgCoordinate[i].style.width = Math.sin( ( 1 - nowTime / smokeFadeTime ) / 2 * Math.PI ) * smokeWidth + "px";
                        }
                        smokeCoordinate.style.opacity = Math.sin( ( 1 - nowTime / smokeFadeTime ) / 2 * Math.PI );
                    } else {
                        clearInterval(smokeSetInterval);
                    }
                });
            }        
        } else if ( key === "^" ) {
            snowON = 1 - snowON;
            if ( snowON === 1 ) {
                clearInterval(snowSetInterval2);
                snowPushONTime = Date.now();
                for ( var i = 0 ; i < snowNumber ; i++ ) {
                    snowImgCoordinate[i].style.width = snowWidth + "px";
                }
                snowCoordinate.style.opacity = 1;
                snowWriteCoordinate.innerHTML = "ON";
                snowSetInterval1 = setInterval( function () {
                    let nowTime = Date.now();
                    for ( var i = 0 ; i < snowNumber ; i++ ) {
                        snowImgCoordinate[i].style.rotate = ( nowTime - snowPushONTime ) / 50 + "deg";
                    }
                });
            } else {
                snowPushOFFTime = Date.now();
                clearInterval(snowSetInterval1);
                snowWriteCoordinate.innerHTML = "OFF";
                let snowFadeTime = snowFadeRatio * ( snowPushOFFTime - snowPushONTime );
                snowSetInterval2 = setInterval( function () {
                    nowTime = Date.now() - snowPushOFFTime;
                    if ( nowTime <= snowFadeTime ) {
                        for ( var i = 0 ; i < snowNumber ; i++ ) {
                            snowImgCoordinate[i].style.width = Math.sin( ( 1 - nowTime / snowFadeTime ) / 2 * Math.PI ) * snowWidth + "px";
                        }
                        snowCoordinate.style.opacity = Math.sin( ( 1 - nowTime / snowFadeTime ) / 2 * Math.PI );
                    } else {
                        clearInterval(snowSetInterval2);
                    }
                });
            }
        }
    }
});

//ウォーターカーテン
const waterCurtainCoordinate = document.getElementById(`WATER_CURTAIN`);
let waterCurtainUseNumber = 0;
let waterCurtainSetTimeout = [];
let waterCurtainActualSetTimeout = [];

function waterCurtainSetting(waterCurtainWaterNumber) {
    while ( waterCurtainCoordinate.firstChild ) {
        waterCurtainCoordinate.removeChild(waterCurtainCoordinate.firstChild);
    }

    waterCurtainUseNumber++;

    for ( var i = 0 ; i < waterCurtainSetTimeout.length ; i++ ) {
        clearTimeout(waterCurtainSetTimeout[i]);
    }
    waterCurtainSetTimeout = [];

    for ( var i = 0 ; i < waterCurtainWaterNumber ; i++ ) {
        let waterCurtain_div = document.createElement('div');
        waterCurtain_div.id = `WATER_CURTAIN_WATER_${waterCurtainUseNumber}-${i}`;
        waterCurtain_div.classList.add('WATER_CURTAIN_WATER');
        waterCurtain_div.style.WebkitMask = "radial-gradient( circle at center, transparent " + ( waterCurtainWidth / 2 - waterCurtainWidth * 0.03 ) + "px, white " + ( waterCurtainWidth / 2 - waterCurtainWidth * 0.03 ) + "px, white )"; 
        waterCurtainCoordinate.appendChild(waterCurtain_div);
        waterCurtainChangeAngle(i,0,0);
    }

    return waterCurtainUseNumber;
}

function waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowWaterNumber,startDeg,widthDeg) {
    if ( waterCurtainMyNumber === waterCurtainUseNumber ) {
        if ( widthDeg < 0 ) {
            widthDeg *= -1;
            startDeg -= widthDeg;
        }

        let waterCurtainCoordinateNumber = document.getElementById(`WATER_CURTAIN_WATER_${waterCurtainMyNumber}-${waterCurtainNowWaterNumber}`);
        waterCurtainCoordinateNumber.style.background = "conic-gradient( transparent 0deg, white 0deg, white " + widthDeg + "deg, transparent " + widthDeg + "deg)";
        waterCurtainCoordinateNumber.style.transform = "rotateZ(" + ( startDeg + 63 ) + "deg)";
    }
}

function waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowWaterNumber,display) {
    if ( waterCurtainMyNumber === waterCurtainUseNumber ) {
        let waterCurtainCoordinateNumber = document.getElementById(`WATER_CURTAIN_WATER_${waterCurtainMyNumber}-${waterCurtainNowWaterNumber}`);
        if ( display === 1 ) waterCurtainCoordinateNumber.style.display = "block";
        else waterCurtainCoordinateNumber.style.display = "none";
    }
}