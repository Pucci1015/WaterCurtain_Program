jsSetting("2016Christmas","2016Christmas",1,1);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "2016Christmas" ) {
        if ( mainNowPage === 1 ) {
            if ( key === 'f' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BF *****/
                waterCurtain("BF");

                /***** LED HH1 *****/
                let ledMyNumber = ledSetting();
                let ledSetTimeoutDelay = [];
                let ledSetInterval = [];

                ledSetTimeoutDelay[1] = 0;
                ledSetTimeout[1] = setTimeout( function() {
                    let ledMyNumber1 = ledSetting(ledMyNumber);
                    ledSetInterval[1] = setInterval(ledNumberHH1_1);
                    
                    function ledNumberHH1_1() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[1],ledFadeTime,ledUseNumber,ledSetInterval[1],ledMyNumber,ledUseChildrenNumber,ledMyNumber1);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
    
                            if ( i % 2 === 0 ) ledColor = [ 255 , 0 , 0 ];
                            else ledColor = [ 255 , 0 , 150 ];
    
                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[1]);
                        }
    
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            
                            if ( i % 2 === 0 ) ledColor = [ 255 , 0 , 0 ];
                            else ledColor = [ 255 , 0 , 150 ];
    
                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[1]);
                        }

                    }
                    
                },ledSetTimeoutDelay[1]);

                ledSetTimeoutDelay[2] = 3430;
                ledSetTimeout[2] = setTimeout( function() {
                    let ledMyNumber2 = ledSetting(ledMyNumber);
                    ledSetInterval[2] = setInterval(ledNumberHH1_2);
                    
                    function ledNumberHH1_2() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[2],ledFadeTime,ledUseNumber,ledSetInterval[2],ledMyNumber,ledUseChildrenNumber,ledMyNumber2);

                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            let ledColor = [];
    
                            if ( i % 2 === 0 ) ledColor = [ 150 , 255 , 0 ];
                            else ledColor = [ 0 , 255 , 0 ];
    
                            ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[2]);
                        }
    
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            let ledColor = [];
                            
                            if ( i % 2 === 0 ) ledColor = [ 150 , 255 , 0 ];
                            else ledColor = [ 0 , 255 , 0 ];
    
                            ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime,0,ledSetInterval[2]);
                        }

                    }
                    
                },ledSetTimeoutDelay[2]);

                ledSetTimeoutDelay[3] = 6430;
                ledSetTimeout[3] = setTimeout( function() {
                    let ledMyNumber3 = ledSetting(ledMyNumber);
                    ledSetInterval[3] = setInterval(ledNumberHH1_3);
                    
                    function ledNumberHH1_3() {
                        let ledFadeTime = 500;
                        let nowTime = nowTimeGet(startTime+ledSetTimeoutDelay[3],ledFadeTime,ledUseNumber,ledSetInterval[3],ledMyNumber,ledUseChildrenNumber,ledMyNumber3);
                        let ledRepeatTime = 1500;
                        let ledRepeatTimeSplit = ledRepeatTime / 6;
                        
                        let ledLapTimeSplit = ledRepeatTime * 4 / ledNumberInside;
    
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
                        
                        ledLapTimeSplit = ledRepeatTime * 4 / ledNumberOutside;
    
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
                    
                },ledSetTimeoutDelay[3]);

            } else if ( key === 'g' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン G *****/
                waterCurtain("G");

                /***** LED 25 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber25);

                function ledNumber25() {
                    let ledFadeTime = 1500;
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
            } else if ( key === 'h' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AS *****/
                waterCurtain("AS");

                /***** LED 63 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber63);

                function ledNumber63() {
                    let ledFadeTime = 1500;
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

            } else if ( key === 'i' ) {
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
                        //j += 4//9.25//ledNumberOutside / 4;//( ledNumberOutside - ledNumberInside ) / 4 + ledNumberInside / 4; 0-9 7-16 9.25-13.75  11.5( O/2 - I/2 ) / 2

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
            } else if ( key === 'j' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン H *****/
                waterCurtain("H");

                /***** LED 25 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber25);

                function ledNumber25() {
                    let ledFadeTime = 1500;
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
            } else if ( key === 'k' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BG *****/
                waterCurtain("BG");

                /***** LED 84 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber84);

                function ledNumber84() {
                    let ledFadeTime = 1500;
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

            } else if ( key === 'l' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AL *****/
                waterCurtain("AL");

                /***** LED BS5 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberBS5);

                function ledNumberBS5() {
                    let ledFadeTime = 1500;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);
    
                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,255,255,nowTime[0],ledFadeTime,0,ledSetInterval);

                }
            } else if ( key === 'm' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BJ *****/
                waterCurtain("BJ");

                /***** LED HH2 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberHH2);

                function ledNumberHH2() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 5000;
                    let ledRepeatTimeSplit = ledRepeatTime / 3;
                    let ledChangeTime = 500;
                    let ledBasicColor = [ [ 255 , 0 , 0 ] , [ 255 , 255 , 0 ] , [ 0 , 255 , 0 ] ];
                    
                    ledLapTimeSplit = 300;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let j = i - 1;
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
                    
                    ledLapTimeSplit = 100;

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        let j = i - 1;
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

            } else if ( key === 'n' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン D *****/
                waterCurtain("D");

                /***** LED 3 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber3);

                function ledNumber3() {
                    let ledFadeTime = 1800;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 1700;
                    let ledRepeatTimeSplit = ledRepeatTime / 3;
                    let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 200 , 0 , 255 ] ];
                    
                    ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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

            } else if ( key === 'o' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン F *****/
                waterCurtain("F");

                /***** LED 6 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber6);

                function ledNumber6() {
                    let ledFadeTime = 1800;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 1500;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] ];

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let ledColor = [];
                        let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit / 2 ) % ledRepeatTime;

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
                        let ledJudgeTime = ( nowTime[1] + ledRepeatTimeSplit / 2 * 3 ) % ledRepeatTime;

                        for ( var l = 0 ; l < 2 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 2 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                                break;
                            }
                        }


                        ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                    }

                }

            } else if ( key === 'p' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AH *****/
                waterCurtain("AH");

                /***** LED 39 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber39);

                function ledNumber39() {
                    let ledFadeTime = 1500;
                    let ledRepeatTime = 2000;
                    let ledRepeatTimeSplit = ledRepeatTime / 20;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledBasicColor = [ [ 255 , 230 , 255 ] , [ 230 , 255 , 255 ] , [ 255 , 255 , 230 ] ];                    
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

            } else if ( key === 'q' ) {
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

            } else if ( key === 'r' ) {
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

            }
        }

        if ( subNowPage === 1 ) {
            if ( subCode === 6 ) { //f6
                let startTime = Date.now();

                /***** パーライト HH1 *****/
                let parLightSetInterval = setInterval(parLightNumberHH1);

                function parLightNumberHH1() {
                    let parLightFadeTime = 3000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,0,200,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 2000;
                    spotLightChange(1,spotFadeTime,startTime + 1000);

                    /***** ステージライト *****/
                    let stageFadeTime = 2000;
                    stageLightChange(1,stageFadeTime,startTime + 1000);
                },1000);                
                
            } else if ( subCode === 7 ) { //f7
                let startTime = Date.now();

                /***** パーライト HH2 *****/
                let parLightSetInterval = setInterval(parLightNumberHH2);

                function parLightNumberHH2() {
                    let parLightFadeTime = 3000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,100,255,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 2000;
                    spotLightChange(1,spotFadeTime,startTime + 1000);
                },1000);                
                
            } else if ( subCode === 8 ) { //f8
                let startTime = Date.now();

                /***** パーライト HH3 *****/
                let parLightSetInterval = setInterval(parLightNumberHH3);

                function parLightNumberHH3() {
                    let parLightFadeTime = 3000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,255,0,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 2000;
                    spotLightChange(1,spotFadeTime,startTime + 1000);
                },1000);                
                
            }
        }
    }
});