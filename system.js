//プルダウンメニュー

var performanceNowSelect;
let totalPage = [ [] , [] , [] , [] , [] , [] , [] ];
let performanceTitle = [ [] , [] , [] , [] ];
let performanceMusicDay = [];
let performanceMusicNight = [];
let performanceScriptURL = [ [] , [] ];
let nowPerformanceNumber = 0;
let led10FadeTime = 2000;
let smokeFadeRatio = 2;
let waterCannon4FadeTime = 1;

function jsSetting_Old(myFolderName,myOriginalName,dayMainThisPage,daySubThisPage,nightMainThisPage,nightSubThisPage,led10FadeTime = 2000) {
    let performanceOption = document.createElement('option');
    performanceOption.value = myFolderName;
    performanceOption.textContent = myOriginalName;
    
    performanceSelect.appendChild(performanceOption);

    totalPage[0][nowPerformanceNumber] = dayMainThisPage;
    totalPage[1][nowPerformanceNumber] = daySubThisPage;
    totalPage[2][nowPerformanceNumber] = nightMainThisPage;
    totalPage[3][nowPerformanceNumber] = nightSubThisPage;
    totalPage[4][nowPerformanceNumber] = led10FadeTime;
    totalPage[5][nowPerformanceNumber] = 2;
    totalPage[6][nowPerformanceNumber] = 0;

    for ( var i = 0 ; i < 4 ; i++ ) performanceTitle[i][nowPerformanceNumber] = "-";

    performanceScriptURL[0][nowPerformanceNumber] = 0;
    performanceScriptURL[1][nowPerformanceNumber] = 0;

    performanceMusicDay[nowPerformanceNumber] = 0;
    performanceMusicNight[nowPerformanceNumber] = 0;

    nowPerformanceNumber++;
}

function jsSetting(myFolderName,myYear,mySeason,myOriginalName,myDayTitle,dayMainThisPage,daySubThisPage,dayMusicArray,dayURL,myNightTitle,nightMainThisPage,nightSubThisPage,nightMusicArray,nightURL,ledNow10FadeTime = 2000,smokeFadeNowRatio = 2,waterCannonNow4FadeTime = 1) {
    let performanceOption = document.createElement('option');
    performanceOption.value = myFolderName;
    performanceOption.textContent = myOriginalName;
    
    performanceSelect.appendChild(performanceOption);

    totalPage[0][nowPerformanceNumber] = dayMainThisPage;
    totalPage[1][nowPerformanceNumber] = daySubThisPage;
    totalPage[2][nowPerformanceNumber] = nightMainThisPage;
    totalPage[3][nowPerformanceNumber] = nightSubThisPage;
    totalPage[4][nowPerformanceNumber] = ledNow10FadeTime;
    totalPage[5][nowPerformanceNumber] = smokeFadeNowRatio;
    totalPage[6][nowPerformanceNumber] = waterCannonNow4FadeTime;

    performanceTitle[0][nowPerformanceNumber] = myYear;
    performanceTitle[1][nowPerformanceNumber] = mySeason;
    performanceTitle[2][nowPerformanceNumber] = myDayTitle;
    performanceTitle[3][nowPerformanceNumber] = myNightTitle;

    performanceScriptURL[0][nowPerformanceNumber] = dayURL;
    performanceScriptURL[1][nowPerformanceNumber] = nightURL;

    if ( dayMusicArray === 0 ) performanceMusicDay[nowPerformanceNumber] = 0;
    else performanceMusicDay[nowPerformanceNumber] = dayMusicArray;
    
    if ( nightMusicArray === 0 ) performanceMusicNight[nowPerformanceNumber] = 0;
    else performanceMusicNight[nowPerformanceNumber] = nightMusicArray;

    nowPerformanceNumber++;
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
        } else {
            pageText5.innerHTML = "Night";

            mainTotalPage = totalPage[2][performanceSelect.selectedIndex];
            subTotalPage = totalPage[3][performanceSelect.selectedIndex];
        }

    } while( mainTotalPage === 0 )

    pageText1.innerHTML = mainTotalPage;
    pageText2.innerHTML = subTotalPage;
    pageText3.innerHTML = mainNowPage;
    pageText4.innerHTML = subNowPage;    
}

//ファンクションキー無効化
window.document.onkeydown = function(event){
    if ( event.keyCode >= 112 && event.keyCode <= 123 ) {
        event.keyCode = null;
        event.returnValue = false;
    }
}

/*function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
}*/

let musicNumber = -1;
let musicNextNumber = -1;
let mN = 1;
let performanceMusicNumber;
let performanceMusicSelect;
let dnMusicSelect;
let music = document.getElementById('music1');
let musicNext = document.getElementById('music0');
let musicLength;
let musicPlayPosition;
let musicLoop;
let musicVolume;
let musicNextLoop;
let musicNextVolume;
let musicPlay = 0;
let musicVolumeMicrophone;
let dnTitle = [ "Day" , "Night" ];
let musicTime;
let musicTimeNumber;
let musicScriptNumber;
let musicChangePossible;
let micState = document.getElementById('machine_mic');
let musicVolumeSetInterval;
let scriptScrollON = document.getElementById('script_scroll');
let manual = document.getElementById('manual');
let manualBackground = document.getElementById('manual_background');
let manualON = 0;
let musicDefultVolume;
let scriptFinish = 0;
music.preload = "auto";
musicNext.preload = "auto";

document.getElementById('manual_button1').addEventListener("click", function() {
    manual.style.display = "block";
    manualBackground.style.display = "block";
    manualSelectDisplay(2);
    manualON = 1;
});

document.getElementById('manual_button2').addEventListener("click", function() {
    manual.style.display = "block";
    manualBackground.style.display = "block";
    manualSelectDisplay(1);
    manualON = 1;
});

document.getElementById('manual_close').addEventListener("click", function() {
    manual.style.display = "none";
    manualBackground.style.display = "none";
    manualON = 0;
});

manualBackground.addEventListener("click", function() {
    manual.style.display = "none";
    manualBackground.style.display = "none";
    manualON = 0;
});

function manualSelectDisplay(i) {
    document.getElementById(`manual${i}`).style.display = "block";
    document.getElementById(`manual${ 3 - i }`).style.display = "none";

    document.getElementById(`manual_select_button${i}`).classList.add(`manual_select_now`);
    document.getElementById(`manual_select_button${ 3 - i }`).classList.remove(`manual_select_now`);
}

document.getElementById('manual_select_button1').addEventListener("click", function() {
    manualSelectDisplay(1);
});

document.getElementById('manual_select_button2').addEventListener("click", function() {
    manualSelectDisplay(2);
});

