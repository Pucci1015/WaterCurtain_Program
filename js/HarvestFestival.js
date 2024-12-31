jsSetting("HarvestFestival","Harvest festival",1,1,2,2,2200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "HarvestFestival" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 HF1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHf1);

                    function waterLightNumberHf1() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,180,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();

                    /***** 水中照明 HF2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHF2);

                    function waterLightNumberHF2() {
                        let waterLightFadeTime = 1500;
                        let waterLightRepeatTime = 5000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        let waterLightColor = [];
                        let waterLightBasicColor = [ [ 180 , 255 , 0 ] , [ 255 , 255 , 0 ] ];

                        if ( nowTime[1] % waterLightRepeatTime < waterLightRepeatTime / 2 ) {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime );
                        } else {
                            for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTime * 2 * ( nowTime[1] % waterLightRepeatTime - waterLightRepeatTime / 2 );
                        }

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                    }

                    /***** ムービングライト HF1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,50,100);
                    }

                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHF1_1);

                        function movingLightNumberHF1_1() {
                            let nowTime = nowTimeGet(startTime,movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                movingLightColorChange(1,i,255,200,150,0);
                            }
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                movingLightColorChange(2,i,0,0,0,0);
                            }
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);

                        }

                    });

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF1_2);

                        function movingLightNumberHF1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);                        

                            let movingLightColorRepeatTime = 5000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 200 , 150 ] , [ 200 , 255 , 180 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = 5 - i;
                                else if ( i <= 4 ) j = 4 - i;
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

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 180000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF1_3);

                        function movingLightNumberHF1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン N *****/
                    waterCurtain("N");

                    /***** LED HF2 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberHF2_1);
                        
                        function ledNumberHF2_1() {
                            let ledFadeTime = 1000;
                            let ledRepeatTime = 5000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                            let ledLapTimeSplit = 830;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 1000;
                            let ledBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 200 , 0 ] ];
        
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

                            ledLapTimeSplit = 220;
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            ledBasicColor = [ [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 100 , 230 , 255 ] , [ 250 , 220 , 255 ] ];
        
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
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 48400;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberHF1_2);
                        
                        function ledNumberHF1_2() {
                            let ledFadeTime = 1000;
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 220 , 255 , 240 ] , [ 200 , 255 , 0 ] , [ 255 , 80 , 0 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            
                            let ledLapTimeSplit = 230;

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
                            
                            ledLapTimeSplit = 110;

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
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 61600;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberHF1_3);
                        
                        function ledNumberHF1_3() {
                            let ledFadeTime = 1600;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            let ledRepeatTime = 2500;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 220 , 255 , 0 ]  , [ 255 , 100 , 0 ] ];

                            let ledLapTimeSplit = 495;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 87500;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledMyNumber4 = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberHF1_4);
                        
                        function ledNumberHF1_4() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledMyNumber4);
                            let ledRepeatTime = 5200;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor1 = [ 255 , 150 , 0 ];
                            let ledBasicColor2 = [ [ 220 , 255 , 0 ] , [ 180 , 100 , 255 ] ];

                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[4]);

                } else if ( key === 'j' ) {
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AU *****/
                    waterCurtain("AU");

                    /***** LED HF2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHF2);

                    function ledNumberHF2() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 5000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor1 = [ 255 , 150 , 0 ];
                        let ledBasicColor2 = [ [ 0 , 250 , 255 ] , [ 180 , 255 , 0 ] ];

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
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;

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

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AV *****/
                    waterCurtain("AV");

                    /***** LED HF3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHF3);
        
                    function ledNumberHF3() {
                        let ledFadeTime = 1600;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
        
                        let ledRepeatTime = 2500;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 220 , 255 , 0 ]  , [ 255 , 100 , 0 ] ];
                        
                        let ledLapTimeSplit = 495;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED HF3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHF3);
        
                    function ledNumberHF3() {
                        let ledFadeTime = 1600;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
        
                        let ledRepeatTime = 2500;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 220 , 255 , 0 ] , [ 255 , 100 , 0 ] ];
                        
                        let ledLapTimeSplit = 495;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン HF1 *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("AR",0);
                    },0);
                    waterCurtainActualSetTimeout[1] = setTimeout( function() {
                        waterCurtain("A",0);
                    },11300);

                    /***** LED HF4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHF4);
        
                    function ledNumberHF4() {
                        let ledFadeTime = 1300;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledColor = [ [ 180 , 255 , 0 ]  , [ 255 , 150 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {                        
                            let j;
                            if ( i % 10 >= 2 && i % 10 < 7 ) j = 1;
                            else j = 0;

                            ledColorChange(1,i,ledColor[j][0],ledColor[j][1],ledColor[j][2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j;
                            if ( i >= 6 && i <= 16 || i >= 29 && i <= 40 ) j = 0;
                            else j = 1;

                            ledColorChange(2,i,ledColor[j][0],ledColor[j][1],ledColor[j][2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                    }

                } else if ( key === 'o' ) {
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

                    /***** 水中照明 HF2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHF2);

                    function waterLightNumberHF2() {
                        let waterLightFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 5000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 3;
                        let waterLightBasicColor = [ [ 255 , 200 , 0 ] , [ 0 , 255 , 0 ] , [ 150 , 0 , 255 ] ];

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

                    /***** ムービングライト HF2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,60,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHF2_1);

                        function movingLightNumberHF2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,200,150,0);
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,0);
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleFadeChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);

                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF2_2);

                        function movingLightNumberHF2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 7000;
                            let angleXYCenter = 0;
                            let angleZCenter = 75;
                            let angleXYRadius = 80;
                            let angleZRadius = 25;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 4 * ( i % 2 + 0.2 ) ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);

                                movingLightTripleRotateChange(1,i,360/2500*(nowTime[0]%2500));
                            }
                            
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF2_3);

                        function movingLightNumberHF2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 15000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[4] = setInterval(movingLightNumberHF2_4);

                        function movingLightNumberHF2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 15500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF2_5);

                        function movingLightNumberHF2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,-90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 43000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHF2_6);

                        function movingLightNumberHF2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,80,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 82000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberHF2_7);

                        function movingLightNumberHF2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 83000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[8] = setInterval(movingLightNumberHF2_8);

                        function movingLightNumberHF2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let angleXY, angleZ;
                            let movingLightAngleRepeatTime = 20000;
                            let movingLightAngleRepeatTimeSplit1 = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTime / 4;                        
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightLapTime = movingLightAngleRepeatTime / 4 * ( ( i + 2.5 ) % 4 );
                                
                                let movingLightAngleJudgeTime1 = ( nowTime[1] + movingLightLapTime ) % movingLightAngleRepeatTime;
                                let movingLightAngleJudgeTime2 = ( nowTime[1] + movingLightLapTime ) % movingLightAngleRepeatTimeSplit1;

                                if ( movingLightAngleJudgeTime2 < movingLightAngleRepeatTimeSplit2 ) {
                                    angleZ = 100 * Math.sin( movingLightAngleJudgeTime2 / movingLightAngleRepeatTimeSplit2 / 2 * Math.PI );
                                } else {
                                    angleZ = 100 - 100 * Math.sin( ( movingLightAngleJudgeTime2 - movingLightAngleRepeatTimeSplit2 ) / movingLightAngleRepeatTimeSplit2 / 2 * Math.PI );
                                }

                                if ( movingLightAngleJudgeTime1 < movingLightAngleRepeatTimeSplit1 ) {
                                    angleXY = 45 + 270 * Math.sin( movingLightAngleJudgeTime1 / movingLightAngleRepeatTimeSplit1 / 2 * Math.PI );
                                    angleZ *= -1;
                                } else {
                                    angleXY = 315 - 270 * Math.sin( ( movingLightAngleJudgeTime1 - movingLightAngleRepeatTimeSplit1 ) / movingLightAngleRepeatTimeSplit1 / 2 * Math.PI );
                                }
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 84000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHF2_9);

                        function movingLightNumberHF2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 200;
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 0 , 0 ] ];

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

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberHF2_10);

                        function movingLightNumberHF2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                if ( nowTime[0] <= movingLightColorFadeTime ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(1,i,360/2500*(nowTime[0]%2500));
                            }

                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 110500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberHF2_11);

                        function movingLightNumberHF2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 112000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberHF2_12);

                        function movingLightNumberHF2_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,200,0,-1,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                    /*movingLightSetTimeoutDelay[10] = 118000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[13] = setInterval(movingLightNumberHF2_13);

                        function movingLightNumberHF2_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                                clearInterval(movingLightSetInterval[10]);
                            }

                        }

                    },movingLightSetTimeoutDelay[10]);*/

                } else if ( key === 'p' ) {
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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AD *****/
                    waterCurtain("AD");

                    /***** LED HF5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHF5);

                    function ledNumberHF5() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor1 = [ 255 , 150 , 0 ];
                        let ledBasicColor2 = [ [ 150 , 80 , 255 ] , [ 255 , 220 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
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
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'r' ) {
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

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;
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

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AB *****/
                    waterCurtain("AB");

                    /***** LED HF5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHF5);

                    function ledNumberHF5() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor1 = [ 255 , 150 , 0 ];
                        let ledBasicColor2 = [ [ 150 , 80 , 255 ] , [ 255 , 220 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
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
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BG *****/
                    waterCurtain("BG");

                    /***** LED HF6 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberHF3);
                        
                        function ledNumberHF3() {
                            let ledFadeTime = 1600;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);        
                            let ledRepeatTime = 2500;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 220 , 255 , 0 ]  , [ 255 , 100 , 0 ] ];
                            
                            let ledLapTimeSplit = 495;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 4880;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberHF6_1);
                        
                        function ledNumberHF6_1() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledRepeatTime = 2500;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledLapTimeSplit = 415;
                                let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;
                                let ledBasicColor = [ [ 255 , 100 , 0 ] , [ 240 , 200 , 255 ] , [ 255 , 255 , 180 ] ];
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[2]);
                            }
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledLapTimeSplit = 180;
                                let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;
                                let ledBasicColor = [ [ 255 , 255 , 180 ] , [ 240 , 200 , 255 ] , [ 255 , 100 , 0 ] ];
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[2]);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                } else if ( key === 'u' ) {
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

                    /***** 水中照明 HF3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHf3);

                    function waterLightNumberHf3() {
                        let fadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト HF3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHF3_1);

                        function movingLightNumberHF3_1() {
                            let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }

                        }

                    });

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1800;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                            movingLightPictureChange(1,i,0,100,100);
                        }
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                            movingLightPictureChange(2,i,0,100,100);
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF3_2);

                        function movingLightNumberHF3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }                        

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 2600;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF3_3);

                        function movingLightNumberHF3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);                  

                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 50 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = 5 - i;
                                else if ( i <= 4 ) j = 4 - i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j + movingLightColorRepeatTime / 4 ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'v' ) {
                    let startTime = Date.now();

                    /***** 水中照明 HF4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHF4);

                    function waterLightNumberHF4() {
                        let waterLightFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 3300;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                        let waterLightBasicColor = [ [ 200 , 210 , 255 ] , [ 255 , 200 , 0 ]];

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

                    /***** 看板照明 HF5 *****/
                    logoboardLightSetting(2);
                    
                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(1);
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberHF5);
            
                        function logoboardLightNumberHF5() {
                            let nowTime = nowTimeGet(startTime+3000,1000,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                            let logoboardRepeatTime = 3000;
                            let logoboardRepeatTimeSplit = logoboardRepeatTime / 3;
                            let logoboardBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 255 , 180 ] ];
            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let logoboardColor = [];
                                let logoboardLapTimeSplit;
                                let j = i - 1;

                                if ( j < 12 ) logoboardLapTimeSplit = logoboardRepeatTime / 4 * ( 5 - Math.trunc( j / 3 ) ) % logoboardRepeatTime;
                                else if ( j < 24 ) logoboardLapTimeSplit = logoboardRepeatTime / 4 * ( 5.5 - Math.trunc( ( j - 12 ) / 3 ) ) % logoboardRepeatTime;
                                else if ( j < 36 ) logoboardLapTimeSplit = logoboardRepeatTime / 4 * ( 3 - Math.trunc( ( j - 24 ) / 3 ) ) % logoboardRepeatTime;
                                else logoboardLapTimeSplit = logoboardRepeatTime / 4 * ( 7.5 - Math.trunc( ( j - 36 ) / 3 ) ) % logoboardRepeatTime;

                                let logoboardJudgeTime = ( nowTime[1] + logoboardLapTimeSplit ) % logoboardRepeatTime;

                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) logoboardColor[k] = logoboardBasicColor[0][k];
                                } else if ( logoboardJudgeTime < logoboardRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) logoboardColor[k] = logoboardBasicColor[0][k] + ( logoboardBasicColor[1][k] - logoboardBasicColor[0][k] ) / logoboardRepeatTimeSplit * ( logoboardJudgeTime - logoboardRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) logoboardColor[k] = logoboardBasicColor[1][k] + ( logoboardBasicColor[0][k] - logoboardBasicColor[1][k] ) / logoboardRepeatTimeSplit * ( logoboardJudgeTime - logoboardRepeatTimeSplit * 2 ) ;
                                }
            
                                logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1,1,1000,nowTime[0]);
                            }
                        }
                    },3000);

                    /***** ムービングライト HF4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHF4_1);

                        function movingLightNumberHF4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }

                        }

                    });

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF2_2);

                        function movingLightNumberHF2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 75;
                            let angleXYRadius = 80;
                            let angleZRadius = 25;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {

                                let movingLightAngleRad = 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 2 * ( 1 - i % 2 ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(1,i,255,80,0,0);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF2_3);

                        function movingLightNumberHF2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 60;
                            let angleXYRadius = 100;
                            let angleZRadius = 40;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * ( i - 1 ) ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(2,i,255,255,0,0);
                            }
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 2000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberHF2_4);

                        function movingLightNumberHF2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 100;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity = 0;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 18000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF4_5);

                        function movingLightNumberHF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,180,0,0);
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 18500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHF4_6);

                        function movingLightNumberHF4_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0])
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 20000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberHF4_7);

                        function movingLightNumberHF4_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 48000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[8] = setInterval(movingLightNumberHF4_8);

                        function movingLightNumberHF4_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 49000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,50,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHF4_9);

                        function movingLightNumberHF4_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let angleXY, angleZ;
                                
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i % 2 + 0.5 ) ) % movingLightAngleRepeatTime;

                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleXY = 10 + 250 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    angleZ = 100 - 10 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleXY = 260 - 250 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                    angleZ = 90 + 10 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(1,i,nowTime[0]/10);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(1,i,255,180,0,0);

                            }                        

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberHF4_10);

                        function movingLightNumberHF4_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let maxAngleXY = [ -40 , 40 ];
                            let maxAngleZ = [ -20 , 40 ];
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTimeSplit / 2;
                            
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY, angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * j ) % movingLightAngleRepeatTimeSplit;                            
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit2 * ( l + 1 ) ) {
                                        angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit2 * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit2 * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime = ( movingLightJudgeTime + movingLightAngleRepeatTimeSplit2 / 2 * 3 ) % movingLightAngleRepeatTime;
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(2,i,nowTime[0]/10);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 50000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberHF2_11);

                        function movingLightNumberHF2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);                        

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j + movingLightColorRepeatTime / 4 ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 66000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF4_5);

                        function movingLightNumberHF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 66500;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF2_2);

                        function movingLightNumberHF2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 75;
                            let angleXYRadius = 80;
                            let angleZRadius = 25;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {

                                let movingLightAngleRad = 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 2 * ( 1 - i % 2 ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(1,i,255,80,0,0);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF2_3);

                        function movingLightNumberHF2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 60;
                            let angleXYRadius = 100;
                            let angleZRadius = 40;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * ( i - 1 ) ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(2,i,255,255,0,0);
                            }
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 67000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberHF2_4);

                        function movingLightNumberHF2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 100;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity = 0;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 82000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF4_5);

                        function movingLightNumberHF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,180,0,0);
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 82500;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberHF4_6);

                        function movingLightNumberHF4_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0])
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }

                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 84000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberHF4_7);

                        function movingLightNumberHF4_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }

                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 112500;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[8] = setInterval(movingLightNumberHF4_8);

                        function movingLightNumberHF4_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 113500;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,50,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHF4_9);

                        function movingLightNumberHF4_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let angleXY, angleZ;
                                
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i % 2 + 0.5 ) ) % movingLightAngleRepeatTime;

                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleXY = 10 + 250 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    angleZ = 100 - 10 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleXY = 260 - 250 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                    angleZ = 90 + 10 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(1,i,nowTime[0]/10);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(1,i,255,180,0,0);

                            }                        

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberHF4_10);

                        function movingLightNumberHF4_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let maxAngleXY = [ -40 , 40 ];
                            let maxAngleZ = [ -20 , 40 ];
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTimeSplit / 2;
                            
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY, angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * j ) % movingLightAngleRepeatTimeSplit;                            
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit2 * ( l + 1 ) ) {
                                        angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit2 * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit2 * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime = ( movingLightJudgeTime + movingLightAngleRepeatTimeSplit2 / 2 * 3 ) % movingLightAngleRepeatTime;
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(2,i,nowTime[0]/10);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 114500;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberHF2_11);

                        function movingLightNumberHF2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);                        

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j + movingLightColorRepeatTime / 4 ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 129000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF4_5);

                        function movingLightNumberHF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 129500;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberHF2_12);

                        function movingLightNumberHF2_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 130000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[13] = setInterval(movingLightNumberHF2_13);

                        function movingLightNumberHF2_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 500;
                            let movingLightDisplayTime = 300;
                            let movingLightColorOpacity = 0;

                            let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            if ( movingLightJudgeTime < movingLightDisplayTime ) movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,240,255,220,movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 146000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[14] = setInterval(movingLightNumberHF2_14);

                        function movingLightNumberHF2_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1300;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightBasicColor = [ [ 100 , 200 , 255 ] , [ 255 , 255 , 150 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let movingLightColorLapTimeSplit = [ 0 , 1 , 0 , 1 , 1 ];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * movingLightColorLapTimeSplit[i-1] ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k] ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i < movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,20,0,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 161000;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[14]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[8] = setInterval(movingLightNumberHF4_8);

                        function movingLightNumberHF4_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 161500;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF2_2);

                        function movingLightNumberHF2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 75;
                            let angleXYRadius = 80;
                            let angleZRadius = 25;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {

                                let movingLightAngleRad = 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 2 * ( 1 - i % 2 ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(1,i,255,80,0,0);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF2_3);

                        function movingLightNumberHF2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 60;
                            let angleXYRadius = 100;
                            let angleZRadius = 40;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * ( i - 1 ) ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(2,i,255,255,0,0);
                            }
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 162000;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberHF2_4);

                        function movingLightNumberHF2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 100;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity = 0;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 178000;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF4_5);

                        function movingLightNumberHF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,180,0,0);
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[25]);

                    movingLightSetTimeoutDelay[26] = 181000;
                    movingLightSetTimeout[26] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,50,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[9] = setInterval(movingLightNumberHF4_9);

                        function movingLightNumberHF4_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let angleXY, angleZ;
                                
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i % 2 + 0.5 ) ) % movingLightAngleRepeatTime;

                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) {
                                    angleXY = 10 + 250 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    angleZ = 100 - 10 / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                } else {
                                    angleXY = 260 - 250 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                    angleZ = 90 + 10 / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );
                                }
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(1,i,nowTime[0]/10);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(1,i,255,180,0,0);

                            }                        

                        }

                        movingLightSetInterval[10] = setInterval(movingLightNumberHF4_10);

                        function movingLightNumberHF4_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let maxAngleXY = [ -40 , 40 ];
                            let maxAngleZ = [ -20 , 40 ];
                            let movingLightAngleRepeatTime = 10000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTimeSplit / 2;
                            
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleXY, angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * j ) % movingLightAngleRepeatTimeSplit;                            
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit2 * ( l + 1 ) ) {
                                        angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) / movingLightAngleRepeatTimeSplit2 * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit2 * l ) ;
                                        break;
                                    }
                                }

                                movingLightJudgeTime = ( movingLightJudgeTime + movingLightAngleRepeatTimeSplit2 / 2 * 3 ) % movingLightAngleRepeatTime;
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(2,i,nowTime[0]/10);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[26]);

                    movingLightSetTimeoutDelay[27] = 181500;
                    movingLightSetTimeout[27] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberHF2_11);

                        function movingLightNumberHF2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[27],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);                        

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j + movingLightColorRepeatTime / 4 ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[27]);

                    movingLightSetTimeoutDelay[28] = 215000;
                    movingLightSetTimeout[28] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF4_5);

                        function movingLightNumberHF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[28],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[28]);

                    movingLightSetTimeoutDelay[29] = 215500;
                    movingLightSetTimeout[29] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF2_2);

                        function movingLightNumberHF2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],1500,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 75;
                            let angleXYRadius = 80;
                            let angleZRadius = 25;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {

                                let movingLightAngleRad = 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 2 * ( 1 - i % 2 ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,-1*angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(1,i,255,80,0,0);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF2_3);

                        function movingLightNumberHF2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],1500,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = 60;
                            let angleXYRadius = 100;
                            let angleZRadius = 40;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / movingLightOutsideNumber * ( i - 1 ) ) ) % 360 / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                if ( nowTime[0] < movingLightAngleFadeTime ) movingLightColorChange(2,i,255,255,0,0);
                            }
                        }

                    },movingLightSetTimeoutDelay[29]);

                    movingLightSetTimeoutDelay[30] = 217000;
                    movingLightSetTimeout[30] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberHF2_4);

                        function movingLightNumberHF2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 100;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity = 0;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorChangeTime ) movingLightColorOpacity = 1 / movingLightColorChangeTime * movingLightJudgeTime;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[30]);

                    movingLightSetTimeoutDelay[31] = 249000;
                    movingLightSetTimeout[31] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        movingLightSetInterval[5] = setInterval(movingLightNumberHF4_5);

                        function movingLightNumberHF4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[31],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[31]);

                    movingLightSetTimeoutDelay[32] = 251000;
                    movingLightSetTimeout[32] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                    },movingLightSetTimeoutDelay[32]);

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED HF7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberHF7_1);
                        
                        function ledNumberHF7_1() {
                            let ledFadeTime = 1300;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,100,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,180,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 9430;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberHF7_2);
                        
                        function ledNumberHF7_2() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 13550;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberHF7_3);
                        
                        function ledNumberHF7_3() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            let ledBasicColor1 = [ 255 , 255 , 0 ];
                            let ledBasicColor2 = [ [ 255 , 180 , 0 ] , [ 255 , 0 , 0 ] ];
                            
                            let ledLapTimeSplit = 250;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = 155;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[3]);
                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

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

                } else if ( key === 'y' ) {
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

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BN *****/
                    waterCurtain("BN");

                    /***** LED 115 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber115);
        
                    function ledNumber115() {
                        let ledFadeTime = 1500;
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

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

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

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED DSC6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSC6);
        
                    function ledNumberDSC6() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);    
                        let ledRepeatTime = 800;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 80 , 0 ]  , [ 255 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 8 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AP *****/
                    waterCurtain("AP");

                    /***** LED HF8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHF8);

                    function ledNumberHF8() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 5000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledChangeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 100 , 0 ] , [ 255 , 255 , 200 ] , [ 255 , 100 , 0 ] , [ 220 , 230 , 255 ] ];
                        
                        let ledLapTimeSplit = 415;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 4 ][k];
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

                            for ( var l = 0 ; l < 4 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 4 ][k];
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

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

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                    /***** LED WP8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP8);

                    function ledNumberWP8() {
                        let ledFadeTime = 2200;
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

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

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

                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

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

                    /***** 水中照明 HF1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHf1);

                    function waterLightNumberHf1() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,180,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 HF6 *****/
                    logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHF6);
        
                    function logoboardLightNumberHF6() {
                        let nowTime = nowTimeGet(startTime,0);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,-1,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }

                    /***** ムービングライト HF5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberHF5_1);

                        function movingLightNumberHF5_1() {
                            let nowTime = nowTimeGet(startTime,movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                movingLightColorChange(1,i,0,0,0,0);
                                movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            }
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                movingLightColorChange(2,i,255,150,0,0);
                                movingLightAngleChange(2,i,0,-10,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    });

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 500;

                        let movingLightPictureArray = [ 0 , 8 , 16 , 11 , 7 , 4 , 10 , 15 , 3 , 9 , 12 ];
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightDoublePicture(2,i,50,movingLightPictureArray,56000,startTime+movingLightSetTimeoutDelay[1],movingLightMyNumber)

                        movingLightSetInterval[2] = setInterval(movingLightNumberHF5_2);

                        function movingLightNumberHF5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,150,0,1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }                        

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 84500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberHF5_3);

                        function movingLightNumberHF5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }                        

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 86000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100);

                        movingLightSetInterval[4] = setInterval(movingLightNumberHF5_4);

                        function movingLightNumberHF5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }                        

                        }

                    },movingLightSetTimeoutDelay[3]);

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 HF1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHF1);
        
                    function logoboardLightNumberHF1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 50 , 50 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 100 , 255 , 0 , 100 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 200 , 0 , 100 ];
                            else logoboardLightColor = [ 255 , 100 , 0 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                        }
                    }

                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** 看板照明 HF2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHF2);
        
                    function logoboardLightNumberHF2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 6 ) logoboardLightColor = [ 255 , 255 , 0 , 255 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 0 , 255 , 0 , 255 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else logoboardLightColor = [ 255 , 255 , 0 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                        }
                    }

                    /***** パーライト HF1 *****/
                    let parLightSetInterval = setInterval(parLightNumberHF1);

                    function parLightNumberHF1() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);
    /*
                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 255 , 150 , 255 ];
                            else parLightColor = [ 150 , 255 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }*/

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,150,200,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** 看板照明 HF3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1600;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHF3);
        
                    function logoboardLightNumberHF3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 220 , 0 , 255 , 0 ];
                            else if ( j <= 6 ) logoboardLightColor = [ 220 , 0 , 255 , 255 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 255 , 220 , 0 , 255 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 220 , 0 , 0 ];
                            else logoboardLightColor = [ 255 , 100 , 0 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                        }
                    }

                    /***** パーライト HF2 *****/
                    let parLightSetInterval = setInterval(parLightNumberHF2);

                    function parLightNumberHF2() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);

                } else if ( subCode === 9 ) { //f9
                    let startTime = Date.now();

                    /***** 看板照明 HF4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHF4);
        
                    function logoboardLightNumberHF4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i - 1;
                            else j = logoboardLightNumber - i;

                            if ( j % 6 < 3 ) logoboardLightColor = [ 255 , 120 , 0 , 0 ];
                            else logoboardLightColor = [ 255 , 120 , 0 , 120 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                        }
                    }

                    /***** パーライト HF3 *****/
                    let parLightSetInterval = setInterval(parLightNumberHF3);

                    function parLightNumberHF3() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,180,120,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 300;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);

                } else if ( subCode === 10 ) { //f10
                    let startTime = Date.now();

                    /***** 看板照明 HF7 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberHF7);
        
                    function logoboardLightNumberHF7() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 255 , 0 , 255 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 255 , 255 , 0 , 100 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 255 , 150 , 0 , 0 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 255 , 255 , 0 , 100 ];
                            else logoboardLightColor = [ 100 , 255 , 0 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                        }
                    }

                    /***** パーライト HF1 *****/
                    let parLightSetInterval = setInterval(parLightNumberHF1);

                    function parLightNumberHF1() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,100,255,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                }
            }

        } else if ( dnNowSelect === 1 ) {
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

                    /***** 水中照明 EMAKI1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberEMAKI1);

                    function waterLightNumberEMAKI1() {
                        let fadeTime = 2600;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BC *****/
                    waterCurtain("BC");

                    /***** LED 85 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber85);

                    function ledNumber85() {
                        let ledFadeTime = 2000;
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

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BR *****/
                    waterCurtain("BR");

                    /***** LED WP8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP8);

                    function ledNumberWP8() {
                        let ledFadeTime = 2200;
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

                } else if ( key === 'j' ) {
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BK *****/
                    waterCurtain("BK");

                    /***** LED WP5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP5);

                    function ledNumberWP5() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = 500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 100 , 0 ] , [ 255 , 255 , 0 ] ];

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
                        
                        ledLapTimeSplit = 205;
                        ledRepeatTimeSplit = ledRepeatTime / 4;
                        ledBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 220 , 240 ] , [ 255 , 255 , 150 ] , [ 255 , 200 , 0 ] ];

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

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED EMAKI1 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberEMAKI1_1);
                        
                        function ledNumberEMAKI1_1() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
                            let ledRepeatTime = 700;
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
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 16000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberEMAKI1_2);
                        
                        function ledNumberEMAKI1_2() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            
                            let ledChangeTime = 400;
                            let ledLapTimeSplit = 370;
                            let ledBasicColor = [ [ 255 , 255 , 220 ] , [ 255 , 150 , 0 ] ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ( ledRepeatTime / 2 );
        
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
                            
                            ledLapTimeSplit = 150;
                            ledBasicColor = [ [ 255 , 255 , 220 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 220 ] , [ 230 , 200 , 255 ] ];
        
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
                        
                    },ledSetTimeoutDelay[2]);

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED HF2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI2);

                    function ledNumberEMAKI2() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        /*let ledRepeatTime = 3000;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledChangeTime = 800;
                            let ledLapTimeSplit = 500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ 255 , 100 , 0 ] ];
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
                        }*/

                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 100 , 0 ] , [ 0 , 0 , 0 ] ];                    
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

                } else if ( key === 'n' ) {
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

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AV *****/
                    waterCurtain("AV");

                    /***** LED DSC7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSC7);
        
                    function ledNumberDSC7() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);    
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 180 , 0 ]  , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;

                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン EMAKI1 *****/
                    waterCurtain("E");
                    waterCurtainActualSetTimeout[1] = setTimeout( function() {
                        waterCurtain("G",0);
                    },4800);
                    

                    /***** LED EMAKI3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumber85);
                        
                        function ledNumber85() {
                            let ledFadeTime = 1000;
                            let ledRepeatTime = 700;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
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
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 4400;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberEMAKI3_1);
                        
                        function ledNumberEMAKI3_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 100 , 0 ] ];
                            
                            let ledLapTimeSplit = 330;

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
                            
                            ledLapTimeSplit = 140;

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

                    ledSetTimeoutDelay[3] = 14500;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberEMAKI3_2);
                        
                        function ledNumberEMAKI3_2() {
                            let ledFadeTime = 1800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            let ledRepeatTime = 5000;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledChangeTime = 1200;
                                let ledLapTimeSplit = 850;
                                let ledRepeatTimeSplit = ledRepeatTime / 3;
                                let ledBasicColor = [ [ 255 , 120 , 0 ] , [ 230 , 200 , 255 ] , [ 255 , 255 , 150 ] ];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 3 ][k];
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[3]);

                } else if ( key === 'q' ) {
                    let startTime = Date.now();

                    /***** ムービングライト EMAKI1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 100;

                        movingLightSetInterval[1] = setInterval(movingLightNumberEMAKI1_1);

                        function movingLightNumberEMAKI1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                }

                                movingLightAngleFadeChange(2,1,-40,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 100;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI1_2);

                        function movingLightNumberEMAKI1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'r' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let fadeTime = 3000;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber , ledSetInterval , ledMyNumber );

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            ledColorChange(1,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            ledColorChange(2,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                        }
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
                                }

                                movingLightAngleFadeChange(2,1,-40,60,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight4_2);

                        function movingLightNumberNight4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 's' ) {
                    let startTime = Date.now();

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

                    /***** ムービングライト EMAKI2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,30,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberEMAKI2_1);

                        function movingLightNumberEMAKI2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    if ( i >= 3 ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                }

                                movingLightAngleFadeChange(1,1,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,2,-55,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,1,-10,60,movingLightAngleFadeTime,nowTime[0])
                                movingLightAngleFadeChange(2,2,5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,10,60,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 18000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI2_2);

                        function movingLightNumberEMAKI2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 36000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberEMAKI2_3);

                        function movingLightNumberEMAKI2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,2,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 43000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 500;

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,16,80,100,2);

                        movingLightSetInterval[4] = setInterval(movingLightNumberEMAKI2_4);

                        function movingLightNumberEMAKI2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 3 ; i += 2 ) movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i += 2 ) movingLightAngleFadeChange(1,i,0,20,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleChange(2,i,0,75,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,255,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberEMAKI2_5);

                        function movingLightNumberEMAKI2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                movingLightRotateChange(2,i,360/20000*(nowTime[0]%20000));
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 70000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2200;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI2_2);

                        function movingLightNumberEMAKI2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i += 2 ) {
                                    movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 92000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2700;

                        movingLightSetInterval[4] = setInterval(movingLightNumberEMAKI2_4);

                        function movingLightNumberEMAKI2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i += 2 ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,220,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 169000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2200;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI2_2);

                        function movingLightNumberEMAKI2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,60,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 194000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2700;

                        movingLightSetInterval[3] = setInterval(movingLightNumberEMAKI2_3);

                        function movingLightNumberEMAKI2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 242000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,16,100,100,2);

                        let movingLightColorFadeTime = 2200;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI2_2);

                        function movingLightNumberEMAKI2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 286000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2700;

                        movingLightSetInterval[3] = setInterval(movingLightNumberEMAKI2_3);

                        function movingLightNumberEMAKI2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);
                    
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

                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン I *****/
                    waterCurtain("I");

                    /***** LED 9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber9);

                    function ledNumber9() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,100,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }
                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED EMAKI4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI4);

                    function ledNumberEMAKI4() {
                        let ledFadeTime = 1650;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);  
                        let ledRepeatTime = 5600;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor1 = [ 0 , 0 , 255 ]
                        let ledBasicColor2 = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];                  
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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'w' ) {
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
        
                } else if ( key === 'x' ) {
                    let startTime = Date.now();
        
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 101 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber101);
        
                    function ledNumber101() {
                        let fadeTime = 1800;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
        
                        let repeatTime = 900;
        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],fadeTime);
        
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
        
                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED DSF13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF13);

                    function ledNumberDSF13() {
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

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン Y *****/
                    waterCurtain("Y");

                    /***** LED DSF13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF13);

                    function ledNumberDSF13() {
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
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                    /***** LED EMAKI4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI4);

                    function ledNumberEMAKI4() {
                        let ledFadeTime = 1650;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 5600;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor1 = [ 0 , 0 , 255 ]
                        let ledBasicColor2 = [ [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];                  
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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BH *****/
                    waterCurtain("BH");

                    /***** LED EMAKI5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI5);
        
                    function ledNumberEMAKI5() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2800;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        
                        let ledLapTimeSplit = 465;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledBasicColor = [ [ 0 , 50 , 255 ]  , [ 0 , 150 , 255 ] ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 5 ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 190;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledBasicColor = [ [ 0 , 140 , 255 ]  , [ 0 , 240 , 255 ] ];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED EMAKI5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI5);
        
                    function ledNumberEMAKI5() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2800;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        
                        let ledLapTimeSplit = 465;
                        let ledBasicColor = [ [ 0 , 50 , 255 ]  , [ 0 , 150 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 5 ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 190;
                        ledBasicColor = [ [ 0 , 140 , 255 ]  , [ 0 , 240 , 255 ] ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED DSF13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSF13);

                    function ledNumberDSF13() {
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

                } else if ( key === ']' ) {
                    let startTime = Date.now();

                    /***** 水中照明 HF1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberHf1);

                    function waterLightNumberHf1() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,180,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                } else if ( key === ',' ) {
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

                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AU *****/
                    waterCurtain("AU");

                    /***** LED EMAKI5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI5);

                    function ledNumberEMAKI5() {
                        let ledFadeTime = 1000;
                        let ledRepeatTime = 5300;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        let ledBasicColor1 = [ 255 , 180 , 0 ];
                        let ledBasicColor2 = [ [ 255 , 255 , 0 ] , [ 150 , 100 , 180 ] , [ 50 , 150 , 0 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 8 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
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
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                    }

                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン EMAKI2 *****/
                    waterCurtain("A");
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("BP",0);
                    },2500);

                    /***** LED EMAKI6 *****/
                    ledActualSetTimeout = setTimeout( function() { 
                        let ledMyNumber = ledSetting();
                        let ledSetInterval = setInterval(ledNumberEMAKI6);
        
                        function ledNumberEMAKI6() {
                            let ledFadeTime = 2500;
                            let ledRepeatTime = 6000;
                            let nowTime = nowTimeGet(startTime+500,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                            
                            let ledRepeatTimeSplit = ledRepeatTime / 8;
                            let ledBasicColor1 = [ [ 255 , 0 , 0 ] , [ 255 , 50 , 0 ] ];
                            let ledBasicColor2 = [ [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[l][k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[l][k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 4 + 1 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 4 + 4 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[ ( l + 1 ) % 2 ][k] ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 100 , 0 ] ];
                            ledLapTimeSplit = ledRepeatTime * 2 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ( ledRepeatTime / 2 );
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                    },500);

                } else if ( key === '_' ) {
                    let startTime = Date.now();

                    /***** LED EMAKI7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI7);

                    function ledNumberEMAKI7() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 2800;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = 500;
                        let ledBasicColor = [ [ 255 , 180 , 0 ] , [ 255 , 80 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 205;
                        ledBasicColor = [ [ 255 , 50 , 0 ] , [ 220 , 0 , 255 ] ];

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
                        let movingLightAngleFadeTime = 500;

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
                        let movingLightColorFadeTime = 2000;

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

                }
            } else if ( mainNowPage === 2 ) {
                if ( key === 'f' ) {
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

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,100,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,100,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
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

                    movingLightSetTimeoutDelay[1] = 1800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberRURI2_2);

                        function movingLightNumberRURI2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {                            
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'g' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED EMAKI8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI8);

                    function ledNumberEMAKI8() {
                        let ledFadeTime = 200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 229 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 80 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);
                        
                        let ledArray = [ 2 , 0 , 1 , 2 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 2 , 1 , 0 , 2 , 0 , 2 , 0 , 1 , 1 , 0 , 1 , 2 , 0 , 1 , 1 , 1 , 2 , 0 , 1 , 1 , 0 , 2 , 1 , 0 , 0 , 2 , 1 , 0 , 2 , 0 , 0 , 2 , 2 , 1 , 1 , 2 , 2 ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ledArray[i-1]][k];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                    /***** ムービングライト EMAKI1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberEMAKI1_1);

                        function movingLightNumberEMAKI1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                }

                                movingLightAngleFadeChange(2,1,-40,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI1_2);

                        function movingLightNumberEMAKI1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'h' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED EMAKI7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberEMAKI7);

                    function ledNumberEMAKI7() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 2800;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledLapTimeSplit = 500;
                        let ledBasicColor = [ [ 255 , 180 , 0 ] , [ 255 , 80 , 0 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit / 2 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = 205;
                        ledBasicColor = [ [ 255 , 50 , 0 ] , [ 220 , 0 , 255 ] ];

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

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                }

                                movingLightAngleFadeChange(2,1,-40,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[0]);
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight1_2);

                        function movingLightNumberNight1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let fadeTime = 3000;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber , ledSetInterval , ledMyNumber );

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            ledColorChange(1,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            ledColorChange(2,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                        }
                    }

                    /***** 水中照明 RURI1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberRURI1);

                    function waterLightNumberRURI1() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
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
                                    movingLightAngleFadeChange(2,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }

                                movingLightAngleFadeChange(2,1,-40,60,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberNight4_2);

                        function movingLightNumberNight4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED EMAKI9 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberEMAKI9_1);
                        
                        function ledNumberEMAKI9_1() {
                            let ledFadeTime = 1600;
                            let ledRepeatTime = 5000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledBasicColor1 = [ 255 , 255 , 0 ];
                            let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 255 , 100 , 0 ] , [ 255 , 100 , 0 ] ];                        
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 6800;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberEMAKI1_1);
                        
                        function ledNumberEMAKI1_1() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledRepeatTime = 5000;
                            
                            let ledLapTimeSplit = 380;
                            let ledRepeatTimeSplit = ledRepeatTime / 5;
                            let ledBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] , [ 255 , 180 , 0 ] , [ 255 , 0 , 0 ] , [ 255 , 255 , 0 ] ];
        
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
                            
                            ledLapTimeSplit = 155;
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor1 = [ 255 , 150 , 0 ];
                            let ledBasicColor2 = [ [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 2 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                } else if ( key === 'k' ) {
                    let startTime = Date.now();

                    /***** ムービングライト EMAKI3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,60,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberEMAKI3_1);

                        function movingLightNumberEMAKI3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    if ( i >= 3 ) movingLightAngleFadeChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }

                                if ( nowTime[0] <= 100 ) for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);

                                movingLightAngleFadeChange(1,1,-100,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,2,10,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightAngleFadeTime,nowTime[0]);
                                //movingLightAngleFadeChange(2,5,30,65,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI3_2);

                        function movingLightNumberEMAKI3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                //movingLightColorChange(2,5,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 6000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberEMAKI3_3);

                        function movingLightNumberEMAKI3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                //movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);
                    
                } else if ( key === 'l' ) {
                    let startTime = Date.now();

                    /***** ムービングライト EMAKI4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,60,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberEMAKI4_1);

                        function movingLightNumberEMAKI4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    if ( i >= 3 ) movingLightAngleFadeChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }

                                if ( nowTime[0] <= 100 ) for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);

                                movingLightAngleFadeChange(1,1,-100,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,2,10,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,1,-40,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightAngleFadeTime,nowTime[0]);
                                //movingLightAngleFadeChange(2,5,30,65,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI4_2);

                        function movingLightNumberEMAKI4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 6500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberEMAKI4_3);

                        function movingLightNumberEMAKI4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,2,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);
                    
                } else if ( key === 'm' ) {
                    let startTime = Date.now();

                    /***** ムービングライト EMAKI5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,60,100);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberEMAKI5_1);

                        function movingLightNumberEMAKI5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }

                                if ( nowTime[0] <= 100 ) for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);

                                movingLightAngleFadeChange(2,1,-40,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-5,65,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,60,movingLightAngleFadeTime,nowTime[0]);
                                //movingLightAngleFadeChange(2,5,30,65,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 4000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberEMAKI5_2);

                        function movingLightNumberEMAKI5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 22000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberEMAKI5_3);

                        function movingLightNumberEMAKI5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 25000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberEMAKI5_4);

                        function movingLightNumberEMAKI5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);
                    
                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED EMAKI9 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberEMAKI9_1);
                        
                        function ledNumberEMAKI9_1() {
                            let ledFadeTime = 1600;
                            let ledRepeatTime = 5000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledBasicColor1 = [ 255 , 255 , 0 ];
                            let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 255 , 100 , 0 ] , [ 255 , 100 , 0 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 6800;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberEMAKI9_2);
                        
                        function ledNumberEMAKI9_2() {
                            let ledFadeTime = 1000;
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            
                            let ledLapTimeSplit = 555;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 80 , 0 ] , [ 180 , 255 , 0 ] ];

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
                            
                            ledLapTimeSplit = 230;
                            ledBasicColor = [ [ 250 , 240 , 255 ] , [ 255 , 80 , 0 ] , [ 255 , 255 , 0 ] ];

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

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 EMAKI1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberEMAKI1);
        
                    function logoboardLightNumberEMAKI1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 50 , 0 , 0 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 255 , 255 , 0 , 100 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 255 , 50 , 0 , 255 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 255 , 0 , 100 ];
                            else logoboardLightColor = [ 255 , 80 , 0 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** パーライト HF2 *****/
                    let parLightSetInterval = setInterval(parLightNumberHF2);

                    function parLightNumberHF2() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 200;
                        spotLightChange(0.5,spotFadeTime,startTime + 800);
                    },800);

                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** パーライト EMAKI1 *****/
                    let parLightSetInterval = setInterval(parLightNumberEMAKI1);

                    function parLightNumberEMAKI1() {
                        let parLightFadeTime = 5000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,100,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1500;
                        spotLightChange(0.5,spotFadeTime,startTime + 1800);
                    },1800);

                } else if ( subCode === 9 ) { //f9
                    let startTime = Date.now();

                    /***** パーライト EMAKI2 *****/
                    let parLightSetInterval = setInterval(parLightNumberEMAKI2);

                    function parLightNumberEMAKI2() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 4 === 2 ) parLightColor = [ 255 , 255 , 0 ];
                            else if ( i % 4 === 0 ) parLightColor = [ 0 , 255 , 0 ];
                            else parLightColor = [ 255 , 100 , 0 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 10 ) { //f10
                    let startTime = Date.now();

                    /***** パーライト EMAKI3 *****/
                    let parLightSetInterval = setInterval(parLightNumberEMAKI3);

                    function parLightNumberEMAKI3() {
                        let parLightFadeTime = 3500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,100,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2500;
                        spotLightChange(1,spotFadeTime,startTime + 1000);
                    },1000);

                } else if ( subCode === 11 ) { //f11
                    let startTime = Date.now();

                    /***** パーライト EMAKI4 *****/
                    let parLightSetInterval = setInterval(parLightNumberEMAKI4);

                    function parLightNumberEMAKI4() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,200,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 800);

                        /***** 客席照明 *****/
                        let audienceLightFadeTime = 700;
                        audienceLightChange(1,audienceLightFadeTime,startTime + 800);
                    },800);

                } else if ( subCode === 12 ) { //f12
                    let startTime = Date.now();

                    /***** パーライト defult *****/
                    let parLightSetInterval = setInterval(parLightNumberdefult);

                    function parLightNumberdefult() {
                        let parLightFadeTime = 4000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,0,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }
                    /***** スポットライト *****/
                    let spotFadeTime = 4200;
                    spotLightChange(0,spotFadeTime,startTime);

                    /***** 客席照明 *****/
                    let audienceLightFadeTime = 4000;
                    audienceLightChange(0,audienceLightFadeTime,startTime);

                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 EMAKI2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberEMAKI2);
        
                    function logoboardLightNumberEMAKI2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 50 , 0 , 0 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 255 , 255 , 0 , 255 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 0 , 180 , 0 , 50 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 255 , 0 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 255 , 150 , 0 , 0 ];
                            else logoboardLightColor = [ 255 , 50 , 0 , 50 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    setTimeout( function () {
                        /***** ステージライト *****/
                        stageLightChange(1,1000,startTime + 700);
                    },700);

                }
            }
    
        }
    }
});