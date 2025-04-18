let DolphinsCircleDance_Music = [ [ 0 ] , [ 2 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 1 , 0.5 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] ];
let BARA_Music = [ [ 0 ] , [ 2 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] ];

jsSetting("DolphinsCircleDance",2024,"初夏","イルカたちの輪舞","イルカたちの輪舞",2,1,DolphinsCircleDance_Music,"https://script.google.com/macros/s/AKfycbz-Mh7IktiQEYvqP-uQE4jQ8v2NOrddAUcNY4zcwjPFdcKj3LtMRYwv2SWIioI399ab/exec","美しき薔薇物語",2,1,BARA_Music,"https://script.google.com/macros/s/AKfycbzMXDadXF7ukMqvcQuFFqqc4LWObrw925Qv2tYP37pzC6CWA4uFdgN33C68FDoReQR6/exec",2200,8,1);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "DolphinsCircleDance" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 DCD1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDCD1);

                    function waterLightNumberDCD1() {
                        let waterLightFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 60000;
                        let waterLightRepeatTime2 = waterLightRepeatTime / 3 * 5;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime2 / 5;
                        let waterLightRepeatTimeSplit2 = waterLightRepeatTime / 2;
                        let waterLightLapTimeSplit = waterLightRepeatTime2 / waterLightNumber;     
                        let waterLightJudgeTime2 = nowTime[1] % waterLightRepeatTime;

                        let waterLightBasicColor = [ [ 255 , 255 , 150 ] , [ 240 , 220 , 255 ] , [ 0 , 150 , 255 ] , [ 255 , 150 , 50 ] , [ 255 , 200 , 100 ] ];

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let waterLightColor = [];

                            if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit2 ) {
                                let waterLightJudgeTime = ( waterLightRepeatTime2 + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit / 2 - waterLightJudgeTime2 ) % waterLightRepeatTime2;
                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 5 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                            } else {
                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    let waterLightJudgeTime = ( waterLightJudgeTime2 + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit / 2 + waterLightRepeatTime / 3 * 2 ) % waterLightRepeatTime2;
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 5 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }              

                    }

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DCD1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD1);

                    function ledNumberDCD1() {
                        let ledFadeTime = 1200;
                        let ledRepeatTime = 15000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledChangeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] , [ 0 , 0 , 255 ] ];
                        let ledLapTimeSplit = 700;

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
                        
                        ledBasicColor = [ [ 0 , 0 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                        ledLapTimeSplit = 300;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;

                            let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit - ledChangeTime + ledLapTimeSplit * j ) % ledRepeatTime;

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

                    /***** ムービングライト DCD1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDCD1_1);

                        function movingLightNumberDCD1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,100,0);
                                    movingLightAngleChange(2,i,0,-10,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDCD1_2);

                        function movingLightNumberDCD1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'h' ) {
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

                    /***** 水中照明 TL4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberTL4);

                    function waterLightNumberTL4() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト DCD2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,149000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDCD2_1);

                        function movingLightNumberDCD2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,-10,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,60,100);

                        movingLightSetInterval[2] = setInterval(movingLightNumberDCD2_2);

                        function movingLightNumberDCD2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 7500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD2_3);

                        function movingLightNumberDCD2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 33000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDCD2_4);

                        function movingLightNumberDCD2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,255,220,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 45000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDCD2_5);

                        function movingLightNumberDCD2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 72000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDCD2_6);

                        function movingLightNumberDCD2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 98000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD2_7);

                        function movingLightNumberDCD2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightAngleChange(1,1,140,-30,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleChange(1,i,0,-20,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,100,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 137000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDCD2_5);

                        function movingLightNumberDCD2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 148000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDCD2_6);

                        function movingLightNumberDCD2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AU *****/
                    waterCurtain("AU");

                    /***** LED MIYABI2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI2);

                    function ledNumberMIYABI2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 255 , 0 , 0 ] , [ 255 , 150 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
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
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'j' ) {
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED MIYABI2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI2);

                    function ledNumberMIYABI2() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 255 , 0 , 0 ] , [ 255 , 150 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
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
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
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

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED 85 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber85);

                    function ledNumber85() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 180 , 80 ] , [ 255 , 220 , 180 ] ];
                        
                        ledLapTimeSplit = ledRepeatTime * 8 / ledNumberInside;

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

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED 46 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber46);

                    function ledNumber46() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 50 , 255 ] , [ 0 , 255 , 255 ] ];
                        
                        let ledColor = [];
                        let ledJudgeTime = ( nowTime[1] ) % ledRepeatTime;
                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        ledJudgeTime = ( nowTime[1] + ledRepeatTime / 2 ) % ledRepeatTime;
                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED DCD2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD2);

                    function ledNumberDCD2() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 3100;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 0 , 100 ] , [ 255 , 255 , 220 ] ];
                        
                        let ledLapTimeSplit = 160;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
                            
                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'p' ) {
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

                } else if ( key === 'q' ) {
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

                    /***** ムービングライト DCD3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,150000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,60,100);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDCD3_1);

                        function movingLightNumberDCD3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                
                                movingLightAngleChange(1,1,120,-90,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,135,-90,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,0,-90,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,0,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 4000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDCD3_2);

                        function movingLightNumberDCD3_2() {
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

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightTriplePictureChange(1,i,3,80,53,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,3,40,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD3_3);

                        function movingLightNumberDCD3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,0,0);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,0);
                                    movingLightAngleChange(2,i,90,90,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 25000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDCD3_4);

                        function movingLightNumberDCD3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let startAngleX = [ 120 , 135 , 0 ];
                            let movingLightAngleRepeatTime = 31000;
                            let movingLightAngleDeg = 110 / movingLightAngleRepeatTime;

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let angleX = startAngleX[i-1] - movingLightAngleDeg * nowTime[0];
                                if ( nowTime[0] <= movingLightColorFadeTime ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0])
                                movingLightAngleChange(1,i,angleX,-90);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let angleX = 90 - movingLightAngleDeg * nowTime[0];
                                if ( nowTime[0] <= movingLightColorFadeTime ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0])
                                movingLightAngleChange(2,i,angleX,90);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 55500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDCD3_5);

                        function movingLightNumberDCD3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 56000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightTriplePictureChange(1,i,6,80,53,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDCD3_6);

                        function movingLightNumberDCD3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,-105,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,115,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-140,-80,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightRotateChange(2,i,30);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 57000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD3_7);

                        function movingLightNumberDCD3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 73000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD3_8);

                        function movingLightNumberDCD3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 3;
                            let movingLightMaxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 3 - i ) ) % movingLightColorRepeatTime;
                                let movingLightColorOpacity;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                            movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            movingLightMaxOpacity = [ 0.5 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;
                                let movingLightColorOpacity;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 80000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD3_7);

                        function movingLightNumberDCD3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 97000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[9] = setInterval(movingLightNumberDCD3_9);

                        function movingLightNumberDCD3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 30000 * ( nowTime[0] % 30000 );
                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightTripleRotateChange(1,i, ( (-1) ** ( i - 1 ) ) * movingLightRotateDeg);

                            if ( nowTime[0] <= movingLightColorFadeTime ) for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,180,0,1,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 112500;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberDCD3_10);

                        function movingLightNumberDCD3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 3;
                            let movingLightMaxOpacity = [ 0 , 1 ];


                            if ( nowTime[0] <= movingLightColorFadeTime ) movingLightColorChange(1,2,255,0,255,-1,100,nowTime[0]);

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let j = 3 - i;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;
                                let movingLightColorOpacity;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 143000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 7000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD3_7);

                        function movingLightNumberDCD3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberDCD3_11);

                        function movingLightNumberDCD3_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,-55,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,115,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-160,-90,movingLightAngleFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,-40,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,0,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,40,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,5,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 150000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[12] = setInterval(movingLightNumberDCD3_12);

                        function movingLightNumberDCD3_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= 500 ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DCD3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD3);

                    function ledNumberDCD3() {
                        let ledFadeTime = 200;
                        let ledRepeatTime = 2000;
                        let ledChangeTime = ledFadeTime;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        
                        let ledBasicColor = [ [ 255 , 180 , 80 ] , [ 255 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) % 4 / 2 ) ) % ledRepeatTime;

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
                        
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) % 6 / 3 ) ) % ledRepeatTime;

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
                    
                    /***** ウォーターカーテン AM *****/
                    waterCurtain("AM");

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

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtain("AO");

                    /***** LED SM1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSM1);

                    function ledNumberSM1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 250 , 255 , 220 ] , [ 220 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = 740;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

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

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED DCD3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD3);

                    function ledNumberDCD3() {
                        let ledFadeTime = 200;
                        let ledRepeatTime = 2000;
                        let ledChangeTime = ledFadeTime;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        
                        let ledBasicColor = [ [ 255 , 180 , 80 ] , [ 255 , 255 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) % 4 / 2 ) ) % ledRepeatTime;

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
                        
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) % 6 / 3 ) ) % ledRepeatTime;

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

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                    /***** LED DCD4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD4);

                    function ledNumberDCD4() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 3000;
                        let ledChangeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 220 , 0 ] , [ 50 , 150 , 255 ] ];
                        
                        let ledLapTimeSplit = 740;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

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

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AV *****/
                    waterCurtain("AV");

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

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DCD5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD5);

                    function ledNumberDCD5() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledBasicColor = [ [ 255 , 240 , 200 ] , [ 255 , 150 , 0 ] ];
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
                        
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
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

                    /***** 水中照明 DD2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDD2);

                    function waterLightNumberDD2() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト DD4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDCD4_1);

                        function movingLightNumberDCD4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if (  nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightAngleChange(1,1,-55,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,115,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-160,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,0,0,movingLightAngleFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,-40,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,0,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,40,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,5,90,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDCD4_2);

                        function movingLightNumberDCD4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if (  nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 3000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD4_3);

                        function movingLightNumberDCD4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK1);

                    function ledNumberSK1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 60000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 7;
                        let ledBasicColor = [ [ 255 , 0 , 100 ] , [ 255 , 150 , 180 ] , [ 200 , 0 , 255 ] , [ 50 , 220 , 255 ] , [ 100 , 255 , 255 ] , [ 150 , 255 , 150 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = 2900;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 7 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 7 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 7 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 7 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 SS5 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS5);

                    function waterLightNumberSS5() {
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

                    /***** ムービングライト DCD5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,160000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);
                        
                        let movingLightAngleFadeTime = 3000;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDCD5_1);

                        function movingLightNumberDCD5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberDCD5_2);

                        function movingLightNumberDCD5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD5_3);

                        function movingLightNumberDCD5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);
                    
                    movingLightSetTimeoutDelay[2] = 3000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightTriplePictureChange(1,i,0,80,70,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,80,70,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDCD5_4);

                        function movingLightNumberDCD5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let angleMaxXY = [ [ -30 , 170 ] , [ 110 , -90 ] , [ -70 , 130 ] ];
                            let movingLightAngleRepeatTime = 60000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let angleXY;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 4 ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleXY = angleMaxXY[i-1][l] + ( angleMaxXY[i-1][ ( l + 1 ) % 2 ] - angleMaxXY[i-1][l] ) / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightAngleChange(1,i,angleXY,-80,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberDCD5_5);

                        function movingLightNumberDCD5_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let basicAngleXY = [ 110 , 110 , 110 , 110 , 70 ];
                            let angleXYJudge = [ 1 , -1 , -1 , -1 , 1 ]
                            let movingLightAngleRepeatTime = 15000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j, angleXY, angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 5 * j ) % movingLightAngleRepeatTime;                            
                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleXY = basicAngleXY[i-1] + 10 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleXY = basicAngleXY[i-1] + 10 - 10 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }                        

                                movingLightAngleJudgeTime = ( movingLightAngleJudgeTime + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTime;
                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleZ = 70 + 10 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleZ = 80 - 10 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }

                                angleXY *= angleXYJudge[i-1];

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 6000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDCD5_6);

                        function movingLightNumberDCD5_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 7500 * ( nowTime[0] % 7500 );

                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightTripleRotateChange(1,i, ( (-1) ** ( i - 1 ) ) * movingLightRotateDeg);
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD5_7);

                        function movingLightNumberDCD5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 6000 * ( nowTime[0] % 6000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberDCD5_9);

                        function movingLightNumberDCD5_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 14000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD5_8);

                        function movingLightNumberDCD5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 23000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD5_3);

                        function movingLightNumberDCD5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 24000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[10] = setInterval(movingLightNumberDCD5_10);

                        function movingLightNumberDCD5_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let maxAngleXY = [ -40 , 40 ];
                            let maxAngleZ = [ -20 , 40 ];
                            let movingLightAngleRepeatTime = 8200;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTimeSplit / 2;
                            let angleXY, angleZ;

                            let movingLightJudgeTime = nowTime[1] % movingLightAngleRepeatTimeSplit;                            
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit2 * ( l + 1 ) ) {
                                    angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit2 * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit2 * l ) ;
                                    break;
                                }
                            }

                            movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit2 / 2 * 3 ) % movingLightAngleRepeatTime;
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                    angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 26000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[11] = setInterval(movingLightNumberDCD5_11);

                        function movingLightNumberDCD5_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 34000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD5_8);

                        function movingLightNumberDCD5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

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

                    movingLightSetTimeoutDelay[9] = 46000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberDCD5_12);

                        function movingLightNumberDCD5_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
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
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 48000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD5_3);

                        function movingLightNumberDCD5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 49000;
                    movingLightSetTimeout[11] = setTimeout( function() {                    
                        clearInterval(movingLightSetInterval[8]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[16] = setInterval(movingLightNumberDCD5_16);

                        function movingLightNumberDCD5_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 50000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / 2;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j, angleXY;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;       

                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleXY = -80 + 160 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleXY = 80 - 160 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }     

                                movingLightAngleChange(2,i,angleXY,80,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 79000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[13] = setInterval(movingLightNumberDCD5_13);

                        function movingLightNumberDCD5_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD5_8);

                        function movingLightNumberDCD5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 87000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[14] = setInterval(movingLightNumberDCD5_14);

                        function movingLightNumberDCD5_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 90000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[13] = setInterval(movingLightNumberDCD5_13);

                        function movingLightNumberDCD5_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD5_8);

                        function movingLightNumberDCD5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 99000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[14] = setInterval(movingLightNumberDCD5_14);

                        function movingLightNumberDCD5_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 100000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[10] = setInterval(movingLightNumberDCD5_10);

                        function movingLightNumberDCD5_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let maxAngleXY = [ -40 , 40 ];
                            let maxAngleZ = [ -20 , 40 ];
                            let movingLightAngleRepeatTime = 8200;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTimeSplit / 2;
                            let angleXY, angleZ;

                            let movingLightJudgeTime = nowTime[1] % movingLightAngleRepeatTimeSplit;                            
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit2 * ( l + 1 ) ) {
                                    angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit2 * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit2 * l ) ;
                                    break;
                                }
                            }

                            movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit2 / 2 * 3 ) % movingLightAngleRepeatTime;
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                    angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 107000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberDCD5_12);

                        function movingLightNumberDCD5_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
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
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 123000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        movingLightSetInterval[13] = setInterval(movingLightNumberDCD5_13);

                        function movingLightNumberDCD5_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberDCD5_11);

                        function movingLightNumberDCD5_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 131000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD5_8);

                        function movingLightNumberDCD5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 140000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD5_3);

                        function movingLightNumberDCD5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 140500;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,80,70,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDCD5_5);

                        function movingLightNumberDCD5_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let basicAngleXY = [ 110 , 110 , 110 , 110 , 70 ];
                            let angleXYJudge = [ 1 , -1 , -1 , -1 , 1 ]
                            let movingLightAngleRepeatTime = 15000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j, angleXY, angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 5 * j ) % movingLightAngleRepeatTime;                            
                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleXY = basicAngleXY[i-1] + 10 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleXY = basicAngleXY[i-1] + 10 - 10 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }                        

                                movingLightAngleJudgeTime = ( movingLightAngleJudgeTime + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTime;
                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleZ = 70 + 10 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleZ = 80 - 10 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }

                                angleXY *= angleXYJudge[i-1];

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 142000;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD5_7);

                        function movingLightNumberDCD5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 6000 * ( nowTime[0] % 6000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberDCD5_11);

                        function movingLightNumberDCD5_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 151000;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD5_8);

                        function movingLightNumberDCD5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 200 , 255 ] , [ 150 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [];

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 5 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 159000;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[14] = setInterval(movingLightNumberDCD5_14);

                        function movingLightNumberDCD5_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                                clearInterval(movingLightSetInterval[7]);
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 160000;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[15] = setInterval(movingLightNumberDCD5_15);

                        function movingLightNumberDCD5_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                                    movingLightAngleChange(2,i,0,80,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[25]);

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED 2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber2);

                    function ledNumber2() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 10000;
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

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED DCD6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD6);

                    function ledNumberDCD6() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 30;
                        let ledChangeTime = 150;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 0 ] , [ 150 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 255 , 150 ] , [ 0 , 255 , 255 ] , [ 0 , 150 , 255 ] , [ 0 , 0 , 255 ] , [ 150 , 0 , 255 ] , [ 255 , 0 , 255 ] , [ 255 , 0 , 150 ] ];
                        let ledJudgeTime = Math.trunc( ( nowTime[1] % ledRepeatTime ) / ledRepeatTimeSplit );
                        
                        let ledArray = [[31,11,31,22,49,26,22,35,2,22,47,22,4,37,38,6,0,27,18,50,28,28,46,50,42,18,2,23,42,23],[34,38,27,6,49,11,47,49,12,41,47,44,16,35,11,18,7,11,2,5,25,8,20,6,47,13,40,8,33,18],[45,22,14,21,21,30,1,11,4,36,36,14,30,36,16,34,30,2,40,4,8,1,28,31,27,28,22,37,44,38],[46,22,11,22,14,48,27,27,43,32,40,45,26,10,11,35,11,50,13,50,27,44,20,31,10,7,22,21,37,25],[25,27,26,47,14,50,28,22,4,5,7,15,34,8,22,2,44,1,33,13,29,4,0,44,36,8,23,32,44,15],[33,12,17,22,27,16,35,40,9,23,44,50,20,29,26,47,13,45,45,48,0,2,39,38,27,0,8,42,1,33],[50,41,32,47,39,2,12,45,4,1,15,27,41,7,7,10,43,23,44,21,38,16,45,27,49,2,3,49,2,38],[3,18,48,9,21,49,4,46,18,30,42,20,28,3,19,22,27,23,25,4,3,36,7,46,43,33,12,34,27,39],[7,3,21,17,45,23,48,6,4,11,18,49,46,12,18,23,41,10,33,48,11,21,22,4,21,38,17,24,22,38],[4,11,32,44,50,29,29,29,19,34,48,14,9,1,46,24,46,50,11,22,40,24,15,30,7,38,43,29,30,19],[28,30,14,25,44,25,44,28,35,37,6,47,39,17,16,6,10,17,25,50,26,30,1,39,16,10,5,24,40,50],[14,46,23,30,5,1,13,9,28,19,24,10,33,35,15,10,22,4,0,1,9,1,22,44,47,42,26,6,24,32],[35,11,40,44,49,26,27,1,41,37,11,13,18,36,25,39,25,5,8,21,27,48,21,33,8,37,36,33,10,31],[5,23,33,2,43,25,45,9,24,24,30,32,7,43,30,37,11,2,3,27,21,44,27,32,16,31,7,12,40,28],[36,30,14,13,12,4,24,31,18,19,36,18,28,21,36,12,36,27,10,1,28,15,35,19,43,7,7,3,35,41],[6,40,8,13,23,39,28,26,0,8,49,50,27,1,20,26,20,23,28,37,3,1,45,36,44,17,1,32,26,49],[13,42,13,33,3,23,16,46,32,19,32,43,41,35,25,1,29,11,9,0,8,27,42,17,14,27,40,49,3,6],[18,40,50,43,38,22,37,38,4,43,46,32,7,8,32,49,29,43,19,18,45,43,42,12,37,34,44,19,36,28],[11,28,18,8,24,8,38,25,13,49,21,4,18,38,4,47,46,14,1,21,2,48,38,28,33,38,5,44,3,16],[23,49,26,4,23,1,43,14,17,9,6,41,32,26,44,46,3,12,24,24,26,46,25,48,49,20,7,1,21,48]];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            if ( ledArray[i-1][ledJudgeTime] < 12 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1][ledJudgeTime]][k];
                            } else {
                                let ledArrayNumber = mod( ledJudgeTime - 1 ,30);

                                if ( ledArray[i-1][ledArrayNumber] < 12 && nowTime[1] % ledRepeatTimeSplit < ledChangeTime ) {                                
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1][ledArrayNumber]][k] + ( 255 - ledBasicColor[ledArray[i-1][ledArrayNumber]][k] ) / ledChangeTime * ( nowTime[1] % ledRepeatTimeSplit );
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = 255;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledArray = [[6,45,31,9,35,26,42,18,27,26,20,38,43,18,9,46,12,46,25,31,49,41,0,13,45,28,30,36,35,39],[45,48,21,47,14,21,21,32,22,31,23,35,6,23,44,43,34,16,49,23,16,47,44,5,24,6,40,44,13,10],[23,14,4,18,1,13,0,8,27,1,31,32,13,13,39,48,48,31,48,21,41,39,28,5,2,8,2,8,14,14],[37,46,7,10,28,12,14,50,32,26,33,22,17,1,8,44,38,23,40,41,9,17,30,33,44,11,46,25,8,47],[12,1,46,33,13,9,48,34,2,20,35,6,29,44,15,35,18,30,0,32,15,20,32,19,9,47,33,34,34,23],[44,43,27,3,38,20,37,49,15,49,41,44,18,28,22,31,39,3,48,23,44,42,14,6,45,15,4,4,11,27],[46,43,1,46,22,41,25,16,26,44,25,16,45,25,18,31,2,16,5,3,28,35,22,3,0,45,31,18,46,44],[24,37,11,32,11,35,2,27,21,1,18,36,18,16,37,20,19,45,21,36,22,3,43,44,4,30,12,11,33,35],[30,29,28,15,3,6,32,20,26,19,44,2,39,39,40,22,39,0,43,34,48,17,4,39,39,14,1,40,14,0],[31,5,37,11,10,48,30,0,38,39,12,17,21,13,26,29,25,39,33,0,39,32,41,37,20,1,29,18,13,42],[38,7,37,35,48,47,33,33,25,16,1,17,25,0,37,44,48,8,38,46,16,1,50,3,39,26,24,2,0,10],[22,10,49,36,41,47,42,5,14,34,13,12,34,41,26,49,28,31,35,39,6,32,29,43,23,33,30,32,33,40],[38,7,15,50,14,24,36,22,8,20,48,1,35,25,31,39,0,11,34,13,25,23,44,23,25,25,35,48,2,6],[44,29,24,21,11,2,30,42,2,16,17,45,48,39,37,44,39,8,5,8,2,16,1,46,25,33,0,33,6,20],[1,28,44,0,36,36,32,30,37,24,11,15,32,0,49,38,42,27,47,5,27,36,23,1,3,3,11,33,37,23],[29,46,25,3,7,17,49,3,8,8,0,29,48,43,50,16,43,28,25,41,36,30,6,45,3,28,10,15,9,47],[30,46,15,2,22,2,16,46,36,13,27,31,34,43,36,44,42,6,6,6,3,40,43,30,26,30,38,27,16,41],[15,16,41,12,9,9,33,50,44,17,27,47,2,29,17,2,14,15,13,27,6,33,18,26,32,3,37,40,45,25],[20,47,33,42,25,31,28,24,28,9,31,26,36,6,13,33,47,20,42,49,43,4,0,45,29,43,18,18,9,10],[13,49,11,23,9,26,29,42,47,2,25,24,13,37,8,29,26,14,12,15,39,15,45,40,32,49,50,6,9,23],[18,25,2,8,12,41,7,8,13,6,27,35,11,29,22,46,49,29,10,49,29,21,16,11,31,5,28,2,41,0],[23,23,23,5,12,5,43,27,23,12,22,5,20,13,8,4,10,24,7,46,28,49,21,10,24,20,8,26,1,30],[0,1,39,28,25,12,40,11,31,48,9,8,32,12,6,23,23,26,34,36,42,22,9,5,1,47,30,47,17,23],[17,42,50,42,13,49,18,10,29,1,31,34,50,11,39,13,17,35,20,20,16,18,3,50,34,27,39,49,24,49],[34,0,9,25,8,42,2,31,46,42,13,46,3,39,1,36,44,47,17,42,29,29,50,40,21,14,15,26,37,0],[3,27,14,50,19,32,25,15,11,23,33,7,40,0,47,6,19,20,9,1,27,25,27,4,5,19,9,37,35,39],[36,50,50,32,17,24,6,2,6,25,0,46,5,44,20,38,13,25,37,24,35,31,12,1,14,25,27,25,3,41],[26,36,36,18,32,13,22,31,9,39,17,13,41,38,13,38,39,39,6,9,12,22,15,48,26,0,31,29,49,18],[26,29,29,24,15,42,39,39,28,0,23,4,23,17,44,20,47,44,50,24,5,2,35,48,31,46,43,15,3,40],[6,41,50,49,38,0,12,26,3,19,34,36,23,21,7,4,27,14,7,9,44,7,14,42,42,43,36,43,11,21],[43,16,3,18,47,33,26,4,33,8,6,41,38,15,39,21,36,47,47,37,37,7,10,23,28,37,18,45,26,29],[30,31,48,10,11,18,47,33,30,1,38,43,14,15,42,25,36,48,26,33,38,25,37,42,49,2,12,31,48,18],[45,14,5,15,22,7,31,17,14,16,29,40,4,13,15,31,31,0,42,12,44,49,31,50,17,44,49,13,17,14],[35,7,13,21,12,41,20,37,4,29,37,47,18,39,14,41,10,42,24,39,29,23,9,31,24,12,18,8,29,8],[36,1,39,34,21,41,25,24,31,43,6,2,36,29,15,2,3,40,0,12,32,14,32,19,0,6,31,46,36,37],[45,17,23,7,4,49,6,49,17,35,23,11,38,2,43,31,28,27,4,49,46,29,13,26,43,44,40,6,15,47],[6,7,2,8,37,9,42,14,11,22,11,3,44,24,4,35,24,31,46,39,11,29,34,39,24,38,9,43,27,20],[12,37,47,40,50,29,42,34,48,31,12,47,0,1,30,42,47,37,14,39,27,6,37,46,39,50,43,39,37,9],[50,23,49,2,16,35,46,46,50,42,0,1,26,43,8,3,18,32,46,4,12,14,33,32,27,36,23,38,48,31],[43,11,32,47,5,46,10,7,8,14,15,41,12,2,26,23,44,24,49,5,37,2,16,13,23,35,39,6,11,35],[12,7,33,2,44,21,21,44,25,43,8,45,5,11,26,42,12,22,45,34,30,15,28,24,37,46,1,7,3,14],[18,6,46,40,33,3,50,30,44,47,29,45,20,34,11,0,41,23,2,9,18,4,2,23,10,40,18,47,19,36],[37,37,5,23,4,11,31,13,18,32,12,45,19,29,28,50,15,45,23,15,37,49,36,31,26,48,39,47,34,20],[28,36,3,2,24,36,19,41,3,7,0,15,8,13,36,38,43,34,45,50,13,14,50,39,25,38,21,29,8,44],[9,12,6,11,3,29,17,0,21,17,37,50,1,2,20,27,9,2,46,29,20,48,36,2,44,23,34,37,34,25],[43,10,21,39,28,48,14,13,25,16,17,17,17,15,18,10,14,30,39,32,5,18,6,13,1,26,34,48,6,49],[19,33,49,9,39,5,11,8,18,3,38,49,8,29,28,31,46,37,23,44,11,14,19,18,2,34,0,44,42,8],[48,0,12,39,37,44,8,50,49,43,31,33,30,27,41,34,18,21,47,23,38,6,36,47,3,11,30,35,39,13]];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            if ( ledArray[i-1][ledJudgeTime] < 12 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1][ledJudgeTime]][k];
                            } else {
                                let ledArrayNumber = mod( ledJudgeTime - 1 ,30);

                                if ( ledArray[i-1][ledArrayNumber] < 12 && nowTime[1] % ledRepeatTimeSplit < ledChangeTime ) {                                
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1][ledArrayNumber]][k] + ( 255 - ledBasicColor[ledArray[i-1][ledArrayNumber]][k] ) / ledChangeTime * ( nowTime[1] % ledRepeatTimeSplit );
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = 255;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AE *****/
                    waterCurtain("AE");

                    /***** LED MK2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMK2);

                    function ledNumberMK2() {
                        let ledFadeTime = 1000;
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

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン L *****/
                    waterCurtain("L");

                    /***** LED MIYABI10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI10);

                    function ledNumberMIYABI10() {
                        let ledFadeTime = 1000;
                        let ledParentRepeatTime = 21000;
                        let ledRepeatTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledParentRepeatTimeSplit = ledParentRepeatTime / 3;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledColorChangeTime = 600;
                        let ledColorChangeBeforeTime = ledParentRepeatTimeSplit - ledColorChangeTime;
                        let ledBasicColor = [ [] , [] ];
                        let ledParentBasicColor = [ [ [ 255 , 150 , 220 ] , [ 255 , 255 , 0 ] ] , [ [ 255 , 100 , 200 ] , [ 240 , 150 , 255 ] ] , [ [ 255 , 120 , 0 ] , [ 255 , 250 , 230 ] ] ];

                        let ledParentJudgeTime = nowTime[1] % ledParentRepeatTimeSplit;
                        let j = Math.trunc( nowTime[1] / ledParentRepeatTimeSplit ) % 3;

                        if ( ledParentJudgeTime < ledColorChangeBeforeTime ) {
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledParentBasicColor[j][l][k];
                            }
                        } else {
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledParentBasicColor[j][l][k] + ( ledParentBasicColor[ ( j + 1 ) % 3 ][l][k] - ledParentBasicColor[j][l][k] ) / ledColorChangeTime * ( ledParentJudgeTime - ledColorChangeBeforeTime ) ;
                            }
                        }
                        
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
                        
                        ledLapTimeSplit = ledRepeatTime * 7 / ledNumberOutside;

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

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 108 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber108);

                    function ledNumber108() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 200 , 240 ] , [ 200 , 240 , 255 ] , [ 240 , 255 , 200 ] , [ 255 , 255 , 255 ] ];
                        let ledJudgeTime = 0;
                        
                        let ledArray = [[3,0,3,3,3,3,3,2,2,3,1,3,3,2,3,0,3,3,3,3],[2,2,3,2,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,3],[1,2,3,3,3,3,3,0,3,3,3,2,3,1,1,3,3,1,3,3],[3,3,3,3,3,3,3,3,3,3,3,0,3,1,3,3,3,3,3,0],[2,3,3,0,3,3,3,3,2,3,1,3,3,3,3,3,3,1,3,3],[3,3,3,3,3,3,3,3,1,3,3,3,0,3,1,3,0,3,3,3],[3,3,3,3,2,3,3,3,2,3,2,3,1,0,3,3,1,3,3,3],[3,3,3,3,3,3,3,3,3,3,1,2,3,1,3,3,1,3,3,3],[3,3,3,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,3],[1,3,1,3,3,2,3,3,3,3,3,0,3,0,3,3,3,3,3,1],[3,3,3,3,3,1,3,3,3,1,3,0,0,1,1,0,3,3,3,3],[3,3,3,3,0,3,1,1,3,3,3,3,3,3,3,3,1,3,3,3],[0,3,2,2,3,3,3,1,3,1,1,0,3,1,3,3,0,0,1,3],[3,1,2,0,2,3,3,3,3,1,3,3,3,3,3,3,3,3,3,1],[3,0,0,0,3,3,2,1,3,0,3,3,1,2,1,1,3,1,3,0],[3,3,3,0,0,3,3,1,3,3,1,3,3,3,2,3,3,3,3,3],[3,3,3,3,3,0,3,1,3,3,3,1,3,1,3,1,1,1,0,3],[3,3,3,3,2,3,3,3,2,1,1,3,3,3,3,3,3,3,3,3],[3,3,3,0,3,0,3,3,0,3,3,2,3,2,3,3,3,3,2,3],[1,2,3,3,0,3,0,3,3,3,3,3,0,3,3,3,3,0,3,3]];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            
                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1][ledJudgeTime]][k];

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledArray = [[2,3,1,1,1,1,1,3,3,1,3,3,2,3,1,0,3,3,3,3],[3,3,3,3,3,3,1,0,3,3,3,3,3,3,3,3,2,0,3,3],[3,2,3,3,3,2,3,1,3,3,3,2,2,3,1,3,3,3,3,0],[3,3,2,3,2,3,1,2,3,3,3,3,3,3,3,3,3,3,3,1],[2,3,1,2,3,3,3,3,3,3,3,0,3,3,3,2,3,3,3,3],[3,3,3,1,1,3,1,3,3,0,3,3,3,3,3,3,3,3,3,3],[3,3,3,2,3,3,1,3,1,3,3,3,3,3,3,3,3,3,3,3],[0,3,3,3,3,3,3,0,3,1,3,3,2,3,3,3,3,3,2,3],[3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,1,2,3],[3,3,3,3,1,3,3,3,3,3,3,1,3,2,1,0,3,3,3,0],[3,3,3,0,3,3,3,3,3,3,3,3,3,3,3,0,3,3,0,3],[3,3,3,1,0,0,3,3,3,3,3,1,1,3,3,3,3,2,3,3],[3,0,3,2,1,3,1,3,3,3,3,1,3,3,3,3,3,3,3,1],[3,0,1,3,0,3,3,3,3,3,3,3,2,0,3,3,3,2,3,3],[3,3,2,3,1,1,0,1,0,3,3,3,3,3,0,3,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3,2,2,3,3,3,3,3,3,3],[3,3,3,3,3,2,3,3,3,3,1,3,3,3,3,3,1,0,3,3],[3,3,2,3,3,1,3,3,0,3,3,2,0,3,1,1,3,3,3,3],[1,2,3,3,3,0,3,3,3,3,3,3,2,3,3,3,3,3,3,2],[3,3,2,3,1,3,3,0,3,3,3,3,3,3,3,1,3,0,3,0],[2,2,3,3,3,2,3,2,3,2,3,3,3,3,3,1,3,3,3,3],[3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,3,3,3,1,3],[1,0,3,1,3,1,3,3,3,3,3,3,3,3,3,2,0,3,3,3],[3,3,3,3,3,3,1,3,1,3,3,0,3,0,3,3,2,3,3,3],[0,3,3,3,3,3,2,3,3,3,3,3,0,3,3,1,3,1,0,0]];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[ ( i - 1 ) % 25 ][ledJudgeTime]][k];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 1500;
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
                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DCD7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD7);

                    function ledNumberDCD7() {
                        let ledFadeTime = 1200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 230 , 0 ] , [ 255 , 200 , 0 ] ];
                        
                        let ledArray = [ 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 2 , 1 , 0 , 2  ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                        ledArray = [ 2 , 0 , 1 , 2 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 2 , 1 , 0 , 2 , 0 , 2 , 0 , 1 , 1 , 0 , 1 , 2 , 0 , 1 , 1 , 1 , 2 , 0 , 1 , 1 , 0 , 2 , 1 , 0 , 0 , 2 , 1 , 0 , 2 , 0 , 0 , 2 , 2 , 1 , 1 , 2 , 2 ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 93 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber93);

                    function ledNumber93() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 TL3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberTL3);

                    function waterLightNumberTL3() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト DCD6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,163000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 5000;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDCD6_1);

                        function movingLightNumberDCD6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let basicAngleXY = [ 60 , -30 , -40 ];

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    if ( i <= 3 ) movingLightAngleChange(1,i,basicAngleXY[i-1],-50,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(1,4,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberDCD6_2);

                        function movingLightNumberDCD6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,80,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 6000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 5000;
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD6_3);

                        function movingLightNumberDCD6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                            }
                                                    
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 9000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDCD6_4);

                        function movingLightNumberDCD6_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,200,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);
                    
                    movingLightSetTimeoutDelay[3] = 16000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDCD6_5);

                        function movingLightNumberDCD6_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2300;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 3;

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 3 - i ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[6] = setInterval(movingLightNumberDCD6_6);

                        function movingLightNumberDCD6_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [ 200 , 0 , 255 ];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColor = [ 255 , 0 , 0 ];

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 28000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 6000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD6_7);

                        function movingLightNumberDCD6_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
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
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberDCD6_8);

                        function movingLightNumberDCD6_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
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

                        movingLightSetInterval[0] = setInterval(movingLightNumberDCD6_0);

                        function movingLightNumberDCD6_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 30000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;
                        let movingLightAngleFadeTime = 10000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDCD6_7);

                        function movingLightNumberDCD6_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
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
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberDCD6_9);

                        function movingLightNumberDCD6_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,220,100,-1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,100,220,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberDCD6_10);

                        function movingLightNumberDCD6_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 60000;
                            let movingLightAngleStopTime = 4000;
                            let movingLightAngleRepeatTimeSplitXY = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplitZ = ( movingLightAngleRepeatTimeSplitXY - movingLightAngleStopTime ) / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / 3;
                            let angleMaxXY = [ [ -120 , 210 ] , [ -65 , 165 ] , [ -165 , 165 ] ];
                            let angleMaxZ = [ -80 , -100 ];

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let angleXY, angleZ;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightAngleLapTimeSplit * ( i - 1 ) ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitXY * ( l + 1 ) - movingLightAngleStopTime ) {
                                        angleXY = angleMaxXY[i-1][l] + ( angleMaxXY[i-1][ ( l + 1 ) % 2 ] - angleMaxXY[i-1][l] ) / ( movingLightAngleRepeatTimeSplitXY - movingLightAngleStopTime ) * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitXY * l );

                                        movingLightJudgeTime %= movingLightAngleRepeatTimeSplitXY;
                                        for ( var k = 0 ; k < 2 ; k++ ) {
                                            if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitZ * ( k + 1 ) ) {
                                                angleZ = angleMaxZ[k] + ( angleMaxZ[ ( k + 1 ) % 2 ] - angleMaxZ[k] ) / movingLightAngleRepeatTimeSplitZ * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplitZ * k ) ;
                                                break;
                                            }
                                        }
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplitXY * ( l + 1 ) ) {
                                        angleXY = angleMaxXY[i-1][ ( l + 1 ) % 2 ];
                                        angleZ = angleMaxZ[0];
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 34000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        movingLightSetInterval[11] = setInterval(movingLightNumberDCD6_11);

                        function movingLightNumberDCD6_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 100 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 41000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberDCD6_12);

                        function movingLightNumberDCD6_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,0,150,255,-1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,150,220,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 55000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 3000;

                        movingLightSetInterval[13] = setInterval(movingLightNumberDCD6_13);

                        function movingLightNumberDCD6_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 3;
                            let movingLightBasicColor = [ [ 255 , 100 , 0 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 3 - i ) + movingLightColorRepeatTimeSplit / 2 ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberDCD6_14);

                        function movingLightNumberDCD6_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightMaxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity;

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

                        movingLightSetInterval[15] = setInterval(movingLightNumberDCD6_15);

                        function movingLightNumberDCD6_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 0 , 255 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j + movingLightColorRepeatTimeSplit / 2 ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                        movingLightSetInterval[16] = setInterval(movingLightNumberDCD6_16);

                        function movingLightNumberDCD6_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j, angleXY;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;       

                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleXY = -80 + 160 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleXY = 80 - 160 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }     

                                movingLightAngleChange(2,i,angleXY,100,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 76000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[15]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[17] = setInterval(movingLightNumberDCD6_17);

                        function movingLightNumberDCD6_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 94000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[18] = setInterval(movingLightNumberDCD6_18);

                        function movingLightNumberDCD6_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 101000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightTriplePictureChange(1,i,6,80,53,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,3,100,100);

                        let movingLightAngleFadeTime = 3000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberDCD6_0);

                        function movingLightNumberDCD6_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,255,-1,500,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,-1);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[19] = setInterval(movingLightNumberDCD6_19);

                        function movingLightNumberDCD6_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 9000 * ( nowTime[0] % 9000 );
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                        movingLightSetInterval[20] = setInterval(movingLightNumberDCD6_20);

                        function movingLightNumberDCD6_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let angleXYCenter = 0;
                            let angleZCenter = 80;
                            let angleXYRadius = 40;
                            let angleZRadius = 10;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTimeSplit * ( j + 0.5 ) ) % 360 / 180 * Math.PI;

                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);                            
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 145000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);                    
                        clearInterval(movingLightSetInterval[14]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[21] = setInterval(movingLightNumberDCD6_21);

                        function movingLightNumberDCD6_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                                clearInterval(movingLightSetInterval[21]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 149000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,80,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,30,100);

                        movingLightSetInterval[22] = setInterval(movingLightNumberDCD6_22);

                        function movingLightNumberDCD6_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 7;
                            let movingLightChangeTime = 300;

                            let movingLightColor = [ [ 0 , 0 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] , [ 150 , 0 , 255 ] , [ 255 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] ];
                            let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit ) % movingLightColorRepeatTime;
                            let j = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit );
                            
                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,movingLightColor[j][0],movingLightColor[j][1],movingLightColor[j][2],1,movingLightChangeTime,nowTime[0]);

                            movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;
                            j = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit );
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightColor[j][0],movingLightColor[j][1],movingLightColor[j][2],1,movingLightChangeTime,nowTime[0],2);
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 161000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[22]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[23] = setInterval(movingLightNumberDCD6_23);

                        function movingLightNumberDCD6_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,0,0,0,1,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[23]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 162000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        clearInterval(movingLightSetInterval[20]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[24] = setInterval(movingLightNumberDCD6_24);

                        function movingLightNumberDCD6_24() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[24],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[24]);
                            }                        
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                } else if ( key === '_' || code === 226 ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AR *****/
                    waterCurtain("AR");

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

                    /***** 水中照明 SS3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS3);

                    function waterLightNumberSS3() {
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
        
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED 85 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber85);

                    function ledNumber85() {
                        let ledFadeTime = 1500;
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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AX *****/
                    waterCurtain("AX");

                    /***** LED DCD8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD8);

                    function ledNumberDCD8() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 10000;
                        let ledJudgeTime = nowTime[1] % ledRepeatTime;
                        let ledColor = [];
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 100 , 240 , 255 ] , [ 230 , 240 , 255 ] , [ 0 , 150 , 255 ] ];

                        for ( var j = 0 ; j < 4 ; j++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ ( j + 1 ) % 4 ][k] - ledBasicColor[j][k] ) / ledRepeatTimeSplit *  ( ledJudgeTime - ledRepeatTimeSplit * j );
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 255 ] ];

                        for ( var j = 0 ; j < 4 ; j++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ ( j + 1 ) % 4 ][k] - ledBasicColor[j][k] ) / ledRepeatTimeSplit *  ( ledJudgeTime - ledRepeatTimeSplit * j );
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン J *****/
                    waterCurtain("J");

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

                } else if ( key === 'j' ) {
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                    /***** LED DCD9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDCD9);

                    function ledNumberDCD9() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledChangeTime = 500;
                        let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 255 , 50 , 120 ] , [ 255 , 255 , 255 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = ledRepeatTime / ledNumberInside;

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
                        
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
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

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'l' ) {
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

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSC15 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSC15);

                    function ledNumberDSC15() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledChangeTime = 800;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = 330;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 205;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * ( l + 1 ) + ledChangeTime ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 TL4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberTL4);

                    function waterLightNumberTL4() {
                        let fadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト DCD7 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,4,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDCD7_1);

                        function movingLightNumberDCD7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,100,0);
                                    movingLightAngleChange(2,i,0,-10,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDCD7_2);

                        function movingLightNumberDCD7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 37500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDCD7_3);

                        function movingLightNumberDCD7_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 38500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDCD7_4);

                        function movingLightNumberDCD7_4() {
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

                    /***** 看板照明 DCD1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDCD1);
        
                    function logoboardLightNumberDCD1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];

                            if ( i <= 14 ) logoboardLightColor = [ 0 , 0 , 255 , 0 ];
                            else if ( i <= 34 ) logoboardLightColor = [ 255 , 255 , 255 , 255 ];
                            else logoboardLightColor = [ 255 , 0 , 0 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DCD2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDCD2);
        
                    function logoboardLightNumberDCD2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i - 1;
                            else j = logoboardLightNumber - i;

                            if ( j < 6 ) logoboardLightColor = [ 255 , 0 , 100 , 100 ];
                            else if ( j % 6 < 3 ) logoboardLightColor = [ 255 , 200 , 0 , 100 ];
                            else logoboardLightColor = [ 255 , 200 , 255 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト SM1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberSM1);

                    function parLightNumberSM1() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,255,0,200,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);
                    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DCD3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDCD3);
        
                    function logoboardLightNumberDCD3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;

                            if ( j < 6 ) logoboardLightColor = [ 255 , 240 , 100 , 255 ];
                            else logoboardLightColor = [ 220 , 150 , 255 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト FP1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP1);

                    function parLightNumberFP1() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,255,255,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);
                    
                } else if ( subCode === 9 ) { 
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

                    /***** パーライト DCD1 *****/
                    let parLightMyNumber = parLightSetting(1);
                    let parLightSetInterval = setInterval(parLightNumberDCD1);

                    function parLightNumberDCD1() {
                        let nowTime = nowTimeGet(startTime,0);
                        let parLightRepeatTime = 10000;
                        let parLightRepeatTimeSplit = parLightRepeatTime / 6;

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let j = 0;
                            let parLightColor = [ 0 , 0 , 0 ];

                            switch(i) {
                                case 2:
                                case 3:
                                case 4:
                                case 6:
                                j = parLightRepeatTime / 3;
                                break;
                            }

                            let parLightJudgeTime = ( nowTime[0] + j ) % parLightRepeatTime;

                            for ( l = 0 ; l < 3 ; l++ ) {
                                if ( parLightJudgeTime < parLightRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    parLightColor[ ( 3 - l ) % 3 ] = 255;
                                    parLightColor[ ( 2 - l ) % 3 ] = 255 / parLightRepeatTimeSplit * ( parLightJudgeTime - parLightRepeatTimeSplit * ( l * 2 ) );
                                    break;
                                } else if ( parLightJudgeTime < parLightRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                    parLightColor[ ( 2 - l ) % 3 ] = 255;
                                    parLightColor[ ( 3 - l ) % 3 ] = 255 - 255 / parLightRepeatTimeSplit * ( parLightJudgeTime - parLightRepeatTimeSplit * ( l * 2 + 1 ) );
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
                    
                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DCD5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDCD5);
        
                    function logoboardLightNumberDCD5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 3000;
                        let logoboardChangeTime = 200;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 2;
                        let logoboardBasicColor = [ [ 255 , 150 , 240 ] , [ 120 , 255 , 255 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit;

                            if ( i <= 12 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit / 4 * Math.trunc( ( 30 - i ) / 3 ) % logoboardRepeatTime;//7/3
                            else if ( i <= 30 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit / 6 * Math.trunc( ( i + 2 ) / 3 ) % logoboardRepeatTime;
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit / 4 * Math.trunc( ( 63 - i ) / 3 ) % logoboardRepeatTime;

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
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],255);
                        }
                    }

                    /***** パーライト DCD2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDCD2);

                    function parLightNumberDCD2() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 100 , 220 , 255 ];
                            else parLightColor = [ 255 , 255 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);
                    
                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DCD5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDCD5);
        
                    function logoboardLightNumberDCD5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 150 , 50 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 150 , 255 , 255 ];
                            else logoboardLightColor = [ 255 , 100 , 255 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト FP1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP1);

                    function parLightNumberFP1() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,255,255,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);
                    
                }
            }

        } else if ( dnNowSelect === 1 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 BARA1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBARA1);

                    function waterLightNumberBARA1() {
                        let waterLightFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,100,150,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);

                    }

                } else if ( key === 'g' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BARA1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,13500);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 3 ; i++ ) movingLightPictureChange(1,i,0,35,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,35,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberBARA1_0);

                        function movingLightNumberBARA1_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA1_1);

                        function movingLightNumberBARA1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],1200,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11800;
                            let maxAngleXY = [ [ [ 0 , 90 ] , [ 0 , 90 ] , [ -30 , 60 ] ] , [ [ -30 , 60 ] , [ 0 , 90 ] , [ 0 , 90 ] , [ 0 , 90 ] , [ 0 , 90 ] ] ];
                            let adjustAngleXY = [ [ -45 , -45 , -40 ] , [ -40 , -90 , -90 , -90 , -90 ] ];
                            let negativeAngleXY = [ [ 1 , 1 , 1 ] , [ 1 , 0 , 0 , 0 , 1 ] ];

                            for ( var i = 1 ; i <= 3 ; i++ ) {
                                let angleXY = ( (-1) ** negativeAngleXY[0][i-1] ) * ( adjustAngleXY[0][i-1] + Math.abs( maxAngleXY[0][i-1][0] + ( maxAngleXY[0][i-1][1] - maxAngleXY[0][i-1][0] ) / movingLightAngleRepeatTime * nowTime[0] ) );
                                movingLightAngleChange(1,i,angleXY,-80,movingLightAngleFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let angleXY = ( (-1) ** negativeAngleXY[1][i-1] ) * ( adjustAngleXY[1][i-1] + Math.abs( maxAngleXY[1][i-1][0] + ( maxAngleXY[1][i-1][1] - maxAngleXY[1][i-1][0] ) / movingLightAngleRepeatTime * nowTime[0] ) );
                                movingLightAngleChange(2,i,angleXY,80,movingLightAngleFadeTime,nowTime[0]);
                            }                        
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1200;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA1_2);

                        function movingLightNumberBARA1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 12500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA1_3);

                        function movingLightNumberBARA1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 13000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA1_4);

                        function movingLightNumberBARA1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'h' ) {
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

                    /***** 水中照明 HfW1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHfW1);

                    function waterLightNumberHfW1() {
                        let waterLightFadeTime = 3500;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,200,255,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);

                    }

                    /***** ムービングライト BARA2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,49500);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA2_1);

                        function movingLightNumberBARA2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,0);
                                    movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 15000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA2_2);

                        function movingLightNumberBARA2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 16000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA2_3);

                        function movingLightNumberBARA2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 48000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA2_4);

                        function movingLightNumberBARA2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'i' ) {
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

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED BARA1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA1);

                    function ledNumberBARA1() {
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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BK *****/
                    waterCurtain("BK");

                    /***** LED BARA1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA1);

                    function ledNumberBARA1() {
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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED BARA1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA1);

                    function ledNumberBARA1() {
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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 BARA2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBARA2);

                    function waterLightNumberBARA2() {
                        let waterLightFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,180,230,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);

                    }

                    /***** ムービングライト BARA3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,9500);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100);

                        let movingLightAngleFadeTime = 4000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA3_1);

                        function movingLightNumberBARA3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    if ( i % 2 === 0 ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,0,100,1,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 4010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 4000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA3_2);

                        function movingLightNumberBARA3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 9000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA3_3);

                        function movingLightNumberBARA3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,-35,30,movingLightAngleFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,20,50,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,15,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,-20,50,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,-25,60,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン N *****/
                    waterCurtain("N");

                    /***** LED BARA3 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberBARA3_1);
                        
                        function ledNumberBARA3_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,0,150,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 23500;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberBARA3_2);
                        
                        function ledNumberBARA3_2() {
                            let ledFadeTime = 1000;
                            let ledRepeatTime = 3200;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);

                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
                            let ledBasicColor = [ [ 240 , 0 , 255 ] , [ 255 , 100 , 255 ]];
        
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
                            
                            ledLapTimeSplit = ledRepeatTime * 2 / 44;
                            ledBasicColor = [ [ 255 , 180 , 240 ] , [ 255 , 0 , 150 ]];
        
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
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 35000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberBARA3_3);
                        
                        function ledNumberBARA3_3() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledLapTimeSplit = 1220;
                                let ledChangeTime = 1500;
                                let ledBasicColor = [ [ 240 , 0 , 255 ]  , [ 255 , 120 , 255 ] ];
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

                            let ledOutsideColor = [];
                            let ledOutsideBasicColor = [ 120 , 0 , 130 ];

                            if ( nowTime[1] < 1500 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledOutsideColor[k] = ledOutsideBasicColor[k] - ledOutsideBasicColor[k] / 1500 * nowTime[1] ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledOutsideColor[k] = 0;
                            }
                            
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledOutsideColor[0],ledOutsideColor[1],ledOutsideColor[2],nowTime[0],ledFadeTime);

                        }
                        
                    },ledSetTimeoutDelay[3]);

                } else if ( key === 'o' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BARA4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,13000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA4_1);

                        function movingLightNumberBARA4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,-35,30,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,20,50,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,15,60,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,-20,50,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,-25,60,movingLightColorFadeTime,nowTime[0]);

                                movingLightColorChange(1,1,255,255,255,0);
                                movingLightColorChange(1,2,0,0,0,0);
                                movingLightColorChange(1,3,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(1,4,0,0,0,0);
                                
                                movingLightColorChange(2,2,255,255,255,0);
                                movingLightColorChange(2,3,0,0,0,0);
                                movingLightColorChange(2,4,255,255,255,0);
                                movingLightColorChange(2,1,255,220,100,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(2,5,255,220,100,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 11000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA4_2);

                        function movingLightNumberBARA4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                
                                movingLightColorChange(2,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 11300;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA4_3);

                        function movingLightNumberBARA4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,3,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 12000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA4_4);

                        function movingLightNumberBARA4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(2,1,110,85,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'p' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト BARA5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,12000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50);

                        let movingLightColorFadeTime = 800;
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA5_1);

                        function movingLightNumberBARA5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,-35,30,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,15,60,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,-20,50,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,-25,60,movingLightColorFadeTime,nowTime[0]);
                                
                                if ( nowTime[0] <= movingLightColorFadeTime ) {
                                    movingLightColorChange(1,1,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                    for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                }                                
                                
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA5_2);

                        function movingLightNumberBARA5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,1,255,220,100,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 10000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA5_3);

                        function movingLightNumberBARA5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 11000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA5_4);

                        function movingLightNumberBARA5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i ++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED BARA3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA3);

                    function ledNumberBARA3() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;                    
                        let ledLapTimeSplit = 1220;
                        let ledChangeTime = 1500;
                        let ledBasicColor = [ [ 255 , 50 , 150 ]  , [ 255 , 180 , 255 ] ];

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
                        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,150,100,140,nowTime[0],ledFadeTime);
                
                    }

                } else if ( key === 'r' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BARA6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,11000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,14,70);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[0] = setInterval(movingLightNumberBARA6_0);

                        function movingLightNumberBARA6_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,-35,30,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,100,movingLightColorFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA6_1);

                        function movingLightNumberBARA6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 10000 * ( nowTime[0] % 10000 );
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 10000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA6_2);

                        function movingLightNumberBARA6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 10500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA6_3);

                        function movingLightNumberBARA6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン Y *****/
                    waterCurtain("Y");

                    /***** LED BARA4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA4);

                    function ledNumberBARA4() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 0 , 220 ] , [ 220 , 120 , 255 ] , [ 255 , 180 , 255 ] , ];
                        let ledLapTimeSplit = ledRepeatTime * 3 / 18;

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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,180,230,nowTime[0],ledFadeTime);

                    }

                    /***** ムービングライト BARA7 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,22500);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA7_1);

                        function movingLightNumberBARA7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    if ( i % 2 === 1 ) {
                                        movingLightAngleChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
                                        movingLightColorChange(1,i,255,220,100,1,movingLightColorFadeTime,nowTime[0],1);
                                    } else {
                                        movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                        movingLightColorChange(1,i,0,0,0,0);
                                    }
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,220,100,1,movingLightColorFadeTime,nowTime[0],1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 20000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA7_2);

                        function movingLightNumberBARA7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 22000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA7_3);

                        function movingLightNumberBARA7_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,-35,30,movingLightAngleFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,20,50,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,15,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,-20,50,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,-25,60,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED BARA5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA5);

                    function ledNumberBARA5() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 5000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 220 , 240 ] , [ 255 , 0 , 180 ] ];
                        let ledLapTimeSplit = ledRepeatTime * 3 / 44;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,180,230,nowTime[0],ledFadeTime);

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

                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AE *****/
                    waterCurtain("AE");

                    /***** LED BARA6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA6);

                    function ledNumberBARA6() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 5000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 220 , 120 , 255 ] , [ 255 , 180 , 255 ] , [ 255 , 0 , 220 ] ];
                        
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
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / 36;

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

                    /***** ムービングライト BARA8 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA8_1);

                        function movingLightNumberBARA8_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,-35,30,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,20,50,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,15,60,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,-20,50,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,-25,60,movingLightColorFadeTime,nowTime[0]);

                                movingLightColorChange(1,1,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(1,2,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,3,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(1,4,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                                
                                movingLightColorChange(2,2,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(2,3,0,0,0,0);
                                movingLightColorChange(2,4,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(2,1,255,220,100,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(2,5,255,220,100,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED BARA7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA7);

                    function ledNumberBARA7() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 200 , 120 , 255 ] , [ 255 , 120 , 220 ] , [ 255 , 200 , 240 ] ];
                        
                        let ledArray = [ 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 2 , 1 , 0 , 2  ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                        ledArray = [ 2 , 0 , 1 , 2 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 2 , 1 , 0 , 2 , 0 , 2 , 0 , 1 , 1 , 0 , 1 , 2 , 0 , 1 , 1 , 1 , 2 , 0 , 1 , 1 , 0 , 2 , 1 , 0 , 0 , 2 , 1 , 0 , 2 , 0 , 0 , 2 , 2 , 1 , 1 , 2 , 2 ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト BARA9 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA9_1);

                        function movingLightNumberBARA9_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,-35,30,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(1,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                
                                movingLightAngleChange(2,1,20,50,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,15,60,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,0,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,-20,50,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,-25,60,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'x' ) {
                    let startTime = Date.now();

                    /***** 水中照明 SS3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS3);

                    function waterLightNumberSS3() {
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

                    /***** ムービングライト BARA10 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,53900);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,13,60);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA10_1);

                        function movingLightNumberBARA10_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let movingLightRotateDeg = 360 / 1000 * ( nowTime[0] % 1000 );
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY;

                                if ( i <= 2 ) j = 5 - i;
                                else if ( i <= 4 ) j = 4 - i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTime;

                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = 40 - 80 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                else angleXY = -40 + 80 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightAngleChange(2,i,angleXY,85,movingLightAngleFadeTime,nowTime[0]);

                                movingLightRotateChange(2,i,movingLightRotateDeg);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA10_2);

                        function movingLightNumberBARA10_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,140,-30,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleChange(1,i,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA10_3);

                        function movingLightNumberBARA10_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 23000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA10_4);

                        function movingLightNumberBARA10_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 42000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberBARA10_5);

                        function movingLightNumberBARA10_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,-1,-1,-1,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 53500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[6] = setInterval(movingLightNumberBARA10_6);

                        function movingLightNumberBARA10_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED 23 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber23);

                    function ledNumber23() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1500;
                        let ledChangeTime = 350;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;

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

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

                    /***** LED 44 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber44);

                    function ledNumber44() {
                        let ledFadeTime = 2000;
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

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 BARA3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBARA3);

                    function waterLightNumberBARA3() {
                        let waterLightFadeTime = 500;
                        let waterLightRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        let waterLightBasicColor = [ [ 150 , 0 , 255 ] , [ 0 , 100 , 255 ] ];
                        let waterLightLapTime = waterLightRepeatTime * 2 / waterLightNumber;

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

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED BARA8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA8);

                    function ledNumberBARA8() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 150 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 220 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                    /***** ムービングライト BARA11 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,81000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA11_1);

                        function movingLightNumberBARA11_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,0,80,255,0);
                                }
                                movingLightAngleChange(1,4,0,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(1,4,0,0,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,240,230,255,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 900;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA11_2);

                        function movingLightNumberBARA11_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 12000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 900;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA11_3);

                        function movingLightNumberBARA11_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 14000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA11_4);

                        function movingLightNumberBARA11_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 32000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 900;

                        movingLightSetInterval[5] = setInterval(movingLightNumberBARA11_5);

                        function movingLightNumberBARA11_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 78000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1700;

                        movingLightSetInterval[6] = setInterval(movingLightNumberBARA11_6);

                        function movingLightNumberBARA11_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 80000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA11_7);

                        function movingLightNumberBARA11_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,2,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(2,i,-10,60,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(2,i,10,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,5,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED BARA9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA9);

                    function ledNumberBARA9() {
                        let ledFadeTime = 1400;
                        let ledRepeatTime = 4200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 220 , 0 , 255 ] ];

                        let ledColor = [];
                        let ledJudgeTime = nowTime[1] % ledRepeatTime;

                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン H *****/
                    waterCurtain("H");

                    /***** LED BARA10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA10);

                    function ledNumberBARA10() {
                        let ledFadeTime = 2200;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 200 , 0 , 255 ] , [ 255 , 255 , 0 ] ];
                        
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

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BD *****/
                    waterCurtain("BD");

                    /***** LED BARA11 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA11);

                    function ledNumberBARA11() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 5000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 120 , 0 , 255 ] , [ 255 , 255 , 150 ] , [ 255 , 255 , 0 ] , [ 200 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime / 15;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / 46;

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

                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED BARA12 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA12);

                    function ledNumberBARA12() {
                        let ledFadeTime = 1200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledArray = [ 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 0 , 2 , 1 , 0 , 1 , 2 , 0 , 1 , 2 , 1 , 0 , 2  ];
                        let ledBasicColor = [ [ 255 , 200 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 100 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                        ledArray = [ 2 , 0 , 1 , 2 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 2 , 1 , 0 , 2 , 0 , 2 , 0 , 1 , 1 , 0 , 1 , 2 , 0 , 1 , 1 , 1 , 2 , 0 , 1 , 1 , 0 , 2 , 1 , 0 , 0 , 2 , 1 , 0 , 2 , 0 , 0 , 2 , 2 , 1 , 1 , 2 , 2 ];
                        ledBasicColor = [ [ 220 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 0 , 240 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED BCP1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBCP1);

                    function ledNumberBCP1() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 BARA4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBARA4);

                    function waterLightNumberBARA4() {
                        let waterLightFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,80,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);

                    }

                    /***** ムービングライト BARA12 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,49000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,30);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA12_1);

                        function movingLightNumberBARA12_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);

                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(1,i2,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleChange(2,i,-10,60,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleChange(2,i,10,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 3000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA12_2);

                        function movingLightNumberBARA12_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 35000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA12_3);

                        function movingLightNumberBARA12_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 38000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA12_4);

                        function movingLightNumberBARA12_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 47000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberBARA12_5);

                        function movingLightNumberBARA12_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                }
            } else if ( mainNowPage === 2 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK1);

                    function ledNumberSK1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 60000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 7;
                        let ledBasicColor = [ [ 255 , 0 , 100 ] , [ 255 , 150 , 180 ] , [ 200 , 0 , 255 ] , [ 50 , 220 , 255 ] , [ 100 , 255 , 255 ] , [ 150 , 255 , 150 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = 2900;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 7 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 7 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 7 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 7 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 BARA5 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBARA5);

                    function waterLightNumberBARA5() {
                        let waterLightFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 26000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 6;
                        let waterLightBasicColor = [ [ 100 , 200 , 255 ] , [ 100 , 200 , 255 ] , [ 255 , 0 , 150 ] , [ 100 , 255 , 0 ] , [ 100 , 0 , 255 ] , [ 255 , 150 , 220 ] ];

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

                    /***** ムービングライト BARA13 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0,startTime,193000);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,6,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,15,60,100,4);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA13_1);

                        function movingLightNumberBARA13_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,255,255,255,0);
                                }
                                movingLightAngleChange(1,4,0,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(1,4,0,0,0,0);

                                let movingLightRotateDeg = 360 / movingLightOutsideNumber;
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,100,0,0);
                                    movingLightRotateChange(2,i,movingLightRotateDeg*(i-1));
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA13_2);

                        function movingLightNumberBARA13_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 11000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA13_3);

                        function movingLightNumberBARA13_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            let movingLightBlur = 4 - 4 / 2500 * nowTime[0];

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,2500,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightBlurChange(2,i,movingLightBlur);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 44000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA13_4);

                        function movingLightNumberBARA13_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,1,255,0,200,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,220,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,0,220,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,255,0,50,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,255,255,0,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 60000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightOpacityFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberBARA13_5);

                        function movingLightNumberBARA13_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],1500,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] > 3000 ) clearInterval(movingLightSetInterval[5]);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,200,-1,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] >= 1500 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[1]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightLapTime = [ 1 , 3 , 4 , 2 , 0 ];

                                let movingLightJudgeTime = nowTime[0] - 250 * movingLightLapTime[i-1];

                                if ( movingLightJudgeTime < 0 ) {

                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightOpacityFadeTime,movingLightJudgeTime);
                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime * 2 ) {
                                    movingLightColorChange(2,i,-1,-1,-1,1,movingLightOpacityFadeTime,movingLightJudgeTime-movingLightOpacityFadeTime);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 67000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightOpacityFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberBARA13_6);

                        function movingLightNumberBARA13_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],1500,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] > 3000 ) clearInterval(movingLightSetInterval[6]);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,200,-1,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] >= 1500 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[1]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightLapTime = [ 3 , 1 , 0 , 2 , 4 ];

                                let movingLightJudgeTime = nowTime[0] - 250 * movingLightLapTime[i-1];

                                if ( movingLightJudgeTime < 0 ) {

                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightOpacityFadeTime,movingLightJudgeTime);
                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime * 2 ) {
                                    movingLightColorChange(2,i,-1,-1,-1,1,movingLightOpacityFadeTime,movingLightJudgeTime-movingLightOpacityFadeTime);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 78500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,60);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberBARA13_7);

                        function movingLightNumberBARA13_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 16000;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let angleXYCenter = 0;
                            let angleXYRadius = 90;
                            let movingLightAngleLapTime = [ 4 , 3 , 2 , 0 , 1 ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleLapTimeSplit * movingLightAngleLapTime[i-1] ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,85,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberBARA13_8);

                        function movingLightNumberBARA13_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);

                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 500;
                            let movingLightBasicColor = [ [ 255 , 0 , 100 ] , [ 0 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k] ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightAngleFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 94000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberBARA13_9);

                        function movingLightNumberBARA13_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,2000,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,80,movingLightColorFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,0,120,255,-1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightSizeChange(i,70,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 124500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[10] = setInterval(movingLightNumberBARA13_10);

                        function movingLightNumberBARA13_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);

                                movingLightColorChange(2,1,255,0,200,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,220,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,0,220,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,255,0,50,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,255,255,0,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 141000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightOpacityFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberBARA13_5);

                        function movingLightNumberBARA13_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],1500,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] > 3000 ) clearInterval(movingLightSetInterval[5]);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,200,-1,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] >= 1500 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[1]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightLapTime = [ 1 , 3 , 4 , 2 , 0 ];

                                let movingLightJudgeTime = nowTime[0] - 250 * movingLightLapTime[i-1];

                                if ( movingLightJudgeTime < 0 ) {

                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightOpacityFadeTime,movingLightJudgeTime);
                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime * 2 ) {
                                    movingLightColorChange(2,i,-1,-1,-1,1,movingLightOpacityFadeTime,movingLightJudgeTime-movingLightOpacityFadeTime);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 149000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightOpacityFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberBARA13_6);

                        function movingLightNumberBARA13_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],1500,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] > 3000 ) clearInterval(movingLightSetInterval[6]);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,200,-1,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] >= 1500 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,-1,movingLightColorFadeTime,nowTime[1]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightLapTime = [ 3 , 1 , 0 , 2 , 4 ];

                                let movingLightJudgeTime = nowTime[0] - 250 * movingLightLapTime[i-1];

                                if ( movingLightJudgeTime < 0 ) {

                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightOpacityFadeTime,movingLightJudgeTime);
                                } else if ( movingLightJudgeTime < movingLightOpacityFadeTime * 2 ) {
                                    movingLightColorChange(2,i,-1,-1,-1,1,movingLightOpacityFadeTime,movingLightJudgeTime-movingLightOpacityFadeTime);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 155000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberBARA13_11);

                        function movingLightNumberBARA13_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 157000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,6,100,55,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberBARA13_12);

                        function movingLightNumberBARA13_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,-105,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,115,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-140,-80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 161500;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberBARA13_0);

                        function movingLightNumberBARA13_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[13] = setInterval(movingLightNumberBARA13_13);

                        function movingLightNumberBARA13_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 27000 * ( nowTime[0] % 27000 );

                            for ( var i = 1 ; i <= 3 ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberBARA13_14);

                        function movingLightNumberBARA13_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 0 , 200 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

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

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 190000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[14]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[15] = setInterval(movingLightNumberBARA13_15);

                        function movingLightNumberBARA13_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 192000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[16] = setInterval(movingLightNumberBARA13_16);

                        function movingLightNumberBARA13_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BARA1 *****/
                    waterCurtain("AV");
                    waterCurtainActualSetTimeout[1] = setTimeout( function() {
                        waterCurtain("AU",0);
                    },14500);
                    waterCurtainActualSetTimeout[2] = setTimeout( function() {
                        waterCurtain("D",0);
                    },31500);
                    waterCurtainActualSetTimeout[3] = setTimeout( function() {
                        waterCurtain("BA",0);
                    },47500);

                    /***** LED BARA13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberBARA16);
                        
                        function ledNumberBARA16() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
                            let ledRepeatTime = 20000;
                            let ledRepeatTimeSplit = ledRepeatTime / 5;
                            let ledBasicColor = [ [ 200 , 150 , 255 ] , [ 255 , 255 , 150 ] , [ 255 , 50 , 150 ] , [ 245 , 220 , 255 ] , [ 220 , 180 , 255 ] ];
                            
                            let ledLapTimeSplit = 500;

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
                            
                            ledLapTimeSplit = 220;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 3 ) % ledRepeatTime;

                                for ( var l = 0 ; l < 5 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 48500;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberBARA17);
                        
                        function ledNumberBARA17() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledRepeatTime = 10000;
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 30 , 30 ] , [ 220 , 180 , 255 ] , [ 200 , 150 , 255 ] , [ 255 , 255 , 150 ] , [ 255 , 80 , 150 ] ];
                            
                            let ledLapTimeSplit = 400;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 6 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 6 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = 180;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 6 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 6 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[2]);

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED BARA14 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA14);

                    function ledNumberBARA14() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 220 , 180 , 255 ] , [ 255 , 240 , 180 ] ];
                        let ledLapTimeSplit = 740;

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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED BARA15 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA15);

                    function ledNumberBARA15() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 15000;
                        let ledRepeatTimeSplit = ledRepeatTime / 5;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 20 , 20 ] , [ 220 , 180 , 255 ] , [ 255 , 255 , 150 ] , [ 255 , 50 , 100 ] ];
                        
                        let ledLapTimeSplit = 720;

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
                        
                        ledLapTimeSplit = 300;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BP *****/
                    waterCurtain("BP");

                    /***** LED BARA16 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA16);

                    function ledNumberBARA16() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 20000;
                        let ledRepeatTimeSplit = ledRepeatTime / 5;
                        let ledBasicColor = [ [ 200 , 150 , 255 ] , [ 255 , 255 , 150 ] , [ 255 , 50 , 150 ] , [ 245 , 220 , 255 ] , [ 220 , 180 , 255 ] ];
                        
                        let ledLapTimeSplit = 500;

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
                        
                        ledLapTimeSplit = 220;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 3 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AB *****/
                    waterCurtain("AB");

                    /***** LED BARA17 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA17);

                    function ledNumberBARA17() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 10000;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 30 , 30 ] , [ 220 , 180 , 255 ] , [ 200 , 150 , 255 ] , [ 255 , 255 , 150 ] , [ 255 , 80 , 150 ] ];
                        
                        let ledLapTimeSplit = 400;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 6 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 6 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 180;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 6 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 6 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED BARA18 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBARA18);

                    function ledNumberBARA18() {
                        let ledFadeTime = 1500;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 0 , 120 ] , [ 255 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / 18;

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

                    /***** 水中照明 BARA6 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBARA6);

                    function waterLightNumberBARA6() {
                        let waterLightFadeTime = 2200;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,180,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK1);

                    function ledNumberSK1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 60000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 7;
                        let ledBasicColor = [ [ 255 , 0 , 100 ] , [ 255 , 150 , 180 ] , [ 200 , 0 , 255 ] , [ 50 , 220 , 255 ] , [ 100 , 255 , 255 ] , [ 150 , 255 , 150 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = 2900;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 7 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 7 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledRepeatTime - ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 7 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 7 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト BARA14 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA14_1);

                        function movingLightNumberBARA14_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) {
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,255,255,255,0);
                                }
                                movingLightAngleChange(1,4,0,50,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(1,4,255,255,255,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,255,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA14_2);

                        function movingLightNumberBARA14_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 6500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA14_3);

                        function movingLightNumberBARA14_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 BARA7 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBARA7);

                    function waterLightNumberBARA7() {
                        let waterLightFadeTime = 2200;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,220,180,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BARA15 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBARA15_1);

                        function movingLightNumberBARA15_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,0,0,0,0);
                                }

                                for ( var i = 2 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i !== 4 ) {
                                        movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                        movingLightColorChange(2,i,0,0,0,0);
                                    }
                                }

                                movingLightAngleChange(2,1,110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(2,1,255,255,0,0);

                                movingLightAngleChange(2,4,-110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,255,255,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 810;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1300;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBARA15_2);

                        function movingLightNumberBARA15_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 25300;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1300;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBARA15_3);

                        function movingLightNumberBARA15_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 27000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBARA15_4);

                        function movingLightNumberBARA15_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(2,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,0,0,movingLightAngleFadeTime,nowTime[0]);
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

                    /***** 看板照明 BARA1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBARA1);
        
                    function logoboardLightNumberBARA1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];
                            let j;

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 50 , 50 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 220 , 100 , 255 ];
                            else logoboardLightColor = [ 255 , 50 , 100 , 100 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** パーライト FP1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP1);

                    function parLightNumberFP1() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,255,255,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(0.5,spotFadeTime,startTime + 300);
                    },300);
                    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 BARA2*****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBARA2);
        
                    function logoboardLightNumberBARA2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];
                            let j;

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 50 , 50 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 255 , 200 , 255 ];
                            else logoboardLightColor = [ 255 , 50 , 100 , 100 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト BARA1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberBARA1);

                    function parLightNumberBARA1() {
                        let parLightFadeTime = 1800;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,255,150,120,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 800;
                        spotLightChange(0.5,spotFadeTime,startTime + 1000);
                    },1000);
                    
                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** パーライト BARA2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberBARA2);

                    function parLightNumberBARA2() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 0 , 0 , 255 ];
                            else parLightColor = [ 120 , 0 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 200;
                        spotLightChange(0.5,spotFadeTime,startTime + 800);
                    },800);
                    
                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 BARA3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBARA3);
        
                    function logoboardLightNumberBARA3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];
                            let j;

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 120 , 80 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 220 , 100 , 255 ];
                            else logoboardLightColor = [ 255 , 200 , 0 , 100 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
                    
                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();

                    /***** パーライト BARA3 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberBARA3);

                    function parLightNumberBARA3() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {    
                            parLightColorFadeChange(i,255,0,80,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 400;
                        spotLightChange(0.5,spotFadeTime,startTime + 600);
                    },600);
                    
                } else if ( subCode === 12 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 BARA4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBARA4);
        
                    function logoboardLightNumberBARA4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];
                            let j;

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;

                            if ( j < 6 ) logoboardLightColor = [ 255 , 0 , 120 , 80 ];
                            else logoboardLightColor = [ 150 , 255 , 150 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    setTimeout( function () {
                        /***** ステージライト *****/
                        stageLightChange(1,1000,startTime + 500);
                    },500);

                }
            }
        }
    }
});