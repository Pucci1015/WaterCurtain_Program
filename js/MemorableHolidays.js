jsSetting("MemorableHolidays","Memorable Holidays",1,1,2,1,2200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "MemorableHolidays" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 MH1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberMH1);

                    function waterLightNumberMH1() {
                        let waterLightFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 60000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 10;
                        let waterLightJudgeTime = nowTime[1] % waterLightRepeatTime;

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let waterLightColor = [];

                            if ( i % 3 === 0 ) {
                                let waterLightBasicColor = [ [ 255 , 100 , 50 ] , [ 255 , 255 , 0 ] ];

                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTimeSplit * waterLightJudgeTime;
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 9 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * 9 );
                                }
                            } else if ( i === 4 || i === 8 ) {
                                let waterLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 255 , 220 ] ];

                                /*if ( waterLightJudgeTime < waterLightRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k];
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit );
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 8 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k];
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 9 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * 8 );
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k];
                                }*/

                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][k] ) / waterLightRepeatTimeSplit * waterLightJudgeTime;
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 9 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * 9 );
                                }
                            } else {
                                waterLightColor = [ 255 , 255 , 0 ];
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }
                    
                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED MH1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMH1);

                    function ledNumberMH1() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 10000;
                        let ledRepeatTimeSplit = ledRepeatTime / 4;
                        let ledBasicColor1 = [ 255 , 255 , 255 ];
                        let ledBasicColor2 = [ [ 255 , 0 , 120 ] , [ 255 , 200 , 100 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime);

                        let ledLapTimeSplit = ledRepeatTimeSplit * 6 / 44;

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED MH2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberMH2_1);
                        
                        function ledNumberMH2_1() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            let ledBasicColor1 = [ 255 , 255 , 200 ];
                            let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 255 , 180 , 180 ] , [ 220 , 180 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
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
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 11000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberMH2_2);
                        
                        function ledNumberMH2_2() {
                            let ledFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 150 ] , [ 255 , 255 , 200 ] , [ 255 , 150 , 0 ] ];
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / 18;

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
                            
                            ledBasicColor = [ [ 255 , 180 , 220 ] , [ 255 , 255 , 255 ] , [ 255 , 80 , 0 ] , [ 255 , 255 , 0 ] ];
                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / 44;

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

                    ledSetTimeoutDelay[3] = 27000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberMH2_3);
                        
                        function ledNumberMH2_3() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 220 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 220 , 0 ] , [ 255 , 150 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 5;
                            let ledLapTimeSplit = 490;

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

                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 150 , 0 ] , [ 255 , 255 , 0 ] , [ 255 , 0 , 150 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 9;
                            ledLapTimeSplit = ledRepeatTimeSplit * 15 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 42000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberMH2_4);
                        
                        function ledNumberMH2_4() {
                            let ledFadeTime = 2500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[4]);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime * 10 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[4]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 45500;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberMH2_5);
                        
                        function ledNumberMH2_5() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 220 , 150 , 255 ] , [ 255 , 0 , 200 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 18;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 6 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 6 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledBasicColor1 = [ 255 , 255 , 255 ];
                            ledBasicColor2 = [ [ 255 , 0 , 200 ] , [ 220 , 150 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 12;
                            ledLapTimeSplit = ledRepeatTimeSplit * 15 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 1 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 63000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberMH2_6);
                        
                        function ledNumberMH2_6() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 220 , 0 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let j;
                                if ( i % 4 === 1 ) j = 0;
                                else j = 1;

                                ledColorChange(1,i,ledBasicColor[j][0],ledBasicColor[j][1],ledBasicColor[j][2],nowTime[0],ledFadeTime);
                            }

                            ledBasicColor = [ [ 220 , 150 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 220 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 5;
                            let ledLapTimeSplit = ledRepeatTime / 38;

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
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 101000;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberMH2_7);
                        
                        function ledNumberMH2_7() {
                            let ledFadeTime = 2500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 255 , 255 ] ];
                            
                            let ledLapTimeSplit = ledRepeatTime * 6 / ledNumberInside;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,180,200,nowTime[0],ledFadeTime,0,ledSetInterval[7]);
                            
                            ledLapTimeSplit = ledRepeatTime * 10 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[7]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 105000;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberMH2_5);
                        
                        function ledNumberMH2_5() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 220 , 150 , 255 ] , [ 255 , 0 , 200 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 18;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 6 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 6 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledBasicColor1 = [ 255 , 255 , 255 ];
                            ledBasicColor2 = [ [ 255 , 0 , 200 ] , [ 220 , 150 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 12;
                            ledLapTimeSplit = ledRepeatTimeSplit * 15 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 1 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 121000;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberMH2_8);
                        
                        function ledNumberMH2_8() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 255 , 0 ] , [ 255 , 150 , 180 ] , [ 220 , 180 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 9;
                            let ledLapTimeSplit = ledRepeatTimeSplit * 15 / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            let ledBasicColor = [ [ 255 , 80 , 0 ] , [ 255 , 255 , 255 ] , [ 255 , 220 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 5;
                            ledLapTimeSplit = ledRepeatTime / 44;

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
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 153000;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberMH2_9);
                        
                        function ledNumberMH2_9() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledRepeatTime = 4000;
                            let ledBasicColor1 = [ 255 , 255 , 200 ];
                            let ledBasicColor2 = [ [ 150 , 0 , 255 ] , [ 255 , 150 , 0 ] , [ 255 , 100 , 150 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
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
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledRepeatTime = 2000;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 180 , 0 ] ];
                            let ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];
                            ledRepeatTimeSplit = ledRepeatTime / 2;
                            ledLapTimeSplit = ledRepeatTime / 50;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[10]);

                    ledSetTimeoutDelay[11] = 162000;
                    ledSetTimeout[11] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[10] = setInterval(ledNumberMH2_10);
                        
                        function ledNumberMH2_10() {
                            let ledFadeTime = 2500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[11],ledFadeTime,ledUseNumber,ledSetInterval[10],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 180 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;

                            let ledArray = [ 30 , 49 , 1 , 5 , 43 , 25 , 30 , 2 , 34 , 1 , 16 , 33 , 26 , 14 , 47 , 34 , 21 , 3 , 29 , 5 ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }
                            
                            ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[11]);

                    ledSetTimeoutDelay[12] = 167500;
                    ledSetTimeout[12] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[11] = setInterval(ledNumberMH2_11);
                        
                        function ledNumberMH2_11() {
                            let ledFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[12],ledFadeTime,ledUseNumber,ledSetInterval[11],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 255 , 0 , 200 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;
        
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 1 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    }
                                }

        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[11]);
                            }

                            ledBasicColor1 = [ 255 , 255 , 255 ];
                            ledBasicColor2 = [ [ 255 , 255 , 220 ] , [ 220 , 100 , 0 ] , [ 255 , 255 , 0 ] , [ 255 , 200 , 100 ] ];
                            ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ledLapTimeSplit * j % ledRepeatTime;
                                
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 4 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[11]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[12]);

                    /***** ムービングライト MH1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberMH1_1);

                        function movingLightNumberMH1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    if ( i === 1 ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(1,i,0,-20,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[2] = setInterval(movingLightNumberMH1_2);

                        function movingLightNumberMH1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 180 , 180 , 255 ] , [ 255 , 255 , 180 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

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

                    movingLightSetTimeoutDelay[2] = 8000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        movingLightSetInterval[3] = setInterval(movingLightNumberMH1_3);

                        function movingLightNumberMH1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 150 , 220 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[8] = 10000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 200;

                        movingLightSetInterval[9] = setInterval(movingLightNumberMH1_9);

                        function movingLightNumberMH1_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,-10,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 10200;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 200;

                        movingLightSetInterval[10] = setInterval(movingLightNumberMH1_10);

                        function movingLightNumberMH1_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);

                    movingLightSetTimeoutDelay[3] = 105000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMH1_4);

                        function movingLightNumberMH1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 139000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMH1_5);

                        function movingLightNumberMH1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 140000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMH1_6);

                        function movingLightNumberMH1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 167500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMH1_7);

                        function movingLightNumberMH1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 170500;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1900;

                        movingLightSetInterval[8] = setInterval(movingLightNumberMH1_8);

                        function movingLightNumberMH1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[7]);

                } else if ( key === 'i' ) {
                    /***** ウォーターカーテン AU *****/
                    waterCurtain("AU");

                } else if ( key === 'j' ) {
                    /***** ウォーターカーテン AN *****/
                    waterCurtain("AN");

                } else if ( key === 'k' ) {
                    /***** ウォーターカーテン BB *****/
                    waterCurtain("BB");

                } else if ( key === 'l' ) {
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                } else if ( key === 'm' ) {
                    /***** ウォーターカーテン BA *****/
                    waterCurtain("BA");

                } else if ( key === 'n' ) {
                    /***** ウォーターカーテン AG *****/
                    waterCurtain("AG");

                } else if ( key === 'o' ) {
                    /***** ウォーターカーテン AA *****/
                    waterCurtain("AA");

                } else if ( key === 'p' ) {                    
                    /***** ウォーターカーテン AJ *****/
                    waterCurtain("AJ");

                } else if ( key === 'q' ) {
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED MH3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberMH3_1);
                        
                        function ledNumberMH3_1() {
                            let ledFadeTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime);
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 4000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberMH3_2);
                        
                        function ledNumberMH3_2() {
                            let ledFadeTime = 3500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 14500;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberMH3_3);
                        
                        function ledNumberMH3_3() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime);

                            let ledRepeatTime = 2500;
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 0 , 0 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 3 / 44;
        
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
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 28000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberMH3_4);
                        
                        function ledNumberMH3_4() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 10500;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 200 , 180 , 255 ] , [ 180 , 255 , 255 ] , [ 0 , 0 , 255 ] ];
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
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 70000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberMH3_5);
                        
                        function ledNumberMH3_5() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 200 , 180 , 255 ] , [ 0 , 150 , 255 ] , [ 0 , 0 , 180 ] , [ 200 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / ledNumberInside;

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

                            ledRepeatTime = 2500;
                            ledBasicColor = [ [ 0 , 180 , 255 ] , [ 0 , 30 , 180 ] ];
                            let ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];
                            ledRepeatTimeSplit = ledRepeatTime / 2;
                            ledLapTimeSplit = ledRepeatTime / 50;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
        
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

                    ledSetTimeoutDelay[6] = 113000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberMH3_6);
                        
                        function ledNumberMH3_6() {
                            let ledFadeTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2500;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 50 , 150 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;

                            let ledArray = [ 30 , 49 , 1 , 5 , 43 , 25 , 30 , 2 , 34 , 1 , 16 , 33 , 26 , 14 , 47 , 34 , 21 , 3 , 29 , 5 ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }

                            ledRepeatTime = 5000;
                            let ledBasicColor1 = [ 0 , 200 , 255 ];
                            let ledBasicColor2 = [ [ 0 , 0 , 255 ] , [ 255 , 255 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / 44;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTime / 2 ) % ledRepeatTime;
        
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
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 158000;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberMH3_3);
                        
                        function ledNumberMH3_3() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime);

                            let ledRepeatTime = 2500;
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 0 , 0 , 200 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 3 / 44;
        
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
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 184000;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberMH3_7);
                        
                        function ledNumberMH3_7() {
                            let ledFadeTime = 3000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledBasicColor = [ [ 180 , 150 , 255 ] , [ 0 , 0 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 5;
                            let ledLapTimeSplit = ledRepeatTime * 3 / 18;
        
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
                            
                            ledBasicColor = [ [ 0 , 0 , 255 ] , [ 255 , 230 , 255 ] , [ 150 , 220 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 3;
                            ledLapTimeSplit = ledRepeatTime * 2 / 44;

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
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 231000;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberMH3_8);
                        
                        function ledNumberMH3_8() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;

                            let ledBasicColor = [ [ 0 , 180 , 255 ] , [ 255 , 255 , 255 ] , [ 220 , 200 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime * 2 / 18;
        
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
                            
                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] , [ 200 , 0 , 255 ] , [ 0 , 0 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / 44;

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
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 273000;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberMH3_9);
                        
                        function ledNumberMH3_9() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledRepeatTime = 5000;                        
                            let ledBasicColor1 = [ 200 , 100 , 255 ];
                            let ledBasicColor2 = [ [ 0 , 150 , 255 ] , [ 100 , 220 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / 18;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;
        
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

                            ledRepeatTime = 2500;
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 0 , 0 , 255 ] ];
                            let ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];
                            ledRepeatTimeSplit = ledRepeatTime / 2;
                            ledLapTimeSplit = ledRepeatTime / 50;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[10]);

                    ledSetTimeoutDelay[11] = 314000;
                    ledSetTimeout[11] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[10] = setInterval(ledNumberMH3_10);
                        
                        function ledNumberMH3_10() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[11],ledFadeTime,ledUseNumber,ledSetInterval[10],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledBasicColor = [ [ 50 , 150 , 255 ] , [ 150 , 255 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;

                            let ledArray = [ 30 , 49 , 1 , 5 , 43 , 25 , 30 , 2 , 34 , 1 , 16 , 33 , 26 , 14 , 47 , 34 , 21 , 3 , 29 , 5 ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }
                            
                            ledBasicColor = [ [ 30 , 120 , 255 ] , [ 255 , 255 , 255 ] ];
                            ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[11]);

                    /***** 水中照明 MH2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberMH2);

                    function waterLightNumberMH2() {
                        let fadeTime = 3500;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            if ( i % 2 ) waterLightColorChange(i,0,0,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                            else waterLightColorChange(i,0,0,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                    /***** ムービングライト MH1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,21,100,100,1);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberMH2_1);

                        function movingLightNumberMH2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,0,0,255,0);
                                    movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
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

                        let movingLightColorFadeTime = 3500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberMH2_2);

                        function movingLightNumberMH2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                        movingLightSetInterval[0] = setInterval(movingLightNumberMH2_0);

                        function movingLightNumberMH2_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);
                            let movingLightRotateDeg = 360/30000*(nowTime[0]%30000);

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 112000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMH2_3);

                        function movingLightNumberMH2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleChange(2,i,0,70,movingLightColorFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,180,220,255,-1,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 156000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 4000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMH2_4);

                        function movingLightNumberMH2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 160500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMH2_5);

                        function movingLightNumberMH2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleChange(1,i,0,20,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 230500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMH2_6);

                        function movingLightNumberMH2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 254000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 5000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMH2_7);

                        function movingLightNumberMH2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 314000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[8] = setInterval(movingLightNumberMH2_8);

                        function movingLightNumberMH2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 331000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 4000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMH2_4);

                        function movingLightNumberMH2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                } else if ( key === 's' ) {
                    /***** ウォーターカーテン AE *****/
                    waterCurtain("AE");

                } else if ( key === 't' ) {
                    /***** ウォーターカーテン AH *****/
                    waterCurtain("AH");

                } else if ( key === 'u' ) {
                    /***** ウォーターカーテン BH *****/
                    waterCurtain("BH");

                } else if ( key === 'v' ) {
                    /***** ウォーターカーテン AC *****/
                    waterCurtain("AC");

                } else if ( key === 'w' ) {
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                } else if ( key === 'x' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BP *****/
                    waterCurtain("BP");

                    /***** LED MH4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberMH4_1);
                        
                        function ledNumberMH4_1() {
                            let ledFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 80 , 150 ] , [ 255 , 255 , 150 ] , [ 255 , 180 , 0 ] ];
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / ledNumberInside;

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

                            ledBasicColor = [ [ 255 , 255 , 200 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 100 , 0 ] ];
                            ledLapTimeSplit = ledRepeatTime / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 1.5 ) % ledRepeatTime;

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

                    ledSetTimeoutDelay[2] = 24500;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberMH4_2);
                        
                        function ledNumberMH4_2() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;

                            let ledBasicColor = [ [ 150 , 0 , 255 ] , [ 255 , 230 , 180 ] , [ 255 , 100 , 180 ] , [ 255 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / 18;

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
                            
                            let ledBasicColor1 = [ 255 , 230 , 180 ];
                            let ledBasicColor2 = [ [ 0 , 255 , 255 ] , [ 220 , 180 , 255 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 4;
                            ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;
        
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
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 43500;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberMH4_3);
                        
                        function ledNumberMH4_3() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 200 ] , [ 150 , 255 , 50 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            ledLapTimeSplit = ledRepeatTimeSplit * 9 / 18;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 2 ) % ledRepeatTime;
        
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

                            ledBasicColor1 = [ 255 , 255 , 255 ];
                            ledBasicColor2 = [ [ 230 , 180 , 255 ] , [ 255 , 0 , 0 ] , [ 255 , 120 , 0 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 9;
                            ledLapTimeSplit = ledRepeatTime / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 3 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 56000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberMH4_4);
                        
                        function ledNumberMH4_4() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2800;

                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 100 , 0 ] ]; 
                            let ledRepeatTimeSplit = ledRepeatTime / 4;                       
                            let ledLapTimeSplit = 80;

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
                            
                            let ledBasicColor1 = [ 255 , 230 , 200 ];
                            let ledBasicColor2 = [ [ 255 , 220 , 240 ] , [ 255 , 120 , 0 ] , [ 255 , 0 , 120 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 6;
                            ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;
        
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
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 63500;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberCC3);
                        
                        function ledNumberCC3() {
                            let ledFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1500;
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
                        
                    },ledSetTimeoutDelay[5]);

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

                    /***** 看板照明 MH3 *****/
                    logoboardLightSetting(2);
                    
                    logoboardLightSetTimeout[0] = setTimeout(function() {
                        let logoboardLightMyNumber = logoboardLightSetting(0);
                        let logoboardLightFadeTime = 1200;
                        let logoboardLightSetInterval = setInterval(logoboardLightNumberMH3);
            
                        function logoboardLightNumberMH3() {
                            let nowTime = nowTimeGet(startTime+7000,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                            for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                                let j;
                                let logoboardLightColor = [];

                                if ( i <= logoboardLightNumber / 2 ) j = i;
                                else j = logoboardLightNumber - i + 1;

                                if ( j <= 3 ) logoboardLightColor = [ 220 , 0 , 255 , 0 ];
                                else if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 0 , 100 ];
                                else if ( j <= 9 ) logoboardLightColor = [ 255 , 50 , 100 , 100 ];
                                else if ( j <= 12 ) logoboardLightColor = [ 255 , 255 , 0 , 0 ];
                                else if ( j <= 18 ) logoboardLightColor = [ 255 , 120 , 0 , 0 ];
                                else if ( j <= 21 ) logoboardLightColor = [ 255 , 255 , 0 , 0 ];
                                else logoboardLightColor = [ 255 , 0 , 180 , 0 ];

                                logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,0);
                            }
                        }
                    },7000);
                    
                    /***** ムービングライト MH3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,0,60,50,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberMH3_1);

                        function movingLightNumberMH3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,200,150,0);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,200,150,0);
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberMH3_2);

                        function movingLightNumberMH3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 15000;
                            let angleXYRadius = 180;
                            let angleXYCenter = 0;
                            let angleZRadius = 100;
                            let angleZCenter = 0;
                            let movingLightLapTime = [ 3000 , 1000 , 7000 , 5000 ];
                            let movingLightRotateDeg = 360 / 800 * ( nowTime[0] % 800 );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightLapTime[i-1] ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = movingLightAngleJudgeTime / movingLightAngleRepeatTime * 2 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                angleZ *= ( (-1) ** ( i - 1 ) );
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                movingLightTripleRotateChange(1,i,movingLightRotateDeg+90*i);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberMH3_3);

                        function movingLightNumberMH3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 10000;
                            let angleXYRadius = 100;
                            let angleXYCenter = 0;
                            let angleZRadius = 45;
                            let angleZCenter = 55;
                            let movingLightLapTime = [ 7500 , 0 , 7500 , 0 ];
                            let movingLightRotateDeg = 360 / 800 * ( nowTime[0] % 800 );
                            
                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightLapTime[i-1] ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = movingLightAngleJudgeTime / movingLightAngleRepeatTime * 2 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                angleXY *= ( (-1) ** ( i - 1 ) );
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                movingLightTripleRotateChange(2,i,movingLightRotateDeg+90*i);
                            }

                        }

                    });

                    movingLightSetTimeoutDelay[1] = 1500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[4] = setInterval(movingLightNumberMH3_4);

                        function movingLightNumberMH3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);
                            }

                            let movingLightColorRepeatTime = 1000;
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

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 63500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMH3_5);

                        function movingLightNumberMH3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 68300;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        clearInterval(movingLightSetInterval[3]);
                    },movingLightSetTimeoutDelay[3]);

                } else if ( key === 'y' ) {
                    /***** ウォーターカーテン V *****/
                    waterCurtain("V");

                } else if ( key === 'z' ) {
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                } else if ( key === '@' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン E *****/
                    waterCurtain("E");

                    /***** LED MH5 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberMH5_1);
                        
                        function ledNumberMH5_1() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / ledNumberInside;

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
        
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 120 ] , [ 200 , 255 , 0 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 6;
                            ledLapTimeSplit = ledRepeatTimeSplit * 9 / 44;
        
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
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 7500;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberMH5_2);
                        
                        function ledNumberMH5_2() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,220,150,nowTime[0],ledFadeTime,0,ledSetInterval[2]);

                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 28500;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberMH5_3);
                        
                        function ledNumberMH5_3() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;
                            
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 200 , 50 ] ];

                            let ledArray = [ 30 , 49 , 1 , 5 , 43 , 25 , 30 , 2 , 34 , 1 , 16 , 33 , 26 , 14 , 47 , 34 , 21 , 3 , 29 , 5 ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }
                            
                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 180 , 220 ] ];
                            ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 50000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberMH5_4);
                        
                        function ledNumberMH5_4() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;

                            let ledBasicColor1 = [ 255 , 230 , 200 ];
                            let ledBasicColor2 = [ [ 200 , 180 , 255 ] , [ 255 , 100 , 0 ] ];
                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / 18;
        
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
                            
                            ledBasicColor2 = [ [ 255 , 150 , 0 ] , [ 220 , 120 , 255 ] ];
                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
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
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 66000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberMH5_5);
                        
                        function ledNumberMH5_5() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 0 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledLapTimeSplit = ledRepeatTimeSplit * 9 / 18;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 1 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledBasicColor2 = [ [ 255 , 220 , 200 ] , [ 255 , 255 , 0 ] , [ 255 , 200 , 220 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 9;
                            ledLapTimeSplit = ledRepeatTime / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 1 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 87000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberMH5_6);
                        
                        function ledNumberMH5_6() {
                            let ledFadeTime = 2000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledBasicColor = [ [ 255 , 220 , 180 ] , [ 255 , 150 , 80 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 50;

                            let ledArray = [ 30 , 49 , 1 , 5 , 43 , 25 , 30 , 2 , 34 , 1 , 16 , 33 , 26 , 14 , 47 , 34 , 21 , 3 , 29 , 5 ];
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }
                            
                            ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ledLapTimeSplit * ledArray[i-1] % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                            }

                        }
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 95000;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberMH5_7);
                        
                        function ledNumberMH5_7() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 5;

                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 100 , 0 ] , [ 255 , 0 , 100 ] , [ 255 , 255 , 255 ] , [ 255 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTime / 16;

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
                            
                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 100 , 0 ] , [ 255 , 255 , 255 ] ];
                            ledLapTimeSplit = ledRepeatTimeSplit * 8 / ledNumberOutside;

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
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 113500;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberMH5_8);
                        
                        function ledNumberMH5_8() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 0 ] ,  [ 0 , 255 , 0 ] , [ 255 , 0 , 200 ] , [ 0 , 255 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let ledLapTimeSplit = ledRepeatTimeSplit * 9 / 18;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberInside - i;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 4 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledBasicColor2 = [ [ 255 , 200 , 0 ] , [ 255 , 0 , 200 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 6;
                            ledLapTimeSplit = ledRepeatTime / 44;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 1.5 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[l][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 1 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 140000;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberMH5_9);
                        
                        function ledNumberMH5_9() {
                            let ledFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;

                            let ledBasicColor = [ [ 255 , 100 , 0 ] , [ 255 , 255 , 200 ] , [ 255 , 200 , 220 ] , [ 255 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / ledNumberInside;
        
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
                            
                            ledBasicColor = [ [ 255 , 255 , 200 ] , [ 255 , 255 , 255 ] , [ 255 , 100 , 0 ] , [ 255 , 200 , 220 ] ];
                            ledLapTimeSplit = ledRepeatTimeSplit * 5 / 44;

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
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 147500;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[10] = setInterval(ledNumberMH5_10);
                        
                        function ledNumberMH5_10() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[10],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 5000;
                            
                            let ledBasicColor1 = [ 255 , 255 , 255 ];
                            let ledBasicColor2 = [ [ 255 , 0 , 0 ] , [ 0 , 255 , 0 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let j = i - 1;
                                let ledJudgeTime = ( ledLapTimeSplit * j + 400 ) % ledRepeatTime;
        
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

        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime/*,0,ledSetInterval[10]*/);
                            }

                            ledBasicColor2 = [ [ 255 , 150 , 200 ] , [ 0 , 255 , 0 ] , [ 255 , 0 , 0 ] , [ 0 , 255 , 0 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 12;
                            ledLapTimeSplit = ledRepeatTime * 3 / ledNumberOutside;
        
                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let j = ledNumberOutside - i;
                                let ledJudgeTime = ( ledLapTimeSplit * j + 50 ) % ledRepeatTime;
                                
                                for ( var l = 0 ; l < 4 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor2[l][k] + ( ledBasicColor1[k] - ledBasicColor2[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 ) ) ;
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 3 + 2 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 3 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor1[k] + ( ledBasicColor2[ ( l + 1 ) % 4 ][k] - ledBasicColor1[k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 3 + 2 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime/*,0,ledSetInterval[10]*/);
                            }

                        }
                        
                    },ledSetTimeoutDelay[10]);

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

                    /***** 看板照明 MH5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMH5);
        
                    function logoboardLightNumberMH5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 0 , 0 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 0 , 0 , 255 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 255 , 0 , 100 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 255 , 100 , 0 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 255 , 255 , 100 , 255 ];
                            else logoboardLightColor = [ 100 , 100 , 0 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval,2);
                        }
                    }
                    
                    /***** ムービングライト MH4 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,80,70,100,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberMH4_1);

                        function movingLightNumberMH4_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,0,0);
                                    movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                }

                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,255,0);
                                    movingLightAngleChange(2,i,0,80,movingLightAngleFadeTime,nowTime[0]);
                                }
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[2] = setInterval(movingLightNumberMH4_2);

                        function movingLightNumberMH4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

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

                    movingLightSetTimeoutDelay[2] = 7500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMH4_3);

                        function movingLightNumberMH4_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,170,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,0,100,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 85000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;
                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMH4_4);

                        function movingLightNumberMH4_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,150,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberMH4_5);

                        function movingLightNumberMH4_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 30000;
                            let angleXYRadius = 80;
                            let angleXYCenter = 20;
                            let angleZRadius = 30;
                            let angleZCenter = -70;
                            let movingLightLapTime = movingLightAngleRepeatTime / 4;
                            let movingLightRotateDeg = 360 / 3500 * ( nowTime[0] % 3500 );
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightLapTime * ( i + 2.5 ) ) % movingLightAngleRepeatTime;
                                let movingLightAngleRad = movingLightAngleJudgeTime / movingLightAngleRepeatTime * 2 * Math.PI;
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                                movingLightTripleRotateChange(1,i,( (-1) ** i ) * movingLightRotateDeg);
                            }
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 95000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberMH4_6);

                        function movingLightNumberMH4_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,120,0,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 140000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMH4_7);

                        function movingLightNumberMH4_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 120 , 0 ] , [ 255 , 0 , 100 ] ];

                            for ( var i = 1 ; i <= 4 ; i++ ) {
                                let movingLightColor = [];

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / 4 * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[l][k] + ( movingLightBasicColor[ ( l + 1 ) % 2 ][k] - movingLightBasicColor[l][k] ) / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1,movingLightColorFadeTime,nowTime[0]);
                            }

                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 146500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[8] = setInterval(movingLightNumberMH4_8);

                        function movingLightNumberMH4_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }

                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 146700;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[9] = setInterval(movingLightNumberMH4_9);

                        function movingLightNumberMH4_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }

                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 147500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[10] = setInterval(movingLightNumberMH4_10);

                        function movingLightNumberMH4_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                            }

                        }

                    },movingLightSetTimeoutDelay[8]);

                } else if ( key === '[' ) {
                    /***** ウォーターカーテン AL *****/
                    waterCurtain("AL");

                } else if ( key === ';' ) {
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                } else if ( key === ':' ) {
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                } else if ( key === ']' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED MH6 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMH6);

                    function ledNumberMH6() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledLapTimeSplit = ledRepeatTime / 50;
                        
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 255 , 255 ] ];

                        let ledArray = [ 30 , 49 , 1 , 5 , 43 , 25 , 30 , 2 , 34 , 1 , 16 , 33 , 26 , 14 , 47 , 34 , 21 , 3 , 29 , 5 ];
    
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
    
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
    
                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                        }
                        
                        ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 255 , 0 ] ];
                        ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
    
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
    
                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                        }
    
                    }

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
                    
                    /***** ムービングライト MH5 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,23,50,100);
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                    movingLightSetTimeoutDelay[0] = 500;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 4000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberMH5_1);

                        function movingLightNumberMH5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                
                                movingLightAngleChange(1,1,0,-30,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,-70,60,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,0,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,70,60,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,100,movingLightAngleFadeTime,nowTime[0]);
                                
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberMH5_2);

                        function movingLightNumberMH5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4000;
                            let movingLightColorRepeatTimeSplit = 1800;
                            let movingLightBasicColor = [ [ 255 , 200 , 0 ] , [ 0 , 0 , 255 ] ];
                            let movingLightColor = [];
                            let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            if ( movingLightJudgeTime <= movingLightColorRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[0][k] + ( movingLightBasicColor[1][k] - movingLightBasicColor[0][k] ) / movingLightColorRepeatTimeSplit * movingLightJudgeTime;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) movingLightColor[k] = movingLightBasicColor[1][k]
                            }

                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],1);
                            
                        }

                    });

                    movingLightSetTimeoutDelay[1] = 6500;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 10000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberMH5_3);

                        function movingLightNumberMH5_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightAngleChange(2,1,-110,90,movingLightAngleFadeTime,nowTime[0]);                            
                                movingLightAngleChange(2,2,-15,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,3,15,90,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleChange(2,4,110,90,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }

                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 12500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberMH5_4);

                        function movingLightNumberMH5_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,200,0,0,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }

                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 17000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightTriplePictureChange(2,1,20,100,50,100);
                        movingLightPictureChange(2,2,20,40,100);
                        movingLightPictureChange(2,3,20,40,100);
                        movingLightTriplePictureChange(2,4,20,100,50,100);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberMH5_5);

                        function movingLightNumberMH5_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);

                                movingLightTripleRotateChange(2,1,90);
                                movingLightTripleRotateChange(2,4,90);
                            }

                            let movingLightRotateDeg = 360 / 68000 * (nowTime[0] % 68000 );
                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightRotateChange(2,i,( (-1) ** ( i - 1 ) ) * movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 109000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[6] = setInterval(movingLightNumberMH5_6);

                        function movingLightNumberMH5_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0);
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,255,255,255,-1);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 110000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberMH5_7);

                        function movingLightNumberMH5_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 131000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1300;

                        movingLightSetInterval[8] = setInterval(movingLightNumberMH5_8);

                        function movingLightNumberMH5_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= 4 ; i++ ) movingLightAngleChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                } else if ( key === ',' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED MH7 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberMH7);

                    function ledNumberMH7() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime);

                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledLapTimeSplit = ledRepeatTime / 50;                        
                        let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 180 , 120 ] ];
                        let ledArray = [ 12 , 3 , 18 , 34 , 41 , 25 , 43 , 21 , 31 , 37 , 3 , 37 , 6 , 32 , 2 , 28 , 41 , 23 , 7 , 3 , 0 , 13 , 44 , 40 , 9 , 15 , 14 , 7 , 35 , 14 , 35 , 5 , 41 , 4 , 19 , 32 , 32 , 5 , 44 , 28 , 20 , 42 , 37 , 2 , 38 , 45 , 17 , 45 ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ledArray[i-1] ) % ledRepeatTime;
    
                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
    
                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[10]);
                        }

                    }

                } else if ( key === '.' ) {
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

                } else if ( key === '/' ) {
                    let startTime = Date.now();

                    /***** LED demo *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[9] = 0;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberMH5_9);
                        
                        function ledNumberMH5_9() {
                            let ledFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 3000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;

                            let ledBasicColor = [ [ 255 , 100 , 0 ] , [ 255 , 255 , 200 ] , [ 255 , 200 , 220 ] , [ 255 , 255 , 255 ] ];
                            let ledLapTimeSplit = ledRepeatTimeSplit * 6 / ledNumberInside;
        
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
                            
                            ledBasicColor = [ [ 255 , 255 , 200 ] , [ 255 , 255 , 255 ] , [ 255 , 100 , 0 ] , [ 255 , 200 , 220 ] ];
                            ledLapTimeSplit = ledRepeatTimeSplit * 5 / 44;

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
                        
                    },ledSetTimeoutDelay[9]);

                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 MH1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMH1);
        
                    function logoboardLightNumberMH1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 100 , 255 , 0 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 0 , 0 , 0 , 255 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 255 , 0 , 255 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 0 , 0 , 0 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 255 , 50 , 50 , 0 ];
                            else logoboardLightColor = [ 0 , 0 , 0 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** 看板照明 MH2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 3800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMH2);
        
                    function logoboardLightNumberMH2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 50 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 200 , 0 , 200 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 255 , 200 , 0 , 0 ];
                            else logoboardLightColor = [ 255 , 100 , 50 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト MH1 *****/
                    let parLightSetInterval = setInterval(parLightNumberMH1);

                    function parLightNumberMH1() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,150,150,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(1,spotFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** パーライト MH2 *****/
                    let parLightSetInterval = setInterval(parLightNumberMH2);

                    function parLightNumberMH2() {
                        let parLightFadeTime = 3000;
                        let nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,0,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2300;
                        //let spotLightNowAct = [ 1 , 0 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ];

                        spotLightChange(1,spotFadeTime,startTime + 700/*,spotLightNowAct*/);
                    },700);

                } else if ( subCode === 9 ) { //f9
                    let startTime = Date.now();

                    /***** 看板照明 MH4 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMH4);
        
                    function logoboardLightNumberMH4() {
                        let nowTime = nowTimeGet(startTime,1000,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 5000;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 6;
                        let logoboardLapTimeSplit = logoboardRepeatTime / 44;
                        let logoboardBasicColor = [ [ 255 , 255 , 0 ] , [ 255 , 150 , 0 ] , [ 255 , 255 , 200 ] , [ 150 , 0 , 255 ] , [ 255 , 255 , 0 ] , [ 255 , 0 , 150 ] ];
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [];
                            let logoboardJudgeTime = ( nowTime[1] + logoboardLapTimeSplit  * ( 88 - i ) ) % logoboardRepeatTime;

                            for ( var l = 0 ; l < 6 ; l++ ) {
                                if ( logoboardJudgeTime < logoboardRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 4 ; k++ ) logoboardColor[k] = logoboardBasicColor[l][k] + ( logoboardBasicColor[ ( l + 1 ) % 6 ][k] - logoboardBasicColor[l][k] ) / logoboardRepeatTimeSplit * ( logoboardJudgeTime - logoboardRepeatTimeSplit * l ) ;
                                    break;
                                }
                            }
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],-1,1,1000,nowTime[0]);
                        }
                    }

                    /***** 看板照明 MH8 *****/
                    let logoboardLightMyNumber2 = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1000;
                    let logoboardLightSetInterval2 = setInterval(logoboardLightNumberMH8);
        
                    function logoboardLightNumberMH8() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval2,logoboardLightMyNumber2);

                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor;

                            if ( i <= logoboardLightNumber / 2 ) j = i - 1;
                            else j = logoboardLightNumber - i;

                            if ( j >= 3 && j < 6 || j >= 12 && j < 15 ) logoboardLightColor = 0;
                            else if ( j >= 19 ) logoboardLightColor = 255;
                            else logoboardLightColor = 150;

                            logoboardLightFadeChage(i,-1,-1,-1,logoboardLightColor,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval2,0);
                        }
                    }

                    /***** パーライト MH3 *****/
                    let parLightSetInterval = setInterval(parLightNumberMH3);

                    function parLightNumberMH3() {
                        let parLightFadeTime = 1500;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i % 2 === 1 ) parLightColor = [ 0 , 255 , 200 ];
                            else parLightColor = [ 255 , 0 , 150 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.6,spotFadeTime,startTime + 500);
                    },500);

                } else if ( subCode === 10 ) { //f10
                    let startTime = Date.now();

                    /***** 看板照明 MH6 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(1);
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMH6);
        
                    function logoboardLightNumberMH6() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                        let logoboardRepeatTime = 5000;
                        let logoboardRepeatTimeSplit = logoboardRepeatTime / 6;
        
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardColor = [ 0 , 0 , 0 ];
                            let logoboardLapTimeSplit = 160;
                            let logoboardWhiteColor = 100;

                            if ( i <= 18 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit * 2 + logoboardLapTimeSplit * ( 18 - i );
                            else if ( i <= 27 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit * 2 + logoboardLapTimeSplit * ( i - 19 );
                            else if ( i <= 36 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit * 5 + logoboardLapTimeSplit * ( 36 - i );
                            else if ( i <= 42 ) logoboardLapTimeSplit = logoboardRepeatTimeSplit * 3.5 + logoboardLapTimeSplit * ( i - 37 );
                            else logoboardLapTimeSplit = logoboardRepeatTimeSplit * 1.5 + logoboardLapTimeSplit * ( 48 - i );

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

                            if ( i >= 22 && i <= 27 || i >= 37 && i <= 39 ) logoboardWhiteColor = 255;
        
                            logoboardLightAnimateChange(i,logoboardColor[0],logoboardColor[1],logoboardColor[2],logoboardWhiteColor);
                        }
                    }   

                } else if ( subCode === 11 ) { //f11
                    let startTime = Date.now();

                    /***** 看板照明 MH5 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMH5);
        
                    function logoboardLightNumberMH5() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 6 ) logoboardLightColor = [ 255 , 0 , 0 , 0 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 0 , 255 , 0 , 0 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 0 , 0 , 0 , 255 ];
                            else if ( j <= 15 ) logoboardLightColor = [ 255 , 0 , 100 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 255 , 255 , 100 , 0 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 255 , 255 , 100 , 255 ];
                            else logoboardLightColor = [ 100 , 100 , 0 , 255 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 12 ) { //f12
                    let startTime = Date.now();

                    /***** 看板照明 MH7 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberMH7);
        
                    function logoboardLightNumberMH7() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 0 , 255, 50 ];
                            else if ( j <= 9 ) logoboardLightColor = [ 100 , 100 , 0 , 255 ];
                            else if ( j <= 12 ) logoboardLightColor = [ 240 , 255 , 0 , 0 ];
                            else if ( j <= 18 ) logoboardLightColor = [ 100 , 100 , 0 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 0 , 255 , 50 ];
                            else logoboardLightColor = [ 240 , 255 , 0 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                    /***** パーライト MH4 *****/
                    let parLightSetInterval = setInterval(parLightNumberMH4);

                    function parLightNumberMH4() {
                        let parLightFadeTime = 2800;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ ) {
                            let parLightColor = [];
                            if ( i  === 1 ) parLightColor = [ 200 , 200 , 255 ];
                            else if ( i === 2 ) parLightColor = [ 255 , 255 , 100 ];
                            else if ( i % 2 === 1 ) parLightColor = [ 255 , 255 , 255 ];
                            else parLightColor = [ 0 , 0 , 255 ];
        
                            parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                        }
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 2000;
                        spotLightChange(0.8,spotFadeTime,startTime + 800);
                    },800);

                }
            }
        } else if ( dnNowSelect === 1 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
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
                    
                } else if ( key === 'g' ) {
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
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight5_1);

                        function movingLightNumberNight5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,0);
                                    movingLightAngleFadeChange(1,i,0,50,movingLightAngleFadeTime,nowTime[0]);
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

                    /***** ムービングライト Night4 *****/
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
                                    movingLightAngleFadeChange(1,i,0,50,movingLightColorFadeTime,nowTime[0]);
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
                    
                    /***** ウォーターカーテン C *****/
                    waterCurtain("C");

                    /***** LED 2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber2);

                    function ledNumber2() {
                        let ledFadeTime = 2400;
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

                } else if ( key === 'j' ) {
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AF *****/
                    waterCurtain("AF");

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

                } else if ( key === 'l' ) {
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

                } else if ( key === 'm' ) {
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

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

                    /***** LED 118 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber118);

                    function ledNumber118() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,0,120,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,120,nowTime[0],ledFadeTime,0,ledSetInterval);

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

                } else if ( key === 'p' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン F *****/
                    waterCurtain("F");

                    /***** LED 95 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber95);

                    function ledNumber95() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'q' ) {
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

                } else if ( key === 'r' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED BCP2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBCP2);

                    function ledNumberBCP2() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト BCP3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                        movingLightColorChange(1,i,-1,-1,-1,0);
                    }
                    for ( var i = 1 ; i <= 4 ; i++ ) {
                        movingLightTriplePictureChange(2,i,14,100,40,100);
                        movingLightColorChange(2,i,-1,-1,-1,0);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[0] = setInterval(movingLightNumberBCP3_0);

                        function movingLightNumberBCP3_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightAngleFadeChange(1,i,0,35,300,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleFadeChange(2,i,0,85,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP3_1);

                        function movingLightNumberBCP3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightRotateUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            let movingLightRotateDeg = 360 / 90000 * ( nowTime[0] % 90000 );
                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 300;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBCP3_2);

                        function movingLightNumberBCP3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,1,800,nowTime[0],1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 's' ) {
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

                    /***** ムービングライト Night6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0,0);
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,35,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(2,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                movingLightSetting(0);
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    /*movingLightSetTimeoutDelay[1] = 1800;
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

                    },movingLightSetTimeoutDelay[1]);*/

                } else if ( key === 't' ) {
                    let startTime = Date.now();

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
                    
                } else if ( key === 'u' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED BCP1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberBCP1);

                    function ledNumberBCP1() {
                        let ledFadeTime = 1800;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                    /***** ムービングライト BCP1 *****/
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
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP1_1);

                        function movingLightNumberBCP1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                }

                                movingLightAngleFadeChange(1,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleFadeChange(1,i,( (-1) ** ( Math.trunc( i / 2 ) + 1 ) ) * 60,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,3,0,-40,movingLightAngleFadeTime,nowTime[0]);

                                movingLightAngleFadeChange(2,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleFadeChange(2,i,( (-1) ** ( i + 1 ) ) * 30,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,-15,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1100;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBCP1_2);

                        function movingLightNumberBCP1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === 'v' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BCP2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2100;
                        let movingLightAngleFadeTime = 2100;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP2_1);

                        function movingLightNumberBCP2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                movingLightAngleFadeChange(1,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleFadeChange(1,i,( (-1) ** ( Math.trunc( i / 2 ) + 1 ) ) * 60,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,3,0,-40,movingLightAngleFadeTime,nowTime[0]);

                                movingLightAngleFadeChange(2,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleFadeChange(2,i,( (-1) ** ( i + 1 ) ) * 30,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,-15,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === 'w' ) {
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
                        let movingLightAngleFadeTime = 500;

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

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 5000;

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

                } else if ( key === 'x' ) {
                    let startTime = Date.now();

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

                } else if ( key === 'y' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BCP1 *****/
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
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP1_1);

                        function movingLightNumberBCP1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                }

                                movingLightAngleFadeChange(1,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i += 2 ) movingLightAngleFadeChange(1,i,( (-1) ** ( Math.trunc( i / 2 ) + 1 ) ) * 60,-40,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,3,0,-40,movingLightAngleFadeTime,nowTime[0]);

                                movingLightAngleFadeChange(2,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleFadeChange(2,i,( (-1) ** ( i + 1 ) ) * 30,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,-15,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1100;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 2800;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBCP1_2);

                        function movingLightNumberBCP1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 4 ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
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

                } else if ( key === '@' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BCP3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                        movingLightColorChange(1,i,-1,-1,-1,0);
                    }
                    for ( var i = 1 ; i <= 4 ; i++ ) {
                        movingLightTriplePictureChange(2,i,14,100,40,100);
                        movingLightColorChange(2,i,-1,-1,-1,0);
                    }

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[0] = setInterval(movingLightNumberBCP3_0);

                        function movingLightNumberBCP3_0() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[0],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightAngleFadeChange(1,i,0,35,300,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightAngleFadeChange(2,i,0,85,movingLightAngleFadeTime,nowTime[0]);
                                }
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[0]);
                            }
                            
                        }

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP3_1);

                        function movingLightNumberBCP3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightRotateUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            let movingLightRotateDeg = 360 / 90000 * ( nowTime[0] % 90000 );
                            for ( var i = 1 ; i <= 4 ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 300;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 5000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBCP3_2);

                        function movingLightNumberBCP3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,255,255,0,1,800,nowTime[0],1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === '[' ) {
                    let startTime = Date.now();

                    /***** ムービングライト Night6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout,0);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0,0);
                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberNight2_1);

                        function movingLightNumberNight2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(1,i,0,35,movingLightColorFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= 4 ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleFadeChange(2,i,0,0,movingLightColorFadeTime,nowTime[0]);
                                }
                                movingLightColorChange(2,5,0,0,0,0);
                                movingLightAngleFadeChange(2,5,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                movingLightSetting(0);
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    /*movingLightSetTimeoutDelay[1] = 3000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBCP4_2);

                        function movingLightNumberBCP4_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);*/

                } else if ( key === ';' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BCP5 *****/
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
                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP5_1);

                        function movingLightNumberBCP5_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                }

                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,1,0,-45,movingLightAngleFadeTime,nowTime[0]);

                                movingLightAngleFadeChange(2,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleFadeChange(2,i,( (-1) ** ( i + 1 ) ) * 35,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,-15,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,5,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 600;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3500;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBCP5_2);

                        function movingLightNumberBCP5_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                } else if ( key === ':' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BCP6 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightAngleFadeTime = 1500;
                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP6_1);

                        function movingLightNumberBCP6_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 2 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,35,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(1,1,0,-45,movingLightAngleFadeTime,nowTime[0]);

                                movingLightAngleFadeChange(2,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleFadeChange(2,i,( (-1) ** ( i + 1 ) ) * 35,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,-15,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,5,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                } else if ( key === ']' ) {
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

                    /***** 水中照明 BCP3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBCP3);

                    function waterLightNumberBCP3() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,150,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
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

                } else if ( key === ',' ) {
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

                } else if ( key === '/' ) {
                    let startTime = Date.now();

                    /***** ムービングライト BCP7 *****/
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
                        let movingLightAngleFadeTime = 1800;

                        movingLightSetInterval[1] = setInterval(movingLightNumberBCP7_1);

                        function movingLightNumberBCP7_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                if ( nowTime[0] < 100 ) {
                                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,0);
                                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,0);
                                }

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleFadeChange(1,i,0,-45,movingLightAngleFadeTime,nowTime[0]);

                                movingLightAngleFadeChange(2,1,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 2 ; i <= 3 ; i++ ) movingLightAngleFadeChange(2,i,( (-1) ** ( i + 1 ) ) * 35,70,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,-15,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,5,80,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 2000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberBCP7_2);

                        function movingLightNumberBCP7_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,3,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[2]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 8500;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[3] = setInterval(movingLightNumberBCP7_3);

                        function movingLightNumberBCP7_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 11000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBCP7_4);

                        function movingLightNumberBCP7_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,3,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 16500;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[5] = setInterval(movingLightNumberBCP7_5);

                        function movingLightNumberBCP7_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,1,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,5,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 19500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[6] = setInterval(movingLightNumberBCP7_6);

                        function movingLightNumberBCP7_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,2,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,4,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 24000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberBCP7_4);

                        function movingLightNumberBCP7_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                movingLightColorChange(1,3,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);

                                movingLightColorChange(1,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(1,4,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,2,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                movingLightColorChange(2,3,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 30000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberBCP7_8);

                        function movingLightNumberBCP7_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

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

                    /***** 水中照明 BCP4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBCP4);

                    function waterLightNumberBCP4() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }

                } else if ( key === 'g' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AB *****/
                    waterCurtain("AB");

                    /***** LED 116 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber116);

                    function ledNumber116() {
                        let ledFadeTime = 200;
                        let ledRepeatTime = 2000;
                        let ledChangeTime = 200;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 0 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledColor = [];
                        
                        let ledJudgeTime = nowTime[1] % ledRepeatTime;

                        for ( var j = 0 ; j < 2 ; j++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) - ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k];
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][k] + ( ledBasicColor[ ( j + 1 ) % 2 ][k] - ledBasicColor[j][k] ) / ledChangeTime *  ( ledJudgeTime - ledRepeatTimeSplit * ( j + 1 ) + ledChangeTime );
                                break;
                            }
                        }

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    }

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
                                    if ( i === 5 ) movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 400;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);
                        let movingLightColorFadeTime = 1800;

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

                } else if ( key === 'h' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン D *****/
                    waterCurtain("D");

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

                } else if ( key === 'i' ) {
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

                    /***** 水中照明 BCP3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBCP3);

                    function waterLightNumberBCP3() {
                        let fadeTime = 2300;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,150,255,nowTime[0],fadeTime,0,waterLightSetInterval);
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
                                    if ( i === 5 ) movingLightAngleFadeChange(2,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleFadeChange(2,i,0,70,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    /*movingLightSetTimeoutDelay[1] = 2000;
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

                    },movingLightSetTimeoutDelay[1]);*/

                } else if ( key === 'j' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン K *****/
                    waterCurtain("K");

                    /***** LED 95 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber95);

                    function ledNumber95() {
                        let ledFadeTime = 1500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'k' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED 67 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber67);

                    function ledNumber67() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,255,150,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,150,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }

                } else if ( key === 'l' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン AA *****/
                    waterCurtain("AA");

                    /***** LED 108 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber108);

                    function ledNumber108() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledBasicColor = [ [ 255 , 240 , 255 ] , [ 240 , 255 , 255 ] , [ 255 , 255 , 240 ] ];                    
                        let ledJudgeTime = 0;
                        
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

                } else if ( key === 'm' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン BI *****/
                    waterCurtain("BI");

                    /***** LED 87 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber87);

                    function ledNumber87() {
                        let ledFadeTime = 1200;
                        let ledRepeatTime = 5200;
                        let ledChangeTime = 500;
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ [ 255 , 210 , 150 ] , [ 255 , 240 , 220 ] ] , [ [ 255 , 0 , 80 ] , [ 255 , 0 , 80 ] ] ];
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        
                        let ledJudgeTime = nowTime[0] % ledRepeatTime;

                        let ledArray = [ 0 , 1 , 1 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 1 , 1 , 0 , 1 , 0 , 1 , 1 , 0 , 0 , 1 ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];

                            for ( var j = 0 ; j < 2 ; j++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][ledArray[i-1]][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][ledArray[i-1]][k] + ( ledBasicColor[ ( j + 1 ) % 2 ][ledArray[i-1]][k] - ledBasicColor[j][ledArray[i-1]][k] ) / ledChangeTime *  ( ledJudgeTime - ledRepeatTimeSplit * ( j + 1 ) + ledChangeTime );
                                    break;
                                }
                            }    

                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                        ledJudgeTime = ( ledJudgeTime + ledRepeatTimeSplit ) % ledRepeatTime;

                        ledArray = [ 0 , 1 , 1 , 0 , 1 , 1 , 0 , 0 , 1 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 0 , 0 , 1 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 0 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 0 , 1 , 0 ];

                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];

                            for ( var j = 0 ; j < 2 ; j++ ) {
                                if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) - ledChangeTime ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][ledArray[i-1]][k];
                                    break;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * ( j + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[j][ledArray[i-1]][k] + ( ledBasicColor[ ( j + 1 ) % 2 ][ledArray[i-1]][k] - ledBasicColor[j][ledArray[i-1]][k] ) / ledChangeTime *  ( ledJudgeTime - ledRepeatTimeSplit * ( j + 1 ) + ledChangeTime );
                                    break;
                                }
                            } 

                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        }

                    }

                    /***** 水中照明 BCP4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberBCP4);

                    function waterLightNumberBCP4() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,0,255,0,nowTime[0],fadeTime,0,waterLightSetInterval);
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

                } else if ( key === 'n' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン M *****/
                    waterCurtain("M");

                    /***** LED 94 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumber94);

                    function ledNumber94() {
                        let ledFadeTime = 2500;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,0,nowTime[0],ledFadeTime,0,ledSetInterval);

                    }
                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 BCP1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBCP1);
        
                    function logoboardLightNumberBCP1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];

                            if ( i <= logoboardLightNumber / 2 ) j = i - 1;
                            else j = logoboardLightNumber - i;

                            if ( j % 9 < 3 ) logoboardLightColor = [ 255 , 50 , 100 , 0 ];
                            else logoboardLightColor = [ 255 , 255 , 120 , 0 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                } else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** スポットライト *****/
                    let spotFadeTime = 600;
                    spotLightChange(1,spotFadeTime,startTime);
                    
                } else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** パーライト BCP1 *****/
                    let parLightSetInterval = setInterval(parLightNumberBCP1);

                    function parLightNumberBCP1() {
                        let parLightFadeTime = 3000;
                        var nowTime = nowTimeGet(startTime,0);

                        for ( var i = 1 ; i <= 8 ; i++ )parLightColorFadeChange(i,255,255,150,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }

                    setTimeout( function () {
                        /***** スポットライト *****/
                        let spotFadeTime = 1000;
                        spotLightChange(0.5,spotFadeTime,startTime + 2000);
                    },2000);

                } else if ( subCode === 9 ) { //f9
                    let startTime = Date.now();

                    /***** 看板照明 BCP2 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 800;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberBCP2);
        
                    function logoboardLightNumberBCP2() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) logoboardLightFadeChage(i,255,255,120,0,1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                    }
                    
                    setTimeout( function () {
                        /***** ステージライト *****/
                    stageLightChange(1,800,startTime + 300);
                    },300);

                }
            }
        }
    }
});