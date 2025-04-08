jsSetting_Old("FunnyParty","FUNNY PARTY!!",1,2,2,2,2200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "FunnyParty" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED 25 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber25);

                    function ledNumber25() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 2500;
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
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTime / 3 * 2 ) % ledRepeatTime;

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

                    /***** ムービングライト FP1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100,3);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberFP1_1);

                        function movingLightNumberFP1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,150,50,255,0);
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 3500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;
                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[2] = setInterval(movingLightNumberFP1_2);

                        function movingLightNumberFP1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP1_3);

                        function movingLightNumberFP1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 6000;
                            let angleXYRadius = 200;
                            let angleXYCenter = 340;
                            let angleZRadius = 110;
                            let angleZCenter = 0;

                            let movingLightAngleDeg = 360 / movingLightAngleRepeatTime * nowTime[1];

                            let movingLightAngleRad = movingLightAngleDeg % 360 / 180 * Math.PI;
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                            
                            movingLightAngleRad = ( movingLightAngleDeg + 160 ) % 360 / 180 * Math.PI;
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 19700;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP1_4);

                        function movingLightNumberFP1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0);
                                    movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                }
                            }

                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 0 , 120 , 255 ] , [ 80 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 42000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP1_5);

                        function movingLightNumberFP1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 44000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP1_6);

                        function movingLightNumberFP1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 2.5 ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,220,0,255,1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,150,0,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 67000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP1_4);

                        function movingLightNumberFP1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0);
                                    movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                }
                            }

                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 0 , 120 , 255 ] , [ 80 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 89500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP1_5);

                        function movingLightNumberFP1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 91500;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP1_6);

                        function movingLightNumberFP1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 2.5 ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,220,0,255,1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,150,0,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 121000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberFP1_7);

                        function movingLightNumberFP1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberFP1_8);

                        function movingLightNumberFP1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let maxAngleZ = [ -30 , -120 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let angleZ;
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * ( i + 0.8 ) ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) /movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                                            
                                movingLightAngleChange(1,i,0,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 123000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberFP2_9);

                        function movingLightNumberFP2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,255,0,1);
                            }

                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 8;
                            let movingLightBasicColor = [ [ [ 0 , 255 , 180 ] , [ 0 , 180 , 255 ] ] , [ 0 , 100 , 255 ] ];
                            let movingLightColor = [];

                            movingLightColorJudgeTime = nowTime[0] % ( movingLightColorRepeatTimeSplit * 2 );
                            if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) {
                                movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[0][0][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[0][1][k];
                                }
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[1][k];
                            }

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 138000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[10] = setInterval(movingLightNumberFP1_10);

                        function movingLightNumberFP1_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 141000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP1_6);

                        function movingLightNumberFP1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 2.5 ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,220,0,255,1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,150,0,1);
                            }
                            
                        }
                        
                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 172000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberFP1_11);

                        function movingLightNumberFP1_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,150,0,255,1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 173000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 174000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP1_5);

                        function movingLightNumberFP1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 3000;
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
                } else if ( key === 'h' ) {
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
                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

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
                            let ledBasicColor = [ [ 255 , 0 , 240 ] , [ 240 , 220 , 255 ] ];
                            
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

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED 63 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber63);

                    function ledNumber63() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            if ( i % 2 === 0 ) ledColor = [ 255 , 255 , 0 ];
                            else ledColor = [ 220 , 150 , 255 ];

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            
                            if ( i % 2 === 0 ) ledColor = [ 255 , 150 , 0 ];
                            else ledColor = [ 255 , 255 , 0 ];

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 2800;
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
                } else if ( key === 'l' ) {
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

                    /***** 水中照明 MIYABI2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberMIYABI2);

                    function waterLightNumberMIYABI2() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,180,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                } else if ( key === 'm' ) {
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

                    /***** 水中照明 WP3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberWP3);

                    function waterLightNumberWP3() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,200,220,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト FP2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 500;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,17,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberFP2_1);

                        function movingLightNumberFP2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],10000,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,180,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,180,0,255,0);
                                    movingLightAngleChange(2,i,0,-10,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 40;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            let movingLightRotateDeg = 360 / 2500 * ( nowTime[0] % 2500 );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 2 ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                movingLightRotateChange(1,i,( (-1) ** ( i - 1 ) ) * movingLightRotateDeg);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 10000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[2] = setInterval(movingLightNumberFP2_2);

                        function movingLightNumberFP2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            }

                            let movingLightColorRepeatTime = 1200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightMaxOpacity = [ 0.2 , 1 ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * i ) % movingLightColorRepeatTime;

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

                    movingLightSetTimeoutDelay[2] = 14000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP2_3);

                        function movingLightNumberFP2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 15000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 16000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,7,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP2_4);

                        function movingLightNumberFP2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,150,0,0);

                                movingLightAngleChange(1,1,60,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,80,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,80,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,30,-80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 31500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP2_5);

                        function movingLightNumberFP2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);
                    
                    movingLightSetTimeoutDelay[6] = 34300;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP2_6);

                        function movingLightNumberFP2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 35800;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberFP2_7);

                        function movingLightNumberFP2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);
                    
                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン W *****/
                    waterCurtain("W");

                    /***** LED 49 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber49);

                    function ledNumber49() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 100 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber100);

                    function ledNumber100() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 4000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 0 , 0 ] ];
                        
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

                    /***** 水中照明 MIYABI3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberMIYABI3);

                    function waterLightNumberMIYABI3() {
                        let fadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        waterLightColorChange(1,255,200,0,nowTime[0],fadeTime);
                        waterLightColorChange(2,255,200,0,nowTime[0],fadeTime);
                        waterLightColorChange(3,150,0,255,nowTime[0],fadeTime);
                        waterLightColorChange(4,150,0,255,nowTime[0],fadeTime);
                        waterLightColorChange(5,150,0,255,nowTime[0],fadeTime);
                        waterLightColorChange(6,255,0,255,nowTime[0],fadeTime);
                        waterLightColorChange(7,255,0,150,nowTime[0],fadeTime);
                        waterLightColorChange(8,255,50,0,nowTime[0],fadeTime);
                        waterLightColorChange(9,255,120,0,nowTime[0],fadeTime);
                        waterLightColorChange(10,255,200,0,nowTime[0],fadeTime);
                        waterLightColorChange(11,255,200,0,nowTime[0],fadeTime,0,waterLightSetInterval);                    

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();

                    /***** ムービングライト FP3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 500;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100,3);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        movingLightSetInterval[0] = setInterval(movingLightNumberFP3_0);

                        function movingLightNumberFP3_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,150,0,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,0,255,0);

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberFP3_1);

                        function movingLightNumberFP3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],13500,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 70;
                            let angleXYCenter = 0;
                            let angleZRadius = 40;
                            let angleZCenter = 70;
                            let movingLightAngleLapTime = movingLightAngleRepeatTime / 4
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTime * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = movingLightAngleJudgeTime / movingLightAngleRepeatTime * 2 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberFP3_2);

                        function movingLightNumberFP3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],13500,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = -60;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad;

                                if ( movingLightAngleJudgeTime < 4000 ) movingLightAngleRad = ( 360 - 180 / 4000 * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                else movingLightAngleRad = ( 180 - 180 / 1000 * ( movingLightAngleJudgeTime - 4000 ) ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }                        
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 13500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP3_3);

                        function movingLightNumberFP3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 27000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP3_4);

                        function movingLightNumberFP3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 27500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP3_5);

                        function movingLightNumberFP3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 30000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP3_6);

                        function movingLightNumberFP3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 150 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 42500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberFP3_7);

                        function movingLightNumberFP3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 45000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberFP3_8);

                        function movingLightNumberFP3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 48500;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP3_6);

                        function movingLightNumberFP3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 150 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 52300;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberFP3_8);

                        function movingLightNumberFP3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 55800;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP3_6);

                        function movingLightNumberFP3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 150 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 57500;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberFP3_9);

                        function movingLightNumberFP3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            let movingLightColorRepeatTime = 120;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;
                            let movingLightColorOpacity = 0;

                            if ( movingLightColorJudgeTime >= 80 ) movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 58450;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberFP3_8);

                        function movingLightNumberFP3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }
                        
                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 59500;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberFP3_1);

                        function movingLightNumberFP3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 70;
                            let angleXYCenter = 0;
                            let angleZRadius = 40;
                            let angleZCenter = 70;
                            let movingLightAngleLapTime = movingLightAngleRepeatTime / 4
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTime * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = movingLightAngleJudgeTime / movingLightAngleRepeatTime * 2 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberFP3_2);

                        function movingLightNumberFP3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = -60;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad;

                                if ( movingLightAngleJudgeTime < 4000 ) movingLightAngleRad = ( 360 - 180 / 4000 * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                else movingLightAngleRad = ( 180 - 180 / 1000 * ( movingLightAngleJudgeTime - 4000 ) ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }                        
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP3_3);

                        function movingLightNumberFP3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,0,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 71000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP3_4);

                        function movingLightNumberFP3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 71500;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP3_5);

                        function movingLightNumberFP3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 72000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        movingLightSetInterval[10] = setInterval(movingLightNumberFP3_10);

                        function movingLightNumberFP3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTimeSplit = 500;

                            if ( nowTime[0] < movingLightColorRepeatTimeSplit * 4 ) {
                                let movingLightBasicColor = [ [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 255 , 0 , 255 ] , [ 0 , 0 , 0 ] ];

                                let l = Math.trunc( nowTime[0] / movingLightColorRepeatTimeSplit )
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            } else {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0);
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 77000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP3_6);

                        function movingLightNumberFP3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 150 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 89500;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberFP3_7);

                        function movingLightNumberFP3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 92000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberFP3_8);

                        function movingLightNumberFP3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 95500;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP3_6);

                        function movingLightNumberFP3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 150 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 99300;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberFP3_8);

                        function movingLightNumberFP3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 102800;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP3_6);

                        function movingLightNumberFP3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 150 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 104500;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberFP3_9);

                        function movingLightNumberFP3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            let movingLightColorRepeatTime = 120;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;
                            let movingLightColorOpacity = 0;

                            if ( movingLightColorJudgeTime >= 80 ) movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 105450;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        movingLightSetInterval[8] = setInterval(movingLightNumberFP3_8);

                        function movingLightNumberFP3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }
                        
                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 106500;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberFP3_1);

                        function movingLightNumberFP3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 70;
                            let angleXYCenter = 0;
                            let angleZRadius = 40;
                            let angleZCenter = 70;
                            let movingLightAngleLapTime = movingLightAngleRepeatTime / 4
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTime * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = movingLightAngleJudgeTime / movingLightAngleRepeatTime * 2 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberFP3_2);

                        function movingLightNumberFP3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = -60;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad;

                                if ( movingLightAngleJudgeTime < 4000 ) movingLightAngleRad = ( 360 - 180 / 4000 * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                else movingLightAngleRad = ( 180 - 180 / 1000 * ( movingLightAngleJudgeTime - 4000 ) ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }                        
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP3_3);

                        function movingLightNumberFP3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,0,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 118000;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP3_4);

                        function movingLightNumberFP3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }
                        
                    },movingLightSetTimeoutDelay[25]);

                    movingLightSetTimeoutDelay[26] = 118500;
                    movingLightSetTimeout[26] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP3_5);

                        function movingLightNumberFP3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[26]);

                    movingLightSetTimeoutDelay[27] = 119000;
                    movingLightSetTimeout[27] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        movingLightSetInterval[10] = setInterval(movingLightNumberFP3_10);

                        function movingLightNumberFP3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[27],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTimeSplit = 500;

                            if ( nowTime[0] < movingLightColorRepeatTimeSplit * 4 ) {
                                let movingLightBasicColor = [ [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 255 , 0 , 255 ] , [ 0 , 0 , 0 ] ];

                                let l = Math.trunc( nowTime[0] / movingLightColorRepeatTimeSplit )
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            } else {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0);
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[27]);

                    movingLightSetTimeoutDelay[28] = 121000;
                    movingLightSetTimeout[28] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,17,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,9,60,70,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberFP3_11);

                        function movingLightNumberFP3_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[28],6000,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,( (-1) ** ( Math.trunc( ( i - 1 ) / 2 ) % 2 ) ) * 5,85,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,255,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,0);
                            }

                            let movingLightAngleRepeatTime = 11000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 40;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 2 ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[12] = setInterval(movingLightNumberFP3_12);

                        function movingLightNumberFP3_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[28],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            let movingLightRotateDeg = 360 / 2500 * ( nowTime[0] % 2500 );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightRotateChange(1,i,( (-1) ** ( i - 1 ) ) * movingLightRotateDeg);

                            movingLightRotateDeg = -360 / 30000 * ( nowTime[0] % 30000 );

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg + 60 * ( 1 - i % 2 ) );
                            movingLightTripleRotateChange(2,5,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[28]);

                    movingLightSetTimeoutDelay[29] = 127000;
                    movingLightSetTimeout[29] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP3_3);

                        function movingLightNumberFP3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[29]);

                    movingLightSetTimeoutDelay[30] = 147000;
                    movingLightSetTimeout[30] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[13] = setInterval(movingLightNumberFP3_13);

                        function movingLightNumberFP3_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    if ( i <= 2 ) movingLightAngleChange(1,i,-100,-80,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(1,i,-50,-80,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[30]);

                    movingLightSetTimeoutDelay[31] = 149000;
                    movingLightSetTimeout[31] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100,3);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,20,60,100);

                        let movingLightColorFadeTime = 700;

                        movingLightSetInterval[14] = setInterval(movingLightNumberFP3_14);

                        function movingLightNumberFP3_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[31],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightGradientColorChange(1,i,150,0,255,0,0,0,255,100,135,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            }

                            let movingLightRotateDeg = 360 / 22000 * ( nowTime[0] % 22000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[31]);

                    movingLightSetTimeoutDelay[32] = 163000;
                    movingLightSetTimeout[32] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[15] = setInterval(movingLightNumberFP3_15);

                        function movingLightNumberFP3_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[32],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 3;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 0 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;
                                let l = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit );
                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[32]);

                    movingLightSetTimeoutDelay[33] = 177000;
                    movingLightSetTimeout[33] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[15]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP3_5);

                        function movingLightNumberFP3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[33],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(1,i,0,255,0,0);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,0,0,0,0);
                                }
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[33]);

                    movingLightSetTimeoutDelay[34] = 177500;
                    movingLightSetTimeout[34] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100,3);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        movingLightSetInterval[16] = setInterval(movingLightNumberFP3_16);

                        function movingLightNumberFP3_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[34],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 0 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[34]);

                    movingLightSetTimeoutDelay[35] = 185000;
                    movingLightSetTimeout[35] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberFP3_6);

                        function movingLightNumberFP3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[35],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 150 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let l = 0;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime >= movingLightColorRepeatTimeSplit * 3 ) l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[35]);

                    movingLightSetTimeoutDelay[36] = 190000;
                    movingLightSetTimeout[36] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        movingLightSetInterval[17] = setInterval(movingLightNumberFP3_17);

                        function movingLightNumberFP3_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[36],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,150,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[36]);

                    movingLightSetTimeoutDelay[37] = 190200;
                    movingLightSetTimeout[37] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberFP3_7);

                        function movingLightNumberFP3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[37],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[37]);

                    movingLightSetTimeoutDelay[38] = 201000;
                    movingLightSetTimeout[38] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[1] = setInterval(movingLightNumberFP3_1);

                        function movingLightNumberFP3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[38],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 70;
                            let angleXYCenter = 0;
                            let angleZRadius = 40;
                            let angleZCenter = 70;
                            let movingLightAngleLapTime = movingLightAngleRepeatTime / 4
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTime * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = movingLightAngleJudgeTime / movingLightAngleRepeatTime * 2 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberFP3_2);

                        function movingLightNumberFP3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[38],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = -60;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 1 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad;

                                if ( movingLightAngleJudgeTime < 4000 ) movingLightAngleRad = ( 360 - 180 / 4000 * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                else movingLightAngleRad = ( 180 - 180 / 1000 * ( movingLightAngleJudgeTime - 4000 ) ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }                        
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP3_3);

                        function movingLightNumberFP3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[38],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,0,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[38]);

                    movingLightSetTimeoutDelay[39] = 212500;
                    movingLightSetTimeout[39] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP3_4);

                        function movingLightNumberFP3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[39],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[39]);

                    movingLightSetTimeoutDelay[40] = 213000;
                    movingLightSetTimeout[40] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberFP3_5);

                        function movingLightNumberFP3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[40],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[40]);

                    movingLightSetTimeoutDelay[41] = 213500;
                    movingLightSetTimeout[41] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        movingLightSetInterval[10] = setInterval(movingLightNumberFP3_10);

                        function movingLightNumberFP3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[41],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTimeSplit = 500;

                            if ( nowTime[0] < movingLightColorRepeatTimeSplit * 4 ) {
                                let movingLightBasicColor = [ [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 255 , 0 , 255 ] , [ 0 , 0 , 0 ] ];

                                let l = Math.trunc( nowTime[0] / movingLightColorRepeatTimeSplit )
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            } else {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0);
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[41]);

                    movingLightSetTimeoutDelay[42] = 215500;
                    movingLightSetTimeout[42] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2600;
                        let movingLightAngleFadeTime = 2600;

                        movingLightSetInterval[18] = setInterval(movingLightNumberFP3_18);

                        function movingLightNumberFP3_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[42],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,200,0,1,movingLightColorFadeTime,nowTime[0],1);
                                    movingLightAngleChange(2,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[42]);

                    movingLightSetTimeoutDelay[43] = 221500;
                    movingLightSetTimeout[43] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[19] = setInterval(movingLightNumberFP3_19);

                        function movingLightNumberFP3_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[43],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 7;
                            let movingLightBasicColor = [ [ 150 , 0 , 255 ] , [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 0 , 200 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 7 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 7 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[43]);

                    movingLightSetTimeoutDelay[44] = 229000;
                    movingLightSetTimeout[44] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[19]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;

                        movingLightSetInterval[20] = setInterval(movingLightNumberFP3_20);

                        function movingLightNumberFP3_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[44],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,200,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[20]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[44]);

                    movingLightSetTimeoutDelay[45] = 234000;
                    movingLightSetTimeout[45] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1600;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP3_4);

                        function movingLightNumberFP3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[45],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[45]);
                    

                } else if ( key === 'q' ) {
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

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

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

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン V *****/
                    waterCurtain("V");

                    /***** LED 24 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber24);

                    function ledNumber24() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 150 , 0 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTime / 2 ) % ledRepeatTime;

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
                            let j = ledNumberOutside - i;
                            let ledColor = [];
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

                } else if ( key === 'u' ) {
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

                } else if ( key === 'v' ) {
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

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED 11 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber11);

                    function ledNumber11() {
                        let ledFadeTime = 3000;
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

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

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

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AJ *****/
                    waterCurtain("AJ");

                    /***** LED 12 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber12);

                    function ledNumber12() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber , ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 1400;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 200 , 0 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
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
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

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
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtain("AO");

                    /***** LED 58 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber58);

                    function ledNumber58() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 5;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 180 , 255 ] , [ 255 , 50 , 180 ] , [ 255 , 0 , 0 ] , [ 255 , 180 , 255 ] , [ 255 , 180 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;
    
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
    
                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
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
    
                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 5 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
    
                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

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
                            let ledBasicColor = [ [ 255 , 0 , 240 ] , [ 240 , 220 , 255 ] ];
                            
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

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン H *****/
                    waterCurtain("H");

                    /***** LED 8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber8);

                    function ledNumber8() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,3000,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1700;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 150 , 0 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

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

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber4);

                    function ledNumber4() {
                        let ledFadeTime = 3000;
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

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン B *****/
                    waterCurtain("B");

                    /***** LED 1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber1);

                    function ledNumber1() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber , ledSetInterval , ledMyNumber );
                        let ledColor = [];

                        if ( nowTime[1] < 1500 ) ledColor = [ 255 , 0 , 0 ];
                        else if ( nowTime[1] < 2970 ) ledColor = [ 255 , 255 , 0 ];
                        else if ( nowTime[1] < 4500 ) ledColor = [ 0 , 255 , 0 ];
                        else if ( nowTime[1] < 5740 ) ledColor = [ 0 , 0 , 255 ];
                        else ledColor = [ 255 , 255 , 255 ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                    }

                } else if ( key === ',' ) {
                    let startTime = Date.now();

                    /***** ムービングライト FP4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100,3);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberFP4_1);

                        function movingLightNumberFP4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],2000,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,255,0,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightAngleRepeatTime = 8000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 40;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i + 2 ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberFP4_2);

                        function movingLightNumberFP4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            }

                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 0 , 200 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( 4 - i ) ) % movingLightColorRepeatTime;

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

                    movingLightSetTimeoutDelay[2] = 52000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberFP4_3);

                        function movingLightNumberFP4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 54500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberFP4_4);

                        function movingLightNumberFP4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
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
    
                    /***** 看板照明 FP1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberFP1);
        
                    function logoboardLightNumberFP1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];
    
                            if ( i <= 12 ) logoboardLightColor = [ 150 , 0 , 255 , 0 ];
                            else if ( i <= 24 ) logoboardLightColor = [ 255 , 200 , 0 , 0 ];
                            else if ( i <= 36 ) logoboardLightColor = [ 255 , 120 , 200 , 0 ];
                            else logoboardLightColor = [ 255 , 150 , 0 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 FP2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberFP2);
        
                    function logoboardLightNumberFP2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 0 , 220 , 255 , 0 ];
                            else logoboardLightColor = [ 255 , 50 , 200 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                    /***** パーライト FP1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP1);
    
                    function parLightNumberFP1() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                                
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 300);
    
                        /***** ステージライト *****/
                        let stageFadeTime = 700;
                        stageLightChange(1,stageFadeTime,startTime + 300);
                    },300);
    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 FP3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberFP3);
        
                    function logoboardLightNumberFP3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;
    
                            if ( j <= 6 ) logoboardLightColor = [ 255 , 200 , 0 , 100 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 220 , 0 , 255 , 100 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 150 , 255 , 255 ];
                            else logoboardLightColor = [ 0 , 150 , 255 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                    /***** パーライト FP2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP2);
    
                    function parLightNumberFP2() {
                        let parLightFadeTime = 2800;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 255 , 0 , 0 ];
                            else parLightColor = [ 255 , 0 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1800;
                        spotLightChange(1,spotFadeTime,startTime + 1000);
                    },1000);
    
                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 defult *****/
                    logoboardLightOFF(800);
    
                    /***** パーライト defult *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP2);
    
                    function parLightNumberFP2() {
                        let parLightFadeTime = 800;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,0,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 500;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);
    
                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();
                    
                    /***** 客席照明 *****/               
                    let audienceLightFadeTime = 1900;
    
                    let audienceLightSetTimeoutDelay = [];
                    audienceLightSetTimeoutDelay[0] = 0
                    audienceLightSetTimeout[0] = setTimeout( function () {
                        audienceLightChange(0,audienceLightFadeTime,startTime + audienceLightSetTimeoutDelay[0],0);
                    },audienceLightSetTimeoutDelay[0]);
    
                    audienceLightSetTimeoutDelay[1] = 1900;
                    audienceLightSetTimeout[1] = setTimeout( function () {
                        audienceLightChange(1,audienceLightFadeTime,startTime + audienceLightSetTimeoutDelay[1],0);
                    },audienceLightSetTimeoutDelay[1]);
    
                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 FP3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 100;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberFP3);
        
                    function logoboardLightNumberFP3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;
    
                            if ( j <= 6 ) logoboardLightColor = [ 255 , 200 , 0 , 100 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 220 , 0 , 255 , 100 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 150 , 255 , 255 ];
                            else logoboardLightColor = [ 0 , 150 , 255 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                    /***** パーライト FP2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP2);
    
                    function parLightNumberFP2() {
                        let parLightFadeTime = 100;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 255 , 0 , 0 ];
                            else parLightColor = [ 255 , 0 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }
    
                    /***** 客席照明 *****/
                    let audienceLightFadeTime = 100;
                    audienceLightChange(1,audienceLightFadeTime,startTime);
    
                } else if ( subCode === 12 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 FP4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 4000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberFP4);
        
                    function logoboardLightNumberFP4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;
    
                            if ( j <= 6 ) logoboardLightColor = [ 255 , 150 , 0 , 255 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 220 , 0 , 255 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 255 , 150 , 0 , 255 ];
                            else logoboardLightColor = [ 220 , 0 , 255 , 255 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                    /***** パーライト FP3 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberFP3);
    
                    function parLightNumberFP3() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 255 , 255 , 0 ];
                            else parLightColor = [ 255 , 0 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                        }
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);
    
                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 FP5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1600;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberFP5);
        
                    function logoboardLightNumberFP5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 50 , 0 , 0 ];
                            else logoboardLightColor = [ 0 , 0 , 255 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 FP6 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberFP6);
        
                    function logoboardLightNumberFP6() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 3000;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 6;
                        let logoboardRepeatTimeSplit2 = logoboardRepeatTime / 5;
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [ 0 , 0 , 0 ];
                            let logoboardLapTimeSplit = 0;
    
                            if ( i <= 15 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( i + 8 ) / 3 );
                            else if ( i <= 27 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( 27 - i ) / 3 );
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( 48 - i ) / 3 );
    
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
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],0);
                        }
                    }
                    
                }
            }
        } else if ( dnNowSelect === 1 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 DoHN1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN1);

                    function waterLightNumberDoHN1() {
                        let fadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,100,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();

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

                } else if ( key === 'h' ) {
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

                } else if ( key === 'i' ) {
                    let startTime = Date.now();

                    /***** ムービングライト DoHN1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN1_1);

                        function movingLightNumberDoHN1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,100,0,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightAngleRepeatTime = 13000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = 100;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( i - 1 ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1200;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN1_2);

                        function movingLightNumberDoHN1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 38500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDoHN1_3);

                        function movingLightNumberDoHN1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,-45,movingLightAngleFadeTime,nowTime[0])
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 41300;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[4] = setInterval(movingLightNumberDoHN1_4);

                        function movingLightNumberDoHN1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3300;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightMaxOpacity = [ [ 0.2 , 0.2 , 0.2 ] , [ 1 , 1 , 0.5 ] ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = nowTime[0] + movingLightColorLapTimeSplit * ( i + 2 );
                                let j = Math.trunc( movingLightColorJudgeTime / movingLightColorRepeatTime ) % 3;
                                movingLightColorJudgeTime %= movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l][j] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ][j] - movingLightMaxOpacity[l][j] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,255,255,255,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberDoHN1_5);

                        function movingLightNumberDoHN1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3300;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = 3000;
                            let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 100 , 0 , 255 ] , [ 0 , 255 , 0 ] ];
                            let movingLightMaxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let k = i - 2;
                                if ( k < 0 ) k += 4;
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = nowTime[1] + movingLightColorLapTimeSplit * k;
                                let j = Math.trunc( movingLightColorJudgeTime / movingLightColorRepeatTime ) % 3;
                                movingLightColorJudgeTime %= movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightBasicColor[j][0],movingLightBasicColor[j][1],movingLightBasicColor[j][2],movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 70000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberDoHN1_6);

                        function movingLightNumberDoHN1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 70300;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[7] = setInterval(movingLightNumberDoHN1_7);

                        function movingLightNumberDoHN1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);
                    
                    movingLightSetTimeoutDelay[6] = 72500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1100;

                        movingLightSetInterval[8] = setInterval(movingLightNumberDoHN1_8);

                        function movingLightNumberDoHN1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);
                    
                } else if ( key === 'j' ) {
                    let startTime = Date.now();

                    /***** 水中照明 DoHN2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN2);

                    function waterLightNumberDoHN2() {
                        let waterLightFadeTime = 300;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 4000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 6;
                        let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                        let waterLightBasicColor = [ [ 100 , 0 , 255 ] , [ 0 , 0 , 0 ] ];

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let waterLightColor = [];

                            let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) ) % waterLightRepeatTime;

                            if ( waterLightJudgeTime < waterLightRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTimeSplit * waterLightJudgeTime;
                            } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k];
                            } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * 2 );
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k];
                            }
                            
                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }
                    
                } else if ( key === 'k' ) {
                    let startTime = Date.now();

                    /***** 水中照明 DoHN3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN3);

                    function waterLightNumberDoHN3() {
                        let waterLightFadeTime = 5000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 38000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 5;
                        let waterLightColorChangeTime = 3500;
                        let waterLightBasicColor = [ [ 0 , 100 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 150 , 0 , 255 ] , [ 0 , 0 , 255 ] ];

                        let waterLightColor = [];
                        let waterLightJudgeTime = nowTime[1] % waterLightRepeatTime;

                        for ( var l = 0 ; l < 5 ; l++ ) {
                            if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) - waterLightColorChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k];
                                break;
                            } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 5 ][k] - waterLightBasicColor[l][k] ) / waterLightColorChangeTime * ( waterLightJudgeTime - waterLightRepeatTimeSplit * ( l + 1 ) + waterLightColorChangeTime );
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                    }

                    /***** ムービングライト DoHN2 *****/
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
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN2_1);

                        function movingLightNumberDoHN2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,150,0,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,-35,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN2_2);

                        function movingLightNumberDoHN2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);
                    
                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン J *****/
                    waterCurtain("J");

                    /***** LED DoHN1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDoHN1);

                    function ledNumberDoHN1() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,180,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,180,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BL *****/
                    waterCurtain("BL");

                    /***** LED 91 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber91);

                    function ledNumber91() {
                        let ledFadeTime = 2800;
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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AJ *****/
                    waterCurtain("AJ");

                    /***** LED FP1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberFP1);

                    function ledNumberFP1() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 DoHN4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN4);

                    function waterLightNumberDoHN4() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,80,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === 'r' ) {
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

                    /***** ムービングライト DoHN3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN3_1);

                        function movingLightNumberDoHN3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,-35,movingLightColorFadeTime,nowTime[0]);
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

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED 50 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber50);

                    function ledNumber50() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,200,140,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,220,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト DoHN2 *****/
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
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN2_1);

                        function movingLightNumberDoHN2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,150,0,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,-35,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN2_2);

                        function movingLightNumberDoHN2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 't' ) {
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
                    
                } else if ( key === 'u' ) {
                    let startTime = Date.now();

                    /***** 水中照明 DoHN5 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN5);

                    function waterLightNumberDoHN5() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,200,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト DoHN4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 500;

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN4_1);

                        function movingLightNumberDoHN4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                    for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,200,0,255,0);
                                    movingLightColorChange(2,5,0,0,0,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,-35,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleFadeChange(2,i,0,-10,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN4_2);

                        function movingLightNumberDoHN4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = [ 80 , 720 , 1000 ];
                            let movingLightColorRepeatTimeSplit2 = 90;
                            let movingLightColorJudgeTime = nowTime[1] % movingLightColorRepeatTime;
                            let movingLightMaxOpacity = [ 0.3 , 0.5 ];
                            let movingLightColorOpacity;

                            if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit[0] ) {
                                movingLightColorOpacity = 1;
                            } else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit[0] + movingLightColorRepeatTimeSplit[1] ) {
                                movingLightColorJudgeTime = ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit[0] ) % ( movingLightColorRepeatTimeSplit2 * 2 );

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit2 * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit2 * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit2 * l );
                                        break;
                                    }
                                }
                            } else {
                                movingLightColorJudgeTime -= ( movingLightColorRepeatTimeSplit[0] + movingLightColorRepeatTimeSplit[1] );
                                movingLightColorOpacity = movingLightMaxOpacity[0] + ( 1 - movingLightMaxOpacity[0] ) / movingLightColorRepeatTimeSplit[2] * movingLightColorJudgeTime;
                            }

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 15400;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDoHN4_3);

                        function movingLightNumberDoHN4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 31000;
                    movingLightSetTimeout[3] = setTimeout( function() {

                        movingLightSetInterval[4] = setInterval(movingLightNumberDoHN4_4);

                        function movingLightNumberDoHN4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = [ 200 , 800 ];
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightMaxOpacity = [ 0.2 , 1 ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit[l] ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit[l] * movingLightColorJudgeTime;
                                        break;
                                    }
                                    movingLightColorJudgeTime -= movingLightColorRepeatTimeSplit[l];
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);
                    
                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'w' ) {
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

                    /***** ムービングライト DoHN5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1200;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN5_1);

                        function movingLightNumberDoHN5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,120,0,255,0);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,120,0,255,0);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1200;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN5_2);

                        function movingLightNumberDoHN5_2() {
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
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'y' ) {
                    let startTime = Date.now();

                    /***** ムービングライト DoHN6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN6_1);

                        function movingLightNumberDoHN6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN6_2);

                        function movingLightNumberDoHN6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,150,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 2000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberDoHN6_3);

                        function movingLightNumberDoHN6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED 8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber8);

                    function ledNumber8() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,3000,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1700;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 150 , 0 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト DoHN7 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN7_1);

                        function movingLightNumberDoHN7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN7_2);

                        function movingLightNumberDoHN7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === '[' ) {
                    let startTime = Date.now();

                    /***** ムービングライト DoHN8 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightColorFadeTime = 2000;
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN8_1);

                        function movingLightNumberDoHN8_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,0,0,1,movingLightColorFadeTime,nowTime[0],1);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,0,0,1,movingLightColorFadeTime,nowTime[0],1);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン H *****/
                    waterCurtain("H");

                    /***** LED 8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber8);

                    function ledNumber8() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,3000,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1700;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 150 , 0 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === ':' ) {
                    let startTime = Date.now();

                    /***** ムービングライト DoHN9 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN9_1);

                        function movingLightNumberDoHN9_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === ']' ) {
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
                    
                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 100 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber100);

                    function ledNumber100() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 4000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 0 , 0 ] ];
                        
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

                } else if ( key === '.' ) {
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

                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED DoHN3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDoNH3);

                    function ledNumberDoNH3() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1300;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 100 , 0 , 120 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 255 ] ];
                        let l = Math.trunc ( nowTime[1] / ledRepeatTimeSplit ) % 3;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                    /***** ムービングライト Night2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1800;

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

                    movingLightSetTimeoutDelay[1] = 1800;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

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

                } else if ( key === '_' || code === 226 ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                }
            } else if ( mainNowPage === 2 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber8);

                    function ledNumber8() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,3000,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1700;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 150 , 0 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColor = [];
                            let ledJudgeTime = ( ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval);
                        }

                    }

                } else if ( key === 'g' ) {
                    let startTime = Date.now();

                    /***** 水中照明 BCP3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBCP3);

                    function waterLightNumberBCP3() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,150,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト DoHN10 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN10_1);

                        function movingLightNumberDoHN10_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,5,110,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN10_2);

                        function movingLightNumberDoHN10_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 80000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let angleMaxXY = [ -270 , 270 ];
                            let angleXY;
                            let movingLightAngleJudgeTime = 0;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                    angleXY = angleMaxXY[l] + ( angleMaxXY[ ( l + 1 ) % 2 ] - angleMaxXY[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,-70,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'h' ) {
                    let startTime = Date.now();

                    /***** ムービングライト DoHN11 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 2000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,80,70,100,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,14,80,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN11_1);

                        function movingLightNumberDoHN11_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightColorChange(1,1,255,0,255,0);
                                movingLightColorChange(1,2,255,255,0,0);
                                movingLightColorChange(1,3,0,255,0,0);
                                movingLightColorChange(1,4,0,150,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                                }

                                movingLightColorChange(2,5,255,255,255,0);
                                movingLightAngleChange(2,5,5,110,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberDoHN11_2);

                        function movingLightNumberDoHN11_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],16000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 80000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let angleMaxXY = [ -270 , 270 ];
                            let angleXY;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightRotateDeg = 360 / 7500 * ( nowTime[0] % 7500 );

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                    angleXY = angleMaxXY[l] + ( angleMaxXY[ ( l + 1 ) % 2 ] - angleMaxXY[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                movingLightAngleChange(1,i,angleXY,-70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberDoHN11_3);

                        function movingLightNumberDoHN11_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 20000 * ( nowTime[0] % 20000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberDoHN11_4);

                        function movingLightNumberDoHN11_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 16000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDoHN11_5);

                        function movingLightNumberDoHN11_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 155700;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberDoHN11_6);

                        function movingLightNumberDoHN11_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 156700;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,45,100,100);

                        let movingLightAngleFadeTime = 1300;

                        movingLightSetInterval[7] = setInterval(movingLightNumberDoHN11_7);

                        function movingLightNumberDoHN11_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberDoHN11_8);

                        function movingLightNumberDoHN11_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * ( nowTime[0] % 1000 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 158000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberDoHN11_5);

                        function movingLightNumberDoHN11_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);
                    
                    movingLightSetTimeoutDelay[6] = 161000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberDoHN11_9);

                        function movingLightNumberDoHN11_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 8;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;
                            let movingLightChangeTime = 200;
                            let movingLightColor = [ [ 0 , 0 , 255 ] , [ 255 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;
                                let j = Math.trunc( movingLightJudgeTime / movingLightColorRepeatTimeSplit );
                            
                                movingLightColorChange(1,i,movingLightColor[j][0],movingLightColor[j][1],movingLightColor[j][2],1,movingLightChangeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);
                    
                } else if ( key === 'i' ) {
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
                    
                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtain("AO");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 2800;
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
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");
    
                    /***** LED 25 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber25);
    
                    function ledNumber25() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let ledRepeatTime = 2500;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        
                        ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
    
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
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTime / 3 * 2 ) % ledRepeatTime;
    
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
                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

                    /***** LED DoHN2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDoHN2);

                    function ledNumberDoHN2() {
                        let ledFadeTime = 2000;
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
                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED 27 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber27);

                    function ledNumber27() {
                        let ledFadeTime = 2800;
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
                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber4);

                    function ledNumber4() {
                        let ledFadeTime = 3000;
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

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 0 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber0);

                    function ledNumber0() {
                        let ledFadeTime = 0;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト DoHN12 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1100;

                        movingLightSetInterval[1] = setInterval(movingLightNumberDoHN12_1);

                        function movingLightNumberDoHN12_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** 水中照明 DoHN5 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN5);

                    function waterLightNumberDoHN5() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,200,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 DoHN1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1600;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDoHN1);
        
                    function logoboardLightNumberDoHN1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( ( i - 1 ) % 12 < 3 || ( i - 1 ) % 12 >= 9 ) logoboardLightColor = [ 150 , 0 , 255 , 50 ];
                            else logoboardLightColor = [ 50 , 50 , 255 , 100 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 DoHN2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDoHN2);
        
                    function logoboardLightNumberDoHN2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 80 , 0 , 0 ];
                            else logoboardLightColor = [ 0 , 255 , 50 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                    /***** パーライト DoHN1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDoHN1);
    
                    function parLightNumberDoHN1() {
                        let parLightFadeTime = 3000;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,100,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2300;
                        spotLightChange(1,spotFadeTime,startTime + 700);
                    },700);
    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();
    
                    /***** パーライト DoHN2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDoHN2);
    
                    function parLightNumberDoHN2() {
                        let parLightFadeTime = 2000;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,200,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                    }
    
                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();
    
                    /***** パーライト DoHN3 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDoHN3);
    
                    function parLightNumberDoHN3() {
                        let parLightFadeTime = 1400;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,255,150,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                    }
    
                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();
    
                    /***** スポットライト *****/
                    let spotFadeTime = 300;
                    spotLightChange(1,spotFadeTime,startTime);
                    
                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();
                    
                    /***** 客席照明 *****/               
                    let audienceLightFadeTime = 1400;
    
                    let audienceLightSetTimeoutDelay = [];
                    audienceLightSetTimeoutDelay[0] = 0
                    audienceLightSetTimeout[0] = setTimeout( function () {
                        audienceLightChange(1,audienceLightFadeTime,startTime + audienceLightSetTimeoutDelay[0],0);
                    },audienceLightSetTimeoutDelay[0]);
    
                    audienceLightSetTimeoutDelay[1] = 1400;
                    audienceLightSetTimeout[1] = setTimeout( function () {
                        audienceLightChange(0,audienceLightFadeTime,startTime + audienceLightSetTimeoutDelay[1],0);
                    },audienceLightSetTimeoutDelay[1]);
    
                } else if ( subCode === 12 ) { 
                    let startTime = Date.now();
    
                    /***** パーライト DoHN4 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDoHN4);
    
                    function parLightNumberDoHN4() {
                        let parLightFadeTime = 1400;
                        var nowTime = nowTimeGet(startTime,0);
    
                        parLightColorFadeChange(1,0,200,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(2,0,255,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(3,255,150,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(4,255,80,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(5,255,0,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(6,255,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(7,150,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(8,80,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
    
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 400);
                    },400);
    
                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 DoHN3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2600;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDoHN3);
        
                    function logoboardLightNumberDoHN3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 200 , 0 , 150 ];
                            else logoboardLightColor = [ 50 , 150 , 255 , 50 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                    /***** パーライト DoHN5 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDoHN5);
    
                    function parLightNumberDoHN5() {
                        let parLightFadeTime = 2600;
                        var nowTime = nowTimeGet(startTime,0);
    
                        parLightColorFadeChange(1,200,150,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(2,255,200,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(3,255,150,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(4,255,80,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(5,255,120,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(6,255,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(7,255,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        parLightColorFadeChange(8,255,0,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1600;
                        spotLightChange(1,spotFadeTime,startTime + 1000);
                    },1000);
    
                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();
    
                    /***** パーライト DoHN6 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDoHN6);
    
                    function parLightNumberDoHN6() {
                        let parLightFadeTime = 1200;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,80,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                    }
    
                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);
    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 defult *****/
                    logoboardLightOFF(400);
    
                    /***** パーライト defult *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDefult);
    
                    function parLightNumberDefult() {
                        let parLightFadeTime = 500;
                        var nowTime = nowTimeGet(startTime,0);
    
                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,0,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                    }
    
                    /***** スポットライト *****/
                    let spotFadeTime = 1800;
                    spotLightChange(0,spotFadeTime,startTime);
    
                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 DoHN4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberDoHN4);
        
                    function logoboardLightNumberDoHN4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 80 , 0 , 0 ];
                            else logoboardLightColor = [ 150 , 0 , 255 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
                    
                    setTimeout( function () {
                        /***** ステージライト *****/
                    stageLightChange(1,1500,startTime + 500);
                    },500);

                }
            }
        }
    }
});