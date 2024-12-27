jsSetting("2023Special2","2023 Special 2",0,0,1,1,2200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "2023Special2" ) {
        if ( dnNowSelect === 1 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();
                    
                    /***** ウォーターカーテン A *****/
                    waterCurtain("A");

                    /***** LED SEVEN1 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetInterval = setInterval(ledNumberSEVEN1);

                    function ledNumberSEVEN1() {
                        let ledFadeTime = 2000;
                        let ledRepeatTime = 16000;
                        let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                        let ledRepeatTimeSplit = ledRepeatTime / 2;
                        let ledBasicColor = [ [ 180 , 150 , 255 ] , [ 255 , 120 , 180 ] ];

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
                            let j = i - 1;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
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
                            let j = i - 1;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberOutside;
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

                    /***** 水中照明 CC1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberCC1);

                    function waterLightNumberCC1() {
                        let waterLightFadeTime = 2000;
                        let nowTime = nowTimeGet(startTime,waterLightFadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);
                        let waterLightRepeatTime = 16000;
                        let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                        let waterLightBasicColor = [ [ 180 , 150 , 255 ] , [ 255 , 120 , 180 ] ];

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            let j = i - 1;
                            let waterLightColor = [];
                            let waterLightJudgeTime = ( nowTime[1] + waterLightRepeatTime / waterLightNumber * j ) % waterLightRepeatTime;

                            for ( var l = 0 ; l < 2 ; l++ ) {
                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                    break;
                                }
                            }

                            waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                        }
                    }

                } else if ( key === 'g' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン BT *****/
                    waterCurtain("A");
                    waterCurtainActualSetTimeout[1] = setTimeout( function() {
                        waterCurtain("AN",0);
                    },81500);
                    waterCurtainActualSetTimeout[2] = setTimeout( function() {
                        waterCurtain("BO",0);
                    },94500);
                    waterCurtainActualSetTimeout[3] = setTimeout( function() {
                        waterCurtain("A",0);
                    },108000);
                    waterCurtainActualSetTimeout[4] = setTimeout( function() {
                        waterCurtain("BM",0);
                    },108500);
                    waterCurtainActualSetTimeout[5] = setTimeout( function() {
                        waterCurtain("AX",0);
                    },122000);
                    waterCurtainActualSetTimeout[6] = setTimeout( function() {
                        waterCurtain("AZ",0);
                    },136000);
                    waterCurtainActualSetTimeout[7] = setTimeout( function() {
                        waterCurtain("BG",0);
                    },142000);
                    waterCurtainActualSetTimeout[8] = setTimeout( function() {
                        waterCurtain("AO",0);
                    },148000);
                    waterCurtainActualSetTimeout[9] = setTimeout( function() {
                        waterCurtain("A",0);
                    },175000);
                    waterCurtainActualSetTimeout[10] = setTimeout( function() {
                        waterCurtain("AV",0);
                    },179500);
                    waterCurtainActualSetTimeout[11] = setTimeout( function() {
                        waterCurtain("BH",0);
                    },192500);
                    waterCurtainActualSetTimeout[12] = setTimeout( function() {
                        waterCurtain("A",0);
                    },204000);

                    /***** LED SEVEN2 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN2_1);
                        
                        function ledNumberSEVEN2_1() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 27500;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSEVEN2_2);
                        
                        function ledNumberSEVEN2_2() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1800;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = 1000;
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ 240 , 180 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] - ledLapTimeSplit * ( i % 2 ) ) % 3500;

                                if ( ledJudgeTime >= 0 ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        }
                                    }
        
                                    ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                                }
                                
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 34000;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN2_1);
                        
                        function ledNumberSEVEN2_1() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 81500;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN2_3);
                        
                        function ledNumberSEVEN2_3() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledLapTimeSplit = ledRepeatTime / 5;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 150 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i + 3 ) % 5;

                                if ( ( i + 3 ) % 10 >= 5 ) j = 4 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime / 12;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i - 1 ) % 12;

                                if ( ( i - 1 ) % 24 < 12 ) j = 11 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 94500;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSEVEN2_4);
                        
                        function ledNumberSEVEN2_4() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 0 , 0 ] ];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 150 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

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
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 102000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN2_3);
                        
                        function ledNumberSEVEN2_3() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledLapTimeSplit = ledRepeatTime / 5;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 150 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i + 3 ) % 5;

                                if ( ( i + 3 ) % 10 >= 5 ) j = 4 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime / 12;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i - 1 ) % 12;

                                if ( ( i - 1 ) % 24 < 12 ) j = 11 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 108500;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberSEVEN2_5);
                        
                        function ledNumberSEVEN2_5() {
                            let ledFadeTime = 600;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 200 , 100 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 121500;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberSEVEN2_6);
                        
                        function ledNumberSEVEN2_6() {
                            let ledFadeTime = 1000;
                            let ledAllRepeatTime = 3000;
                            let ledRepeatTime = 500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ 255 , 255 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledLapTimeSplit = 60;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];                            

                                if ( nowTime[1] < 4600 ) {
                                    let j = ( i + 3 ) % 5;

                                    if ( ( i + 3 ) % 10 < 5 ) j = 4 - j;
        
                                    let ledJudgeTime = ( nowTime[1] - ledLapTimeSplit * j ) % ledAllRepeatTime;

                                    if ( ledJudgeTime < 0 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                    } else {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                    }
                                } else if ( nowTime[1] < 5400 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / 800 * ( nowTime[1] - 4600 ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = 75;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];                            

                                if ( nowTime[1] < 5500 ) {
                                    let j = ( i - 1 ) % 12;

                                    if ( ( i - 1 ) % 24 >= 12 ) j = 11 - j;
        
                                    let ledJudgeTime = ( nowTime[1] - ledLapTimeSplit * j - 800 ) % ledAllRepeatTime;

                                    if ( ledJudgeTime < 0 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                    } else {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                    }
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 131000;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberSEVEN2_7);
                        
                        function ledNumberSEVEN2_7() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,240,150,nowTime[0],ledFadeTime,0,ledSetInterval[7]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,120,255,nowTime[0],ledFadeTime,0,ledSetInterval[7]);
                        
                        }
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 136000;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberSEVEN2_5);
                        
                        function ledNumberSEVEN2_5() {
                            let ledFadeTime = 200;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 200 , 100 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

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

                    ledSetTimeoutDelay[11] = 145000;
                    ledSetTimeout[11] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberSEVEN2_8);
                        
                        function ledNumberSEVEN2_8() {
                            let ledFadeTime = 300;
                            let ledRepeatTime = 500;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 200 , 100 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[11],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledArray = [ 560 , 800 , 90 , 510 , 950 , 170 , 730 , 330 , 740 , 230 , 800 , 0 , 220 , 120 , 830 , 800 , 750 , 880 , 530 , 810 ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledArray[i-1] / 2 ) % ledRepeatTime;

                                for ( l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ){
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledArray = [ 560 , 100 , 820 , 230 , 400 , 260 , 920 , 310 , 130 , 670 , 830 , 330 , 990 , 990 , 360 , 890 , 210 , 240 , 780 , 370 , 0 , 40 , 600 , 410 , 910 , 640 , 990 , 120 , 100 , 710 , 180 , 860 , 400 , 410 , 500 , 860 , 210 , 300 , 960 , 530 , 640 , 50 , 420 , 630 , 1000 , 180 , 350 , 30 ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledArray[i-1] / 2 ) % ledRepeatTime;

                                for ( l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ){
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[11]);

                    ledSetTimeoutDelay[12] = 147000;
                    ledSetTimeout[12] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberSEVEN2_9);
                        
                        function ledNumberSEVEN2_9() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[12],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,180,255,nowTime[0],ledFadeTime,0,ledSetInterval[9]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,180,255,nowTime[0],ledFadeTime,0,ledSetInterval[9]);
                        
                        }
                        
                    },ledSetTimeoutDelay[12]);

                    ledSetTimeoutDelay[13] = 148500;
                    ledSetTimeout[13] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[10] = setInterval(ledNumberSEVEN2_10);
                        
                        function ledNumberSEVEN2_10() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[13],ledFadeTime,ledUseNumber,ledSetInterval[10],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 700;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledColorChangeTime = 300;
                            let ledColorChangeBeforeTime = [ 6500 , 14000 , 1000000 ];
                            let ledBasicColor = [ [] , [] ];
                            let ledBasicColorMask = [ [ [ 255 , 120 , 180 ] , [ 200 , 120 , 255 ] ] , [ [ 255 , 255 , 0 ] , [ 255 , 150 , 220 ] ] , [ [ 255 , 150 , 0 ] , [ 255 , 120 , 180 ] ] ];
                            
                            for ( var i = 0 ; i < 3 ; i++ ) {
                                if ( nowTime[0] < ledColorChangeBeforeTime[i] ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledBasicColorMask[i][l][k];
                                    }
                                    break;
                                } else if ( nowTime[0] < ledColorChangeBeforeTime[i] + ledColorChangeTime ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledBasicColor[l][k] = ledBasicColorMask[i][l][k] + ( ledBasicColorMask[ i + 1 ][l][k] - ledBasicColorMask[i][l][k] ) / ledColorChangeTime * ( nowTime[0] - ledColorChangeBeforeTime[i] ) ;
                                    }
                                    break;
                                }
                            }
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[13]);

                    ledSetTimeoutDelay[14] = 174500;
                    ledSetTimeout[14] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[11] = setInterval(ledNumberSEVEN2_11);
                        
                        function ledNumberSEVEN2_11() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[14],ledFadeTime,ledUseNumber,ledSetInterval[11],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,100,150,nowTime[0],ledFadeTime,0,ledSetInterval[11]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,100,150,nowTime[0],ledFadeTime,0,ledSetInterval[11]);
                        
                        }
                        
                    },ledSetTimeoutDelay[14]);

                    ledSetTimeoutDelay[15] = 175000;
                    ledSetTimeout[15] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[12] = setInterval(ledNumberSEVEN2_12);
                        
                        function ledNumberSEVEN2_12() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[15],ledFadeTime,ledUseNumber,ledSetInterval[12],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[12]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[12]);
                        
                        }
                        
                    },ledSetTimeoutDelay[15]);

                    ledSetTimeoutDelay[16] = 175500;
                    ledSetTimeout[16] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN2_1);
                        
                        function ledNumberSEVEN2_1() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[16],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[16]);

                    ledSetTimeoutDelay[17] = 179500;
                    ledSetTimeout[17] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN2_3);
                        
                        function ledNumberSEVEN2_3() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[17],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledLapTimeSplit = ledRepeatTime / 5;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 150 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i + 3 ) % 5;

                                if ( ( i + 3 ) % 10 >= 5 ) j = 4 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime / 12;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i - 1 ) % 12;

                                if ( ( i - 1 ) % 24 < 12 ) j = 11 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[17]);

                    ledSetTimeoutDelay[18] = 192500;
                    ledSetTimeout[18] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSEVEN2_4);
                        
                        function ledNumberSEVEN2_4() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[18],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 0 , 0 ] ];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 150 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

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
                        
                    },ledSetTimeoutDelay[18]);

                    ledSetTimeoutDelay[19] = 200000;
                    ledSetTimeout[19] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN2_3);
                        
                        function ledNumberSEVEN2_3() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[19],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            let ledLapTimeSplit = ledRepeatTime / 5;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 150 , 255 , 0 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i + 3 ) % 5;

                                if ( ( i + 3 ) % 10 >= 5 ) j = 4 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                            
                            ledLapTimeSplit = ledRepeatTime / 12;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 0 , 0 ] ];
                                let j = ( i - 1 ) % 12;

                                if ( ( i - 1 ) % 24 < 12 ) j = 11 - j;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[19]);

                    ledSetTimeoutDelay[20] = 206500;
                    ledSetTimeout[20] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[13] = setInterval(ledNumberSEVEN2_13);
                        
                        function ledNumberSEVEN2_13() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[20],ledFadeTime,ledUseNumber,ledSetInterval[13],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval);
        
                        }
                        
                    },ledSetTimeoutDelay[20]);

                    ledSetTimeoutDelay[21] = 209000;
                    ledSetTimeout[21] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN2_1);
                        
                        function ledNumberSEVEN2_1() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[21],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[21]);

                    /***** 水中照明 SEVEN2 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetTimeoutDelay = [];
                    let waterLightSetInterval = [];

                    waterLightSetTimeoutDelay[1] = 0;
                    waterLightSetTimeout[1] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSEVEN2_1);

                        function waterLightNumberSEVEN2_1() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[1],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 3000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 0 , 0 , 0 ] , [] ];
                            let waterLightBasicColorMask = [ [ 200 , 180 , 255 ] , [ 255 , 0 , 0 ] ];
                            let waterLightColorChangeBeforeTime = 2000;
                            let waterLightColorChangeTime = 600;

                            if ( nowTime[0] < waterLightColorChangeBeforeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k];
                            } else if ( nowTime[0] < waterLightColorChangeBeforeTime + waterLightColorChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k] + ( waterLightBasicColorMask[1][k] - waterLightBasicColorMask[0][k] ) / waterLightColorChangeTime * ( nowTime[0] - waterLightColorChangeBeforeTime ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[1][k];
                            }

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
                        
                    },waterLightSetTimeoutDelay[1]);

                    waterLightSetTimeoutDelay[2] = 13000;
                    waterLightSetTimeout[2] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSEVEN2_2);

                        function waterLightNumberSEVEN2_2() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[2],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,150,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[2]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[2]);

                    waterLightSetTimeoutDelay[3] = 41000;
                    waterLightSetTimeout[3] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN2_3);

                        function waterLightNumberSEVEN2_3() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[3],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,120,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[3]);

                    waterLightSetTimeoutDelay[4] = 47500;
                    waterLightSetTimeout[4] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSEVEN2_2);

                        function waterLightNumberSEVEN2_2() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[4],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,150,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[2]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[4]);

                    waterLightSetTimeoutDelay[5] = 53000;
                    waterLightSetTimeout[5] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN2_4);

                        function waterLightNumberSEVEN2_4() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[5],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[5]);

                    waterLightSetTimeoutDelay[6] = 67500;
                    waterLightSetTimeout[6] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[5] = setInterval(waterLightNumberSEVEN2_5);

                        function waterLightNumberSEVEN2_5() {
                            let waterLightFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[6],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[5],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 3000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 0 , 255 ] , [ 0 , 0 , 0 ] ];

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
                        
                    },waterLightSetTimeoutDelay[6]);

                    waterLightSetTimeoutDelay[7] = 79000;
                    waterLightSetTimeout[7] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[6] = setInterval(waterLightNumberSEVEN2_6);

                        function waterLightNumberSEVEN2_6() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[7],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[6],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[6]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[7]);

                    waterLightSetTimeoutDelay[8] = 80000;
                    waterLightSetTimeout[8] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN2_4);

                        function waterLightNumberSEVEN2_4() {
                            let waterLightFadeTime = 900;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[8],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[8]);

                    waterLightSetTimeoutDelay[9] = 81500;
                    waterLightSetTimeout[9] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[7] = setInterval(waterLightNumberSEVEN2_7);

                        function waterLightNumberSEVEN2_7() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[9],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[7],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 6500;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightBasicColor = [ [ 255 , 100 , 255 ] , [ 255 , 255 , 100 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let j = i - 1;
                                let waterLightColor = [];
                                let waterLightJudgeTime = ( nowTime[1] + waterLightRepeatTime / waterLightNumber * j ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[9]);

                    waterLightSetTimeoutDelay[10] = 108500;
                    waterLightSetTimeout[10] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[8] = setInterval(waterLightNumberSEVEN2_8);

                        function waterLightNumberSEVEN2_8() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[10],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[8],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 6500;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightBasicColor = [ [ 80 , 150 , 255 ] , [ 220 , 0 , 255 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let j = i - 1;
                                let waterLightColor = [];
                                let waterLightJudgeTime = ( nowTime[1] + waterLightRepeatTime / waterLightNumber * j ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }

                        }
                        
                    },waterLightSetTimeoutDelay[10]);

                    waterLightSetTimeoutDelay[11] = 121500;
                    waterLightSetTimeout[11] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSEVEN2_2);

                        function waterLightNumberSEVEN2_2() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[11],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,150,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[2]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[11]);

                    waterLightSetTimeoutDelay[12] = 125600;
                    waterLightSetTimeout[12] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[6] = setInterval(waterLightNumberSEVEN2_6);

                        function waterLightNumberSEVEN2_6() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[12],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[6],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[6]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[12]);

                    waterLightSetTimeoutDelay[13] = 131000;
                    waterLightSetTimeout[13] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSEVEN2_2);

                        function waterLightNumberSEVEN2_2() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[13],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,150,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[2]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[13]);

                    waterLightSetTimeoutDelay[14] = 136000;
                    waterLightSetTimeout[14] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[6] = setInterval(waterLightNumberSEVEN2_6);

                        function waterLightNumberSEVEN2_6() {
                            let waterLightFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[14],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[6],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[6]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[14]);

                    waterLightSetTimeoutDelay[15] = 142000;
                    waterLightSetTimeout[15] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[9] = setInterval(waterLightNumberSEVEN2_9);

                        function waterLightNumberSEVEN2_9() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[15],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[9],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 3000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [] , [ 0 , 0 , 0 ] ];
                            let waterLightBasicColorMask = [ [ 255 , 0 , 255 ] , [ 200 , 150 , 255 ] ];
                            let waterLightColorChangeBeforeTime = 3000;
                            let waterLightColorChangeTime = 500;

                            if ( nowTime[0] < waterLightColorChangeBeforeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[0][k] = waterLightBasicColorMask[0][k];
                            } else if ( nowTime[0] < waterLightColorChangeBeforeTime + waterLightColorChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[0][k] = waterLightBasicColorMask[0][k] + ( waterLightBasicColorMask[1][k] - waterLightBasicColorMask[0][k] ) / waterLightColorChangeTime * ( nowTime[0] - waterLightColorChangeBeforeTime ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[0][k] = waterLightBasicColorMask[1][k];
                            }


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
                        
                    },waterLightSetTimeoutDelay[15]);

                    waterLightSetTimeoutDelay[16] = 147000;
                    waterLightSetTimeout[16] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[10] = setInterval(waterLightNumberSEVEN2_10);

                        function waterLightNumberSEVEN2_10() {
                            let waterLightFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[16],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[10],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,180,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[10]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[16]);

                    waterLightSetTimeoutDelay[17] = 148500;
                    waterLightSetTimeout[17] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[11] = setInterval(waterLightNumberSEVEN2_11);

                        function waterLightNumberSEVEN2_11() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[17],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[11],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 6500;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightColorChangeTime = 6500;
                            let waterLightColorChangeBeforeTime = 6050;
                            let waterLightBasicColor = [ [] , [] ];
                            let waterLightBasicColor1 = [ [ 200 , 0 , 255 ] , [ 255 , 0 , 100 ] ];
                            let waterLightBasicColor2 = [ [ 255 , 100 , 255 ] , [ 255 , 255 , 100 ] ];

                            if ( nowTime[0] < waterLightColorChangeBeforeTime ) {
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[l][k] = waterLightBasicColor1[l][k];
                                }
                            } else if ( nowTime[0] < waterLightColorChangeBeforeTime + waterLightColorChangeTime ) {
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[l][k] = waterLightBasicColor1[l][k] + ( waterLightBasicColor2[l][k] - waterLightBasicColor1[l][k] ) / waterLightColorChangeTime * ( nowTime[0] - waterLightColorChangeBeforeTime ) ;
                                }
                            } else {
                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[l][k] = waterLightBasicColor2[l][k];
                                }
                            }

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let j = i - 1;
                                let waterLightColor = [];
                                let waterLightJudgeTime = ( nowTime[1] + waterLightRepeatTime / waterLightNumber * j ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[17]);

                    waterLightSetTimeoutDelay[18] = 174500;
                    waterLightSetTimeout[18] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[12] = setInterval(waterLightNumberSEVEN2_12);

                        function waterLightNumberSEVEN2_12() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[18],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[12],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,180,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[12]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[18]);

                    waterLightSetTimeoutDelay[19] = 175500;
                    waterLightSetTimeout[19] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN2_4);

                        function waterLightNumberSEVEN2_4() {
                            let waterLightFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[19],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[19]);

                    waterLightSetTimeoutDelay[20] = 179500;
                    waterLightSetTimeout[20] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[7] = setInterval(waterLightNumberSEVEN2_7);

                        function waterLightNumberSEVEN2_7() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[20],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[7],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 6500;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightBasicColor = [ [ 255 , 100 , 255 ] , [ 255 , 255 , 100 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let j = i - 1;
                                let waterLightColor = [];
                                let waterLightJudgeTime = ( nowTime[1] + waterLightRepeatTime / waterLightNumber * j ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[20]);

                    waterLightSetTimeoutDelay[21] = 206500;
                    waterLightSetTimeout[21] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[6] = setInterval(waterLightNumberSEVEN2_6);

                        function waterLightNumberSEVEN2_6() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[21],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[6],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[6]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[21]);

                    waterLightSetTimeoutDelay[22] = 209000;
                    waterLightSetTimeout[22] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[13] = setInterval(waterLightNumberSEVEN2_13);

                        function waterLightNumberSEVEN2_13() {
                            let waterLightFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[22],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[13],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[13]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[22]);

                    /***** ムービングライト SEVEN1 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 1000;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,22,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,20,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberSEVEN1_1);

                        function movingLightNumberSEVEN1_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],0,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,240,0,255,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightAngleChange(2,i,0,60,movingLightAngleFadeTime,nowTime[0]);
                                    movingLightColorChange(2,i,255,255,255,0);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[1]);
                            }
                            
                        }

                        movingLightSetInterval[2] = setInterval(movingLightNumberSEVEN1_2);

                        function movingLightNumberSEVEN1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],13000,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                
                                if ( i % 2 === 1 ) {
                                    let movingLightAngleRepeatTime = 60000;
                                    let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                                    let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTime;
                                    let maxAngleXY = [ -150 , 50 ];

                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = maxAngleXY[0] + ( maxAngleXY[1] - maxAngleXY[0] ) / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    else angleXY = maxAngleXY[1] + ( maxAngleXY[0] - maxAngleXY[1] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );

                                    if ( i === 1 ) angleXY *= -1;
                                } else {
                                    let movingLightAngleRepeatTime = 40000;
                                    let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;

                                    angleXY = ( (-1) ** Math.trunc( ( i - 1 ) / 2 ) ) * ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + 30 );
                                }

                                movingLightAngleChange(1,i,angleXY,-60,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 13000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberSEVEN1_3);

                        function movingLightNumberSEVEN1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 41000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSEVEN1_4);

                        function movingLightNumberSEVEN1_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,120,0,-1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[4]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 47500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 250;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN1_5);

                        function movingLightNumberSEVEN1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 600;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,240,0,255,-1,movingLightColorFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightInsideNumber * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 53000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSEVEN1_6);

                        function movingLightNumberSEVEN1_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 53500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSEVEN1_7);

                        function movingLightNumberSEVEN1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 55000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSEVEN1_8);

                        function movingLightNumberSEVEN1_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            }

                            let movingLightRotateDeg = -360/20000*(nowTime[0]%20000);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 79000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberSEVEN1_9);

                        function movingLightNumberSEVEN1_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,0,1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,150,220,1);
                            } else {
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 79500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSEVEN1_10);

                        function movingLightNumberSEVEN1_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,120,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                                clearInterval(movingLightSetInterval[10]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 80500;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,22,100,55,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSEVEN1_11);

                        function movingLightNumberSEVEN1_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 40000;
                            let angleXYRadius = 90;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -65;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 2 * ( 1 - Math.trunc( ( i - 1 ) / 2 ) ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( ( (-1) ** Math.trunc( ( i - 1 ) / 2 ) ) * 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);
                    
                    movingLightSetTimeoutDelay[10] = 82000;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSEVEN1_12);

                        function movingLightNumberSEVEN1_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 108500;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,22,50,100);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSEVEN1_13);

                        function movingLightNumberSEVEN1_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            }

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightInsideNumber * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime >= movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,240,0,255,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 122000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSEVEN1_7);

                        function movingLightNumberSEVEN1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 122500;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[2] = setInterval(movingLightNumberSEVEN1_2);

                        function movingLightNumberSEVEN1_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {                        
                                let angleXY;

                                if ( i % 2 === 0 ) {
                                    let movingLightAngleRepeatTime = 60000;
                                    let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                                    let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTimeSplit / 2 ) % movingLightAngleRepeatTime;
                                    let maxAngleXY = [ -150 , 50 ];

                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit ) angleXY = maxAngleXY[0] + ( maxAngleXY[1] - maxAngleXY[0] ) / movingLightAngleRepeatTimeSplit * movingLightAngleJudgeTime;
                                    else angleXY = maxAngleXY[1] + ( maxAngleXY[0] - maxAngleXY[1] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit );

                                    if ( i === 1 ) angleXY *= -1;
                                } else {
                                    let movingLightAngleRepeatTime = 40000;
                                    let movingLightAngleJudgeTime = nowTime[1] % movingLightAngleRepeatTime;

                                    angleXY = ( (-1) ** Math.trunc( ( i - 1 ) / 2 ) ) * ( 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime + 30 );
                                }

                                movingLightAngleChange(1,i,angleXY,-60,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 136000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSEVEN2_14);

                        function movingLightNumberSEVEN2_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,180,255,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 142000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN1_5);

                        function movingLightNumberSEVEN1_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 600;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[1] + movingLightColorRepeatTime / movingLightInsideNumber * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 147000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[3] = setInterval(movingLightNumberSEVEN1_3);

                        function movingLightNumberSEVEN1_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[3]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 147500;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSEVEN1_7);

                        function movingLightNumberSEVEN1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 155500;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,20,50,100);

                        let movingLightAngleFadeTime = 1000;
                        
                        movingLightSetInterval[15] = setInterval(movingLightNumberSEVEN2_15);

                        function movingLightNumberSEVEN2_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i ++ ) movingLightAngleChange(1,i,( (-1) ** Math.trunc( ( i - 1 ) / 2 ) ) * 5,-50,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i ++ ) movingLightAngleChange(2,i,0,120,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 175500;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[16] = setInterval(movingLightNumberSEVEN1_16);

                        function movingLightNumberSEVEN1_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,150,220,1);
                            }

                            let movingLightRotateDeg = -360/20000*(nowTime[0]%20000);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 176000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 3000;

                        movingLightSetInterval[17] = setInterval(movingLightNumberSEVEN1_17);

                        function movingLightNumberSEVEN1_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,60,movingLightColorFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 179000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,22,100,55,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSEVEN1_11);

                        function movingLightNumberSEVEN1_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 40000;
                            let angleXYRadius = 90;
                            let angleXYCenter = 0;
                            let angleZRadius = 15;
                            let angleZCenter = -65;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleRepeatTime / 2 * ( 1 - Math.trunc( ( i - 1 ) / 2 ) ) ) % movingLightAngleRepeatTime;

                                let movingLightAngleRad = ( ( (-1) ** Math.trunc( ( i - 1 ) / 2 ) ) * 360 / movingLightAngleRepeatTime * movingLightAngleJudgeTime ) % 360 / 180 * Math.PI;
                                
                                let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                                            
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[21]);
                    
                    movingLightSetTimeoutDelay[22] = 180000;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSEVEN1_12);

                        function movingLightNumberSEVEN1_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,0,0,1,movingLightColorFadeTime,nowTime[0],1);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 206500;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[7] = setInterval(movingLightNumberSEVEN1_7);

                        function movingLightNumberSEVEN1_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0);
                            } else {
                                clearInterval(movingLightSetInterval[7]);
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 209000;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSEVEN1_12);

                        function movingLightNumberSEVEN1_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 210000;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSEVEN1_13);

                        function movingLightNumberSEVEN1_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[13]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[25]);

                } else if ( key === 'h' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン BU *****/
                    waterCurtain("A");
                    waterCurtainActualSetTimeout[1] = setTimeout( function() {
                        waterCurtain("K",0);
                    },6000);
                    waterCurtainActualSetTimeout[2] = setTimeout( function() {
                        waterCurtain("BI",0);
                    },18000);
                    waterCurtainActualSetTimeout[3] = setTimeout( function() {
                        waterCurtain("A",0);
                    },28000);
                    waterCurtainActualSetTimeout[4] = setTimeout( function() {
                        waterCurtain("BN",0);
                    },29500);
                    waterCurtainActualSetTimeout[5] = setTimeout( function() {
                        waterCurtain("A",0);
                    },49500);
                    waterCurtainActualSetTimeout[6] = setTimeout( function() {
                        waterCurtain("AJ",0);
                    },52000);
                    waterCurtainActualSetTimeout[7] = setTimeout( function() {
                        waterCurtain("AF",0);
                    },75000);
                    waterCurtainActualSetTimeout[8] = setTimeout( function() {
                        waterCurtain("M",0);
                    },86000);
                    waterCurtainActualSetTimeout[9] = setTimeout( function() {
                        waterCurtain("BR",0);
                    },98000);
                    waterCurtainActualSetTimeout[10] = setTimeout( function() {
                        waterCurtain("BP",0);
                    },109000);
                    waterCurtainActualSetTimeout[11] = setTimeout( function() {
                        waterCurtain("A",0);
                    },119000);
                    waterCurtainActualSetTimeout[12] = setTimeout( function() {
                        waterCurtain("I",0);
                    },121000);
                    waterCurtainActualSetTimeout[13] = setTimeout( function() {
                        waterCurtain("AP",0);
                    },132000);
                    waterCurtainActualSetTimeout[14] = setTimeout( function() {
                        waterCurtain("A",0);
                    },137500);
                    waterCurtainActualSetTimeout[15] = setTimeout( function() {
                        waterCurtain("AU",0);
                    },154500);
                    waterCurtainActualSetTimeout[16] = setTimeout( function() {
                        waterCurtain("A",0);
                    },165000);
                    waterCurtainActualSetTimeout[17] = setTimeout( function() {
                        waterCurtain("BB",0);
                    },166500);
                    waterCurtainActualSetTimeout[18] = setTimeout( function() {
                        waterCurtain("AR",0);
                    },177000);
                    waterCurtainActualSetTimeout[19] = setTimeout( function() {
                        waterCurtain("A",0);
                    },188000);

                    /***** LED SEVEN3 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN3_1);
                        
                        function ledNumberSEVEN3_1() {
                            let ledFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 5300;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSEVEN3_2);
                        
                        function ledNumberSEVEN3_2() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 300;
                            let ledArray = [ 0 , 1 , 3 , 5 , 2 , 4 ];//631425
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ 255 , 255 , 255 ] ];
                            let ledRepeatTimeSplit = ledRepeatTime / 6;

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[0] + ledRepeatTimeSplit * ledArray[ Math.trunc( ( i - 1 ) / 3 ) % 6 ] ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                                
                            }

                            ledArray = [ 0 , 1 , 5 , 3 , 7 , 4 , 6 , 2 ];//84263517
                            ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 0 , 0 ] ];
                            ledRepeatTimeSplit = ledRepeatTime / 8;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[0] + ledRepeatTimeSplit * ledArray[ Math.trunc( ( i - 1 ) / 6 ) ] ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                                
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 6300;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN3_3);
                        
                        function ledNumberSEVEN3_3() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime/*,0,ledSetInterval[3]*/);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime/*,0,ledSetInterval[3]*/);
        
                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 7000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSEVEN3_4);
                        
                        function ledNumberSEVEN3_4() {
                            let ledFadeTime = 100;
                            let ledRepeatTime = 300;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 50;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 200 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                            ledRepeatTimeSplit = ledRepeatTime / 3;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                            break;
                                        }
                                    }
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 18000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberSEVEN3_5);
                        
                        function ledNumberSEVEN3_5() {
                            let ledFadeTime = 100;
                            let ledRepeatTime = 300;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 50;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 150 , 0 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                            ledRepeatTimeSplit = ledRepeatTime / 3;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                            break;
                                        }
                                    }
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[5]);

                    ledSetTimeoutDelay[6] = 28000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberSEVEN3_6);
                        
                        function ledNumberSEVEN3_6() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,150,0,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,150,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 29500;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberSEVEN3_7);
                        
                        function ledNumberSEVEN3_7() {
                            let ledFadeTime = 100;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,220,255,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,220,255,nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 40500;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberSEVEN3_8);
                        
                        function ledNumberSEVEN3_8() {
                            let ledFadeTime = 1000;
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime / 24;
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ 0 , 120 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,50,50,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = []; 
                                let j;
                                
                                if ( i <= 24 ) j = 24 - i;
                                else j = i - 25;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 2 ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 49500;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberSEVEN3_9);
                        
                        function ledNumberSEVEN3_9() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,80,0,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,80,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 52000;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[10] = setInterval(ledNumberSEVEN3_10);
                        
                        function ledNumberSEVEN3_10() {
                            let ledFadeTime = 800;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 3;
                            let ledLapTimeSplit = ledRepeatTime / 10;
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ 240 , 220 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[10],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = []; 
                                let j;
                                
                                if ( i <= 10 ) j = i - 1;
                                else j = 20 - i;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 1.5 ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledLapTimeSplit = ledRepeatTime / 24;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = []; 
                                let j;
                                
                                if ( i <= 24 ) j = i - 1;
                                else j = 48 - i;

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j + ledRepeatTimeSplit * 1.5 ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * 2 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[10]);

                    ledSetTimeoutDelay[11] = 63500;
                    ledSetTimeout[11] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[11] = setInterval(ledNumberSEVEN3_11);
                        
                        function ledNumberSEVEN3_11() {
                            let ledFadeTime = 500;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ 220 , 240 , 255 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[11],ledFadeTime,ledUseNumber,ledSetInterval[11],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = []; 

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( ledNumberInside - i ) + ledRepeatTimeSplit * 1.5 ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( 6 * l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 6 * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit / 5 * ( ledJudgeTime - ledRepeatTimeSplit * ( 6 * l + 1 ) ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 8 ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( 6 * l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * 6 * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit / 5 * ( ledJudgeTime - ledRepeatTimeSplit * ( 6 * l + 1 ) ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[11]);

                    ledSetTimeoutDelay[12] = 69500;
                    ledSetTimeout[12] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN3_1);
                        
                        function ledNumberSEVEN3_1() {
                            let ledFadeTime = 100;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[12],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[12]);

                    ledSetTimeoutDelay[13] = 75500;
                    ledSetTimeout[13] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[12] = setInterval(ledNumberSEVEN3_12);
                        
                        function ledNumberSEVEN3_12() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[13],ledFadeTime,ledUseNumber,ledSetInterval[12],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 400;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 255 , 0 ] , [ 240 , 120 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[13]);

                    ledSetTimeoutDelay[14] = 96000;
                    ledSetTimeout[14] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[13] = setInterval(ledNumberSEVEN3_13);
                        
                        function ledNumberSEVEN3_13() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[14],ledFadeTime,ledUseNumber,ledSetInterval[13],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,220,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[13]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[13]);
                        
                        }
                        
                    },ledSetTimeoutDelay[14]);

                    ledSetTimeoutDelay[15] = 98000;
                    ledSetTimeout[15] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSEVEN3_4);
                        
                        function ledNumberSEVEN3_4() {
                            let ledFadeTime = 100;
                            let ledRepeatTime = 300;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 50;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 200 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[15],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                            ledRepeatTimeSplit = ledRepeatTime / 3;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                            break;
                                        }
                                    }
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[15]);

                    ledSetTimeoutDelay[16] = 109000;
                    ledSetTimeout[16] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberSEVEN3_5);
                        
                        function ledNumberSEVEN3_5() {
                            let ledFadeTime = 100;
                            let ledRepeatTime = 300;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 50;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 150 , 0 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[16],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                            ledRepeatTimeSplit = ledRepeatTime / 3;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                            break;
                                        }
                                    }
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[16]);

                    ledSetTimeoutDelay[17] = 119600;
                    ledSetTimeout[17] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN3_3);
                        
                        function ledNumberSEVEN3_3() {
                            let ledFadeTime = 700;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[17],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[3]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[3]);
        
                        }
                        
                    },ledSetTimeoutDelay[17]);

                    ledSetTimeoutDelay[18] = 121000;
                    ledSetTimeout[18] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[14] = setInterval(ledNumberSEVEN3_14);
                        
                        function ledNumberSEVEN3_14() {
                            let ledFadeTime = 200;
                            let ledRepeatTime = 5000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 500;
                            let ledBasicColor = [ [ 0 , 120 , 255 ] , [ 255 , 0 , 120 ] ];
                            let ledLapTimeSplit = 140;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[18],ledFadeTime,ledUseNumber,ledSetInterval[14],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                            ledLapTimeSplit = 55;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                        
                    },ledSetTimeoutDelay[18]);

                    ledSetTimeoutDelay[19] = 132000;
                    ledSetTimeout[19] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[15] = setInterval(ledNumberSEVEN3_15);
                        
                        function ledNumberSEVEN3_15() {
                            let ledFadeTime = 300;
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 0 , 0 , 0 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[19],ledFadeTime,ledUseNumber,ledSetInterval[15],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = []; 

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( ledNumberInside - i ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 7 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit / 3 * ( ledJudgeTime - ledRepeatTimeSplit * 4 ) ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 9 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] ;                                
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit / 3 * ( ledJudgeTime - ledRepeatTimeSplit * 9 ) ;
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];

                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( ledNumberOutside - i ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 4 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] ;                                
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 7 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit / 3 * ( ledJudgeTime - ledRepeatTimeSplit * 4 ) ;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 9 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] ;                                
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][k] ) / ledRepeatTimeSplit / 3 * ( ledJudgeTime - ledRepeatTimeSplit * 9 ) ;
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[19]);

                    ledSetTimeoutDelay[20] = 138000;
                    ledSetTimeout[20] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN3_1);
                        
                        function ledNumberSEVEN3_1() {
                            let ledFadeTime = 100;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[20],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[20]);

                    ledSetTimeoutDelay[21] = 152000;
                    ledSetTimeout[21] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN3_3);
                        
                        function ledNumberSEVEN3_3() {
                            let ledFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[21],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[3]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[3]);
        
                        }
                        
                    },ledSetTimeoutDelay[21]);

                    ledSetTimeoutDelay[22] = 155000;
                    ledSetTimeout[22] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[16] = setInterval(ledNumberSEVEN3_16);
                        
                        function ledNumberSEVEN3_16() {
                            let ledFadeTime = 100;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[22],ledFadeTime,ledUseNumber,ledSetInterval[16],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 400;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 0 , 255 , 0 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[22]);

                    ledSetTimeoutDelay[23] = 165000;
                    ledSetTimeout[23] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[17] = setInterval(ledNumberSEVEN3_17);
                        
                        function ledNumberSEVEN3_17() {
                            let ledFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[23],ledFadeTime,ledUseNumber,ledSetInterval[17],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 255 , 80 , 150 ] , [ 0 , 80 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];

                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledNumberInside * ( i - 1 );

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];

                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledNumberOutside * ( i - 1 );

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[23]);

                    ledSetTimeoutDelay[24] = 167000;
                    ledSetTimeout[24] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSEVEN3_4);
                        
                        function ledNumberSEVEN3_4() {
                            let ledFadeTime = 100;
                            let ledRepeatTime = 300;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 50;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 0 , 200 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[24],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                            ledRepeatTimeSplit = ledRepeatTime / 3;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                            break;
                                        }
                                    }
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[24]);

                    ledSetTimeoutDelay[25] = 178000;
                    ledSetTimeout[25] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberSEVEN3_5);
                        
                        function ledNumberSEVEN3_5() {
                            let ledFadeTime = 100;
                            let ledRepeatTime = 300;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledChangeTime = 50;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 255 , 150 , 0 ] ];
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[25],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                            ledRepeatTimeSplit = ledRepeatTime / 3;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit * Math.trunc( ( i - 1 ) / 3 ) ) % ledRepeatTime;

                                if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                    for ( var l = 0 ; l < 2 ; l++ ) {
                                        if ( ledJudgeTime < ledRepeatTimeSplit * l + ledChangeTime ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                            break;
                                        } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[ ( l + 1 ) % 2 ][k];
                                            break;
                                        }
                                    }
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[25]);

                    ledSetTimeoutDelay[26] = 188000;
                    ledSetTimeout[26] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[13] = setInterval(ledNumberSEVEN3_13);
                        
                        function ledNumberSEVEN3_13() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[26],ledFadeTime,ledUseNumber,ledSetInterval[13],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,220,0,255,nowTime[0],ledFadeTime,0,ledSetInterval[13]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[13]);
                        
                        }
                        
                    },ledSetTimeoutDelay[26]);

                    ledSetTimeoutDelay[27] = 189500;
                    ledSetTimeout[27] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[18] = setInterval(ledNumberSEVEN3_18);
                        
                        function ledNumberSEVEN3_18() {
                            let ledFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[27],ledFadeTime,ledUseNumber,ledSetInterval[18],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[18]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];

                                if ( ( i - 1 ) % 16 < 8 ) ledColor = [ 255 , 80 , 150 ];
                                else ledColor = [ 0 , 80 , 255 ];

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[18]);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[27]);

                    ledSetTimeoutDelay[28] = 191000;
                    ledSetTimeout[28] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN3_1);
                        
                        function ledNumberSEVEN3_1() {
                            let ledFadeTime = 1800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[28],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[28]);

                    /***** 水中照明 SEVEN3 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetTimeoutDelay = [];
                    let waterLightSetInterval = [];

                    waterLightSetTimeoutDelay[1] = 1000;
                    waterLightSetTimeout[1] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSEVEN3_1);

                        function waterLightNumberSEVEN3_1() {
                            let waterLightFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[1],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[1]);

                    waterLightSetTimeoutDelay[2] = 5300;
                    waterLightSetTimeout[2] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSEVEN3_2);

                        function waterLightNumberSEVEN3_2() {
                            let waterLightFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[2],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 1800;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 1.5  ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[2]);

                    waterLightSetTimeoutDelay[3] = 6300;
                    waterLightSetTimeout[3] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN3_3);

                        function waterLightNumberSEVEN3_3() {
                            let waterLightFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[3],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,255,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[3]);

                    waterLightSetTimeoutDelay[4] = 7000;
                    waterLightSetTimeout[4] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN3_4);

                        function waterLightNumberSEVEN3_4() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[4],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 1800;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 255 , 255 ] , [] ];
                            let waterLightBasicColorMask = [ [ 255 , 0 , 200 ] , [ 255 , 150 , 0 ] ];
                            let waterLightColorChangeBeforeTime = 11000;
                            let waterLightColorChangeTime = 500;

                            if ( nowTime[0] < waterLightColorChangeBeforeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k];
                            } else if ( nowTime[0] < waterLightColorChangeBeforeTime + waterLightColorChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k] + ( waterLightBasicColorMask[1][k] - waterLightBasicColorMask[0][k] ) / waterLightColorChangeTime * ( nowTime[0] - waterLightColorChangeBeforeTime ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[1][k];
                            }

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
                        
                    },waterLightSetTimeoutDelay[4]);

                    waterLightSetTimeoutDelay[5] = 28000;
                    waterLightSetTimeout[5] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[5] = setInterval(waterLightNumberSEVEN3_5);

                        function waterLightNumberSEVEN3_5() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[5],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[5],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,150,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[5]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[5]);

                    waterLightSetTimeoutDelay[6] = 29500;
                    waterLightSetTimeout[6] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[6] = setInterval(waterLightNumberSEVEN3_6);

                        function waterLightNumberSEVEN3_6() {
                            let waterLightFadeTime = 200;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[6],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[6],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[6]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[6]);

                    waterLightSetTimeoutDelay[7] = 40500;
                    waterLightSetTimeout[7] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[7] = setInterval(waterLightNumberSEVEN3_7);

                        function waterLightNumberSEVEN3_7() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[7],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[7],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,0,150,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[7]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[7]);

                    waterLightSetTimeoutDelay[8] = 49500;
                    waterLightSetTimeout[8] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSEVEN3_1);

                        function waterLightNumberSEVEN3_1() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[8],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[8]);

                    waterLightSetTimeoutDelay[9] = 52000;
                    waterLightSetTimeout[9] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[8] = setInterval(waterLightNumberSEVEN3_8);

                        function waterLightNumberSEVEN3_8() {
                            let waterLightFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[9],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[8],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 1800;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [] , [ 0 , 0 , 0 ] ];
                            let waterLightBasicColorMask = [ [ 220 , 150 , 255 ] , [ 0 , 150 , 255 ] ];
                            let waterLightColorChangeBeforeTime = 11500;
                            let waterLightColorChangeTime = 500;

                            if ( nowTime[0] < waterLightColorChangeBeforeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[0][k] = waterLightBasicColorMask[0][k];
                            } else if ( nowTime[0] < waterLightColorChangeBeforeTime + waterLightColorChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[0][k] = waterLightBasicColorMask[0][k] + ( waterLightBasicColorMask[1][k] - waterLightBasicColorMask[0][k] ) / waterLightColorChangeTime * ( nowTime[0] - waterLightColorChangeBeforeTime ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[0][k] = waterLightBasicColorMask[1][k];
                            }

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 1.5  ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[9]);

                    waterLightSetTimeoutDelay[10] = 69500;
                    waterLightSetTimeout[10] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSEVEN3_1);

                        function waterLightNumberSEVEN3_1() {
                            let waterLightFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[10],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[10]);

                    waterLightSetTimeoutDelay[11] = 75500;
                    waterLightSetTimeout[11] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[9] = setInterval(waterLightNumberSEVEN3_9);

                        function waterLightNumberSEVEN3_9() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[11],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[9],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 3500;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 0 , 220 ] , [ 255 , 255 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( 2 * l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * 2 * l );
                                        break;
                                    } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 2 * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[ ( l + 1 ) % 2 ][k]
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[11]);

                    waterLightSetTimeoutDelay[12] = 96000;
                    waterLightSetTimeout[12] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[10] = setInterval(waterLightNumberSEVEN3_10);

                        function waterLightNumberSEVEN3_10() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[12],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[10],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,220,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[6]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[12]);

                    waterLightSetTimeoutDelay[13] = 98000;
                    waterLightSetTimeout[13] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN3_4);

                        function waterLightNumberSEVEN3_4() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[13],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 1800;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 255 , 255 ] , [] ];
                            let waterLightBasicColorMask = [ [ 255 , 0 , 200 ] , [ 255 , 150 , 0 ] ];
                            let waterLightColorChangeBeforeTime = 11000;
                            let waterLightColorChangeTime = 500;

                            if ( nowTime[0] < waterLightColorChangeBeforeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k];
                            } else if ( nowTime[0] < waterLightColorChangeBeforeTime + waterLightColorChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k] + ( waterLightBasicColorMask[1][k] - waterLightBasicColorMask[0][k] ) / waterLightColorChangeTime * ( nowTime[0] - waterLightColorChangeBeforeTime ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[1][k];
                            }

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
                        
                    },waterLightSetTimeoutDelay[13]);

                    waterLightSetTimeoutDelay[14] = 119600;
                    waterLightSetTimeout[14] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN3_3);

                        function waterLightNumberSEVEN3_3() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[14],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,255,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                        
                    },waterLightSetTimeoutDelay[14]);

                    waterLightSetTimeoutDelay[15] = 121000;
                    waterLightSetTimeout[15] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[11] = setInterval(waterLightNumberSEVEN3_11);

                        function waterLightNumberSEVEN3_11() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[15],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[11],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 6300;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightColorChangeTime = 800;
                            let waterLightLapTimeSplit = 550;
                            let waterLightBasicColor = [ [ 0 , 100 , 255 ] , [ 255 , 0 , 120 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * l + waterLightColorChangeTime ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightColorChangeTime * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[ ( l + 1 ) % 2 ][k];
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[15]);

                    waterLightSetTimeoutDelay[16] = 132000;
                    waterLightSetTimeout[16] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[12] = setInterval(waterLightNumberSEVEN3_12);

                        function waterLightNumberSEVEN3_12() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[16],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[12],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 3000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 0 , 255 , 150 ] , [ 0 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( waterLightNumber - i ) + waterLightRepeatTimeSplit * 2 ) % waterLightRepeatTime;

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
                        
                    },waterLightSetTimeoutDelay[16]);

                    waterLightSetTimeoutDelay[17] = 138000;
                    waterLightSetTimeout[17] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSEVEN3_1);

                        function waterLightNumberSEVEN3_1() {
                            let waterLightFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[17],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[17]);

                    waterLightSetTimeoutDelay[18] = 143000;
                    waterLightSetTimeout[18] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[13] = setInterval(waterLightNumberSEVEN3_13);

                        function waterLightNumberSEVEN3_13() {
                            let waterLightFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[18],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[13],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[13]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[18]);

                    waterLightSetTimeoutDelay[19] = 153000;
                    waterLightSetTimeout[19] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN3_3);

                        function waterLightNumberSEVEN3_3() {
                            let waterLightFadeTime = 1500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[19],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,255,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[19]);

                    waterLightSetTimeoutDelay[20] = 155000;
                    waterLightSetTimeout[20] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[14] = setInterval(waterLightNumberSEVEN3_14);

                        function waterLightNumberSEVEN3_14() {
                            let waterLightFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[20],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[14],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 3200;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 0 , 180 , 255 ] , [ 255 , 80 , 80 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 2 ) % waterLightRepeatTime;

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
                        
                    },waterLightSetTimeoutDelay[20]);

                    waterLightSetTimeoutDelay[21] = 165000;
                    waterLightSetTimeout[21] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[15] = setInterval(waterLightNumberSEVEN3_15);

                        function waterLightNumberSEVEN3_15() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[21],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[15],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,180,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[6]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[21]);

                    waterLightSetTimeoutDelay[22] = 167000;
                    waterLightSetTimeout[22] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN3_4);

                        function waterLightNumberSEVEN3_4() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[22],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 1800;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 255 , 255 ] , [] ];
                            let waterLightBasicColorMask = [ [ 255 , 0 , 200 ] , [ 255 , 150 , 0 ] ];
                            let waterLightColorChangeBeforeTime = 11000;
                            let waterLightColorChangeTime = 500;

                            if ( nowTime[0] < waterLightColorChangeBeforeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k];
                            } else if ( nowTime[0] < waterLightColorChangeBeforeTime + waterLightColorChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[0][k] + ( waterLightBasicColorMask[1][k] - waterLightBasicColorMask[0][k] ) / waterLightColorChangeTime * ( nowTime[0] - waterLightColorChangeBeforeTime ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) waterLightBasicColor[1][k] = waterLightBasicColorMask[1][k];
                            }

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
                        
                    },waterLightSetTimeoutDelay[22]);

                    waterLightSetTimeoutDelay[23] = 188000;
                    waterLightSetTimeout[23] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSEVEN3_1);

                        function waterLightNumberSEVEN3_1() {
                            let waterLightFadeTime = 1300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[23],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[23]);

                    waterLightSetTimeoutDelay[24] = 189500;
                    waterLightSetTimeout[24] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[16] = setInterval(waterLightNumberSEVEN3_16);

                        function waterLightNumberSEVEN3_16() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[24],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[16],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                if ( i % 2 ) waterLightColor = [ 0 , 50 , 255 ];
                                else waterLightColor = [ 120 , 0 , 255 ];

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime,0,waterLightSetInterval[16]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[24]);

                    waterLightSetTimeoutDelay[25] = 191000;
                    waterLightSetTimeout[25] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[17] = setInterval(waterLightNumberSEVEN3_17);

                        function waterLightNumberSEVEN3_17() {
                            let waterLightFadeTime = 1800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[25],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[17],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,80,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[13]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[25]);

                    /***** ムービングライト SEVEN2 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 500;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberSEVEN2_1);

                        function movingLightNumberSEVEN2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],7000,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = -70;
                            let angleXYRadius = 60;
                            let angleZRadius = 30;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 4 * ( 1 + i % 2 * 2 ) ) ) / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 1000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[2] = setInterval(movingLightNumberSEVEN2_2);

                        function movingLightNumberSEVEN2_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 700;
                            let movingLightColorDisplayTime = 70;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let movingLightColorOpacity = 0;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * j ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorDisplayTime ) {
                                        movingLightColorOpacity = 1;
                                        break;
                                    } else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                                
                            }                        
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 6300;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 700;

                        movingLightSetInterval[3] = setInterval(movingLightNumberSEVEN2_3);

                        function movingLightNumberSEVEN2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let maxAngleZ = [ 70 , 120 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightAngleChange(2,i,5,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            

                            if ( nowTime[0] <= 100 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 7000;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[4] = setInterval(movingLightNumberSEVEN2_4);

                        function movingLightNumberSEVEN2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = 250;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN2_5);

                        function movingLightNumberSEVEN2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = 250;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[0] + 250 ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,150,200,255,movingLightColorOpacity);
                            }
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 18000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,13,40,100);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSEVEN2_6);

                        function movingLightNumberSEVEN2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,150,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            }

                            let movingLightRotateDeg = 360/800*(nowTime[0]%800);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 28000;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSEVEN2_7);

                        function movingLightNumberSEVEN2_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);

                                movingLightAngleChange(1,1,0,-80,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-80,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-80,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-45,-80,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                                clearInterval(movingLightSetInterval[7]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 29500;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,80,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSEVEN2_8);

                        function movingLightNumberSEVEN2_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,180,255,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightRotateDeg = 360/7500*(nowTime[0]%7500);

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 49500;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 300;

                        movingLightSetInterval[9] = setInterval(movingLightNumberSEVEN2_9);

                        function movingLightNumberSEVEN2_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[8]);
                                clearInterval(movingLightSetInterval[9]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 69500;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);

                        movingLightSetInterval[10] = setInterval(movingLightNumberSEVEN2_10);

                        function movingLightNumberSEVEN2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1200;
                            let movingLightColorDisplayTime = 500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorDisplayTime ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                                
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 73500;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        movingLightSetInterval[11] = setInterval(movingLightNumberSEVEN2_11);

                        function movingLightNumberSEVEN2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= 500 ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,0,0);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[9]);
                    
                    movingLightSetTimeoutDelay[10] = 75500;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        movingLightSetInterval[12] = setInterval(movingLightNumberSEVEN2_12);

                        function movingLightNumberSEVEN2_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime * 2 / movingLightInsideNumber;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,255,255,255,movingLightColorOpacity);
                            }

                            movingLightColorRepeatTimeSplit = movingLightColorRepeatTime * 2 / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ){
                                let j;
                                let movingLightColorOpacity = 0;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 86000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[12]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSEVEN2_13);

                        function movingLightNumberSEVEN2_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightRepeatTime = 2500;
                            let movingLightRepeatTimeSplit = movingLightRepeatTime / 2;
                            let movingLightColorChangeTime = 100;

                            let movingLightLapTimeSplit = movingLightRepeatTime / movingLightInsideNumber;
                            let angleXY = [ -160 , 180 , -160 , -140 ];
                            let maxAngleZ = [ -40 , -100 ];

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity;
                                let angleZ;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightLapTimeSplit * ( i - 1 ) ) % movingLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightRepeatTimeSplit * ( movingLightJudgeTime - movingLightRepeatTimeSplit * l );

                                        if ( movingLightJudgeTime < movingLightRepeatTimeSplit * l + movingLightColorChangeTime ) movingLightColorOpacity = l + ( (-1) ** l ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightRepeatTimeSplit * l );
                                        else movingLightColorOpacity = 1 - l;

                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,255,255,255,movingLightColorOpacity);
                                movingLightAngleChange(1,i,angleXY[i-1],angleZ);
                            }

                            movingLightLapTimeSplit = movingLightRepeatTime / movingLightOutsideNumber;
                            angleXY = [ 5 , 5 , 5 , -5 , 5 ];
                            maxAngleZ = [ 40 , 120 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ){
                                let movingLightColorOpacity;
                                let j;
                                let angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightLapTimeSplit * j ) % movingLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightRepeatTimeSplit * ( movingLightJudgeTime - movingLightRepeatTimeSplit * l );

                                        if ( movingLightJudgeTime < movingLightRepeatTimeSplit * l + movingLightColorChangeTime ) movingLightColorOpacity = l + ( (-1) ** l ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightRepeatTimeSplit * l );
                                        else movingLightColorOpacity = 1 - l;

                                        break;
                                    }
                                }

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                                movingLightAngleChange(2,i,angleXY[i-1],angleZ);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 96000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1000;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSEVEN3_14);

                        function movingLightNumberSEVEN3_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                    movingLightAngleChange(2,i,0,110,movingLightColorFadeTime,nowTime[0]);
                                }

                                movingLightAngleChange(1,1,0,-80,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,2,45,-80,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,3,45,-80,movingLightColorFadeTime,nowTime[0]);
                                movingLightAngleChange(1,4,-45,-80,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[14]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 98000;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 700;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSEVEN2_1);

                        function movingLightNumberSEVEN2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = -70;
                            let angleXYRadius = 60;
                            let angleZRadius = 30;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 4 * ( 1 + i % 2 * 2 ) ) ) / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,-1,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberSEVEN2_3);

                        function movingLightNumberSEVEN2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let maxAngleZ = [ 70 , 120 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightAngleChange(2,i,5,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                        movingLightSetInterval[4] = setInterval(movingLightNumberSEVEN2_4);

                        function movingLightNumberSEVEN2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = 250;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN2_5);

                        function movingLightNumberSEVEN2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = 250;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[0] + 250 ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,150,200,255,movingLightColorOpacity);
                            }
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 109000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,13,40,100);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSEVEN2_6);

                        function movingLightNumberSEVEN2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,150,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            }

                            let movingLightRotateDeg = 360/800*(nowTime[0]%800);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 119000;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSEVEN2_15);

                        function movingLightNumberSEVEN2_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 120000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,3,80,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);

                        let movingLightAngleFadeTime = 1000;

                        movingLightSetInterval[16] = setInterval(movingLightNumberSEVEN2_16);

                        function movingLightNumberSEVEN2_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    if ( i === 3 ) movingLightAngleChange(1,i,-60,-90,movingLightAngleFadeTime,nowTime[0]);
                                    else movingLightAngleChange(1,i,-100,-90,movingLightAngleFadeTime,nowTime[0]);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,110,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[16]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 138000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[10] = setInterval(movingLightNumberSEVEN2_10);

                        function movingLightNumberSEVEN2_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1200;
                            let movingLightColorDisplayTime = 500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 5;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorDisplayTime ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                                
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 142000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[10]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[17] = setInterval(movingLightNumberSEVEN2_17);

                        function movingLightNumberSEVEN2_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,( (-1) ** Math.trunc( i / 4 ) ) * -5,90,movingLightAngleFadeTime,nowTime[0]);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[17]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 143000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,3,80,50,100);

                        let movingLightColorFadeTime = 1500;

                        movingLightSetInterval[18] = setInterval(movingLightNumberSEVEN2_18);

                        function movingLightNumberSEVEN2_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],0,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0],1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1,movingLightColorFadeTime,nowTime[0],1);
                            }

                            let movingLightRotateDeg = -360/45000*nowTime[0]+60;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 152000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 2000;

                        movingLightSetInterval[19] = setInterval(movingLightNumberSEVEN2_19);

                        function movingLightNumberSEVEN2_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[19]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 154000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTriplePictureChange(1,i,0,100,50,100);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[20] = setInterval(movingLightNumberSEVEN2_20);

                        function movingLightNumberSEVEN2_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,60,-50,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                let movingLightRotateDeg = -360/500*(nowTime[1]%500);

                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightTripleRotateChange(1,i,movingLightRotateDeg);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[21]);
                    
                    movingLightSetTimeoutDelay[22] = 155000;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[18]);
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[21] = setInterval(movingLightNumberSEVEN2_21);

                        function movingLightNumberSEVEN2_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            let movingLightColorRepeatTime = 800;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 100;
                            let movingLightLapTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity;

                                let movingLightJudgeTime = ( nowTime[0] + movingLightLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * l + movingLightColorChangeTime ) {
                                        movingLightColorOpacity = l + ( (-1) ** l ) / movingLightColorChangeTime * ( movingLightJudgeTime - movingLightColorRepeatTimeSplit * l );
                                        break;
                                    } else if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit * ( l + 1 ) ) {
                                        movingLightColorOpacity = 1 - l;
                                        break;
                                    }
                                }

                                movingLightColorChange(1,i,255,255,100,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[22] = setInterval(movingLightNumberSEVEN2_22);

                        function movingLightNumberSEVEN2_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 3500;
                            let angleXYCenter = 0;
                            let angleZCenter = 60;
                            let angleXYRadius = 50;
                            let angleZRadius = 40;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 270 - 360 / movingLightAngleRepeatTime * nowTime[1] ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 3 ) movingLightColorChange(2,i,0,255,0,1);
                                    else movingLightColorChange(2,i,255,0,0,1);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 165000;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[21]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSEVEN2_15);

                        function movingLightNumberSEVEN2_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[20]);
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 165500;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[22]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[1] = setInterval(movingLightNumberSEVEN2_1);

                        function movingLightNumberSEVEN2_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 13500;
                            let angleXYCenter = 0;
                            let angleZCenter = -70;
                            let angleXYRadius = 60;
                            let angleZRadius = 30;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * ( nowTime[1] + movingLightAngleRepeatTime / 4 * ( 1 + i % 2 * 2 ) ) ) / 180 * Math.PI * -1;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                                
                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] < movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,0);
                            }
                            
                        }

                        movingLightSetInterval[3] = setInterval(movingLightNumberSEVEN2_3);

                        function movingLightNumberSEVEN2_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 2000;
                            let movingLightAngleRepeatTimeSplit = movingLightAngleRepeatTime / 2;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            let maxAngleZ = [ 70 , 120 ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;
                                let angleZ;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleJudgeTime = ( nowTime[1] + movingLightAngleLapTimeSplit * j ) % movingLightAngleRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( movingLightAngleJudgeTime < movingLightAngleRepeatTimeSplit * ( l + 1 ) ) {
                                        angleZ = maxAngleZ[l] + ( maxAngleZ[ ( l + 1 ) % 2 ] - maxAngleZ[l] ) / movingLightAngleRepeatTimeSplit * ( movingLightAngleJudgeTime - movingLightAngleRepeatTimeSplit * l );
                                        break;
                                    }
                                }

                                movingLightAngleChange(2,i,5,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 167000;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[4] = setInterval(movingLightNumberSEVEN2_4);

                        function movingLightNumberSEVEN2_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = 250;

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,-1,-1,-1,movingLightColorOpacity);
                            }
                            
                        }

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN2_5);

                        function movingLightNumberSEVEN2_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            let movingLightColorRepeatTime = 400;
                            let movingLightColorRepeatTimeSplit = 250;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ){
                                let movingLightColorOpacity = 0;

                                let movingLightJudgeTime = ( nowTime[0] + 250 ) % movingLightColorRepeatTime;

                                if ( movingLightJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,150,200,255,movingLightColorOpacity);
                            }
                        }

                    },movingLightSetTimeoutDelay[25]);

                    movingLightSetTimeoutDelay[26] = 178000;
                    movingLightSetTimeout[26] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[5]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,13,40,100);

                        let movingLightColorFadeTime = 200;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSEVEN2_6);

                        function movingLightNumberSEVEN2_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,150,0,-1,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,1);
                            }

                            let movingLightRotateDeg = 360/800*(nowTime[0]%800);

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[26]);

                    movingLightSetTimeoutDelay[27] = 188000;
                    movingLightSetTimeout[27] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[4]);
                        clearInterval(movingLightSetInterval[6]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 900;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSEVEN2_15);

                        function movingLightNumberSEVEN2_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[27],0,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[15]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[27]);

                    movingLightSetTimeoutDelay[28] = 189000;
                    movingLightSetTimeout[28] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,100,100);
                        
                        let movingLightAngleFadeTime = 400;

                        movingLightSetInterval[22] = setInterval(movingLightNumberSEVEN2_22);

                        function movingLightNumberSEVEN2_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[28],0,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,0,85,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[22]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[28]);

                    movingLightSetTimeoutDelay[29] = 189500;
                    movingLightSetTimeout[29] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);
                        
                        let movingLightColorFadeTime = 100;

                        movingLightSetInterval[23] = setInterval(movingLightNumberSEVEN2_23);

                        function movingLightNumberSEVEN2_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],0,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 3 ) movingLightColorChange(2,i,255,80,150,1,movingLightColorFadeTime,nowTime[0],1);
                                    else movingLightColorChange(2,i,0,80,255,1,movingLightColorFadeTime,nowTime[0],1);
                                }
                            } else {
                                clearInterval(movingLightSetInterval[23]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[29]);

                    movingLightSetTimeoutDelay[30] = 191000;
                    movingLightSetTimeout[30] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSEVEN2_11);

                        function movingLightNumberSEVEN2_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[11]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[30]);

                } else if ( key === 'i' ) {
                    let startTime = Date.now();

                    /***** ウォーターカーテン BV *****/
                    waterCurtain("A");
                    waterCurtainActualSetTimeout[1] = setTimeout( function() {
                        waterCurtain("AT",0);
                    },1500);
                    waterCurtainActualSetTimeout[2] = setTimeout( function() {
                        waterCurtain("A",0);
                    },9500);
                    waterCurtainActualSetTimeout[3] = setTimeout( function() {
                        waterCurtain("AS",0);
                    },17000);
                    waterCurtainActualSetTimeout[4] = setTimeout( function() {
                        waterCurtain("BF",0);
                    },33500);
                    waterCurtainActualSetTimeout[5] = setTimeout( function() {
                        waterCurtain("BK",0);
                    },58000);
                    waterCurtainActualSetTimeout[6] = setTimeout( function() {
                        waterCurtain("A",0);
                    },64000);
                    waterCurtainActualSetTimeout[7] = setTimeout( function() {
                        waterCurtain("F",0);
                    },66000);
                    waterCurtainActualSetTimeout[8] = setTimeout( function() {
                        waterCurtain("BL",0);
                    },82000);
                    waterCurtainActualSetTimeout[9] = setTimeout( function() {
                        waterCurtain("A",0);
                    },96500);
                    waterCurtainActualSetTimeout[10] = setTimeout( function() {
                        waterCurtain("AM",0);
                    },97500);
                    waterCurtainActualSetTimeout[11] = setTimeout( function() {
                        waterCurtain("AA",0);
                    },114000);
                    waterCurtainActualSetTimeout[12] = setTimeout( function() {
                        waterCurtain("A",0);
                    },128000);
                    waterCurtainActualSetTimeout[13] = setTimeout( function() {
                        waterCurtain("C",0);
                    },130000);
                    waterCurtainActualSetTimeout[14] = setTimeout( function() {
                        waterCurtain("AB",0);
                    },146000);
                    waterCurtainActualSetTimeout[15] = setTimeout( function() {
                        waterCurtain("A",0);
                    },160500);
                    waterCurtainActualSetTimeout[16] = setTimeout( function() {
                        waterCurtain("AQ",0);
                    },177500);
                    waterCurtainActualSetTimeout[17] = setTimeout( function() {
                        waterCurtain("G",0);
                    },194000);

                    /***** LED SEVEN4 *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[1] = 0;
                    ledSetTimeout[1] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN4_1);
                        
                        function ledNumberSEVEN4_1() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[1]);

                    ledSetTimeoutDelay[2] = 2000;
                    ledSetTimeout[2] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[2] = setInterval(ledNumberSEVEN4_2);
                        
                        function ledNumberSEVEN4_2() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 120 , 200 ] , [ 0 , 140 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ )ledColorChange(2,i,0,50,180,nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[2]);

                    ledSetTimeoutDelay[3] = 8500;
                    ledSetTimeout[3] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN4_3);
                        
                        function ledNumberSEVEN4_3() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[3]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[3]);
        
                        }
                        
                    },ledSetTimeoutDelay[3]);

                    ledSetTimeoutDelay[4] = 10000;
                    ledSetTimeout[4] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSEVEN4_4);
                        
                        function ledNumberSEVEN4_4() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[4],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTimeSplit = 1000;
                            let ledBasicColor = [ [ 50 , 150 , 255 ] , [ 255 , 100 , 200 ] ];
                            let ledColor = [];

                            if ( nowTime[0] < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * nowTime[0];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            }
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                            if ( nowTime[0] < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( nowTime[0] - ledRepeatTimeSplit );                            
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[4]);

                    ledSetTimeoutDelay[5] = 12000;
                    ledSetTimeout[5] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberSEVEN4_5);
                        
                        function ledNumberSEVEN4_5() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[5],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 700;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 150 , 200 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                    ledSetTimeoutDelay[6] = 14000;
                    ledSetTimeout[6] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[4] = setInterval(ledNumberSEVEN4_4);
                        
                        function ledNumberSEVEN4_4() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[6],ledFadeTime,ledUseNumber,ledSetInterval[4],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTimeSplit = 1000;
                            let ledBasicColor = [ [ 50 , 150 , 255 ] , [ 255 , 100 , 200 ] ];
                            let ledColor = [];

                            if ( nowTime[0] < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * nowTime[0];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            }
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                            if ( nowTime[0] < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][k];
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ( nowTime[0] - ledRepeatTimeSplit );                            
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        
                        }

                    },ledSetTimeoutDelay[6]);

                    ledSetTimeoutDelay[7] = 16000;
                    ledSetTimeout[7] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[6] = setInterval(ledNumberSEVEN4_6);
                        
                        function ledNumberSEVEN4_6() {
                            let ledFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[7],ledFadeTime,ledUseNumber,ledSetInterval[6],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,200,120,255,nowTime[0],ledFadeTime,0,ledSetInterval[6]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,200,120,255,nowTime[0],ledFadeTime,0,ledSetInterval[6]);
        
                        }
                        
                    },ledSetTimeoutDelay[7]);

                    ledSetTimeoutDelay[8] = 17000;
                    ledSetTimeout[8] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberSEVEN4_7);
                        
                        function ledNumberSEVEN4_7() {
                            let ledFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[8],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,180,80,nowTime[0],ledFadeTime,0,ledSetInterval[7]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,180,80,nowTime[0],ledFadeTime,0,ledSetInterval[7]);
                        
                        }
                        
                    },ledSetTimeoutDelay[8]);

                    ledSetTimeoutDelay[9] = 18000;
                    ledSetTimeout[9] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[8] = setInterval(ledNumberSEVEN4_8);
                        
                        function ledNumberSEVEN4_8() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[9],ledFadeTime,ledUseNumber,ledSetInterval[8],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 50 , 150 , 255 ] , [ 255 , 100 , 200 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,240,0,255,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let l = i % 2;
                                ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[9]);

                    ledSetTimeoutDelay[10] = 26000;
                    ledSetTimeout[10] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[5] = setInterval(ledNumberSEVEN4_5);
                        
                        function ledNumberSEVEN4_5() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[10],ledFadeTime,ledUseNumber,ledSetInterval[5],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 700;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 255 , 150 ] , [ 255 , 150 , 200 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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

                    ledSetTimeoutDelay[11] = 30000;
                    ledSetTimeout[11] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[9] = setInterval(ledNumberSEVEN4_9);
                        
                        function ledNumberSEVEN4_9() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[11],ledFadeTime,ledUseNumber,ledSetInterval[9],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 240 , 0 , 255 ] , [ 0 , 100 , 255 ] , [ 255 , 100 , 0 ] , [ 240 , 0 , 255 ] , [ 60 , 0 , 150 ] ];
                            let ledRepeatTimeSplit = [ 0 , 1000 , 2000 , 2500 , 3000 , 100000 ];

                            for ( var l = 0 ; l < ledRepeatTimeSplit.length ; l++ ) {
                                if ( nowTime[0] < ledRepeatTimeSplit[ l + 1 ] ) break;
                            }
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[11]);

                    ledSetTimeoutDelay[12] = 33500;
                    ledSetTimeout[12] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[10] = setInterval(ledNumberSEVEN4_10);
                        
                        function ledNumberSEVEN4_10() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[12],1000,ledUseNumber,ledSetInterval[10],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 150 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[12]);

                    ledSetTimeoutDelay[13] = 50000;
                    ledSetTimeout[13] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[11] = setInterval(ledNumberSEVEN4_11);
                        
                        function ledNumberSEVEN4_11() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[13],ledFadeTime,ledUseNumber,ledSetInterval[11],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 0 , 180 , 255 ] , [ 255 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = []; 
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledLapTimeSplit = ledRepeatTime / ledNumberOutside;
                            ledBasicColor = [ [ 0 , 150 , 255 ] , [ 0 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[13]);

                    ledSetTimeoutDelay[14] = 56000;
                    ledSetTimeout[14] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberSEVEN4_7);
                        
                        function ledNumberSEVEN4_7() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[14],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,180,80,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,180,80,nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[14]);

                    ledSetTimeoutDelay[15] = 58000;
                    ledSetTimeout[15] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[12] = setInterval(ledNumberSEVEN4_12);
                        
                        function ledNumberSEVEN4_12() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[15],ledFadeTime,ledUseNumber,ledSetInterval[12],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 0 , 150 ] , [ 255 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = []; 
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[15]);

                    ledSetTimeoutDelay[16] = 62000;
                    ledSetTimeout[16] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[13] = setInterval(ledNumberSEVEN4_13);
                        
                        function ledNumberSEVEN4_13() {
                            let ledFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[16],ledFadeTime,ledUseNumber,ledSetInterval[13],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[13]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[13]);
                        
                        }
                        
                    },ledSetTimeoutDelay[16]);

                    ledSetTimeoutDelay[17] = 64000;
                    ledSetTimeout[17] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[14] = setInterval(ledNumberSEVEN3_14);
                        
                        function ledNumberSEVEN3_14() {
                            let ledFadeTime = 600;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[17],ledFadeTime,ledUseNumber,ledSetInterval[14],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,100,255,nowTime[0],ledFadeTime,0,ledSetInterval[14]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,120,nowTime[0],ledFadeTime,0,ledSetInterval[14]);
                        
                        }
                        
                    },ledSetTimeoutDelay[17]);

                    ledSetTimeoutDelay[18] = 65000;
                    ledSetTimeout[18] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[15] = setInterval(ledNumberSEVEN4_15);
                        
                        function ledNumberSEVEN4_15() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[18],ledFadeTime,ledUseNumber,ledSetInterval[15],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 255 , 255 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let l = i % 2;
                                ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }

                            ledBasicColor = [ [ 180 , 240 , 255 ] , [ 0 , 220 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let l = i % 2;
                                ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[18]);

                    ledSetTimeoutDelay[19] = 66000;
                    ledSetTimeout[19] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[16] = setInterval(ledNumberSEVEN4_16);
                        
                        function ledNumberSEVEN4_16() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[19],ledFadeTime,ledUseNumber,ledSetInterval[16],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let ledLapTimeSplit = 590;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 9 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * ( 2 - l ) ) % ledRepeatTime;
        
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

                            ledLapTimeSplit = 490;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 3 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * ( 2 - l ) ) % ledRepeatTime;
        
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
                        
                    },ledSetTimeoutDelay[19]);

                    ledSetTimeoutDelay[20] = 90000;
                    ledSetTimeout[20] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[17] = setInterval(ledNumberSEVEN4_17);
                        
                        function ledNumberSEVEN4_17() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[20],ledFadeTime,ledUseNumber,ledSetInterval[17],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [ 0 , 0 , 0 ];
        
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTime / 7 * Math.trunc( ( i - 1 ) / 2 ) ) % ledRepeatTime;
        
                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 2 ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 1 ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [ 0 , 0 , 0 ];
        
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTime / 7 * Math.trunc( ( i - 1 ) / 2 ) ) % ledRepeatTime;
        
                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 2 ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 1 ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[20]);

                    ledSetTimeoutDelay[21] = 94600;
                    ledSetTimeout[21] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);                    
                    },ledSetTimeoutDelay[21]);

                    ledSetTimeoutDelay[22] = 98000;
                    ledSetTimeout[22] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[18] = setInterval(ledNumberSEVEN4_18);
                        
                        function ledNumberSEVEN4_18() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[22],ledFadeTime,ledUseNumber,ledSetInterval[18],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 0 , 255 , 180 ] , [ 255 , 255 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let l = i % 2;
                                ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime,0,ledSetInterval[18]);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let l = i % 2;
                                ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime,0,ledSetInterval[18]);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[22]);

                    ledSetTimeoutDelay[23] = 106000;
                    ledSetTimeout[23] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[19] = setInterval(ledNumberSEVEN4_19);
                        
                        function ledNumberSEVEN4_19() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[23],ledFadeTime,ledUseNumber,ledSetInterval[19],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledChangeTime = 700;
                            let ledBasicColor = [ [ 0 , 255 , 120 ] , [ 255 , 100 , 200 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];    
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 2 ) ) % ledRepeatTime;
        
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

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];    
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * Math.trunc( ( i - 1 ) / 2 ) ) % ledRepeatTime;
        
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
                        
                    },ledSetTimeoutDelay[23]);

                    ledSetTimeoutDelay[24] = 110000;
                    ledSetTimeout[24] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[20] = setInterval(ledNumberSEVEN3_20);
                        
                        function ledNumberSEVEN3_20() {
                            let ledFadeTime = 700;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[24],ledFadeTime,ledUseNumber,ledSetInterval[20],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,0,150,nowTime[0],ledFadeTime,0,ledSetInterval[20]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,150,nowTime[0],ledFadeTime,0,ledSetInterval[20]);
                        
                        }
                        
                    },ledSetTimeoutDelay[24]);

                    ledSetTimeoutDelay[25] = 112000;
                    ledSetTimeout[25] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[3] = setInterval(ledNumberSEVEN4_3);
                        
                        function ledNumberSEVEN4_3() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[25],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime);
        
                        }
                        
                    },ledSetTimeoutDelay[25]);

                    ledSetTimeoutDelay[26] = 114000;
                    ledSetTimeout[26] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[21] = setInterval(ledNumberSEVEN4_21);
                        
                        function ledNumberSEVEN4_21() {
                            let ledFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[26],ledFadeTime,ledUseNumber,ledSetInterval[21],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,120,255,nowTime[0],ledFadeTime,0,ledSetInterval[21]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,120,255,nowTime[0],ledFadeTime,0,ledSetInterval[21]);
        
                        }
                        
                    },ledSetTimeoutDelay[26]);

                    ledSetTimeoutDelay[27] = 120000;
                    ledSetTimeout[27] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[7] = setInterval(ledNumberSEVEN4_7);
                        
                        function ledNumberSEVEN4_7() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[27],ledFadeTime,ledUseNumber,ledSetInterval[7],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,180,80,nowTime[0],ledFadeTime);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,180,80,nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[27]);

                    ledSetTimeoutDelay[28] = 122000;
                    ledSetTimeout[28] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[12] = setInterval(ledNumberSEVEN4_12);
                        
                        function ledNumberSEVEN4_12() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[28],ledFadeTime,ledUseNumber,ledSetInterval[12],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / ledNumberInside;
                            let ledBasicColor = [ [ 255 , 0 , 150 ] , [ 255 , 255 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = []; 
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledLapTimeSplit = ledRepeatTime / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[28]);

                    ledSetTimeoutDelay[29] = 126000;
                    ledSetTimeout[29] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[13] = setInterval(ledNumberSEVEN4_13);
                        
                        function ledNumberSEVEN4_13() {
                            let ledFadeTime = 1200;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[29],ledFadeTime,ledUseNumber,ledSetInterval[13],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval[13]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[13]);
                        
                        }
                        
                    },ledSetTimeoutDelay[29]);

                    ledSetTimeoutDelay[30] = 128000;
                    ledSetTimeout[30] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[14] = setInterval(ledNumberSEVEN3_14);
                        
                        function ledNumberSEVEN3_14() {
                            let ledFadeTime = 600;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[30],ledFadeTime,ledUseNumber,ledSetInterval[14],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,100,255,nowTime[0],ledFadeTime,0,ledSetInterval[14]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,120,nowTime[0],ledFadeTime,0,ledSetInterval[14]);
                        
                        }
                        
                    },ledSetTimeoutDelay[30]);

                    ledSetTimeoutDelay[31] = 129000;
                    ledSetTimeout[31] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[15] = setInterval(ledNumberSEVEN4_15);
                        
                        function ledNumberSEVEN4_15() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[31],ledFadeTime,ledUseNumber,ledSetInterval[15],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 0 , 200 , 255 ] , [ 255 , 255 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let l = i % 2;
                                ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }

                            ledBasicColor = [ [ 180 , 240 , 255 ] , [ 0 , 220 , 255 ] ];

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let l = i % 2;
                                ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[31]);

                    ledSetTimeoutDelay[32] = 130000;
                    ledSetTimeout[32] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[16] = setInterval(ledNumberSEVEN4_16);
                        
                        function ledNumberSEVEN4_16() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[32],ledFadeTime,ledUseNumber,ledSetInterval[16],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let ledLapTimeSplit = 590;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 9 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * ( 2 - l ) ) % ledRepeatTime;
        
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

                            ledLapTimeSplit = 490;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 3 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * ( 2 - l ) ) % ledRepeatTime;
        
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
                        
                    },ledSetTimeoutDelay[32]);

                    ledSetTimeoutDelay[33] = 146000;
                    ledSetTimeout[33] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[22] = setInterval(ledNumberSEVEN4_22);
                        
                        function ledNumberSEVEN4_22() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[33],ledFadeTime,ledUseNumber,ledSetInterval[22],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 8;
                            let ledLapTimeSplit = ledRepeatTimeSplit * 2 / ledNumberInside;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [ 0 , 0 , 0 ];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 6 ) % ledRepeatTime;
        
                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        ledColor[ ( l + 2 ) % 3 ] = 255;
                                        ledColor[l] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 2 ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] *= ledJudgeTime / ledRepeatTimeSplit;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 5 ) {

                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 6 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] *= ( ledRepeatTimeSplit * 6 - ledJudgeTime ) / ledRepeatTimeSplit;
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            ledLapTimeSplit = ledRepeatTimeSplit * 6 / ledNumberOutside;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [ 0 , 0 , 0 ];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;
        
                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 1 ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        ledColor[ ( l + 1 ) % 3 ] = 255;
                                        ledColor[ l % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }

                                if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] *= ledJudgeTime / ledRepeatTimeSplit;
                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 5 ) {

                                } else if ( ledJudgeTime < ledRepeatTimeSplit * 6 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] *= ( ledRepeatTimeSplit * 6 - ledJudgeTime ) / ledRepeatTimeSplit;
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[33]);

                    ledSetTimeoutDelay[34] = 154000;
                    ledSetTimeout[34] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[17] = setInterval(ledNumberSEVEN4_17);
                        
                        function ledNumberSEVEN4_17() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[34],ledFadeTime,ledUseNumber,ledSetInterval[17],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 6;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [ 0 , 0 , 0 ];
        
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTime / 7 * Math.trunc( ( i - 1 ) / 2 ) ) % ledRepeatTime;
        
                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 2 ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 1 ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [ 0 , 0 , 0 ];
        
                                let ledJudgeTime = ( nowTime[1] + ledRepeatTime / 7 * Math.trunc( ( i - 1 ) / 2 ) ) % ledRepeatTime;
        
                                for ( l = 0 ; l < 3 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l * 2 + 1 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 2 ) % 3 ] = 255 - 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 ) );
                                        break;
                                    } else if ( ledJudgeTime < ledRepeatTimeSplit * ( ( l + 1 ) * 2 ) ) {
                                        ledColor[l] = 255;
                                        ledColor[ ( l + 1 ) % 3 ] = 255 / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * ( l * 2 + 1 ) );
                                        break;
                                    }
                                }
        
                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[34]);

                    ledSetTimeoutDelay[35] = 158600;
                    ledSetTimeout[35] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);                    
                    },ledSetTimeoutDelay[35]);

                    ledSetTimeoutDelay[36] = 162000;
                    ledSetTimeout[36] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN4_1);
                        
                        function ledNumberSEVEN4_1() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[36],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[36]);

                    ledSetTimeoutDelay[37] = 174000;
                    ledSetTimeout[37] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[23] = setInterval(ledNumberSEVEN4_23);
                        
                        function ledNumberSEVEN4_23() {
                            let ledFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[37],ledFadeTime,ledUseNumber,ledSetInterval[23],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 255 , 0 , 120 ] , [ 50 , 200 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let l = Math.trunc( i % 5 / 3 );
                                ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let l = 1 - Math.trunc( ( i + 1 ) % 6 / 3 );
                                ledColorChange(2,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[37]);

                    ledSetTimeoutDelay[38] = 176000;
                    ledSetTimeout[38] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[24] = setInterval(ledNumberSEVEN4_24);
                        
                        function ledNumberSEVEN4_24() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[38],ledFadeTime,ledUseNumber,ledSetInterval[24],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 400;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 0 , 120 ] , [ 50 , 200 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[38]);

                    ledSetTimeoutDelay[39] = 177000;
                    ledSetTimeout[39] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[25] = setInterval(ledNumberSEVEN4_25);
                        
                        function ledNumberSEVEN4_25() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[39],ledFadeTime,ledUseNumber,ledSetInterval[25],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledBasicColor = [ [ 255 , 0 , 120 ] , [ 50 , 200 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let l = Math.trunc( i % 5 / 3 );
                                ledColorChange(1,i,ledBasicColor[l][0],ledBasicColor[l][1],ledBasicColor[l][2],nowTime[0],ledFadeTime);
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[39]);

                    ledSetTimeoutDelay[40] = 177100;
                    ledSetTimeout[40] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN4_1);
                        
                        function ledNumberSEVEN4_1() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[40],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[40]);

                    ledSetTimeoutDelay[41] = 178000;
                    ledSetTimeout[41] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[26] = setInterval(ledNumberSEVEN4_26);
                        
                        function ledNumberSEVEN4_26() {
                            let ledFadeTime = 0;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[41],ledFadeTime,ledUseNumber,ledSetInterval[26],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 2000;
                            let ledRepeatTimeSplit = ledRepeatTime / 4;
                            let ledBasicColor = [ [ 0 , 0 , 0 ] , [ [ 255 , 100 , 240 ] , [ 50 , 200 , 255 ] ] ];
                            let ledColor = [];

                            let ledJudgeTime = nowTime[0] % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][0][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][0][k] + ( ledBasicColor[0][k] - ledBasicColor[1][0][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                            ledJudgeTime = ( ledJudgeTime + ledRepeatTimeSplit * 2 ) % ledRepeatTime;

                            if ( ledJudgeTime < ledRepeatTimeSplit ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k] + ( ledBasicColor[1][1][k] - ledBasicColor[0][k] ) / ledRepeatTimeSplit * ledJudgeTime;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * 2 ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[1][1][k] + ( ledBasicColor[0][k] - ledBasicColor[1][1][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit ) ;
                            } else {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[0][k];
                            }

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                        
                        }
                        
                    },ledSetTimeoutDelay[41]);

                    ledSetTimeoutDelay[42] = 185700;
                    ledSetTimeout[42] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[27] = setInterval(ledNumberSEVEN4_27);
                        
                        function ledNumberSEVEN4_27() {
                            let ledFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[42],ledFadeTime,ledUseNumber,ledSetInterval[27],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 1000;
                            let ledRepeatTimeSplit = ledRepeatTime / 2;
                            let ledLapTimeSplit = ledRepeatTime / 3;
                            let ledBasicColor = [ [ 255 , 180 , 240 ] , [ 100 , 200 , 255 ] ];
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

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
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) ) % ledRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                        break;
                                    }
                                }

                                ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                            }
                        
                        }
                        
                    },ledSetTimeoutDelay[42]);

                    ledSetTimeoutDelay[43] = 194000;
                    ledSetTimeout[43] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[16] = setInterval(ledNumberSEVEN4_16);
                        
                        function ledNumberSEVEN4_16() {
                            let ledFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[43],ledFadeTime,ledUseNumber,ledSetInterval[16],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
                            let ledRepeatTime = 4000;
                            let ledRepeatTimeSplit = ledRepeatTime / 12;
                            let ledLapTimeSplit = 590;
                            
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                                let ledColor = [];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 9 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * ( 2 - l ) ) % ledRepeatTime;
        
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

                            ledLapTimeSplit = 490;

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                                let ledColor = [];
        
                                let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * ( i - 1 ) + ledRepeatTimeSplit * 3 ) % ledRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let ledJudgeTime2 = ( ledJudgeTime + ledRepeatTime / 3 * ( 2 - l ) ) % ledRepeatTime;
        
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
                        
                    },ledSetTimeoutDelay[43]);

                    ledSetTimeoutDelay[44] = 202200;
                    ledSetTimeout[44] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);                    
                    },ledSetTimeoutDelay[44]);

                    ledSetTimeoutDelay[45] = 206200;
                    ledSetTimeout[45] = setTimeout( function() {
                        let ledChildrenMyNumber = ledSetting(ledMyNumber);
                        ledSetInterval[1] = setInterval(ledNumberSEVEN4_1);
                        
                        function ledNumberSEVEN4_1() {
                            let ledFadeTime = 1800;
                            let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[45],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledChildrenMyNumber);
        
                            for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);

                            for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,0,0,0,nowTime[0],ledFadeTime,0,ledSetInterval[1]);
        
                        }
                        
                    },ledSetTimeoutDelay[45]);

                    /***** 水中照明 SEVEN4 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetTimeoutDelay = [];
                    let waterLightSetInterval = [];

                    waterLightSetTimeoutDelay[1] = 0;
                    waterLightSetTimeout[1] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[1] = setInterval(waterLightNumberSEVEN4_1);

                        function waterLightNumberSEVEN4_1() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[1],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[1],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,80,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[1]);

                    waterLightSetTimeoutDelay[2] = 2000;
                    waterLightSetTimeout[2] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSEVEN4_2);

                        function waterLightNumberSEVEN4_2() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[2],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,120,200,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[2]);

                    waterLightSetTimeoutDelay[3] = 10000;
                    waterLightSetTimeout[3] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN4_3);

                        function waterLightNumberSEVEN4_3() {
                            let waterLightFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[3],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[3]);

                    waterLightSetTimeoutDelay[4] = 11000;
                    waterLightSetTimeout[4] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN4_4);

                        function waterLightNumberSEVEN4_4() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[4],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[4]);

                    waterLightSetTimeoutDelay[5] = 12000;
                    waterLightSetTimeout[5] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[5] = setInterval(waterLightNumberSEVEN4_5);

                        function waterLightNumberSEVEN4_5() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[5],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[5],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,100,100,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[5]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[5]);

                    waterLightSetTimeoutDelay[6] = 14000;
                    waterLightSetTimeout[6] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN4_3);

                        function waterLightNumberSEVEN4_3() {
                            let waterLightFadeTime = 400;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[6],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[6]);

                    waterLightSetTimeoutDelay[7] = 15000;
                    waterLightSetTimeout[7] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN4_4);

                        function waterLightNumberSEVEN4_4() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[7],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[7]);

                    waterLightSetTimeoutDelay[8] = 17000;
                    waterLightSetTimeout[8] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[5] = setInterval(waterLightNumberSEVEN4_5);

                        function waterLightNumberSEVEN4_5() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[8],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[5],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,100,100,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[5]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[8]);

                    waterLightSetTimeoutDelay[9] = 18000;
                    waterLightSetTimeout[9] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[6] = setInterval(waterLightNumberSEVEN4_6);

                        function waterLightNumberSEVEN4_6() {
                            let waterLightFadeTime = 100;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[9],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[6],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                if ( i % 2 ) waterLightColor = [ 0 , 100 , 255 ];
                                else waterLightColor = [ 240 , 0 , 255 ];

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime,0,waterLightSetInterval[16]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[9]);

                    waterLightSetTimeoutDelay[10] = 26000;
                    waterLightSetTimeout[10] = setTimeout( function() {                        
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[7] = setInterval(waterLightNumberSEVEN4_7);

                        function waterLightNumberSEVEN4_7() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[10],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[7],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 4000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ [ 240 , 0 , 255 ] , [ 0 , 100 , 255 ] ] , [ 0 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let l = i % 2;

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) ) % waterLightRepeatTime;

                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][l][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][l][k] ) / waterLightRepeatTimeSplit * waterLightJudgeTime;
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][l][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit );
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][l][k];
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[10]);

                    waterLightSetTimeoutDelay[11] = 31000;
                    waterLightSetTimeout[11] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[8] = setInterval(waterLightNumberSEVEN4_8);

                        function waterLightNumberSEVEN4_8() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[11],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[8],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,80,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[8]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[11]);

                    waterLightSetTimeoutDelay[12] = 32000;
                    waterLightSetTimeout[12] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[9] = setInterval(waterLightNumberSEVEN3_9);

                        function waterLightNumberSEVEN3_9() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[12],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[9],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,240,200,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[9]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[12]);

                    waterLightSetTimeoutDelay[13] = 32500;
                    waterLightSetTimeout[13] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[10] = setInterval(waterLightNumberSEVEN3_10);

                        function waterLightNumberSEVEN3_10() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[12],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[10],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,220,0,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[10]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[13]);

                    waterLightSetTimeoutDelay[14] = 33500;
                    waterLightSetTimeout[14] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[11] = setInterval(waterLightNumberSEVEN4_11);

                        function waterLightNumberSEVEN4_11() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[14],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[11],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                if ( i % 2 ) waterLightColor = [ 200 , 255 , 240 ];
                                else waterLightColor = [ 0 , 100 , 255 ];

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime,0,waterLightSetInterval[16]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[14]);

                    waterLightSetTimeoutDelay[15] = 34500;
                    waterLightSetTimeout[15] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[12] = setInterval(waterLightNumberSEVEN4_12);

                        function waterLightNumberSEVEN4_12() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[15],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[12],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 2000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ [ 0 , 100 , 255 ] , [ 200 , 255 , 240 ] ] , [ 0 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let l = i % 2;

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) ) % waterLightRepeatTime;

                                if ( waterLightJudgeTime < waterLightRepeatTimeSplit ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][l][k] + ( waterLightBasicColor[1][k] - waterLightBasicColor[0][l][k] ) / waterLightRepeatTimeSplit * waterLightJudgeTime;
                                } else if ( waterLightJudgeTime < waterLightRepeatTimeSplit * 2 ) {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[1][k] + ( waterLightBasicColor[0][l][k] - waterLightBasicColor[1][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit );
                                } else {
                                    for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[0][l][k];
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[15]);

                    waterLightSetTimeoutDelay[16] = 50000;
                    waterLightSetTimeout[16] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[13] = setInterval(waterLightNumberSEVEN4_13);

                        function waterLightNumberSEVEN4_13() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[16],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[13],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 2000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 0 , 255 , 200 ] , [ 0 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 1.5  ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[16]);

                    waterLightSetTimeoutDelay[17] = 58000;
                    waterLightSetTimeout[17] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[14] = setInterval(waterLightNumberSEVEN4_14);

                        function waterLightNumberSEVEN4_14() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[17],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[14],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 2000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 0 , 150 ] , [ 0 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 1.5 ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[17]);

                    waterLightSetTimeoutDelay[18] = 62000;
                    waterLightSetTimeout[18] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN4_3);

                        function waterLightNumberSEVEN4_3() {
                            let waterLightFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[18],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[18]);

                    waterLightSetTimeoutDelay[19] = 64000;
                    waterLightSetTimeout[19] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN4_4);

                        function waterLightNumberSEVEN4_4() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[19],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[19]);

                    waterLightSetTimeoutDelay[20] = 65000;
                    waterLightSetTimeout[20] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[11] = setInterval(waterLightNumberSEVEN4_11);

                        function waterLightNumberSEVEN4_11() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[20],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[11],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                if ( i % 2 ) waterLightColor = [ 200 , 255 , 240 ];
                                else waterLightColor = [ 0 , 100 , 255 ];

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime,0,waterLightSetInterval[16]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[20]);

                    waterLightSetTimeoutDelay[21] = 66000;
                    waterLightSetTimeout[21] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[15] = setInterval(waterLightNumberSEVEN4_15);

                        function waterLightNumberSEVEN4_15() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[21],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[15],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 4000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 12;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];
        
                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 11 ) % waterLightRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let waterLightJudgeTime2 = ( waterLightJudgeTime + waterLightRepeatTime / 3 * ( 2 - l ) ) % waterLightRepeatTime;
        
                                    if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 3 ) {
                                        waterLightColor[l] = 255 / waterLightRepeatTimeSplit / 3 * waterLightJudgeTime2 ;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 7 ) {
                                        waterLightColor[l] = 255;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 10 ) {
                                        waterLightColor[l] = 255 - 255 / waterLightRepeatTimeSplit / 3 * ( waterLightJudgeTime2 - waterLightRepeatTimeSplit * 7 ) ;
                                    } else {
                                        waterLightColor[l] = 0;
                                    }
                                }
        
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[21]);

                    waterLightSetTimeoutDelay[22] = 94600;
                    waterLightSetTimeout[22] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);                    
                    },waterLightSetTimeoutDelay[22]);

                    waterLightSetTimeoutDelay[23] = 98000;
                    waterLightSetTimeout[23] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[16] = setInterval(waterLightNumberSEVEN4_16);

                        function waterLightNumberSEVEN4_16() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[23],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[16],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,180,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[16]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[23]);

                    waterLightSetTimeoutDelay[24] = 106500;
                    waterLightSetTimeout[24] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[17] = setInterval(waterLightNumberSEVEN4_17);

                        function waterLightNumberSEVEN4_17() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[24],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[17],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 1800;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 4;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 0 , 180 , 255 ] , [ 255 , 0 , 150 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let l = i % 2;

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i + 3 ) ) % waterLightRepeatTime;

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
                        
                    },waterLightSetTimeoutDelay[24]);

                    waterLightSetTimeoutDelay[25] = 110000;
                    waterLightSetTimeout[25] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[18] = setInterval(waterLightNumberSEVEN4_18);

                        function waterLightNumberSEVEN4_18() {
                            let waterLightFadeTime = 700;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[25],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[18],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,0,150,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[18]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[25]);

                    waterLightSetTimeoutDelay[26] = 112000;
                    waterLightSetTimeout[26] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[19] = setInterval(waterLightNumberSEVEN4_19);

                        function waterLightNumberSEVEN4_19() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[26],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[19],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,255,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[19]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[26]);

                    waterLightSetTimeoutDelay[27] = 114000;
                    waterLightSetTimeout[27] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN4_3);

                        function waterLightNumberSEVEN4_3() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[27],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[27]);

                    waterLightSetTimeoutDelay[28] = 120000;
                    waterLightSetTimeout[28] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[20] = setInterval(waterLightNumberSEVEN4_20);

                        function waterLightNumberSEVEN4_20() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[28],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[20],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,220,255,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[20]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[28]);

                    waterLightSetTimeoutDelay[29] = 122000;
                    waterLightSetTimeout[29] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[14] = setInterval(waterLightNumberSEVEN4_14);

                        function waterLightNumberSEVEN4_14() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[29],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[14],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 2000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 255 , 0 , 150 ] , [ 0 , 0 , 0 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 1.5 ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[29]);

                    waterLightSetTimeoutDelay[30] = 126000;
                    waterLightSetTimeout[30] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN4_3);

                        function waterLightNumberSEVEN4_3() {
                            let waterLightFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[30],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[30]);

                    waterLightSetTimeoutDelay[31] = 128000;
                    waterLightSetTimeout[31] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[4] = setInterval(waterLightNumberSEVEN4_4);

                        function waterLightNumberSEVEN4_4() {
                            let waterLightFadeTime = 1000;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[31],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[4],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,200,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[4]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[31]);

                    waterLightSetTimeoutDelay[32] = 129000;
                    waterLightSetTimeout[32] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[11] = setInterval(waterLightNumberSEVEN4_11);

                        function waterLightNumberSEVEN4_11() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[32],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[11],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                if ( i % 2 ) waterLightColor = [ 200 , 255 , 240 ];
                                else waterLightColor = [ 0 , 100 , 255 ];

                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime,0,waterLightSetInterval[16]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[32]);

                    waterLightSetTimeoutDelay[33] = 130000;
                    waterLightSetTimeout[33] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[15] = setInterval(waterLightNumberSEVEN4_15);

                        function waterLightNumberSEVEN4_15() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[33],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[15],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 4000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 12;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];
        
                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 11 ) % waterLightRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let waterLightJudgeTime2 = ( waterLightJudgeTime + waterLightRepeatTime / 3 * ( 2 - l ) ) % waterLightRepeatTime;
        
                                    if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 3 ) {
                                        waterLightColor[l] = 255 / waterLightRepeatTimeSplit / 3 * waterLightJudgeTime2 ;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 7 ) {
                                        waterLightColor[l] = 255;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 10 ) {
                                        waterLightColor[l] = 255 - 255 / waterLightRepeatTimeSplit / 3 * ( waterLightJudgeTime2 - waterLightRepeatTimeSplit * 7 ) ;
                                    } else {
                                        waterLightColor[l] = 0;
                                    }
                                }
        
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[33]);

                    waterLightSetTimeoutDelay[34] = 158600;
                    waterLightSetTimeout[34] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);                    
                    },waterLightSetTimeoutDelay[34]);

                    waterLightSetTimeoutDelay[35] = 162000;
                    waterLightSetTimeout[35] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[21] = setInterval(waterLightNumberSEVEN4_21);

                        function waterLightNumberSEVEN4_21() {
                            let waterLightFadeTime = 1300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[35],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[21],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,0,0,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[21]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[35]);

                    waterLightSetTimeoutDelay[36] = 174000;
                    waterLightSetTimeout[36] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[2] = setInterval(waterLightNumberSEVEN4_2);

                        function waterLightNumberSEVEN4_2() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[36],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[2],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,255,120,200,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[1]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[36]);

                    waterLightSetTimeoutDelay[37] = 177000;
                    waterLightSetTimeout[37] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN4_3);

                        function waterLightNumberSEVEN4_3() {
                            let waterLightFadeTime = 500;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[37],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[37]);

                    waterLightSetTimeoutDelay[38] = 185700;
                    waterLightSetTimeout[38] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[22] = setInterval(waterLightNumberSEVEN4_22);

                        function waterLightNumberSEVEN4_22() {
                            let waterLightFadeTime = 300;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[38],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[22],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 6000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 2;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            let waterLightBasicColor = [ [ 150 , 0 , 255 ] , [ 0 , 120 , 255 ] ];

                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];

                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 1.5 ) % waterLightRepeatTime;

                                for ( var l = 0 ; l < 2 ; l++ ) {
                                    if ( waterLightJudgeTime < waterLightRepeatTimeSplit * ( l + 1 ) ) {
                                        for ( var k = 0 ; k < 3 ; k++ ) waterLightColor[k] = waterLightBasicColor[l][k] + ( waterLightBasicColor[ ( l + 1 ) % 2 ][k] - waterLightBasicColor[l][k] ) / waterLightRepeatTimeSplit * ( waterLightJudgeTime - waterLightRepeatTimeSplit * l );
                                        break;
                                    }
                                }
                                
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[38]);

                    waterLightSetTimeoutDelay[39] = 194000;
                    waterLightSetTimeout[39] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[15] = setInterval(waterLightNumberSEVEN4_15);

                        function waterLightNumberSEVEN4_15() {
                            let waterLightFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[39],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[15],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 4000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 12;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];
        
                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 5 ) % waterLightRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let waterLightJudgeTime2 = ( waterLightJudgeTime + waterLightRepeatTime / 3 * ( 2 - l ) ) % waterLightRepeatTime;
        
                                    if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 3 ) {
                                        waterLightColor[l] = 255 / waterLightRepeatTimeSplit / 3 * waterLightJudgeTime2 ;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 7 ) {
                                        waterLightColor[l] = 255;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 10 ) {
                                        waterLightColor[l] = 255 - 255 / waterLightRepeatTimeSplit / 3 * ( waterLightJudgeTime2 - waterLightRepeatTimeSplit * 7 ) ;
                                    } else {
                                        waterLightColor[l] = 0;
                                    }
                                }
        
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[39]);

                    waterLightSetTimeoutDelay[40] = 202200;
                    waterLightSetTimeout[40] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);                    
                    },waterLightSetTimeoutDelay[40]);

                    waterLightSetTimeoutDelay[41] = 206200;
                    waterLightSetTimeout[41] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[3] = setInterval(waterLightNumberSEVEN4_3);

                        function waterLightNumberSEVEN4_3() {
                            let waterLightFadeTime = 1800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[41],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[3],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                waterLightColorChange(i,0,120,255,nowTime[0],waterLightFadeTime,0,waterLightSetInterval[3]);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[41]);

                    /***** ムービングライト SEVEN3 *****/
                    let movingLightSetTimeout = [], movingLightSetTimeoutDelay = [], movingLightSetInterval = [];
                    let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                    movingLightSetTimeoutDelay[0] = 0;
                    movingLightSetTimeout[0] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        let movingLightAngleFadeTime = 500;

                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        movingLightSetInterval[1] = setInterval(movingLightNumberSEVEN3_1);

                        function movingLightNumberSEVEN3_1() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[0],34000,movingLightUseNumber,movingLightSetInterval[1],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 9500;
                            let angleXYCenter = -150;
                            let angleZCenter = -70;
                            let angleXYRadius = 30;
                            let angleZRadius = 10;

                            let movingLightAngleRad = ( 270 + 360 / movingLightAngleRepeatTime * nowTime[1] ) / 180 * Math.PI;
                            let angleXY, angleZ;

                            angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    movingLightColorChange(2,i,0,0,0,0);
                                    movingLightAngleChange(2,i,-80,80,movingLightAngleFadeTime,nowTime[0]);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[0]);

                    movingLightSetTimeoutDelay[1] = 18000;
                    movingLightSetTimeout[1] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[2] = setInterval(movingLightNumberSEVEN3_2);

                        function movingLightNumberSEVEN3_2() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[1],0,movingLightUseNumber,movingLightSetInterval[2],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,240,0,255,movingLightColorOpacity);
                                
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[1]);

                    movingLightSetTimeoutDelay[2] = 30000;
                    movingLightSetTimeout[2] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[2]);
                        movingLightSetting(0);

                        movingLightSetInterval[3] = setInterval(movingLightNumberSEVEN3_3);

                        function movingLightNumberSEVEN3_3() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[2],0,movingLightUseNumber,movingLightSetInterval[3],movingLightMyNumber);
                            let movingLightBasicColor = [ [ 255 , 255 , 0 ] , [ 0 , 0 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 0 , 0 ] , [ 255 , 120 , 0 ] ];
                            let movingLightColorRepeatTimeSplit = [ 0 , 1000 , 2000 , 2500 , 3000 , 100000 ];

                            for ( var l = 0 ; l < movingLightColorRepeatTimeSplit.length ; l++ ) {
                                if ( nowTime[0] < movingLightColorRepeatTimeSplit[ l + 1 ] ) break;
                            }

                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);

                            movingLightBasicColor = [ [ 0 , 0 , 0 ] , [ 0 , 0 , 255 ] , [ 0 , 0 , 0 ] , [ 200 , 0 , 255 ] , [ 200 , 0 , 255 ] ];
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1);
                            
                        }

                    },movingLightSetTimeoutDelay[2]);

                    movingLightSetTimeoutDelay[3] = 33500;
                    movingLightSetTimeout[3] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[3]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;
                        let movingLightAngleFadeTime = 2000;

                        movingLightSetInterval[4] = setInterval(movingLightNumberSEVEN3_4);

                        function movingLightNumberSEVEN3_4() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[3],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[4],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 9500;
                            let angleXYCenter = 0;
                            let angleZCenter = 50;
                            let angleXYRadius = 70;
                            let angleZRadius = 20;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTimeSplit * j ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,255,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,0,255,1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[3]);

                    movingLightSetTimeoutDelay[4] = 49000;
                    movingLightSetTimeout[4] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[4],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[4]);

                    movingLightSetTimeoutDelay[5] = 49500;
                    movingLightSetTimeout[5] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[1]);
                        clearInterval(movingLightSetInterval[4]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,80,100);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSEVEN3_6);

                        function movingLightNumberSEVEN3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,-80,80,1,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[5]);

                    movingLightSetTimeoutDelay[6] = 50000;
                    movingLightSetTimeout[6] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 6000;

                        movingLightSetInterval[7] = setInterval(movingLightNumberSEVEN3_7);

                        function movingLightNumberSEVEN3_7() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[6],0,movingLightUseNumber,movingLightSetInterval[7],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorRepeatTimeSplit * ( i % 2 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,0,120,255,movingLightColorOpacity);
                                
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,0,120,255,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[6]);

                    movingLightSetTimeoutDelay[7] = 56000;
                    movingLightSetTimeout[7] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[7]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSEVEN3_8);

                        function movingLightNumberSEVEN3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[7],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 20000;
                            let angleXYCenter = 180;
                            let angleZCenter = -70;
                            let angleXYRadius = 90;
                            let angleZRadius = 10;
                            let movingLightAngleLapTimeDeg = [ 0 , 180 , 270 , 90 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * nowTime[1] - movingLightAngleLapTimeDeg[i-1] ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[7]);

                    movingLightSetTimeoutDelay[8] = 58000;
                    movingLightSetTimeout[8] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberSEVEN3_9);

                        function movingLightNumberSEVEN3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[8],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightColorJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,240,0,255,movingLightColorOpacity);
                                
                            }
                            
                            movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightColorJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,240,0,255,movingLightColorOpacity);
                                
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[8]);

                    movingLightSetTimeoutDelay[9] = 63000;
                    movingLightSetTimeout[9] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[9],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[9]);
                    
                    movingLightSetTimeoutDelay[10] = 63600;
                    movingLightSetTimeout[10] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,3,80,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSEVEN3_10);

                        function movingLightNumberSEVEN3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[10],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightColorChange(1,1,0,150,255,0);
                                movingLightColorChange(1,2,0,255,0,0);
                                movingLightColorChange(1,3,255,255,0,0);
                                movingLightColorChange(1,4,255,0,220,0);

                                movingLightAngleFadeChange(2,1,-40,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,-110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,70,70,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightRotateDeg = -360/35000*nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[10]);

                    movingLightSetTimeoutDelay[11] = 66000;
                    movingLightSetTimeout[11] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[11] = setInterval(movingLightNumberSEVEN3_11);

                        function movingLightNumberSEVEN3_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[11],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightColorRepeatTime = 6000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 12;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {                            
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
        
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j + movingLightColorRepeatTimeSplit * 9 ) % movingLightColorRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let movingLightColorJudgeTime2 = ( movingLightColorJudgeTime + movingLightColorRepeatTime / 3 * ( 2 - l ) ) % movingLightColorRepeatTime;
        
                                    if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 3 ) {
                                        movingLightColor[l] = 255 / movingLightColorRepeatTimeSplit / 3 * movingLightColorJudgeTime2 ;
                                    } else if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 7 ) {
                                        movingLightColor[l] = 255;
                                    } else if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 10 ) {
                                        movingLightColor[l] = 255 - 255 / movingLightColorRepeatTimeSplit / 3 * ( movingLightColorJudgeTime2 - movingLightColorRepeatTimeSplit * 7 ) ;
                                    } else {
                                        movingLightColor[l] = 0;
                                    }
                                }
        
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1);
                            }

                            if ( nowTime[0] <= 500 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[11]);

                    movingLightSetTimeoutDelay[12] = 78000;
                    movingLightSetTimeout[12] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSEVEN3_12);

                        function movingLightNumberSEVEN3_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[12],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[12]);

                    movingLightSetTimeoutDelay[13] = 78500;
                    movingLightSetTimeout[13] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSEVEN3_13);

                        function movingLightNumberSEVEN3_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[13],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11000;
                            let angleXYCenter = 0;
                            let angleZCenter = 50;
                            let angleXYRadius = 75;
                            let angleZRadius = 30;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTimeSplit * j ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[13]);

                    movingLightSetTimeoutDelay[14] = 82000;
                    movingLightSetTimeout[14] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSEVEN3_14);

                        function movingLightNumberSEVEN3_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[14],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 500;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,220,1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[14]);

                    movingLightSetTimeoutDelay[15] = 94600;
                    movingLightSetTimeout[15] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        clearInterval(movingLightSetInterval[14]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[15],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[15]);

                    movingLightSetTimeoutDelay[16] = 111000;
                    movingLightSetTimeout[16] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,80,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[15] = setInterval(movingLightNumberSEVEN3_15);

                        function movingLightNumberSEVEN3_15() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[16],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[15],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 20000;
                            let angleXYCenter = -20;
                            let angleZCenter = -40;
                            let angleXYRadius = 90;
                            let angleZRadius = 40;

                            let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * nowTime[1] ) / 180 * Math.PI;
                            let angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                            let angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,-80,80,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[16]);

                    movingLightSetTimeoutDelay[17] = 112000;
                    movingLightSetTimeout[17] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[16] = setInterval(movingLightNumberSEVEN3_16);

                        function movingLightNumberSEVEN3_16() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[17],0,movingLightUseNumber,movingLightSetInterval[16],movingLightMyNumber);
                            let movingLightColorRepeatTime = 500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorOpacity = 0;
                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;

                            if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,255,movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[17]);

                    movingLightSetTimeoutDelay[18] = 114000;
                    movingLightSetTimeout[18] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[16]);
                        movingLightSetting(0);

                        movingLightSetInterval[17] = setInterval(movingLightNumberSEVEN3_17);

                        function movingLightNumberSEVEN3_17() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[18],0,movingLightUseNumber,movingLightSetInterval[17],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(1,i,0,120,255,movingLightColorOpacity);
                                
                            }

                            movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;

                                movingLightColorChange(2,i,0,120,255,movingLightColorOpacity);
                                
                            }
                        }

                    },movingLightSetTimeoutDelay[18]);

                    movingLightSetTimeoutDelay[19] = 120000;
                    movingLightSetTimeout[19] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[15]);
                        clearInterval(movingLightSetInterval[17]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[8] = setInterval(movingLightNumberSEVEN3_8);

                        function movingLightNumberSEVEN3_8() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[19],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[8],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 20000;
                            let angleXYCenter = 180;
                            let angleZCenter = -70;
                            let angleXYRadius = 90;
                            let angleZRadius = 10;
                            let movingLightAngleLapTimeDeg = [ 0 , 180 , 270 , 90 ];
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * nowTime[1] - movingLightAngleLapTimeDeg[i-1] ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(1,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,0,0,0);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,255,255,0,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[19]);

                    movingLightSetTimeoutDelay[20] = 122000;
                    movingLightSetTimeout[20] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[9] = setInterval(movingLightNumberSEVEN3_9);

                        function movingLightNumberSEVEN3_9() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[20],0,movingLightUseNumber,movingLightSetInterval[9],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightInsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                let movingLightColorOpacity;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * ( i - 1 ) ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightColorJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(1,i,240,0,255,movingLightColorOpacity);
                                
                            }
                            
                            movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity;
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightColorJudgeTime;
                                else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,240,0,255,movingLightColorOpacity);
                                
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[20]);

                    movingLightSetTimeoutDelay[21] = 127000;
                    movingLightSetTimeout[21] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[9]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[21],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[21]);
                    
                    movingLightSetTimeoutDelay[22] = 127600;
                    movingLightSetTimeout[22] = setTimeout( function() {
                        movingLightSetting(0);

                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTriplePictureChange(2,i,3,80,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[10] = setInterval(movingLightNumberSEVEN3_10);

                        function movingLightNumberSEVEN3_10() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[22],0,movingLightUseNumber,movingLightSetInterval[10],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                movingLightColorChange(1,1,0,150,255,0);
                                movingLightColorChange(1,2,0,255,0,0);
                                movingLightColorChange(1,3,255,255,0,0);
                                movingLightColorChange(1,4,255,0,220,0);

                                movingLightAngleFadeChange(2,1,-40,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,2,-110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,3,-110,85,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,4,40,80,movingLightAngleFadeTime,nowTime[0]);
                                movingLightAngleFadeChange(2,5,70,70,movingLightAngleFadeTime,nowTime[0]);
                            }

                            let movingLightRotateDeg = -360/35000*nowTime[0];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightTripleRotateChange(2,i,movingLightRotateDeg);
                            
                        }

                    },movingLightSetTimeoutDelay[22]);

                    movingLightSetTimeoutDelay[23] = 130000;
                    movingLightSetTimeout[23] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[11] = setInterval(movingLightNumberSEVEN3_11);

                        function movingLightNumberSEVEN3_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[23],0,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightColorRepeatTime = 6000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 12;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {                            
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
        
                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j + movingLightColorRepeatTimeSplit * 9 ) % movingLightColorRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let movingLightColorJudgeTime2 = ( movingLightColorJudgeTime + movingLightColorRepeatTime / 3 * ( 2 - l ) ) % movingLightColorRepeatTime;
        
                                    if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 3 ) {
                                        movingLightColor[l] = 255 / movingLightColorRepeatTimeSplit / 3 * movingLightColorJudgeTime2 ;
                                    } else if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 7 ) {
                                        movingLightColor[l] = 255;
                                    } else if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 10 ) {
                                        movingLightColor[l] = 255 - 255 / movingLightColorRepeatTimeSplit / 3 * ( movingLightColorJudgeTime2 - movingLightColorRepeatTimeSplit * 7 ) ;
                                    } else {
                                        movingLightColor[l] = 0;
                                    }
                                }
        
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1);
                            }

                            if ( nowTime[0] <= 500 ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[23]);

                    movingLightSetTimeoutDelay[24] = 142000;
                    movingLightSetTimeout[24] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[12] = setInterval(movingLightNumberSEVEN3_12);

                        function movingLightNumberSEVEN3_12() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[24],0,movingLightUseNumber,movingLightSetInterval[12],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[10]);
                                clearInterval(movingLightSetInterval[12]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[24]);

                    movingLightSetTimeoutDelay[25] = 142500;
                    movingLightSetTimeout[25] = setTimeout( function() {
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSEVEN3_13);

                        function movingLightNumberSEVEN3_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[25],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11000;
                            let angleXYCenter = 0;
                            let angleZCenter = 50;
                            let angleXYRadius = 75;
                            let angleZRadius = 30;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTimeSplit * j ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[25]);

                    movingLightSetTimeoutDelay[26] = 146000;
                    movingLightSetTimeout[26] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[14] = setInterval(movingLightNumberSEVEN3_14);

                        function movingLightNumberSEVEN3_14() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[26],0,movingLightUseNumber,movingLightSetInterval[14],movingLightMyNumber);
                            let movingLightColorRepeatTime = 4500;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorChangeTime = 500;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let movingLightColorOpacity = 0;
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightColorJudgeTime = ( nowTime[0] + movingLightColorLapTimeSplit * j ) % movingLightColorRepeatTime;

                                if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1;
                                else if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit + movingLightColorChangeTime ) movingLightColorOpacity = 1 - 1 / movingLightColorChangeTime * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit );

                                movingLightColorChange(2,i,-1,-1,-1,movingLightColorOpacity);
                            }

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,0,220,1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[26]);

                    movingLightSetTimeoutDelay[27] = 158600;
                    movingLightSetTimeout[27] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        clearInterval(movingLightSetInterval[14]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[27],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[27]);

                    movingLightSetTimeoutDelay[28] = 161500;
                    movingLightSetTimeout[28] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(2,i,0,40,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,30,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[18] = setInterval(movingLightNumberSEVEN3_18);

                        function movingLightNumberSEVEN3_18() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[28],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[18],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 6000;
                            let angleXYCenter = 0;
                            let angleZCenter = 70;
                            let angleXYRadius = 70;
                            let angleZRadius = 40;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 - 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTimeSplit * j ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[28]);

                    movingLightSetTimeoutDelay[29] = 162000;
                    movingLightSetTimeout[29] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[19] = setInterval(movingLightNumberSEVEN3_19);

                        function movingLightNumberSEVEN3_19() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[29],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[19],movingLightMyNumber);
                            let movingLightColorRepeatTime = 1000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            let movingLightBasicColor = [ [ 0 , 255 , 150 ] , [ 100 , 80 , 180 ] ];

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = 5 - i;
                                else if ( i <= 4 ) j = 4 - i;
                                else j = 2;

                                let l = Math.trunc( ( nowTime[1] + movingLightColorLapTimeSplit * j ) / movingLightColorRepeatTimeSplit ) % 2;

                                movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],1,movingLightColorFadeTime,nowTime[0]);

                            }

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,0,150,255,1,movingLightColorFadeTime,nowTime[0],1);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[29]);

                    movingLightSetTimeoutDelay[30] = 174000;
                    movingLightSetTimeout[30] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[19]);
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[30],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[30]);
                    
                    movingLightSetTimeoutDelay[31] = 178000;
                    movingLightSetTimeout[31] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[18]);
                        movingLightSetting(0);
                        
                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightPictureChange(1,i,0,50,100);
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightPictureChange(2,i,0,50,100);

                        let movingLightAngleFadeTime = 500;

                        movingLightSetInterval[6] = setInterval(movingLightNumberSEVEN3_6);

                        function movingLightNumberSEVEN3_6() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[5],0,movingLightUseNumber,movingLightSetInterval[6],movingLightMyNumber);

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(2,i,-80,80,1,movingLightAngleFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[6]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[31]);

                    movingLightSetTimeoutDelay[32] = 182000;
                    movingLightSetTimeout[32] = setTimeout( function() {
                        movingLightSetting(0);

                        movingLightSetInterval[20] = setInterval(movingLightNumberSEVEN3_20);

                        function movingLightNumberSEVEN3_20() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[32],0,movingLightUseNumber,movingLightSetInterval[20],movingLightMyNumber);
                            let movingLightColorRepeatTime = 2000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;
                            let movingLightBasicColor = [ [ 255 , 100 , 240 ] , [ 50 , 200 , 255 ] ];

                            let l = Math.trunc( nowTime[0] / movingLightColorRepeatTimeSplit ) % 2;

                            movingLightColorRepeatTime = 1000;
                            movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 2;

                            let movingLightColorJudgeTime = nowTime[0] % movingLightColorRepeatTime;                        

                            if ( movingLightColorJudgeTime < movingLightColorRepeatTimeSplit ) movingLightColorOpacity = 1 / movingLightColorRepeatTimeSplit * movingLightColorJudgeTime;
                            else movingLightColorOpacity = 1 - 1 / movingLightColorRepeatTimeSplit * ( movingLightColorJudgeTime - movingLightColorRepeatTimeSplit );

                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,movingLightBasicColor[l][0],movingLightBasicColor[l][1],movingLightBasicColor[l][2],movingLightColorOpacity);
                            
                        }

                    },movingLightSetTimeoutDelay[32]);

                    movingLightSetTimeoutDelay[33] = 186000;
                    movingLightSetTimeout[33] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[20]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 1500;

                        movingLightSetInterval[13] = setInterval(movingLightNumberSEVEN3_13);

                        function movingLightNumberSEVEN3_13() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[33],movingLightAngleFadeTime,movingLightUseNumber,movingLightSetInterval[13],movingLightMyNumber);
                            let movingLightAngleRepeatTime = 11000;
                            let angleXYCenter = 0;
                            let angleZCenter = 50;
                            let angleXYRadius = 75;
                            let angleZRadius = 30;
                            let movingLightAngleLapTimeSplit = movingLightAngleRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;

                                let movingLightAngleRad = ( 360 / movingLightAngleRepeatTime * nowTime[1] + movingLightAngleLapTimeSplit * j ) / 180 * Math.PI;
                                let angleXY, angleZ;

                                angleXY = angleXYCenter + angleXYRadius * Math.cos(movingLightAngleRad);
                                angleZ = angleZCenter + angleZRadius * Math.sin(movingLightAngleRad);

                                movingLightAngleChange(2,i,angleXY,angleZ,movingLightAngleFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                    if ( i % 2 ) movingLightColorChange(1,i,0,150,255);
                                    else movingLightColorChange(1,i,255,0,220);
                                }
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                    if ( i === 1 || i === 3 ) movingLightColorChange(2,i,255,0,220);
                                    else movingLightColorChange(2,i,0,150,255);
                                }
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[33]);

                    movingLightSetTimeoutDelay[34] = 194000;
                    movingLightSetTimeout[34] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 500;

                        movingLightSetInterval[11] = setInterval(movingLightNumberSEVEN3_11);

                        function movingLightNumberSEVEN3_11() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[34],movingLightColorFadeTime,movingLightUseNumber,movingLightSetInterval[11],movingLightMyNumber);
                            let movingLightColorRepeatTime = 6000;
                            let movingLightColorRepeatTimeSplit = movingLightColorRepeatTime / 12;
                            let movingLightColorLapTimeSplit = movingLightColorRepeatTime / movingLightOutsideNumber;
                            
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {                            
                                let movingLightColor = [];
                                let j;

                                if ( i <= 2 ) j = i - 1;
                                else if ( i <= 4 ) j = i;
                                else j = 2;
        
                                let movingLightColorJudgeTime = ( nowTime[1] + movingLightColorLapTimeSplit * j + movingLightColorRepeatTimeSplit * 9 ) % movingLightColorRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let movingLightColorJudgeTime2 = ( movingLightColorJudgeTime + movingLightColorRepeatTime / 3 * ( 2 - l ) ) % movingLightColorRepeatTime;
        
                                    if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 3 ) {
                                        movingLightColor[l] = 255 / movingLightColorRepeatTimeSplit / 3 * movingLightColorJudgeTime2 ;
                                    } else if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 7 ) {
                                        movingLightColor[l] = 255;
                                    } else if ( movingLightColorJudgeTime2 < movingLightColorRepeatTimeSplit * 10 ) {
                                        movingLightColor[l] = 255 - 255 / movingLightColorRepeatTimeSplit / 3 * ( movingLightColorJudgeTime2 - movingLightColorRepeatTimeSplit * 7 ) ;
                                    } else {
                                        movingLightColor[l] = 0;
                                    }
                                }
        
                                movingLightColorChange(2,i,movingLightColor[0],movingLightColor[1],movingLightColor[2],-1,movingLightColorFadeTime,nowTime[0]);
                            }

                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,255,255,0,1,movingLightColorFadeTime,nowTime[0]);

                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[34]);

                    movingLightSetTimeoutDelay[35] = 200000;
                    movingLightSetTimeout[35] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 400;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[35],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[35]);

                    movingLightSetTimeoutDelay[36] = 200500;
                    movingLightSetTimeout[36] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[8]);
                        clearInterval(movingLightSetInterval[13]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 400;

                        movingLightSetInterval[21] = setInterval(movingLightNumberSEVEN3_21);

                        function movingLightNumberSEVEN3_21() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[36],0,movingLightUseNumber,movingLightSetInterval[21],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,75,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(1,i,0,90,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[36]);

                    movingLightSetTimeoutDelay[37] = 201000;
                    movingLightSetTimeout[37] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 800;

                        movingLightSetInterval[22] = setInterval(movingLightNumberSEVEN3_22);

                        function movingLightNumberSEVEN3_22() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[37],0,movingLightUseNumber,movingLightSetInterval[22],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                                
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,1,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[22]);
                            }

                        }

                    },movingLightSetTimeoutDelay[37]);

                    movingLightSetTimeoutDelay[38] = 206200;
                    movingLightSetTimeout[38] = setTimeout( function() {
                        movingLightSetting(0);

                        let movingLightColorFadeTime = 1800;

                        movingLightSetInterval[5] = setInterval(movingLightNumberSEVEN3_5);

                        function movingLightNumberSEVEN3_5() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[38],0,movingLightUseNumber,movingLightSetInterval[5],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightColorFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightColorChange(1,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightColorChange(2,i,-1,-1,-1,0,movingLightColorFadeTime,nowTime[0]);
                            } else {
                                clearInterval(movingLightSetInterval[5]);
                            }

                        }

                    },movingLightSetTimeoutDelay[38]);

                    movingLightSetTimeoutDelay[39] = 208500;
                    movingLightSetTimeout[39] = setTimeout( function() {
                        clearInterval(movingLightSetInterval[11]);
                        movingLightSetting(0);

                        let movingLightAngleFadeTime = 800;

                        movingLightSetInterval[23] = setInterval(movingLightNumberSEVEN3_23);

                        function movingLightNumberSEVEN3_23() {
                            let nowTime = nowTimeGet(startTime+movingLightSetTimeoutDelay[39],0,movingLightUseNumber,movingLightSetInterval[23],movingLightMyNumber);
                            
                            if ( nowTime[0] <= movingLightAngleFadeTime ) {
                                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) movingLightAngleChange(1,i,0,0,movingLightAngleFadeTime,nowTime[0]);
                            }
                            
                        }

                    },movingLightSetTimeoutDelay[39]);

                } else if ( key === 'j' ) {
                    let startTime = Date.now();

                    /***** LED demo *****/
                    let ledMyNumber = ledSetting();
                    let ledSetTimeoutDelay = [];
                    let ledSetInterval = [];

                    ledSetTimeoutDelay[7] = 0;
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

                } else if ( key === 'k' ) {
                    let startTime = Date.now();

                    /***** 水中照明 demo *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetTimeoutDelay = [];
                    let waterLightSetInterval = [];

                    waterLightSetTimeoutDelay[39] = 0;
                    waterLightSetTimeout[39] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);
                        waterLightSetInterval[15] = setInterval(waterLightNumberSEVEN4_15);

                        function waterLightNumberSEVEN4_15() {
                            let waterLightFadeTime = 800;
                            let nowTime = nowTimeGet(startTime+waterLightSetTimeoutDelay[39],waterLightFadeTime,waterLightUseNumber,waterLightSetInterval[15],waterLightMyNumber,waterLightUseChildrenNumber,waterLightChildrenMyNumber);
                            let waterLightRepeatTime = 4000;
                            let waterLightRepeatTimeSplit = waterLightRepeatTime / 12;
                            let waterLightLapTimeSplit = waterLightRepeatTime / waterLightNumber;
                            
                            for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                                let waterLightColor = [];
        
                                let waterLightJudgeTime = ( nowTime[1] + waterLightLapTimeSplit * ( i - 1 ) + waterLightRepeatTimeSplit * 5 ) % waterLightRepeatTime;
        
                                for ( var l = 0 ; l < 3 ; l++ ) {
                                    let waterLightJudgeTime2 = ( waterLightJudgeTime + waterLightRepeatTime / 3 * ( 2 - l ) ) % waterLightRepeatTime;
        
                                    if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 3 ) {
                                        waterLightColor[l] = 255 / waterLightRepeatTimeSplit / 3 * waterLightJudgeTime2 ;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 7 ) {
                                        waterLightColor[l] = 255;
                                    } else if ( waterLightJudgeTime2 < waterLightRepeatTimeSplit * 10 ) {
                                        waterLightColor[l] = 255 - 255 / waterLightRepeatTimeSplit / 3 * ( waterLightJudgeTime2 - waterLightRepeatTimeSplit * 7 ) ;
                                    } else {
                                        waterLightColor[l] = 0;
                                    }
                                }
        
                                waterLightColorChange(i,waterLightColor[0],waterLightColor[1],waterLightColor[2],nowTime[0],waterLightFadeTime);
                            }
                        }
                        
                    },waterLightSetTimeoutDelay[39]);

                    waterLightSetTimeoutDelay[40] = 8200;
                    waterLightSetTimeout[40] = setTimeout( function() {
                        let waterLightChildrenMyNumber = waterLightSetting(waterLightMyNumber);                    
                    },waterLightSetTimeoutDelay[40]);
                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) { //f6
                    let startTime = Date.now();

                    /***** 看板照明 SEVEN1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 1500;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberSEVEN1);
        
                    function logoboardLightNumberSEVEN1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let logoboardLightColor = [];

                            if ( i <= 24 ) logoboardLightColor = [ 255 , 150 , 200 , 180 ];
                            else logoboardLightColor = [ 150 , 200 , 255 , 180 ];

                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }

                }  else if ( subCode === 7 ) { //f7
                    let startTime = Date.now();

                    /***** 客席照明 *****/
                    audienceLightChange(1,100,startTime);

                }  else if ( subCode === 8 ) { //f8
                    let startTime = Date.now();

                    /***** 客席照明 *****/
                    audienceLightChange(0,900,startTime);

                }
            }
        }
    }
});