function scriptScroll(i) {
    if ( scriptScrollON.checked ) {
        document.getElementById(`scriptListContent${i}`).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

function musicPlayDisplay() {
    if ( music.paused === true ) music.play();
    else music.pause();
}

function minutesDisplay(time) {
    time = Math.floor(time);

    let minutes = Math.floor( time / 60 ).toString().padStart( 2 , '0' );
    let seconds = ( time % 60 ).toString().padStart( 2 , '0' );

    return minutes + ":" + seconds;
}

function musicPlayPositionDisplay() {
    musicPlayPosition = music.currentTime;
    document.getElementById('music_play_position').innerHTML = minutesDisplay(musicPlayPosition);
}

function musicLoopDisplay() {
    if ( musicLoop ) {
        music.loop = true;
        document.getElementById('music_loop_button').style.background = "#AAAAAA";
    } else {
        music.loop = false;
        document.getElementById('music_loop_button').style.background = "transparent";
    }
}

function musicVolDisplay(nextVol = 0) {
    if ( nextVol === 1 ) musicVolume += 0.1;
    else if ( nextVol === -1 ) musicVolume -= 0.1;

    if ( musicVolume > 1 ) musicVolume = 1;
    else if ( musicVolume < 0 ) musicVolume = 0;

    musicVolume = Math.round( musicVolume * 10 ) / 10;
    music.volume = musicVolume;
    let displayVol = Math.floor( 10 * musicVolume );

    document.getElementById('music_vol_value').innerHTML = displayVol.toString().padStart( 2 , '0' );
}

function micOnOff() {
    if ( musicVolumeMicrophone === 0 ) {
        clearInterval(musicVolumeSetInterval);
        micState.style.backgroundColor = "transparent";
    } else {
        micState.style.backgroundColor = "#999";
    }
}

function musicChange(musicPN = 1) {
    let finish;
    
    if ( musicNextNumber !== -1 && musicPN === 1 ) {
        mN = 1 - mN;
        musicNumber = musicNextNumber;
        music = document.getElementById(`music${ mN }`);
        musicNext = document.getElementById(`music${ 1 - mN }`);

        document.getElementById('music_now_number').innerHTML = musicNumber;
        document.getElementById('music_img').src = "music_0.png";
        musicLoop = musicNextLoop;
        musicVolume = musicNextVolume;
        musicPlay = 0;
        musicVolumeMicrophone = 0;
        musicDefultVolume = musicVolume;
        
        micOnOff();
        musicLoopDisplay();
        musicVolDisplay();
    } else if ( musicPN === 0 ) {
        music.pause();
        music.currentTime = 0;
        musicVolume = musicDefultVolume;
        musicPlay = 0;
        musicVolumeMicrophone = 0;
        musicScriptNumber = 0;
        if ( scriptPerformanceNumber !== -1 ) scriptScroll(musicTimeNumber[musicNumber][musicScriptNumber]);
        
        micOnOff();
        musicLoopDisplay();
        musicVolDisplay();
        return 0;
    } else if ( musicPN === -1 ) {
        music.pause();
        musicNextNumber = musicNumber;
    }

    musicNextNumber += musicPN;

    do {
        finish = 0;

        switch ( dnMusicSelect ) {
            case 0:
                if ( performanceMusicDay[performanceMusicNumber] === 0 ) {
                    musicNextNumber = "-";
                    musicChangePossible = 0;
                    finish = 0;
                } else if ( musicNextNumber < 0 ) {
                    musicNextNumber = performanceMusicDay[performanceMusicNumber].length - 1;
                    finish = 1;
                } else if ( performanceMusicDay[performanceMusicNumber].length <= musicNextNumber ) {
                    musicNextNumber = 0;
                    finish = 1;
                } else if ( performanceMusicDay[performanceMusicNumber][musicNextNumber].length === 1 ) {
                    musicNextNumber += musicPN;
                    finish = 1;
                }
                break;
            case 1:
                if ( performanceMusicNight[performanceMusicNumber] === 0 ) {
                    musicNextNumber = "-";
                    musicChangePossible = 0;
                    finish = 0;
                } else if ( musicNextNumber < 0 ) {
                    musicNextNumber = performanceMusicNight[performanceMusicNumber].length - 1;
                    finish = 1;
                } else if ( performanceMusicNight[performanceMusicNumber].length <= musicNextNumber ) {
                    musicNextNumber = 0;
                    finish = 1;
                } else if ( performanceMusicNight[performanceMusicNumber][musicNextNumber].length === 1 ) {
                    musicNextNumber += musicPN;
                    finish = 1;
                }
                break;
        }
    } while(finish);

    if ( musicChangePossible === 0 ) {
        for ( var i = 1 ; i <= 2 ; i++ ) document.getElementById(`musicParent${i}`).style.opacity = 0.6;
        document.getElementById('music_length').innerHTML = minutesDisplay(0);
        music.src = "";
        musicLoop = 0;
        musicVolume = 0;
        musicNext.src = "";
        musicNextLoop = 0;
        musicNextVolume = 0;
    } else {
        switch ( dnMusicSelect ) {
            case 0:
                musicNext.src = "Music/" + performanceMusicSelect + "_" + "day" + "_" + musicNextNumber + ".mp3";
                musicNextLoop = performanceMusicDay[performanceMusicNumber][musicNextNumber][1];
                musicNextVolume = performanceMusicDay[performanceMusicNumber][musicNextNumber][2];
                break;
            case 1:
                musicNext.src = "Music/" + performanceMusicSelect + "_" + "night" + "_" + musicNextNumber + ".mp3";
                musicNextLoop = performanceMusicNight[performanceMusicNumber][musicNextNumber][1];
                musicNextVolume = performanceMusicNight[performanceMusicNumber][musicNextNumber][2];
                break;
        }
    }

    if ( musicPN === -1 ) {
        mN = 1 - mN;

        [ musicNumber , musicNextNumber ] = [ musicNextNumber , musicNumber ];

        music = document.getElementById(`music${ mN }`);
        musicNext = document.getElementById(`music${ 1 - mN }`);

        document.getElementById('music_now_number').innerHTML = musicNumber;
        document.getElementById('music_img').src = "music_0.png";

        [ musicLoop , musicNextLoop ] = [ musicNextLoop , musicLoop ];
        [ musicVolume , musicNextVolume ] = [ musicNextVolume , musicVolume ];

        musicPlay = 0;
        musicVolumeMicrophone = 0;
        musicDefultVolume = musicVolume;
        
        micOnOff();
        musicLoopDisplay();
        musicVolDisplay();
    }
    
    musicScriptNumber = 0;
    if ( scriptFinish === 1 && scriptPerformanceNumber !== -1 ) scriptScroll(musicTimeNumber[musicNumber][musicScriptNumber]);
}

function performanceMusicChange() {
    musicChangePossible = 1;
    for ( var i = 1 ; i <= 2 ; i++ ) document.getElementById(`musicParent${i}`).style.opacity = 1;

    document.getElementById('performance-year').innerHTML = performanceTitle[0][performanceSelect.selectedIndex];
    document.getElementById('performance-season').innerHTML = performanceTitle[1][performanceSelect.selectedIndex];
    document.getElementById('performance-title').innerHTML = performanceTitle[ 2 + dnNowSelect ][performanceSelect.selectedIndex];

    document.getElementById('performance-dn').innerHTML = dnTitle[dnNowSelect];

    performanceMusicNumber = performanceSelect.selectedIndex;
    performanceMusicSelect = performanceNowSelect;
    dnMusicSelect = dnNowSelect;
    musicNumber = -1;
    musicNextNumber = -1;
    scriptFinish = 0;

    scriptFetch();
    musicChange();
    musicChange();
    performanceDetailDisplay();
}

music.addEventListener("loadedmetadata", function() {
    musicLength = music.duration;
    document.getElementById('music_length').innerHTML = minutesDisplay(musicLength);
    musicPlayPositionDisplay();
});

music.addEventListener("timeupdate", function() {
    musicPlayPositionDisplay();

    if ( scriptPerformanceNumber !== -1 && musicNumber >= 1 && music.currentTime > musicTime[musicNumber][musicScriptNumber] && musicScriptNumber + 1 < musicTime[musicNumber].length ) {
        musicScriptNumber++;
        scriptScroll(musicTimeNumber[musicNumber][musicScriptNumber]);
    }
});

music.addEventListener("play", function() {
    document.getElementById('music_img').src = "music_1.png";
    musicPlay = 1;
});

music.addEventListener("pause", function() {
    document.getElementById('music_img').src = "music_0.png";
    musicPlay = 0;
});

music.addEventListener("ended", function() {
    musicChange();
    music.load();
});

musicNext.addEventListener("loadedmetadata", function() {
    musicLength = music.duration;
    document.getElementById('music_length').innerHTML = minutesDisplay(musicLength);
    musicPlayPositionDisplay();
    musicScriptNumber = 0;
});

musicNext.addEventListener("timeupdate", function() {
    musicPlayPositionDisplay();

    if ( scriptPerformanceNumber !== -1 && musicNumber >= 1 && music.currentTime > musicTime[musicNumber][musicScriptNumber] && musicScriptNumber + 1 < musicTime[musicNumber].length ) {
        musicScriptNumber++;
        scriptScroll(musicTimeNumber[musicNumber][musicScriptNumber]);
    }
});

musicNext.addEventListener("play", function() {
    document.getElementById('music_img').src = "music_1.png";
    musicPlay = 1;
});

musicNext.addEventListener("pause", function() {
    document.getElementById('music_img').src = "music_0.png";
    musicPlay = 0;
});

musicNext.addEventListener("ended", function() {
    musicChange();
    music.load();
});

document.getElementById('music_play_button').addEventListener("click", function() {
    if ( musicChangePossible === 1 ) {
        musicPlayDisplay();
    }
});

document.getElementById('music_prev_button').addEventListener("click", function() {
    if ( musicChangePossible === 1 ) {
        if ( music.currentTime >= 1 ) musicChange(0);
        else musicChange(-1);
    }
});

document.getElementById('music_next_button').addEventListener("click", function() {
    if ( musicChangePossible === 1 ) {
        musicChange();
    }
});

document.getElementById('music_loop_button').addEventListener("click", function() {
    if ( musicChangePossible === 1 ) {
        musicLoop = 1 - musicLoop;
        musicLoopDisplay();
    }
});

document.getElementById('performance-change').addEventListener("click", function() {
    performanceMusicChange();
});

scriptScrollON.addEventListener("click", function() {
    if ( scriptScrollON.checked && scriptPerformanceNumber !== -1 && musicScriptNumber + 1 < musicTime[musicNumber].length ) {
        scriptScroll(musicTimeNumber[musicNumber][musicScriptNumber]);
    }
});

var subSelectStyle = 0;
var subCode = -1;
var insCode = 45;
var delCode = 0;
var ua = window.navigator.userAgent.toLowerCase();
if ( ua.indexOf("mac os x") !== -1 ) insCode = 124;

var ub = window.navigator.userAgent.toLowerCase();
if ( ub.indexOf("ipad") > -1 || ( ub.indexOf("macintosh") > -1 && "ontouchend" in document ) ) {
    subSelectStyle = 1;
    insCode = 8;
}

function performanceTitleSizeChange() {
    let nowSelectTitle = performanceSelect.options[performanceSelect.selectedIndex].innerText;

    let nowLong = 0;
    for ( var i = 0 ; i < nowSelectTitle.length ; i++ ) {
        nowLong += characterLength(nowSelectTitle[i]);
    }

    let performanceTitleNowFontSize = nowLong * performanceTitleFontSize;
    if ( performanceTitleNowFontSize > performanceTitleWidth ) {
        performanceSelect.style.fontSize = performanceTitleFontSize / performanceTitleNowFontSize * performanceTitleWidth + "px";
    } else {
        performanceSelect.style.fontSize = performanceTitleFontSize + "px";
    }
}

function performanceChange(dnNowSelectNumber = 0) {
    dnNowSelect = dnNowSelectNumber;

    dnScript();

    performanceNowSelect = performanceSelect.value;

    led10FadeTime = totalPage[4][performanceSelect.selectedIndex];
    smokeFadeRatio = totalPage[5][performanceSelect.selectedIndex];
    waterCannon4FadeTime = totalPage[6][performanceSelect.selectedIndex];

    performanceTitleSizeChange();
}

performanceSelect.addEventListener("change", function() {
    performanceChange();
});

let scriptPerformanceList;
let scriptPerformanceNumber = -1;
let scriptMaxNumber = 0;
let script = document.getElementById('script');
let scriptError = document.getElementById('script_error');
let scriptDefult = document.getElementById('scriptDefult');
let scriptKeyTitleArray = [ "WCurtain" , "LED" , "UnderW" , "Moving", "Par" , "Spot" , "Stage" , "Audience" , "Board" ,"White" , "WCannon" , "Sound" , "SEffects" , "Smoke" , "Snow" ];
let scriptPatternLogo = [ "●" , "▲" , "■" , "◆" ];
let scriptPatternColor = [ "blue" , "green" , "red" , "orange" ];

function scriptTimeDisplay(scriptData,i) {
    let scriptTime;

    if ( !isNaN( scriptData[i][3] ) ) {
        let nowTime = scriptData[i][3];

        let minutes = Math.trunc( nowTime / 60 ).toString().padStart( 2 , '0' );
        let seconds = Math.trunc( nowTime % 60 ).toString().padStart( 2 , '0' );
        let milliSeconds = Math.trunc( ( nowTime - Math.trunc(nowTime) ) * 100 ).toString().padStart( 2 , '0' );

        scriptTime = scriptData[i][2] + " " + minutes + ":" + seconds + "." + milliSeconds;
    } else {
        scriptTime = scriptData[i][2] + " " + scriptData[i][3];
    }

    return scriptTime;
}

function scriptKeyDisplay(scriptData,i) {
    let scriptKeyContent = "";

    if ( scriptData[i][1] !== "" ) {
        scriptKeyContent = `<span class=\"scriptPattern${scriptData[i][1][0]}\">`;
        for ( var j = 2 ; j < scriptData[i][1].length ; j += 2 ) scriptKeyContent += scriptPatternLogo[scriptData[i][1][j]-1];
        scriptKeyContent += "</span>";
    }

    if ( scriptData[i][5] !== "" ) scriptKeyContent += scriptData[i][5] + "- ";

    let scriptKey = scriptData[i][6];
    if ( isNaN(scriptKey) ) {
        let scriptAddNumber = 0;
        let scriptFinish = 0;
        while ( scriptAddNumber !== -1 ) {
            let scriptKeySpan = "";

            scriptAddNumber = scriptKey.indexOf('+',scriptFinish);
            if ( scriptAddNumber === -1 ) break;

            for ( var l = scriptFinish ; l < scriptAddNumber ; l++ ) scriptKeySpan += scriptKey[l];

            scriptKeyContent += "<span class=\"scriptKeySpan\">" + scriptKeySpan + "</span>" + " + ";

            scriptFinish = scriptAddNumber + 1;
        };

        scriptKeyContent += "<span class=\"scriptKeySpan\">";
        for ( var l = scriptFinish ; l < scriptKey.length ; l++ ) scriptKeyContent += scriptKey[l];
        scriptKeyContent += "</span>";
    } else {
        scriptKeyContent = "<span class=\"scriptKeySpan\">" + scriptKey + "</span>";
    }

    let scriptAttention = scriptData[i][7];
    if ( scriptAttention !== "" ) {
        scriptKeyContent += " (" + scriptAttention + ")";
    }

    return scriptKeyContent;
}

function scriptKeyTitleDisplay(scriptData,i) {
    let scriptKeyTitle = "";
    let scriptKeyTitleNumber = 0;

    for ( var j = 0 ; j < 15 ; j++ ) {
        if ( scriptData[i][j+8] !== "" ) {
            if ( scriptKeyTitleNumber >= 1 ) scriptKeyTitle += ", ";
            scriptKeyTitle += scriptKeyTitleArray[j] + ":" + scriptData[i][j+8];
            scriptKeyTitleNumber++;
        }
    }

    return scriptKeyTitle;
}

function scriptDisplay(scriptData) {
    if ( scriptData === -1 ) {
        scriptPerformanceNumber = -1;
        scriptMaxNumber = 0;
        scriptError.innerHTML = "情報の取得に失敗しました<br>再読み込みしてください";
        return 0;
    } else if ( scriptData === -2 ) {
        scriptPerformanceNumber = -1;
        scriptMaxNumber = 0;
        scriptError.innerHTML = "未作成です";
        return 0;
    } else {
        scriptPerformanceNumber = performanceMusicNumber;
        scriptError.style.display = "none";
    }

    let scriptNumber = 0;
    musicTime = [];
    musicTimeNumber = [];
    let musicTimeNow = [];
    let musicTimeNumberNow = [];
    let musicTimeNumberProcessing = 0;

    for ( var i = 0 ; i < scriptData.length ; i++ ) {
        let scriptClone = scriptDefult.cloneNode(true);

        scriptClone.id = `scriptListContent${scriptNumber}`;

        let scriptStyle = scriptData[i][0];

        let scriptMusicNumber = scriptData[i][4];
        if ( scriptMusicNumber !== "" ) {
            scriptClone.getElementsByClassName("scriptMusic")[0].innerHTML = scriptMusicNumber;
            if ( !isNaN(scriptMusicNumber) && scriptMusicNumber >= 1 ) {
                musicTimeNumberProcessing = 0;
                musicTime.push(musicTimeNow);
                musicTimeNumber.push(musicTimeNumberNow);
                musicTimeNow = [];
                musicTimeNumberNow = [];
            }
        }
        
        if ( !isNaN(scriptData[i][3]) && !( scriptData[i][2] === "+" || scriptData[i][2] === "-" ) ) {
            musicTimeNow[musicTimeNumberProcessing] = scriptData[i][3];
            musicTimeNumberNow[musicTimeNumberProcessing] = scriptNumber;
            musicTimeNumberProcessing++;
        }

        if ( scriptStyle === 1 || scriptStyle >= 3 && scriptStyle <= 5 || scriptStyle >= 9 ) {
            let scriptImg = document.createElement('img');
            scriptImg.src = `script_${scriptStyle}.png`;
            scriptImg.alt = "";
            scriptClone.getElementsByClassName("scriptImg")[0].appendChild(scriptImg);
        }

        scriptClone.getElementsByClassName("scriptTime")[0].innerHTML = scriptTimeDisplay(scriptData,i);

        let scriptKeyParent = scriptClone.getElementsByClassName("scriptKey")[0];

        scriptKeyParent.getElementsByTagName("p")[0].innerHTML = scriptKeyDisplay(scriptData,i);
        scriptKeyParent.getElementsByTagName("p")[0].title = scriptKeyTitleDisplay(scriptData,i);

        for ( i += 1 ; i < scriptData.length ; i++ ) {
            let scriptAddStyle = scriptData[i][0];

            switch ( scriptAddStyle ) {
                case 6:
                    let scriptAddKey = document.createElement('p');
                    scriptAddKey.innerHTML = scriptKeyDisplay(scriptData,i);
                    scriptAddKey.title = scriptKeyTitleDisplay(scriptData,i);
                    scriptKeyParent.appendChild(scriptAddKey);
                    break;
                case 7:
                    let scriptAddImg = document.createElement('img');
                    scriptAddImg.src = `script_1.png`;
                    scriptAddImg.alt = "";
                    scriptClone.getElementsByClassName("scriptImg")[0].appendChild(scriptAddImg);
                case 8:
                    scriptClone.getElementsByClassName("scriptMusic")[0].innerHTML = "<br>" + scriptData[i][4];
                    scriptClone.getElementsByClassName("scriptTime")[0].innerHTML = scriptClone.getElementsByClassName("scriptTime")[0].innerHTML + "<br>" + scriptTimeDisplay(scriptData,i);

                    if ( !isNaN(scriptMusicNumber) ) {
                        musicTimeNumberProcessing = 0;
                        musicTime.push(musicTimeNow);
                        musicTimeNumber.push(musicTimeNumberNow);
                        musicTimeNow = [];
                        musicTimeNumberNow = [];
                        musicTimeNow[musicTimeNumberProcessing] = scriptData[i][3];
                        musicTimeNumberNow[musicTimeNumberProcessing] = scriptNumber;
                        musicTimeNumberProcessing++;
                    }
                    break;
            }

            if ( scriptAddStyle <= 5 || scriptAddStyle >= 9 ) {
                i -= 1;
                break;
            }
        }

        scriptClone.classList.add(`scriptListContent${ scriptNumber % 2 }`);

        script.appendChild(scriptClone);

        scriptNumber++;
    }

    scriptMaxNumber = scriptNumber;
    musicTime.push(musicTimeNow);
    musicTimeNumber.push(musicTimeNumberNow);
}

function scriptFetch() {
    scriptError.innerHTML = "読み込み中...";
    scriptError.style.display = "flex";
    for ( var i = 0 ; i < scriptMaxNumber ; i++ ) {
        document.getElementById(`scriptListContent${i}`).remove();
    }
    let url = performanceScriptURL[dnMusicSelect][performanceMusicNumber];

    if ( url === 0 ) {
        scriptDisplay(-2);
        return 0;
    }

    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        scriptDisplay(data);
        scriptFinish = 1;
    })
    .catch((error) => {
        scriptDisplay(-1);
    });
}

