jsSetting("2017Spring","2017Spring",1,1);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "2017Spring" ) {
        if ( mainNowPage === 1 ) {
            if ( key === 'f' ) {
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
            } else if ( key === 'g' ) {
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

            } else if ( key === 'h' ) {
                let startTime = Date.now();
                
                /***** ウォーターカーテン BB *****/
                waterCurtain("BB");

                /***** LED 77 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber77);

                function ledNumber77() {
                    let ledFadeTime = 2000;
                    let ledRepeatTime = 2600;
                    let ledRepeatTimeSplit = ledRepeatTime / 12;
                    let nowTime = nowTimeGet(startTime,ledFadeTime,ledUseNumber,ledSetInterval,ledMyNumber);
                    
                    let ledLapTimeSplit = ledRepeatTime * 2 / ledNumberInside;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        let ledColor = [];
                        let j = ledNumberInside - i;

                        let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

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

                        let ledJudgeTime = ( nowTime[1] + ledLapTimeSplit * j ) % ledRepeatTime;

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

            } else if ( key === 'i' ) {
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
                
                /***** ウォーターカーテン AD *****/
                waterCurtain("AD");

                /***** LED 35 *****/
                let ledMyNumber = ledSetting();
                let ledSetInterval = setInterval(ledNumber35);
    
                function ledNumber35() {
                    let ledFadeTime = 2000;
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

            } else if ( key === 'l' ) {
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

            }
        }

        if ( subNowPage === 1 ) {
            if ( subCode === 6 ) { //f6
                let startTime = Date.now();

                /***** パーライト HU1 *****/
                let parLightSetInterval = setInterval(parLightNumberHU1);

                function parLightNumberHU1() {
                    let parLightFadeTime = 3000;
                    var nowTime = nowTimeGet(startTime,0);

                    for ( var i = 1 ; i <= 8 ; i++ ) {
                        let parLightColor = [];
                        if ( i % 2 === 1 ) parLightColor = [ 255 , 150 , 255 ];
                        else parLightColor = [ 150 , 255 , 255 ];
    
                        parLightColorFadeChange(i,parLightColor[0],parLightColor[1],parLightColor[2],nowTime[0],parLightFadeTime,parLightSetInterval);                   
                    }
                }

                setTimeout( function () {
                    /***** スポットライト *****/
                    let spotFadeTime = 2000;
                    spotLightChange(1,spotFadeTime,startTime + 1000);

                    /***** ステージライト *****/
                    let stageFadeTime = 2000;
                    stageLightChange(1,stageFadeTime,startTime + 1000);
                },1000);                
                
            }
        }
    }
});