let SkySymphony_Music = [ [ 0 ] , [ 2 , 0 , 1 ] , [ 1 , 0 , 0.5 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] , [ 1 , 0 , 1 ] ];

jsSetting("SkySymphony",2022,"初夏","Sky Symphony","Sky Symphony",1,2,SkySymphony_Music,"https://script.google.com/macros/s/AKfycbz2g8CscHNG2TFlKuK4Xb5HByZnvENdP0m8B_zAE2uIIsdqvXJRjMsbcOc666YoelhBhQ/exec",0,0,0,0,0,3200,4.5,0);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "SkySymphony" ) {
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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AG *****/
                    waterCurtain("AG");

                    /***** LED 38 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber38);
        
                    function ledNumber38() {
                        let ledFadeTime = 3500;
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
                } else if ( key === 'i' ) {
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

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AV *****/
                    waterCurtain("AV");

                    /***** LED 68 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber68);
        
                    function ledNumber68() {
                        let ledFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1400;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledChangeTime = 200;
                        let ledBasicColor = [ [ 255 , 255 , 200 ] , [ 0 , 255 , 150 ] ];
                        
                        let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let j = ledNumberInside - i;
                            let ledColor = [];
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
                            let j = ledNumberOutside - i;
                            let ledColor = [];
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
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED 95 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber95);

                    function ledNumber95() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }
                } else if ( key === 'l' ) {
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

                } else if ( key === 'm' ) {
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

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

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

                    ledSetTimeoutDelay[2] = 8600;
                    ledSetTimeout[2] = setTimeout( function() {
                        clearTimeout(ledSetInterval[1]);
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSS3_2);

                        function ledNumberSS3_2() {
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],100,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    /***** ムービングライト SS1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberSS1_1);

                        function movingLightNumberSS1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,0,0,0,0);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
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

                    movingLightSetTimeoutDelay[1] = 1510;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[2] = setInterval(movingLightNumberSS1_2);

                        function movingLightNumberSS1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);                            
                            let movingLightRepeatTime = 8500;
                            let movingLightOpacityRepeatTime = 200;
                            let movingLightColorLapTimeSplit = movingLightRepeatTime / 4;
                            let movingLightOpacityDisplayTime = 100;
                            let movingLightJudgeTime = nowTime[0] % movingLightRepeatTime;

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime2 = ( movingLightJudgeTime + movingLightColorLapTimeSplit * i ) % movingLightOpacityRepeatTime;

                                if ( movingLightJudgeTime >= 8000 ) {

                                } else if ( movingLightJudgeTime2 < movingLightOpacityDisplayTime ) {
                                    if ( movingLightJudgeTime >= 5000 ) {
                                        movingLightColorOpacity = 1 - 1 / 3000 * ( movingLightJudgeTime - 5000 );
                                    } else movingLightColorOpacity = 1;
                                }

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 18000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        movingLightSetInterval[3] = setInterval(movingLightNumberSS1_3);

                        function movingLightNumberSS1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);
                    
                } else if ( key === 'o' ) {
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

                    /***** ムービングライト SS2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,100,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSS2_1);

                        function movingLightNumberSS2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,230,150,0);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
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

                        let movingLightColorFadeTime = 3500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSS2_2);

                        function movingLightNumberSS2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 133000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberSS3_3);

                        function movingLightNumberSS3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 134200;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSS3_4);

                        function movingLightNumberSS3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,100,-90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);
        
                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SS4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledMyNumber1 = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSS3_1);
                        
                        function ledNumberSS3_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 1000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledMyNumber2 = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSS3_2);
                        
                        function ledNumberSS3_2() {
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],0,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 255 , 0 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime / 2 / ledNumberInside;

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

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2]);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime / ledNumberOutside;
            
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

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2]);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                    /***** 水中照明 SS2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS2);

                    function waterLightNumberSS2() {
                        let waterLightFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 3000;

                        let waterLightBasicColor = [ [ 150 , 0 , 255 ] , [ 50 , 150 , 255 ] ];
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

                } else if ( key === 'q' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SS5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSS5);

                    function ledNumberSS5() {
                        let ledFadeTime = 1200;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,220,180,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,220,180,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'r' ) {
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

                    /***** ムービングライト SS3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1800;
                        let movingLightNowAngle;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSS3_1);

                        function movingLightNumberSS3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,150,255,1,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberSS3_2);

                        function movingLightNumberSS3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 35000;
                            let angleX;

                            if ( nowTime[1] < 50500 ) {
                                angleX = 100 + 360 / movingLightAngleRepeatTime * ( nowTime[1] % movingLightAngleRepeatTime );
                                movingLightNowAngle = angleX;
                            } else {
                                angleX = movingLightNowAngle - 360 / movingLightAngleRepeatTime * ( ( nowTime[1] - 50500 ) % movingLightAngleRepeatTime );
                            }

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleX,-90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 4000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 7000;

                        movingLightSetInterval[0] = setInterval(movingLightNumberSS3_0);

                        function movingLightNumberSS3_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 14500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[3] = setInterval(movingLightNumberSS3_3);

                        function movingLightNumberSS3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,255,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 41000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[4] = setInterval(movingLightNumberSS3_4);

                        function movingLightNumberSS3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,0,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 54500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[5] = setInterval(movingLightNumberSS3_5);

                        function movingLightNumberSS3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,150,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 81000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSS3_6);

                        function movingLightNumberSS3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 83000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightNowAngle;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSS3_7);

                        function movingLightNumberSS3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],1500,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 35000;
                            let angleX;

                            if ( nowTime[1] < 13500 ) {
                                angleX = 230 - 360 / movingLightAngleRepeatTime * ( nowTime[1] % movingLightAngleRepeatTime );
                                movingLightNowAngle = angleX;
                            } else {
                                angleX = movingLightNowAngle + 360 / movingLightAngleRepeatTime * ( ( nowTime[1] - 13500 ) % movingLightAngleRepeatTime );
                            } 

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleX,-90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 84000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSS3_8);

                        function movingLightNumberSS3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,255,0,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 98000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 10000;

                        movingLightSetInterval[9] = setInterval(movingLightNumberSS3_9);

                        function movingLightNumberSS3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 102000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 8500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSS3_10);

                        function movingLightNumberSS3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[10] = 110500;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,5,60,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSS3_11);

                        function movingLightNumberSS3_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,40,60,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 111000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[12] = setInterval(movingLightNumberSS3_12);

                        function movingLightNumberSS3_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;    
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightMaxOpacity = [ 0 , 1 ];
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i % 2 ) ) % movingLightColorRepeatTime;
                                let movingLightColorOpacity;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,255,0,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[13] = setInterval(movingLightNumberSS3_13);

                        function movingLightNumberSS3_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;    
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightMaxOpacity = [ 0 , 1 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i % 2 ) ) % movingLightColorRepeatTime;
                                let movingLightColorOpacity;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = movingLightMaxOpacity[l] + ( movingLightMaxOpacity[ ( l + 1 ) % 2 ] - movingLightMaxOpacity[l] ) / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,255,255,255,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[14] = setInterval(movingLightNumberSS3_14);

                        function movingLightNumberSS3_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightRotateDeg = 360 / 1000 * ( nowTime[0] % 1000 );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 124000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        clearInterval(movingLightSetInterval[13]);
                        clearInterval(movingLightSetInterval[14]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 5500;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSS3_15);

                        function movingLightNumberSS3_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,100,255,1);

                                let movingLightColorOpacity = 1 - 1 / movingLightAngleFadeTime * nowTime[0];
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                                    movingLightAngleChange(1,i,40,80,movingLightAngleFadeTime,nowTime[0])
                                }
                            } else {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0);
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                        movingLightSetInterval[16] = setInterval(movingLightNumberSS3_16);

                        function movingLightNumberSS3_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightRotateDeg = 600 / 5500 * nowTime[0];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightRotateChange(1,i,movingLightRotateDeg);                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 131000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        movingLightSetInterval[17] = setInterval(movingLightNumberSS3_17);

                        function movingLightNumberSS3_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 133000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[18] = setInterval(movingLightNumberSS3_18);

                        function movingLightNumberSS3_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,100,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[18]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 134500;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[19] = setInterval(movingLightNumberSS3_19);

                        function movingLightNumberSS3_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,255,0,1);
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 138000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[20] = setInterval(movingLightNumberSS3_20);

                        function movingLightNumberSS3_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[20]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 163500;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);

                        let movingLightAngleFadeTime = 1000;
                        let movingLightNowAngle;

                        movingLightSetInterval[21] = setInterval(movingLightNumberSS3_21);

                        function movingLightNumberSS3_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 35000;
                            let angleX;

                            if ( nowTime[1] < 15500 ) {
                                angleX = 100 + 360 / movingLightAngleRepeatTime * ( nowTime[1] % movingLightAngleRepeatTime );
                                movingLightNowAngle = angleX;
                            } else {
                                angleX = movingLightNowAngle - 360 / movingLightAngleRepeatTime * ( ( nowTime[1] - 15500 ) % movingLightAngleRepeatTime );
                            } 

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleX,-90,movingLightAngleFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 164500;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[22] = setInterval(movingLightNumberSS3_22);

                        function movingLightNumberSS3_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,0,100,255,1);
                            } else {
                                clearInterval(movingLightSetInterval[22]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 192000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[23] = setInterval(movingLightNumberSS3_23);

                        function movingLightNumberSS3_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 193000;
                    movingLightSetTimeout[20] = setTimeout( function() {                    
                        clearInterval(movingLightSetInterval[21]);
                        clearInterval(movingLightSetInterval[23]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= 4 ; i++ ) movingLightPictureChange(2,i,0,20,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[24] = setInterval(movingLightNumberSS3_24);

                        function movingLightNumberSS3_24() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[24],movingLightMyNumber);

                            if ( nowTime[0] < 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    if ( i % 2 === 1 ) movingLightColorChange(1,i,255,255,255,1);
                                    else movingLightColorChange(1,i,0,100,255,1);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    if ( i % 2 === 1 ) movingLightColorChange(2,i,0,100,255,1);
                                    else movingLightColorChange(2,i,0,255,255,1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[24]);
                            }
                            
                        }

                        movingLightSetInterval[25] = setInterval(movingLightNumberSS3_25);

                        function movingLightNumberSS3_25() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[25],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 4000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let angleXY, angleZ;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit / 8 * ( 4 - i ) ) % movingLightAngleRepeatTime;

                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = 80 - 160 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleXY = -80 + 160 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightJudgeTime = ( movingLightJudgeTime + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTime;

                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleZ = -30 - 60 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleZ = -90 + 60 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );

                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }                        
                            
                        }

                        movingLightSetInterval[26] = setInterval(movingLightNumberSS3_26);

                        function movingLightNumberSS3_26() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[26],movingLightMyNumber);                            
                            let movingLightAngleRepeatTime = 4000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let angleXY, angleZ;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit / 8 * i ) % movingLightAngleRepeatTime;

                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = 50 - 100 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleXY = -50 + 100 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightJudgeTime = ( movingLightJudgeTime + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTime;

                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleZ = 40 + 40 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleZ = 80 - 40 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }                        
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 206000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[25]);
                        clearInterval(movingLightSetInterval[26]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 3000;

                        movingLightSetInterval[27] = setInterval(movingLightNumberSS3_27);

                        function movingLightNumberSS3_27() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[27],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,1,200,nowTime[0]);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }
    
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,-10,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[27]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[21]);

                    movingLightSetTimeoutDelay[22] = 210500;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[27]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[28] = setInterval(movingLightNumberSS3_28);

                        function movingLightNumberSS3_28() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[28],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
    
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[28]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[22]);

                } else if ( key === 's' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AS *****/
                    waterCurtain("AS");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 't' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

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
                } else if ( key === 'u' ) {
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
                } else if ( key === 'v' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BN *****/
                    waterCurtain("BN");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }
                } else if ( key === 'w' ) {
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

                } else if ( key === 'x' ) {
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
                } else if ( key === 'y' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 55 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber55);

                    function ledNumber55() {
                        let ledFadeTime = 3000;
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

                    /***** 水中照明 SS4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS4);

                    function waterLightNumberSS4() {
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

                    /***** ムービングライト SS4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSS4_1);

                        function movingLightNumberSS4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] <= 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,240,150,255,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,-70,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1010;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSS4_2);

                        function movingLightNumberSS4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'z' ) {
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

                    /***** ムービングライト SS5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 600;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSS5_1);

                        function movingLightNumberSS5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);

                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberSS5_2);

                        function movingLightNumberSS5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 6000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleRepeatTimeSplit2 = movingLightAngleRepeatTimeSplit / 2;
                            let movingLightColorRepeatTime = 8500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 7;
                            let movingLightBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 100 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 0 , 255 ] , [ 255 , 0 , 0 ] ];
    
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColor = [];
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;
    
                                for ( var l = 0 ; l < 7 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k];
                                        break;
                                    }
                                }
            
                                movingLightColorChange(1,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,200,nowTime[0]);
                                
                                let angleXY, angleZ;
    
                                movingLightJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit2 / 2 * ( 4 - i ) ) % movingLightAngleRepeatTime;
    
                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = 90 - 180 / movingLightAngleRepeatTimeSplit * movingLightJudgeTime;
                                else angleXY = -90 + 180 / movingLightAngleRepeatTimeSplit * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit );
                                
                                movingLightJudgeTime = ( movingLightJudgeTime + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTimeSplit;
    
                                if ( movingLightJudgeTime < movingLightAngleRepeatTimeSplit2 ) angleZ = -40 - 50 / movingLightAngleRepeatTimeSplit2 * movingLightJudgeTime;
                                else angleZ = -90 + 50 / movingLightAngleRepeatTimeSplit2 * ( movingLightJudgeTime - movingLightAngleRepeatTimeSplit2 );
    
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            movingLightColorRepeatTime = 5500;
                            movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 6;

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [ 0 , 0 , 0 ];
                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTime / 4 * ( j % 4 ) ) % movingLightColorRepeatTime;

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

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 55 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber55);

                    function ledNumber55() {
                        let ledFadeTime = 3000;
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

                    /***** 水中照明 SS4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS4);

                    function waterLightNumberSS4() {
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

                    /***** ムービングライト SS6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 10;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSS6_1);

                        function movingLightNumberSS6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleChange(1,i,0,-90,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 2500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSS6_2);

                        function movingLightNumberSS6_2() {
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

                } else if ( key === '[' ) {
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
                    
                } else if ( key === ';' ) {
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

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SS1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 4000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSS1);
        
                    function logoboardLightNumberSS1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,0,0,255,0,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }

                } else if ( subCode === 7 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SS2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 4000;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSS2);
        
                    function logoboardLightNumberSS2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;

                            if ( j < 6 ) logoboardLightColor = [ 0 , 0 , 255 , 0 ];
                            else logoboardLightColor = [ 150 , 0 , 255 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 8 ) { 
                    let startTime = Date.now();

                    /***** パーライト SS1 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberSS1);

                    function parLightNumberSS1() {
                        let parLightFadeTime = 3000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,180,255,0,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2000;
                        spotLightChange(1,spotFadeTime,startTime + 1000);
                    },1000);
                    
                } else if ( subCode === 9 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SS3 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3700;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSS3);
        
                    function logoboardLightNumberSS3() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,150,100,0,255,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }
                    
                    /***** 客席照明 *****/
                    audienceLightChange(1,3000,startTime);
                    
                } else if ( subCode === 10 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SS4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSS4);
        
                    function logoboardLightNumberSS4() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 4 || ( i > logoboardLightNumber / 4 * 2 && i <= logoboardLightNumber / 4 * 3) ) j = ( i - 1 ) % 12;
                            else j = 11 - ( i - 1 ) % 12;

                            if ( j < 6 ) logoboardLightColor = [ 0 , 120 , 255 , 0 ];
                            else logoboardLightColor = [ 200 , 150 , 0 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト SS2 *****/
                    let parLightMyNumber = parLightSetting();
                    let parLightSetInterval = setInterval(parLightNumberSS2);

                    function parLightNumberSS2() {
                        let parLightFadeTime = 3000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,150,255,nowTime[0],parLightFadeTime,parLightMyNumber,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2000;
                        spotLightChange(1,spotFadeTime,startTime + 1000);

                        /***** ステージライト *****/
                        let stageFadeTime = 2000;
                        stageLightChange(1,stageFadeTime,startTime + 1000);
                    },1000);
                    
                } else if ( subCode === 11 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SS5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightSS5);
        
                    function logoboardLightSS5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 1200;
                        let logoboardChangeTime = 200;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 2;
                        let logoboardRepeatTimeSplit2 = logoboardRepeatTime / 4;
                        let logoboardBasicColor = [ [ 0 , 180 , 255 ] , [ 0 , 255 , 0 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit;

                            if ( i <= 24 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( i - 1 ) / 3 );
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit2 * Math.trunc( ( 48 - i ) / 3 );

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

                } else if ( subCode === 12 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SS6 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightSS6);
        
                    function logoboardLightSS6() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 1200;
                        let logoboardChangeTime = 200;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 2;
                        let logoboardBasicColor = [ [ 255 , 220 , 50 ] , [ 255 , 180 , 255 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardLapTimeSplit;

                            if ( i <= 24 ) logoboardLapTimeSplit = logoboardRepeatTime / 8 * Math.trunc( ( 12 - i ) / 3 );
                            else if ( i <= 36 ) logoboardLapTimeSplit = logoboardRepeatTime / 8 * Math.trunc( ( i - 25 ) / 3 );
                            else logoboardLapTimeSplit = logoboardRepeatTime / 16 * Math.trunc( ( 72 - i ) / 3 );

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

                }
            } else if ( subNowPage === 2 ) {
                if ( subCode === 6 ) { 
                    let startTime = Date.now();

                    /***** 看板照明 SS7 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSS7);
        
                    function logoboardLightNumberSS7() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 3000;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 6;
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [ 0 , 0 , 0 ];
                            let logoboardLapTimeSplit = logoboardRepeatTime / 42 * ( 48 - i );

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
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1);
                        }
                    }

                }
            }
        }
    }
});
