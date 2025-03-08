jsSetting("2016Winter","2016Winter",1,1);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "2016Winter" ) {
        if ( mainNowPage === 1 ) {
            if ( key === 'f' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン G *****/
                waterCurtain("G");

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

            } else if ( key === 'g' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AX *****/
                waterCurtain("AX");

                /***** LED SF1 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF1);

                function ledNumberSF1() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 5000;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledBasicColor = [ [ 150 , 255 , 255 ] , [ 0 , 150 , 255 ] ];
                    
                    let ledLapTimeSplit = 800;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let j = i - 1;
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
                    
                    ledLapTimeSplit = 300;

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        let j = i - 1;
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

            } else if ( key === 'h' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AD *****/
                waterCurtainActualSetTimeout[0] = setTimeout( function() {
                    waterCurtain("AD");
                },2000);

                /***** LED BS3 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberBS3);

                function ledNumberBS3() {
                    let ledFadeTime = 2000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,255,0,100,nowTime[0],ledFadeTime,0,ledSetInterval);
    
                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,255,0,100,nowTime[0],ledFadeTime,0,ledSetInterval);

                }
            } else if ( key === 'i' ) {
                let startTime = Date.now();
    
                /***** ウォーターカーテン BO *****/
                waterCurtain("BO");
    
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber5);
    
                function ledNumber5() {
                    let fadeTime = 1600;
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
    
            } else if ( key === 'j' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン K *****/
                waterCurtain("K");

                /***** LED SF2 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF2);

                function ledNumberSF2() {
                    let ledFadeTime = 2000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 1000;
                    let ledRepeatTimeSplit = ledRepeatTime / 4;
                    let ledChangeTime = 400;
                    let ledLapTimeSplit = 180;
                    let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 0 , 255 ] , [ 255 , 255 , 255 ] , [ 0 , 180 , 255 ] ];

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let j = ledNumberInside - i;
                        let ledColor = [];
                        let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                        for ( var l = 0 ; l < 4 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                break;
                            }
                        }

                        ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                    }

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        let j = ledNumberOutside - i;
                        let ledColor = [];
                        let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

                        for ( var l = 0 ; l < 4 ; l++ ) {
                            if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k];
                                break;
                            } else if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                                for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 4 ][k] - ledBasicColor[l][k] ) / ledChangeTime * ( ledJudgeTime - ( ledRepeatTimeSplit * ( l + 1 ) - ledChangeTime ) ) ;
                                break;
                            }
                        }

                        ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);
                    }

                }

            } else if ( key === 'k' ) {
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

            } else if ( key === 'l' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BH *****/
                waterCurtain("BH");

                /***** LED 64 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber64);

                function ledNumber64() {
                    let ledFadeTime = 2000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 1000;
                    let ledChangeTime = 200;
                    let ledRepeatTimeSplit = ledRepeatTime / 3;
                    let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 0 , 255 ] , [ 0 , 0 , 255 ] ];
                    
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

            } else if ( key === 'm' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AR *****/
                waterCurtain("AR");

                /***** LED SF1 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF1);

                function ledNumberSF1() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 5000;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledBasicColor = [ [ 150 , 255 , 255 ] , [ 0 , 150 , 255 ] ];
                    
                    let ledLapTimeSplit = 800;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let j = i - 1;
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
                    
                    ledLapTimeSplit = 300;

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        let j = i - 1;
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

            } else if ( key === 'n' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BG *****/
                waterCurtain("BG");

                /***** LED CS5 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberCS5);

                function ledNumberCS5() {
                    let ledFadeTime = 1500;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 2000;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledBasicColor = [ [ 255 , 255 , 255 ] , [ 0 , 200 , 255 ]];
                    
                    let ledLapTimeSplit = 350;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let j = i - 1;
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
                    
                    ledLapTimeSplit = 140;

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        let j = i - 1;
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

            } else if ( key === 'o' ) {
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
            } else if ( key === 'p' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AC *****/
                waterCurtain("AC");

                /***** LED 34 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber34);
    
                function ledNumber34() {
                    let ledFadeTime = 1500;
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

            } else if ( key === 'q' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AJ *****/
                waterCurtain("AJ");

                /***** LED SF1 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF1);

                function ledNumberSF1() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 5000;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledBasicColor = [ [ 150 , 255 , 255 ] , [ 0 , 150 , 255 ] ];
                    
                    let ledLapTimeSplit = 800;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let j = i - 1;
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
                    
                    ledLapTimeSplit = 300;

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        let j = i - 1;
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

            } else if ( key === 'r' ) {
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

            } else if ( key === 's' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AG *****/
                waterCurtain("AG");

                /***** LED 38 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber38);
    
                function ledNumber38() {
                    let ledFadeTime = 1500;
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
            } else if ( key === 't' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BC *****/
                waterCurtain("BC");

                /***** LED 81 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber81);
    
                function ledNumber81() {
                    let ledFadeTime = 1500;
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

            } else if ( key === 'u' ) {
                let startTime = Date.now();
    
                /***** ウォーターカーテン N *****/
                waterCurtain("N",0);
    
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
    
            } else if ( key === 'v' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AM *****/
                waterCurtain("AM");

                /***** LED 64 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber64);

                function ledNumber64() {
                    let ledFadeTime = 2000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 1000;
                    let ledChangeTime = 200;
                    let ledRepeatTimeSplit = ledRepeatTime / 3;
                    let ledBasicColor = [ [ 0 , 255 , 255 ] , [ 255 , 0 , 255 ] , [ 0 , 0 , 255 ] ];
                    
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

            } else if ( key === 'w' ) {
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

            } else if ( key === 'x' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AF *****/
                waterCurtain("AF");

                /***** LED SF3 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF3);

                function ledNumberSF3() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 3000;
                    let ledRepeatTimeSplit = ledRepeatTime / 3;
                    let ledBasicColor = [ [ 0 , 120 , 255 ] , [ 0 , 255 , 255 ] , [ 200 , 255 , 255 ] ];
                    
                    let ledLapTimeSplit = 400;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let j = i - 1;
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
                    
                    ledLapTimeSplit = 120;

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        let j = i - 1;
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
                
                /***** ウォーターカーテン BI *****/
                waterCurtain("BI");

                /***** LED SF4 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF4);

                function ledNumberSF4() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 3000;
                    let ledRepeatTimeSplit = ledRepeatTime / 3;
                    let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 0 , 220 , 255 ] , [ 200 , 255 , 255 ] ];
                    
                    let ledLapTimeSplit = 400;

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
                    
                    ledLapTimeSplit = 120;

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
                
                /***** ウォーターカーテン BJ *****/
                waterCurtain("BJ");

                /***** LED 35 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber35);
    
                function ledNumber35() {
                    let ledFadeTime = 1500;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
    
                    let ledRepeatTime = 8000;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledBasicColor = [ [ 0 , 255 , 200 ]  , [ 200 , 0 , 255 ] ];
                    let ledLapTimeSplit = ledRepeatTime / ledNumberOutside * 2;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let ledColor = [];
                        let j;

                        if ( i >= 7 && i < 17 ) j = 16 - i;
                        else if ( i < 7 ) j = i + 3;
                        else j = i - 17;

                        j += ( ledNumberOutside - ledNumberInside ) / 4;

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

            } else if ( key === '@' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン AB *****/
                waterCurtain("AB");

                /***** LED 33 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber33);

                function ledNumber33() {
                    let ledFadeTime = 2000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 24000;
                    let ledRepeatTimeSplit = ledRepeatTime / 3;
                    let ledBasicColor = [ [ 0 , 0 , 255 ] , [ 0 , 255 , 255 ] , [ 255 , 255 , 255 ] ];
                    let ledColor = [];
                    let ledJudgeTime = nowTime[0] % ledRepeatTime;

                    for ( var l = 0 ; l < 3 ; l++ ) {
                        if ( ledJudgeTime < ledRepeatTimeSplit * ( l + 1 ) ) {
                            for ( var k = 0 ; k < 3 ; k++ ) ledColor[k] = ledBasicColor[l][k] + ( ledBasicColor[ ( l + 1 ) % 3 ][k] - ledBasicColor[l][k] ) / ledRepeatTimeSplit * ( ledJudgeTime - ledRepeatTimeSplit * l ) ;
                            break;
                        }
                    }

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) ledColorChange(1,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) ledColorChange(2,i,ledColor[0],ledColor[1],ledColor[2],nowTime[0],ledFadeTime);

                }

            } else if ( key === '[' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BA *****/
                waterCurtainActualSetTimeout[0] = setTimeout( function() {
                    waterCurtain("BA");
                },1000);

                /***** LED SF5 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF5);

                function ledNumberSF5() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 1800;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledChangeTime = 250;
                    let ledBasicColor = [ [ 0 , 220 , 255 ] , [ 200 , 80 , 255 ] ];
                    
                    let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                    
                    ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

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

            } else if ( key === ';' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン M *****/
                waterCurtainActualSetTimeout[0] = setTimeout( function() {
                    waterCurtain("M");
                },1000);

                /***** LED SF6 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumberSF6);

                function ledNumberSF6() {
                    let ledFadeTime = 1000;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    let ledRepeatTime = 1800;
                    let ledRepeatTimeSplit = ledRepeatTime / 2;
                    let ledChangeTime = 250;
                    let ledBasicColor = [ [ 0 , 220 , 255 ] , [ 0 , 80 , 255 ] ];
                    
                    let ledLapTimeSplit = ledRepeatTime * 3 / ledNumberInside;

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
                    
                    ledLapTimeSplit = ledRepeatTime * 5 / ledNumberOutside;

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

            }
        }

        if ( subNowPage === 1 ) {
            if ( subCode === 6 ) { //f6
                let startTime = Date.now();

                /***** パーライト defult *****/
                let parLightSetInterval = setInterval(parLightNumberDefult);

                function parLightNumberDefult() {
                    let parLightFadeTime = 1000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,255,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 600;
                    spotLightChange(1,spotFadeTime,startTime + 400);
                },400);
                
            } else if ( subCode === 7 ) { //f7
                let startTime = Date.now();

                /***** パーライト SF1 *****/
                let parLightSetInterval = setInterval(parLightNumberSF1);

                function parLightNumberSF1() {
                    let parLightFadeTime = 1000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,255,0,100,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 600;
                    spotLightChange(0.5,spotFadeTime,startTime + 400);
                },400);
                
            } else if ( subCode === 8 ) { //f8
                let startTime = Date.now();

                /***** パーライト SF2 *****/
                let parLightSetInterval = setInterval(parLightNumberSF2);

                function parLightNumberSF2() {
                    let parLightFadeTime = 1000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,100,255,150,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 600;
                    spotLightChange(1,spotFadeTime,startTime + 400);
                },400);
                
            } else if ( subCode === 9 ) { //f9
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

                    /***** ステージライト *****/
                    let stageFadeTime = 2000;
                    stageLightChange(1,stageFadeTime,startTime + 1000);
                },1000);                
                
            } else if ( subCode === 10 ) { //f10
                let startTime = Date.now();

                /***** パーライト SF3 *****/
                let parLightSetInterval = setInterval(parLightNumberSF3);

                function parLightNumberSF3() {
                    let parLightFadeTime = 1000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) parLightColorFadeChange(i,0,50,255,nowTime[0],parLightFadeTime,parLightSetInterval);                   
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 600;
                    spotLightChange(1,spotFadeTime,startTime + 400);
                },400);
                
            }
        }
    }
});