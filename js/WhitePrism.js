let WhitePrism_Music = [ [ 0 ] , [ 2 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] ];

jsSetting("WhitePrism",2022,"冬","White Prism","White Prism",1,2,WhitePrism_Music,"https://script.google.com/macros/s/AKfycbwO9FtiDtkHb8dYex0DRO4L_Ko9gEwl9xFtwsUJG_Oq4717FNLWU9nspSnCtHS6FzV6YA/exec",0,0,0,0,0,3200,12,0);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "WhitePrism" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 SS1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS1);

                    function waterLightNumberSS1() {
                        let fadeTime = 2200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,120,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
        
                    /***** ウォーターカーテン N *****/
                    waterCurtain("N");
        
                    /***** LED 14 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[0] = 0;
                    ledSetTimeout[0] = setTimeout( function() {
                        let ledMyNumber0 = ledSetting(ledMyNumber);
                        ledSetInterval[0] = setInterval(ledNumber14_0);
                        
                        function ledNumber14_0() {
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[0],0,ledUseNumber,ledSetInterval[0],ledMyNumber,ledUseChildrenNumber,ledMyNumber0);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],0,0,ledSetInterval);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],0,0,ledSetInterval);

                        }
                        
                    },ledSetTimeoutDelay[0]);

                    ledSetTimeoutDelay[1] = 500;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumber14_1);
                        
                        function ledNumber14_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 17000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumber14_2);
                        
                        function ledNumber14_2() {
                            let ledFadeTime = 0;
                            let ledRepeatTime = 1050;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledBasicColor = [ [ 200 , 0 , 255 ]  , [ 0 , 0 , 255 ] ];

                            nowTime[1] %= 4000;
                            
                            let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit  *l ) ;
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
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit  *l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 73000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumber14_3);
                        
                        function ledNumber14_3() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);

                            if ( nowTime[1] <= 2500 ) {
                                let ledColor = 255 / 2500 * nowTime[1];

                                for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255 - ledColor,ledColor,nowTime[0],ledFadeTime);

                                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255 - ledColor,ledColor,nowTime[0],ledFadeTime);
                            } else if ( nowTime[1] < 4500 ) {

                            } else if ( nowTime[1] <= 5500 ) {
                                let ledColor = 255 / 1000 * ( nowTime[1] - 4500 );

                                for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,ledColor,255 - ledColor);

                                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,ledColor,255 - ledColor);
                            } else if ( nowTime[1] < 6000 ) {
                                
                            } else if ( nowTime[1] <= 11000 ) {
                                let ledColor = 255 / 5000 * ( nowTime[1] - 6000 );

                                for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,ledColor);

                                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,ledColor);
                            }

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 107000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledMyNumber4 = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumber14_4);
                        
                        function ledNumber14_4() {
                            let ledFadeTime = 3000;
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 300;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledMyNumber4);
                            let ledBasicColor = [ [ 230 , 230 , 255 ]  , [ 0 , 220 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;

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
                                let ledColor = [];
                                let j = ledNumberOutside - i;

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
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 140000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledMyNumber5 = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumber14_5);
                        
                        function ledNumber14_5() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledMyNumber5);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 153000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledMyNumber6 = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumber14_6);
                        
                        function ledNumber14_6() {
                            let ledFadeTime = 3000;
                            let ledRepeatTime = 800;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledMyNumber6);
                            let ledBasicColor = [ [ 200 , 0 , 255 ]  , [ 50 , 0 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit  *l ) ;
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
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit  *l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 170640;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledMyNumber7 = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumber14_7);
                        
                        function ledNumber14_7() {
                            let ledFadeTime = 3500;
                            let ledRepeatTime = 3500;
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledMyNumber7);
                            
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 2 ) % ledRepeatTime;

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

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 2 ) % ledRepeatTime;

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
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 180550;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledMyNumber8 = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumber14_8);
                        
                        function ledNumber14_8() {
                            let ledFadeTime = 6000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledMyNumber8);

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

                                ledColorChange(1,i,ledColorRed2,255,255,nowTime[0],ledFadeTime);
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
                                
                                ledColorChange(2,i,ledColorRed2,255,255,nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 194480;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledMyNumber9 = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumber14_9);
                        
                        function ledNumber14_9() {
                            let ledFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledMyNumber9);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
        
                                if ( i % 2 === 1 ) ledColor = [ 255 , 255 , 230 ];
                                else ledColor = [ 255 , 255 , 255 ];
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                            }
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                
                                if ( i % 2 === 1 ) ledColor = [ 255 , 255 , 230 ];
                                else ledColor = [ 255 , 255 , 255 ];
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                            }
                        }
                        
                    },ledSetTimeoutDelay[9]);

                    /***** ムービングライト WP1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberWP1_1);

                        function movingLightNumberWP1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,240,150,0);
                                    movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberWP1_2);

                        function movingLightNumberWP1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 211000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberWP1_3);

                        function movingLightNumberWP1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,4,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);
        
                } else if ( key === 'h' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン AO2 *****/
                    waterCurtain("AO2");

                    /***** LED WP1 *****/
                    let ledActualSetTimeoutDelayTime = 3000;

                    ledActualSetTimeout = setTimeout( function() {
                        let ledMyNumber = ledSetting();
                        let ledSetTimeoutDelay = [];
                        let ledSetInterval = [];

                        ledSetTimeoutDelay[1] = 0;
                        ledSetTimeout[1] = setTimeout( function() {
                            let ledChildrenMyNumber = ledSetting(ledMyNumber);
                            ledSetInterval[1] = setInterval(ledNumberWP1_1);
                            
                            function ledNumberWP1_1() {
                                let ledFadeTime = 800;
                                let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1]+ledActualSetTimeoutDelayTime,ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                                
                                for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
            
                                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
            
                            }
                            
                        },ledSetTimeoutDelay[1]);

                        ledSetTimeoutDelay[2] = 1800;
                        ledSetTimeout[2] = setTimeout( function() {
                            let ledChildrenMyNumber = ledSetting(ledMyNumber);
                            ledSetInterval[2] = setInterval(ledNumberWP1_2);
                            
                            function ledNumberWP1_2() {
                                let ledFadeTime = 2500;
                                let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2]+ledActualSetTimeoutDelayTime,ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                                
                                for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
            
                                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                            }
                            
                        },ledSetTimeoutDelay[2]);

                        ledSetTimeoutDelay[3] = 5000;
                        ledSetTimeout[3] = setTimeout( function() {
                            let ledChildrenMyNumber = ledSetting(ledMyNumber);
                            ledSetInterval[1] = setInterval(ledNumberWP1_1);
                            
                            function ledNumberWP1_1() {
                                let ledFadeTime = 2000;
                                let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3]+ledActualSetTimeoutDelayTime,ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                                
                                for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
            
                                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
            
                            }
                            
                        },ledSetTimeoutDelay[3]);

                    },ledActualSetTimeoutDelayTime);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED WP2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP2);

                    function ledNumberWP2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 2500;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledColorChangeTime = 1500;
                        let ledColorChangeBeforeTime = [ 12500 , 44000 ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];
                        let ledBasicColor1 = [ [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ] , [ [ 50 , 180 , 255 ] , [ 255 , 255 , 255 ] , [ 220 , 200 , 255 ] , [ 255 , 255 , 255 ] ] ];

                        for ( var j = 0 ; j < 2 ; j++ ) {
                            if ( nowTime[0] < ledColorChangeBeforeTime[j] ) {
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledBasicColor1[j][l][k];
                                }
                                break;
                            } else if ( nowTime[0] < ledColorChangeBeforeTime[j] + ledColorChangeTime ) {
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledBasicColor1[j][l][k] + ( ledBasicColor1[ ( j + 1 ) % 2 ][l][k] - ledBasicColor1[j][l][k] ) / ledColorChangeTime * ( nowTime[0] - ledColorChangeBeforeTime[j] );
                                }
                                break;
                            }
                        }
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
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

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BN *****/
                    waterCurtain("BN");

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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("AN");
                    },1500);

                    /***** LED SS1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSS1_1);
                        
                        function ledNumberSS1_1() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 1500;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSS1_2);
                        
                        function ledNumberSS1_2() {
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledBasicColor = [ [ 0 , 100 , 255 ] , [ 200 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j;

                                if ( i >= 7 && i < 17 ) j = 16 - i;
                                else if ( i < 7 ) j = i + 3;
                                else j = i - 17;

                                j = 9 - j;
                                let ledJudgeTime = ( nowTime[0] + Math.cos(Math.PI/10*j) * 600 + ledRepeatTime / 2 ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2]);

                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j;

                                if ( i >= 13 && i < 37 ) j = 36 - i;
                                else if ( i < 13 ) j = i + 11;
                                else j = i - 37;

                                j = 23 - j;
                                let ledJudgeTime = ( nowTime[0] + Math.cos(Math.PI/24*j) * 2000 ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2]);

                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AL *****/
                    waterCurtain("AL");

                    /***** LED WP3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP3);

                    function ledNumberWP3() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 93 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber93);

                    function ledNumber93() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();

                    /***** 水中照明 WP1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberWP1);

                    function waterLightNumberWP1() {
                        let fadeTime = 2200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,180,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }
                    
                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("A");
                    },1000);

                    /***** LED WP4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP4);

                    function ledNumberWP4() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 180 , 0 ] , [ 255 , 100 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

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

                    /***** ムービングライト Night5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight5_1);

                        function movingLightNumberNight5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
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
                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight5_2);

                        function movingLightNumberNight5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'p' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight6_1);

                        function movingLightNumberNight6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,35,movingLightColorFadeTime,nowTime[0]);
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

                    movingLightSetTimeoutDelay[1] = 5010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight6_2);

                        function movingLightNumberNight6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'q' ) {
                    let startTime = Date.now();

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

                } else if ( key === 'r' ) {
                    let startTime = Date.now();

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

                } else if ( key === 's' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight5_1);

                        function movingLightNumberNight5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
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
                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight5_2);

                        function movingLightNumberNight5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AI *****/
                    waterCurtain("AI");

                    /***** LED WP5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP5);

                    function ledNumberWP5() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 5200;
                        let ledRepeatTimeSplit = ledRepeatTime / 5;
                        let ledBasicColor = [ [ 255 , 120 , 0 ] ,  [ 255 , 180 , 0 ] , [ 255 , 220 , 240 ] , [ 255 , 180 , 180 ] , [ 255 , 80 , 0 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = 400;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 260;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト WP2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,1);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 5000;
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberWP2_1);

                        function movingLightNumberWP2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    if ( i <= 4 ) movingLightAngleChange(2,i,0,85,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(2,i,5,85,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 5010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,20,40,100);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberWP2_2);

                        function movingLightNumberWP2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,150,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberWP2_3);

                        function movingLightNumberWP2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightRotateUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 20000 * ( nowTime[0] % 20000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED WP6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP6);

                    function ledNumberWP6() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] ,  [ 255 , 120 , 0 ] , [ 255 , 180 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                        ledRepeatTimeSplit = ledRepeatTime / 6;
                        let ledBasicColor1 = [ 255 , 200 , 0 ];
                        let ledBasicColor2 = [ [ 255 , 100 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 255 ] ];
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / 36;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === 'v' ) {
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

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                    /***** LED WP8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP8);

                    function ledNumberWP8() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 255 , 220 ] , [ 255 , 200 , 220 ] , [ 255 , 180 , 0 ] , [ 255 , 120 , 0 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = 400;

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
                        
                        ledLapTimeSplit = 150;

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

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("A");
                    },1000);

                    /***** LED WP4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP4);

                    function ledNumberWP4() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 180 , 0 ] , [ 255 , 100 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

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

                } else if ( key === 'y' ) {
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

                    /***** 水中照明 WP2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberWP2);

                    function waterLightNumberWP2() {
                        let fadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,180,200,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト WP3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,3);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;
                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberWP3_1);

                        function movingLightNumberWP3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    if ( i <= 4 ) movingLightAngleChange(2,i,0,85,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(2,i,5,85,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'z' ) {
                    let startTime = Date.now();

                    /***** ムービングライト WP4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,2);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100,2);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,16,100,100,1);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberWP4_1);

                        function movingLightNumberWP4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,160,230,255,0);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberWP4_2);

                        function movingLightNumberWP4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 66000;
                            let angleX= 90 + 360 / movingLightAngleRepeatTime * ( nowTime[1] % movingLightAngleRepeatTime );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleX,-90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberWP4_3);

                        function movingLightNumberWP4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberWP4_4);

                        function movingLightNumberWP4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightRotateUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 20000 * ( nowTime[0] % 20000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AL *****/
                    waterCurtain("AL");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AA *****/
                    waterCurtain("AA");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト WP5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,2);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,16,100,100,1);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberWP5_1);

                        function movingLightNumberWP5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,-90,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,160,230,255,-1);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberWP5_2);

                        function movingLightNumberWP5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1600;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0.2 , 1 ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberWP5_3);

                        function movingLightNumberWP5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightRotateUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 20000 * ( nowTime[0] % 20000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BJ *****/
                    waterCurtain("BJ");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === ':' ) {
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

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト WP6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,2);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,3,80,55,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,16,100,100,1);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberWP6_1);

                        function movingLightNumberWP6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberWP6_2);

                        function movingLightNumberWP6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 12000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;
                            let angleXYCenter = 0;
                            let angleZCenter = -60;
                            let angleXYRadius = 70;
                            let angleZRadius = 20;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 2 ) ) ) % 360 / 180 * Math.PI;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberWP6_3);

                        function movingLightNumberWP6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = 250;
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

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberWP6_4);
    
                        function movingLightNumberWP6_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightRotateUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 20000 * ( nowTime[0] % 20000 );
    
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberWP6_5);

                        function movingLightNumberWP6_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }                            
                            
                        }

                        movingLightSetInterval[6] = setInterval(movingLightNumberWP6_6);

                        function movingLightNumberWP6_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightRotateDeg = 360 - 360 / 12000 * ( nowTime[0] % 12000 );
    
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト WP6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[1] = setInterval(movingLightNumberWP6_1);

                        function movingLightNumberWP6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1210;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberWP6_2);

                        function movingLightNumberWP6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }  
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 10000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberWP6_3);

                        function movingLightNumberWP6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }  
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 15000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[4] = setInterval(movingLightNumberWP6_4);

                        function movingLightNumberWP6_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
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
    
                    /***** 看板照明 WP1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberWP1);
        
                    function logoboardLightNumberWP1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 120 , 0 , 100 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 255 , 50 , 0 , 100 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 0 , 0 , 255 ];
                            else logoboardLightColor = [ 255 , 200 , 0 , 150 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** スポットライト *****/
                    let spotFadeTime = 3200;
                    spotLightChange(1,spotFadeTime,startTime);

                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 WP2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberWP2);
        
                    function logoboardLightNumberWP2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 200 , 0 , 150 ];
                            else logoboardLightColor = [ 0 , 0 , 0 , 255 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト defult *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDefult);

                    function parLightNumberDefult() {
                        let parLightFadeTime = 3500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 WP3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberWP3);
        
                    function logoboardLightNumberWP3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,255,120,0,200,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 3000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 WP4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightWP4);
        
                    function logoboardLightWP4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 2500;
                        let logoboardChangeTime = 500;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 2;
                        let logoboardRepeatTimeSplit2 = logoboardRepeatTimeSplit / 4;
                        let logoboardBasicColor = [ [ 255 , 0 ] , [ 255 , 255 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit;

                            if ( i <= 12 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( Math.trunc( ( i - 1 ) / 3 ) + 2 );
                            else if ( i <= 15 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * 2;
                            else if ( i <= 24 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( 2 - Math.trunc( ( i - 16 ) / 3 ) );
                            else if ( i <= 27 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * 7;
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( 9 - Math.trunc( ( i - 28 ) / 3 ) );

                            let logoboardJudgeTime = ( nowTime[0] + logoboardLapTimeSplit ) % logoboardRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit * l + logoboardChangeTime ) {
                                    for ( var k = 0 ; k < 2 ; k++ ) logoboardColor[k] = logoboardBasicColor[l][k] + ( logoboardBasicColor[ ( l + 1 ) % 2 ][k] - logoboardBasicColor[l][k] ) / logoboardChangeTime * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 2 ; k++ ) logoboardColor[k] = logoboardBasicColor[ ( l + 1 ) % 2 ][k];
                                    break;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],-1,-1);
                        }
                    }

                    /***** パーライト MB3 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberMB3);

                    function parLightNumberMB3() {
                        let parLightFadeTime = 800;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,100,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 WP5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberWP5);
        
                    function logoboardLightNumberWP5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,0,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                    }

                } else if ( subCode === 12 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 WP6 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberWP6);
        
                    function logoboardLightNumberWP6() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,255,255,255,255,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }

                    /***** パーライト defult *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDefult);

                    function parLightNumberDefult() {
                        let parLightFadeTime = 3500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 3000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 WP7 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberWP7);
        
                    function logoboardLightNumberWP7() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,120,220,255,255,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }

                    /***** パーライト CM5 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberCM5);

                    function parLightNumberCM5() {
                        let parLightFadeTime = 3500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,180,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 3000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                    /***** 客席照明 *****/
                    let audienceLightFadeTime = 3500;
                    audienceLightChange(1,audienceLightFadeTime,startTime);

                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 WP8 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberWP8);
        
                    function logoboardLightNumberWP8() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 0 , 200 , 255 , 100 ];
                            else logoboardLightColor = [ 150 , 255 , 255 , 255 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                }
            }
        }
    }
});