let performanceDetail = [];

function performanceDetailDisplay() {
    let performanceSelectTitle = performanceMusicSelect + "_" + dnTitle[dnMusicSelect];
    let performanceSelectNumber = -1;
    let performanceDetailArray = [];

    for ( var i = 0 ; i < performanceDetail.length ; i++ ) {
        if ( performanceDetail[i][0] === performanceSelectTitle ) {
            performanceSelectNumber = i;
            for ( var j = 0 ; j <= 20 ; j++ ) performanceDetailArray[j] = performanceDetail[i][j];
            break;
        }
    }

    if ( performanceSelectNumber === -1 ) {
        for ( var i = 0 ; i <= 8 ; i++ ) performanceDetailArray[i] = "-";
        for (  ; i <= 20 ; i++ ) performanceDetailArray[i] = "";
    }

    document.getElementById("manual_performance_title").innerHTML = performanceDetailArray[1];
    document.getElementById("manual_performance_dn").innerHTML = performanceDetailArray[2];
    document.getElementById("manual_performance_season").innerHTML = performanceDetailArray[3];

    if ( performanceDetailArray[4] !== "-" ) {
        document.getElementById("manual_splash").style.display = "table-row";
        document.getElementById("manual_performance_splash").innerHTML = performanceDetailArray[4];
    } else {
        document.getElementById("manual_splash").style.display = "none";
    }

    if ( performanceDetailArray[5] !== "-" ) {
        document.getElementById("manual_mc").style.display = "table-row";
        document.getElementById("manual_performance_mc").innerHTML = performanceDetailArray[5];
    } else {
        document.getElementById("manual_mc").style.display = "none";
    }

    if ( performanceDetailArray[6] !== "-" ) {
        document.getElementById("manual_mapping").style.display = "table-row";
        document.getElementById("manual_performance_mapping").innerHTML = performanceDetailArray[6];
    } else {
        document.getElementById("manual_mapping").style.display = "none";
    }
    
    document.getElementById("manual_performance_explanation").innerHTML = performanceDetailArray[7];

    let performancePeriod = performanceDetailArray[8];

    for ( var i = 9 ; i <= 20 ; i++ ) {
        if ( performanceDetailArray[i] !== "" ) {
            performancePeriod += ", " + performanceDetailArray[i];
        } else {
            break;
        }
    }

    document.getElementById("manual_performance_period").innerHTML = performancePeriod;
}

