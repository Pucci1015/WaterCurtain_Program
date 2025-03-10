jsSetting_Old("ColoringChristmas","Coloring Christmas",2,1,/*2,1,*/0,0,2200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "ColoringChristmas" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED CC1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC1);

                    function ledNumberCC1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 180 , 240 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = 590;

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

                    /***** 水中照明 CC1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC1);

                    function waterLightNumberCC1() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 CC1 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2500,1);
                    },0);

                    let logoboardLightDelayTime = 4500;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 3000;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC1);
            
                        function logoboardLightNumberCC1() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                                else j = 11 - ( i - 1 ) % 12;
        
                                if ( j < 6 ) logoboardLightColor = [ 255 , 0 , 0 , 0 ];
                                else logoboardLightColor = [ 255 , 0 , 100 , 200 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                    /***** ムービングライト CC1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC1_1);

                        function movingLightNumberCC1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    if ( i === 3 ) movingLightAngleFadeChange(2,i,-5,85,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,5,85,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1200;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC1_2);

                        function movingLightNumberCC1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 2200;
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

                    /***** 水中照明 CC2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC2);

                    function waterLightNumberCC2() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 CC2 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2500,1);
                    },0);

                    let logoboardLightDelayTime = 4000;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 3000;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC2);
            
                        function logoboardLightNumberCC2() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                                else j = 11 - ( i - 1 ) % 12;
        
                                if ( j < 6 ) logoboardLightColor = [ 0 , 0 , 255 , 0 ];
                                else logoboardLightColor = [ 50 , 0 , 255 , 200 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                    /***** ムービングライト CC2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 700;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC2_1);

                        function movingLightNumberCC2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,-150,-60,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    if ( i === 3 ) movingLightAngleFadeChange(2,i,-5,85,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,5,85,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 700;

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC2_2);

                        function movingLightNumberCC2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 2 ; i <= 4 ; i++ ) movingLightAngleFadeChange(1,i,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,1,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 5 ) movingLightAngleFadeChange(2,i,60,50,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,-60,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 1500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC2_3);

                        function movingLightNumberCC2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;

                            for ( var i = 2 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( i % 2 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,0,0,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0],1);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit / 2 * ( i % 2 * 2 + 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 21000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 700;

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC2_4);

                        function movingLightNumberCC2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= 4 ; i++ )  movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ )  movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 21700;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberCC2_5);

                        function movingLightNumberCC2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ )  movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ )  movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 93 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber93);

                    function ledNumber93() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト CC3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2700;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC3_1);

                        function movingLightNumberCC3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2700;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC3_2);

                        function movingLightNumberCC3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BN *****/
                    waterCurtain("BN");

                    /***** LED CC2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC2);

                    function ledNumberCC2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 200 , 200 , 255 ] , [ 0 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = 590;

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

                    /***** 水中照明 CC3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC3);

                    function waterLightNumberCC3() {
                        let waterLightFadeTime = 1500;
                        let waterLightRepeatTime = 4000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        let waterLightColor = [];
                        let waterLightBasicColor = [ [ 120 , 150 , 255 ] , [ 0 , 100 , 255 ] ];

                        if ( nowTime[1] % waterLightRepeatTime < waterLightRepeatTime / 2 ) {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime );
                        } else {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime - waterLightRepeatTime / 2 );
                        }

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                    }

                    /***** 看板照明 CC3 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(1200,1);
                    },0);

                    let logoboardLightDelayTime = 3200;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 1500;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC3);
            
                        function logoboardLightNumberCC3() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                                else j = 11 - ( i - 1 ) % 12;
        
                                if ( j < 6 ) logoboardLightColor = [ 0 , 0 , 255 , 0 ];
                                else logoboardLightColor = [ 80 , 0 , 255 , 0 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED CC2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC2);

                    function ledNumberCC2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 200 , 200 , 255 ] , [ 0 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = 590;

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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED CC2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC2);

                    function ledNumberCC2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 200 , 200 , 255 ] , [ 0 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = 590;

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

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED CC2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC2);

                    function ledNumberCC2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 200 , 200 , 255 ] , [ 0 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = 590;

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

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 93 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber93);

                    function ledNumber93() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED CC2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC2);

                    function ledNumberCC2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 200 , 200 , 255 ] , [ 0 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = 590;

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

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED CC3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC3);

                    function ledNumberCC3() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
                        
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
                        
                        ledLapTimeSplit = ledRepeatTime * 10 / ledNumberOutside;

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

                    /***** 水中照明 CC4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC4);

                    function waterLightNumberCC4() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 CC4 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2000,1);
                    },0);

                    let logoboardLightDelayTime = 3500;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 3000;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC4);
            
                        function logoboardLightNumberCC4() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                                else j = 11 - ( i - 1 ) % 12;
        
                                if ( j < 6 ) logoboardLightColor = [ 255 , 255 , 0 , 100 ];
                                else logoboardLightColor = [ 255 , 200 , 150 , 255 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                    /***** ムービングライト CC4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 900;
                        let movingLightAngleFadeTime = 900;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC4_1);

                        function movingLightNumberCC4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 11500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC4_2);

                        function movingLightNumberCC4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 13500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC4_3);

                        function movingLightNumberCC4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 5 ) movingLightAngleFadeChange(2,i,90,85,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,-90,85,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'p' ) {
                    let startTime = Date.now();

                    /***** ムービングライト CC5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;
                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC5_1);

                        function movingLightNumberCC5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 5 ) movingLightAngleFadeChange(2,i,90,85,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,-90,85,movingLightAngleFadeTime,nowTime[0]);

                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1600;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,80,100);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC5_2);

                        function movingLightNumberCC5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit / 2 * ( i % 2 * 2 + 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AY *****/
                    waterCurtain("AY");

                    /***** LED CC4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC4);

                    function ledNumberCC4() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let ledChangeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

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

                    /***** 水中照明 CC5 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC5);

                    function waterLightNumberCC5() {
                        let waterLightFadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,255,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 CC5 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2000,1);
                    },0);

                    let logoboardLightDelayTime = 3500;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 2500;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC5);
            
                        function logoboardLightNumberCC5() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                                else j = 11 - ( i - 1 ) % 12;
        
                                if ( j < 6 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                                else logoboardLightColor = [ 180 , 255 , 0 , 100 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                    /***** ムービングライト CC6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,80,100);

                        let movingLightAngleFadeTime = 2000;
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC6_1);

                        function movingLightNumberCC6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,0,0,0,0/*,movingLightColorFadeTime,nowTime[0],1*/);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 5 ) movingLightAngleFadeChange(2,i,90,85,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,-90,85,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,0,255,0,1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 5000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC6_2);

                        function movingLightNumberCC6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 6500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC6_3);

                        function movingLightNumberCC6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC6_4);

                        function movingLightNumberCC6_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],100000,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 30;
                            let angleZCenter = -70;
                            let movingLightLapDeg = [ 160 , 0 , 50 , 210 ];
                            let movingLightAngleJudgeTime = 0;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;

                                if ( i !== 1 ) movingLightAngleRad *= -1;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] > movingLightAngleFadeTime ) clearInterval(movingLightSetInterval[4]);
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 7700;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberCC6_5);

                        function movingLightNumberCC6_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AM *****/
                    waterCurtain("AM");

                    /***** LED 88 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber88);

                    function ledNumber88() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 800;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledChangeTime = 100;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 's' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン BP *****/
                    waterCurtain("BP");

                    /***** LED CC5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC5);

                    function ledNumberCC5() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 5200;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledChangeTime = 180;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = 240;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

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
                        
                        ledLapTimeSplit = 210;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;

                            let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit + ledLapTimeSplit * j ) % ledRepeatTime;

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

                    /***** ムービングライト CC7 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,3,100,55,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC7_1);

                        function movingLightNumberCC7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],1600,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 30;
                            let angleZCenter = -70;
                            let movingLightLapDeg = [ 160 , 0 , 50 , 210 ];
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightRotateDeg = 360/8500*(nowTime[0]%8500);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;

                                if ( i !== 1 ) movingLightAngleRad *= -1;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightColorFadeTime,nowTime[0]);

                                movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            }

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC7_2);

                        function movingLightNumberCC7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 13000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 10;
                            let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 0 , 0 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] , [ 255 , 0 , 0 ] , [ 255 , 0 , 100 ] , [ 255 , 255 , 0 ] , [ 0 , 0 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 10 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 10 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;                   

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC7_3);

                        function movingLightNumberCC7_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 30000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC7_4);

                        function movingLightNumberCC7_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 31200;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        movingLightPictureChange(1,1,12,50,100);
                        movingLightPictureChange(1,3,0,50,100);
                        for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightTriplePictureChange(1,i,12,100,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberCC7_5);

                        function movingLightNumberCC7_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleFadeChange(1,1,0,-80,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleFadeChange(1,i,( (-1) ** ( Math.trunc( i / 2 ) - 1 ) ) * 90,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,3,0,70,movingLightAngleFadeTime,nowTime[0]);

                                let angleX = [ -90 , -15 , 15 , 90 , -10 ];
                                let angleZ = 80;
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleFadeChange(2,i,angleX[i-1],angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightRotateDeg = 360/35000*(nowTime[0]%35000);

                            for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightTripleRotateChange(1,i,( (-1) ** ( i / 2 ) )*movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 32000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberCC7_6);

                        function movingLightNumberCC7_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    if ( i === 3 ) movingLightColorChange(1,i,255,0,180,1,movingLightColorFadeTime,nowTime[0],1);
                                    else movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,180,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 54000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC7_4);

                        function movingLightNumberCC7_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 55800;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberCC7_7);

                        function movingLightNumberCC7_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberCC7_8);

                        function movingLightNumberCC7_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],100000,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 30;
                            let angleZCenter = -70;
                            let movingLightLapDeg = [ 160 , 0 , 50 , 210 ];
                            let movingLightAngleJudgeTime = 0;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;

                                if ( i !== 1 ) movingLightAngleRad *= -1;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] > movingLightAngleFadeTime ) clearInterval(movingLightSetInterval[8]);
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 57300;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberCC7_9);

                        function movingLightNumberCC7_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,200,220,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED CC6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC6);

                    function ledNumberCC6() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 0 , 150 ] , [ 255 , 255 , 255 ] ];
                        
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
                        
                        ledLapTimeSplit = ledRepeatTime * 10 / ledNumberOutside;

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

                    /***** 水中照明 CC6 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC6);

                    function waterLightNumberCC6() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 CC6 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2000,1);
                    },0);

                    let logoboardLightDelayTime = 3500;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 3000;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC6);
            
                        function logoboardLightNumberCC6() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 2 ) j = i;
                                else j = logoboardLightNumber - i + 1;

                                if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 220 , 50 ];
                                else if ( j <= 18 ) logoboardLightColor = [ 255 , 100 , 220 , 150 ];
                                else logoboardLightColor = [ 255 , 0 , 150 , 50 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                } else if ( key === 'u' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED WP7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP7);

                    function ledNumberWP7() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledBasicColor1 = [ 255 , 150 , 0 ];
                        let ledBasicColor2 = [ [ 255 , 250 , 240 ] , [ 255 , 200 , 0 ] , [ 255 , 240 , 200 ] , [ 255 , 200 , 150 ] ];

                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 4 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
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

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 4 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 CC7 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC7);

                    function waterLightNumberCC7() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,180,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 CC7 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2500,1);
                    },0);

                    let logoboardLightDelayTime = 4000;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 2500;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC7);
            
                        function logoboardLightNumberCC7() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 2 ) j = i;
                                else j = logoboardLightNumber - i + 1;

                                if ( j <= 6 ) logoboardLightColor = [ 255 , 120 , 0 , 0 ];
                                else if ( j <= 18 ) logoboardLightColor = [ 255 , 150 , 100 , 255 ];
                                else logoboardLightColor = [ 255 , 220 , 0 , 50 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                    /***** ムービングライト CC8 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,3,100,55,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC8_1);

                        function movingLightNumberCC8_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],1600,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 30;
                            let angleZCenter = -70;
                            let movingLightLapDeg = [ 160 , 0 , 50 , 210 ];
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightRotateDeg = 360/8500*(nowTime[0]%8500);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;

                                if ( i !== 1 ) movingLightAngleRad *= -1;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightColorFadeTime,nowTime[0]);

                                movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            }

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC8_2);

                        function movingLightNumberCC8_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 13000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 10;
                            let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 0 , 0 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] , [ 255 , 0 , 0 ] , [ 255 , 0 , 100 ] , [ 255 , 255 , 0 ] , [ 0 , 0 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 10 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 10 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;                   

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC8_3);

                        function movingLightNumberCC8_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 36000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC8_4);

                        function movingLightNumberCC8_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 CC8 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC8);

                    function waterLightNumberCC8() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,200,220,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 CC7 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2000,1);
                    },0);

                    let logoboardLightDelayTime = 3500;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 3000;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberCC7);
            
                        function logoboardLightNumberCC7() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let logoboardLightColor = [];

                                if ( i <= 3 ) logoboardLightColor = [ 255 , 0 , 0 , 50 ];
                                else if ( i <= 6 ) logoboardLightColor = [ 150 , 0 , 255 , 255 ];
                                else if ( i <= 9 ) logoboardLightColor = [ 150 , 0 , 255 , 50 ];
                                else if ( i <= 12 ) logoboardLightColor = [ 0 , 0 , 255 , 50 ];
                                else if ( i <= 15 ) logoboardLightColor = [ 0 , 255 , 0 , 50 ];
                                else if ( i <= 18 ) logoboardLightColor = [ 150 , 255 , 0 , 150 ];
                                else if ( i <= 21 ) logoboardLightColor = [ 255 , 180 , 0 , 50 ];
                                else if ( i <= 24 ) logoboardLightColor = [ 255 , 255 , 0 , 50 ];
                                else if ( i <= 27 ) logoboardLightColor = [ 255 , 150 , 0 , 50 ];
                                else if ( i <= 30 ) logoboardLightColor = [ 255 , 0 , 0 , 50 ];
                                else if ( i <= 33 ) logoboardLightColor = [ 255 , 0 , 220 , 50 ];
                                else if ( i <= 36 ) logoboardLightColor = [ 150 , 0 , 255 , 50 ];
                                else if ( i <= 39 ) logoboardLightColor = [ 0 , 100 , 255 , 50 ];
                                else if ( i <= 42 ) logoboardLightColor = [ 0 , 255 , 255 , 0 ];
                                else if ( i <= 45 ) logoboardLightColor = [ 0 , 255 , 0 , 100 ];
                                else logoboardLightColor = [ 220 , 255 , 0 , 100 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                } else if ( key === 'w' ) {
                    let startTime = Date.now();

                    /***** ムービングライト CC9 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100,2);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberCC9_0);

                        function movingLightNumberCC9_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC9_1);

                        function movingLightNumberCC9_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],30000,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC9_2);

                        function movingLightNumberCC9_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],30000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime * 4 / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {                            
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * ( i - 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + 270 ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,85,movingLightAngleFadeTime,nowTime[0]);
                            }                       
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 30000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;                   

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC9_3);

                        function movingLightNumberCC9_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 8;
                            let movingLightChangeTime = 200;

                            let movingLightColor = [ [ 0 , 0 , 255 ] , [ 255 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                            let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit ) % movingLightColorRepeatTime;
                            let j = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightColor[j][0],movingLightColor[j][1],movingLightColor[j][2],1,movingLightChangeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC9_4);

                        function movingLightNumberCC9_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            let movingLightColorRepeatTime = 5000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 7;
                            let movingLightBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 150 , 220 ] , [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 7 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 7 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 58000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberCC9_5);

                        function movingLightNumberCC9_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }                    

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 58500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberCC9_6);

                        function movingLightNumberCC9_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,100,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-150,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-170,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,150,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 59500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberCC9_7);

                        function movingLightNumberCC9_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }
                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 82000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberCC7_8);

                        function movingLightNumberCC7_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 83000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC9_1);

                        function movingLightNumberCC9_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC9_2);

                        function movingLightNumberCC9_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime * 4 / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {                            
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * ( i - 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + 270 ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,85,movingLightAngleFadeTime,nowTime[0]);
                            }                       
                        }                    

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 84000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;                   

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC9_3);

                        function movingLightNumberCC9_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 8;
                            let movingLightChangeTime = 200;

                            let movingLightColor = [ [ 0 , 0 , 255 ] , [ 255 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                            let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit ) % movingLightColorRepeatTime;
                            let j = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightColor[j][0],movingLightColor[j][1],movingLightColor[j][2],1,movingLightChangeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC9_4);

                        function movingLightNumberCC9_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            let movingLightColorRepeatTime = 5000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 7;
                            let movingLightBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 150 , 220 ] , [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 7 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 7 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 112000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberCC9_5);

                        function movingLightNumberCC9_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }                    

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 112500;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberCC9_6);

                        function movingLightNumberCC9_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,100,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-150,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-170,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,150,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 113500;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberCC9_9);

                        function movingLightNumberCC9_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,150,150,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }
                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 137000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberCC7_8);

                        function movingLightNumberCC7_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 138000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC9_1);

                        function movingLightNumberCC9_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC9_2);

                        function movingLightNumberCC9_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime * 4 / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {                            
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * ( i - 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + 270 ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,85,movingLightAngleFadeTime,nowTime[0]);
                            }                       
                        }                    

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 139000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;                   

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC9_3);

                        function movingLightNumberCC9_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 8;
                            let movingLightChangeTime = 200;

                            let movingLightColor = [ [ 0 , 0 , 255 ] , [ 255 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                            let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit ) % movingLightColorRepeatTime;
                            let j = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightColor[j][0],movingLightColor[j][1],movingLightColor[j][2],1,movingLightChangeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC9_4);

                        function movingLightNumberCC9_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            let movingLightColorRepeatTime = 5000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 7;
                            let movingLightBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 150 , 220 ] , [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 7 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 7 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 164000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[5] = setInterval(movingLightNumberCC9_5);

                        function movingLightNumberCC9_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= 1000 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }                    

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 167000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 100;
                        let movingLightColorFadeTime = 100;    

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC9_1);

                        function movingLightNumberCC9_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC9_2);

                        function movingLightNumberCC9_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime * 4 / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {                            
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * ( i - 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + 270 ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,85,movingLightAngleFadeTime,nowTime[0]);
                            }                       
                        }               

                        movingLightSetInterval[10] = setInterval(movingLightNumberCC9_10);

                        function movingLightNumberCC9_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 1000 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i += 2 ) movingLightColorChange(1,i,0,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightColorChange(1,i,255,0,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberCC9_4);

                        function movingLightNumberCC9_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            let movingLightColorRepeatTime = 5000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 7;
                            let movingLightBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 150 , 220 ] , [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 7 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 7 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 192000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[5] = setInterval(movingLightNumberCC9_5);

                        function movingLightNumberCC9_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= 1000 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }                    

                    },movingLightSetTimeoutDelay[16]);

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 1800;
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
                                    ledColor[ ( 5 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 5 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
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
                                    ledColor[ ( 5 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 4 - l ) % 3 ] = 255;
                                    ledColor[ ( 5 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                    /***** 水中照明 SS3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS3);

                    function waterLightNumberSS3() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        waterLightColorChange(1,255,0,255,nowTime[0],fadeTime);
                        waterLightColorChange(2,127,0,255,nowTime[0],fadeTime);
                        waterLightColorChange(3,0,0,255,nowTime[0],fadeTime);
                        waterLightColorChange(4,0,255,255,nowTime[0],fadeTime);
                        waterLightColorChange(5,0,255,127,nowTime[0],fadeTime);
                        waterLightColorChange(6,0,255,0,nowTime[0],fadeTime);
                        waterLightColorChange(7,127,255,0,nowTime[0],fadeTime);
                        waterLightColorChange(8,255,255,0,nowTime[0],fadeTime);
                        waterLightColorChange(9,255,170,0,nowTime[0],fadeTime);
                        waterLightColorChange(10,255,85,0,nowTime[0],fadeTime);
                        waterLightColorChange(11,255,0,0,nowTime[0],fadeTime,0,waterLightSetInterval);                    

                    }

                    /***** 看板照明 CC10 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberCC10);
        
                    function logoboardLightNumberCC10() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,0,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                    }

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED DSF14 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF14);

                    function ledNumberDSF14() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 255 , 0 , 150 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 44 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber44);

                    function ledNumber44() {
                        let ledFadeTime = 1800;
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

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED MIYABI3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI3);
        
                    function ledNumberMIYABI3() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        let ledBasicColor = [ [ 255 , 255 , 0 ]  , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                ledJudgeTime %= ledRepeatTimeSplit * 2;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                ledJudgeTime %= ledRepeatTimeSplit * 2;

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

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtain("AO");

                    /***** LED 84 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber84);

                    function ledNumber84() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 0 , 200 ] , [ 255 , 255 , 0 ] , [ 255 , 100 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTime / 2 ) % ledRepeatTime;

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

                } else if ( key === ';' ) {
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
                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン H *****/
                    waterCurtain("H");

                    /***** LED DSC13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSC13);

                    function ledNumberDSC13() {
                        let ledFadeTime = 1800;
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
                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン L *****/
                    waterCurtain("L");

                    /***** LED MK2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMK2);

                    function ledNumberMK2() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 10000;
                        let ledChangeTime = 500;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit ) % ledRepeatTime;
                        let ledBasicColor = [ [ [ 255 , 255 , 200 ] , [ 255 , 255 , 230 ] , [ 255 , 220 , 150 ] , [ 255 , 200 , 0 ] ] , [ [ 255 , 255 , 220 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 220 ] , [ 255 , 220 , 100 ] ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ i % 2 ][l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ i % 2 ][l][k] + ( ledBasicColor[ i % 2 ][ ( l + 1 ) % 4 ][k] - ledBasicColor[ i % 2 ][l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                        
                            for ( var l = 0 ; l < 4 ; l++ ) {
                                let j =  Math.trunc( l / 2 ) * 2 + 1 - ( l % 2 ) ;
                                let m = ( 4 - l ) % 4;

                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ i % 2 ][j][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ i % 2 ][j][k] + ( ledBasicColor[ i % 2 ][m][k] - ledBasicColor[ i % 2 ][j][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber4);

                    function ledNumber4() {
                        let ledFadeTime = 1800;
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
                                    ledColor[ ( 3 - l ) % 3 ] = 255;
                                    ledColor[ ( 4 - l ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    ledColor[ ( 3 - l ) % 3 ] = 255;
                                    ledColor[ ( 5 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
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
                                    ledColor[ ( 5 - l ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 SS4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS4);

                    function waterLightNumberSS4() {
                        let waterLightFadeTime = 3000;
                        let waterLightRepeatTime = 5000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        let waterLightBasicColor = [ [ 0 , 100 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 150 , 0 , 255 ] ];
                        let waterLightLapTime = waterLightRepeatTime / waterLightNumber;

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let waterLightColor = [];
                            let j = waterLightNumber - i;
                            let waterLightJudgeTime = ( nowTime[1] + waterLightLapTime * j ) % waterLightRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 4 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }

                    /***** 看板照明 CC9 *****/
                    let logoboardLightMyNumber2 = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval2 = setInterval(logoboardLightNumberCC9);
        
                    function logoboardLightNumberCC9() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval2,logoboardLightMyNumber2);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,255,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval2,0);
                    }

                } else if ( key === '.' ) {
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

                    /***** 水中照明 SS2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS2);

                    function waterLightNumberSS2() {
                        let waterLightFadeTime = 500;
                        let waterLightRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        let waterLightBasicColor = [ [ 150 , 255 , 0 ] , [ 0 , 150 , 255 ] ];
                        let waterLightLapTime = waterLightRepeatTime / waterLightNumber;

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let waterLightColor = [];
                            let j = waterLightNumber - i;
                            let waterLightJudgeTime = ( nowTime[1] + waterLightLapTime * j ) % waterLightRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( waterLightJudgeTime < waterLightRepeatTime / 2 * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTime * 2 * ( waterLightJudgeTime - waterLightRepeatTime / 2 * l ) ;
                                    break;
                                }
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }

                    /***** 看板照明 CC10 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberCC10);
        
                    function logoboardLightNumberCC10() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,0,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                    }

                } else if ( key === '/' ) {
                    let startTime = Date.now();

                    /***** ムービングライト CC10 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberCC10_1);

                        function movingLightNumberCC10_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,100,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-150,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-170,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,150,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberCC10_2);

                        function movingLightNumberCC10_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 13000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 0 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 4 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 147000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberCC10_3);

                        function movingLightNumberCC10_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                }
            } else if ( mainNowPage === 2 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED CC1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC1);

                    function ledNumberCC1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 180 , 240 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = 590;

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

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED CC3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC3);

                    function ledNumberCC3() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
                        
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
                        
                        ledLapTimeSplit = ledRepeatTime * 10 / ledNumberOutside;

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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED CC6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC6);

                    function ledNumberCC6() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 0 , 150 ] , [ 255 , 255 , 255 ] ];
                        
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
                        
                        ledLapTimeSplit = ledRepeatTime * 10 / ledNumberOutside;

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

                } else if ( key === 'i' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED WP7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP7);

                    function ledNumberWP7() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        let ledBasicColor1 = [ 255 , 150 , 0 ];
                        let ledBasicColor2 = [ [ 255 , 250 , 240 ] , [ 255 , 200 , 0 ] , [ 255 , 240 , 200 ] , [ 255 , 200 , 150 ] ];

                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 4 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
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

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 4 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED CC7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberCC7);

                    function ledNumberCC7() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledChangeTime = 500;
                        let ledBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

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

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** パーライト defult *****/
                    let parLightSetInterval = setInterval(parLightNumberDefult);

                    function parLightNumberDefult() {
                        let parLightFadeTime = 300;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    /***** スポットライト *****/
                    let spotFadeTime = 300;
                    spotLightChange(1,spotFadeTime,startTime);
                    
                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** 看板照明 CC8 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberCC8);
        
                    function logoboardLightNumberCC8() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 3000;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 12;
                        let logoboardRepeatTimeSplit2 = logoboardRepeatTime / 8;
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit = 0;

                            if ( i <= 12 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( 12 - i ) / 3 );
                            else if ( i <= 27 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( i - 13 ) / 3 );
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( 90 - i ) / 3 );

                            let logoboardJudgeTime = ( nowTime[0] + logoboardLapTimeSplit + logoboardRepeatTimeSplit * 10 ) % logoboardRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                let logoboardJudgeTime2 = ( logoboardJudgeTime + logoboardRepeatTime / 3 * l ) % logoboardRepeatTime;

                                if ( logoboardJudgeTime2 < logoboardRepeatTimeSplit * 3 ) {
                                    logoboardColor[l] = 255 / logoboardRepeatTimeSplit / 3 * logoboardJudgeTime2 ;
                                } else if ( logoboardJudgeTime2 < logoboardRepeatTimeSplit * 7 ) {
                                    logoboardColor[l] = 255;
                                } else if ( logoboardJudgeTime2 < logoboardRepeatTimeSplit * 10 ) {
                                    logoboardColor[l] = 255 - 255 / logoboardRepeatTimeSplit / 3 * ( logoboardJudgeTime2 - logoboardRepeatTimeSplit * 7 ) ;
                                } else {
                                    logoboardColor[l] = 0;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1);
                        }
                    }

                    /***** 看板照明 CC9 *****/
                    let logoboardLightMyNumber2 = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 0;
                    let logoboardLightSetInterval2 = setInterval(logoboardLightNumberCC9);
        
                    function logoboardLightNumberCC9() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval2,logoboardLightMyNumber2);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,255,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval2,0);
                    }

                    /***** パーライト CC1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberCC1);

                    function parLightNumberCC1() {
                        let nowTime = nowTimeGet(startTime,0);
                        let parLightRepeatTime = 10500;
                        let parLightRepeatTimeSplit = parLightRepeatTime / 6;
                        let parLightLapTime = parLightRepeatTime / 8;
                        let parLightLapTimeSplit = [ 2 , 1 , 1 , 5 , 6 , 7 , 0 , 4 ];

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [ 0 , 0 , 0 ];

                            let parLightJudgeTime = ( nowTime[0] + parLightLapTime * parLightLapTimeSplit[i-1] ) % parLightRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( parLightJudgeTime < parLightRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    parLightColor[ ( 4 - l ) % 3 ] = 255;
                                    parLightColor[ ( 3 - l ) % 3 ] = 255 / parLightRepeatTimeSplit * ( parLightJudgeTime - parLightRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( parLightJudgeTime < parLightRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    parLightColor[ ( 3 - l ) % 3 ] = 255;
                                    parLightColor[ ( 4 - l ) % 3 ] = 255 - 255 / parLightRepeatTimeSplit * ( parLightJudgeTime - parLightRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            parLightColorChange(i,parLightColor[0],parLightColor[1],parLightColor[2],parLightMyNumber,parLightSetInterval);                  
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);
                    
                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** 看板照明 CC10 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberCC10);
        
                    function logoboardLightNumberCC10() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];

                            if ( ( i - 1 ) % 6 < 3 ) logoboardLightColor = [ 255 , 180 , 0 , 150 ];
                            else logoboardLightColor = [ 255 , 0 , 240 , 200 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト defult *****/
                    let parLightSetInterval = setInterval(parLightNumberDefult);

                    function parLightNumberDefult() {
                        let parLightFadeTime = 300;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    /***** スポットライト *****/
                    let spotFadeTime = 300;
                    spotLightChange(1,spotFadeTime,startTime);
                    
                }
            }
        }    
    }
});