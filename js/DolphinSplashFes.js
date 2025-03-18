let DolphinSplashFes_Music = [ [ 0 ] , [ 2 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] ];
let RURIHANABI_Music = [ [ 0 ] , [ 2 , 0 , 1 ] ];

jsSetting("DolphinSplashFes",2024,"夏","Dolphin Splash Fes","Dolphin Splash Fes",2,1,DolphinSplashFes_Music,"https://script.google.com/macros/s/AKfycbz06YS0Twq8MKdzQIKIUrQa5hte78ZQt38s2dqUjAI8J5U5TfbijyFR4vMLg_6_XYwHkA/exec","瑠璃花火-Digital Fireworks-",1,1,0,0,2200,10,1);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "DolphinSplashFes" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 SS1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS1);

                    function waterLightNumberSS1() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,120,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AZ *****/
                    waterCurtain("AZ");

                    /***** LED HfW1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHfW1);

                    function ledNumberHfW1() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledChangeTime = 100;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 200 , 255 ] , [ 0 , 255 , 0 ] , [ 0 , 100 , 255 ] ];
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        
                        let ledLapTimeSplit = 265;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 265;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                    /***** 水中照明 RURI1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberRURI1);

                    function waterLightNumberRURI1() {
                        let waterLightFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 3000;
                        let waterLightColor = [];
                        let waterLightBasicColor = [ [ 0 , 150 , 255 ] , [ 0 , 50 , 255 ] ];

                        if ( nowTime[1] % waterLightRepeatTime < waterLightRepeatTime / 2 ) {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime );
                        } else {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime - waterLightRepeatTime / 2 );
                        }

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                    }

                    /***** ムービングライト DSF1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,181000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,3,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,3,40,100);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF1_0);

                        function movingLightNumberDSF1_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,100,255,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,100,255,0);

                                movingLightAngleChange(1,4,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF1_1);

                        function movingLightNumberDSF1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let angleXY, angleZ = -50;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                if ( i === 1 ) {
                                    let movingLightAngleJudgeTime = ( nowTime[1] + 1600 ) % movingLightAngleRepeatTime;
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = 30 + 90 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    else angleXY = 120 - 90 / movingLightAngleRepeatTime * 2 * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                } else if ( i === 2 ) {
                                    let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = 45 - 90 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    else angleXY = -45 + 90 / movingLightAngleRepeatTime * 2 * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                } else {
                                    let movingLightAngleJudgeTime = ( nowTime[1] + 6600 ) % movingLightAngleRepeatTime;
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = 30 - 90 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    else angleXY = -60 + 90 / movingLightAngleRepeatTime * 2 * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF1_2);

                        function movingLightNumberDSF1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let angleXY, angleZ = 80;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = [ 3500 , 10000 , 16500 , 0 , 13500 ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = -100 + 200 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                else angleXY = 100 - 200 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDSF1_3);

                        function movingLightNumberDSF1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1700;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 3;
                            let movingLightMaxOpacity = [ 0 , 1 ];
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 3 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                            movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;

                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 24000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 5000;

                        movingLightSetInterval[4]= setInterval(movingLightNumberDSF1_4);

                        function movingLightNumberDSF1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let angleX = [ -90 , -15 , 15 , 90 , -10 ];
                            let angleZ = 80;
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,angleX[i-1],angleZ,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4])
                            }

                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberDSF1_5);

                        function movingLightNumberDSF1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5])
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 74000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF1_6);

                        function movingLightNumberDSF1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6])
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 75000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDSF1_7);

                        function movingLightNumberDSF1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let angleXY, angleZ;
                            let movingLightAngleRepeatTime = 7400;
                            let movingLightAngleRepeatTimeSplit1 = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTime / 4;
                            let movingLightLapTime = 6000;
                            let movingLightAngleJudgeTime1 = ( nowTime[1] + movingLightLapTime ) % movingLightAngleRepeatTime;
                            let movingLightAngleJudgeTime2 = ( nowTime[1] + movingLightLapTime ) % movingLightAngleRepeatTimeSplit1;

                            if ( movingLightAngleJudgeTime2 < movingLightAngleRepeatTimeSplit2 ) {
                                angleZ = 100 * Math.sin( movingLightAngleJudgeTime2 / movingLightAngleRepeatTimeSplit2 / 2 * Math.PI );
                            } else {
                                angleZ = 100 - 100 * Math.sin( ( movingLightAngleJudgeTime2 - movingLightAngleRepeatTimeSplit2 ) / movingLightAngleRepeatTimeSplit2 / 2 * Math.PI );
                            }

                            if ( movingLightAngleJudgeTime1 < movingLightAngleRepeatTimeSplit1 ) {
                                angleXY = 45 + 270 * Math.sin( movingLightAngleJudgeTime1 / movingLightAngleRepeatTimeSplit1 / 2 * Math.PI );
                            } else {
                                angleXY = 315 - 270 * Math.sin( ( movingLightAngleJudgeTime1 - movingLightAngleRepeatTimeSplit1 ) / movingLightAngleRepeatTimeSplit1 / 2 * Math.PI );
                                angleZ *= -1;
                            }
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberDSF1_8);

                        function movingLightNumberDSF1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,0,255,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,-80,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,150,220,255,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 77000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberDSF1_9);

                        function movingLightNumberDSF1_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 36000 * ( nowTime[0] % 36000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);                            
                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberDSF1_10);

                        function movingLightNumberDSF1_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightDisplayTime = 700;
                            
                            if ( nowTime[0] <= 100 ) for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                if ( ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime < movingLightDisplayTime ) movingLightColorOpacity = 1;
                                else movingLightColorOpacity = 0;

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 103000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberDSF1_11);

                        function movingLightNumberDSF1_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 129000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberDSF1_12);

                        function movingLightNumberDSF1_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightMaxOpacity = [ 0 , 1 ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;

                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                        movingLightSetInterval[13] = setInterval(movingLightNumberDSF1_13);

                        function movingLightNumberDSF1_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,-1);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }

                        } 

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 141000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[14] = setInterval(movingLightNumberDSF1_14);

                        function movingLightNumberDSF1_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];

                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                        
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1);

                            }
                        }  

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 152000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        clearInterval(movingLightSetInterval[14]);
                        movingLightSetting(0);

                        movingLightSetInterval[15] = setInterval(movingLightNumberDSF1_15);

                        function movingLightNumberDSF1_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,150,220,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }

                        }                        

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 154000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[10] = setInterval(movingLightNumberDSF1_10);

                        function movingLightNumberDSF1_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightDisplayTime = 700;
                            
                            if ( nowTime[0] <= 100 ) for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                if ( ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime < movingLightDisplayTime ) movingLightColorOpacity = 1;
                                else movingLightColorOpacity = 0;

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 180000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[9]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[16] = setInterval(movingLightNumberDSF1_16);

                        function movingLightNumberDSF1_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }
                        }

                    },movingLightSetTimeoutDelay[11]);

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF1);

                    function ledNumberDSF1() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        
                        let ledBasicColor1 = [ 255 , 255 , 0 ];
                        let ledBasicColor2 = [ [ 0 , 255 , 255 ] , [ 255 , 100 , 255 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor1 = [ 255 , 255 , 255 ];
                        ledBasicColor2 = [ [ 255 , 255 , 0 ] , [ 0 , 180 , 255 ] , [ 0 , 255 , 255 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 6;
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF2);

                    function ledNumberDSF2() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 255 , 100 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledLapTimeSplit = 210;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
                            
                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( 2 * l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( 2 * l + 1 ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor = [ [ 220 , 255 , 255 ] , [ 255 , 100 , 255 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 6;
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ( i - 4 + ledNumberOutside ) % ledNumberOutside;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン B *****/
                    waterCurtain("B");

                    /***** LED DSF3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF3);

                    function ledNumberDSF3() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        
                        let ledBasicColor1 = [ 0 , 150 , 255 ];
                        let ledBasicColor2 = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor1 = [ 0 , 255 , 255 ];
                        ledBasicColor2 = [ [ 255 , 255 , 0 ] , [ 255 , 100 , 255 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 4;
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF4);

                    function ledNumberDSF4() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 220 , 255 , 255 ] , [ 255 , 100 , 255 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 5;
                        let ledLapTimeSplit = 90;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor = [ [ 220 , 255 , 255 ] , [ 255 , 255 , 0 ] ];                    
                        ledRepeatTimeSplit = ledRepeatTime / 5;
                        ledLapTimeSplit = 38;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン V *****/
                    waterCurtain("V");

                    /***** LED DSF5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF5);

                    function ledNumberDSF5() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 0 , 100 , 255 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 5;
                        let ledLapTimeSplit = 90;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor = [ [ 255 , 255 , 150 ] , [ 0 , 255 , 255 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 5;
                        ledLapTimeSplit = 38;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン J *****/
                    waterCurtain("J");

                    /***** LED 28 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber28);

                    function ledNumber28() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 8500;
                        let ledChangeTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 255 ] , [ 0 , 0 , 255 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledColor = [];
                        
                        let ledJudgeTime = nowTime[1] % ledRepeatTime;
                        for ( var j = 0 ; j < 4 ; j++ ) {
                            if ( ledJudgeTime < ledChangeTime + ledRepeatTimeSplit * j ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ ( j + 1 ) % 4 ][k] - ledBasicColor[j][k] ) / ledChangeTime *  ( ledJudgeTime - ledRepeatTimeSplit * j );
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( j + 1 ) % 4 ][k];
                                break;
                            }
                        }
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * 3.5 ) % ledRepeatTime;
                        for ( var j = 0 ; j < 4 ; j++ ) {
                            if ( ledJudgeTime < ledChangeTime + ledRepeatTimeSplit * j ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ ( j + 1 ) % 4 ][k] - ledBasicColor[j][k] ) / ledChangeTime *  ( ledJudgeTime - ledRepeatTimeSplit * j );
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( j + 1 ) % 4 ][k];
                                break;
                            }
                        }
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BP *****/
                    waterCurtain("BP");

                    /***** LED DSF6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF6);

                    function ledNumberDSF6() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 4 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 4 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BR *****/
                    waterCurtain("BR");

                    /***** LED DSF7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF7);

                    function ledNumberDSF7() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED SK3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK3);

                    function ledNumberSK3() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = 105;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 100 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 2 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BG *****/
                    waterCurtain("BG");

                    /***** LED HI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI1);

                    function ledNumberHI1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = 188;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 50 , 255 , 255 ] , [ 0 , 220 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 SS2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS2);

                    function waterLightNumberSS2() {
                        let waterLightFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 3000;

                        let waterLightBasicColor = [ [ 150 , 255 , 0 ] , [ 0 , 80 , 255 ] ];
                        let waterLightLapTime = waterLightRepeatTime / waterLightNumber;

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let waterLightColor = [];
                            let j = waterLightNumber - i;
                            let waterLightJudgeTime = ( nowTime[1] + waterLightLapTime * ( j + 2 ) ) % waterLightRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( waterLightJudgeTime < waterLightRepeatTime / 2 * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTime * 2 * ( waterLightJudgeTime - waterLightRepeatTime / 2 * l ) ;
                                    break;
                                }
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }

                    /***** ムービングライト DSF2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,181000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,5,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF2_1);

                        function movingLightNumberDSF2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 8500;
                            let movingLightAngleLapTheta = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let angleXYCenter = 0;
                            let angleZCenter = 90;
                            let angleXYRadius = 30;
                            let angleZRadius = 10;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTheta * ( j + 0.5 ) ) % 360 / 180 * Math.PI;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);                            
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF2_2);

                        function movingLightNumberDSF2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);                        
                                                    
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {   
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }

                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 6000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDSF2_3);

                        function movingLightNumberDSF2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberDSF2_4);

                        function movingLightNumberDSF2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let angleXY, angleZ;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let angleZRadius = 40;
                            let angleZCenter = 50;
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let movingLightAngleJudgeTime;

                                if ( i === 1 ) {
                                    movingLightAngleJudgeTime = ( nowTime[1] + 11600 ) % movingLightAngleRepeatTime;
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                        angleXY = 120 - 90 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    } else {
                                        angleXY = 30 + 90 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                        
                                    }
                                } else if ( i === 2 ) {
                                    movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTime / 2 ) {
                                        angleXY = 45 - 90 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    } else {
                                        angleXY = -45 + 90 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                    }
                                } else {
                                    movingLightAngleJudgeTime = ( nowTime[1] + 6600 ) % movingLightAngleRepeatTime;
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTime / 2 ) {
                                        angleXY = 30 - 90 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    } else {
                                        angleXY = -60 + 90 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                    }
                                }

                                if ( movingLightAngleJudgeTime > movingLightAngleRepeatTime / 2 ) {
                                    let movingLightAngleRad = ( 180 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit ) ) % 360 / 180 * Math.PI;
                                    angleZ = -1 * ( angleZCenter + angleZRadius * Math.sin(movingLightAngleRad) );
                                } else {
                                    angleZ = -50;
                                }
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 13500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDSF2_5);

                        function movingLightNumberDSF2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 26000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF2_6);

                        function movingLightNumberDSF2_6() {
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 80 , 160 , 255 ] , [ 255 , 255 , 80 ] ];
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[12] = 65000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDSF2_5);

                        function movingLightNumberDSF2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[4] = 65500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDSF2_7);

                        function movingLightNumberDSF2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,150,255,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 71000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[8] = setInterval(movingLightNumberDSF2_8);

                        function movingLightNumberDSF2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 84500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF2_6);

                        function movingLightNumberDSF2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 80 , 160 , 255 ] , [ 255 , 255 , 80 ] ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberDSF2_9);

                        function movingLightNumberDSF2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightRotateRepeatTime = 800;
                            let movingLightRotateDeg = 360/movingLightRotateRepeatTime*nowTime[0];
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightRotateChange(1,i,movingLightRotateDeg);

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberDSF2_10);
                        
                        function movingLightNumberDSF2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,255,1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 110000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[8] = setInterval(movingLightNumberDSF2_8);

                        function movingLightNumberDSF2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,150,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberDSF2_11);
                        
                        function movingLightNumberDSF2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                                clearInterval(movingLightSetInterval[11]);
                            }
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 140000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDSF2_5);

                        function movingLightNumberDSF2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 140800;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF2_1);

                        function movingLightNumberDSF2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 8500;
                            let movingLightAngleLapTheta = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let angleXYCenter = 0;
                            let angleZCenter = 90;
                            let angleXYRadius = 30;
                            let angleZRadius = 10;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTheta * ( j + 0.5 ) ) % 360 / 180 * Math.PI;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);                            
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 143000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF2_6);

                        function movingLightNumberDSF2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 80 , 160 , 255 ] , [ 255 , 255 , 80 ] ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberDSF2_9);

                        function movingLightNumberDSF2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightRotateRepeatTime = 800;
                            let movingLightRotateDeg = 360/movingLightRotateRepeatTime*nowTime[0];
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightRotateChange(1,i,movingLightRotateDeg);

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberDSF2_10);
                        
                        function movingLightNumberDSF2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,255,1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 181000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberDSF2_12);

                        function movingLightNumberDSF2_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                                clearInterval(movingLightSetInterval[4]);
                                clearInterval(movingLightSetInterval[9]);
                                clearInterval(movingLightSetInterval[12]);
                            }

                        }

                    },movingLightSetTimeoutDelay[11]);

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン I *****/
                    waterCurtain("I");

                    /***** LED 42 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber42);

                    function ledNumber42() {
                        let ledColor = [];
                        let ledFadeTime = 500;
                        let ledRepeatTime = 3500;
                        let ledRepeatTimeSplitHarf = 1400;
                        let ledRepeatTimeSplit = ledRepeatTimeSplitHarf * 2;
                        let ledRepeatTimeSplitRest = ( ledRepeatTime - ledRepeatTimeSplit ) / 2;
                        let ledRepeatTimeSplitBefore = ledRepeatTime - ledRepeatTimeSplitRest;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];

                        let ledLapTime = ledRepeatTimeSplitHarf / 2;
                        let ledJudgeTime = ( nowTime[1] % ledRepeatTime + ledLapTime ) % ledRepeatTimeSplit;
                        if ( nowTime[1] % ledRepeatTime >= ledRepeatTimeSplitBefore ) ledJudgeTime = ( ledLapTime * 2 + ledRepeatTimeSplitRest * 2 - ledJudgeTime ) % ledRepeatTimeSplit;
                        
                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplitHarf * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplitHarf * ( ledJudgeTime - ledRepeatTimeSplitHarf * l ) ;
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        ledLapTime = ledRepeatTimeSplitHarf / 2 * 3;
                        ledJudgeTime = ( nowTime[1] % ledRepeatTime + ledLapTime ) % ledRepeatTimeSplit;
                        if ( nowTime[1] % ledRepeatTime >= ledRepeatTimeSplitBefore ) ledJudgeTime = ( ledLapTime * 2 + ledRepeatTimeSplitRest * 2 - ledJudgeTime ) % ledRepeatTimeSplit;
                        
                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplitHarf * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplitHarf * ( ledJudgeTime - ledRepeatTimeSplitHarf * l ) ;
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED DSF8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF8);

                    function ledNumberDSF8() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledChangeTime = 300;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor1 = [ 255 , 255 , 255 ]
                        let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] ];
                        
                        let ledLapTimeSplit = 313;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) + ledChangeTime ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) * 4 + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 125;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) + ledChangeTime ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) * 4 + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AU *****/
                    waterCurtain("AU");

                    /***** LED DSF9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF9);

                    function ledNumberDSF9() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 150 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 12;
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 4 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor1 = [ 255 , 255 , 255 ];
                        ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 150 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 12;
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 4 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF8);

                    function ledNumberDSF8() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledChangeTime = 300;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor1 = [ 255 , 255 , 255 ]
                        let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] ];
                        
                        let ledLapTimeSplit = 313;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) + ledChangeTime ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) * 4 + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 125;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) + ledChangeTime ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) * 4 + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

                    /***** LED DoHN2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDoHN2);

                    function ledNumberDoHN2() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = 135;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED DSF8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF8);

                    function ledNumberDSF8() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledChangeTime = 300;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor1 = [ 255 , 255 , 255 ]
                        let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] ];
                        
                        let ledLapTimeSplit = 313;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) + ledChangeTime ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) * 4 + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 125;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 3 ) + ledChangeTime ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) * 4 + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED DSF10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF10);

                    function ledNumberDSF10() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledLapTimeSplit = 500;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 200 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledRepeatTimeSplit = ledRepeatTime / 3;
                        ledLapTimeSplit = 190;
                        ledBasicColor = [ [ 180 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン N *****/
                    waterCurtain("N");

                    /***** LED DSF11 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberDSF11_1);
                        
                        function ledNumberDSF11_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
                            
                            let ledArray = [ 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 2 , 1 , 0 , 2  ];
                            let ledBasicColor = [ [ 150 , 200 , 255 ] , [ 100 , 170 , 255 ] , [ 50 , 150 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];

                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[1]);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,255,255,nowTime[0],ledFadeTime);

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 10000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberDSF12);
                        
                        function ledNumberDSF12() {
                            let ledFadeTime = 2000;
                            let ledRepeatTime = 1500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledBasicColor = [ [ 0 , 80 , 255 ] , [ 200 , 255 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 32000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberDSF13);
                        
                        function ledNumberDSF13() {
                            let ledFadeTime = 2000;
                            let ledRepeatTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = 670;
                            let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledRepeatTimeSplit = ledRepeatTime / 3;
                            ledLapTimeSplit = 220;
                            ledBasicColor = [ [ 0 , 50 , 255 ] , [ 200 , 255 , 255 ] , [ 0 , 255 , 255 ] ];
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[3]);


                    /***** 水中照明 DSF1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDSF1);

                    function waterLightNumberDSF1() {
                        let fadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト DSF3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,174000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF3_1);

                        function movingLightNumberDSF3_1() {
                            let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,100,255,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,100,255,0);
                                
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,0,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }

                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF3_2);

                        function movingLightNumberDSF3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 172000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDSF3_3);

                        function movingLightNumberDSF3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 174000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDSF3_4);

                        function movingLightNumberDSF3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED DSF12 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF12);

                    function ledNumberDSF12() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 0 , 80 , 255 ] , [ 200 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AV *****/
                    waterCurtain("AV");

                    /***** LED DSF13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF13);

                    function ledNumberDSF13() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledLapTimeSplit = 670;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledRepeatTimeSplit = ledRepeatTime / 3;
                        ledLapTimeSplit = 220;
                        ledBasicColor = [ [ 0 , 50 , 255 ] , [ 200 , 255 , 255 ] , [ 0 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BN *****/
                    waterCurtain("BN");

                    /***** LED DSF12 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF12);

                    function ledNumberDSF12() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 0 , 80 , 255 ] , [ 200 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED DSF12 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF12);

                    function ledNumberDSF12() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 0 , 80 , 255 ] , [ 200 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                    /***** LED DSF13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF13);

                    function ledNumberDSF13() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledLapTimeSplit = 670;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];
                        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledRepeatTimeSplit = ledRepeatTime / 3;
                        ledLapTimeSplit = 220;
                        ledBasicColor = [ [ 0 , 50 , 255 ] , [ 200 , 255 , 255 ] , [ 0 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AJ *****/
                    waterCurtain("AJ");

                    /***** LED WD8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWD8);

                    function ledNumberWD8() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledColorChangeTime = 2000;
                        let ledColorChangeBeforeTime = 7070;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [] , [] ];
                        let ledBasicColor1 = [ [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] ];
                        let ledBasicColor2 = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];

                        if ( nowTime[0] < ledColorChangeBeforeTime ) {
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledBasicColor1[l][k];
                            }
                        } else if ( nowTime[0] < ledColorChangeBeforeTime + ledColorChangeTime ) {
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledBasicColor1[l][k] + ( ledBasicColor2[l][k] - ledBasicColor1[l][k] ) / ledColorChangeTime * ( nowTime[0] - ledColorChangeBeforeTime ) ;
                            }
                        } else {
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledBasicColor2[l][k];
                            }
                        }
                        
                        let ledLapTimeSplit = 670;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 270;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BG *****/
                    waterCurtain("BG");

                    /***** LED HI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI1);

                    function ledNumberHI1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = 188;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 50 , 255 , 255 ] , [ 0 , 220 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF14 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberDSF14_1);
                        
                        function ledNumberDSF14_1() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
                            
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
                            let ledBasicColor = [ [ 100 , 255 , 0 ] , [ 255 , 100 , 0 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( 2 * l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( 0 - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = 0 + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - 0 ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( 2 * l + 1 ) ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledRepeatTimeSplit = ledRepeatTime / 6;
                            ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;
                            ledBasicColor = [ [ 0 , 255 , 255 ] , [ 200 , 255 , 0 ] , [ 255 , 200 , 0 ] ];
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( 2 * l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( 0 - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = 0 + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - 0 ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( 2 * l + 1 ) ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 13000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberDSF14_2);
                        
                        function ledNumberDSF14_2() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 1900;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 650;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            
                            let ledLapTimeSplit = 320;
                            let ledBasicColor = [ [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 400 ) % ledRepeatTime;
                                
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = 75;
                            ledBasicColor = [ [ 0 , 220 , 255 ] , [ 255 , 220 , 0 ] ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 600 ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 27000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberDSF14_3);
                        
                        function ledNumberDSF14_3() {
                            let ledFadeTime = 2000;
                            let ledRepeatTime = 1900;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 650;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            
                            let ledLapTimeSplit = 320;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 0 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;

                                let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = 75;
                            ledBasicColor = [ [ 0 , 180 , 255 ] , [ 0 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;

                                let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[3]);


                    /***** 水中照明 DSF2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDSF2);

                    function waterLightNumberDSF2() {
                        let waterLightFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 5000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 3;
                        let waterLightBasicColor = [ [ 0 , 150 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] ];

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let j = i - 1;
                            let waterLightColor = [];
                            let waterLightJudgeTime = ( nowTime[1] + 1110 * j ) % waterLightRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 3 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }

                    /***** ムービングライト DSF4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,58000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF4_0);

                        function movingLightNumberDSF4_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF4_1);

                        function movingLightNumberDSF4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightMaxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,200,0,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 7400;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF4_2);

                        function movingLightNumberDSF4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1600;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 255 , 0 ] , [ 0 , 255 , 255 ] , [ 200 , 0 , 255 ] , [ 255 , 100 , 0 ] ];
                            let movingLightColor = [];
                            let movingLightColorOpacity = 1;
                            let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                    break;
                                }
                            }

                            if ( nowTime[0] >= 5000 ) {
                                let movingLightColorRepeatTime2 = 100;
                                let movingLightColorDisplayTime2 = 50;

                                let movingLightJudgeTime2 = ( nowTime[0] - 5000 ) % movingLightColorRepeatTime2;

                                if ( movingLightJudgeTime2 < movingLightColorRepeatTime2 - movingLightColorDisplayTime2 ) movingLightColorOpacity = 0;

                            } else if ( nowTime[0] >= 3200 ) {
                                let movingLightColorRepeatTime2 = 300;
                                let movingLightColorDisplayTime2 = 50;

                                let movingLightJudgeTime2 = ( nowTime[0] - 3200 ) % movingLightColorRepeatTime2;

                                if ( movingLightJudgeTime2 < movingLightColorRepeatTime2 - movingLightColorDisplayTime2 ) movingLightColorOpacity = 0;

                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 14000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF4_0);

                        function movingLightNumberDSF4_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }

                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberDSF4_3);

                        function movingLightNumberDSF4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 10000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightChangeTime = 1000;
                            let movingLightBasicColor = [ [ 0 , 150 , 255 ] , [ 255 , 200 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j + movingLightColorRepeatTimeSplit / 2 ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberDSF4_4);

                        function movingLightNumberDSF4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let angleXYCenter = 0;
                            let angleZCenter = 80;
                            let angleXYRadius = 90;
                            let angleZRadius = 20;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleLapTimeSplit * ( j + 2 ) ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[6] = 27000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF4_0);

                        function movingLightNumberDSF4_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                                clearInterval(movingLightSetInterval[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[3] = 27500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDSF4_5);

                        function movingLightNumberDSF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],2500,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let angleXYCenter = 0;
                            let angleZCenter = 80;
                            let angleXYRadius = 90;
                            let angleZRadius = 20;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleLapTimeSplit * ( j + 2 ) ) ) % 360 / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);                            
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF4_6);

                        function movingLightNumberDSF4_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],2500,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let angleXY, angleZ;
                            let movingLightAngleRepeatTime = 10000;
                            let angleXYRadius = 60;
                            let angleXYCenter = -50;
                            let angleZRadius = 20;
                            let angleZCenter = -80;
                            let movingLightColorLapTimeSplit = [ 2500 , 7500 , 5000 ];
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                angleXY = angleXYCenter + angleXYRadius  * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter - angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 30000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF4_0);

                        function movingLightNumberDSF4_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }

                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberDSF4_7);

                        function movingLightNumberDSF4_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3600;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 8;
                            let movingLightRotateDeg = 360 / 2500 * ( nowTime[0] % 2500 );
                            let movingLightBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 200 , 0 ] , [ 255 , 255 , 0 ] , [ 255 , 0 , 255 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 8 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,200,nowTime[0]);
                                movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberDSF4_8);

                        function movingLightNumberDSF4_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 10000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 6;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [ 0 , 0 , 0 ];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * ( j % 4 ) ) % movingLightColorRepeatTime;

                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        movingLightColor[ ( 3 - l ) % 3 ] = 255;
                                        movingLightColor[ ( 4 - l ) % 3 ] = 255 - 255 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        movingLightColor[ ( 3 - l ) % 3 ] = 255;
                                        movingLightColor[ ( 2 - l ) % 3 ] = 255 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 57000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF4_0);

                        function movingLightNumberDSF4_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,0,0,0,-1,200,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                                clearInterval(movingLightSetInterval[6]);
                                clearInterval(movingLightSetInterval[8]);
                                clearInterval(movingLightSetInterval[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AB *****/
                    waterCurtain("AB");

                    /***** LED DSF15 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF15);

                    function ledNumberDSF15() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = 220;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 70;
                        ledRepeatTimeSplit = ledRepeatTime / 4;
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 150 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 180 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === '_' || code === 226 ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF16 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF16);

                    function ledNumberDSF16() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 200 , 0 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 5;
                        let ledLapTimeSplit = 90;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 5;
                        ledLapTimeSplit = 38;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                }
            } else if ( mainNowPage === 2 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );

                        let repeatTime = 900;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColorRed1 = ( nowTime[1] + repeatTime * 8 / ledNumberInside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }

                            ledColorChange(1,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColorRed1 = ( nowTime[1] + repeatTime * 8 / ledNumberOutside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }
                            
                            ledColorChange(2,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }
                    }

                    /***** 水中照明 DSF3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDSF3);

                    function waterLightNumberDSF3() {
                        let waterLightFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 12000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 6;
                        let waterLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 255 , 255 ] , [ 0 , 0 , 255 ], [ 100 , 0 , 255 ] ];

                        let waterLightColor = [];
                        let waterLightJudgeTime = nowTime[1] % waterLightRepeatTime;

                        for ( var l = 0 ; l < 6 ; l++ ) {
                            if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 6 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                    }

                    /***** ムービングライト DSF5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,181000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF5_0);

                        function movingLightNumberDSF5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF5_1);

                        function movingLightNumberDSF5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY;
                                let angleZ = 85;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;

                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = -90 + 180 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleXY = 90 - 180 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 4000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF5_2);

                        function movingLightNumberDSF5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightOpacityRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 6;
                            let movingLightColorRepeatTimeSplit2 = movingLightOpacityRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightColorLapTimeSplit2 = movingLightOpacityRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 200 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 200 , 200 , 255 ] , [ 255 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 6 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 6 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                let movingLightJudgeTime2 = ( nowTime[1] + movingLightColorLapTimeSplit2 * j ) % movingLightOpacityRepeatTime;

                                if ( movingLightJudgeTime2 < movingLightColorRepeatTimeSplit2 ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit2 * movingLightJudgeTime2;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit2 * ( movingLightJudgeTime2 - movingLightColorRepeatTimeSplit2 );
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 17500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDSF5_3);

                        function movingLightNumberDSF5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,200,200,255,1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 43000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDSF5_4);

                        function movingLightNumberDSF5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 43550;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 450;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDSF5_5);

                        function movingLightNumberDSF5_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11500;
                            let movingLightAngleRepeatTimeSplitXY = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplitZ = movingLightAngleRepeatTime / 8;
                            let movingLightColorRepeatTimeSplit = movingLightAngleRepeatTimeSplitZ / 6;
                            let angleMaxXY;
                            let angleMaxZ = [ -30 , -120 ];

                            for ( var i = 1 ; i <= 3 ; i++ ) {    
                                let angleXY, angleZ;
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 3 * ( i - 1 + 0.6 ) ) % movingLightAngleRepeatTime;

                                if ( i === 1 ) angleMaxXY = [ 45 , -45 ];
                                else angleMaxXY = [ -45 , -135 ]

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitXY * ( l + 1 ) ) {
                                        angleXY = angleMaxXY[l] + ( angleMaxXY[ ( l + 1 ) % 2 ] - angleMaxXY[l] ) / movingLightAngleRepeatTimeSplitXY * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitXY * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime %= ( movingLightAngleRepeatTimeSplitZ * 2 );

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitZ * ( l + 1 ) ) {
                                        angleZ = angleMaxZ[l] + ( angleMaxZ[ ( l + 1 ) % 2 ] - angleMaxZ[l] ) / movingLightAngleRepeatTimeSplitZ * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitZ * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) {
                                    movingLightColorOpacity = 0;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 2 ) {
                                    movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit ) ;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 4 ) {
                                    movingLightColorOpacity = 1;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 5 ) {
                                    movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * 4 ) ;
                                } else {
                                    movingLightColorOpacity = 0;
                                }

                                movingLightColorChange(1,i,255,255,255,movingLightColorOpacity,movingLightAngleFadeTime,nowTime[0]);

                            }
                            
                        }

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF5_6);

                        function movingLightNumberDSF5_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11500;
                            let movingLightAngleRepeatTimeSplitXY = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplitZ = movingLightAngleRepeatTime / 8;
                            let movingLightColorRepeatTimeSplit = movingLightAngleRepeatTimeSplitZ / 6;
                            let angleMaxXY = [ 90 , -90 ];
                            let angleMaxZ = [ 50 , 110 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY, angleZ;
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * j ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitXY * ( l + 1 ) ) {
                                        angleXY = angleMaxXY[l] + ( angleMaxXY[ ( l + 1 ) % 2 ] - angleMaxXY[l] ) / movingLightAngleRepeatTimeSplitXY * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitXY * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime %= ( movingLightAngleRepeatTimeSplitZ * 2 );

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitZ * ( l + 1 ) ) {
                                        angleZ = angleMaxZ[l] + ( angleMaxZ[ ( l + 1 ) % 2 ] - angleMaxZ[l] ) / movingLightAngleRepeatTimeSplitZ * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitZ * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) {
                                    movingLightColorOpacity = 0;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 2 ) {
                                    movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit ) ;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 4 ) {
                                    movingLightColorOpacity = 1;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 5 ) {
                                    movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * 4 ) ;
                                } else {
                                    movingLightColorOpacity = 0;
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 68000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF5_0);

                        function movingLightNumberDSF5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,-90,90,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }

                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF5_1);

                        function movingLightNumberDSF5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY;
                                let angleZ = 85;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;

                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = -90 + 180 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleXY = 90 - 180 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 69000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF5_2);

                        function movingLightNumberDSF5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightOpacityRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 6;
                            let movingLightColorRepeatTimeSplit2 = movingLightOpacityRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightColorLapTimeSplit2 = movingLightOpacityRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 200 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 200 , 200 , 255 ] , [ 255 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 6 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 6 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                let movingLightJudgeTime2 = ( nowTime[1] + movingLightColorLapTimeSplit2 * j ) % movingLightOpacityRepeatTime;

                                if ( movingLightJudgeTime2 < movingLightColorRepeatTimeSplit2 ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit2 * movingLightJudgeTime2;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit2 * ( movingLightJudgeTime2 - movingLightColorRepeatTimeSplit2 );
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 76000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDSF5_3);

                        function movingLightNumberDSF5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,200,200,255,1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 101000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDSF5_4);

                        function movingLightNumberDSF5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 101550;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 450;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDSF5_5);

                        function movingLightNumberDSF5_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11500;
                            let movingLightAngleRepeatTimeSplitXY = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplitZ = movingLightAngleRepeatTime / 8;
                            let movingLightColorRepeatTimeSplit = movingLightAngleRepeatTimeSplitZ / 6;
                            let angleMaxXY;
                            let angleMaxZ = [ -30 , -120 ];

                            for ( var i = 1 ; i <= 3 ; i++ ) {    
                                let angleXY, angleZ;
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 3 * ( i - 1 + 0.6 ) ) % movingLightAngleRepeatTime;

                                if ( i === 1 ) angleMaxXY = [ 45 , -45 ];
                                else angleMaxXY = [ -45 , -135 ]

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitXY * ( l + 1 ) ) {
                                        angleXY = angleMaxXY[l] + ( angleMaxXY[ ( l + 1 ) % 2 ] - angleMaxXY[l] ) / movingLightAngleRepeatTimeSplitXY * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitXY * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime %= ( movingLightAngleRepeatTimeSplitZ * 2 );

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitZ * ( l + 1 ) ) {
                                        angleZ = angleMaxZ[l] + ( angleMaxZ[ ( l + 1 ) % 2 ] - angleMaxZ[l] ) / movingLightAngleRepeatTimeSplitZ * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitZ * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                if ( nowTime[0] >= movingLightSetTimeoutDelay[10] - movingLightSetTimeoutDelay[9] && nowTime[0] < movingLightSetTimeoutDelay[15] - movingLightSetTimeoutDelay[9] ) {
                                    movingLightColorOpacity = 0;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) {
                                    movingLightColorOpacity = 0;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 2 ) {
                                    movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit ) ;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 4 ) {
                                    movingLightColorOpacity = 1;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 5 ) {
                                    movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * 4 ) ;
                                } else {
                                    movingLightColorOpacity = 0;
                                }

                                movingLightColorChange(1,i,255,255,255,movingLightColorOpacity,movingLightAngleFadeTime,nowTime[0]);

                            }
                            
                        }

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF5_6);

                        function movingLightNumberDSF5_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11500;
                            let movingLightAngleRepeatTimeSplitXY = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplitZ = movingLightAngleRepeatTime / 8;
                            let movingLightColorRepeatTimeSplit = movingLightAngleRepeatTimeSplitZ / 6;
                            let angleMaxXY = [ 90 , -90 ];
                            let angleMaxZ = [ 50 , 110 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY, angleZ;
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * j ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitXY * ( l + 1 ) ) {
                                        angleXY = angleMaxXY[l] + ( angleMaxXY[ ( l + 1 ) % 2 ] - angleMaxXY[l] ) / movingLightAngleRepeatTimeSplitXY * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitXY * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime %= ( movingLightAngleRepeatTimeSplitZ * 2 );

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitZ * ( l + 1 ) ) {
                                        angleZ = angleMaxZ[l] + ( angleMaxZ[ ( l + 1 ) % 2 ] - angleMaxZ[l] ) / movingLightAngleRepeatTimeSplitZ * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitZ * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) {
                                    movingLightColorOpacity = 0;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 2 ) {
                                    movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit ) ;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 4 ) {
                                    movingLightColorOpacity = 1;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 5 ) {
                                    movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * 4 ) ;
                                } else {
                                    movingLightColorOpacity = 0;
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 126000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        movingLightSetInterval[7] = setInterval(movingLightNumberDSF5_7);

                        function movingLightNumberDSF5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[20] = 127000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF5_0);

                        function movingLightNumberDSF5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[11] = 127500;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;

                        movingLightSetInterval[8] = setInterval(movingLightNumberDSF5_8);

                        function movingLightNumberDSF5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 6;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 200 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 200 , 200 , 255 ] , [ 255 , 0 , 255 ] ];
                            let movingLightColor = [];
                                
                            let movingLightJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 6 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 6 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 142000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberDSF5_9);

                        function movingLightNumberDSF5_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);                  
                                    movingLightColorChange(2,i,150,200,255,1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 143500;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[10] = setInterval(movingLightNumberDSF5_10);

                        function movingLightNumberDSF5_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightDisplayTime = 100;
                            let movingLightColorOpacity;

                            let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            if ( movingLightJudgeTime < movingLightColorRepeatTime - movingLightDisplayTime ) movingLightColorOpacity = 0;
                            else movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 148250;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF5_0);

                        function movingLightNumberDSF5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 150000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 450;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDSF5_6);

                        function movingLightNumberDSF5_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11500;
                            let movingLightAngleRepeatTimeSplitXY = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplitZ = movingLightAngleRepeatTime / 8;
                            let movingLightColorRepeatTimeSplit = movingLightAngleRepeatTimeSplitZ / 6;
                            let angleMaxXY = [ 90 , -90 ];
                            let angleMaxZ = [ 50 , 110 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY, angleZ;
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * j ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitXY * ( l + 1 ) ) {
                                        angleXY = angleMaxXY[l] + ( angleMaxXY[ ( l + 1 ) % 2 ] - angleMaxXY[l] ) / movingLightAngleRepeatTimeSplitXY * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitXY * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime %= ( movingLightAngleRepeatTimeSplitZ * 2 );

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitZ * ( l + 1 ) ) {
                                        angleZ = angleMaxZ[l] + ( angleMaxZ[ ( l + 1 ) % 2 ] - angleMaxZ[l] ) / movingLightAngleRepeatTimeSplitZ * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitZ * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) {
                                    movingLightColorOpacity = 0;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 2 ) {
                                    movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit ) ;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 4 ) {
                                    movingLightColorOpacity = 1;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 5 ) {
                                    movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * 4 ) ;
                                } else {
                                    movingLightColorOpacity = 0;
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 168000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF5_0);

                        function movingLightNumberDSF5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF5_1);

                        function movingLightNumberDSF5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY;
                                let angleZ = 85;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;

                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = -90 + 180 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleXY = 90 - 180 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 169000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,50);

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF5_2);

                        function movingLightNumberDSF5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightOpacityRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 6;
                            let movingLightColorRepeatTimeSplit2 = movingLightOpacityRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightColorLapTimeSplit2 = movingLightOpacityRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 200 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 200 , 200 , 255 ] , [ 255 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 6 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 6 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                let movingLightJudgeTime2 = ( nowTime[1] + movingLightColorLapTimeSplit2 * j ) % movingLightOpacityRepeatTime;

                                if ( movingLightJudgeTime2 < movingLightColorRepeatTimeSplit2 ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit2 * movingLightJudgeTime2;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit2 * ( movingLightJudgeTime2 - movingLightColorRepeatTimeSplit2 );
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 180000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberDSF5_11);

                        function movingLightNumberDSF5_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);

                                    if ( i <= 4 ) movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(2,5,10,80,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 184000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberDSF5_12);

                        function movingLightNumberDSF5_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED WD9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberWD9_1);
                        
                        function ledNumberWD9_1() {
                            let ledFadeTime = 1300;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,200,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 9430;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberWD9_2);
                        
                        function ledNumberWD9_2() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 13550;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberWD9_3);
                        
                        function ledNumberWD9_3() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 200 , 255 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            
                            let ledLapTimeSplit = 835;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( 2 * l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k] ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 2 ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( 2 * l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k] ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[3]);
                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BQ *****/
                    waterCurtain("BQ");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 2 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 2 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }
                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BL *****/
                    waterCurtain("BL");

                    /***** LED DSC13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSC13);

                    function ledNumberDSC13() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 0 , 255 , 0 ] , [ 0 , 150 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / 18;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 500 ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 );
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 1500 ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 );
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BD *****/
                    waterCurtain("BD");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 2 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 2 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }
                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 2 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 2 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }
                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF17 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF17);

                    function ledNumberDSF17() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 200 , 255 ] , [ 255 , 255 , 255 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledLapTimeSplit = 210;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( 2 * l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( 2 * l + 1 ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor = [ [ 220 , 255 , 255 ] , [ 0 , 150 , 255 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 6;
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ( i - 4 + ledNumberOutside ) % ledNumberOutside;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF18 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF18);

                    function ledNumberDSF18() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 0 , 255 , 0 ] ];
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = 250;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 100 ] ];
                        ledRepeatTimeSplit = ledRepeatTime / 4;
                        ledLapTimeSplit = ledRepeatTime / 6;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ( ledNumberOutside - i + 1 ) % 12;
                            let ledJudgeTime;

                            if ( j < 6 ) ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
                            else ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( 11 - j ) + ledRepeatTime / 2 ) % ledRepeatTime;                        

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );

                        let repeatTime = 900;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColorRed1 = ( nowTime[1] + repeatTime * 8 / ledNumberInside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }

                            ledColorChange(1,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColorRed1 = ( nowTime[1] + repeatTime * 8 / ledNumberOutside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }
                            
                            ledColorChange(2,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }
                    }

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 44 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber44);

                    function ledNumber44() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 255 , 255 , 255 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF19 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF19);

                    function ledNumberDSF19() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
                        let ledArray = [ 560 , 800 , 90 , 510 , 950 , 970 , 730 , 670 , 740 , 230 , 800 , 0 , 220 , 120 , 830 , 800 , 750 , 880 , 530 , 810 ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledArray[i-1] ) % ledRepeatTime;

                            for ( l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ){
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] ];
                        ledArray = [ 560 , 100 , 820 , 230 , 400 , 260 , 920 , 310 , 130 , 670 , 830 , 330 , 990 , 990 , 360 , 890 , 210 , 240 , 780 , 370 , 0 , 40 , 600 , 410 , 910 , 640 , 990 , 120 , 100 , 710 , 180 , 860 , 400 , 410 , 500 , 860 , 210 , 300 , 960 , 530 , 640 , 50 , 420 , 630 , 1000 , 180 , 350 , 30 ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledArray[i-1] ) % ledRepeatTime;

                            for ( l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ){
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );

                        let repeatTime = 900;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColorRed1 = ( nowTime[1] + repeatTime * 8 / ledNumberInside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }

                            ledColorChange(1,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColorRed1 = ( nowTime[1] + repeatTime * 8 / ledNumberOutside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }
                            
                            ledColorChange(2,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }
                    }

                    /***** 水中照明 SS1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS1);

                    function waterLightNumberSS1() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,120,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト DSF6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);                        

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                            if ( i === 3 ) movingLightPictureChange(2,i,3,40,100);
                            else movingLightTriplePictureChange(2,i,3,100,50,100);
                        }

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDSF6_0);

                        function movingLightNumberDSF6_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                                
                                movingLightAngleChange(2,1,110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,-110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,15,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,-110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,-80,85,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDSF6_1);

                        function movingLightNumberDSF6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightGradientColorChange(2,i,150,220,255,50,200,220,255,50,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberDSF6_2);

                        function movingLightNumberDSF6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 150000 * ( nowTime[0] % 150000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                if ( i !== 3 ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 69000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDSF6_3);

                        function movingLightNumberDSF6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 71000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDSF6_4);

                        function movingLightNumberDSF6_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DSF1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDSF1);
        
                    function logoboardLightNumberDSF1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 50 , 255 , 0 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 0 , 255 , 255 , 255 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 255 , 100 , 0 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 255 , 255 , 255 ];
                            else logoboardLightColor = [ 0 , 255 , 255 , 180 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DSF2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDSF2);
        
                    function logoboardLightNumberDSF2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 100 , 255 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 255 , 50 , 200 , 255 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 150 , 255 , 0 ];
                            else logoboardLightColor = [ 255 , 50 , 200 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト SK1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberSK1);

                    function parLightNumberSK1() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 0 , 255 , 255 ];
                            else parLightColor = [ 255 , 0 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 600;
                        spotLightChange(1,spotFadeTime,startTime + 400);

                        /***** ステージライト *****/
                        let stageFadeTime = 600;
                        stageLightChange(1,stageFadeTime,startTime + 400);
                    },400);
                    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DSF3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDSF3);
        
                    function logoboardLightNumberDSF3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,0,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }

                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DSF4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDSF4);
        
                    function logoboardLightNumberDSF4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 150 , 255 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 255 , 50 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 200 , 0 , 0 ];
                            else logoboardLightColor = [ 0 , 150 , 255 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト DSF1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDSF1);

                    function parLightNumberDSF1() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 255 , 255 , 0 ];
                            else parLightColor = [ 200 , 255 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 600;
                        spotLightChange(1,spotFadeTime,startTime + 400);
                    },400);    

                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DSF5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDSF5);
        
                    function logoboardLightNumberDSF5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;

                            if ( j < 6 ) logoboardLightColor = [ 0 , 0 , 255 , 0 ];
                            else logoboardLightColor = [ 0 , 80 , 255 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト MB2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberMB2);

                    function parLightNumberMB2() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,0,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 600;
                        spotLightChange(0.5,spotFadeTime,startTime + 400);
                    },400);    

                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DCD4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDCD4);
        
                    function logoboardLightNumberDCD4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 3000;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 6;
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [ 0 , 0 , 0 ];
                            let logoboardLapTimeSplit = 0;

                            if ( i <= 12 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit * ( 3 + Math.trunc( ( 12 - i ) / 3 ) );
                            else if ( i <= 27 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit * ( 0.5 * Math.trunc( ( i - 13 ) / 3 ) );
                            else if ( i <= 48 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit * ( 3 + 0.25 * Math.trunc( ( 87 - i ) / 3 ) );

                            let logoboardJudgeTime = ( nowTime[0] + logoboardLapTimeSplit ) % logoboardRepeatTime;

                            for ( var j = 0 ; j < 3 ; j++ ) {
                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( j * 2 + 1 ) ) {
                                    logoboardColor[ ( 3 - j ) % 3 ] = 255;
                                    logoboardColor[ 2 - j ] = 255 / logoboardRepeatTimeSplit * ( logoboardJudgeTime - logoboardRepeatTimeSplit * ( j * 2 ) );
                                    break;
                                } else if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( ( j + 1 ) * 2 ) ) {
                                    logoboardColor[ 2 - j ] = 255;
                                    logoboardColor[ ( 3 - j ) % 3 ] = 255 - 255 / logoboardRepeatTimeSplit * ( logoboardJudgeTime - logoboardRepeatTimeSplit * ( j * 2 + 1 ) );
                                    break;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],255);
                        }
                    }

                    /***** パーライト DSF2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDSF2);

                    function parLightNumberDSF2() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,255,200,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 600;
                        spotLightChange(1,spotFadeTime,startTime + 400);
                    },400);    

                } else if ( subCode === 12 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DSF6 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDSF6);
        
                    function logoboardLightNumberDSF6() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;

                            if ( j < 6 ) logoboardLightColor = [ 0 , 180 , 255 , 0 ];
                            else logoboardLightColor = [ 255 , 200 , 0 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト DSF3 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDSF3);

                    function parLightNumberDSF3() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,0,255,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 600;
                        spotLightChange(1,spotFadeTime,startTime + 400);
                    },400);

                }
            }
    } else if ( dnNowSelect === 1 ) {
        if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 TL1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberTL1);

                    function waterLightNumberTL1() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BN *****/
                    waterCurtain("BN");

                    /***** LED 115 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber115);
        
                    function ledNumber115() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);    
                        let ledRepeatTime = 800;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 255 , 0 ]  , [ 255 , 100 , 0 ] ];

                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight1_1);

                        function movingLightNumberNight1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト Night2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight2_2);

                        function movingLightNumberNight2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AX *****/
                    waterCurtain("AX");

                    /***** LED RURI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberRURI1);

                    function ledNumberRURI1() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight1_1);

                        function movingLightNumberNight1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);
                    
                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 55 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber55);

                    function ledNumber55() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber , ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 74000;
                        let ledRepeatTimeSplit = ledRepeatTime / 11;
                        let ledLapTimeSplit = 1450;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j;
                            let ledColor = [ 0 , 0 , 0 ];

                            if ( i >= 7 && i < 17 ) j = 16 - i;
                            else if ( i < 7 ) j = i + 3;
                            else j = i - 17;

                            j = 9 - j + 4;
                            //j += 4//9.25//ledNumberOutside / 4;//( ledNumberOutside - ledNumberInside ) / 4 + ledNumberInside / 4; 0-9 7-16 9.25-13.75  11.5( O/2 - I/2 ) / 2

                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                ledColor[0] = 255;
                                ledColor[2] = 255 / ledRepeatTimeSplit / 2 * ledJudgeTime;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                ledColor[2] = 255;
                                ledColor[0] = 255 - 255 / ledRepeatTimeSplit / 2 * ( ledJudgeTime - ledRepeatTimeSplit * 2 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 6 ) {
                                ledColor[2] = 255;
                                ledColor[1] = 255 / ledRepeatTimeSplit / 2 * ( ledJudgeTime - ledRepeatTimeSplit * 4 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 7 ) {
                                ledColor[1] = 255;
                                ledColor[2] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 6 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 8 ) {
                                ledColor[1] = 255;
                                ledColor[0] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 7 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 11 ) {
                                ledColor[0] = 255;
                                ledColor[1] = 255 - 255 / ledRepeatTimeSplit / 3 * ( ledJudgeTime - ledRepeatTimeSplit * 8 );
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j;
                            let ledColor = [ 0 , 0 , 0 ];

                            if ( i >= 13 && i < 37 ) j = 36 - i;
                            else if ( i < 13 ) j = i + 11;
                            else j = i - 37;

                            j = 23 - j;

                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                ledColor[0] = 255;
                                ledColor[2] = 255 / ledRepeatTimeSplit / 2 * ledJudgeTime;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                ledColor[2] = 255;
                                ledColor[0] = 255 - 255 / ledRepeatTimeSplit / 2 * ( ledJudgeTime - ledRepeatTimeSplit * 2 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 6 ) {
                                ledColor[2] = 255;
                                ledColor[1] = 255 / ledRepeatTimeSplit / 2 * ( ledJudgeTime - ledRepeatTimeSplit * 4 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 7 ) {
                                ledColor[1] = 255;
                                ledColor[2] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 6 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 8 ) {
                                ledColor[1] = 255;
                                ledColor[0] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 7 );
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 11 ) {
                                ledColor[0] = 255;
                                ledColor[1] = 255 - 255 / ledRepeatTimeSplit / 3 * ( ledJudgeTime - ledRepeatTimeSplit * 8 );
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }
                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト RURI1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberRURI1_1);

                        function movingLightNumberRURI1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightColorRepeatTime = 600;
                            let movingLightDisplayTime = 200;

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / 4 * ( 4 - i ) ) % movingLightColorRepeatTime;
                                let movingLightColorOpacity = 0;

                                if ( movingLightJudgeTime < movingLightDisplayTime ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,255,0,0,movingLightColorOpacity);
                            }

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;
                                let movingLightColorOpacity = 0;

                                if ( movingLightJudgeTime < movingLightDisplayTime ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,255,0,0,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 8000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberRURI1_2);

                        function movingLightNumberRURI1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'm' ) {
                    let startTime = Date.now();

                    /***** 水中照明 RURI1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberRURI1);

                    function waterLightNumberRURI1() {
                        let waterLightFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 3000;
                        let waterLightColor = [];
                        let waterLightBasicColor = [ [ 0 , 150 , 255 ] , [ 0 , 50 , 255 ] ];

                        if ( nowTime[1] % waterLightRepeatTime < waterLightRepeatTime / 2 ) {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime );
                        } else {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime - waterLightRepeatTime / 2 );
                        }

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                    }
                    
                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AE *****/
                    waterCurtain("AE");

                    /***** LED RURI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberRURI1);

                    function ledNumberRURI1() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト RURI2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberRURI2_1);

                        function movingLightNumberRURI2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberRURI2_2);

                        function movingLightNumberRURI2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 11500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberRURI2_3);

                        function movingLightNumberRURI2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 13300;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberRURI2_4);

                        function movingLightNumberRURI2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i !== 2 || i !== 3 ) {
                                        movingLightColorChange(2,i,0,0,0,0,movingLightAngleFadeTime,nowTime[0]);
                                        movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    }
                                }
                                movingLightColorChange(1,1,255,255,255,0);
                                movingLightColorChange(2,2,255,255,255,0);
                                movingLightColorChange(2,3,255,255,255,0);
                                movingLightAngleChange(1,1,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,-10,30,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAnglehange(2,3,10,30,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 15100;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberRURI2_5);

                        function movingLightNumberRURI2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 29000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberRURI2_6);

                        function movingLightNumberRURI2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i !== 2 || i !== 3 ) {
                                        movingLightColorChange(2,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                                        movingLightAngleChange(2,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                    }
                                }

                                movingLightColorChange(1,1,255,255,255,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,255,255,255,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,255,255,255,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 31500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberRURI2_7);

                        function movingLightNumberRURI2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AG *****/
                    waterCurtain("AG");

                    /***** LED 38 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber38);
        
                    function ledNumber38() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
        
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 220 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト RURI3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberRURI3_1);

                        function movingLightNumberRURI3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    if ( i % 2 === 1 ) movingLightAngleChange(2,i,20,50,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(2,i,-20,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberRURI3_2);

                        function movingLightNumberRURI3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 13000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberRURI3_3);

                        function movingLightNumberRURI3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    if ( i % 2 === 0 ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    else movingLightColorChange(1,i,0,0,0,0);

                                    movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    
                                    if ( i % 2 === 1 ) movingLightAngleChange(2,i,20,50,movingLightColorFadeTime,nowTime[0]);
                                    else movingLightAngleChange(2,i,-20,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 15000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberRURI3_4);

                        function movingLightNumberRURI3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i !== 2 || i !== 3 ) {
                                        movingLightColorChange(2,i,0,0,0,0,movingLightAngleFadeTime,nowTime[0]);
                                        movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    }
                                }
                                movingLightColorChange(1,1,255,255,255,0);
                                movingLightColorChange(2,2,255,255,255,0);
                                movingLightColorChange(2,3,255,255,255,0);
                                movingLightAngleChange(1,1,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,-10,30,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,10,30,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 15800;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberRURI3_5);

                        function movingLightNumberRURI3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 26000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberRURI3_6);

                        function movingLightNumberRURI3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i !== 2 || i !== 3 ) {
                                        movingLightColorChange(2,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                                        movingLightAngleChange(2,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                    }
                                }

                                movingLightColorChange(1,1,255,255,255,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,255,255,255,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,255,255,255,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 28500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberRURI3_7);

                        function movingLightNumberRURI3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED RURI2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberRURI2);

                    function ledNumberRURI2() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト Night7 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight7_1);

                        function movingLightNumberNight7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    if ( i % 2 === 1 ) movingLightAngleChange(2,i,20,50,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(2,i,-20,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight7_2);

                        function movingLightNumberNight7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト Night2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight2_2);

                        function movingLightNumberNight2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED 3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber3);

                    function ledNumber3() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1700;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 200 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight1_1);

                        function movingLightNumberNight1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 TL1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberTL1);

                    function waterLightNumberTL1() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED 37 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber37);

                    function ledNumber37() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            if ( i % 2 === 1 ) ledColor = [ 255 , 220 , 0 ];
                            else ledColor = [ 255 , 255 , 0 ];

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            
                            if ( i % 2 === 0 ) ledColor = [ 255 , 220 , 0 ];
                            else ledColor = [ 255 , 255 , 0 ];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight1_1);

                        function movingLightNumberNight1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED 11 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber11);

                    function ledNumber11() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber , ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 500;
                        let ledChangeTime = 50;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 220 , 0 ] , [ 255 , 50 , 0 ] , [ 0 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight1_1);

                        function movingLightNumberNight1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED 76 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber76);

                    function ledNumber76() {
                        let ledFadeTime = 500;
                        let ledRepeatTime = 6000;
                        let ledChangeTime = ledFadeTime;
                        let ledRepeatTimeSplit = [ 2000 , 6000 ];
                        let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledColor = [];
                        
                        let ledJudgeTime = nowTime[1] % ledRepeatTime;
                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit[l] - ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit[l] ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit[l] - ledChangeTime ) ) ;
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

                    /***** 水中照明 RURI3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberRURI1);

                    function waterLightNumberRURI1() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight1_1);

                        function movingLightNumberNight1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BK *****/
                    waterCurtain("BK");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                    /***** LED 77 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber77);

                    function ledNumber77() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 2600;
                        let ledRepeatTimeSplit = ledRepeatTime / 12;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * l ) % ledRepeatTime;

                                if ( ledJudgeTime2 < ledRepeatTimeSplit * 3 ) {
                                    ledColor[l] = 255 / ledRepeatTimeSplit / 3 * ledJudgeTime2 ;
                                } else if ( ledJudgeTime2 < ledRepeatTimeSplit * 7 ) {
                                    ledColor[l] = 255;
                                } else if ( ledJudgeTime2 < ledRepeatTimeSplit * 10 ) {
                                    ledColor[l] = 255 - 255 / ledRepeatTimeSplit / 3 * ( ledJudgeTime2 - ledRepeatTimeSplit * 7 ) ;
                                } else {
                                    ledColor[l] = 0;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * l ) % ledRepeatTime;

                                if ( ledJudgeTime2 < ledRepeatTimeSplit * 3 ) {
                                    ledColor[l] = 255 / ledRepeatTimeSplit / 3 * ledJudgeTime2 ;
                                } else if ( ledJudgeTime2 < ledRepeatTimeSplit * 7 ) {
                                    ledColor[l] = 255;
                                } else if ( ledJudgeTime2 < ledRepeatTimeSplit * 10 ) {
                                    ledColor[l] = 255 - 255 / ledRepeatTimeSplit / 3 * ( ledJudgeTime2 - ledRepeatTimeSplit * 7 ) ;
                                } else {
                                    ledColor[l] = 0;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED RURI3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberRURI3);

                    function ledNumberRURI3() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight1_1);

                        function movingLightNumberNight1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 TL1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberTL1);

                    function waterLightNumberTL1() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト Night2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight2_2);

                        function movingLightNumberNight2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === ';' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight3_1);

                        function movingLightNumberNight3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight3_2);

                        function movingLightNumberNight3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === ':' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight4_1);

                        function movingLightNumberNight4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight4_2);

                        function movingLightNumberNight4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber4);

                    function ledNumber4() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        
                        let ledLapTimeSplit = ledRepeatTime / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 3 - l) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 3 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [ 0 , 0 , 0 ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    ledColor[ ( 3 - l) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 3 - l ) % 3 ] = 255;
                                    ledColor[ ( 2 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 RURI1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberRURI1);
        
                    function logoboardLightNumberRURI1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = i - 24;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 50 , 255 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 180 , 255 , 255 ];
                            else if ( j <= 24 ) logoboardLightColor = [ 0 , 0 , 255 , 150 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** スポットライト *****/
                    let spotFadeTime = 300;
                    spotLightChange(1,spotFadeTime,startTime);
                    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** パーライト RURI1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberRURI1);

                    function parLightNumberRURI1() {
                        let parLightFadeTime = 3000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ )parLightColorFadeChange(i,0,100,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.5,spotFadeTime,startTime + 2000);
                    },2000);

                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 RURI1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberRURI1);
        
                    function logoboardLightNumberRURI1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = i - 24;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 50 , 255 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 180 , 255 , 255 ];
                            else if ( j <= 24 ) logoboardLightColor = [ 0 , 0 , 255 , 150 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** ステージライト *****/
                    stageLightChange(1,1800,startTime);

                }
            }

        }
    }
});