fetch("https://script.google.com/macros/s/AKfycbzDjJsn3iWKc27yvJSHjajhkYTyXgMmgCcMEXYryhQ_nCKNS-A6RL_EgSB_Fv6bPKfIpg/exec")
.then((res) => {
    return res.json();
})
.then((data) => {
    performanceDetail = data;
    performanceDetailDisplay();
});

const checkFileExistence = async function(url) {
    const response = await fetch(url);

    if ( response.status === 200 ) {
        return 0;
    } else {
        return 1;
    }
};

const SEffectUrlCheck = async function(url) {
    try {
        const ret = await checkFileExistence(url);

        if ( ret === 0 ) {
            SEffect.src = url;
            SEffect.play();
            return 1;
        } else {
            return 0;
        }

    } catch (error) {
        return 0;
    }
};

let SEffect = document.getElementById("SEffect");

//白色照明
var whiteLightArray = [];
for ( var i = 0 ; i < whiteLightNumber ; i++ ) {
    whiteLightArray[i] = 1;
}

const whiteLightHalfArray = [ 1 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 1 , 0 , 0 ];
let keyPic = [ '4' , '5' , '6' , '7' , '8' , '9' , '0' , '-' , '^' ];
let altPermission = 1;

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    //console.log(key);

    if ( e.altKey ) {
        altPermission = 0;
        performanceNowSelect = performanceSelect.value;

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
            if ( key === "\\" ) {
                SEffect.pause();
                SEffect.src = "";
            } else {
                for ( var i = 0 ; i <= 9 ; i++ ) {
                    if ( key === keyPic[i] ) {
                        SEffectUrlCheck("SoundEffect/" + performanceMusicSelect + "_" + dnTitle[dnMusicSelect] + "_se_" + ( i + 1 ) + ".mp3");
                    }
                }
            }
            /*var whiteLightNowNumber = 0;

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

            if ( whiteLightNowNumber >= 1 ) {
                let whiteLightCoordinateNumber = document.getElementById(`WHITE_LIGHT_${whiteLightNowNumber}`);
                if ( whiteLightArray[whiteLightNowNumber-1] === 0 ) whiteLightCoordinateNumber.style.opacity = 1;
                else whiteLightCoordinateNumber.style.opacity = 0;

                whiteLightArray[whiteLightNowNumber-1] = 1 - whiteLightArray[whiteLightNowNumber-1];
            }*/
        }
    } else {
        altPermission = 1;
    }

    if ( subSelectStyle === 0 ) {
        if ( code >= 112 && code <= 123 ) subCode = code - 111;
        else if ( code === 27 ) subCode = 0;
        else subCode = -1;
    } else {
        if ( e.shiftKey && e.metaKey ) {
            subCode = -1;
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

    if ( key === 'Enter' ) {
        if ( musicChangePossible === 1 ) {
            if ( music.currentTime === 0 ) {
                musicPlayDisplay();
            } else {
                musicChange();
                let changeStyle;
                
                if ( dnMusicSelect === 0 ) changeStyle = performanceMusicDay[performanceMusicNumber][musicNumber][0];
                else changeStyle = performanceMusicNight[performanceMusicNumber][musicNumber][0];

                if ( changeStyle === 1 ) musicPlayDisplay();
            }

        }
    } else if ( key === "Backspace" ) {
        if ( musicChangePossible === 1 ) {
            musicPlayDisplay();
        }
    } else if ( code === 32 ) {
        clearInterval(musicVolumeSetInterval);
        let pn = 0, finishVolume;

        musicVolumeMicrophone = 1 - musicVolumeMicrophone;
        let musicNowVolume = musicVolume;

        if ( musicVolumeMicrophone === 1 ) finishVolume = 0.5;
        else finishVolume = musicDefultVolume;

        let volumeDiff = finishVolume - musicNowVolume;
        if ( volumeDiff !== 0 ) pn = volumeDiff / Math.abs(volumeDiff) * 0.1;
        
        micOnOff();

        musicVolumeSetInterval = setInterval( function() {
            musicNowVolume += pn;

            if ( musicVolumeMicrophone === 1 || musicNowVolume <= musicDefultVolume ) {
                musicVolume = musicNowVolume;
                musicVolDisplay();

                if ( Math.floor( 10 * musicVolume ) === 5 ) clearInterval(musicVolumeSetInterval);
            } else {
                clearInterval(musicVolumeSetInterval);
            }
        },400);
    }

    if ( e.ctrlKey ) {
        performanceNowSelect = -1;
    } else {
        performanceNowSelect = performanceSelect.value;
    }

    if ( performanceNowSelect !== -1 && manualON === 0 && altPermission === 1 ) {
        if ( !( e.shiftKey ) ) {
            if ( ( code === 220 || key === '¥' ) ) { // \
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
            } else if ( code === 37 ) {
                musicVolDisplay(-1);
                musicVolumeMicrophone = 0;
                micOnOff();
            } else if ( code === 39 ) {
                musicVolDisplay(1);
                musicVolumeMicrophone = 0;
                micOnOff();
            } else if ( code === 38 ) {
                script.scrollTop -= 20;
            } else if ( code === 40 ) {
                script.scrollTop += 20;
            }/* else if ( key === 'Pause' ) {
                toggleFullScreen();
            }*/
        } else {
            if ( key === 'Pause' ) {
                performanceMusicChange();
            } else if ( code === 37 ) {
                if ( musicChangePossible === 1 ) {
                    if ( music.currentTime >= 1 ) musicChange(0);
                    else musicChange(-1);
                }
            } else if ( code === 38 ) {
                let nowSelectedNumber = performanceSelect.selectedIndex - 1;
                if ( nowSelectedNumber === -1 ) nowSelectedNumber = performanceSelect.options.length - 1;

                performanceSelect.options[nowSelectedNumber].selected = true;

                performanceChange();
            } else if ( code === 39 ) {
                if ( musicChangePossible === 1 ) {
                    musicChange();
                }                
            } else if ( code === 40 ) {
                let nowSelectedNumber = performanceSelect.selectedIndex + 1;
                if ( nowSelectedNumber === performanceSelect.options.length ) nowSelectedNumber = 0;

                performanceSelect.options[nowSelectedNumber].selected = true;

                performanceChange();
            }
        }
    }
});

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
    } else if ( nowTime > fadeTime + 1000 && sustainable === 0 && waterLightSetInterval !== 0 ) {
        clearInterval(waterLightSetInterval);
    }

    let waterLightCoordinateNumber = document.getElementById(`WATER_LIGHT_${waterLightNowNumber}`);
    waterLightCoordinateNumber.style.background = "linear-gradient(rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ") , transparent)";
    waterLightColorArrayUpdate(waterLightNowNumber,colorRed,colorGreen,colorBlue);
}

