let Y2023Special1_Music = [ [ 0 ] , [ 2 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] ];

jsSetting("2023Special1",2023,"特別","2023 Special 1",0,0,0,0,0,"沙花叉クロヱとびしょ濡れ水族館",2,2,Y2023Special1_Music,"https://script.google.com/macros/s/AKfycbxFzH-QBI9Ee-QjbMNRc-wBTTojoBtOKJj8jAk0YkVhOKvE12QksZjwJTwZFjNKwCarJA/exec",3200,10,0);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "2023Special1" ) {
        if ( dnNowSelect === 1 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK1);

                    function ledNumberSK1() {
                        let ledFadeTime = 3000;
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

                    /***** 水中照明 SK1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSK1);

                    function waterLightNumberSK1() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,220,150,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }
    
                    /***** 看板照明 SK1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSK1);
        
                    function logoboardLightNumberSK1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 0 , 50 , 0 ];
                            else if ( j < 9 ) logoboardLightColor = [ 255 , 100 , 120 , 0 ];
                            else logoboardLightColor = [ 150 , 100 , 255 , 255 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( key === 'g' ) {
                    let startTime = Date.now();

                    /***** 水中照明 SK2 *****/
                    waterLightActualSetTimeout = setTimeout( function() {
                        let waterLightMyNumber = waterLightSetting();
                        let waterLightSetInterval = setInterval(waterLightNumberSK2);

                        function waterLightNumberSK2() {
                            let fadeTime = 2300;
                            let nowTime = nowTimeGet(startTime+2000,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,120,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    },2000);

                    /***** 看板照明 defult *****/
                    logoboardLightOFF(4000);

                    /***** ムービングライト SK1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,100,100);
                        movingLightPictureChange(2,5,0,30,100);
                        
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSK1_1);

                        function movingLightNumberSK1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightColorChange(1,1,255,255,255,0);
                                movingLightColorChange(1,2,255,255,0,0);
                                movingLightColorChange(1,3,255,0,255,0);
                                movingLightColorChange(1,4,0,150,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,100,180,255,0);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK1_2);

                        function movingLightNumberSK1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],12990,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 7500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 2 , 1 , 3 , 0 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            movingLightAngleRepeatTime = 10000;
                            let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 2 ) % movingLightAngleRepeatTime;

                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                        
                            movingLightAngleChange(2,5,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberSK1_3);

                        function movingLightNumberSK1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 13000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK1_0);

                        function movingLightNumberSK1_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,200,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK1_4);

                        function movingLightNumberSK1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorChangeTime = 200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 0 , 150 , 255 ] , [ 255 , 120 , 200 ] ];
                            let movingLightColor = [];
                            let movingLightJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                    break;
                                }
                            }

                            movingLightColorChange(2,5,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 27000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSK1_5);

                        function movingLightNumberSK1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,100,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 27800;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2200;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK1_6);

                        function movingLightNumberSK1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],10200,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let maxAngleXY = [ -110 , -340 ];
                            let angleXY = maxAngleXY[0] + ( maxAngleXY[1] - maxAngleXY[0] ) / movingLightAngleRepeatTime * nowTime[1];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 38000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK1_7);

                        function movingLightNumberSK1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,150,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 50000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK1_8);

                        function movingLightNumberSK1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,180,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                movingLightColorChange(1,1,255,255,255,0);
                                movingLightColorChange(1,2,255,255,0,0);
                                movingLightColorChange(1,3,255,0,255,0);
                                movingLightColorChange(1,4,0,150,255,0);

                                movingLightColorChange(2,5,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 51000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK1_2);

                        function movingLightNumberSK1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],14000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 7500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 2 , 1 , 3 , 0 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            movingLightAngleRepeatTime = 10000;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;

                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                        
                            movingLightAngleChange(2,5,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 65000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK1_0);

                        function movingLightNumberSK1_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,200,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK1_4);

                        function movingLightNumberSK1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorChangeTime = 200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 0 , 150 , 255 ] , [ 255 , 120 , 200 ] ];
                            let movingLightColor = [];
                            let movingLightJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                    break;
                                }
                            }

                            movingLightColorChange(2,5,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 94000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK1_9);

                        function movingLightNumberSK1_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,100,180,255,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 95200;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2300;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSK1_10);

                        function movingLightNumberSK1_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],10800,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13000;
                            let maxAngleXY = [ 110 , 340 ];
                            let angleXY = maxAngleXY[0] + ( maxAngleXY[1] - maxAngleXY[0] ) / movingLightAngleRepeatTime * nowTime[1];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 106000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 600;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSK1_11);

                        function movingLightNumberSK1_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,255,1,movingLightColorFadeTime,nowTime[0],1);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,100,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }

                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 118000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK1_8);

                        function movingLightNumberSK1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,180,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                movingLightColorChange(1,1,255,255,255,0);
                                movingLightColorChange(1,2,255,255,0,0);
                                movingLightColorChange(1,3,255,0,255,0);
                                movingLightColorChange(1,4,0,150,255,0);

                                movingLightColorChange(2,5,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 119000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK1_2);

                        function movingLightNumberSK1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],14000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 7500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 2 , 1 , 3 , 0 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            movingLightAngleRepeatTime = 10000;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;

                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                        
                            movingLightAngleChange(2,5,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 133000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK1_0);

                        function movingLightNumberSK1_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,200,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK1_4);

                        function movingLightNumberSK1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorChangeTime = 200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 0 , 150 , 255 ] , [ 255 , 120 , 200 ] ];
                            let movingLightColor = [];
                            let movingLightJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                    break;
                                }
                            }

                            movingLightColorChange(2,5,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 156000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSK1_12);

                        function movingLightNumberSK1_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 158000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSK1_13);

                        function movingLightNumberSK1_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 169000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSK1_14);

                        function movingLightNumberSK1_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,80,120,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 194000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2600;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSK1_15);

                        function movingLightNumberSK1_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 220000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[16] = setInterval(movingLightNumberSK1_16);

                        function movingLightNumberSK1_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                movingLightColorChange(1,1,255,255,255,0);
                                movingLightColorChange(1,2,255,255,0,0);
                                movingLightColorChange(1,3,255,0,255,0);
                                movingLightColorChange(1,4,0,150,255,0);

                                movingLightColorChange(2,5,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }

                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 220500;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK1_2);

                        function movingLightNumberSK1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 7500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 2 , 1 , 3 , 0 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            movingLightAngleRepeatTime = 10000;
                            let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 2 ) % movingLightAngleRepeatTime;

                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                        
                            movingLightAngleChange(2,5,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 222500;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK1_0);

                        function movingLightNumberSK1_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,200,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK1_4);

                        function movingLightNumberSK1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorChangeTime = 200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 0 , 150 , 255 ] , [ 255 , 120 , 200 ] ];
                            let movingLightColor = [];
                            let movingLightJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                    break;
                                } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                    break;
                                }
                            }

                            movingLightColorChange(2,5,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 242500;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[17] = setInterval(movingLightNumberSK1_17);

                        function movingLightNumberSK1_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3600;
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

                        movingLightSetInterval[18] = setInterval(movingLightNumberSK1_18);

                        function movingLightNumberSK1_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 6;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColor = [ 0 , 0 , 0 ];

                                if ( i <= 2 ) j = 5 - i;
                                else if ( i <= 4 ) j = 4 - i;
                                else j = 2;
                                
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        movingLightColor[ ( 2 + l ) % 3 ] = 255;
                                        movingLightColor[ l % 3 ] = 255 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        movingLightColor[ l % 3 ] = 255;
                                        movingLightColor[ ( 2 + l ) % 3 ] = 255 - 255 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 256000;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[17]);
                        clearInterval(movingLightSetInterval[18]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[19] = setInterval(movingLightNumberSK1_19);

                        function movingLightNumberSK1_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,50,0,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                            }

                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 260700;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[20] = setInterval(movingLightNumberSK1_20);

                        function movingLightNumberSK1_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[20]);
                            }

                        }

                    },movingLightSetTimeoutDelay[24]);
                    
                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン B *****/
                    waterCurtain("B");

                    /***** LED SK2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK2);

                    function ledNumberSK2() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet( startTime , ledFadeTime , ledUseNumber , ledSetInterval , ledMyNumber );
                        let ledColor = [];

                        if ( nowTime[1] < 1500 ) ledColor = [ 255 , 120 , 150 ];
                        else if ( nowTime[1] < 2970 ) ledColor = [ 150 , 0 , 0 ];
                        else if ( nowTime[1] < 4500 ) ledColor = [ 255 , 0 , 0 ];
                        else if ( nowTime[1] < 5740 ) ledColor = [ 200 , 100 , 120 ];
                        else ledColor = [ 255 , 255 , 255 ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                    }

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("A");
                    },500);

                    /***** LED SK3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK3);

                    function ledNumberSK3() {
                        let ledFadeTime = 500;
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

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED SK4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK4);

                    function ledNumberSK4() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 50 , 80 ] , [ 255 , 200 , 220 ] ];
                        
                        let ledLapTimeSplit = 190;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 SK2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSK2);

                    function waterLightNumberSK2() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,120,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AA *****/
                    waterCurtain("AA");

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

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AB *****/
                    waterCurtain("AB");

                    /***** LED SK3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK3);

                    function ledNumberSK3() {
                        let ledFadeTime = 1000;
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

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("A");
                    },500);

                    /***** LED SK3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK3);

                    function ledNumberSK3() {
                        let ledFadeTime = 500;
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

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED SK5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK5);

                    function ledNumberSK5() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 120 , 150 ] , [ 0 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / 19;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 200 ) % ledRepeatTime;

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
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 200 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 SK2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSK2);

                    function waterLightNumberSK2() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,120,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                    /***** LED SK4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK4);

                    function ledNumberSK4() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 50 , 80 ] , [ 255 , 200 , 220 ] ];
                        
                        let ledLapTimeSplit = 190;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 );
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }
                } else if ( key === 'p' ) {
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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED SK3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK3);

                    function ledNumberSK3() {
                        let ledFadeTime = 1000;
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

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BN *****/
                    waterCurtain("BN");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 500;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let repeatTime = 900;
                        let repeatTimeSplit = repeatTime / 2;
        
                        let lapTimeSplit = repeatTime * 8 / ledNumberInside;
        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColorRed1 = ( nowTime[1] + lapTimeSplit * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTimeSplit * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTimeSplit * ( ledColorRed1 - repeatTimeSplit );
                            }
        
                            ledColorChange(1,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }
        
                        lapTimeSplit = repeatTime * 8 / ledNumberOutside;
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColorRed1 = ( nowTime[1] + lapTimeSplit * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTimeSplit ) {
                                ledColorRed2 = 255 / repeatTimeSplit * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTimeSplit * ( ledColorRed1 - repeatTimeSplit );
                            }
                            
                            ledColorChange(2,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }
                    }

                    /***** 水中照明 SS1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS1);

                    function waterLightNumberSS1() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,120,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

                    /***** LED 57 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber57);

                    function ledNumber57() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 8500;
                        let ledRepeatTimeSplit = ledRepeatTime / 15;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 255 , 50 , 150 ] , [ 255 , 180 , 180 ] , [ 255 , 0 , 255 ] , [ 0 , 255 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( 3 * l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 * l ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit *( 3 * l + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( 3 * l + 1 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                }
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( 3 * l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 * l ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit *( 3 * l + 2 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( 3 * l + 1 ) ) ;
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK6);

                    function ledNumberSK6() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,120,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 DoHN1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN1);

                    function waterLightNumberDoHN1() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ )waterLightColorChange(i,100,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === 'u' ) {
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
                        let ledBasicColor = [ [ 255 , 200 , 240 ] , [ 200 , 240 , 255 ] , [ 240 , 255 , 200 ] , [ 255 , 255 , 255 ] ];
                        let ledJudgeTime = Math.trunc( ( nowTime[1] % ledRepeatTime ) / ledRepeatTimeSplit );
                        
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
    
                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED SK3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK3);

                    function ledNumberSK3() {
                        let ledFadeTime = 1000;
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

                } else if ( key === 'w' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン BG *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("BG");
                    },1200);

                    /***** LED SK7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK7);

                    function ledNumberSK7() {
                        let ledFadeTime = 1200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,120,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 SK2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSK2);

                    function waterLightNumberSK2() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,120,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト SK2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 2000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,60,100);
                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,80,100);
                        movingLightPictureChange(2,5,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberSK2_1);

                        function movingLightNumberSK2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                movingLightAngleChange(1,1,90,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,25,-80,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,100,180,0);
                                }
                                movingLightColorChange(2,5,255,255,255,0);
                                movingLightAngleChange(2,5,5,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }
                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK2_2);

                        function movingLightNumberSK2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 7500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK2_0);

                        function movingLightNumberSK2_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberSK2_3);

                        function movingLightNumberSK2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 100;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;

                            for ( var i = 1 ; i <= 5 ; i++ )  {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i === 1 ) j = 2;
                                else if ( i === 5 ) j = 3;
                                else j = i + 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < 50 ) movingLightColorOpacity = 1;

                                if ( i === 5 ) movingLightColorChange(2,5,-1,-1,-1,movingLightColorOpacity);
                                else movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 8000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK2_4);

                        function movingLightNumberSK2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i === 1 ) j = 2;
                                else if ( i === 5 ) j = 3;
                                else j = i + 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,200,0,255,movingLightColorOpacity);
                                else movingLightColorChange(1,i,200,0,255,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberSK2_5);

                        function movingLightNumberSK2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1300;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i + 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 23500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2800;
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK2_6);

                        function movingLightNumberSK2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,220,180,255,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 38000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK2_4);

                        function movingLightNumberSK2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i === 1 ) j = 2;
                                else if ( i === 5 ) j = 3;
                                else j = i + 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,200,0,255,movingLightColorOpacity);
                                else movingLightColorChange(1,i,200,0,255,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 53000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK2_7);

                        function movingLightNumberSK2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 53500;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK2_8);

                        function movingLightNumberSK2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 68000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK2_0);

                        function movingLightNumberSK2_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK2_9);

                        function movingLightNumberSK2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 83000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSK2_10);

                        function movingLightNumberSK2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 255 , 50 , 0 ] , [ 255 , 120 , 150 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 98000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK2_6);

                        function movingLightNumberSK2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,220,180,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 98500;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,60,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSK2_11);

                        function movingLightNumberSK2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,90,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,25,-80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }

                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 113000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK2_4);

                        function movingLightNumberSK2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i === 1 ) j = 2;
                                else if ( i === 5 ) j = 3;
                                else j = i + 2;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,200,0,255,movingLightColorOpacity);
                                else movingLightColorChange(1,i,200,0,255,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 128000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK2_7);

                        function movingLightNumberSK2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 128500;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK2_8);

                        function movingLightNumberSK2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 143000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK2_0);

                        function movingLightNumberSK2_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK2_9);

                        function movingLightNumberSK2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 158000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSK2_10);

                        function movingLightNumberSK2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 255 , 50 , 0 ] , [ 255 , 120 , 150 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 168000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSK2_12);

                        function movingLightNumberSK2_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 169000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,60,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSK1_13);

                        function movingLightNumberSK1_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],4000,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 1000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let angleXY = [ 90 , 45 , 45 , 25 ];
                            let angleZRadius = 10;
                            let angleZCenter = -70;
                            
                            for ( var i = 0 ; i < 5 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * i ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                if ( i === 0 ) {
                                    angleZ = angleZ * -1 + 20;
                                    movingLightAngleChange(2,5,5,angleZ,movingLightAngleFadeTime,nowTime[0]);
                                } else {
                                    movingLightAngleChange(1,i,angleXY[i-1],angleZ,movingLightAngleFadeTime,nowTime[0]);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 173000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSK2_14);

                        function movingLightNumberSK2_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1);
                                movingLightColorChange(2,5,255,255,0,1);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0])
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 188000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK2_6);

                        function movingLightNumberSK2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,220,180,255,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 188500;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK2_8);

                        function movingLightNumberSK2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 203000;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK2_0);

                        function movingLightNumberSK2_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK2_9);

                        function movingLightNumberSK2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 233000;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSK2_10);

                        function movingLightNumberSK2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 255 , 50 , 0 ] , [ 255 , 120 , 150 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 248000;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSK2_15);

                        function movingLightNumberSK2_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 263000;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[16] = setInterval(movingLightNumberSK2_16);

                        function movingLightNumberSK2_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,200,0,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }

                        }

                    },movingLightSetTimeoutDelay[25]);

                    movingLightSetTimeoutDelay[26] = 267000;
                    movingLightSetTimeout[26] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[17] = setInterval(movingLightNumberSK2_17);

                        function movingLightNumberSK2_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {                                
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }

                        }

                    },movingLightSetTimeoutDelay[26]);

                    movingLightSetTimeoutDelay[27] = 267800;
                    movingLightSetTimeout[27] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[18] = setInterval(movingLightNumberSK2_18);

                        function movingLightNumberSK2_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[27],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {                                
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }

                        }

                    },movingLightSetTimeoutDelay[27]);
                    
                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK8);

                    function ledNumberSK8() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 80 , 150 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / 19;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 200 ) % ledRepeatTime;

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
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 200 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED SK9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK9);

                    function ledNumberSK9() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2000;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledChangeTime = 300;
                        let ledBasicColor = [ [ 255 , 220 , 220 ] , [ 255 , 150 , 150 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / 18;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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

                        ledLapTimeSplit = ledRepeatTime * 3 / 44;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
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

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

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

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BQ *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("BQ");
                    },500);

                    /***** LED SK10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK10);

                    function ledNumberSK10() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledBasicColor = [ [ 255 , 220 , 250 ] , [ 255 , 0 , 50 ] ];
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                        
                        ledRepeatTimeSplit = ledRepeatTime / 5;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j, l;

                            if ( i <= 24 ) {
                                j = 24 - i;
                                l = 3500;
                            } else {
                                j = i - 25;
                                l = 2600;
                            }

                            let ledJudgeTime = ( nowTime[1] + ( 1 - Math.cos(Math.PI/48*j) ) * l ) % ledRepeatTime;

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

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("A");
                    },800);

                    /***** LED SK11 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK11);

                    function ledNumberSK11() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 7200;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 120 , 150 ] , [ 255 , 0 , 0 ] , [ 255 , 255 , 180 ] ];
                        
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

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AG *****/
                    waterCurtain("AG");

                    /***** LED SK10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK10);

                    function ledNumberSK10() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledBasicColor = [ [ 255 , 220 , 250 ] , [ 255 , 0 , 50 ] ];
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                        
                        ledRepeatTimeSplit = ledRepeatTime / 5;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j, l;

                            if ( i <= 24 ) {
                                j = 24 - i;
                                l = 3500;
                            } else {
                                j = i - 25;
                                l = 2600;
                            }

                            let ledJudgeTime = ( nowTime[1] + ( 1 - Math.cos(Math.PI/48*j) ) * l ) % ledRepeatTime;

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

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED SK10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK10);

                    function ledNumberSK10() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledBasicColor = [ [ 255 , 220 , 250 ] , [ 255 , 0 , 50 ] ];
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                        
                        ledRepeatTimeSplit = ledRepeatTime / 5;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j, l;

                            if ( i <= 24 ) {
                                j = 24 - i;
                                l = 3500;
                            } else {
                                j = i - 25;
                                l = 2600;
                            }

                            let ledJudgeTime = ( nowTime[1] + ( 1 - Math.cos(Math.PI/48*j) ) * l ) % ledRepeatTime;

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

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン L *****/
                    waterCurtain("L");

                    /***** LED SK8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK8);

                    function ledNumberSK8() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 255 , 80 , 150 ] , [ 255 , 255 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / 19;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 200 ) % ledRepeatTime;

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
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 200 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 SK1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSK1);

                    function waterLightNumberSK1() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,220,150,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BD *****/
                    waterCurtain("BD");

                    /***** LED SK10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK10);

                    function ledNumberSK10() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledBasicColor = [ [ 255 , 220 , 250 ] , [ 255 , 0 , 50 ] ];
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                        
                        ledRepeatTimeSplit = ledRepeatTime / 5;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j, l;

                            if ( i <= 24 ) {
                                j = 24 - i;
                                l = 3500;
                            } else {
                                j = i - 25;
                                l = 2600;
                            }

                            let ledJudgeTime = ( nowTime[1] + ( 1 - Math.cos(Math.PI/48*j) ) * l ) % ledRepeatTime;

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

                } else if ( key === '.' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED SK10 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK10);

                    function ledNumberSK10() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledBasicColor = [ [ 255 , 220 , 250 ] , [ 255 , 0 , 50 ] ];
                        
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                        
                        ledRepeatTimeSplit = ledRepeatTime / 5;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j, l;

                            if ( i <= 24 ) {
                                j = 24 - i;
                                l = 3500;
                            } else {
                                j = i - 25;
                                l = 2600;
                            }

                            let ledJudgeTime = ( nowTime[1] + ( 1 - Math.cos(Math.PI/48*j) ) * l ) % ledRepeatTime;

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

                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );
                        let repeatTime = 900;
                        let repeatTimeSplit = repeatTime / 2;
        
                        let lapTimeSplit = repeatTime * 8 / ledNumberInside;
        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColorRed1 = ( nowTime[1] + lapTimeSplit * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTimeSplit * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTimeSplit * ( ledColorRed1 - repeatTimeSplit );
                            }
        
                            ledColorChange(1,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }
        
                        lapTimeSplit = repeatTime * 8 / ledNumberOutside;
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let j = ledNumberOutside - i;
                            let ledColorRed1 = ( nowTime[1] + lapTimeSplit * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTimeSplit ) {
                                ledColorRed2 = 255 / repeatTimeSplit * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTimeSplit * ( ledColorRed1 - repeatTimeSplit );
                            }
                            
                            ledColorChange(2,i,ledColorRed2,255,255,nowTime[0],fadeTime);
                        }
                    }

                    /***** 水中照明 SS4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS4);

                    function waterLightNumberSS4() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,120,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                }
            } else if ( mainNowPage === 2 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン G *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("G");
                    },7000);

                    /***** LED SK12 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[0] = 0;
                    ledSetTimeout[0] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSK12_1);
                        
                        function ledNumberSK12_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[0],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,120,150,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[0]);

                    ledSetTimeoutDelay[1] = 13000;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSK12_2);
                        
                        function ledNumberSK12_2() {
                            let ledFadeTime = 1800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],3000,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 10;
                            let j = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 10;
                            let ledJudgeTime = nowTime[1] % ledRepeatTimeSplit;
                            
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                            let ledArray = [[0,0,1,1,0,1,1,0,0,1],[1,1,0,1,1,1,0,0,1,0],[0,1,1,0,1,1,1,0,1,1],[0,0,1,1,0,0,0,0,1,1],[0,1,1,1,0,1,1,1,1,0],[0,1,1,1,0,1,1,0,1,1],[1,0,0,1,1,0,1,0,0,0],[0,0,1,0,1,1,0,1,0,1],[1,1,0,0,1,1,0,1,0,1],[1,0,0,1,0,1,1,1,0,0],[0,0,1,0,1,1,0,0,0,0],[1,1,1,0,0,0,1,1,0,0],[1,1,1,0,0,1,1,1,1,0],[1,1,0,1,1,0,1,1,1,1],[0,1,0,1,1,0,1,1,0,1],[0,1,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,0,0,0,0,1,1,0,0],[1,1,1,0,1,0,0,1,0,1]];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let m = ledArray[i-1][j];
                                let n = ledArray[i-1][ ( j + 1 ) % 10 ];

                                if ( m === n ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k] + ( ledBasicColor[n][k] - ledBasicColor[m][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 150 ] ];
                            ledArray = [[0,0,1,0,0,1,1,0,1,1],[0,0,0,1,0,0,1,0,0,0],[1,0,0,0,1,0,1,0,0,1],[1,1,1,1,1,0,0,0,1,1],[0,1,1,0,1,1,0,1,0,0],[0,0,0,0,0,1,1,1,0,1],[1,1,1,1,1,0,0,0,1,0],[1,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,0,1,0,0,1],[0,1,0,1,0,0,0,0,0,1],[0,1,1,0,0,0,0,0,0,0],[0,1,1,0,0,1,0,1,0,1],[0,1,1,0,1,1,0,1,1,1],[0,1,0,0,0,1,1,0,1,0],[0,0,0,0,1,1,0,0,0,0],[1,0,1,1,0,1,0,0,0,0],[0,1,1,0,0,1,1,1,1,0],[1,0,0,1,1,1,1,0,0,0],[0,1,0,1,1,1,0,1,1,0],[1,0,0,0,1,0,1,1,0,0],[0,0,0,1,1,0,0,1,0,1],[0,0,0,0,0,1,0,1,1,0],[1,1,1,0,0,1,0,0,1,0],[0,0,0,1,1,0,0,1,1,0],[0,0,0,1,1,1,0,0,0,1],[0,1,1,1,0,0,1,0,0,1],[1,1,1,0,1,1,1,1,1,0],[1,1,1,0,0,0,1,0,1,0],[0,0,0,0,1,0,0,1,1,0],[0,1,1,0,0,0,0,0,1,0],[0,0,0,0,1,1,0,0,1,1],[1,0,0,1,0,0,0,0,0,1],[1,1,0,0,1,1,0,0,0,1],[0,1,0,1,1,1,1,1,1,1],[1,0,0,1,0,0,1,0,0,1],[0,0,1,0,1,0,0,1,1,1],[0,0,0,0,1,0,1,1,1,0],[1,1,0,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1],[1,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,0,0,0],[1,0,1,0,0,1,1,1,0,0],[1,0,0,1,1,1,1,0,0,1],[0,0,1,1,0,1,1,0,1,1],[0,1,1,0,0,1,0,0,1,1],[0,1,0,0,1,0,1,1,1,0],[0,1,0,0,0,0,1,1,1,1],[1,0,0,0,1,1,0,0,1,1]];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let m = ledArray[i-1][j];
                                let n = ledArray[i-1][ ( j + 1 ) % 10 ];

                                if ( m === n ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k] + ( ledBasicColor[n][k] - ledBasicColor[m][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    /***** 水中照明 SK3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetTimeoutDelay = [];
                    let waterLightSetInterval = [];

                    waterLightSetTimeoutDelay[1] = 0;
                    waterLightSetTimeout[1] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSK3_1);

                        function waterLightNumberSK3_1() {
                            let waterLightFadeTime = 2300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[1],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                        }
                        
                    },waterLightSetTimeoutDelay[1]);

                    waterLightSetTimeoutDelay[2] = 16000;
                    waterLightSetTimeout[2] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSK3_2);

                        function waterLightNumberSK3_2() {
                            let waterLightFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[2],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 2000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 0 , 0 , 0 ] , [ 255 , 0 , 200 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) ) % waterLightRepeatTime;

                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTimeSplit * waterLightJudgeTime;
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit );
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k];
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[2]);

                    waterLightSetTimeoutDelay[3] = 30000;
                    waterLightSetTimeout[3] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSK3_3);

                        function waterLightNumberSK3_3() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[3],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,0,200,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                        }
                        
                    },waterLightSetTimeoutDelay[3]);

                    waterLightSetTimeoutDelay[4] = 31000;
                    waterLightSetTimeout[4] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSK3_4);

                        function waterLightNumberSK3_4() {
                            let waterLightFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[4],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,180,150,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                        }
                        
                    },waterLightSetTimeoutDelay[4]);

                    /***** ムービングライト SK3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSK3_1);

                        function movingLightNumberSK3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);

                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK3_2);

                        function movingLightNumberSK3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 9500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let angleXYRadius = 110;
                            let angleXYCenter = 70;
                            let angleZRadius = 30;
                            let angleZCenter = -40;
                            let maxAngleDeg = [ 180 , 270 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * ( 5 - i ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightAngleRad = ( maxAngleDeg[l] + ( maxAngleDeg[ ( l + 1 ) % 2 ] - maxAngleDeg[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l ) ) / 180 * Math.PI;
                                        break;
                                    }
                                }
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                if ( i === 3 ) angleXY -= 30;
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberSK3_3);

                        function movingLightNumberSK3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 8300;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let angleXYRadius = 15;
                            let angleXYCenter = 5;
                            let angleZRadius = 5;
                            let angleZCenter = 85;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( 5 - i ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK3_4);

                        function movingLightNumberSK3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                        
                        }
                        movingLightSetInterval[5] = setInterval(movingLightNumberSK3_5);

                        function movingLightNumberSK3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 3000;
                            let movingLightColorChangeTime = 400;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 3;
                            let movingLightBasicColor = [ [ 100 , 0 , 255 ] , [ 255 , 0 , 0 ] ];
                            let movingLightColor = [];
                            let movingLightJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[0][k] + ( movingLightBasicColor[1][k] - movingLightBasicColor[0][k] ) / movingLightColorRepeatTimeSplit * movingLightJudgeTime ;
                            } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[1][k] + ( movingLightBasicColor[0][k] - movingLightBasicColor[1][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * 2 ) ;
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1,movingLightColorFadeTime,nowTime[0]);

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 12500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK3_6);

                        function movingLightNumberSK3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            let movingLightColorRepeatTime = 500;
                            let movingLightColorOpacity = 0;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            if ( movingLightColorJudgeTime >= 250 ) movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ )  movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ )  movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 13500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK3_7);

                        function movingLightNumberSK3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 100;
                            let movingLightColorOpacity = 0;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            if ( movingLightColorJudgeTime >= 50 ) movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ )  movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ )  movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            
                        }


                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 14500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[5]);
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK3_8);

                        function movingLightNumberSK3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);                                    
                                    if ( i <= 2 || i === 4 ) movingLightAngleChange(2,i,-50,80,movingLightAngleFadeTime,nowTime[0]);
                                    else if ( i === 3 ) movingLightAngleChange(2,i,-70,80,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(2,i,-50,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 16000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK3_0);

                        function movingLightNumberSK3_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,200,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }

                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK3_9);

                        function movingLightNumberSK3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                            let movingLightColorRepeatTime2 = 3600;
                            let movingLightColorRepeatTimeSplit2 = movingLightColorRepeatTime2 / 2;
                            let movingLightBasicColor2 = [ [ 255 , 0 , 0 ] , [ 255 , 200 , 0 ] ];
                            let m = Math.trunc( nowTime[0] / movingLightColorRepeatTimeSplit2 ) % 2;

                            for ( var k = 0 ; k < 3 ; k++ ) movingLightBasicColor[1][k] = movingLightBasicColor2[m][k];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j, l;

                                if ( i <= 2 ) j = i + 1;
                                else if ( i <= 4 ) j = i - 3;
                                else j = 4;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) l = 0;
                                else l = 1;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);

                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 29000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSK3_10);

                        function movingLightNumberSK3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 31000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSK3_11);

                        function movingLightNumberSK3_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }

                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 31300;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSK3_12);

                        function movingLightNumberSK3_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);
                    
                } else if ( key === 'g' ) {
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

                    /***** 水中照明 DoHN1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberDoHN1);

                    function waterLightNumberDoHN1() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ )waterLightColorChange(i,100,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** ムービングライト SK4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,100,100);
                        movingLightPictureChange(2,5,0,30,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSK4_1);

                        function movingLightNumberSK4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,80,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,100,0,255,0);
                                }
                                movingLightColorChange(2,5,0,80,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK4_2);

                        function movingLightNumberSK4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],11000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 18000;
                            let movingLightAngleLapTimeSplit = [ 17000 , 10000 , 4500 , 5000 , 5000 ];
                            let angleXYRadius = [ 60 , 60 , 60 , 60 , 30 ];
                            let angleXYCenter = [ 5 , 30 , 60 , 50 , 0 ];
                            let angleZ = [ -85 , -85 , -85 , -80 , 90 ];
                            
                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter[i-1] + angleXYRadius[i-1] * Math.sin(movingLightAngleRad);
                                                            
                                if ( i <= 4 ) movingLightAngleChange(1,i,angleXY,angleZ[i-1],movingLightAngleFadeTime,nowTime[0]);
                                else movingLightAngleChange(2,i,angleXY,angleZ[i-1],movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberSK4_3);

                        function movingLightNumberSK4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 11000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK4_4);

                        function movingLightNumberSK4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 21000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSK4_5);

                        function movingLightNumberSK4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,50,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,50,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 26000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK4_6);

                        function movingLightNumberSK4_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,90,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,25,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,5,80,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,80,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,0,80,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK4_7);

                        function movingLightNumberSK4_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i === 1 ) j = 2;
                                else if ( i === 5 ) j = 3;
                                else j = i + 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,-1,-1,-1,movingLightColorOpacity);
                                else movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 30500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK5_8);

                        function movingLightNumberSK5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 30700;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1300;

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK5_9);

                        function movingLightNumberSK5_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {                                
                                movingLightAngleChange(1,1,120,-100,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-60,-100,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-30,-100,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-130,-100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 31000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,18,80,100);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSK4_10);

                        function movingLightNumberSK4_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,180,180,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberSK4_11);

                        function movingLightNumberSK4_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 500 * ( nowTime[0] % 500 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightRotateChange(1,i,movingLightRotateDeg);

                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 50000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSK4_12);

                        function movingLightNumberSK4_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else if ( nowTime[0] <= movingLightColorFadeTime + 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 3 ) movingLightColorChange(2,i,255,255,255,0);
                                    else movingLightColorChange(2,i,255,0,0,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 50300;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);
                        movingLightPictureChange(2,5,0,100,100);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSK4_13);

                        function movingLightNumberSK4_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],2700,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2000;
                            let angleXYRadius = 60;
                            let angleXYCenter = -130;
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.sin(movingLightAngleRad);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,-90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberSK4_14);

                        function movingLightNumberSK4_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],2700,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2000;
                            let angleXYRadius = 90;
                            let angleXYCenter = 0;
                            let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 4 ) % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;

                            let angleXY = angleXYCenter + angleXYRadius * Math.sin(movingLightAngleRad);
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                if ( i === 1 || i === 5 ) angleXY *= -1;

                                movingLightAngleChange(2,i,angleXY,120,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 53000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[15] = setInterval(movingLightNumberSK4_15);

                        function movingLightNumberSK4_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightColorRepeatTime = 100;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ )  {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < 50 ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,255,0,0,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[16] = setInterval(movingLightNumberSK4_16);

                        function movingLightNumberSK4_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightColorRepeatTime = 100;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ )  {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < 50 ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }

                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 63000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        clearInterval(movingLightSetInterval[14]);
                        clearInterval(movingLightSetInterval[15]);
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 4000;

                        movingLightSetInterval[17] = setInterval(movingLightNumberSK4_17);

                        function movingLightNumberSK4_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,-170,-110,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,50,90,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 64500;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        movingLightPictureChange(2,5,0,30,100);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[18] = setInterval(movingLightNumberSK4_18);

                        function movingLightNumberSK4_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,80,255,1,movingLightColorFadeTime,nowTime[0],1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,100,0,255,0);
                                movingLightColorChange(2,5,0,80,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }

                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 67000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[17]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 5500;

                        movingLightSetInterval[19] = setInterval(movingLightNumberSK4_19);

                        function movingLightNumberSK4_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,-150,-85,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                            }

                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 72500;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[19]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 7000;
                        let movingLightColorFadeTime = 6000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK4_2);

                        function movingLightNumberSK4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 18000;
                            let movingLightAngleLapTimeSplit = [ 17000 , 10000 , 4500 , 5000 , 13500 ];
                            let angleXYRadius = [ 60 , 60 , 60 , 60 , 30 ];
                            let angleXYCenter = [ 5 , 30 , 60 , 50 , 0 ];
                            let angleZ = [ -85 , -85 , -85 , -80 , 90 ];
                            
                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter[i-1] + angleXYRadius[i-1] * Math.sin(movingLightAngleRad);
                                                            
                                if ( i <= 4 ) movingLightAngleChange(1,i,angleXY,angleZ[i-1],movingLightAngleFadeTime,nowTime[0]);
                                else movingLightAngleChange(2,i,angleXY,angleZ[i-1],movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberSK4_3);

                        function movingLightNumberSK4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 76000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[20] = setInterval(movingLightNumberSK4_20);

                        function movingLightNumberSK4_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(2,5,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[20]);
                            }

                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 83000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSK4_5);

                        function movingLightNumberSK4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,50,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,50,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 87000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK4_6);

                        function movingLightNumberSK4_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,90,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,25,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,5,80,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,80,255,-1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,0,80,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK4_7);

                        function movingLightNumberSK4_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i === 1 ) j = 2;
                                else if ( i === 5 ) j = 3;
                                else j = i + 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,-1,-1,-1,movingLightColorOpacity);
                                else movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 92000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[20] = setInterval(movingLightNumberSK5_20);

                        function movingLightNumberSK5_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[20]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 92200;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[21] = setInterval(movingLightNumberSK4_21);

                        function movingLightNumberSK4_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-40,-85,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[21]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 112000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,18,100,52,100);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[22] = setInterval(movingLightNumberSK4_22);

                        function movingLightNumberSK4_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,180,180,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[22]);
                            }
                            
                        }

                        movingLightSetInterval[11] = setInterval(movingLightNumberSK4_11);

                        function movingLightNumberSK4_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 500 * ( nowTime[0] % 500 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightRotateChange(1,i,movingLightRotateDeg);

                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 122000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,52,100);

                        movingLightSetInterval[23] = setInterval(movingLightNumberSK4_23);

                        function movingLightNumberSK4_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * i ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }

                        }

                        movingLightSetInterval[24] = setInterval(movingLightNumberSK4_24);

                        function movingLightNumberSK4_24() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[24],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1500 * ( nowTime[0] % 1500 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);

                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 140500;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[23]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[25] = setInterval(movingLightNumberSK4_25);

                        function movingLightNumberSK4_25() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[25],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,200,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[24]);
                                clearInterval(movingLightSetInterval[25]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 147700;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[26] = setInterval(movingLightNumberSK4_26);

                        function movingLightNumberSK4_26() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[26],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[26]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 148500;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[27] = setInterval(movingLightNumberSK4_27);

                        function movingLightNumberSK4_27() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[27],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-50,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[27]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

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

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("AO");
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

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AJ *****/
                    waterCurtain("AJ");
    
                    /***** LED 41 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber41);
        
                    function ledNumber41() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);    
                        let ledRepeatTime = 1400;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 200 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;
    
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
                        
                        ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;
    
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
    
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
    
                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

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

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

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

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED SK13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK13);

                    function ledNumberSK13() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2500;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 0 , 0 , 255 ] , [ 0 , 220 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

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

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK14 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[0] = 0;
                    ledSetTimeout[0] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSK14_1);
                        
                        function ledNumberSK14_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[0],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[0]);

                    ledSetTimeoutDelay[1] = 3000;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSK14_2);
                        
                        function ledNumberSK14_2() {
                            let ledFadeTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,120,150,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 15000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSK14_3);
                        
                        function ledNumberSK14_3() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],3500,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledBasicColor1 = [ 255 , 240 , 200 ];
                            let ledBasicColor2 = [ [ 255 , 120 , 150 ] , [ 255 , 0 , 0 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                        
                    },ledSetTimeoutDelay[2]);

                    /***** 水中照明 SK2 *****/
                    waterLightActualSetTimeout = setTimeout( function() {
                        let waterLightMyNumber = waterLightSetting();
                        let waterLightSetInterval = setInterval(waterLightNumberSK2);

                        function waterLightNumberSK2() {
                            let fadeTime = 2300;
                            let nowTime = nowTimeGet(startTime+2500,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,120,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    },2500);

                    /***** ムービングライト SK5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSK5_1);

                        function movingLightNumberSK5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);

                                movingLightAngleChange(2,1,0,110,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,2,-5,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,5,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,0,110,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,5,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberSK5_2);

                        function movingLightNumberSK5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 12000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 1 , 0 , 2 , 3 ];
                            let angleXYRadius = 70;
                            let angleXYCenter = 0;
                            let angleZRadius = 5;
                            let angleZCenter = -45;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberSK5_3);

                        function movingLightNumberSK5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 13000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK5_4);

                        function movingLightNumberSK5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 13800;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,80,100);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSK5_5);

                        function movingLightNumberSK5_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,-140,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-170,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-140,-80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-160,-80,movingLightAngleFadeTime,nowTime[0]);

                                movingLightColorChange(1,1,0,255,0,0);
                                movingLightColorChange(1,2,255,0,0,0);
                                movingLightColorChange(1,3,0,255,0,0);
                                movingLightColorChange(1,4,200,0,255,0);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 16500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSK5_6);

                        function movingLightNumberSK5_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK5_7);

                        function movingLightNumberSK5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],2000,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 0 , 50 ] , [ 200 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * i ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 18500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 200;

                        let movingLightAngleFadeTimeSplit = [ 800 , 3200 , 1000 , 2300 ];

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK5_0);

                        function movingLightNumberSK5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,200,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberSK5_8);

                        function movingLightNumberSK5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],3500,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let angleXYRadius = 25;
                            let angleXYCenter = -145;
                            let angleZRadius = 20;
                            let angleZCenter = -80;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                if ( nowTime[0] >= movingLightAngleFadeTimeSplit[i-1] ) nowTime[1] = nowTime[0] - movingLightAngleFadeTimeSplit[i-1];

                                let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTimeSplit[i-1],nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK5_9);

                        function movingLightNumberSK5_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let movingLightAngleLapTimeSplit = [ 4 , 3 , 1 , 0 , 2 ];
                            let angleXYRadius = 25;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = 100;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 32000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSK5_10);

                        function movingLightNumberSK5_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightSizeChange(i,100,movingLightColorFadeTime,nowTime[0])
                                    movingLightColorChange(2,i,200,180,255,1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 33000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        movingLightPictureChange(2,5,0,40,100);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSK5_11);

                        function movingLightNumberSK5_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }

                        }

                        movingLightSetInterval[12] = setInterval(movingLightNumberSK5_12);

                        function movingLightNumberSK5_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 18000;
                            let movingLightAngleLapTimeSplit = [ 17000 , 10000 , 4500 , 5000 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = [ 5 , 30 , 60 , 50 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter[i-1] + angleXYRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,-85,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 43000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;
                        let movingLightColorFadeTime2 = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK5_0);

                        function movingLightNumberSK5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime2 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,50,0,-1,movingLightColorFadeTime2,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[13] = setInterval(movingLightNumberSK5_13);

                        function movingLightNumberSK5_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,150,0,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 55000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSK5_14);

                        function movingLightNumberSK5_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,100,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 56800;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSK5_15);

                        function movingLightNumberSK5_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 2 , 3 , 0 , 0 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            angleXYRadius = 15;
                            angleXYCenter = 5;
                            angleZRadius = 15;
                            angleZCenter = 85;
                        
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                        
                            movingLightAngleChange(2,5,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 67000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[16] = setInterval(movingLightNumberSK5_16);

                        function movingLightNumberSK5_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(2,5,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }

                        }

                        movingLightSetInterval[17] = setInterval(movingLightNumberSK5_17);

                        function movingLightNumberSK5_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 200 , 0 , 255 ] , [ 255 , 0 , 50 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 79500;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[18] = setInterval(movingLightNumberSK5_18);

                        function movingLightNumberSK5_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            let movingLightColorRepeatTime = 700;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 7 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                                else movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 90000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[15]);
                        clearInterval(movingLightSetInterval[17]);
                        clearInterval(movingLightSetInterval[18]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[19] = setInterval(movingLightNumberSK5_19);

                        function movingLightNumberSK5_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-40,-85,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                            }

                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 90500;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK5_9);

                        function movingLightNumberSK5_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let movingLightAngleLapTimeSplit = [ 4 , 3 , 1 , 0 , 2 ];
                            let angleXYRadius = 25;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = 100;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 91000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 300;
                        let movingLightColorFadeTime2 = 500;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK5_0);

                        function movingLightNumberSK5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,200,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK5_7);

                        function movingLightNumberSK5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightColorFadeTime2,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 0 , 50 ] , [ 200 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * i ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime2,nowTime[0]);

                            }
                            
                        }

                        movingLightSetInterval[20] = setInterval(movingLightNumberSK5_20);

                        function movingLightNumberSK5_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let angleXYRadius = 60;
                            let angleXYCenter = [ -30 , 0 , 0 , 0 ];
                            let angleZRadius = 15;
                            let angleZCenter = -55;

                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {                                
                                let angleXY = angleXYCenter[i-1] + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 94000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[21] = setInterval(movingLightNumberSK5_21);

                        function movingLightNumberSK5_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( 6 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 104000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[9]);
                        clearInterval(movingLightSetInterval[20]);
                        clearInterval(movingLightSetInterval[21]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 300;
                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[22] = setInterval(movingLightNumberSK5_22);

                        function movingLightNumberSK5_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2800;
                            let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 4 ) % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = 60 * Math.cos(movingLightAngleRad);                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,-50,movingLightAngleFadeTime,nowTime[0]);

                            angleXY = 15 * Math.cos(movingLightAngleRad);                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,angleXY,120,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[23] = setInterval(movingLightNumberSK5_23);

                        function movingLightNumberSK5_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);
                            let movingLightColorRepeatTime = 100;

                            let movingLightColorOpacity = 0;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            if ( movingLightColorJudgeTime < 50 ) movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);

                        }

                        movingLightSetInterval[24] = setInterval(movingLightNumberSK5_24);

                        function movingLightNumberSK5_24() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[24],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,255,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,200,0,255,-1);
                            } else {
                                clearInterval(movingLightSetInterval[24]);
                            }

                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 114000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[22]);
                        clearInterval(movingLightSetInterval[23]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[25] = setInterval(movingLightNumberSK5_25);

                        function movingLightNumberSK5_25() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[25],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,0,0,0,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[25]);
                            }
                            
                        }

                        movingLightSetInterval[12] = setInterval(movingLightNumberSK5_12);

                        function movingLightNumberSK5_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],5000,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 18000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = [ 17000 , 10000 , 4500 , 5000 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = [ 5 , 30 , 60 , 50 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit[i-1] + movingLightAngleRepeatTimeSplit ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter[i-1] + angleXYRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,-85,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 119000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,100,100);
                        movingLightPictureChange(2,5,0,40,100);

                        let movingLightColorFadeTime = 400;
                        let movingLightColorFadeTime2 = 1000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK5_0);

                        function movingLightNumberSK5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime2 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,50,0,1,movingLightColorFadeTime2,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[13] = setInterval(movingLightNumberSK5_13);

                        function movingLightNumberSK5_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,150,0,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 128000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSK5_14);

                        function movingLightNumberSK5_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,100,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 129800;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSK5_15);

                        function movingLightNumberSK5_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 2 , 3 , 0 , 0 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            angleXYRadius = 15;
                            angleXYCenter = 5;
                            angleZRadius = 15;
                            angleZCenter = 85;
                        
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                        
                            movingLightAngleChange(2,5,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 140000;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[16] = setInterval(movingLightNumberSK5_16);

                        function movingLightNumberSK5_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                                movingLightColorChange(2,5,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }

                        }

                        movingLightSetInterval[17] = setInterval(movingLightNumberSK5_17);

                        function movingLightNumberSK5_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 200 , 0 , 255 ] , [ 255 , 0 , 50 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 152000;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[18] = setInterval(movingLightNumberSK5_18);

                        function movingLightNumberSK5_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            let movingLightColorRepeatTime = 700;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 7 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                                else movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 163000;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);
                        clearInterval(movingLightSetInterval[15]);
                        clearInterval(movingLightSetInterval[17]);
                        clearInterval(movingLightSetInterval[18]);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[26] = setInterval(movingLightNumberSK5_26);

                        function movingLightNumberSK5_26() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[26],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {                                
                                movingLightAngleChange(1,1,0,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-40,-85,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[26]);
                            }

                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 164700;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[27] = setInterval(movingLightNumberSK5_27);

                        function movingLightNumberSK5_27() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[27],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[27]);
                            }

                        }

                    },movingLightSetTimeoutDelay[25]);

                    movingLightSetTimeoutDelay[26] = 166000;
                    movingLightSetTimeout[26] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[28] = setInterval(movingLightNumberSK5_28);

                        function movingLightNumberSK5_28() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],0,movingLightUseNumber,movingLightSetInterval[28],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-45,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,60,-45,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,100,-45,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-60,-45,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,60,30,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                movingLightColorChange(2,5,255,255,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,0,0,0);
                                    movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[28]);
                            }

                        }

                    },movingLightSetTimeoutDelay[26]);

                    movingLightSetTimeoutDelay[27] = 171000;
                    movingLightSetTimeout[27] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[29] = setInterval(movingLightNumberSK5_29);

                        function movingLightNumberSK5_29() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[27],0,movingLightUseNumber,movingLightSetInterval[29],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[29]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[27]);

                    movingLightSetTimeoutDelay[28] = 175500;
                    movingLightSetTimeout[28] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[30] = setInterval(movingLightNumberSK5_30);

                        function movingLightNumberSK5_30() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[28],0,movingLightUseNumber,movingLightSetInterval[30],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[30]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[28]);

                    movingLightSetTimeoutDelay[29] = 177000;
                    movingLightSetTimeout[29] = setTimeout( function() {
                        movingLightSetting(0);
        
                        let movingLightAngleFadeTime = 200;
        
                        movingLightSetInterval[31] = setInterval(movingLightNumberSK5_31);
        
                        function movingLightNumberSK5_31() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[31],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2800;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;
                            let angleXYRadius = 25;
                            let angleXYCenter = 0;
                            let angleZRadius = 10;
                            let angleZCenter = 110;
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( 7 - i ) ) % movingLightAngleRepeatTime;
        
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
        
                        }
        
                        movingLightSetInterval[32] = setInterval(movingLightNumberSK5_32);
        
                        function movingLightNumberSK5_32() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],0,movingLightUseNumber,movingLightSetInterval[32],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 15;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ]
        
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity = 1;
        
                                let l = Math.trunc( ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) / movingLightColorRepeatTimeSplit ) % 10;
        
                                if ( l % 3 > 0 ) movingLightColorOpacity = 0;
        
                                l = Math.trunc( l / 3 );                                
        
                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],movingLightColorOpacity);
                            }
                            
                        }
        
                    },movingLightSetTimeoutDelay[29]);

                    movingLightSetTimeoutDelay[30] = 195000;
                    movingLightSetTimeout[30] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[31]);
                        clearInterval(movingLightSetInterval[32]);
                        movingLightSetting(0);
        
                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK5_0);

                        function movingLightNumberSK5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                movingLightColorChange(2,1,255,180,230,-1);
                                movingLightColorChange(2,2,200,0,255,-1);
                                movingLightColorChange(2,3,0,255,0,-1);
                                movingLightColorChange(2,4,200,0,255,-1);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }
        
                        movingLightSetInterval[33] = setInterval(movingLightNumberSK5_33);
        
                        function movingLightNumberSK5_33() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[33],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2800;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 4;
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 10;
                            let angleZCenter = 90;
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * ( 4 - i ) ) % movingLightAngleRepeatTime;
        
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
        
                        }
        
                        movingLightSetInterval[34] = setInterval(movingLightNumberSK5_34);
        
                        function movingLightNumberSK5_34() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],0,movingLightUseNumber,movingLightSetInterval[34],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 1 , 0 ];                            
                            let movingLightColorOpacity = 1;
                            let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * 2 ) % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            
                        }
        
                    },movingLightSetTimeoutDelay[30]);

                    movingLightSetTimeoutDelay[31] = 201000;
                    movingLightSetTimeout[31] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[34]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[27] = setInterval(movingLightNumberSK5_27);

                        function movingLightNumberSK5_27() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[31],0,movingLightUseNumber,movingLightSetInterval[27],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[33]);
                                clearInterval(movingLightSetInterval[27]);
                            }

                        }

                    },movingLightSetTimeoutDelay[31]);

                    movingLightSetTimeoutDelay[32] = 208000;
                    movingLightSetTimeout[32] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[35] = setInterval(movingLightNumberSK5_35);

                        function movingLightNumberSK5_35() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[32],0,movingLightUseNumber,movingLightSetInterval[35],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-40,-85,movingLightAngleFadeTime,nowTime[0]);

                                movingLightColorChange(1,1,255,0,50,0);
                                movingLightColorChange(1,2,200,0,255,0);
                                movingLightColorChange(1,3,0,255,0,0);
                                movingLightColorChange(1,4,200,0,255,0);

                                movingLightColorChange(2,1,200,0,255,0);
                                movingLightColorChange(2,2,255,255,255,0);
                                movingLightColorChange(2,3,50,0,255,0);
                                movingLightColorChange(2,4,0,255,0,0);
                                movingLightColorChange(2,5,0,0,0,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[35]);
                            }

                        }

                    },movingLightSetTimeoutDelay[32]);

                    movingLightSetTimeoutDelay[33] = 217500;
                    movingLightSetTimeout[33] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[36] = setInterval(movingLightNumberSK5_36);

                        function movingLightNumberSK5_36() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[33],0,movingLightUseNumber,movingLightSetInterval[36],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[36]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[33]);

                    movingLightSetTimeoutDelay[34] = 220000;
                    movingLightSetTimeout[34] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightAngleFadeTime2 = 2000;
                        let movingLightColorFadeTime = 400;
                        let movingLightColorFadeTime2 = 800;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSK5_15);

                        function movingLightNumberSK5_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[34],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightInsideNumber;
                            let movingLightAngleLapTimeSplit = [ 2 , 3 , 0 , 0 ];
                            let angleXYRadius = 60;
                            let angleXYCenter = 0;
                            let angleZRadius = 25;
                            let angleZCenter = -75;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            angleXYRadius = 15;
                            angleXYCenter = 5;
                            angleZRadius = 15;
                            angleZCenter = 85;
                        
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                        
                            movingLightAngleChange(2,5,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                        movingLightSetInterval[16] = setInterval(movingLightNumberSK5_16);

                        function movingLightNumberSK5_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[34],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime2 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,255,255,0,1,movingLightColorFadeTime2,nowTime[0],1);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime2,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }

                        }

                        movingLightSetInterval[17] = setInterval(movingLightNumberSK5_17);

                        function movingLightNumberSK5_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[34],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightBasicColor = [ [ 200 , 0 , 255 ] , [ 255 , 0 , 50 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 4 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                        }

                    },movingLightSetTimeoutDelay[34]);

                    movingLightSetTimeoutDelay[35] = 230000;
                    movingLightSetTimeout[35] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[18] = setInterval(movingLightNumberSK5_18);

                        function movingLightNumberSK5_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[35],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            let movingLightColorRepeatTime = 700;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / 5;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= 5 ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * ( 7 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                if ( i === 5 ) movingLightColorChange(2,5,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                                else movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[35]);

                    movingLightSetTimeoutDelay[36] = 240000;
                    movingLightSetTimeout[36] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[15]);
                        clearInterval(movingLightSetInterval[17]);
                        clearInterval(movingLightSetInterval[18]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[26] = setInterval(movingLightNumberSK5_26);

                        function movingLightNumberSK5_26() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[36],0,movingLightUseNumber,movingLightSetInterval[26],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-40,-85,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[26]);
                            }

                        }

                    },movingLightSetTimeoutDelay[36]);

                    movingLightSetTimeoutDelay[37] = 240500;
                    movingLightSetTimeout[37] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberSK5_9);

                        function movingLightNumberSK5_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[37],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let movingLightAngleLapTimeSplit = [ 4 , 3 , 1 , 0 , 2 ];
                            let angleXYRadius = 25;
                            let angleXYCenter = 0;
                            let angleZRadius = 20;
                            let angleZCenter = 100;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit * movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[37]);

                    movingLightSetTimeoutDelay[38] = 241000;
                    movingLightSetTimeout[38] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 300;
                        let movingLightColorFadeTime2 = 500;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSK5_0);

                        function movingLightNumberSK5_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[38],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,200,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberSK5_7);

                        function movingLightNumberSK5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[38],movingLightColorFadeTime2,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 255 , 0 , 50 ] , [ 200 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * i ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime2,nowTime[0]);

                            }
                            
                        }

                        movingLightSetInterval[20] = setInterval(movingLightNumberSK5_20);

                        function movingLightNumberSK5_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[38],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let angleXYRadius = 60;
                            let angleXYCenter = [ -30 , 0 , 0 , 0 ];
                            let angleZRadius = 15;
                            let angleZCenter = -55;

                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {                                
                                let angleXY = angleXYCenter[i-1] + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[38]);

                    movingLightSetTimeoutDelay[39] = 244000;
                    movingLightSetTimeout[39] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[21] = setInterval(movingLightNumberSK5_21);

                        function movingLightNumberSK5_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[39],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let maxOpacity = [ 0 , 1 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( 6 - i ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = maxOpacity[l] + ( maxOpacity[ ( l + 1 ) % 2 ] - maxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[39]);

                    movingLightSetTimeoutDelay[40] = 253000;
                    movingLightSetTimeout[40] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[21]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSK5_4);

                        function movingLightNumberSK5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[40],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[34]);
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[40]);

                    movingLightSetTimeoutDelay[41] = 253300;
                    movingLightSetTimeout[41] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[20]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[37] = setInterval(movingLightNumberSK5_37);

                        function movingLightNumberSK5_37() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[41],0,movingLightUseNumber,movingLightSetInterval[37],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[37]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[41]);

                    movingLightSetTimeoutDelay[42] = 255000;
                    movingLightSetTimeout[42] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[38] = setInterval(movingLightNumberSK5_38);

                        function movingLightNumberSK5_38() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[42],0,movingLightUseNumber,movingLightSetInterval[38],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,50,0,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[38]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[42]);

                    movingLightSetTimeoutDelay[43] = 263200;
                    movingLightSetTimeout[43] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[27] = setInterval(movingLightNumberSK5_27);

                        function movingLightNumberSK5_27() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[43],0,movingLightUseNumber,movingLightSetInterval[27],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[27]);
                            }

                        }

                    },movingLightSetTimeoutDelay[43]);

                    movingLightSetTimeoutDelay[44] = 269000;
                    movingLightSetTimeout[44] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2500;

                        movingLightSetInterval[39] = setInterval(movingLightNumberSK5_39);

                        function movingLightNumberSK5_39() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[44],0,movingLightUseNumber,movingLightSetInterval[39],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[39]);
                            }

                        }

                    },movingLightSetTimeoutDelay[44]);

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtain("AO");

                    /***** LED 58 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber58);

                    function ledNumber58() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 180 , 255 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BJ *****/
                    waterCurtain("BJ");

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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BL *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("BL");
                    },500);

                    /***** LED SK15 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK15);

                    function ledNumberSK15() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 10;
                        let j = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 10;
                        let ledJudgeTime = nowTime[1] % ledRepeatTimeSplit;                        
                        let ledBasicColor = [ [ 255 , 50 , 120 ] , [ 255 , 180 , 220 ] ];

                        let ledArray = [[0,0,1,1,0,1,1,0,0,1],[1,1,0,1,1,1,0,0,1,0],[0,1,1,0,1,1,1,0,1,1],[0,0,1,1,0,0,0,0,1,1],[0,1,1,1,0,1,1,1,1,0],[0,1,1,1,0,1,1,0,1,1],[1,0,0,1,1,0,1,0,0,0],[0,0,1,0,1,1,0,1,0,1],[1,1,0,0,1,1,0,1,0,1],[1,0,0,1,0,1,1,1,0,0],[0,0,1,0,1,1,0,0,0,0],[1,1,1,0,0,0,1,1,0,0],[1,1,1,0,0,1,1,1,1,0],[1,1,0,1,1,0,1,1,1,1],[0,1,0,1,1,0,1,1,0,1],[0,1,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,0,0,0,0,1,1,0,0],[1,1,1,0,1,0,0,1,0,1]];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let m = ledArray[i-1][j];
                            let n = ledArray[i-1][ ( j + 1 ) % 10 ];

                            if ( m === n ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k] + ( ledBasicColor[n][k] - ledBasicColor[m][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        ledArray = [[0,0,1,0,0,1,1,0,1,1],[0,0,0,1,0,0,1,0,0,0],[1,0,0,0,1,0,1,0,0,1],[1,1,1,1,1,0,0,0,1,1],[0,1,1,0,1,1,0,1,0,0],[0,0,0,0,0,1,1,1,0,1],[1,1,1,1,1,0,0,0,1,0],[1,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,0,1,0,0,1],[0,1,0,1,0,0,0,0,0,1],[0,1,1,0,0,0,0,0,0,0],[0,1,1,0,0,1,0,1,0,1],[0,1,1,0,1,1,0,1,1,1],[0,1,0,0,0,1,1,0,1,0],[0,0,0,0,1,1,0,0,0,0],[1,0,1,1,0,1,0,0,0,0],[0,1,1,0,0,1,1,1,1,0],[1,0,0,1,1,1,1,0,0,0],[0,1,0,1,1,1,0,1,1,0],[1,0,0,0,1,0,1,1,0,0],[0,0,0,1,1,0,0,1,0,1],[0,0,0,0,0,1,0,1,1,0],[1,1,1,0,0,1,0,0,1,0],[0,0,0,1,1,0,0,1,1,0],[0,0,0,1,1,1,0,0,0,1],[0,1,1,1,0,0,1,0,0,1],[1,1,1,0,1,1,1,1,1,0],[1,1,1,0,0,0,1,0,1,0],[0,0,0,0,1,0,0,1,1,0],[0,1,1,0,0,0,0,0,1,0],[0,0,0,0,1,1,0,0,1,1],[1,0,0,1,0,0,0,0,0,1],[1,1,0,0,1,1,0,0,0,1],[0,1,0,1,1,1,1,1,1,1],[1,0,0,1,0,0,1,0,0,1],[0,0,1,0,1,0,0,1,1,1],[0,0,0,0,1,0,1,1,1,0],[1,1,0,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1],[1,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,0,0,0],[1,0,1,0,0,1,1,1,0,0],[1,0,0,1,1,1,1,0,0,1],[0,0,1,1,0,1,1,0,1,1],[0,1,1,0,0,1,0,0,1,1],[0,1,0,0,1,0,1,1,1,0],[0,1,0,0,0,0,1,1,1,1],[1,0,0,0,1,1,0,0,1,1]];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let m = ledArray[i-1][j];
                            let n = ledArray[i-1][ ( j + 1 ) % 10 ];

                            if ( m === n ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][k] + ( ledBasicColor[n][k] - ledBasicColor[m][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED SK16 *****/
                    ledActualSetTimeout = setTimeout( function() {
                        let ledMyNumber = ledSetting();
                        let ledSetInterval = setInterval(ledNumberSK16);

                        function ledNumberSK16() {
                            let ledFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+500,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 200;
                            let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] ];
                            
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
                            
                            ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;

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
                    },500);

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン V *****/
                    waterCurtain("V");

                    /***** LED SK17 *****/
                    ledActualSetTimeout = setTimeout( function() {
                        let ledMyNumber = ledSetting();
                        let ledSetInterval = setInterval(ledNumberSK17);

                        function ledNumberSK17() {
                            let ledFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+500,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 5;
                            let ledBasicColor = [ [ 255 , 200 , 0 ] , [ 255 , 255 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 2 / 17;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 4 );
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 2 / 40;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 1 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 4 );
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                    },500);

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                    /***** LED SK18 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK18);

                    function ledNumberSK18() {
                        let ledFadeTime = 1000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 3000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledChangeTime = 200;
                        let ledBasicColor = [ [ 240 , 220 , 255 ] , [ 255 , 120 , 150 ] ];
                        let ledColor = [];

                        let ledJudgeTime = nowTime[1] % ledRepeatTime;
                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        ledJudgeTime = ( ledJudgeTime + ledRepeatTimeSplit ) % ledRepeatTime;
                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

                } else if ( key === 'u' ) {
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

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("A");
                    },800);

                    /***** LED SK19 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK19);

                    function ledNumberSK19() {
                        let ledFadeTime = 800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledChangeTime = 200;
                        let ledBasicColor = [ [ 240 , 230 , 255 ] , [ 255 , 50 , 80 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

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
                        
                        ledLapTimeSplit = ledRepeatTime * 8 / ledNumberOutside;

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

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AP *****/
                    waterCurtain("AP");

                    /***** LED 58 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber58);

                    function ledNumber58() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 180 , 255 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED SK20 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK20);

                    function ledNumberSK20() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 10;
                        let j = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 10;
                        let ledJudgeTime = nowTime[1] % ledRepeatTimeSplit;
                        let ledBasicColor = [ [ [ 220 , 225 , 255 ] , [ 220 , 225 , 255 ] ] , [ [ 255 , 255 , 0 ] , [ 255 , 0 , 0 ] ] ];

                        let l = Math.trunc( nowTime[1] / ledRepeatTime ) % 2;

                        let ledArray = [[0,0,1,1,0,1,1,0,0,1],[1,1,0,1,1,1,0,0,1,0],[0,1,1,0,1,1,1,0,1,1],[0,0,1,1,0,0,0,0,1,1],[0,1,1,1,0,1,1,1,1,0],[0,1,1,1,0,1,1,0,1,1],[1,0,0,1,1,0,1,0,0,0],[0,0,1,0,1,1,0,1,0,1],[1,1,0,0,1,1,0,1,0,1],[1,0,0,1,0,1,1,1,0,0],[0,0,1,0,1,1,0,0,0,0],[1,1,1,0,0,0,1,1,0,0],[1,1,1,0,0,1,1,1,1,0],[1,1,0,1,1,0,1,1,1,1],[0,1,0,1,1,0,1,1,0,1],[0,1,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,0,0,0,0,1,1,0,0],[1,1,1,0,1,0,0,1,0,1]];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let m = ledArray[i-1][j];
                            let n = ledArray[i-1][ ( j + 1 ) % 10 ];

                            if ( m === n ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][l][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][l][k] + ( ledBasicColor[n][l][k] - ledBasicColor[m][l][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        l = 1 - l;

                        ledArray = [[0,0,1,0,0,1,1,0,1,1],[0,0,0,1,0,0,1,0,0,0],[1,0,0,0,1,0,1,0,0,1],[1,1,1,1,1,0,0,0,1,1],[0,1,1,0,1,1,0,1,0,0],[0,0,0,0,0,1,1,1,0,1],[1,1,1,1,1,0,0,0,1,0],[1,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,0,1,0,0,1],[0,1,0,1,0,0,0,0,0,1],[0,1,1,0,0,0,0,0,0,0],[0,1,1,0,0,1,0,1,0,1],[0,1,1,0,1,1,0,1,1,1],[0,1,0,0,0,1,1,0,1,0],[0,0,0,0,1,1,0,0,0,0],[1,0,1,1,0,1,0,0,0,0],[0,1,1,0,0,1,1,1,1,0],[1,0,0,1,1,1,1,0,0,0],[0,1,0,1,1,1,0,1,1,0],[1,0,0,0,1,0,1,1,0,0],[0,0,0,1,1,0,0,1,0,1],[0,0,0,0,0,1,0,1,1,0],[1,1,1,0,0,1,0,0,1,0],[0,0,0,1,1,0,0,1,1,0],[0,0,0,1,1,1,0,0,0,1],[0,1,1,1,0,0,1,0,0,1],[1,1,1,0,1,1,1,1,1,0],[1,1,1,0,0,0,1,0,1,0],[0,0,0,0,1,0,0,1,1,0],[0,1,1,0,0,0,0,0,1,0],[0,0,0,0,1,1,0,0,1,1],[1,0,0,1,0,0,0,0,0,1],[1,1,0,0,1,1,0,0,0,1],[0,1,0,1,1,1,1,1,1,1],[1,0,0,1,0,0,1,0,0,1],[0,0,1,0,1,0,0,1,1,1],[0,0,0,0,1,0,1,1,1,0],[1,1,0,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1],[1,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,0,0,0],[1,0,1,0,0,1,1,1,0,0],[1,0,0,1,1,1,1,0,0,1],[0,0,1,1,0,1,1,0,1,1],[0,1,1,0,0,1,0,0,1,1],[0,1,0,0,1,0,1,1,1,0],[0,1,0,0,0,0,1,1,1,1],[1,0,0,0,1,1,0,0,1,1]];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let m = ledArray[i-1][j];
                            let n = ledArray[i-1][ ( j + 1 ) % 10 ];

                            if ( m === n ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][l][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[m][l][k] + ( ledBasicColor[n][l][k] - ledBasicColor[m][l][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK21 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[0] = 0;
                    ledSetTimeout[0] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSK21_1);
                        
                        function ledNumberSK21_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[0],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);                     
                            let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] ];

                            let ledArray = [[0,0,1,1,0,1,1,0,0,1],[1,1,0,1,1,1,0,0,1,0],[0,1,1,0,1,1,1,0,1,1],[0,0,1,1,0,0,0,0,1,1],[0,1,1,1,0,1,1,1,1,0],[0,1,1,1,0,1,1,0,1,1],[1,0,0,1,1,0,1,0,0,0],[0,0,1,0,1,1,0,1,0,1],[1,1,0,0,1,1,0,1,0,1],[1,0,0,1,0,1,1,1,0,0],[0,0,1,0,1,1,0,0,0,0],[1,1,1,0,0,0,1,1,0,0],[1,1,1,0,0,1,1,1,1,0],[1,1,0,1,1,0,1,1,1,1],[0,1,0,1,1,0,1,1,0,1],[0,1,0,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,0,0,0,0,1,1,0,0],[1,1,1,0,1,0,0,1,0,1]];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let m = ledArray[i-1][0];

                                ledColorChange(1,i,ledBasicColor[m][0],ledBasicColor[m][1],ledBasicColor[m][2],nowTime[0],ledFadeTime,0,ledSetInterval[1]);
                            }

                            ledArray = [[0,0,1,0,0,1,1,0,1,1],[0,0,0,1,0,0,1,0,0,0],[1,0,0,0,1,0,1,0,0,1],[1,1,1,1,1,0,0,0,1,1],[0,1,1,0,1,1,0,1,0,0],[0,0,0,0,0,1,1,1,0,1],[1,1,1,1,1,0,0,0,1,0],[1,0,1,1,1,1,1,1,0,0],[0,0,0,1,1,0,1,0,0,1],[0,1,0,1,0,0,0,0,0,1],[0,1,1,0,0,0,0,0,0,0],[0,1,1,0,0,1,0,1,0,1],[0,1,1,0,1,1,0,1,1,1],[0,1,0,0,0,1,1,0,1,0],[0,0,0,0,1,1,0,0,0,0],[1,0,1,1,0,1,0,0,0,0],[0,1,1,0,0,1,1,1,1,0],[1,0,0,1,1,1,1,0,0,0],[0,1,0,1,1,1,0,1,1,0],[1,0,0,0,1,0,1,1,0,0],[0,0,0,1,1,0,0,1,0,1],[0,0,0,0,0,1,0,1,1,0],[1,1,1,0,0,1,0,0,1,0],[0,0,0,1,1,0,0,1,1,0],[0,0,0,1,1,1,0,0,0,1],[0,1,1,1,0,0,1,0,0,1],[1,1,1,0,1,1,1,1,1,0],[1,1,1,0,0,0,1,0,1,0],[0,0,0,0,1,0,0,1,1,0],[0,1,1,0,0,0,0,0,1,0],[0,0,0,0,1,1,0,0,1,1],[1,0,0,1,0,0,0,0,0,1],[1,1,0,0,1,1,0,0,0,1],[0,1,0,1,1,1,1,1,1,1],[1,0,0,1,0,0,1,0,0,1],[0,0,1,0,1,0,0,1,1,1],[0,0,0,0,1,0,1,1,1,0],[1,1,0,1,1,1,0,0,0,1],[0,1,1,0,0,1,1,0,0,1],[1,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,0,0,0],[1,0,1,0,0,1,1,1,0,0],[1,0,0,1,1,1,1,0,0,1],[0,0,1,1,0,1,1,0,1,1],[0,1,1,0,0,1,0,0,1,1],[0,1,0,0,1,0,1,1,1,0],[0,1,0,0,0,0,1,1,1,1],[1,0,0,0,1,1,0,0,1,1]];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let m = ledArray[i-1][0];

                                ledColorChange(2,i,ledBasicColor[m][0],ledBasicColor[m][1],ledBasicColor[m][2],nowTime[0],ledFadeTime,0,ledSetInterval[1]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[0]);

                    ledSetTimeoutDelay[1] = 4500;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSK21_2);
                        
                        function ledNumberSK21_2() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 6000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSK21_3);
                        
                        function ledNumberSK21_3() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],0,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2350;
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 120 , 150 ] , [ 255 , 50 , 80 ] , [ 255 , 0 , 0 ] ];
                            let ledColor = [];

                            let l = Math.trunc( nowTime[0] / ledRepeatTimeSplit ) % 6;
                            
                            if ( l % 2 === 1 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                            } else {
                                let j = l / 2;
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[j][k];
                            }

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 24000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSK21_4);
                        
                        function ledNumberSK21_4() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],0,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 9;
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 0 ] , [ 255 , 120 , 150 ] , [ 255 , 50 , 80 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTimeSplit * 15 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[0] + ledLapTimeSplit * j ) % ledRepeatTime;

                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 29800;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSK21_2);
                        
                        function ledNumberSK21_2() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                        }
                        
                    },ledSetTimeoutDelay[4]);

                    /***** 水中照明 SK4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetTimeoutDelay = [];
                    let waterLightSetInterval = [];

                    waterLightSetTimeoutDelay[1] = 0;
                    waterLightSetTimeout[1] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSK4_1);

                        function waterLightNumberSK4_1() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[1],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,120,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                        }
                        
                    },waterLightSetTimeoutDelay[1]);

                    waterLightSetTimeoutDelay[2] = 5000;
                    waterLightSetTimeout[2] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSK4_2);

                        function waterLightNumberSK4_2() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[2],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,150,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[2]);
                        }
                        
                    },waterLightSetTimeoutDelay[2]);

                    waterLightSetTimeoutDelay[3] = 29800;
                    waterLightSetTimeout[3] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSK4_3);

                        function waterLightNumberSK4_3() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[3],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,180,150,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                        }
                        
                    },waterLightSetTimeoutDelay[3]);

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

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

                    /***** 水中照明 SK2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSK2);

                    function waterLightNumberSK2() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,255,150,120,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SK22 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[0] = 0;
                    ledSetTimeout[0] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSK22_1);
                        
                        function ledNumberSK22_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[0],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);                     
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[0]);

                    ledSetTimeoutDelay[1] = 1500;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSK22_2);
                        
                        function ledNumberSK22_2() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,120,150,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,220,200,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 3300;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSK22_3);
                        
                        function ledNumberSK22_3() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],0,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,220,200,255,nowTime[0],ledFadeTime,0,ledSetInterval[3]);
                        }
                        
                    },ledSetTimeoutDelay[2]);

                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber4);

                    function ledNumber4() {
                        let ledFadeTime = 3200;
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

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED 58 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber58);

                    function ledNumber58() {
                        let ledFadeTime = 1800;
                        let ledRepeatTime = 1000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 180 , 255 ] , [ 255 , 0 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberInside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }
                        
                        ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = ledNumberOutside - i;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtainActualSetTimeout[0] = setTimeout( function() {
                        waterCurtain("A");
                    },800);

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

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SK2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSK2);
        
                    function logoboardLightNumberSK2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 100 , 120 , 100 ];
                            else if ( j < 9 ) logoboardLightColor = [ 255 , 255 , 255 , 255 ];
                            else logoboardLightColor = [ 120 , 255 , 255 , 120 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト SK1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberSK1);

                    function parLightNumberSK1() {
                        let parLightFadeTime = 2500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];

                            switch ( i % 2 ) {
                                case 0:
                                    parLightColor = [ 255 , 0 , 255 ];
                                    break;
                                case 1:
                                    parLightColor = [ 255 , 255 , 0 ];
                                    break;
                            }

                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);
                        }                  
                    }

                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** パーライト HfW1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberHfW1);

                    function parLightNumberHfW1() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,220,180,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SK3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 600;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSK3);
        
                    function logoboardLightNumberSK3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i - 1;
                            else j = logoboardLightNumber - i;

                            if ( Math.trunc( j / 6 ) === 0 ) logoboardLightColor = [ 255 , 0 , 0 , 0 ];
                            else if ( Math.trunc( j / 6 ) === 2 ) logoboardLightColor = [ 255 , 50 , 0 , 0 ];
                            else if ( Math.trunc( j / 3 ) % 2 === 0 ) logoboardLightColor = [ 255 , 150 , 0 , 100 ];
                            else logoboardLightColor = [ 255 , 120 , 0 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** パーライト MB4 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberMB4);

                    function parLightNumberMB4() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,0,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                 
                    }

                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SK4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightSK4);
        
                    function logoboardLightSK4() {
                        let nowTime = nowTimeGet(startTime,1500,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 500;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 3;
                        let logoboardLapTimeSplit = logoboardRepeatTime / 4;
                        let logoboardBasicColor = [ [ 255 , 0 , 180 , 0 ] , [ 255 , 255 , 255 , 255 ] , [ 255 , 0 , 0 , 0 ] ];

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let j;

                            if ( i <= 24 ) j = Math.trunc( ( i - 1 ) / 3 );
                            else j = Math.trunc( ( 48 - i ) / 3 );

                            let logoboardJudgeTime = ( nowTime[1] + logoboardLapTimeSplit * j ) % logoboardRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 4 ; k++ ) logoboardColor[k] = logoboardBasicColor[l][k] + ( logoboardBasicColor[ ( l + 1 ) % 3 ][k] - logoboardBasicColor[l][k] ) / logoboardRepeatTimeSplit * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],logoboardColor[3],1,logoboardLightFadeTime,nowTime[0]);
                        }

                        if ( nowTime[0] >= 15850 ) clearInterval(logoboardLightSetInterval);
                    }
                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SK5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSK5);
        
                    function logoboardLightNumberSK5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        if ( nowTime[0] < logoboardLightFadeTime ) {
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,-1,-1,-1,-1,0,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        } else {
                            logoboardLightOFF(0);
                            clearInterval(logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト OFF *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberOFF);

                    function parLightNumberOFF() {
                        let parLightFadeTime = 600;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,0,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                 
                    }

                } else if ( subCode === 12 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 SK6 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSK6);
        
                    function logoboardLightNumberSK6() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;

                            if ( j < 6 ) logoboardLightColor = [ 150 , 0 , 255 , 50 ];
                            else if ( j < 9 ) logoboardLightColor = [ 0 , 255 , 255 , 100 ];
                            else logoboardLightColor = [ 0 , 255 , 255 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト SK2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberSK2);

                    function parLightNumberSK2() {
                        let parLightFadeTime = 3500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,50,100,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                 
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2800;
                        spotLightChange(1,spotFadeTime,startTime + 700);
                    },700);
    
                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();
    
                    /***** 看板照明 SK7 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSK7);
        
                    function logoboardLightNumberSK7() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 0 , 0 , 0 ];
                            else if ( j < 9 ) logoboardLightColor = [ 255 , 100 , 180 , 255 ];
                            else logoboardLightColor = [ 255 , 100 , 100 , 0 ];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト SE3 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberSE3);

                    function parLightNumberSE3() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,100,200,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                 
                    }
    
                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** スポットライト *****/
                    let spotFadeTime = 1000;
                    spotLightChange(1,spotFadeTime,startTime);
                    
                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SK8 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSK8);
        
                    function logoboardLightNumberSK8() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 1600;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 6;
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [ 0 , 0 , 0 ];
                            let logoboardLapTimeSplit = logoboardRepeatTime / 24 * ( 48 - i );

                            let logoboardJudgeTime = ( nowTime[0] + logoboardLapTimeSplit + logoboardRepeatTimeSplit * 2 ) % logoboardRepeatTime;

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
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1);
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1500;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** パーライト defult *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberDefult);

                    function parLightNumberDefult() {
                        let parLightFadeTime = 2500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2100;
                        spotLightChange(1,spotFadeTime,startTime + 400);
                    },400);
                    
                }
            }
        }
    }
});