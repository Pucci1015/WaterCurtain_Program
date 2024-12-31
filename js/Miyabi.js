jsSetting("Miyabi","MIYABI",2,2,0,0,3200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "Miyabi" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 MIYABI1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetTimeoutDelay = [];
                    let waterLightSetInterval = [];

                    waterLightSetTimeoutDelay[0] = 0;
                    waterLightSetTimeout[0] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberMIYABI1_1);

                        function waterLightNumberMIYABI1_1() {
                            let waterLightFadeTime = 3200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[0],0,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[0]);

                    waterLightSetTimeoutDelay[1] = 90000;
                    waterLightSetTimeout[1] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberMIYABI1_2);

                        function waterLightNumberMIYABI1_2() {
                            let waterLightFadeTime = 270000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[1],0,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[2]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[1]);

                    /***** 看板照明 MIYABI1 *****/
                    logoboardLightSetting(2);
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3200;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI1_1);
        
                    function logoboardLightNumberMIYABI1_1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 50 , 255 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 200 , 255 , 0 ];
                            else logoboardLightColor = [ 255 , 255 , 255 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        let logoboardLightMyNumber1 = logoboardLightSetting(1);
                        let logoboardLightSetInterval1 = setInterval(logoboardLightNumberMIYABI1_2);
            
                        function logoboardLightNumberMIYABI1_2() {
                            let nowTime = nowTimeGet(startTime+90000,0,logoboardLightUseNumber[1],logoboardLightSetInterval1,logoboardLightMyNumber1);

                            if ( nowTime[0] > 510000 ) clearInterval(logoboardLightSetInterval1);
            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightBasicColor;
                                let logoboardLightJudgeTime, logoboardLightRepeatTime;

                                if ( i <= logoboardLightNumber / 2 ) j = i;
                                else j = logoboardLightNumber - i + 1;                                

                                if ( j <= 6 ) {
                                    logoboardLightRepeatTime = 420000;
                                    logoboardLightJudgeTime = nowTime[0];
                                    logoboardLightBasicColor = [ [ 0 , 50 , 255 , 0 ] , [ 150 , 0 , 255 , 0 ] ];
                                } else if ( j <= 12 ) {
                                    logoboardLightRepeatTime = 360000;
                                    logoboardLightJudgeTime = nowTime[0] - 90000;
                                    logoboardLightBasicColor = [ [ 0 , 200 , 255 , 0 ] , [ 255 , 255 , 255 , 255 ] ];
                                } else if ( j <= 18 ) {
                                    logoboardLightRepeatTime = 420000;
                                    logoboardLightJudgeTime = nowTime[0];
                                    logoboardLightBasicColor = [ [ 0 , 200 , 255 , 0 ] , [ 200 , 0 , 255 , 0 ] ];
                                } else if ( j <= 24 ) {
                                    logoboardLightRepeatTime = 420000;
                                    logoboardLightJudgeTime = nowTime[0] - 90000;
                                    logoboardLightBasicColor = [ [ 255 , 255 , 255 , 255 ] , [ 255 , 80 , 200 , 0 ] ];
                                }

                                if ( logoboardLightJudgeTime >= 0 && logoboardLightJudgeTime <= logoboardLightRepeatTime ) {
                                    let logoboardLightColor = [];

                                    for ( var k = 0 ; k < 4 ; k++ ) logoboardLightColor[k] = logoboardLightBasicColor[0][k] + ( logoboardLightBasicColor[1][k] - logoboardLightBasicColor[0][k] ) / logoboardLightRepeatTime * logoboardLightJudgeTime;
                
                                    logoboardLightAnimateChange(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1);
                                }
                                
                            }
                        }
                        
                    },90000);
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();

                    /***** 水中照明 MIYABI2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberMIYABI2);

                    function waterLightNumberMIYABI2() {
                        let waterLightFadeTime = 11000;
                        let nowTime = nowTimeGet(startTime,0,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,200,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 MIYAB2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 7000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI2);
        
                    function logoboardLightNumberMIYABI2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 80 , 0 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 255 , 200 , 200 , 255 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 200 , 0 , 100 ];
                            else logoboardLightColor = [ 255 , 200 , 200 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,2);
                        }
                    }
                } else if ( key === 'h' ) {
                    let startTime = Date.now();

                    /***** 水中照明 MIYABI3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberMIYABI3);

                    function waterLightNumberMIYABI3() {
                        let fadeTime = 3500;
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

                    /***** 看板照明 defult *****/
                    logoboardLightOFF(3000);

                    /***** ムービングライト MIYABI1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,52,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberMIYABI1_1);

                        function movingLightNumberMIYABI1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,240,180,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,255,80,0,0);
                                    movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
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

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI1_2);

                        function movingLightNumberMIYABI1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightMaxOpacity = [ 1 , 0.2 ];
                            let movingLightColorOpacity;
                            let movingLightColorJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 2500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMIYABI1_3);

                        function movingLightNumberMIYABI1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,-145,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-100,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-60,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-130,-90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 12000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,11,100,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMIYABI1_4);

                        function movingLightNumberMIYABI1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;
                            let movingLightColor = [];

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberMIYABI1_5);

                        function movingLightNumberMIYABI1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 4000 * ( nowTime[0] % 4000 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,-1*movingLightRotateDeg);
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 24000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMIYABI1_6);

                        function movingLightNumberMIYABI1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 25000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMIYABI1_7);

                        function movingLightNumberMIYABI1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 26000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[8] = setInterval(movingLightNumberMIYABI1_8);

                        function movingLightNumberMIYABI1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,200,0,1,movingLightColorFadeTime,nowTime[1],1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン V *****/
                    waterCurtain("V");

                    /***** LED MIYABI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI1);

                    function ledNumberMIYABI1() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1400;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;                        
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 0 , 0 , 255 ] ];
                        let ledJudgeTime = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 2;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let l = ( ledJudgeTime + Math.trunc( ( i + 1 ) / 2 ) ) % 2;

                            ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let l = ( ledJudgeTime + Math.trunc( ( i - 1 ) / 4 ) ) % 2;

                            ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'j' ) {
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AT *****/
                    waterCurtain("AT");

                    /***** LED WP8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP8);

                    function ledNumberWP8() {
                        let ledFadeTime = 800;
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

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BR *****/
                    waterCurtain("BR");

                    /***** LED MIYABI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI1);

                    function ledNumberMIYABI1() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1400;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;                        
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 0 , 0 , 255 ] ];
                        let ledJudgeTime = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 2;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let l = ( ledJudgeTime + Math.trunc( ( i + 1 ) / 2 ) ) % 2;

                            ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let l = ( ledJudgeTime + Math.trunc( ( i - 1 ) / 4 ) ) % 2;

                            ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                        }

                    }

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AO *****/
                    waterCurtain("AO");

                    /***** LED 84 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber84);

                    function ledNumber84() {
                        let ledFadeTime = 2800;
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

                    /***** ムービングライト MIYABI2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 800;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,52,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberMIYABI2_1);

                        function movingLightNumberMIYABI2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,0,0);
                                movingLightAngleChange(1,1,-145,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-100,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-60,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-130,-90,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,180,255,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 18000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI2_2);

                        function movingLightNumberMIYABI2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 18500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMIYABI2_3);

                        function movingLightNumberMIYABI2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            
                            } else {
                                let movingLightColorRepeatTime = 2100;
                                let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                                let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] ];
                                let l = Math.trunc( nowTime[1] / movingLightColorRepeatTimeSplit ) % 2;

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1,100,nowTime[0]);
                            
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberMIYABI2_4);

                        function movingLightNumberMIYABI2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 800;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( ( i - 1 ) % 2 ) ) % movingLightColorRepeatTime;
                                let movingLightColor = [];

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightColorChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                                
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberMIYABI2_5);

                        function movingLightNumberMIYABI2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 4000 * ( nowTime[0] % 4000 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 39000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMIYABI2_6);

                        function movingLightNumberMIYABI2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AU *****/
                    waterCurtain("AU");

                    /***** LED MIYABI2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI2);

                    function ledNumberMIYABI2() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 3000;
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

                } else if ( key === 'o' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BL *****/
                    waterCurtain("BL");

                    /***** LED MIYABI1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI1);

                    function ledNumberMIYABI1() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1400;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;                        
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 0 , 0 , 255 ] ];
                        let ledJudgeTime = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 2;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let l = ( ledJudgeTime + Math.trunc( ( i + 1 ) / 2 ) ) % 2;

                            ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let l = ( ledJudgeTime + Math.trunc( ( i - 1 ) / 4 ) ) % 2;

                            ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** ムービングライト MIYABI3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1800;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,52,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberMIYABI3_1);

                        function movingLightNumberMIYABI3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                movingLightAngleChange(1,1,-145,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-100,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-60,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-130,-90,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI3_2);

                        function movingLightNumberMIYABI3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 800;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( ( i - 1 ) % 2 ) ) % movingLightColorRepeatTime;
                                let movingLightColor = [];

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightColorChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                                
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1200;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMIYABI3_3);

                        function movingLightNumberMIYABI3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            
                            } else {
                                let movingLightColorRepeatTime = 2100;
                                let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                                let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] ];
                                let l = Math.trunc( nowTime[1] / movingLightColorRepeatTimeSplit ) % 2;

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1,100,nowTime[0]);
                            
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberMIYABI3_4);

                        function movingLightNumberMIYABI3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightRotateDeg = -360 / 4000 * ( nowTime[0] % 4000 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 12000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMIYABI3_5);

                        function movingLightNumberMIYABI3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 24000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI3_2);

                        function movingLightNumberMIYABI3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 800;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( ( i - 1 ) % 2 ) ) % movingLightColorRepeatTime;
                                let movingLightColor = [];

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightColorChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                                
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberMIYABI3_3);

                        function movingLightNumberMIYABI3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                            
                            } else {
                                let movingLightColorRepeatTime = 2100;
                                let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                                let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] ];
                                let l = Math.trunc( nowTime[1] / movingLightColorRepeatTimeSplit ) % 2;

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1,100,nowTime[0]);
                            
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 34000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMIYABI3_5);

                        function movingLightNumberMIYABI3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 48000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMIYABI3_6);

                        function movingLightNumberMIYABI3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,120,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 53500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI3_2);

                        function movingLightNumberMIYABI3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 800;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * ( ( i - 1 ) % 2 ) ) % movingLightColorRepeatTime;
                                let movingLightColor = [];

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightColorChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                                
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberMIYABI3_3);

                        function movingLightNumberMIYABI3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] < movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,0,1,movingLightColorFadeTime,nowTime[0],1);
                            
                            } else {
                                let movingLightColorRepeatTime = 2100;
                                let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                                let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 255 ] ];
                                let l = Math.trunc( nowTime[1] / movingLightColorRepeatTimeSplit ) % 2;

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1,100,nowTime[0]);
                            
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 79000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMIYABI3_5);

                        function movingLightNumberMIYABI3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 82000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,11,100,50,100);

                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMIYABI3_7);

                        function movingLightNumberMIYABI3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,240,180,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 0 ] ];
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;
                            let movingLightColor = [];

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            
                        }

                        movingLightSetInterval[8] = setInterval(movingLightNumberMIYABI3_8);

                        function movingLightNumberMIYABI3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 4000 * ( nowTime[0] % 4000 );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 90000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberMIYABI3_9);

                        function movingLightNumberMIYABI3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,-1);
                                clearInterval(movingLightSetInterval[4]);
                                clearInterval(movingLightSetInterval[8]);
                                clearInterval(movingLightSetInterval[9]);
                            }
                        }

                    },movingLightSetTimeoutDelay[9]);

                } else if ( key === 'p' ) {
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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED MIYABI3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI3);
        
                    function ledNumberMIYABI3() {
                        let ledFadeTime = 2700;
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

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

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

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン J *****/
                    waterCurtain("J");

                    /***** LED MIYABI4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI4);

                    function ledNumberMIYABI4() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1400;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;                        
                        let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 0 , 0 , 255 ] ];
                        let ledJudgeTime = Math.trunc( nowTime[1] / ledRepeatTimeSplit ) % 2;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let l = ( ledJudgeTime + Math.trunc( ( i + 1 ) / 2 ) ) % 2;

                            ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                        }

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ )ledColorChange(2,i,255,100,0,nowTime[0],ledFadeTime);

                    }

                } else if ( key === 't' ) {
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

                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber5);

                    function ledNumber5() {
                        let fadeTime = 3000;
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
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,100,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** 看板照明 MIYABI4 *****/
                    logoboardLightSetting(2);
                    
                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 2500;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI4);
            
                        function logoboardLightNumberMIYABI4() {
                            let nowTime = nowTimeGet(startTime+4700,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];

                                if ( i <= logoboardLightNumber / 2 ) j = i;
                                else j = logoboardLightNumber - i + 1;

                                if ( j <= 6 ) logoboardLightColor = [ 200 , 0 , 255 , 100 ];
                                else if ( j <= 18 ) logoboardLightColor = [ 0 , 120 , 255 , 200 ];
                                else logoboardLightColor = [ 220 , 100 , 255 , 255 ];

                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                            }
                        }
                    },4700);

                    /***** ムービングライト MIYABI4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;
                        let movingLightColorFadeTime = 1800;

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberMIYABI4_1);

                        function movingLightNumberMIYABI4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                movingLightAngleChange(1,1,-145,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-100,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,-60,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-130,-90,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,80,0,255,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 93 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber93);

                    function ledNumber93() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** 水中照明 RURI3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberRURI1);

                    function waterLightNumberRURI1() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,0,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                    }

                    /***** 看板照明 MIYABI6 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(2500,1);
                    },0);

                    let logoboardLightDelayTime = 3700;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 3000;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI6);
            
                        function logoboardLightNumberMIYABI6() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 0 , 255 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 0 , 150 , 255 , 0 ];
                            else logoboardLightColor = [ 200 , 200 , 255 , 0 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                } else if ( key === 'w' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン N *****/
                    waterCurtain("N");

                    /***** LED MIYABI5 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberMIYABI5_1);
                        
                        function ledNumberMIYABI5_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,120,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 5000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberMIYABI5_2);
                        
                        function ledNumberMIYABI5_2() {
                            let ledFadeTime = 1800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledRepeatTime = 2500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 255 , 255 , 255 ] ];                            
                            let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,255,nowTime[0],ledFadeTime);

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

                    ledSetTimeoutDelay[3] = 48400;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberMIYABI5_3);
                        
                        function ledNumberMIYABI5_3() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            let ledRepeatTime = 2500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 180 , 0 , 255 ] ];
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
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 79850;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledMyNumber4 = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberMIYABI5_4);
                        
                        function ledNumberMIYABI5_4() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledMyNumber4);
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 180 , 0 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 120 , 255 ] , [ 0 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;

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

                            ledLapTimeSplit = ledRepeatTime * 2 / 40;

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
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 86000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledMyNumber5 = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberMIYABI5_5);
                        
                        function ledNumberMIYABI5_5() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledMyNumber5);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,180,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[5]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[5]);

                        }
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 87500;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledMyNumber6 = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberMIYABI5_6);
                        
                        function ledNumberMIYABI5_6() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledMyNumber6);
                            let ledRepeatTime = 5500;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 255 , 255 , 255 ]  , [ 0 , 255 , 200 ] ];

                            let ledLapTimeSplit = ledRepeatTime * 5 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 3 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 3 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

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
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 98400;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledMyNumber7 = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberMIYABI5_7);
                        
                        function ledNumberMIYABI5_7() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledMyNumber7);
                            let ledRepeatTime = 6800;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 255 , 200 ] , [ 0 , 255 , 255 ] , [ 0 , 0 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;

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

                            ledLapTimeSplit = ledRepeatTime * 2 / 40;

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
                        
                    },ledSetTimeoutDelay[7]);

                    /***** 水中照明 BCP2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBCP2);

                    function waterLightNumberBCP2() {
                        let waterLightFadeTime = 200;
                        let waterLightRepeatTime = 3500;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        let waterLightColor = [];
                        let waterLightBasicColor = [ [ 0 , 150 , 255 ] , [ 0 , 0 , 255 ] ];

                        let waterLightJudgeTime = ( nowTime[1] + waterLightRepeatTimeSplit / 2 ) % waterLightRepeatTime;

                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                    }

                    /***** 看板照明 MIYABI7 *****/
                    logoboardLightSetting(2);

                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        logoboardLightOFF(0,1);
                    },0);

                    let logoboardLightDelayTime = 3700;
                    logoboardLightSetTimeout[2] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 2000;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI7);
            
                        function logoboardLightNumberMIYABI7() {
                            let nowTime = nowTimeGet(startTime+logoboardLightDelayTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];
        
                                if ( i <= logoboardLightNumber / 2 ) j = i;
                                else j = logoboardLightNumber - i + 1;

                                if ( j <= 6 ) logoboardLightColor = [ 0 , 150 , 255 , 0 ];
                                else if ( j <= 12 ) logoboardLightColor = [ 0 , 220 , 255 , 0 ];
                                else if ( j <= 18 ) logoboardLightColor = [ 0 , 0 , 255 , 0 ];
                                else logoboardLightColor = [ 100 , 255 , 255 , 100 ];
        
                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                            }
                        }
                    },logoboardLightDelayTime);

                    /***** ムービングライト MIYABI5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 2500;
                        let movingLightColorFadeTime = 2000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,22,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberMIYABI5_1);

                        function movingLightNumberMIYABI5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,255,0);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,255,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI5_2);

                        function movingLightNumberMIYABI5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],104000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 75000;
                            let movingLightLapTimeSplit = [ 140 , 320 , 20 , 60 ];
                            let angleXYRadius = 100;
                            let angleXYCenter = 0;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapTimeSplit[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,-60,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 72500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMIYABI5_3);

                        function movingLightNumberMIYABI5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[1]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 76000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,60,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMIYABI5_4);

                        function movingLightNumberMIYABI5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,60,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,220,160,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 77000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMIYABI5_5);

                        function movingLightNumberMIYABI5_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[1]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 104000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMIYABI5_6);

                        function movingLightNumberMIYABI5_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 206000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMIYABI5_7);

                        function movingLightNumberMIYABI5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 208000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[8] = setInterval(movingLightNumberMIYABI5_8);

                        function movingLightNumberMIYABI5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,150,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,100,0,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI5_2);

                        function movingLightNumberMIYABI5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],23000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 75000;
                            let movingLightLapTimeSplit = [ 140 , 320 , 20 , 60 ];
                            let angleXYRadius = 100;
                            let angleXYCenter = 0;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapTimeSplit[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,-60,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }


                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 231000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[9] = setInterval(movingLightNumberMIYABI5_9);

                        function movingLightNumberMIYABI5_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 253000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 700;

                        movingLightSetInterval[10] = setInterval(movingLightNumberMIYABI5_10);

                        function movingLightNumberMIYABI5_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 254000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[11] = setInterval(movingLightNumberMIYABI5_11);

                        function movingLightNumberMIYABI5_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,( (-1) ** Math.trunc( ( i - 1 ) / 2 ) ) * 30,-60,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

                    /***** LED SK13 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSK13);

                    function ledNumberSK13() {
                        let ledFadeTime = 2600;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2500;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
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

                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                    /***** LED 3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber3);

                    function ledNumber3() {
                        let ledFadeTime = 2800;
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

                } else if ( key === 'z' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン I *****/
                    waterCurtain("I");

                    /***** LED MIYABI6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI6);

                    function ledNumberMIYABI6() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 3200;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 180 , 0 , 255 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / 18;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 2400 ) % ledRepeatTime;

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

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");
    
                    /***** LED 81 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber81);
        
                    function ledNumber81() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1700;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledChangeTime = 500;
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 0 , 255 ] ];
                        
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
    
                } else if ( key === '[' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                    /***** LED MIYABI7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI7);

                    function ledNumberMIYABI7() {
                        let ledFadeTime = 2700;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 5200;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 3 / 18;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 3900 ) % ledRepeatTime;

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

                } else if ( key === ';' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED WP7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberWP7);

                    function ledNumberWP7() {
                        let ledFadeTime = 2800;
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

                    /***** 水中照明 MIYABI2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberMIYABI2);

                    function waterLightNumberMIYABI2() {
                        let waterLightFadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,0,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,200,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval);
                        }
                    }

                } else if ( key === ':' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED MIYABI8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI8);

                    function ledNumberMIYABI8() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 5200;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 0 , 180 , 255 ] , [ 180 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / 16;

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

                        ledLapTimeSplit = ledRepeatTime * 2 / 40;

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

                    /***** ムービングライト MIYABI6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 500;
                        let movingLightColorFadeTime = 1400;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberMIYABI6_1);

                        function movingLightNumberMIYABI6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);

                                    if ( i % 2 ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberMIYABI6_2);

                        function movingLightNumberMIYABI6_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2200;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightMaxOpacity = [ 0.2 , 1 ];
                            let movingLightColorOpacity;
                            let movingLightColorJudgeTime = nowTime[1] % movingLightColorRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                    movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,100,0,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 11000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMIYABI6_3);

                        function movingLightNumberMIYABI6_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,0,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,60,-90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,20,-90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberMIYABI6_4);

                        function movingLightNumberMIYABI6_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],3000,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * ( nowTime[1] % 1000 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg + 90 * ( i - 1 ) );
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 12200;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        movingLightSetInterval[5] = setInterval(movingLightNumberMIYABI6_5);

                        function movingLightNumberMIYABI6_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 150;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;
                            let movingLightColorOpacity = 0;

                            if ( movingLightColorJudgeTime < 50 ) movingLightColorOpacity = 1;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);

                            if ( nowTime[0] < 50 ) for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,200,0,0);
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 13250;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMIYABI6_6);

                        function movingLightNumberMIYABI6_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                        movingLightSetInterval[7] = setInterval(movingLightNumberMIYABI6_7);

                        function movingLightNumberMIYABI6_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],750,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 100;
                            let angleXYCenter = 0;
                            let movingLightLapDeg = [ 60 , 340 , 60 , 120 , 0 ];
                            let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 14000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;
                        let movingLightAngleFadeTime = 400;

                        movingLightSetInterval[8] = setInterval(movingLightNumberMIYABI6_8);

                        function movingLightNumberMIYABI6_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,100,0,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberMIYABI6_9);

                        function movingLightNumberMIYABI6_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
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

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 27000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberMIYABI6_9);

                        function movingLightNumberMIYABI6_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = 0;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);

                            if  ( nowTime[0] > movingLightAngleFadeTime ) clearInterval(movingLightSetInterval[9]);

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 28000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[10] = setInterval(movingLightNumberMIYABI6_10);

                        function movingLightNumberMIYABI6_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,100,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 39000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;
                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[11] = setInterval(movingLightNumberMIYABI6_11);

                        function movingLightNumberMIYABI6_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],28500,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = [ 2800 , 1600 , 1800 , 2000 ];
                            let maxAngleXY = [ 20 , -100 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let angleXY;
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit[i-1] ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleXY = maxAngleXY[l] + ( maxAngleXY[ ( l + 1 ) % 2 ] - maxAngleXY[l] ) /movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                                            
                                movingLightAngleChange(1,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                        movingLightSetInterval[12] = setInterval(movingLightNumberMIYABI6_12);

                        function movingLightNumberMIYABI6_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1400;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = [ 1 , 0 , 1 , 0 , 0 ];
                            let movingLightMaxOpacity = [ 0.2 , 1 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorRepeatTimeSplit * movingLightColorLapTimeSplit[i-1] ) % movingLightColorRepeatTime;

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

                    movingLightSetTimeoutDelay[8] = 51500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[13] = setInterval(movingLightNumberMIYABI6_13);

                        function movingLightNumberMIYABI6_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,220,0,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 66000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[14] = setInterval(movingLightNumberMIYABI6_14);

                        function movingLightNumberMIYABI6_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 66500;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[15] = setInterval(movingLightNumberMIYABI6_15);

                        function movingLightNumberMIYABI6_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightBasicDeg = 70;
                            let movingLightAngleWidth = -140;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime * 4 / movingLightOutsideNumber * j ) % movingLightAngleRepeatTime;
                                let angleXY;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleXY = movingLightBasicDeg + movingLightAngleWidth * l + ( (-1) ** l ) * movingLightAngleWidth / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                                            
                                movingLightAngleChange(2,i,angleXY,70,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 67500;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[16] = setInterval(movingLightNumberMIYABI6_16);

                        function movingLightNumberMIYABI6_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightColorChangeTime = 400;
                            let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 100 , 60 , 255 ] , [ 255 , 200 , 0 ] , [ 50 , 255 , 200 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 4 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightColorChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            }

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,60,0,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 92000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[17] = setInterval(movingLightNumberMIYABI6_17);

                        function movingLightNumberMIYABI6_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 92200;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        clearInterval(movingLightSetInterval[15]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMIYABI6_7);

                        function movingLightNumberMIYABI6_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 100;
                            let angleXYCenter = 0;
                            let movingLightLapDeg = [ 60 , 340 , 60 , 120 , 0 ];
                            let movingLightAngleJudgeTime = nowTime[0] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberMIYABI6_9);

                        function movingLightNumberMIYABI6_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = nowTime[0] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 93000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[18] = setInterval(movingLightNumberMIYABI6_18);

                        function movingLightNumberMIYABI6_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,100,0,1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,200,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 105000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberMIYABI6_9);

                        function movingLightNumberMIYABI6_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = 0;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);

                            if  ( nowTime[0] > movingLightAngleFadeTime ) clearInterval(movingLightSetInterval[9]);

                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 106000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[19] = setInterval(movingLightNumberMIYABI6_19);

                        function movingLightNumberMIYABI6_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,150,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                                clearInterval(movingLightSetInterval[19]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 118000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[20] = setInterval(movingLightNumberMIYABI6_20);

                        function movingLightNumberMIYABI6_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 300;
                            let movingLightBasicColor = [ [ 220 , 0 , 255 ] , [ 0 , 150 , 255 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightColorChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            }
                            
                        }

                        movingLightSetInterval[21] = setInterval(movingLightNumberMIYABI6_21);

                        function movingLightNumberMIYABI6_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            
                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                movingLightAngleChange(1,1,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,60,0,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,20,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[21]);
                            }

                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 131000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[20]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;
                        let movingLightAngleFadeTime = 1200;

                        movingLightSetInterval[13] = setInterval(movingLightNumberMIYABI6_13);

                        function movingLightNumberMIYABI6_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,220,0,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                        movingLightSetInterval[22] = setInterval(movingLightNumberMIYABI6_22);

                        function movingLightNumberMIYABI6_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);
                            
                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,-90,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[22]);
                            }

                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 146500;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[14] = setInterval(movingLightNumberMIYABI6_14);

                        function movingLightNumberMIYABI6_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 159000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[23] = setInterval(movingLightNumberMIYABI6_23);

                        function movingLightNumberMIYABI6_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,60,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[23]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 168000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[24] = setInterval(movingLightNumberMIYABI6_24);

                        function movingLightNumberMIYABI6_24() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[24],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1600;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;
                            let movingLightColorRepeatTimeSplit2 = 140;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;
                            let movingLightLapTimeSplit = [ 1 , 2 , 4 , 3 ];
                            let movingLightColorOpacity = 0;
                            let j = movingLightLapTimeSplit[ Math.trunc( movingLightColorJudgeTime / movingLightColorRepeatTimeSplit ) ];
                            movingLightColorJudgeTime = movingLightColorJudgeTime% movingLightColorRepeatTimeSplit2;

                            if ( movingLightColorJudgeTime < 40 ) movingLightColorOpacity = 1;

                            movingLightColorChange(1,j,255,255,255,movingLightColorOpacity);

                            if ( nowTime[0] < 50 ) for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 173500;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[24]);

                        movingLightSetInterval[17] = setInterval(movingLightNumberMIYABI6_17);

                        function movingLightNumberMIYABI6_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }
                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 174500;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMIYABI6_4);

                        function movingLightNumberMIYABI6_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * ( nowTime[0] % 1000 );

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg + 90 * ( i - 1 ) );
                            
                        }

                        movingLightSetInterval[15] = setInterval(movingLightNumberMIYABI6_15);

                        function movingLightNumberMIYABI6_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4500;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightBasicDeg = 70;
                            let movingLightAngleWidth = -140;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime * 4 / movingLightOutsideNumber * j ) % movingLightAngleRepeatTime;
                                let angleXY;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleXY = movingLightBasicDeg + movingLightAngleWidth * l + ( (-1) ** l ) * movingLightAngleWidth / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                                            
                                movingLightAngleChange(2,i,angleXY,70,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 175500;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[16] = setInterval(movingLightNumberMIYABI6_16);

                        function movingLightNumberMIYABI6_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 4;
                            let movingLightColorChangeTime = 400;
                            let movingLightBasicColor = [ [ 255 , 0 , 0 ] , [ 100 , 60 , 255 ] , [ 255 , 200 , 0 ] , [ 50 , 255 , 200 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / movingLightOutsideNumber * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) - movingLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 4 ][k] - movingLightBasicColor[l][k] ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * ( l + 1 ) + movingLightColorChangeTime ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            }

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,60,0,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 200000;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[17] = setInterval(movingLightNumberMIYABI6_17);

                        function movingLightNumberMIYABI6_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[25]);

                    movingLightSetTimeoutDelay[26] = 200200;
                    movingLightSetTimeout[26] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        clearInterval(movingLightSetInterval[15]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMIYABI6_7);

                        function movingLightNumberMIYABI6_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 100;
                            let angleXYCenter = 0;
                            let movingLightLapDeg = [ 60 , 340 , 60 , 120 , 0 ];
                            let movingLightAngleJudgeTime = nowTime[0] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                                            
                                movingLightAngleChange(2,i,angleXY,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[9] = setInterval(movingLightNumberMIYABI6_9);

                        function movingLightNumberMIYABI6_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 5000;
                            let angleXYRadius = 50;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -75;
                            let movingLightLapDeg = [ 260 , 80 , 90 , 180 ];
                            let movingLightAngleJudgeTime = nowTime[0] % movingLightAngleRepeatTime;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + movingLightLapDeg[i-1] ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[26]);

                    movingLightSetTimeoutDelay[27] = 201000;
                    movingLightSetTimeout[27] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[18] = setInterval(movingLightNumberMIYABI6_18);

                        function movingLightNumberMIYABI6_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[27],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,100,0,1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,200,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[27]);

                    movingLightSetTimeoutDelay[28] = 229000;
                    movingLightSetTimeout[28] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[17] = setInterval(movingLightNumberMIYABI6_17);

                        function movingLightNumberMIYABI6_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[28],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[28]);

                    movingLightSetTimeoutDelay[29] = 229200;
                    movingLightSetTimeout[29] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 300;

                        movingLightSetInterval[25] = setInterval(movingLightNumberMIYABI6_25);

                        function movingLightNumberMIYABI6_25() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],2300,movingLightUseNumber,movingLightSetInterval[25],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 3500;

                            if ( nowTime[1] <= movingLightAngleRepeatTime ) {
                                let angleXY = [ 60 , 90 , 30 , 10 ];
                                let maxAngleZ = [ -10 , -110 ];

                                let angleZ = maxAngleZ[0] + ( maxAngleZ[1] - maxAngleZ[0] ) / movingLightAngleRepeatTime * nowTime[1];

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY[i-1],angleZ,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[25]);
                            }
                            
                        }

                        movingLightSetInterval[26] = setInterval(movingLightNumberMIYABI6_26);

                        function movingLightNumberMIYABI6_26() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],2300,movingLightUseNumber,movingLightSetInterval[26],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 3500;

                            if ( nowTime[1] <= movingLightAngleRepeatTime ) {
                                let maxAngleZ = [ 0 , 100 ];

                                let angleZ = maxAngleZ[0] + ( maxAngleZ[1] - maxAngleZ[0] ) / movingLightAngleRepeatTime * nowTime[1];

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[26]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[29]);

                    movingLightSetTimeoutDelay[30] = 231500;
                    movingLightSetTimeout[30] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[27] = setInterval(movingLightNumberMIYABI6_27);

                        function movingLightNumberMIYABI6_27() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],0,movingLightUseNumber,movingLightSetInterval[27],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,240,180,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,240,180,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[27]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[30]);

                    movingLightSetTimeoutDelay[31] = 234300;
                    movingLightSetTimeout[31] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 700;

                        movingLightSetInterval[17] = setInterval(movingLightNumberMIYABI6_17);

                        function movingLightNumberMIYABI6_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[31],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[31]);

                    movingLightSetTimeoutDelay[32] = 235500;
                    movingLightSetTimeout[32] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[28] = setInterval(movingLightNumberMIYABI6_28);

                        function movingLightNumberMIYABI6_28() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[32],0,movingLightUseNumber,movingLightSetInterval[28],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,200,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[28]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[32]);

                    movingLightSetTimeoutDelay[33] = 236000;
                    movingLightSetTimeout[33] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[29] = setInterval(movingLightNumberMIYABI6_29);

                        function movingLightNumberMIYABI6_29() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[33],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[29],movingLightMyNumber);
                            let movingLightColorRepeatTime = 120;
                            let movingLightColorJudgeTime = nowTime[1] % movingLightColorRepeatTime;
                            let movingLightBasicColor = [ [ 0 , 200 , 255 ] , [ 200 , 255 , 0 ] , [ 150 , 0 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 0 , 0 ] ];
                            let movingLightColorOpacity = 0;
                            let maxOpacity = 1;

                            if ( nowTime[1] > 3470 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                                clearInterval(movingLightSetInterval[29]);
                            } else if ( nowTime[1] > 3000 ) {
                                maxOpacity = 1 - 1 / 470 * ( nowTime[1] - 3000 );
                            }

                            if ( movingLightColorJudgeTime < 50 ) movingLightColorOpacity = maxOpacity;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightBasicColor[i-1][0],movingLightBasicColor[i-1][1],movingLightBasicColor[i-1][2],movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);

                        }

                    },movingLightSetTimeoutDelay[33]);

                    movingLightSetTimeoutDelay[34] = 242500;
                    movingLightSetTimeout[34] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[30] = setInterval(movingLightNumberMIYABI6_30);

                        function movingLightNumberMIYABI6_30() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[34],0,movingLightUseNumber,movingLightSetInterval[30],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[30]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[34]);

                } else if ( key === ']' ) {
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

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AA *****/
                    waterCurtain("AA");

                    /***** LED HI8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberHI8);

                    function ledNumberHI8() {
                        let ledFadeTime = 2800;
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

                } else if ( key === '.' ) {
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

                } else if ( key === '/' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                    /***** LED MIYABI8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI8);

                    function ledNumberMIYABI8() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 5200;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 0 , 180 , 255 ] , [ 180 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / 16;

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

                        ledLapTimeSplit = ledRepeatTime * 2 / 40;

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

                } else if ( key === '_' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED MIYABI9 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI9);

                    function ledNumberMIYABI9() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 2800;
                        let ledRepeatTimeSplit = ledRepeatTime / 3;
                        let ledBasicColor = [ [ 255 , 255 , 220 ] , [ 220 , 100 , 255 ] , [ 0 , 255 , 220 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / 18;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + 500 ) % ledRepeatTime;

                            for ( var l = 0 ; l < 3 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
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

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AG *****/
                    waterCurtain("AG");

                    /***** LED DSC6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberDSC6);
        
                    function ledNumberDSC6() {
                        let ledFadeTime = 1000;
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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン G *****/
                    waterCurtain("G");

                    /***** LED 85 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber85);

                    function ledNumber85() {
                        let ledFadeTime = 2000;
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

                } else if ( key === 'i' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED MIYABI8 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMIYABI8);

                    function ledNumberMIYABI8() {
                        let ledFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 5200;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor = [ [ 0 , 180 , 255 ] , [ 180 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 120 , 0 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 2 / 16;

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

                        ledLapTimeSplit = ledRepeatTime * 2 / 40;

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
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber4);

                    function ledNumber4() {
                        let ledFadeTime = 2800;
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
                        let waterLightFadeTime = 500;
                        let waterLightRepeatTime = 5000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        let waterLightBasicColor = [ [ 220 , 0 , 255 ] , [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
                        let waterLightLapTime = waterLightRepeatTime / waterLightNumber;

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let waterLightColor = [];
                            let j = i - 1;
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

                    /***** 看板照明 MIYABI10 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI10);
        
                    function logoboardLightNumberMIYABI10() {
                        let nowTime = nowTimeGet(startTime,500,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 5200;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 5;
                        let logoboardRepeatTimeSplit2 = 105;
                        let logoboardBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 100 , 0 ] , [ 220 , 0 , 255 ] , [ 220 , 0 , 255 ] , [ 255 , 255 , 255 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit;

                            if ( i <= 12 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( 12 - i );
                            else if ( i <= 36 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( 36 - i ) + logoboardRepeatTimeSplit * 1.5;
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * ( 48 - i ) + logoboardRepeatTimeSplit * 0.5;

                            let logoboardJudgeTime = ( nowTime[1] + logoboardLapTimeSplit ) % logoboardRepeatTime;

                            for ( var l = 0 ; l < 5 ; l++ ) {
                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 4 ; k++ ) logoboardColor[k] = logoboardBasicColor[l][k] + ( logoboardBasicColor[ ( l + 1 ) % 5 ][k] - logoboardBasicColor[l][k] ) / logoboardRepeatTimeSplit * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1,1,500,nowTime[0]);
                        }
                    }

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED MIYABI11 *****/ 
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberMIYABI11_1);
                        
                        function ledNumberMIYABI11_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 1000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberMIYABI11_2);
                        
                        function ledNumberMIYABI11_2() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 3500;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberMIYABI11_1);
                        
                        function ledNumberMIYABI11_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[3]);
                    
                    ledSetTimeoutDelay[4] = 5500;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledMyNumber3 = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberMIYABI11_3);
                        
                        function ledNumberMIYABI11_3() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 10;
                            let m = Math.trunc( nowTime[0] / ledRepeatTimeSplit ) % 10;
                            let ledJudgeTime = nowTime[0] % ledRepeatTimeSplit;
                            let ledBasicColor = [ [ 0 , 100 , 255 ] , [ 0 , 200 , 255 ] , [ 0 , 255 , 255 ] , [ 100 , 0 , 255 ] , [ 200 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 200 ] , [ 255 , 200 , 150 ] ];

                            let ledArray = [[0,7,5,7,2,3,5,6,7,6],[6,3,1,7,7,0,2,2,6,1],[4,3,7,2,1,0,2,2,6,6],[1,4,0,6,2,0,7,6,0,6],[6,2,4,7,6,4,6,1,1,6],[7,6,1,6,5,3,7,6,1,6],[0,0,6,7,3,6,1,5,0,0],[2,7,6,4,3,7,4,0,0,5],[5,3,3,5,3,4,2,1,6,1],[6,6,0,5,6,1,6,3,0,2],[1,0,5,0,6,4,6,3,4,1],[4,3,1,5,6,6,2,2,0,0],[3,0,5,4,7,3,4,7,6,3],[2,0,0,2,4,6,6,2,4,4],[3,1,6,5,3,6,0,4,1,6],[1,2,7,0,5,3,4,6,0,4],[5,3,5,1,6,3,2,6,6,1],[5,4,6,4,5,2,4,3,4,2],[1,4,7,3,6,2,3,7,3,2],[1,5,0,4,0,7,3,3,3,0]];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledArray[i-1][m];

                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ledArray[i-1][ ( m + 1 ) % 10 ]][k] - ledBasicColor[j][k] ) / ledRepeatTimeSplit * ledJudgeTime;

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledArray = [[1,3,2,4,3,3,6,6,7,4],[4,1,4,4,4,1,0,6,4,3],[6,5,5,2,6,7,2,0,4,5],[5,5,0,6,3,0,3,4,1,6],[5,5,2,4,3,2,0,0,4,0],[3,6,3,0,5,1,0,7,1,6],[5,6,6,0,4,2,1,4,2,7],[1,6,7,0,3,3,3,7,2,1],[1,3,2,6,0,2,0,1,1,2],[6,2,5,0,1,0,3,2,5,1],[7,7,2,0,4,7,1,2,3,7],[6,4,1,6,3,7,0,2,2,6],[4,0,3,7,7,1,4,4,2,4],[1,3,4,6,6,5,1,0,4,0],[5,0,6,6,1,1,5,5,4,0],[0,7,1,3,5,3,4,1,3,1],[2,7,5,3,0,3,4,1,0,6],[7,3,4,6,7,0,7,4,6,2],[3,3,3,7,2,2,0,0,4,5],[6,6,7,3,6,0,6,0,2,5],[0,7,7,6,2,5,2,4,4,7],[7,7,0,4,2,2,4,7,1,4],[1,7,5,0,3,1,4,4,2,5],[0,6,0,1,1,6,5,1,6,1]];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledArray[ ( i - 1 ) % 24 ][m];

                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ledArray[ ( i - 1 ) % 24 ][ ( m + 1 ) % 10 ]][k] - ledBasicColor[j][k] ) / ledRepeatTimeSplit * ledJudgeTime;
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[4]);

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

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

                    /***** 水中照明 CC6 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC6);

                    function waterLightNumberCC6() {
                        let fadeTime = 3500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,255,150,150,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 MIYABI3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI3);
        
                    function logoboardLightNumberMIYABI3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 0 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 200 , 50 , 200 ];
                            else logoboardLightColor = [ 255 , 100 , 100 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト MIYABI1 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI1);

                    function parLightNumberMIYABI1() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,0,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);

                        /***** ステージライト *****/
                        let stageFadeTime = 1000;
                        stageLightChange(1,stageFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** パーライト MIYABI2 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI2);

                    function parLightNumberMIYABI2() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,150,150,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);

                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** 看板照明 MIYABI5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI5);
        
                    function logoboardLightNumberMIYABI5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 0 , 150 , 255 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 200 , 200 , 255 , 200 ];
                            else logoboardLightColor = [ 0 , 255 , 255 , 100 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト MIYABI3 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI3);

                    function parLightNumberMIYABI3() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.5,spotFadeTime,startTime + 500);

                        /***** ステージライト *****/
                        let stageFadeTime = 1000;
                        stageLightChange(0,stageFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 9 ) { //f9
                    let startTime = Date.now();

                    /***** パーライト MIYABI4 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI4);

                    function parLightNumberMIYABI4() {
                        let parLightFadeTime = 3000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,150,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2000;
                        spotLightChange(0.5,spotFadeTime,startTime + 1000);
                    },1000);

                } else if ( subCode === 10 ) { //f10
                    let startTime = Date.now();

                    /***** 看板照明 MIYABI8 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI8);
        
                    function logoboardLightNumberMIYABI8() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,255,255,255,255,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }

                    /***** パーライト MIYABI5 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI5);

                    function parLightNumberMIYABI5() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            
                            if ( i % 4 <= 1 ) parLightColor = [ 0 , 150 , 255 ];
                            else parLightColor = [ 220 , 180 , 255 ];

                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);
                        }                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 300);

                        /***** 客席照明 *****/
                        let audienceLightFadeTime = 700;
                        audienceLightChange(1,audienceLightFadeTime,startTime + 300);
                    },300);

                } else if ( subCode === 11 ) { //f11
                    let startTime = Date.now();

                    /***** 看板照明 MIYABI9 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI9);
        
                    function logoboardLightNumberMIYABI9() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 150 , 0 , 50 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 255 , 80 , 0 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 200 , 200 , 200 ];
                            else logoboardLightColor = [ 255 , 150 , 0 , 100 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト MIYABI6 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI6);

                    function parLightNumberMIYABI6() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            
                            if ( i % 4 === 1 ) parLightColor = [ 0 , 150 , 255 ];
                            else if ( i % 4 === 2 ) parLightColor = [ 255 , 150 , 220 ];
                            else if ( i % 4 === 3 ) parLightColor = [ 255 , 255 , 0 ];
                            else parLightColor = [ 0 , 255 , 0 ];

                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);
                        }                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);

                } else if ( subCode === 12 ) { //f12
                    let startTime = Date.now();

                    /***** 看板照明 MIYABI11 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI11);
        
                    function logoboardLightNumberMIYABI11() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 150 , 0 , 0 ];
                            else logoboardLightColor = [ 200 , 180 , 255 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,2);
                        }
                    }

                    /***** パーライト MIYABI7 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI7);

                    function parLightNumberMIYABI7() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            
                            if ( i % 4 === 1 ) parLightColor = [ 0 , 150 , 255 ];
                            else if ( i % 4 === 2 ) parLightColor = [ 255 , 150 , 220 ];
                            else if ( i % 4 === 3 ) parLightColor = [ 220 , 180 , 255 ];
                            else parLightColor = [ 255 , 180 , 0 ];

                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);
                        }                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);

                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 MIYABI12 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMIYABI12);
        
                    function logoboardLightNumberMIYABI12() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;
    
                            if ( j < 6 ) logoboardLightColor = [ 255 , 150 , 0 , 0 ];
                            else logoboardLightColor = [ 120 , 180 , 255 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト MIYABI7 *****/
                    let parLightSetInterval = setInterval(parLightNumberMIYABI7);

                    function parLightNumberMIYABI7() {
                        let parLightFadeTime = 1000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            
                            if ( i % 2 ) parLightColor = [ 0 , 150 , 255 ];
                            else parLightColor = [ 255 , 100 , 0 ];

                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);
                        }                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 700;
                        spotLightChange(1,spotFadeTime,startTime + 300);
                    },300);

                }
            }
        }
    }
});
