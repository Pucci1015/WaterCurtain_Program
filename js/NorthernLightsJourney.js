jsSetting("NorthernLightsJourney","Northern Lights Journey",1,1,1,1,2200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "NorthernLightsJourney" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 WP3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberWP3);

                    function waterLightNumberWP3() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,180,200,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED NLJ1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberNLJ1_1);
                        
                        function ledNumberNLJ1_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 5000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberNLJ1_2);
                        
                        function ledNumberNLJ1_2() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 24000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberNLJ1_3);
                        
                        function ledNumberNLJ1_3() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5200;

                            let ledJudgeTime = nowTime[1] % ledRepeatTime;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 200 , 255 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledColor = [];

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            }

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 150 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 10;
                            let ledLapTimeSplit = ledRepeatTime / 6 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTime / 6 * 5 ) % ledRepeatTime;
        
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
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 34000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberNLJ1_2);
                        
                        function ledNumberNLJ1_2() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 39000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberNLJ1_4);
                        
                        function ledNumberNLJ1_4() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 220, 255 , 255 ] , [ 255 , 255 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 4 / 44;

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
                        
                    },ledSetTimeoutDelay[5]);                    

                    /***** 水中照明 EMAKI2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberEMAKI2);

                    function waterLightNumberEMAKI2() {
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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 85 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber85);

                    function ledNumber85() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 180 , 80 ] , [ 255 , 220 , 180 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 8 / ledNumberInside;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 8 / ledNumberOutside;

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

                    /***** ムービングライト NLJ1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,80,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNLJ1_1);

                        function movingLightNumberNLJ1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,220,150,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNLJ1_2);

                        function movingLightNumberNLJ1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'i' ) {
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

                } else if ( key === 'j' ) {
                    let startTime = Date.now();//140000
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED NLJ2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberNLJ2_1);
                        
                        function ledNumberNLJ2_1() {
                            let ledFadeTime = 2800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,220,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 3800;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberNLJ2_2);
                        
                        function ledNumberNLJ2_2() {
                            let ledFadeTime = 2200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 30000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberNLJ2_3);
                        
                        function ledNumberNLJ2_3() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 10500;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 200 , 255 , 255 ] , [ 255 , 220 , 240 ] ];
                            let ledColor = [];
                            
                            let ledJudgeTime = nowTime[1] % ledRepeatTime;
                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                            ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * 2 ) % ledRepeatTime;
                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 61000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberNLJ2_4);
                        
                        function ledNumberNLJ2_4() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2200;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 50 , 50 , 50 ] , [ 255 , 255 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 3 / 18;

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

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime);

                        }
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 69000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberNLJ2_5);
                        
                        function ledNumberNLJ2_5() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledBasicColor = [ [ 100 , 180 , 255 ] , [ 100 , 100 , 100 ] , [ 255 , 255 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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

                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 180 , 255 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 2;
                            ledLapTimeSplit = ledRepeatTime * 3 / 44;
        
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
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 100500;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberNLJ2_6);
                        
                        function ledNumberNLJ2_6() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1000;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [] ];
                            let ledBasicColor2 = [ [ 0 , 0 , 0 ] , [ 100 , 100 , 100 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;

                            let ledArray = [ 30 , 49 , 1 , 5 , 43 , 25 , 30 , 2 , 34 , 1 , 16 , 33 , 26 , 14 , 47 , 34 , 21 , 3 , 29 , 5 ];
                            let ledArray2 = [ 1 , 0 , 0 , 0 , 0 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 0 , 0 , 0 , 0 , 1 , 0 , 0 , 2 ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
                                let j = ledArray2[i-1]
        
                                if ( j === 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[1][k] = ledBasicColor2[j][k];

                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        }
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledRepeatTime = 1500;
                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 100 , 180 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            ledLapTimeSplit = ledRepeatTime * 3 / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 3 ) % ledRepeatTime;
        
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
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 115000;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberNLJ2_7);
                        
                        function ledNumberNLJ2_7() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 200 , 255 , 240 ] , [ 200 , 255 , 255 ] , [ 255 , 255 , 255 ] ];
                            let ledJudgeTime = nowTime[1] % ledRepeatTime;
                            let ledColor = [];
                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            
                            ledBasicColor = [ [ 200 , 240 , 255 ] , [ 200 , 255 , 240 ] , [ 255 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 2 / 44;

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
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 157500;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberNLJ2_2);
                        
                        function ledNumberNLJ2_2() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 176000;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberNLJ2_8);
                        
                        function ledNumberNLJ2_8() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 100 , 180 , 255 ] , [ 100 , 100 , 100 ] ];
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
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 192000;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberNLJ2_2);
                        
                        function ledNumberNLJ2_2() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[10]);

                    /***** 水中照明 WP3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberWP3);

                    function waterLightNumberWP3() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,180,200,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト NLJ2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNLJ2_1);

                        function movingLightNumberNLJ2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 14000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,100,100,2);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNLJ2_2);

                        function movingLightNumberNLJ2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberNLJ2_3);

                        function movingLightNumberNLJ2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let angleZCenter = -70;
                            let angleZRadius = 40;
                            let movingLightAngleRepeatTime = 18000;
                            let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 4 * 3 ) % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                            movingLightAngleChange(1,1,60,angleZ,movingLightAngleFadeTime,nowTime[0]);

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 59000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberNLJ2_4);

                        function movingLightNumberNLJ2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 83000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberNLJ2_5);

                        function movingLightNumberNLJ2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 85800;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberNLJ2_6);

                        function movingLightNumberNLJ2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let angleZCenter = -30;
                            let angleZRadius = 30;
                            let movingLightAngleRepeatTime = 18000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;

                            for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * i ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
    
                                movingLightAngleChange(1,i,0,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 100500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberNLJ2_7);

                        function movingLightNumberNLJ2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberNLJ2_8);

                        function movingLightNumberNLJ2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 8000 * nowTime[0];

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 115000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,50,100);

                        let movingLightAngleFadeTime = 2200;

                        movingLightSetInterval[9] = setInterval(movingLightNumberNLJ2_9);

                        function movingLightNumberNLJ2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberNLJ2_10);

                        function movingLightNumberNLJ2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 8000 * nowTime[0];

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 156500;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[11] = setInterval(movingLightNumberNLJ2_11);

                        function movingLightNumberNLJ2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);
                    
                    movingLightSetTimeoutDelay[8] = 158300;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,100,100,2);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberNLJ2_12);

                        function movingLightNumberNLJ2_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 159300;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[13] = setInterval(movingLightNumberNLJ2_13);

                        function movingLightNumberNLJ2_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberNLJ2_8);

                        function movingLightNumberNLJ2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 8000 * nowTime[0];

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberNLJ2_14);

                        function movingLightNumberNLJ2_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let angleXYCenter = 80;
                            let angleXYRadius = 70;
                            let angleZCenter = -70;
                            let angleZRadius = 20;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                            movingLightAngleChange(1,1,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                        }

                        movingLightSetInterval[15] = setInterval(movingLightNumberNLJ2_15);

                        function movingLightNumberNLJ2_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let angleXYCenter = -10;
                            let angleXYRadius = 70;
                            let angleZCenter = -30;
                            let angleZRadius = 30;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;

                            for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i - 2 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                movingLightAngleRad = ( 180 - 180 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
    
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 192000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[14]);
                        clearInterval(movingLightSetInterval[15]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[16] = setInterval(movingLightNumberNLJ2_16);

                        function movingLightNumberNLJ2_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let angleXYCenter = 80;
                            let angleXYRadius = 70;
                            let angleZCenter = -70;
                            let angleZRadius = 20;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                            movingLightAngleChange(1,1,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                        }

                        movingLightSetInterval[17] = setInterval(movingLightNumberNLJ2_17);

                        function movingLightNumberNLJ2_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let angleXYCenter = -10;
                            let angleXYRadius = 70;
                            let angleZCenter = 0;
                            let angleZRadius = -30;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;

                            for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i - 2 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                movingLightAngleRad = ( 180 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
    
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 209000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[11] = setInterval(movingLightNumberNLJ2_11);

                        function movingLightNumberNLJ2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                } else if ( key === 'k' ) {
                    /***** ウォーターカーテン AX *****/
                    waterCurtain("AX");

                } else if ( key === 'l' ) {
                    /***** ウォーターカーテン BC *****/
                    waterCurtain("BC");

                } else if ( key === 'm' ) {
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                } else if ( key === 'n' ) {
                    /***** ウォーターカーテン AZ *****/
                    waterCurtain("AZ");

                } else if ( key === 'o' ) {
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                } else if ( key === 'p' ) {
                    /***** ウォーターカーテン BK *****/
                    waterCurtain("BK");

                } else if ( key === 'q' ) {
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED NLJ3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[0] = 0;
                    ledSetTimeout[0] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[0] = setInterval(ledNumberNLJ3_0);
                        
                        function ledNumberNLJ3_0() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[0],ledFadeTime,ledUseNumber,ledSetInterval[0],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[0]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[0]);
        
                        }
                        
                    },ledSetTimeoutDelay[0]);

                    ledSetTimeoutDelay[1] = 1500;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberNLJ3_1);
                        
                        function ledNumberNLJ3_1() {
                            let ledFadeTime = 3500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 10000;

                            let ledBasicColor = [ [ 0 , 255 , 150 ] , [ 255 , 255 , 255 ] , [ 0 , 150 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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

                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 150 , 150 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 2;
                            ledLapTimeSplit = ledRepeatTime * 3 / 44;
        
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
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 26500;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberNLJ3_2);
                        
                        function ledNumberNLJ3_2() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,180,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            let ledRepeatTime = 1800;
                            let ledBasicColor = [ [ 0 , 150 , 255 ] , [ 220 , 255 , 150 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTimeSplit * 3 / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
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
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 29500;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberNLJ3_3);
                        
                        function ledNumberNLJ3_3() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 10000;

                            let ledBasicColor = [ [ 0 , 150 , 255 ] , [ 0 , 255 , 150 ] , [ 255 , 255 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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

                           for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime);

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 80000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberNLJ3_4);
                        
                        function ledNumberNLJ3_4() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 180 , 255 , 240 ] , [ 255 , 150 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime / 22;

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

                        }
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 83500;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberNLJ3_5);
                        
                        function ledNumberNLJ3_5() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 10000;

                            let ledBasicColor = [ [ 120 , 255 , 220 ] , [ 200 , 100 , 255 ] , [ 0 , 150 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
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

                        }
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 132000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberNLJ3_6);
                        
                        function ledNumberNLJ3_6() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 10000;
                            
                            let ledBasicColor = [ [ 180 , 220 , 255 ] , [ 180 , 0 , 255 ] , [ 0 , 255 , 180 ] , [ 0 , 0 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledLapTimeSplit = ledRepeatTime / 12;
        
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

                            ledBasicColor = [ [ 0 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 150 , 220 , 255 ] , [ 220 , 150 , 255 ] ];
                            ledLapTimeSplit = ledRepeatTime / 32;
        
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
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 156000;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberNLJ3_7);
                        
                        function ledNumberNLJ3_7() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[7]);

                            let ledRepeatTime = 5000;                            
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledBasicColor1 = [ 180 , 200 , 255 ];
                            let ledBasicColor2 = [ [ 220 , 150 , 255 ] , [ 0 , 150 , 255 ] , [ 0 , 255 , 100 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[7]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 162000;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberNLJ3_8);
                        
                        function ledNumberNLJ3_8() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;                            
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledBasicColor1 = [ 100 , 200 , 255 ];
                            let ledBasicColor2 = [ [ 0 , 150 , 255 ] , [ 0 , 255 , 180 ] , [ 220 , 150 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[8]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 165000;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberNLJ3_9);
                        
                        function ledNumberNLJ3_9() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[9]);

                        }
                        
                    },ledSetTimeoutDelay[9]);

                    /***** 水中照明 NLJ1 *****/
                    waterLightActualSetTimeout = setTimeout( function() {
                        let waterLightMyNumber = waterLightSetting();
                        let waterLightSetInterval = setInterval(waterLightNumberNLJ1);

                        function waterLightNumberNLJ1() {
                            let waterLightFadeTime = 3000;
                            let nowTime = nowTimeGet(startTime+1500,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                            let waterLightRepeatTime = 15000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / 6;
                            let waterLightBasicColor = [ [ 0 , 255 , 150 ] , [ 150 , 0 , 255 ] , [ 50 , 150 , 255 ] , [ 0 , 0 , 255 ] ];
    
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let j = i - 1;
                                let waterLightColor = [];
                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * j + waterLightRepeatTimeSplit / 2 ) % waterLightRepeatTime;
    
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 4 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }
    
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                    },1500);                    
    
                    /***** 看板照明 NLJ7 *****/
                    logoboardLightSetting(2);
                    
                    let logoboardLightDelayTime = [];

                    logoboardLightDelayTime[0] = 26000;
                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(1);
                        let logoboardLightFadeTime = 800;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ7_1);
            
                        function logoboardLightNumberNLJ7_1() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime[0],logoboardLightFadeTime,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                            let logoboardRepeatTime = 3200;
                            let logoboardRepeatTimeSplit = logoboardRepeatTime / 3;
                            let logoboardRepeatTimeSplit2 = logoboardRepeatTime / 16;
                            let logoboardChangeTime = 500;
                            let logoboardBasicColor = [ [ 0 , 0 ] , [ 120 , 0 ] , [ 0 , 200 ] ];
            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let logoboardColor = [];
                                let logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( Math.trunc( ( 48 - i ) / 3 ) + 10 );

                                let logoboardJudgeTime = ( nowTime[1] + logoboardLapTimeSplit ) % logoboardRepeatTime;

                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( logoboardJudgeTime < logoboardRepeatTimeSplit * l + logoboardChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) logoboardColor[k] = logoboardBasicColor[l][k] + ( logoboardBasicColor[ ( l + 1 ) % 3 ][k] - logoboardBasicColor[l][k] ) / logoboardChangeTime * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) logoboardColor[k] = logoboardBasicColor[ ( l + 1 ) % 3 ][k];
                                        break;
                                    }
                                }
            
                                logoboardLightAnimateChange(i,logoboardColor[0],-1,255,logoboardColor[1],1,logoboardLightFadeTime,nowTime[0]);
                            }
                        }
                    },logoboardLightDelayTime[0]);

                    logoboardLightDelayTime[1] = 30000;
                    logoboardLightSetTimeout[1] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 1200;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ7_2);
            
                        function logoboardLightNumberNLJ7_2() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime[1],0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,-1,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    },logoboardLightDelayTime[1]);

                    /***** ムービングライト NLJ3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNLJ3_1);

                        function movingLightNumberNLJ3_1() {
                            let nowTime = nowTimeGet(startTime,movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                                
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    });

                    movingLightSetTimeoutDelay[1] = 1500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNLJ3_2);

                        function movingLightNumberNLJ3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);                     

                            let movingLightColorRepeatTime = 5500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 0 , 120 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberNLJ3_3);

                        function movingLightNumberNLJ3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 164000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberNLJ3_4);

                        function movingLightNumberNLJ3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 's' ) {
                    /***** ウォーターカーテン AU *****/
                    waterCurtain("AU");

                } else if ( key === 't' ) {
                    /***** ウォーターカーテン BG *****/
                    waterCurtain("BG");

                } else if ( key === 'u' ) {
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                } else if ( key === 'v' ) {
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                } else if ( key === 'w' ) {
                    /***** ウォーターカーテン BO *****/
                    waterCurtain("BO");

                } else if ( key === 'x' ) {
                    /***** ウォーターカーテン AJ *****/
                    waterCurtain("AJ");

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED NLJ4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberNLJ4_1);
                        
                        function ledNumberNLJ4_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 220 , 150 , 255 ] , [ 0 , 150 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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

                            ledBasicColor = [ [ 0 , 255 , 150 ] , [ 0 , 150 , 255 ] , [ 220 , 150 , 255 ] ];
                            ledLapTimeSplit = ledRepeatTime * 2 / 44;
        
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
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 21000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberNLJ4_2);
                        
                        function ledNumberNLJ4_2() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 200 , 0 ] , [ 255 , 150 , 0 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
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

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            let ledBasicColor = [ [ 255 , 100 , 0 ] , [ 255 , 255 , 200 ] , [ 255 , 200 , 150 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 3;
                            ledLapTimeSplit = ledRepeatTime * 2 / 44;
        
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
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 41000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberNLJ4_3);
                        
                        function ledNumberNLJ4_3() {
                            let ledFadeTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledBasicColor = [ [ 200 , 220 , 255 ] , [ 255 , 150 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 3 / 18;
        
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

                            let ledBasicColor1 = [ 0 , 255 , 150 ];
                            let ledBasicColor2 = [ [ 180 , 0 , 255 ] , [ 0 , 150 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 63000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberNLJ4_4);
                        
                        function ledNumberNLJ4_4() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 50 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 150 , 200 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledBasicColor = [ [ 0 , 255 , 150 ] , [ 180 , 0 , 255 ] , [ 255 , 255 , 255 ] ];
                            ledLapTimeSplit = ledRepeatTime * 2 / 44;
        
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
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 82000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberNLJ4_5);
                        
                        function ledNumberNLJ4_5() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 120 , 255 ] , [ 100 , 255 , 150 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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
                            
                            ledBasicColor = [ [ 200 , 100 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 150 ] ];
                            ledLapTimeSplit = ledRepeatTime / 32;
        
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
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 93500;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberNLJ4_6);
                        
                        function ledNumberNLJ4_6() {
                            let ledFadeTime = 100;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledChangeTime = 100;
                            let ledBasicColor = [ [ 255 , 150 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] ];
                            let ledJudgeTime = nowTime[1] % ledRepeatTime;
                            let ledColor = [];

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
        
                            ledBasicColor = [ [ 100 , 240 , 255 ] , [ 255 , 255 , 255 ] ];
                            let ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];
                            ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 95500;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberNLJ4_5);
                        
                        function ledNumberNLJ4_5() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 120 , 255 ] , [ 100 , 255 , 150 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledBasicColor = [ [ 200 , 100 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 150 ] ];
                            ledLapTimeSplit = ledRepeatTime / 32;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 104000;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberNLJ4_7);
                        
                        function ledNumberNLJ4_7() {
                            let ledFadeTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 0 , 120 , 255 ] , [ 80 , 240 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[7]);
                            }

                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 80 , 240 , 255 ] ];
                            ledLapTimeSplit = ledRepeatTime * 5 / 40;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[7]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 108500;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberNLJ4_3);
                        
                        function ledNumberNLJ4_3() {
                            let ledFadeTime = 5000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledBasicColor = [ [ 200 , 220 , 255 ] , [ 255 , 150 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 3 / 18;
        
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

                            let ledBasicColor1 = [ 0 , 255 , 150 ];
                            let ledBasicColor2 = [ [ 180 , 0 , 255 ] , [ 0 , 150 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 142000;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberNLJ4_5);
                        
                        function ledNumberNLJ4_5() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 120 , 255 ] , [ 100 , 255 , 150 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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
                            
                            ledBasicColor = [ [ 200 , 100 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 150 ] ];
                            ledLapTimeSplit = ledRepeatTime / 32;
        
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
                        
                    },ledSetTimeoutDelay[10]);

                    ledSetTimeoutDelay[11] = 153500;
                    ledSetTimeout[11] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberNLJ4_6);
                        
                        function ledNumberNLJ4_6() {
                            let ledFadeTime = 100;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[11],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledChangeTime = 100;
                            let ledBasicColor = [ [ 255 , 150 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] ];
                            let ledJudgeTime = nowTime[1] % ledRepeatTime;
                            let ledColor = [];

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                    break;
                                }
                            }
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
        
                            ledBasicColor = [ [ 100 , 240 , 255 ] , [ 255 , 255 , 255 ] ];
                            let ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];
                            ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[11]);

                    ledSetTimeoutDelay[12] = 155500;
                    ledSetTimeout[12] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberNLJ4_5);
                        
                        function ledNumberNLJ4_5() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[12],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 120 , 255 ] , [ 100 , 255 , 150 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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
                            
                            ledBasicColor = [ [ 200 , 100 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 150 ] ];
                            ledLapTimeSplit = ledRepeatTime / 32;
        
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
                        
                    },ledSetTimeoutDelay[12]);

                    ledSetTimeoutDelay[13] = 163000;
                    ledSetTimeout[13] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberNLJ4_8);
                        
                        function ledNumberNLJ4_8() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[13],2000,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 200 , 100, 255 ] , [ 0 , 255 , 0 ] , [ 100 , 220 , 255 ] , [ 0 , 120 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledLapTimeSplit = ledRepeatTime / 12;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 120 , 255 , 255 ] , [ 220 , 200 , 255 ] , [ 200 , 255 , 0 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 6;
                            ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }                            

                        }
                        
                    },ledSetTimeoutDelay[13]);

                    ledSetTimeoutDelay[14] = 184000;
                    ledSetTimeout[14] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberNLJ4_9);
                        
                        function ledNumberNLJ4_9() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[14],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 100 , 240 , 255 ] ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let j = i % 2;
        
                                ledColorChange(1,i,ledBasicColor[j][0],ledBasicColor[j][1],ledBasicColor[j][2],nowTime[0],ledFadeTime);
                            }

                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 5;
                            ledBasicColor = [ [ 180 , 0 , 255 ] , [ 0 , 180 , 255 ] , [ 0 , 120 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTime / 36;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[14]);

                    ledSetTimeoutDelay[15] = 206000;
                    ledSetTimeout[15] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[10] = setInterval(ledNumberNLJ4_10);
                        
                        function ledNumberNLJ4_10() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[15],ledFadeTime,ledUseNumber,ledSetInterval[10],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[10]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[10]);

                        }
                        
                    },ledSetTimeoutDelay[15]);

                    /***** 水中照明 NLJ2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberNLJ2);

                    function waterLightNumberNLJ2() {
                        let waterLightFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 3300;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                        let waterLightBasicColor = [ [ 150 , 0 , 255 ] , [ 0 , 120 , 255 ]];

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let j = i - 1;
                            let waterLightColor = [];
                            let waterLightJudgeTime = ( nowTime[1] + 1320 * j ) % waterLightRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }

                    /***** ムービングライト NLJ4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNLJ4_1);

                        function movingLightNumberNLJ4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,100,0,0);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,100,0,0);
                                    movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberNLJ4_2);

                        function movingLightNumberNLJ4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;
                            let angleXYCenter = 40;
                            let angleZCenter = -75;
                            let angleXYRadius = 70;
                            let angleZRadius = 25;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit * i ) ) % 360 / 180 * Math.PI * -1;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberNLJ4_3);

                        function movingLightNumberNLJ4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 84000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 2800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberNLJ4_4);

                        function movingLightNumberNLJ4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,220,100,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberNLJ4_5);

                        function movingLightNumberNLJ4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightImgNumber = [ 4 , 21 ];
                            let movingLightImgRepeatTime = 1000;
                            let movingLightImgRepeatTimeSplit = movingLightImgRepeatTime / 2;
                            let j = Math.trunc( nowTime[0] / movingLightImgRepeatTimeSplit ) % 2;
                            let movingLightRotateDeg = -360 / 6000 * ( nowTime[0] % 6000 );

                            if ( j === 1 ) movingLightRotateDeg += 90;

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                movingLightPictureChange(2,i,movingLightImgNumber[j],50);
                                movingLightRotateChange(2,i,movingLightRotateDeg);
                            }
                            
                        }

                        movingLightSetInterval[6] = setInterval(movingLightNumberNLJ4_6);

                        function movingLightNumberNLJ4_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;
                            let angleXYRadius = 90;
                            let angleXYCenter = 0;
                            let angleZRadius = 30;
                            let angleZCenter = 50;
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleRad =  ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( 5 - i ) ) ) % 360 / 180 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 104000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 3800;
                        let movingLightColorFadeTime = 3800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberNLJ4_7);

                        function movingLightNumberNLJ4_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,100,0,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightSizeChange(i,100,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 144000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 2800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberNLJ4_4);

                        function movingLightNumberNLJ4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,220,100,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberNLJ4_5);

                        function movingLightNumberNLJ4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightImgNumber = [ 4 , 21 ];
                            let movingLightImgRepeatTime = 1000;
                            let movingLightImgRepeatTimeSplit = movingLightImgRepeatTime / 2;
                            let j = Math.trunc( nowTime[0] / movingLightImgRepeatTimeSplit ) % 2;
                            let movingLightRotateDeg = -360 / 6000 * ( nowTime[0] % 6000 );

                            if ( j === 1 ) movingLightRotateDeg += 90;

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                movingLightPictureChange(2,i,movingLightImgNumber[j],50);
                                movingLightRotateChange(2,i,movingLightRotateDeg);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberNLJ4_8);

                        function movingLightNumberNLJ4_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;
                            let angleXYRadius = 90;
                            let angleXYCenter = 0;
                            let angleZRadius = 30;
                            let angleZCenter = 50;
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleRad =  ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( 7 - i ) ) ) % 360 / 180 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 164000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[9] = setInterval(movingLightNumberNLJ4_9);

                        function movingLightNumberNLJ4_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightMaxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( i + 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberNLJ4_10);

                        function movingLightNumberNLJ4_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightMaxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * i ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 186500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberNLJ4_4);

                        function movingLightNumberNLJ4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberNLJ4_5);

                        function movingLightNumberNLJ4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightImgNumber = [ 4 , 21 ];
                            let movingLightImgRepeatTime = 1000;
                            let movingLightImgRepeatTimeSplit = movingLightImgRepeatTime / 2;
                            let j = Math.trunc( nowTime[0] / movingLightImgRepeatTimeSplit ) % 2;
                            let movingLightRotateDeg = -360 / 6000 * ( nowTime[0] % 6000 );

                            if ( j === 1 ) movingLightRotateDeg += 90;

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                movingLightPictureChange(2,i,movingLightImgNumber[j],50);
                                movingLightRotateChange(2,i,movingLightRotateDeg);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 206000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberNLJ4_11);

                        function movingLightNumberNLJ4_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);
                    
                    movingLightSetTimeoutDelay[8] = 211500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[6]);

                    },movingLightSetTimeoutDelay[8]);

                } else if ( key === 'z' ) {
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                } else if ( key === '@' ) {
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                } else if ( key === '[' ) {
                    /***** ウォーターカーテン BL *****/
                    waterCurtain("BL");

                } else if ( key === ';' ) {
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

                } else if ( key === ':' ) {
                    /***** ウォーターカーテン BJ *****/
                    waterCurtain("BJ");

                } else if ( key === ']' ) {
                    /***** ウォーターカーテン AL *****/
                    waterCurtain("AL");

                } else if ( key === ',' ) {
                    let startTime = Date.now();

                    /***** 水中照明 WP3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberWP3);

                    function waterLightNumberWP3() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,180,200,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト NLJ5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNLJ5_1);

                        function movingLightNumberNLJ5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,-30,30,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,-70,60,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNLJ5_2);

                        function movingLightNumberNLJ5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 1300;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1400;

                        movingLightSetInterval[3] = setInterval(movingLightNumberNLJ5_3);

                        function movingLightNumberNLJ5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === '/' ) {
                    let startTime = Date.now();

                    /***** ムービングライト demo *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[9] = 0;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberNLJ2_7);

                        function movingLightNumberNLJ2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                        movingLightSetInterval[13] = setInterval(movingLightNumberNLJ2_13);

                        function movingLightNumberNLJ2_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 8000 * nowTime[0];

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberNLJ2_14);

                        function movingLightNumberNLJ2_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let angleXYCenter = 80;
                            let angleXYRadius = 70;
                            let angleZCenter = -70;
                            let angleZRadius = 20;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                            movingLightAngleChange(1,1,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                        }

                        movingLightSetInterval[15] = setInterval(movingLightNumberNLJ2_15);

                        function movingLightNumberNLJ2_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let angleXYCenter = -10;
                            let angleXYRadius = 70;
                            let angleZCenter = -20;
                            let angleZRadius = 20;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;

                            for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i - 2 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                movingLightAngleRad = ( 180 - 180 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
    
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                } else if ( key === '_' || code === 226 ) {
                    let startTime = Date.now();

                    /***** LED demo *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[4] = 0;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberNLJ4_4);
                        
                        function ledNumberNLJ4_4() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;

                            let ledBasicColor = [ [ 50 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 150 , 200 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledBasicColor = [ [ 0 , 255 , 150 ] , [ 180 , 0 , 255 ] , [ 255 , 255 , 255 ] ];
                            ledLapTimeSplit = ledRepeatTime * 2 / 44;
        
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
                        
                    },ledSetTimeoutDelay[4]);

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) {
                    let startTime = Date.now();
    
                    /***** 看板照明 NLJ1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ1);
        
                    function logoboardLightNumberNLJ1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 0 , 0 , 255];
                            else if ( j <= 12 ) logoboardLightColor = [ 180 , 255 , 255 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 50 , 255 , 150 ];
                            else logoboardLightColor = [ 0 , 0 , 0 , 255];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                } else if ( subCode === 7 ) {
                    let startTime = Date.now();
    
                    /***** 看板照明 NLJ2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ2);
        
                    function logoboardLightNumberNLJ2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i - 1;
                            else j = logoboardLightNumber - i;

                            switch ( Math.trunc( j / 6 % 2 ) ) {
                                case 0:
                                    logoboardLightColor = [ 255 , 220 , 150 , 255 ];
                                    break;
                                case 1:
                                    logoboardLightColor = [ 0 , 50 , 255 , 100 ];
                                    break;
                            }
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト NLJ1 *****/
                    let parLightSetInterval = setInterval(parLightNumberNLJ1);

                    function parLightNumberNLJ1() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,200,150,nowTime[0],parLightFadeTime,parLightSetInterval);
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.8,spotFadeTime,startTime + 500);
                    },500);
    
                } else if ( subCode === 8 ) {
                    let startTime = Date.now();
    
                    /***** 看板照明 NLJ3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ3);
        
                    function logoboardLightNumberNLJ3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 0 , 50 , 255 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 50 , 255 , 100 , 0 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 100 , 50 , 0 , 255 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 0 , 0 , 255 ];
                            else logoboardLightColor = [ 200 , 255 , 80 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト defult *****/
                    let parLightSetInterval = setInterval(parLightNumberDefult);

                    function parLightNumberDefult() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightSetInterval);
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.8,spotFadeTime,startTime + 500);

                        /***** ステージライト *****/
                        let stageFadeTime = 1000;
                        stageLightChange(1,stageFadeTime,startTime + 500);
                    },500);
    
                } else if ( subCode === 9 ) {
                    let startTime = Date.now();

                    /***** パーライト NLJ2 *****/
                    let parLightSetInterval = setInterval(parLightNumberNLJ2);

                    function parLightNumberNLJ2() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 0 , 0 , 255 ];
                            else parLightColor = [ 255 , 255 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.8,spotFadeTime,startTime + 500);
                    },500);
    
                } else if ( subCode === 10 ) {
                    let startTime = Date.now();

                    /***** 看板照明 NLJ4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ4);
        
                    function logoboardLightNumberNLJ4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 150 , 100 , 255 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 100 , 255 , 150 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 100 , 255 , 0 ];
                            else logoboardLightColor = [ 50 , 255 , 100 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                        }
                    }

                    /***** パーライト NLJ3 *****/
                    let parLightSetInterval = setInterval(parLightNumberNLJ3);

                    function parLightNumberNLJ3() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 0 , 0 , 255 ];
                            else parLightColor = [ 100 , 0 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);
    
                } else if ( subCode === 11 ) {
                    let startTime = Date.now();
    
                    /***** 看板照明 NLJ5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ5);
        
                    function logoboardLightNumberNLJ5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 150 , 255 , 255 ];
                            else if ( j <= 6 ) logoboardLightColor = [ 255 , 150 , 0 , 200 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 255 , 255 , 0 , 200 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 150 , 255 , 255 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 150 , 100 , 255 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 255 , 200 , 200 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 255 , 0 , 255 ];
                            else logoboardLightColor = [ 0 , 100 , 255 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト NLJ4 *****/
                    let parLightSetInterval = setInterval(parLightNumberNLJ4);

                    function parLightNumberNLJ4() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,0,nowTime[0],parLightFadeTime,parLightSetInterval);
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(0.8,spotFadeTime,startTime + 300);

                        /***** ステージライト *****/
                        let stageFadeTime = 700;
                        stageLightChange(1,stageFadeTime,startTime + 300);
                    },300);
    
                } else if ( subCode === 12 ) {
                    let startTime = Date.now();
    
                    /***** 看板照明 NLJ6 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ6);
        
                    function logoboardLightNumberNLJ6() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i - 1;
                            else j = logoboardLightNumber - i;

                            switch ( Math.trunc( j / 6 % 2 ) ) {
                                case 0:
                                    logoboardLightColor = [ 255 , 255 , 255 , 255 ];
                                    break;
                                case 1:
                                    logoboardLightColor = [ 50 , 150 , 255 , 0 ];
                                    break;
                            }
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト NLJ1 *****/
                    let parLightSetInterval = setInterval(parLightNumberNLJ1);

                    function parLightNumberNLJ1() {
                        let parLightFadeTime = 2000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,180,255,nowTime[0],parLightFadeTime,parLightSetInterval);
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1500;
                        spotLightChange(0.8,spotFadeTime,startTime + 500);
                    },500);
    
                }
            }
        } else if ( dnNowSelect === 1 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 BC1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBC1);

                    function waterLightNumberBC1() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,50,150,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
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
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED 39 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber39);

                    function ledNumber39() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 20;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 240 , 255 ] , [ 240 , 255 , 255 ] , [ 255 , 255 , 240 ] ];                    
                        let ledJudgeTime = Math.trunc( ( nowTime[1] % ledRepeatTime ) / ledRepeatTimeSplit );
                        
                        let ledArray = [ [ 0 , 0 , 0 , 0 , 1 , 1 , 0 , 2 , 1 , 2 , 1 , 0 , 2 , 1 , 1 , 2 , 1 , 2 , 1 , 0 ] , [ 2 , 1 , 0 , 0 , 1 , 2 , 2 , 1 , 1 , 0 , 1 , 0 , 0 , 0 , 2 , 2 , 0 , 2 , 0 , 2 ] , [ 1 , 2 , 1 , 0 , 2 , 0 , 1 , 2 , 1 , 2 , 0 , 2 , 2 , 2 , 0 , 2 , 1 , 2 , 2 , 0 ] , [ 0 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 1 , 1 , 2 , 0 , 0 , 0 , 1 , 2 , 0 , 0 , 0 ] , [ 1 , 0 , 0 , 0 , 2 , 1 , 0 , 2 , 1 , 0 , 0 , 2 , 0 , 0 , 0 , 0 , 1 , 1 , 2 , 1 ] , [ 2 , 2 , 2 , 0 , 1 , 2 , 2 , 1 , 2 , 1 , 1 , 1 , 1 , 2 , 0 , 1 , 1 , 0 , 2 , 0 ] , [ 2 , 2 , 2 , 1 , 0 , 1 , 0 , 0 , 2 , 1 , 0 , 1 , 1 , 2 , 0 , 2 , 2 , 2 , 1 , 0 ] , [ 2 , 0 , 2 , 0 , 2 , 0 , 0 , 2 , 2 , 0 , 2 , 1 , 2 , 2 , 1 , 2 , 1 , 2 , 0 , 2 ] , [ 2 , 1 , 2 , 0 , 0 , 0 , 1 , 2 , 0 , 2 , 0 , 0 , 1 , 0 , 1 , 2 , 0 , 1 , 0 , 0 ] , [ 0 , 1 , 2 , 1 , 0 , 2 , 2 , 1 , 0 , 0 , 2 , 2 , 2 , 2 , 2 , 1 , 0 , 2 , 0 , 1 ] , [ 2 , 0 , 2 , 2 , 1 , 0 , 0 , 1 , 1 , 1 , 1 , 0 , 2 , 1 , 2 , 0 , 1 , 0 , 2 , 2 ] , [ 2 , 0 , 2 , 2 , 2 , 2 , 1 , 2 , 1 , 2 , 0 , 0 , 1 , 1 , 1 , 0 , 0 , 1 , 2 , 1 ] , [ 2 , 1 , 1 , 2 , 0 , 2 , 1 , 2 , 1 , 1 , 0 , 2 , 2 , 2 , 1 , 0 , 0 , 2 , 0 , 0 ] , [ 0 , 0 , 2 , 0 , 2 , 1 , 1 , 2 , 2 , 0 , 0 , 0 , 0 , 2 , 2 , 1 , 2 , 0 , 2 , 1 ] , [ 1 , 2 , 2 , 1 , 0 , 0 , 1 , 2 , 0 , 1 , 1 , 2 , 2 , 0 , 2 , 1 , 1 , 2 , 2 , 0 ] , [ 2 , 1 , 2 , 2 , 2 , 2 , 0 , 2 , 2 , 2 , 2 , 0 , 1 , 0 , 0 , 0 , 2 , 0 , 2 , 2 ] , [ 1 , 2 , 2 , 0 , 1 , 0 , 2 , 0 , 0 , 2 , 0 , 0 , 1 , 0 , 2 , 1 , 1 , 0 , 0 , 1 ] , [ 0 , 2 , 0 , 2 , 1 , 2 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 2 , 1 , 2 , 2 , 1 , 1 ] , [ 0 , 2 , 1 , 1 , 1 , 2 , 1 , 0 , 2 , 0 , 1 , 1 , 2 , 1 , 1 , 2 , 1 , 0 , 2 , 2 ] , [ 1 , 1 , 2 , 1 , 2 , 2 , 1 , 0 , 1 , 2 , 0 , 2 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            
                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1][ledJudgeTime]][k];

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledArray = [ [ 0 , 0 , 2 , 2 , 0 , 1 , 2 , 2 , 0 , 0 , 1 , 1 , 0 , 2 , 2 , 1 , 0 , 2 , 0 , 1 ] , [ 1 , 1 , 2 , 1 , 1 , 0 , 0 , 0 , 1 , 2 , 2 , 1 , 0 , 0 , 2 , 0 , 2 , 0 , 0 , 2 ] , [ 0 , 1 , 0 , 1 , 0 , 0 , 2 , 1 , 1 , 0 , 0 , 1 , 0 , 0 , 1 , 1 , 0 , 2 , 1 , 2 ] , [ 2 , 0 , 1 , 1 , 0 , 2 , 1 , 1 , 1 , 2 , 2 , 2 , 0 , 2 , 0 , 1 , 1 , 2 , 2 , 2 ] , [ 0 , 2 , 0 , 2 , 1 , 0 , 0 , 0 , 1 , 1 , 2 , 2 , 2 , 1 , 1 , 1 , 0 , 1 , 0 , 1 ] , [ 2 , 2 , 0 , 2 , 1 , 0 , 2 , 0 , 2 , 2 , 2 , 0 , 0 , 2 , 1 , 0 , 2 , 0 , 1 , 1 ] , [ 0 , 2 , 1 , 0 , 2 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 2 , 1 ] , [ 2 , 2 , 2 , 1 , 0 , 0 , 1 , 1 , 1 , 0 , 2 , 0 , 1 , 2 , 0 , 2 , 0 , 0 , 2 , 0 ] , [ 0 , 2 , 1 , 2 , 0 , 1 , 0 , 2 , 0 , 0 , 0 , 2 , 2 , 0 , 2 , 0 , 0 , 1 , 1 , 0 ] , [ 2 , 1 , 2 , 1 , 1 , 2 , 0 , 2 , 2 , 1 , 2 , 0 , 1 , 1 , 2 , 2 , 0 , 2 , 0 , 1 ] , [ 0 , 2 , 0 , 2 , 0 , 2 , 1 , 1 , 0 , 0 , 2 , 1 , 1 , 0 , 1 , 2 , 0 , 0 , 0 , 2 ] , [ 0 , 2 , 2 , 1 , 0 , 0 , 2 , 0 , 2 , 1 , 0 , 0 , 1 , 1 , 2 , 1 , 0 , 1 , 0 , 1 ] , [ 2 , 0 , 1 , 1 , 1 , 1 , 1 , 2 , 2 , 1 , 1 , 1 , 0 , 0 , 2 , 0 , 2 , 0 , 0 , 1 ] , [ 2 , 1 , 1 , 1 , 2 , 0 , 0 , 1 , 0 , 0 , 0 , 2 , 2 , 1 , 0 , 2 , 0 , 0 , 1 , 1 ] , [ 0 , 1 , 1 , 0 , 0 , 0 , 1 , 2 , 0 , 2 , 2 , 1 , 1 , 0 , 0 , 0 , 1 , 2 , 2 , 0 ] , [ 1 , 2 , 1 , 0 , 2 , 2 , 0 , 0 , 0 , 0 , 0 , 2 , 2 , 1 , 0 , 0 , 0 , 2 , 2 , 2 ] , [ 0 , 2 , 1 , 0 , 0 , 1 , 0 , 2 , 2 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 0 , 2 ] , [ 1 , 0 , 0 , 2 , 2 , 0 , 2 , 0 , 1 , 0 , 2 , 2 , 1 , 2 , 2 , 0 , 1 , 2 , 1 , 2 ] , [ 2 , 2 , 1 , 2 , 2 , 2 , 2 , 2 , 0 , 2 , 2 , 1 , 0 , 2 , 0 , 2 , 0 , 1 , 2 , 2 ] , [ 0 , 2 , 2 , 1 , 1 , 1 , 0 , 1 , 1 , 2 , 2 , 1 , 0 , 1 , 2 , 1 , 0 , 2 , 0 , 1 ] , [ 2 , 0 , 1 , 0 , 0 , 2 , 0 , 1 , 1 , 1 , 2 , 0 , 2 , 0 , 0 , 0 , 2 , 1 , 1 , 2 ] , [ 2 , 0 , 0 , 1 , 2 , 2 , 1 , 1 , 1 , 1 , 0 , 1 , 0 , 2 , 2 , 0 , 2 , 0 , 1 , 1 ] , [ 0 , 1 , 0 , 2 , 2 , 2 , 2 , 1 , 1 , 0 , 0 , 0 , 2 , 1 , 0 , 2 , 1 , 1 , 1 , 0 ] , [ 0 , 1 , 0 , 0 , 2 , 0 , 1 , 2 , 0 , 2 , 1 , 2 , 2 , 0 , 1 , 1 , 1 , 2 , 2 , 1 ] , [ 2 , 1 , 2 , 1 , 0 , 0 , 1 , 2 , 1 , 0 , 1 , 1 , 0 , 2 , 0 , 2 , 2 , 2 , 0 , 1 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[ ( i - 1 ) % 25 ][ledJudgeTime]][k];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'i' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 400;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight3_1);

                        function movingLightNumberNight3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 400;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

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

                } else if ( key === 'j' ) {
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

                    /***** ムービングライト Night4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight4_1);

                        function movingLightNumberNight4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleFadeChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'l' ) {
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

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,100,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,100,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
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

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

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

                } else if ( key === 'm' ) {
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

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight2_2);

                        function movingLightNumberNight2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED 92 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber92);

                    function ledNumber92() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,100,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,100,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
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

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

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

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

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

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight2_2);

                        function movingLightNumberNight2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'p' ) {
                    let startTime = Date.now();

                    /***** 水中照明 BC2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBC2);

                    function waterLightNumberBC2() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,200,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト Night5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight5_1);

                        function movingLightNumberNight5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 800;
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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
        
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 103 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber103);
        
                    function ledNumber103() {
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
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],fadeTime);
                    }
        
                } else if ( key === 'r' ) {
                    let startTime = Date.now();

                    /***** 水中照明 BC3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBC3);

                    function waterLightNumberBC3() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,100,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                } else if ( key === 's' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight6_1);

                        function movingLightNumberNight6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,35,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleFadeChange(2,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 5000;
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

                } else if ( key === 't' ) {
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

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,100,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,100,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
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

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

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

                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED 34 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber34);
        
                    function ledNumber34() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
        
                        let ledRepeatTime = 1600;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 255 , 255 ]  , [ 255 , 220 , 180 ] ];
                        
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

                } else if ( key === 'v' ) {
                    let startTime = Date.now();

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
                    
                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AD *****/
                    waterCurtain("AD");

                    /***** LED 35 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber35);
        
                    function ledNumber35() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
        
                        let ledRepeatTime = 8000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 200 , 0 , 255 ] , [ 0 , 255 , 200 ] ];
                        let ledLapTimeSplit = ledRepeatTime / ledNumberOutside * 2;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j;

                            if ( i >= 7 && i < 17 ) j = 16 - i;
                            else if ( i < 7 ) j = i + 3;
                            else j = i - 17;

                            j += ( ledNumberOutside - ledNumberInside ) / 8;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j;

                            if ( i >= 13 && i < 37 ) j = 36 - i;
                            else if ( i < 13 ) j = i + 11;
                            else j = i - 37;

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

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,100,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,100,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
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

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

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

                } else if ( key === 'x' ) {
                    let startTime = Date.now();

                    /***** 水中照明 BC5 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBC5);

                    function waterLightNumberBC5() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,50,120,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AL *****/
                    waterCurtain("AL");

                    /***** LED 64 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber64);

                    function ledNumber64() {
                        let ledFadeTime = 2000;
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

                    /***** ムービングライト Night1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,100,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,100,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
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

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

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

                } else if ( key === 'z' ) {
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

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight2_2);

                        function movingLightNumberNight2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

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

                } else if ( key === '[' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night7 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,50,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight7_1);

                        function movingLightNumberNight7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    if ( i % 2 === 1 ) movingLightAngleFadeChange(2,i,20,50,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,-20,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 0;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 4500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight7_2);

                        function movingLightNumberNight7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 BC1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBC1);
        
                    function logoboardLightNumberBC1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 200 , 100 , 255 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 50 , 255 , 150 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 0 , 200 , 255 , 150 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 120 , 220 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 50 , 150 , 255 ];
                            else logoboardLightColor = [ 0 , 0 , 100 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** パーライト BC1 *****/
                    let parLightSetInterval = setInterval(parLightNumberBC1);

                    function parLightNumberBC1() {
                        let parLightFadeTime = 3000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ )parLightColorFadeChange(i,80,180,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.5,spotFadeTime,startTime + 2000);
                    },2000);

                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** 看板照明 BC1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBC1);
        
                    function logoboardLightNumberBC1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 200 , 100 , 255 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 50 , 255 , 150 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 0 , 200 , 255 , 150 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 120 , 220 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 50 , 150 , 255 ];
                            else logoboardLightColor = [ 0 , 0 , 100 , 255 ];

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