//パーライト
var parLightColor = [ [], [], [] ];
var parLightFirstColor = [ [], [], [] ];
for ( var i = 0 ; i < 3 ; i++ ) {
    for ( var j = 0 ; j < parLightNumber ; j++ ) {
        parLightColor[i][j] = 0;
    }
}

var parLightUseNumber = 0;
let parLightAnimateON = 0;

function parLightColorArrayUpdate(parLightNowNumber,colorRed,colorGreen,colorBlue) {
    parLightColor[0][parLightNowNumber-1] = colorRed;
    parLightColor[1][parLightNowNumber-1] = colorGreen;
    parLightColor[2][parLightNowNumber-1] = colorBlue;
}

function parLightColorFadeChange(parLightNowNumber,colorRed,colorGreen,colorBlue,nowTime,fadeTime,parLightMyNumber,parLightSetInterval) {
    if ( parLightUseNumber !== parLightMyNumber ) clearInterval(parLightSetInterval);

    if ( nowTime > fadeTime + 100 ) {
        parLightAnimateON = 0;
        clearInterval(parLightSetInterval);
    } else if ( parLightAnimateON === 1 )  {
        
    } else if ( nowTime < fadeTime ) {
        let changeTime = Math.sin( nowTime / fadeTime / 2 * Math.PI );
        colorRed = parLightFirstColor[0][parLightNowNumber-1] + ( colorRed - parLightFirstColor[0][parLightNowNumber-1] ) * changeTime;
        colorGreen = parLightFirstColor[1][parLightNowNumber-1] + ( colorGreen - parLightFirstColor[1][parLightNowNumber-1] ) * changeTime;
        colorBlue = parLightFirstColor[2][parLightNowNumber-1] + ( colorBlue - parLightFirstColor[2][parLightNowNumber-1] ) * changeTime;
    }

    let parLightShadowCoordinateNumber = document.getElementById(`PAR_LIGHT_PARENT_${parLightNowNumber}`);
    let parLightCoordinateNumber = document.getElementById(`PAR_LIGHT_${parLightNowNumber}`);
    parLightCoordinateNumber.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    parLightShadowCoordinateNumber.style.filter = "drop-shadow( 0 0 " + parLightDiameter * 0.4 + "px rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ") )";
    parLightColorArrayUpdate(parLightNowNumber,colorRed,colorGreen,colorBlue);
}

