jsSetting_Old("HaruIbuki","春息吹-HARU IBUKI-",2,2,0,0,3200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "HaruIbuki" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 RURI1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberRURI1);

                    function waterLightNumberRURI1() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SS3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSS3_1);

                        function ledNumberSS3_1() {
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = 100;
                            let ledBasicColor = [ 255 , 255 , 255 ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],0,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
                            let ledArray = [ [ 7 , 2 , 3 , 7 , 1 , 0 , 9 , 6 , 5 , 1 , 0 , 9 , 9 , 4 , 1 , 4 , 2 , 5 , 2 , 6 ] , [ 0 , 1 , 6 , 2 , 7 , 2 , 3 , 5 , 7 , 2 , 0 , 7 , 5 , 0 , 5 , 1 , 9 , 2 , 4 , 5 ] , [ 2 , 7 , 1 , 1 , 8 , 9 , 1 , 1 , 1 , 6 , 4 , 0 , 4 , 6 , 7 , 3 , 7 , 4 , 0 , 4 ] , [ 0 , 8 , 4 , 7 , 2 , 7 , 9 , 1 , 6 , 5 , 7 , 5 , 0 , 5 , 4 , 8 , 1 , 1 , 0 , 1 ] , [ 7 , 1 , 4 , 9 , 2 , 6 , 2 , 9 , 1 , 3 , 9 , 7 , 9 , 0 , 8 , 3 , 3 , 9 , 7 , 5 ] , [ 4 , 8 , 6 , 6 , 5 , 1 , 5 , 5 , 1 , 4 , 3 , 9 , 2 , 7 , 4 , 5 , 5 , 8 , 3 , 5 ] , [ 2 , 9 , 4 , 2 , 0 , 9 , 9 , 9 , 4 , 9 , 1 , 6 , 2 , 0 , 8 , 0 , 9 , 9 , 9 , 0 ] , [ 8 , 9 , 6 , 9 , 7 , 2 , 4 , 1 , 3 , 0 , 3 , 9 , 5 , 3 , 3 , 5 , 8 , 5 , 4 , 2 ] , [ 9 , 8 , 3 , 8 , 9 , 2 , 0 , 9 , 7 , 3 , 0 , 2 , 3 , 4 , 1 , 3 , 7 , 5 , 3 , 5 ] , [ 1 , 7 , 0 , 4 , 2 , 8 , 6 , 6 , 9 , 5 , 8 , 0 , 1 , 4 , 4 , 8 , 2 , 3 , 6 , 5 ] , [ 9 , 7 , 4 , 4 , 2 , 9 , 4 , 9 , 3 , 9 , 6 , 0 , 4 , 8 , 9 , 3 , 0 , 0 , 9 , 3 ] , [ 7 , 4 , 4 , 3 , 5 , 9 , 2 , 2 , 4 , 7 , 4 , 8 , 5 , 9 , 7 , 2 , 2 , 1 , 4 , 2 ] , [ 6 , 7 , 4 , 6 , 6 , 3 , 3 , 8 , 8 , 7 , 3 , 7 , 6 , 8 , 4 , 3 , 2 , 8 , 3 , 0 ] , [ 9 , 4 , 9 , 1 , 3 , 7 , 7 , 8 , 9 , 7 , 5 , 1 , 2 , 6 , 3 , 9 , 0 , 4 , 0 , 3 ] , [ 9 , 6 , 6 , 2 , 3 , 5 , 2 , 7 , 4 , 7 , 1 , 6 , 3 , 9 , 0 , 0 , 2 , 2 , 0 , 7 ] , [ 4 , 9 , 1 , 3 , 2 , 3 , 3 , 7 , 8 , 3 , 0 , 1 , 5 , 2 , 6 , 5 , 0 , 4 , 6 , 0 ] , [ 2 , 1 , 0 , 2 , 7 , 4 , 4 , 1 , 4 , 9 , 3 , 0 , 1 , 1 , 8 , 2 , 6 , 8 , 7 , 7 ] , [ 4 , 7 , 6 , 4 , 3 , 7 , 7 , 6 , 8 , 3 , 8 , 6 , 6 , 0 , 8 , 1 , 8 , 1 , 1 , 6 ] , [ 4 , 5 , 9 , 0 , 5 , 6 , 6 , 8 , 4 , 5 , 6 , 9 , 7 , 8 , 1 , 0 , 6 , 2 , 0 , 9 ] , [ 6 , 8 , 8 , 5 , 2 , 7 , 0 , 5 , 6 , 4 , 1 , 2 , 8 , 3 , 1 , 9 , 5 , 8 , 7 , 3 ] ];
                            
                            let ledJudgeTime = nowTime[0] % ledRepeatTime;
                            let j = Math.trunc(ledJudgeTime/ledRepeatTimeSplit);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [ 0 , 0 , 0 ];

                                if ( ledArray[i-1][j] === 1 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[k];
                                }
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2]);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0);

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 10000;
                    ledSetTimeout[2] = setTimeout( function() {
                        clearTimeout(ledSetInterval[1]);
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSS3_2);

                        function ledNumberSS3_2() {
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],100,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    /***** ムービングライト HI1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI1_1);

                        function movingLightNumberHI1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 3000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI1_2);

                        function movingLightNumberHI1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            let movingLightCplorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightCplorRepeatTime / 20;
                            let movingLightOpacityRepeatTime = 200;
                            let movingLightOpacityDisplayTime = 100;
                            let movingLightArray = [[1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0],[0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1],[0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]];
                            let j = Math.trunc( nowTime[0] / movingLightColorRepeatTimeSplit ) % 20;
                            let maxOpacity = 1;

                            if ( nowTime[0] >= 3500 ) maxOpacity = 1 - 1 / 1000 * ( nowTime[0] - 3500 );

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity = 0;

                                if ( movingLightArray[i-1][j] === 1 ) movingLightColorOpacity = maxOpacity;

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 7500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI1_3);

                        function movingLightNumberHI1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);
                    
                } else if ( key === 'h' ) {
                    let startTime = Date.now();

                    /***** 水中照明 HI1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHI1);

                    function waterLightNumberHI1() {
                        let fadeTime = 5000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }
                    
                } else if ( key === 'i' ) {
                    let startTime = Date.now();

                    /***** ムービングライト HI2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI2_1);

                        function movingLightNumberHI2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);
                    
                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン H *****/
                    waterCurtain("H");

                    /***** LED 95 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber95);

                    function ledNumber95() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト HI3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI3_1);

                        function movingLightNumberHI3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,150,255,200,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                    /***** LED WP7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP7);

                    function ledNumberWP7() {
                        let ledFadeTime = 1000;
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

                    /***** ムービングライト HI4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI4_1);

                        function movingLightNumberHI4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI4_2);

                        function movingLightNumberHI4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 250 , 220 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;
                                let movingLightColor = [];
    
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 0;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト HI5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI5_1);

                        function movingLightNumberHI5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,150,0,1);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 4000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI5_2);

                        function movingLightNumberHI5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 7500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI5_3);

                        function movingLightNumberHI5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,180,255,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 0;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 92 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber92);

                    function ledNumber92() {
                        let ledFadeTime = 0;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト HI4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI4_1);

                        function movingLightNumberHI4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI4_2);

                        function movingLightNumberHI4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 250 , 220 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;
                                let movingLightColor = [];
    
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 95 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber95);

                    function ledNumber95() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト HI6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI6_1);

                        function movingLightNumberHI6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 5000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 600;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI6_2);

                        function movingLightNumberHI6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleChange(1,i,0,10,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'q' ) {
                    let startTime = Date.now();

                    /***** 水中照明 BCP1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBCP1);

                    function waterLightNumberBCP1() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト HI7 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI7_1);

                        function movingLightNumberHI7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleChange(1,i,0,10,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,150,0,255,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 63000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI7_2);

                        function movingLightNumberHI7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 103000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI7_3);

                        function movingLightNumberHI7_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,150,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 148500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberHI7_4);

                        function movingLightNumberHI7_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,150,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 171500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHI7_5);

                        function movingLightNumberHI7_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 196500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI7_6);

                        function movingLightNumberHI7_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,100,0,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 220000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[7] = setInterval(movingLightNumberHI7_7);

                        function movingLightNumberHI7_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }
                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 221000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[8] = setInterval(movingLightNumberHI7_8);

                        function movingLightNumberHI7_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,200,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,200,0,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 264000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHI7_9);

                        function movingLightNumberHI7_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,-1,300,nowTime[0]);
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 265800;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[10] = setInterval(movingLightNumberHI7_10);

                        function movingLightNumberHI7_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 3200;
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
    
                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AG *****/
                    waterCurtain("AG");

                    /***** LED 38 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber38);
        
                    function ledNumber38() {
                        let ledFadeTime = 1800;
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
                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン I *****/
                    waterCurtain("I");

                    /***** LED 9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber9);

                    function ledNumber9() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,100,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }
                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("AO2");
                    },1500);

                    /***** LED SS2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSS2);
        
                    function ledNumberSS2() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 20000;
                        let ledChangeTime = 1500;
                        let ledRepeatTimeSplit = [ 13500 , 20000 ];
                        let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] ];
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

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BG *****/
                    waterCurtain("BG");

                    /***** LED HI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI1);

                    function ledNumberHI1() {
                        let ledFadeTime = 800;
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

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BH *****/
                    waterCurtain("BH");

                    /***** LED 64 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber64);

                    function ledNumber64() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledChangeTime = 200;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 220 , 100 , 255 ] , [ 0 , 0 , 255 ] ];
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

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

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 BC4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBC4);

                    function waterLightNumberBC4() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,220,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED HI2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI2);

                    function ledNumberHI2() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 240 , 220 , 255 ] ];
                        
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

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED HI2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI2);

                    function ledNumberHI2() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 240 , 220 , 255 ] ];
                        
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

                } else if ( key === '[' ) {
                    let startTime = Date.now();
        
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 103 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber103);
        
                    function ledNumber103() {
                        let fadeTime = 3200;
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
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],fadeTime);
                    }
        
                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED HI3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI3);

                    function ledNumberHI3() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 4500;
                        let ledRepeatTimeSplit = ledRepeatTime / 30;
                        let j = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 30;
                        let ledJudgeTime = nowTime[1] % ledRepeatTimeSplit;                        
                        let ledBasicColor = [ [ 240 , 180 , 255 ] , [ 200 , 100 , 255 ] , [ 255 , 0 , 150 ] ];

                        let ledArray = [[1,0,0,0,0,2,0,0,0,0,0,2,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,0,1,0,1,1,0,0,0,1,1,0,1,1,1,2,0,2,0,1,0,0,2,0,0,0,1,2,2],[0,0,0,0,0,0,2,0,1,0,0,0,2,2,1,0,1,2,2,0,0,0,1,0,2,0,1,0,2,1],[1,0,1,1,0,0,0,0,1,0,0,0,1,2,2,2,2,0,1,1,0,1,2,1,0,1,2,2,0,0],[2,1,0,2,0,2,0,0,0,2,2,1,2,1,0,2,0,0,1,1,2,0,0,2,1,0,0,2,1,0],[2,0,2,0,2,2,1,0,0,0,0,1,1,2,2,0,1,0,1,1,2,0,2,2,1,0,1,1,0,0],[1,2,0,0,0,0,0,2,0,1,1,1,0,0,1,2,2,0,0,0,1,0,2,1,0,1,2,0,0,0],[2,0,0,1,0,0,2,0,0,2,1,1,0,0,2,1,0,0,1,0,1,1,0,0,1,0,1,2,2,0],[1,0,2,1,1,1,0,0,1,1,1,0,1,1,1,0,0,2,0,0,2,1,2,0,0,1,2,2,1,0],[0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,2,0,0,2,0,2,0,1,0,0,0,0,1,0,0],[1,0,2,1,1,0,0,0,0,2,2,0,2,2,0,2,0,1,0,1,0,1,2,0,1,0,0,0,0,1],[1,2,0,0,1,2,0,2,1,0,1,0,2,0,1,0,2,2,2,1,1,2,0,1,1,0,0,0,1,0],[2,0,1,2,0,1,0,0,2,0,0,0,0,1,1,2,2,1,1,2,1,0,2,1,1,1,0,0,2,0],[1,0,1,1,0,0,0,1,1,1,0,0,2,0,1,0,1,2,0,0,2,2,2,0,0,1,2,1,0,0],[1,0,1,1,0,0,0,0,0,1,0,1,0,1,2,0,0,2,1,1,0,2,0,0,2,0,0,2,1,1],[0,0,0,2,0,2,2,1,2,2,0,2,1,0,2,0,1,0,1,0,0,1,2,0,0,0,1,1,0,1],[0,0,2,0,2,0,0,0,2,0,0,0,0,1,0,0,2,0,2,1,1,2,0,2,0,0,1,1,1,1],[0,0,2,0,0,2,2,1,2,0,0,0,0,1,0,0,1,0,0,2,1,0,0,0,0,0,2,0,0,0],[1,2,1,0,1,1,0,0,2,1,2,1,2,0,1,1,0,1,0,1,2,2,0,0,0,0,2,2,0,0],[1,1,2,2,0,0,2,0,0,0,0,0,0,0,2,2,1,2,0,2,0,0,1,0,0,1,1,1,1,2]];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let m = ledArray[i-1][j];
                            let n = ledArray[i-1][ ( j + 1 ) % 30 ];

                            if ( m === n ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k] + ( ledBasicColor[n][k] - ledBasicColor[m][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        ledArray = [[0,1,0,0,2,0,1,0,0,0,2,0,1,1,0,1,0,0,0,0,1,0,1,2,0,1,1,0,1,0],[2,0,0,1,0,0,2,1,0,1,0,1,1,0,1,0,1,1,2,2,0,1,2,2,1,0,0,1,0,1],[1,0,0,1,0,1,0,1,0,0,2,1,2,0,0,1,0,0,0,2,1,0,0,1,1,1,2,2,0,0],[0,1,1,0,0,0,0,1,1,0,2,0,0,0,0,1,0,0,0,2,0,0,1,0,0,1,0,0,1,0],[0,0,2,2,2,2,1,0,0,0,0,0,1,1,0,0,2,0,2,1,0,0,1,2,0,1,0,0,0,0],[0,1,2,0,2,2,2,1,0,1,0,0,1,0,2,2,1,1,0,0,0,1,2,0,2,0,0,0,0,0],[0,1,0,1,2,0,0,0,0,0,0,2,1,0,0,2,2,2,0,0,1,0,2,2,1,2,2,0,1,0],[0,0,0,0,2,0,0,0,0,2,0,1,0,1,0,0,0,0,2,1,0,1,0,1,1,2,2,2,0,1],[0,1,0,1,1,2,0,0,0,1,1,2,2,1,1,0,0,2,2,0,0,0,1,0,0,0,1,2,0,0],[1,0,1,0,0,0,1,2,0,0,1,1,2,1,0,0,1,2,0,2,0,0,1,0,0,0,2,0,0,0],[2,2,1,1,0,0,2,1,1,0,1,0,0,2,1,1,2,0,1,0,2,0,0,1,1,2,0,2,0,0],[0,2,1,1,2,1,2,0,0,0,0,2,0,1,0,1,0,0,1,2,0,0,0,2,1,2,0,1,0,2],[2,1,0,1,0,0,0,0,2,2,2,0,2,2,1,0,1,1,0,0,1,0,0,0,0,0,2,1,2,1],[2,0,0,1,2,1,0,1,0,0,0,0,0,2,0,0,0,0,1,0,0,0,2,1,0,1,1,2,0,0],[0,0,0,1,0,0,0,0,1,0,0,0,2,2,0,1,0,1,2,0,2,1,0,0,0,2,1,0,1,2],[2,2,0,0,0,1,0,1,1,1,2,0,0,0,0,1,0,0,2,0,0,1,1,2,0,1,0,1,1,1],[0,0,1,1,2,0,1,0,1,1,0,1,0,0,2,0,0,1,2,0,2,0,1,0,1,0,2,1,0,2],[0,0,1,2,1,0,1,2,2,0,1,0,1,0,0,1,2,0,1,0,1,0,0,0,0,0,1,1,0,2],[0,2,0,1,2,0,1,2,0,2,1,1,0,2,1,0,0,0,0,1,0,0,1,0,0,0,1,0,2,0],[2,2,0,2,2,0,0,0,0,0,2,0,1,0,0,1,0,0,0,0,2,1,0,2,2,0,0,0,1,0],[1,0,0,2,0,1,0,2,1,0,0,0,0,0,0,0,2,2,2,2,0,0,2,0,2,2,0,2,1,0],[2,2,2,1,2,2,2,0,0,0,0,1,0,0,0,0,0,1,0,0,0,2,1,2,0,0,2,1,1,2],[1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,2,0,0,0,0,1,0,0,0,0,1],[0,2,1,0,0,1,0,1,0,0,2,0,0,0,0,1,0,0,0,1,1,2,2,1,1,0,0,0,1,1],[2,0,0,2,0,0,2,1,0,0,0,1,1,0,0,0,1,1,0,2,2,2,1,0,0,0,0,0,0,1],[1,2,0,2,0,0,2,1,1,1,2,0,0,2,1,0,0,0,1,1,1,0,1,2,2,1,0,0,1,2],[2,2,1,0,0,0,2,0,1,0,2,0,1,2,0,0,0,0,2,0,0,0,1,0,2,0,0,0,0,2],[0,1,0,1,1,2,0,2,0,0,0,0,0,1,2,2,0,0,0,1,0,0,1,2,0,1,2,0,0,1],[0,2,1,0,2,1,0,1,0,1,1,1,1,0,2,2,1,1,1,0,1,0,1,2,1,0,0,0,0,1],[1,0,0,1,0,1,0,2,0,1,0,2,2,0,1,1,2,0,2,0,1,0,1,1,1,0,0,2,0,1],[1,0,2,0,0,2,2,0,2,1,1,2,2,0,0,0,0,2,0,0,0,0,2,0,2,0,2,2,1,1],[1,0,1,1,1,1,0,1,0,0,2,0,0,1,0,0,0,2,2,1,0,2,1,0,1,2,0,1,0,0],[1,0,0,0,0,2,0,1,0,1,2,2,0,2,0,0,2,0,0,0,0,2,0,1,1,1,0,2,0,2],[1,0,1,2,0,0,0,1,2,1,0,0,2,1,0,1,0,0,1,1,0,0,1,2,1,0,1,0,0,1],[2,0,1,0,0,2,0,0,0,0,0,2,0,1,0,2,0,0,0,0,2,1,0,2,0,2,0,0,0,0],[2,1,2,1,2,2,0,2,0,0,1,0,2,0,1,1,1,2,0,0,0,0,1,1,0,0,0,0,2,0],[2,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,2,0,1,0,1,0,1,0,1,0,1,0,2,0],[1,0,1,0,0,0,0,1,0,0,2,1,0,1,0,0,0,1,2,1,0,1,0,0,0,1,2,2,1,0],[2,0,0,0,0,0,0,0,1,0,0,2,0,0,0,1,0,0,1,0,2,1,0,0,1,0,1,0,0,0],[0,0,0,2,0,1,1,0,0,2,2,0,1,2,1,0,2,1,1,0,2,0,1,2,0,0,1,0,0,2],[1,2,0,0,1,1,0,1,1,0,1,0,0,1,2,1,2,2,2,0,1,0,0,0,0,1,0,0,1,2],[0,1,0,1,1,0,2,1,1,0,2,0,0,1,0,1,0,0,2,2,0,0,0,0,1,0,0,2,2,0],[1,2,2,0,0,0,0,2,0,0,0,1,2,2,0,2,2,1,0,1,0,0,0,2,1,0,0,1,0,1],[0,0,2,2,0,0,0,1,0,0,0,2,0,2,0,0,0,2,1,2,0,1,1,1,2,0,1,1,1,0],[1,2,0,2,1,0,0,0,1,2,0,2,0,2,0,0,1,2,0,0,0,0,0,1,0,0,1,0,0,1],[0,1,1,0,1,2,1,0,1,1,0,0,0,0,1,1,0,0,2,1,0,0,0,2,0,0,1,0,0,0],[2,2,1,0,0,0,1,0,0,0,0,2,1,0,0,0,2,0,2,0,1,0,0,1,0,1,2,0,2,1],[2,0,0,2,1,1,2,0,1,2,1,2,0,1,2,1,0,1,1,0,1,0,1,2,1,0,0,1,2,0]];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let m = ledArray[i-1][j];
                            let n = ledArray[i-1][ ( j + 1 ) % 30 ];

                            if ( m === n ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k] + ( ledBasicColor[n][k] - ledBasicColor[m][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED HI4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI4);

                    function ledNumberHI4() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1800;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledLapTimeSplit = 225;
                        let ledBasicColor1 = [ 255 , 0 , 150 ];
                        let ledBasicColor2 = [ [ 240 , 220 , 255 ] , [ 255 , 80 , 200 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 200 ) % ledRepeatTime;

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

                } else if ( key === ']' ) {
                    let startTime = Date.now();

                    /***** 水中照明 GATARI2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberGATARI2);

                    function waterLightNumberGATARI2() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,180,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト HI8 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,60,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);
                        
                        let movingLightAngleFadeTime = 2000;
                        let movingLightColorFadeTime = 1800;


                        movingLightSetInterval[1] = setInterval(movingLightNumberHI8_1);

                        function movingLightNumberHI8_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,200,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI8_2);

                        function movingLightNumberHI8_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTimeSplit / 4;
                            let movingLightBasicColor = [ [ 120 , 0 , 255 ] , [ 0 , 120 , 255 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;
                                let movingLightColor = [];
    
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI8_3);

                        function movingLightNumberHI8_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],21500,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 8000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let maxAngleXY = [ -60 , 80 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i % 2 ) + 2700 ) % movingLightAngleRepeatTime;
                                let angleXY;
                                
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                            
                                movingLightAngleChange(1,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 7500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberHI8_4);

                        function movingLightNumberHI8_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0.2 , 1 ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,120,0,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 19000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHI8_5);

                        function movingLightNumberHI8_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,180,220,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 21500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,24,60,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI8_6);

                        function movingLightNumberHI8_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);

                                let angleXY = [ -10 , 5 , -5 , 5 , -5 ];
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,angleXY[i-1],100,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,255,1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberHI8_7);

                        function movingLightNumberHI8_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 3500 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightNowRotateDeg = movingLightRotateDeg;

                                if ( 1 - i % 2 ) movingLightNowRotateDeg = movingLightRotateDeg * -1 + 60;
                                movingLightTripleRotateChange(1,i,movingLightNowRotateDeg);
                            }
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberHI8_8);

                        function movingLightNumberHI8_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 3500 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightNowRotateDeg = movingLightRotateDeg;

                                if ( i === 1 || i >= 4 ) movingLightNowRotateDeg = movingLightRotateDeg * -1 + 60;
                                movingLightTripleRotateChange(2,i,movingLightNowRotateDeg);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 34000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,60,50,100,100);

                        let movingLightColorFadeTime = 2500;
                        let movingLightAngleFadeTime = 2500;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHI8_9);

                        function movingLightNumberHI8_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                                clearInterval(movingLightSetInterval[7]);
                                clearInterval(movingLightSetInterval[9]);
                            }

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberHI8_10);

                        function movingLightNumberHI8_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let maxOpacity = [ 0.4 , 1 ];                            
                            let movingLightColorOpacity;
                            let movingLightColorJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,100,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberHI8_11);

                        function movingLightNumberHI8_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 18000 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg+72*(i-1));
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 47500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[12] = setInterval(movingLightNumberHI8_12);

                        function movingLightNumberHI8_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,220,220,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }

                        }


                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 53000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[13] = setInterval(movingLightNumberHI8_13);

                        function movingLightNumberHI8_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let maxOpacity = [ 0.2 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 3 + i ) ) % movingLightColorRepeatTime;
    
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 60000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;
                        let movingLightAngleFadeTime = 300;

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI8_3);

                        function movingLightNumberHI8_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],1500,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 8000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let maxAngleXY = [ -60 , 80 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i % 2 ) + 2700 ) % movingLightAngleRepeatTime;
                                let angleXY;
                                
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                            
                                movingLightAngleChange(1,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberHI8_14);

                        function movingLightNumberHI8_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }

                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 61500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,24,60,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI8_6);

                        function movingLightNumberHI8_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);

                                let angleXY = [ -10 , 5 , -5 , 5 , -5 ];
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,angleXY[i-1],100,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,255,1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberHI8_7);

                        function movingLightNumberHI8_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 3500 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightNowRotateDeg = movingLightRotateDeg;

                                if ( 1 - i % 2 ) movingLightNowRotateDeg = movingLightRotateDeg * -1 + 60;
                                movingLightTripleRotateChange(1,i,movingLightNowRotateDeg);
                            }
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberHI8_8);

                        function movingLightNumberHI8_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 3500 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightNowRotateDeg = movingLightRotateDeg;

                                if ( i === 1 || i >= 4 ) movingLightNowRotateDeg = movingLightRotateDeg * -1 + 60;
                                movingLightTripleRotateChange(2,i,movingLightNowRotateDeg);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 99500;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,60,50,100,100);

                        let movingLightColorFadeTime = 2500;
                        let movingLightAngleFadeTime = 2500;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHI8_9);

                        function movingLightNumberHI8_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                                clearInterval(movingLightSetInterval[7]);
                                clearInterval(movingLightSetInterval[9]);
                            }

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberHI8_10);

                        function movingLightNumberHI8_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let maxOpacity = [ 0.4 , 1 ];                            
                            let movingLightColorOpacity;
                            let movingLightColorJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,100,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberHI8_11);

                        function movingLightNumberHI8_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 18000 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg+72*(i-1));
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 113000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[12] = setInterval(movingLightNumberHI8_12);

                        function movingLightNumberHI8_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,220,220,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }

                        }


                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 118500;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[13] = setInterval(movingLightNumberHI8_13);

                        function movingLightNumberHI8_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let maxOpacity = [ 0.2 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 3 + i ) ) % movingLightColorRepeatTime;
    
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 125500;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;
                        let movingLightAngleFadeTime = 300;

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI8_3);

                        function movingLightNumberHI8_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],1500,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 8000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let maxAngleXY = [ -60 , 80 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i % 2 ) + 2700 ) % movingLightAngleRepeatTime;
                                let angleXY;
                                
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                            
                                movingLightAngleChange(1,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberHI8_14);

                        function movingLightNumberHI8_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }

                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 127000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,24,60,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI8_6);

                        function movingLightNumberHI8_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);

                                let angleXY = [ -10 , 5 , -5 , 5 , -5 ];
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,angleXY[i-1],100,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,255,1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberHI8_7);

                        function movingLightNumberHI8_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 3500 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightNowRotateDeg = movingLightRotateDeg;

                                if ( 1 - i % 2 ) movingLightNowRotateDeg = movingLightRotateDeg * -1 + 60;
                                movingLightTripleRotateChange(1,i,movingLightNowRotateDeg);
                            }
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberHI8_8);

                        function movingLightNumberHI8_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 3500 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightNowRotateDeg = movingLightRotateDeg;

                                if ( i === 1 || i >= 4 ) movingLightNowRotateDeg = movingLightRotateDeg * -1 + 60;
                                movingLightTripleRotateChange(2,i,movingLightNowRotateDeg);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BG *****/
                    waterCurtain("BG");

                    /***** LED HI5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI5);
        
                    function ledNumberHI5() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);        
                        let ledRepeatTime = 1600;

                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 150 ] , [ 255 , 255 , 255 ] , [ 180 , 80 , 255 ] ];
                        let ledLapTimeSplit = ledRepeatTime / 10;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j;

                            if ( i <= 11 ) j = i - 1;
                            else j = 21 - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        ledRepeatTime /= 2;
                        ledRepeatTimeSplit = ledRepeatTime / 2;
                        ledBasicColor = [ [ 255 , 180 , 240 ] , [ 255 , 255 , 255 ] ];
                        ledLapTimeSplit = ledRepeatTime / 16;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j;

                            if ( i <= 24 ) j = i - 1;
                            else j = 48 - i;

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

                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AA *****/
                    waterCurtain("AA");
    
                    /***** LED 62 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber62);
    
                    function ledNumber62() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
    
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
    
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
    
                    }
    
                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");
    
                    /***** LED SE8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSE8);
    
                    function ledNumberSE8() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
    
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,220,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
    
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,220,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
    
                    }
    
                } else if ( key === '_' || code === 226 ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED 51 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber51);

                    function ledNumber51() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 31000;
                        let ledChangeTime = 3500;
                        let ledRepeatTimeSplit = [ 7000 , 16500 , 21500 , 31000 ];
                        let ledBasicColor = [ [ 255 , 240 , 250 ] , [ 255 , 240 , 250 ] , [ 240 , 0 , 255 ] , [ 255 , 240 , 250 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledColor = [];
                        
                        let ledJudgeTime = nowTime[1] % ledRepeatTime;

                        for ( var j = 0 ; j < 4 ; j++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit[j] - ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k];
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit[j] ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ ( j + 1 ) % 4 ][k] - ledBasicColor[j][k] ) / ledChangeTime *  ( ledJudgeTime - ledRepeatTimeSplit[j] + ledChangeTime );
                                break;
                            }
                        }
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        ledBasicColor = [ [ 255 , 200 , 240 ] , [ 255 , 100 , 240 ] , [ 255 , 0 , 100 ] , [ 255 , 200 , 240 ] ];

                        for ( var j = 0 ; j < 4 ; j++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit[j] - ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k];
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit[j] ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ ( j + 1 ) % 4 ][k] - ledBasicColor[j][k] ) / ledChangeTime *  ( ledJudgeTime - ledRepeatTimeSplit[j] + ledChangeTime );
                                break;
                            }
                        }
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

                }
            } else if ( mainNowPage === 2 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED HI6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI6);
        
                    function ledNumberHI6() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);        
                        let ledRepeatTime = 1600;

                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 150 ] , [ 255 , 255 , 255 ] , [ 180 , 80 , 255 ] ];
                        let ledLapTimeSplit = ledRepeatTime / 10;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j;

                            if ( i <= 11 ) j = i - 1;
                            else j = 21 - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        ledRepeatTime /= 2;
                        ledRepeatTimeSplit = ledRepeatTime / 2;
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 150 ] ];
                        ledLapTimeSplit = ledRepeatTime / 12;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j;

                            if ( i <= 24 ) j = i - 1;
                            else j = 48 - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト HI9 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,80,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,50,100);
                        
                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI9_1);

                        function movingLightNumberHI9_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,0,0);
                                }
                                movingLightAngleChange(1,1,0,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-45,-80,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    movingLightAngleChange(2,i,0,-10,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1200;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI9_2);

                        function movingLightNumberHI9_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 700;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * i ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI9_3);

                        function movingLightNumberHI9_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 700;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let j;

                                if ( i <= 3 ) j = 1;
                                else j = 0;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberHI9_4);

                        function movingLightNumberHI9_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 2100 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);

                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberHI9_5);

                        function movingLightNumberHI9_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 5000 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 7000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;
                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI9_6);

                        function movingLightNumberHI9_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberHI9_7);

                        function movingLightNumberHI9_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;
                            let angleXYCenter = 0;
                            let angleZCenter = -75;
                            let angleXYRadius = 70;
                            let angleZRadius = 15;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( ( (-1) ** i ) * 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 1 ) ) ) % 360 / 180 * Math.PI * -1;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberHI9_8);

                        function movingLightNumberHI9_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1500 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i, ( (-1) ** i ) * movingLightRotateDeg );
                            
                        }

                        movingLightColorFadeTime = 600;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHI9_9);

                        function movingLightNumberHI9_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTimeSplit / movingLightOutsideNumber;
                            let movingLightColorLapTimeSplitArray = [ 3 , 4 , 2 , 0 , 1 ];
                            let movingLightBasicColor = [ [ 255 , 100 , 0 ] , [ 255 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * movingLightColorLapTimeSplitArray[i-1] ) % movingLightColorRepeatTime;
                                let movingLightColor = [];
    
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 20000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberHI9_10);

                        function movingLightNumberHI9_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);                            
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberHI9_11);

                        function movingLightNumberHI9_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],13000,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 40000;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let angleXY= -60 + 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,-90,movingLightAngleFadeTime,nowTime[0]);
                        }

                        movingLightSetInterval[12] = setInterval(movingLightNumberHI9_12);

                        function movingLightNumberHI9_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 22000 * nowTime[0] - 86.4;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 33000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[13] = setInterval(movingLightNumberHI9_13);

                        function movingLightNumberHI9_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,100,0,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,220,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 44500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[14] = setInterval(movingLightNumberHI9_14);

                        function movingLightNumberHI9_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,80,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 59700;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[15] = setInterval(movingLightNumberHI9_15);

                        function movingLightNumberHI9_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 60000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,80,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,13,40,100);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[16] = setInterval(movingLightNumberHI9_16);

                        function movingLightNumberHI9_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let angleXYCenter = 0;
                            let angleZCenter = -75;
                            let angleXYRadius = 70;
                            let angleZRadius = 15;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( ( (-1) ** i ) * 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit ) ) % 360 / 180 * Math.PI * -1;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }                        

                        movingLightSetInterval[17] = setInterval(movingLightNumberHI9_17);

                        function movingLightNumberHI9_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleLapDegSplit = [ 90 , 10 , 240 , 30 , 110 ];
                            let angleXYRadius = 180;
                            let angleXYCenter = 0;
                            let angleZRadius = 35;
                            let angleZCenter = 55;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + 6000 ) % movingLightAngleRepeatTime;
                                if ( i % 2 ) movingLightAngleJudgeTime = movingLightAngleRepeatTime - movingLightAngleJudgeTime;

                                let movingLightAngleDeg =  ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightAngleLapDegSplit[i-1] ) % 360;
                                let movingLightAngleRad = movingLightAngleDeg / 180 * Math.PI;

                                let angleZ = angleZCenter + angleZRadius * Math.cos(movingLightAngleRad);

                                movingLightAngleDeg = ( 180 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightAngleLapDegSplit[i-1] / 2 ) % 180;
                                movingLightAngleRad = movingLightAngleDeg / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.sin(movingLightAngleRad);
                                if ( angleXY > 90 ) angleXY = 180 - angleXY;
                                if ( movingLightAngleDeg > 90 ) angleXY *= -1;
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 61500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI9_18);

                        function movingLightNumberHI9_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }
                            
                        }

                        movingLightSetInterval[19] = setInterval(movingLightNumberHI9_19);

                        function movingLightNumberHI9_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i, ( (-1) ** i ) * movingLightRotateDeg );
                        }

                        movingLightSetInterval[20] = setInterval(movingLightNumberHI9_20);

                        function movingLightNumberHI9_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * nowTime[0];
                            let movingLightRotatePN = [ 1 , -1 , -1 , 1 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i, movingLightRotatePN[i-1] * movingLightRotateDeg );
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 89500;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[21] = setInterval(movingLightNumberHI9_21);

                        function movingLightNumberHI9_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 1000 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,100,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[21]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 101000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        clearInterval(movingLightSetInterval[17]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[22] = setInterval(movingLightNumberHI9_22);

                        function movingLightNumberHI9_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,100,0);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                                clearInterval(movingLightSetInterval[20]);
                                clearInterval(movingLightSetInterval[22]);
                            }

                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberHI9_11);

                        function movingLightNumberHI9_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],15000,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 40000;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let angleXY= -60 + 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,-90,movingLightAngleFadeTime,nowTime[0]);
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 116000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,50,100);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[23] = setInterval(movingLightNumberHI9_23);

                        function movingLightNumberHI9_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,240,100,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,150,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[23]);
                            }
                            
                        }

                        movingLightSetInterval[12] = setInterval(movingLightNumberHI9_12);

                        function movingLightNumberHI9_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 22000 * nowTime[0] - 86.4;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);

                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 128000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[24] = setInterval(movingLightNumberHI9_24);

                        function movingLightNumberHI9_24() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[24],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,255,1,200,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[24]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 134500;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 7500;

                        movingLightSetInterval[25] = setInterval(movingLightNumberHI9_25);

                        function movingLightNumberHI9_25() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[25],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,240,100,1,200,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[25]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 142200;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[15] = setInterval(movingLightNumberHI9_15);

                        function movingLightNumberHI9_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }

                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 142500;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,80,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,13,40,100);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[16] = setInterval(movingLightNumberHI9_16);

                        function movingLightNumberHI9_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let angleXYCenter = 0;
                            let angleZCenter = -75;
                            let angleXYRadius = 70;
                            let angleZRadius = 15;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( ( (-1) ** i ) * 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit ) ) % 360 / 180 * Math.PI * -1;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }                        

                        movingLightSetInterval[17] = setInterval(movingLightNumberHI9_17);

                        function movingLightNumberHI9_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleLapDegSplit = [ 90 , 10 , 240 , 30 , 110 ];
                            let angleXYRadius = 180;
                            let angleXYCenter = 0;
                            let angleZRadius = 35;
                            let angleZCenter = 55;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + 6000 ) % movingLightAngleRepeatTime;
                                if ( i % 2 ) movingLightAngleJudgeTime = movingLightAngleRepeatTime - movingLightAngleJudgeTime;

                                let movingLightAngleDeg =  ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightAngleLapDegSplit[i-1] ) % 360;
                                let movingLightAngleRad = movingLightAngleDeg / 180 * Math.PI;

                                let angleZ = angleZCenter + angleZRadius * Math.cos(movingLightAngleRad);

                                movingLightAngleDeg = ( 180 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightAngleLapDegSplit[i-1] / 2 ) % 180;
                                movingLightAngleRad = movingLightAngleDeg / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.sin(movingLightAngleRad);
                                if ( angleXY > 90 ) angleXY = 180 - angleXY;
                                if ( movingLightAngleDeg > 90 ) angleXY *= -1;
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 144000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI9_18);

                        function movingLightNumberHI9_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }
                            
                        }

                        movingLightSetInterval[19] = setInterval(movingLightNumberHI9_19);

                        function movingLightNumberHI9_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i, ( (-1) ** i ) * movingLightRotateDeg );
                        }

                        movingLightSetInterval[20] = setInterval(movingLightNumberHI9_20);

                        function movingLightNumberHI9_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * nowTime[0];
                            let movingLightRotatePN = [ 1 , -1 , -1 , 1 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i, movingLightRotatePN[i-1] * movingLightRotateDeg );
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 172500;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[21] = setInterval(movingLightNumberHI9_21);

                        function movingLightNumberHI9_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 1000 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,100,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[21]);
                            }

                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 186000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[26] = setInterval(movingLightNumberHI9_26);

                        function movingLightNumberHI9_26() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[26],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,500,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                                clearInterval(movingLightSetInterval[20]);
                                clearInterval(movingLightSetInterval[26]);
                            }

                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 186800;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        clearInterval(movingLightSetInterval[17]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,3,80,55,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[27] = setInterval(movingLightNumberHI9_27);

                        function movingLightNumberHI9_27() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[27],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-45,-80,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[27]);
                            }

                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 191500;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[28] = setInterval(movingLightNumberHI9_28);

                        function movingLightNumberHI9_28() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[28],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,180,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[28]);
                            }

                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 201000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[29] = setInterval(movingLightNumberHI9_29);

                        function movingLightNumberHI9_29() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[29],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,100,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[29]);
                            }

                        }                        

                        movingLightSetInterval[30] = setInterval(movingLightNumberHI9_30);

                        function movingLightNumberHI9_30() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[30],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 25000 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i, movingLightRotateDeg + 30 * ( 4 - i ) );

                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 229000;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[31] = setInterval(movingLightNumberHI9_31);

                        function movingLightNumberHI9_31() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[31],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[31]);
                            }

                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 231000;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[32] = setInterval(movingLightNumberHI9_32);

                        function movingLightNumberHI9_32() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[32],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[32]);
                            }

                        }

                    },movingLightSetTimeoutDelay[23]);

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン I *****/
                    waterCurtain("I");

                    /***** LED 26 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber26);

                    function ledNumber26() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 150 , 0 , 255 ] , [ 255 , 0 , 200 ] , [ 255 , 150 , 0 ] ];
                        
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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED RANBU1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberRANBU1_1);
                        
                        function ledNumberRANBU1_1() {
                            let ledFadeTime = 2200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 3400;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberRANBU1_2);
                        
                        function ledNumberRANBU1_2() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);                        
                            let ledRepeatTime = 1500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 255 , 0 , 240 ] , [ 240 , 200 , 255 ] ];
                            
                            let ledLapTimeSplit = 140;

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
                            
                            ledLapTimeSplit = 120;

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
                        
                    },ledSetTimeoutDelay[2]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED HI7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI7);

                    function ledNumberHI7() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 0 , 240 ] , [ 240 , 200 , 255 ] ];
                        
                        let ledLapTimeSplit = 140;

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
                        
                        ledLapTimeSplit = 120;

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

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED SE7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSE7);

                    function ledNumberSE7() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1800;
                        let ledChangeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 240 , 120 , 255 ] , [ 255 , 0 , 150 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / 40;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED FP1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberFP1);

                    function ledNumberFP1() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AY *****/
                    waterCurtain("AY");

                    /***** LED HI8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI8);

                    function ledNumberHI8() {
                        let ledFadeTime = 2200;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 8;
                        
                        let ledBasicColor1 = [ 255 , 255 , 220 ];
                        let ledBasicColor2 = [ [ 180 , 0 , 255 ] , [ 180 , 220 , 255 ] , [ 255 , 0 , 150 ] , [ 180 , 220 , 255 ] ];
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
                        
                        ledBasicColor1 = [ 255 , 255 , 255 ];
                        ledBasicColor2 = [ [ 255 , 0 , 150 ] , [ 255 , 255 , 80 ] , [ 180 , 0 , 255 ] , [ 255 , 255 , 80 ] ];
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

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BL *****/
                    waterCurtain("BL");

                    /***** LED 91 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber91);

                    function ledNumber91() {
                        let ledFadeTime = 2000;
                        let ledBasicColor = [ [ 80 , 0 , 255 ] , [ 255 , 0 , 120 ] , [ 255 , 240 , 150 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledArray = [ 0 , 1 , 1 , 2 , 0 , 0 , 1 , 1 , 2 , 2 , 0 , 0 , 1 , 2 , 2 , 0 , 0 , 1 , 2 , 2 ];
                        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {

                            ledColorChange(1,i,ledBasicColor[ledArray[i-1]][0],ledBasicColor[ledArray[i-1]][1],ledBasicColor[ledArray[i-1]][2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let l = Math.trunc( ( i - 1 ) / 4 ) % 3;

                            ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BQ *****/
                    waterCurtain("BQ");

                    /***** LED HI9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI9);

                    function ledNumberHI9() {
                        let ledFadeTime = 2200;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledChangeTime = 200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 240 , 200 , 255 ] , [ 255 , 0 , 150 ] ];
                        let ledLapTimeSplit = 240;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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
                        
                        ledBasicColor = [ [ 240 , 200 , 255 ] , [ 250 , 230 , 255 ] ];
                        ledLapTimeSplit = 70;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 69 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber69);

                    function ledNumber69() {
                        let ledFadeTime = 1200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED 69 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber69);

                    function ledNumber69() {
                        let ledFadeTime = 1200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 69 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber69);

                    function ledNumber69() {
                        let ledFadeTime = 1200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,150,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト HI10 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,5,50,100,2);
                        
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHI10_1);

                        function movingLightNumberHI10_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1);
                                movingLightAngleChange(1,1,0,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-45,-80,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,1);
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 3000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;
                        let movingLightAngleFadeTime = 1800;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,80,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,13,40,100);

                        movingLightSetInterval[2] = setInterval(movingLightNumberHI10_2);

                        function movingLightNumberHI10_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);

                                movingLightColorChange(2,3,-1,-1,-1,0,1000,nowTime[0]);
                            } else {
                                movingLightColorChange(2,3,-1,-1,-1,1);
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberHI10_3);

                        function movingLightNumberHI10_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let angleXYCenter = 0;
                            let angleZCenter = -75;
                            let angleXYRadius = 70;
                            let angleZRadius = 15;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( ( (-1) ** i ) * 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit ) ) % 360 / 180 * Math.PI * -1;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberHI10_4);

                        function movingLightNumberHI10_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleLapDegSplit = [ 90 , 10 , 240 , 30 , 110 ];
                            let movingLightAngleFinishTime = [ 30000 , 27400 , 24150 , 26600 , 30500 ];
                            let angleXYRadius = 180;
                            let angleXYCenter = 0;
                            let angleZRadius = 35;
                            let angleZCenter = 55;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                if ( nowTime[1] < movingLightAngleFinishTime[i-1] ) {
                                    let movingLightAngleJudgeTime = ( nowTime[1] + 2500 ) % movingLightAngleRepeatTime;
                                    if ( i % 2 ) movingLightAngleJudgeTime = movingLightAngleRepeatTime - movingLightAngleJudgeTime;

                                    let movingLightAngleDeg =  ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightAngleLapDegSplit[i-1] ) % 360;
                                    let movingLightAngleRad = movingLightAngleDeg / 180 * Math.PI;

                                    let angleZ = angleZCenter + angleZRadius * Math.cos(movingLightAngleRad);

                                    movingLightAngleDeg = ( 180 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightAngleLapDegSplit[i-1] / 2 ) % 180;
                                    movingLightAngleRad = movingLightAngleDeg / 180 * Math.PI;
                                    
                                    let angleXY = angleXYCenter + angleXYRadius * Math.sin(movingLightAngleRad);
                                    if ( angleXY > 90 ) angleXY = 180 - angleXY;
                                    if ( movingLightAngleDeg > 90 ) angleXY *= -1;
                                                                
                                    movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                }
                            }

                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberHI10_5);

                        function movingLightNumberHI10_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * nowTime[0];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i, ( (-1) ** i ) * movingLightRotateDeg );

                        }

                        movingLightSetInterval[6] = setInterval(movingLightNumberHI10_6);

                        function movingLightNumberHI10_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * nowTime[0];
                            let movingLightRotatePN = [ 1 , -1 , -1 , 1 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i, movingLightRotatePN[i-1] * movingLightRotateDeg );
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 28950;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;
                        let movingLightAngleFadeTime = 100;

                        movingLightSetInterval[7] = setInterval(movingLightNumberHI10_7);

                        function movingLightNumberHI10_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 8;
                            let movingLightChangeTime = 100;
                            let movingLightColor = [ [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 255 ] , [ 255 , 255 , 0 ] ];
                            let movingLightJudgeTime = nowTime[1] % movingLightColorRepeatTime;                            
                            let j = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit ) % 8;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightColor[j][0],movingLightColor[j][1],movingLightColor[j][2],1,movingLightChangeTime,nowTime[0]);
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberHI10_8);

                        function movingLightNumberHI10_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 500 ) {
                                movingLightAngleChange(2,3,-5,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 31400;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 100;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHI10_9);

                        function movingLightNumberHI10_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 500 ) {
                                movingLightAngleChange(2,4,5,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 32200;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 100;

                        movingLightSetInterval[10] = setInterval(movingLightNumberHI10_10);

                        function movingLightNumberHI10_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);                            
                            
                            if ( nowTime[0] <= 500 ) {
                                movingLightAngleChange(2,2,5,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 34800;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 100;

                        movingLightSetInterval[11] = setInterval(movingLightNumberHI10_11);

                        function movingLightNumberHI10_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 500 ) {
                                movingLightAngleChange(2,1,-10,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 35300;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 100;

                        movingLightSetInterval[12] = setInterval(movingLightNumberHI10_12);

                        function movingLightNumberHI10_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 500 ) {
                                movingLightAngleChange(2,5,-5,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                                clearInterval(movingLightSetInterval[12]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 42000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[6]);
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        movingLightSetInterval[13] = setInterval(movingLightNumberHI10_13);

                        function movingLightNumberHI10_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 200 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,100,1);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 46000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[14] = setInterval(movingLightNumberHI10_14);

                        function movingLightNumberHI10_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED SE7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSE7);

                    function ledNumberSE7() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1800;
                        let ledChangeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 240 , 120 , 255 ] , [ 255 , 0 , 150 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / 40;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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
    
                    /***** 看板照明 HI1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHI1);
        
                    function logoboardLightNumberHI1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 255 , 150 , 240 , 255 ];
                            else logoboardLightColor = [ 100 ,  180 , 255 , 100 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();
                    
                    /***** 客席照明 *****/
                    audienceLightChange(0.5,2000,startTime);
    
                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** スポットライト *****/
                    spotLightChange(1,3000,startTime);

                } else if ( subCode === 9 ) { //f9
                    let startTime = Date.now();
                    
                    /***** 客席照明 *****/
                    audienceLightChange(1,4000,startTime);
    
                } else if ( subCode === 10 ) { //f10
                    let startTime = Date.now();

                    /***** 看板照明 HI2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHI2);
        
                    function logoboardLightNumberHI2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else logoboardLightColor = [ 255 , 255 , 0 , 100 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト HI1 *****/
                    let parLightSetInterval = setInterval(parLightNumberHI1);

                    function parLightNumberHI1() {
                        let parLightFadeTime = 2200;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 0 , 180 , 255 ];
                            else parLightColor = [ 0 , 255 , 0 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1400;
                        spotLightChange(1,spotFadeTime,startTime + 800);

                        /***** ステージライト *****/
                        let stageFadeTime = 1400;
                        stageLightChange(1,stageFadeTime,startTime + 800);
                    },800);
    
                } else if ( subCode === 11 ) { //f11
                    let startTime = Date.now();

                    /***** 看板照明 defult *****/
                    logoboardLightOFF(1800);

                    /***** パーライト defult *****/
                    let parLightSetInterval = setInterval(parLightNumberDefult);

                    function parLightNumberDefult() {
                        let parLightFadeTime = 1800;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,0,0,nowTime[0],parLightFadeTime,parLightSetInterval);
                    }

                    /***** ステージライト *****/
                    let stageFadeTime = 1400;
                    stageLightChange(0,stageFadeTime,startTime);
    
                } else if ( subCode === 12 ) { //f12
                    let startTime = Date.now();

                    /***** 看板照明 HI3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHI3);
        
                    function logoboardLightNumberHI3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 180 , 0 , 255 , 0 ];
                            else logoboardLightColor = [ 200 , 100 , 255 , 255 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト HI2 *****/
                    let parLightSetInterval = setInterval(parLightNumberHI2);

                    function parLightNumberHI2() {
                        let parLightFadeTime = 2200;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,150,220,255,nowTime[0],parLightFadeTime,parLightSetInterval);
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1400;
                        spotLightChange(1,spotFadeTime,startTime + 800);
                    },800);
    
                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();
    
                    /***** 看板照明 HI4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHI4_1);
        
                    function logoboardLightNumberHI4_1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 5000;
                        let logoboardChangeTime = logoboardRepeatTime / 8;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 2;
                        let logoboardRepeatTimeSplit2 = logoboardChangeTime;
                        let logoboardBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 0 , 220 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit;

                            if ( i <= 12 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( Math.trunc( ( 12 - i ) / 3 ) + 4 );
                            else if ( i <= 27 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( i - 13 ) / 3 );
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( Math.trunc( ( 48 - i ) / 3 ) + 1 );

                            let logoboardJudgeTime = ( nowTime[0] + logoboardLapTimeSplit ) % logoboardRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit * l + logoboardChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) logoboardColor[k] = logoboardBasicColor[l][k] + ( logoboardBasicColor[ ( l + 1 ) % 2 ][k] - logoboardBasicColor[l][k] ) / logoboardChangeTime * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) logoboardColor[k] = logoboardBasicColor[ ( l + 1 ) % 2 ][k];
                                    break;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1);
                        }
                    }

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        let logoboardLightMyNumber2 = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 1800;
                        let logoboardLightSetInterval2 = setInterval(logoboardLightNumberHI4_2);
            
                        function logoboardLightNumberHI4_2() {
                            let nowTime = nowTimeGet(startTime+100,0,logoboardLightUseNumber[0],logoboardLightSetInterval2,logoboardLightMyNumber2);
        
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,150,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval2,0);
                        }
                    },100);
                    
                    /***** パーライト HI3 *****/
                    let parLightSetInterval = setInterval(parLightNumberHI3);

                    function parLightNumberHI3() {
                        let parLightFadeTime = 1800;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,100,200,nowTime[0],parLightFadeTime,parLightSetInterval);
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1300;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);
    
                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** 看板照明 HI3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHI3);
        
                    function logoboardLightNumberHI3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 0 , 240 , 0 ];
                            else logoboardLightColor = [ 255 , 120 , 0 , 200 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト HI2 *****/
                    let parLightSetInterval = setInterval(parLightNumberHI2);

                    function parLightNumberHI2() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 255 , 0 , 120 ];
                            else parLightColor = [ 255 , 100 , 200 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);
                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** 看板照明 SM5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSM5);
        
                    function logoboardLightNumberSM5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 3000;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 2;
                        let logoboardChangeTime = 550;
                        let logoboardBasicColor = [ [ 220 , 0 , 255 , 80 ] , [ 255 , 255 , 255 , 255 ] , [ 255 , 255 , 0 , 100 ] , [ 255 , 120 , 0 , 50 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit;

                            if ( i <= 12 ) logoboardLapTimeSplit = logoboardRepeatTime / 4 * Math.trunc( ( 12 - i ) / 3 );
                            else if ( i <= 24 ) logoboardLapTimeSplit = logoboardRepeatTime / 4 * Math.trunc( ( i - 13 ) / 3 ) + logoboardRepeatTime / 2.2;
                            else if ( i <= 36 ) logoboardLapTimeSplit = logoboardRepeatTime / 4 * Math.trunc( ( 36 - i ) / 3 ) + logoboardRepeatTime / 4 * 3.3;
                            else logoboardLapTimeSplit = logoboardRepeatTime / 4 * Math.trunc( ( 48 - i ) / 3 ) + logoboardRepeatTime / 2.1;

                            let logoboardJudgeTime = ( nowTime[0] + logoboardLapTimeSplit ) % logoboardRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit * l + logoboardChangeTime ) {
                                    for ( var k = 0 ; k < 4 ; k++ ) logoboardColor[k] = logoboardBasicColor[ l * 2 ][k] + ( logoboardBasicColor[ ( l * 2 + 1 ) % 4 ][k] - logoboardBasicColor[ l * 2 ][k] ) / logoboardChangeTime * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( logoboardJudgeTime < logoboardRepeatTimeSplit * l + logoboardChangeTime * 2 ) {
                                    for ( var k = 0 ; k < 4 ; k++ ) logoboardColor[k] = logoboardBasicColor[ ( l * 2 + 1 ) % 4 ][k] + ( logoboardBasicColor[ ( l * 2 + 2 ) % 4 ][k] - logoboardBasicColor[ ( l * 2 + 1 ) % 4 ][k] ) / logoboardChangeTime * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l - logoboardChangeTime ) ;
                                    break;
                                } else if ( logoboardJudgeTime <  logoboardRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 4 ; k++ ) logoboardColor[k] = logoboardBasicColor[ ( l * 2 + 2 ) % 4 ][k];
                                    break;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1);
                        }
                    }

                }
            }
        }
    }
});