function parLightSetting(animate = 0) {
    parLightUseNumber++;

    for ( var i = 0 ; i < 3 ; i++ ) {
        for ( var j = 0 ; j < parLightNumber ; j++ ) {
            parLightFirstColor[i][j] = parLightColor[i][j];
        }
    }
    
    if ( animate === 1 ) parLightAnimateON = 1;

    return parLightUseNumber;
}

function parLightColorChange(parLightNowNumber,colorRed,colorGreen,colorBlue,parLightMyNumber,parLightSetInterval) {
    let parLightShadowCoordinateNumber = document.getElementById(`PAR_LIGHT_PARENT_${parLightNowNumber}`);
    let parLightCoordinateNumber = document.getElementById(`PAR_LIGHT_${parLightNowNumber}`);

    if ( parLightUseNumber !== parLightMyNumber ) clearInterval(parLightSetInterval);

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
        let waterCannonProportion = waterCannonFirstAngle[waterCannonNowNumber-1] + ( waterCannonNowAngle - waterCannonFirstAngle[waterCannonNowNumber-1] ) / waterCannonChangeTime * nowTime;
        if ( waterCannonProportion > 90 ) waterCannonProportion = 90;
        else if ( waterCannonProportion < 0 ) waterCannonProportion = 0;

        waterCannonCoordinateNumber.style.height = waterCannonProportion / 90 * 70 + "%";
        waterCannonCoordinateNumber.style.width = waterCannonProportion / 90 * 70 + "%";
        waterCannonAngle[waterCannonNowNumber-1] = waterCannonProportion;
    } else {
        if ( waterCannonNowAngle > 90 ) waterCannonNowAngle = 90;
        else if ( waterCannonNowAngle < 0 ) waterCannonNowAngle = 0;
        
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
var movingLightRotateLock = 0;
var movingLightLock = [ 0 , 0 ];

for ( var i = 0 ; i < movingLightInsideNumber ; i++ ) {
    for ( var j = 0 ; j < 2 ; j++ ) movingLightInsideAngle[j][i] = 0;

    for ( var j = 0 ; j < 4 ; j++ ) movingLightInsideColor[j][i] = 0;
}
for ( var i = 0 ; i < movingLightOutsideNumber ; i++ ) {
    for ( var j = 0 ; j < 2 ; j++ ) movingLightOutsideAngle[j][i] = 0;

    for ( var j = 0 ; j < 4 ; j++ ) movingLightOutsideColor[j][i] = 0;
}

function movingLightSetting(movingLightNowUseNumber = "nothing",movingLightOFFMode = 0,movingLightStartTime = 0,movingLightLockTime = 0) {
    if ( movingLightNowUseNumber !== 0 && Date.now() - movingLightLock[0] < movingLightLock[1] ) {
        let startTime = Date.now();
        let movingLightClearTimeout = setInterval( function() {
            if ( Date.now() - startTime < 1000 ) {
                for ( var i = 0 ; i < movingLightNowUseNumber.length ; i++ ) {
                    clearTimeout(movingLightNowUseNumber[i]);
                }
            } else {
                clearInterval(movingLightClearTimeout);
            }
        });
        return 0;
    }

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
    
    if ( movingLightStartTime > 0 || movingLightLockTime > 0 ) {
        movingLightLock[0] = movingLightStartTime;
        movingLightLock[1] = movingLightLockTime;
    }

    if ( movingLightNowUseNumber !== 0 && !( movingLightOFFMode >= 2 && movingLightRotateLock === 1 ) ) movingLightRotateLock = 0;

    if ( movingLightNowUseNumber === "nothing" ) {
        movingLightUseNumber++;
        if ( movingLightRotateLock === 0 ) movingLightRotateUseNumber = movingLightUseNumber;
        if ( movingLightOFFMode === 3 ) movingLightRotateLock = 0;
        else if ( movingLightOFFMode >= 1 ) movingLightRotateLock = 1;
        return movingLightUseNumber;
    } else if ( movingLightNowUseNumber === 0 ) {
        if ( movingLightOFFMode === 1 ) {
            movingLightRotateLock = 0;
            movingLightRotateUseNumber = movingLightUseNumber;
        }
    } else {
        movingLightUseNumber++;
        if ( movingLightRotateLock === 0 ) movingLightRotateUseNumber = movingLightUseNumber;
        if ( movingLightOFFMode === 3 ) movingLightRotateLock = 0;
        else if ( movingLightOFFMode >= 1 ) movingLightRotateLock = 1;
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
    movingLightLock = [ 0 , 0 ];
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
                movingLightPictureChange(1,i+1,0,( 50 - movingLightInsideTripleType[0][i] / 2 ) / 100 * movingLightInsideTripleType[1][i] * 2 );
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
                movingLightPictureChange(2,i+1,0,( 50 - movingLightOutsideTripleType[0][i] / 2 ) / 100 * movingLightOutsideTripleType[1][i] * 2 );
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

function movingLightGradientColorChange(movingLightIO,movingLightNowNumber,color1Red,color1Green,color1Blue,color1Proportion,color2Red,color2Green,color2Blue,color2Proportion,degree,opacity,changeTime = 0,nowTime = 0,movingLightTripleNumber = -1) {    
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
    } else if ( movingLightTripleNumber !== -1 ) {
        movingLightCoordinateTripleNumber[movingLightTripleNumber-1].style.background = "radial-gradient( transparent " + movingLightPictureRadius + "%, #000000 " + movingLightPictureRadius + "%), linear-gradient(" + degree + "deg, rgb(" + color1Red + "," + color1Green + "," + color1Blue + ") " + color1Proportion + "% , rgb(" + color2Red + "," + color2Green + "," + color2Blue + ") " + color2Proportion + "% )";
    } else {
        for ( var i = 0 ; i < movingLightCoordinateTripleNumber.length ; i++ ) {
            movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( transparent " + movingLightPictureRadius + "%, #000000 " + movingLightPictureRadius + "%), linear-gradient(" + degree + "deg, rgb(" + color1Red + "," + color1Green + "," + color1Blue + ") " + color1Proportion + "% , rgb(" + color2Red + "," + color2Green + "," + color2Blue + ") " + color2Proportion + "% )";
        }
    }

    if ( opacity === -1 ) return 0;

    if ( changeTime > 0 && nowTime <= changeTime ) {
        if ( movingLightIO === 1 ) opacity = movingLightInsideFirstColor[3][movingLightNowNumber-1] + ( opacity - movingLightInsideFirstColor[3][movingLightNowNumber-1] ) / changeTime * nowTime;
        else opacity = movingLightOutsideFirstColor[3][movingLightNowNumber-1] + ( opacity - movingLightOutsideFirstColor[3][movingLightNowNumber-1] ) / changeTime * nowTime;
    }

    if ( changeway === 1 ) {
        movingLightCoordinateNumber.style.opacity = opacity;
    } else if ( movingLightTripleNumber !== -1 ) {
        movingLightCoordinateTripleNumber[movingLightTripleNumber-1].style.opacity = opacity;
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
    if ( movingLightIO === 1 && movingLightInsideImgType[movingLightNowNumber-1] >= 0 || movingLightIO === 2 && movingLightOutsideImgType[movingLightNowNumber-1] >= 0 ) return 0;
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
        }

        movingLightCoordinateTripleNumber = movingLightCoordinateNumber.getElementsByClassName(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE`);

        let movingLightPictureRadius = 69;
        if ( movingLightPictureNumber === 0 ) movingLightPictureRadius = 71;

        if ( movingLightIO === 1 ) {
            if ( movingLightInsideColor[0][movingLightNowNumber-1] >= 0 ) {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( rgb(" + movingLightInsideColor[0][movingLightNowNumber-1] + "," + movingLightInsideColor[1][movingLightNowNumber-1] + "," + movingLightInsideColor[2][movingLightNowNumber-1] + ") " + movingLightPictureRadius + "%, #000000 69%)";
            } else {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightInsideColor[i][movingLightNowNumber-1] = 0;
            }
            movingLightInsideImgType[movingLightNowNumber-1] = -1 * movingLightPictureNumber - 1;
        } else {
            if ( movingLightOutsideColor[0][movingLightNowNumber-1] >= 0 ) {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightCoordinateTripleNumber[i].style.background = "radial-gradient( rgb(" + movingLightOutsideColor[0][movingLightNowNumber-1] + "," + movingLightOutsideColor[1][movingLightNowNumber-1] + "," + movingLightOutsideColor[2][movingLightNowNumber-1] + ") " + movingLightPictureRadius + "%, #000000 69%)";
            } else {
                for ( var i = 0 ; i < 3 ; i++ ) movingLightOutsideColor[i][movingLightNowNumber-1] = 0;
            }
            movingLightOutsideImgType[movingLightNowNumber-1] = -1 * movingLightPictureNumber - 1;
        }
    }

    movingLightCoordinateTripleNumber = movingLightCoordinateNumber.getElementsByClassName(`MOVING_LIGHT_PICTURE_CONTENT_TRIPLE`);
    for ( var i = 0 ; i < 3 ; i++ ) movingLightCoordinateTripleNumber[i].style.filter = "brightness(" + movingLightBrightness + "%) blur( " + movingLightBlur + "px)";

    movingLightCoordinateNumber.style.width = movingLightParentSize + "%";

    movingLightTriplePositionDecision(movingLightIO,movingLightNowNumber,movingLightPictureLength,movingLightPictureSize);

    movingLightCoordinateNumber.style.opacity = "1.0";
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

    if ( movingLightIO === 1 ) {
        for ( var i = 0 ; i < 3 ; i++ ) {
            movingLightInsideColor[i][movingLightNowNumber-1] = 0;
        }
        movingLightInsideImgType[movingLightNowNumber-1] = 'n';
    } else {
        for ( var i = 0 ; i < 3 ; i++ ) {
            movingLightOutsideColor[i][movingLightNowNumber-1] = 0;
        }
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

function logoboardLightSetting(logoboardLightMode) {
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
        if ( logoboardLightMode === 1 ) logoboardLightUseNumber[0] = 0;
        logoboardLightFirstON = logoboardLightON;
        
        return logoboardLightUseNumber[logoboardLightMode];
    }
}

function logoboardLightColorDecision(logoboardLightNowNumber,colorRed,colorGreen,colorBlue,colorWhite,opacity) {
    let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${logoboardLightNowNumber}`);
    let logoboardLightChangeColor = [];
    let logoboraLightZIndex = 0;

    logoboardLightChangeColor[0] = ( colorRed + colorWhite ) / 2;
    logoboardLightChangeColor[1] = ( colorGreen * 7 + colorWhite * 5 ) / 12;
    logoboardLightChangeColor[2] = ( colorBlue * 2 + colorWhite ) / 3;
    
    let maxColor = 0;
    for ( var i = 0 ; i < 3 ; i++ ) {
        logoboraLightZIndex += logoboardLightChangeColor[i];
        if ( logoboardLightChangeColor[i] > maxColor ) maxColor = logoboardLightChangeColor[i];
    }

    if ( maxColor < 255 ) {
        let correct = 255 / maxColor;
        for ( var i = 0 ; i < 3 ; i++ ) {
            logoboardLightChangeColor[i] = logoboardLightChangeColor[i] * correct;
        }
    }

    logoboardCoordinateNumber.style.background = "linear-gradient(rgb(" + logoboardLightChangeColor[0] + "," + logoboardLightChangeColor[1] + "," + logoboardLightChangeColor[2] + "),transparent)";
    //logoboardCoordinateNumber.style.filter = "brightness(" + ( 300 - 200 / 255 * maxColor ) + "%)";
    logoboardLightOpacity[logoboardLightNowNumber-1] = opacity;
    logoboardCoordinateNumber.style.zIndex = logoboraLightZIndex;
    logoboardCoordinateNumber.style.opacity = opacity;
}

function logoboardLightOFF(changeTime,sustainable = 0) {
    logoboardLightSetting(0);
    if ( sustainable === 0 ) {
        for ( var i = 0 ; i < logoboardLightSetTimeout.length ; i++ ) {
            clearTimeout(logoboardLightSetTimeout[i]);
        }
        logoboardLightSetTimeout = [];
    }

    logoboardLightUseNumber = [ 0 , 0 ];
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
                    let logoboardLightOpacityProportion = logoboardLightFirstOpacity[i-1] + ( - logoboardLightFirstOpacity[i-1] ) / changeTime * nowTime[0];
                    logoboardLightColorDecision(i,logoboardLightFirstColor[0][i-1],logoboardLightFirstColor[1][i-1],logoboardLightFirstColor[2][i-1],logoboardLightFirstColor[3][i-1],logoboardLightOpacityProportion);
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
    let logoboardLightChangeColor = [], timeProportion, fadePermission = 0, maxColor = 0;
    logoboardLightChangeColor[0] = colorRed;
    logoboardLightChangeColor[1] = colorGreen;
    logoboardLightChangeColor[2] = colorBlue;
    logoboardLightChangeColor[3] = colorWhite;

    for ( var i = 0 ; i < 4 ; i++ ) {
        if ( logoboardLightChangeColor[i] < 0 ) {
            logoboardLightChangeColor[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1];
            fadePermission = 1;
        }

        if ( logoboardLightChangeColor[i] > maxColor ) maxColor = logoboardLightChangeColor[i];
    }

    if ( animateStop === 2 ) fadePermission = 1;

    opacity *= maxColor / 255;

    if ( nowTime <= changeTime ) {

        logoboardLightON = 1;

        if ( changeTime === 0 ) {
            timeProportion = 1;
        } else {
            timeProportion = nowTime / changeTime;
        }
        
        if ( ( logoboardLightUseAnimateNumber === 1 || logoboardLightAnimateOffRoad === 1 ) && animateStop >= 1 ) {
            logoboardLightUseNumber[1] = 0;
            logoboardLightUseAnimateNumber = 0;
            logoboardLightAnimateOffRoad = 1;

            if ( fadePermission === 1 ) {
                for ( var i = 0 ; i < 4 ; i++ ) logoboardLightChangeColor[i] = logoboardLightAnimateColor[i][logoboardLightNowNumber-1] + ( logoboardLightChangeColor[i] - logoboardLightAnimateColor[i][logoboardLightNowNumber-1] ) * timeProportion;
                opacity = logoboardLightFirstOpacity[logoboardLightNowNumber-1] + ( opacity - logoboardLightFirstOpacity[logoboardLightNowNumber-1] ) * timeProportion;
            } else if ( nowTime > 100 ) {
                clearInterval(logoboardSetInterval);
            }

            logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3],opacity);

            for ( var j = 0 ; j < 4 ; j++ ) {
                logoboardLightColor[j][logoboardLightNowNumber-1] = logoboardLightChangeColor[j];
            }
            
        } else if ( logoboardLightFirstON === 0 ) {
            for ( var j = 0 ; j < 4 ; j++ ) {
                logoboardLightColor[j][logoboardLightNowNumber-1] = logoboardLightChangeColor[j];
            }
            if (  logoboardLightUseAnimateNumber === 0 ) {
                let logoboardLightOpacityProportion = logoboardLightFirstOpacity[logoboardLightNowNumber-1] + ( opacity - logoboardLightFirstOpacity[logoboardLightNowNumber-1] ) * timeProportion;
                logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3],logoboardLightOpacityProportion);
            }
        } else {
            let logoboardLightColorProportion = [];
            let logoboardLightOpacityProportion = logoboardLightFirstOpacity[logoboardLightNowNumber-1] + ( opacity - logoboardLightFirstOpacity[logoboardLightNowNumber-1] ) * timeProportion;
            logoboardLightOpacity[logoboardLightNowNumber-1] = logoboardLightOpacityProportion;
            for ( var i = 0 ; i < 4 ; i++ ) {
                if ( logoboardLightKeepColor[i] === 1 ) {
                    if ( nowTime < changeTime / 2 ) logoboardLightColorProportion[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1];
                    else logoboardLightColorProportion[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1] + ( logoboardLightChangeColor[i] - logoboardLightFirstColor[i][logoboardLightNowNumber-1] ) / changeTime * 2 * ( nowTime - changeTime / 2 );
                } else {
                    if ( nowTime < changeTime / 2 ) logoboardLightColorProportion[i] = logoboardLightFirstColor[i][logoboardLightNowNumber-1] + ( logoboardLightChangeColor[i] - logoboardLightFirstColor[i][logoboardLightNowNumber-1] ) / changeTime * 2 * nowTime;
                    else logoboardLightColorProportion[i] = logoboardLightChangeColor[i];
                }
            }

            for ( var i = 0 ; i < 4 ; i++ ) logoboardLightColor[i][logoboardLightNowNumber-1] = logoboardLightColorProportion[i];

            if ( logoboardLightUseAnimateNumber === 0 || animateStop === 1 ) {
                logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightColorProportion[0],logoboardLightColorProportion[1],logoboardLightColorProportion[2],logoboardLightColorProportion[3],logoboardLightOpacityProportion);
            }
        }
    } else {
        if ( ( logoboardLightUseAnimateNumber === 1 || logoboardLightAnimateOffRoad === 1 ) && animateStop >= 1 ) {
            logoboardLightUseNumber[1] = 0;
            logoboardLightUseAnimateNumber = 0;
            logoboardLightAnimateOffRoad = 1;
        }

        if ( logoboardLightUseAnimateNumber === 0 || animateStop === 1 ) {
            logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3],opacity);
        }

        for ( var j = 0 ; j < 4 ; j++ ) {
            logoboardLightColor[j][logoboardLightNowNumber-1] = logoboardLightChangeColor[j];
        }

        if ( nowTime > changeTime + 100 ) clearInterval(logoboardSetInterval);
    }
}

function logoboardLightAnimateChange(logoboardLightNowNumber,colorRed,colorGreen,colorBlue,colorWhite,opacity = 1,changeTime = 0,nowTime = -1,option = 0) {
    let fadePermission = 1;
    logoboardLightON = 1;
    logoboardLightUseAnimateNumber = 1;
    let logoboardLightChangeColor = [];
    let maxColor = 0;
    logoboardLightChangeColor[0] = colorRed;
    logoboardLightChangeColor[1] = colorGreen;
    logoboardLightChangeColor[2] = colorBlue;
    logoboardLightChangeColor[3] = colorWhite;

    for ( var i = 0 ; i < 4 ; i++ ) {
        if ( logoboardLightChangeColor[i] === -1 || option > 0 && logoboardLightColor[i][logoboardLightNowNumber-1] >= option ) {
            logoboardLightChangeColor[i] = logoboardLightColor[i][logoboardLightNowNumber-1];
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

    logoboardLightColorDecision(logoboardLightNowNumber,logoboardLightChangeColor[0],logoboardLightChangeColor[1],logoboardLightChangeColor[2],logoboardLightChangeColor[3],opacity);
    for ( var i = 0 ; i < 4 ; i++ ) logoboardLightAnimateColor[i][logoboardLightNowNumber-1] = logoboardLightChangeColor[i];
}

//スモーク, スノウマシン
var smokeON = 0;
var smokePushONTime;
var smokePushOFFTime;
var smokeSetInterval;
let smokeCoordinate = document.getElementById(`SMOKE_PARENT`);
let smokeImgCoordinate = smokeCoordinate.getElementsByTagName(`img`);
let smokeSEffect = document.getElementById(`smoke_SEffect`);
let smokeState = document.getElementById(`machine_smoke`);
var snowON = 0;
let snowFadeTime = 30000;
var snowSetInterval1;
var snowSetInterval2;
let snowCoordinate = document.getElementById(`SNOW_PARENT`);
let snowImgCoordinate = snowCoordinate.getElementsByTagName(`img`);
let snowSEffect = document.getElementById(`snow_SEffect`);
let snowState = document.getElementById(`machine_snow`);

smokeSEffect.volume = 0.3;
snowSEffect.volume = 0.15;

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if ( performanceNowSelect !== -1 && altPermission === 1 ) {
        if ( key === "-" ) {
            smokeON = 1 - smokeON;
            if ( smokeON === 1 ) {
                clearInterval(smokeSetInterval);
                smokePushONTime = Date.now();
                for ( var i = 0 ; i < smokeNumber ; i++ ) {
                    smokeImgCoordinate[i].style.width = smokeWidth + "px";
                }
                smokeCoordinate.style.opacity = 1;
                smokeState.style.backgroundColor = "#999";
                smokeSEffect.play();
            } else {
                smokePushOFFTime = Date.now();
                let smokeFadeTime = smokeFadeRatio * ( smokePushOFFTime - smokePushONTime );
                smokeState.style.backgroundColor = "transparent";
                smokeSEffect.load();
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
                let snowPushONTime = Date.now();
                for ( var i = 0 ; i < snowNumber ; i++ ) {
                    snowImgCoordinate[i].style.width = snowWidth + "px";
                }
                snowCoordinate.style.opacity = 1;
                snowState.style.backgroundColor = "#999";
                snowSEffect.play();
                snowSetInterval1 = setInterval( function () {
                    let nowTime = Date.now();
                    for ( var i = 0 ; i < snowNumber ; i++ ) {
                        snowImgCoordinate[i].style.rotate = ( nowTime - snowPushONTime ) / 50 % 360 + "deg";
                    }
                });
            } else {
                let snowPushOFFTime = Date.now();
                clearInterval(snowSetInterval1);
                snowState.style.backgroundColor = "transparent";
                snowSEffect.load();
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
