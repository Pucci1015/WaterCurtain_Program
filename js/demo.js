jsSetting_Old("demo","demo",2,2);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "demo" ) {

        if ( mainNowPage === 1 ) {
            //if ( key === 'z' ) {}
        }


        if ( mainNowPage === 2 ) {
            if ( key === 'c' ) {
                let startTime = Date.now();
                var waterLightMyNumber = waterLightSetting();
                var waterLightSetInterval = setInterval(dolphinSplashFesMain3);

                function dolphinSplashFesMain3() {
                    let fadeTime = 2000;
                    let nowTime = nowTimeGet( startTime , fadeTime , waterLightUseNumber , waterLightSetInterval , waterLightMyNumber );

                    for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                        var repeatTime = 5000;
                        var greenTime = nowTime[1] % repeatTime;
                        var green;
                        if ( greenTime < repeatTime / 2 ) {
                            green = 255 / repeatTime * 2 * greenTime;
                        } else {
                            green = 255 - 255 / repeatTime * 2 * ( greenTime - repeatTime / 2 );
                        }


                        waterLightColorChange(i,0,green,255,nowTime[0],fadeTime);
                    }
                }  

            } else if ( key === 'z' ) {
                var ledMyNumber = ledSetting();

                let ledSetTimeout1 = setTimeout( function() {
                    let startTime = Date.now();
                    var ledMyNumber1 = ledSetting(ledMyNumber);
                    var ledSetInterval1 = setInterval(ledNumber7);
                    
                    function ledNumber7() {
                        let fadeTime = 1800;
                        let nowTime1 = nowTimeGet( startTime , fadeTime , ledUseNumber,  ledSetInterval1 , ledMyNumber , ledUseChildrenNumber , ledMyNumber1 );
        
                        let repeatTime = 900;
        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            var j = ledNumberInside - i;
                            let ledColorRed1 = ( nowTime1[1] + repeatTime * 8 / ledNumberInside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }
        
                            ledColorChange(1,i,ledColorRed2,255,255,nowTime1[0],fadeTime);
                        }
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            var j = ledNumberOutside - i;
                            let ledColorRed1 = ( nowTime1[1] + repeatTime * 8 / ledNumberOutside * j ) % repeatTime;
                            let ledColorRed2;
                            if ( ledColorRed1 < repeatTime / 2 ) {
                                ledColorRed2 = 255 / repeatTime * 2 * ledColorRed1;
                            } else {
                                ledColorRed2 = 255 - 255 / repeatTime * 2 * ( ledColorRed1 - repeatTime / 2 );
                            }
                            
                            ledColorChange(2,i,ledColorRed2,255,255,nowTime1[0],fadeTime);
                        }
                    }

                },0);

                let ledSetTimeout2 = setTimeout( function() {
                    let startTime = Date.now();
                    var ledMyNumber2 = ledSetting(ledMyNumber);
                    var ledSetInterval2 = setInterval(ledNumber8);

                    function ledNumber8() {
                        let fadeTime = 2000;
                        let nowTime2 = nowTimeGet( startTime , fadeTime , ledUseNumber,  ledSetInterval2 , ledMyNumber , ledUseChildrenNumber , ledMyNumber2 );
        
                        for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                            ledColorChange(1,i,0,0,0,nowTime2[0],fadeTime,0,ledSetInterval2);
                        }
        
                        for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                            ledColorChange(2,i,0,0,0,nowTime2[0],fadeTime,0,ledSetInterval2);
                        }
                    }
                },10000);

            } else if ( key === 'x' ) {
                let movingLightSetTimeout = [];
                let movingLightMyNumber = movingLightSetting(movingLightSetTimeout);

                movingLightSetTimeout[0] = setTimeout( function() {
                    let startTime = Date.now();
                    var movingLightMyNumber1 = movingLightSetting(0);
                    var movingLightSetInterval1 = setInterval(movingLightNumber1_1);

                    function movingLightNumber1_1() {
                        let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval1,movingLightMyNumber);
                        if ( nowTime[0] <= 1000 ) {
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                movingLightAngleFadeChange(1,i,45,-60,1000,nowTime[0]);
                            }
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                movingLightAngleFadeChange(2,i,45,-60,1000,nowTime[0]);
                            }
                        } else {
                            let angleXY, angleZ;
                            if ( ( nowTime[0] - 1000 ) % 5000 < 2500 ) {
                                angleXY = 45 - 90 / 2500 * ( ( nowTime[0] - 1000 ) % 5000 );
                            } else {
                                angleXY = -45 + ( 90 / 2500 * ( ( nowTime[0] - 1000 ) % 5000 - 2500 ) );
                            }
                            if ( ( nowTime[0] - 1000 + 1250 ) % 5000 < 2500 ) {
                                angleZ = -40 - 40 / 2500 * ( ( nowTime[0] - 1000 + 1250 ) % 5000 );
                            } else {
                                angleZ = -80 + ( 40 / 2500 * ( ( nowTime[0] - 1000 + 1250 ) % 5000 - 2500 ) );
                            }
                            for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                                movingLightAngleChange(1,i,angleXY,angleZ);
                            }
                            for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                                movingLightAngleChange(2,i,angleXY,angleZ);
                            }
                        }

                        if ( nowTime[0] >= 10000 ) {
                            clearInterval(movingLightSetInterval1);
                        }

                        
                    }

                },0);

                movingLightSetTimeout[1] = setTimeout( function() {
                    let startTime = Date.now();
                    let movingLightMyNumber3 = movingLightSetting(0);
                    let movingLightSetInterval3 = setInterval(movingLightNumber3);

                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightPictureChange(1,i,0,50,100);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightPictureChange(2,i,0,50,100);
                    }

                    function movingLightNumber3() {
                        let nowTime1 = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval3,movingLightMyNumber);
                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                            movingLightColorChange(1,i,255,255,255,1,1000,nowTime1[0]);
                        }
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                            movingLightColorChange(2,i,255,255,255,1,1000,nowTime1[0]);
                        }

                        if ( nowTime1[0] > 1000 ) clearInterval(movingLightSetInterval3);
                    }
                },1000);
                
                movingLightSetTimeout[2] = setTimeout( function() {
                    let startTime = Date.now();
                    var movingLightMyNumber2 = movingLightSetting(0);
                    var movingLightSetInterval2 = setInterval(movingLightNumber1_2);

                    function movingLightNumber1_2() {
                        let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval2,movingLightMyNumber);
                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                            movingLightAngleFadeChange(1,i,-135,-70,1000,nowTime[0]);
                        }
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                            movingLightAngleFadeChange(2,i,-135,-70,1000,nowTime[0]);
                        }
                    }
                },10000);
            } else if ( key === 'a' ) {
                let startTime = Date.now();
                var ledMyNumber = ledSetting();
                var ledSetInterval = setInterval(ledNumber0);

                function ledNumber0() {
                    let fadeTime = 2000;
                    let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber , ledSetInterval , ledMyNumber );

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        ledColorChange(1,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                    }

                    for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                        ledColorChange(2,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                    }
                }

            } else if ( key === 'b' ) {
                let startTime = Date.now();
                var ledMyNumber = ledSetting();
                var ledSetInterval = setInterval(ledNumber5);

                function ledNumber5() {
                    let fadeTime = 1800;
                    let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber ,  ledSetInterval , ledMyNumber );

                    let repeatTime = 900;

                    for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                        var j = ledNumberInside - i;
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
                        var j = ledNumberOutside - i;
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

            } else if ( key === '1' ) {
                let startTime = Date.now();
                let waterCannonMyNumber = waterCannonSetting();
                let waterCannonSetInterval = setInterval(waterCannonNumber1);
                
                function waterCannonNumber1() {
                    let nowTime = nowTimeGet(startTime,0,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);
                    if ( nowTime[0] <= 1000 ) {
                        let colorBlue = 255 / 1000 * nowTime[0];
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ){
                            waterCannonColorChange(i,0,0,colorBlue);
                        }
                    } else {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ){
                            waterCannonJet(i,1,waterCannonMyNumber);
                        }
                    }
                    if ( nowTime[0] <= 6000 ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ){
                            waterCannonAngleChange(i,90,6000,nowTime[0]);
                        }
                    } else {
                        clearInterval(waterCannonSetInterval);
                    }
                }
    
            } else if ( key === 'd' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber1);
    
                function movingLightNumber1() {
                    let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    if ( nowTime[0] <= 1000 ) {
                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                            movingLightAngleFadeChange(1,i,45,-60,1000,nowTime[0]);
                        }
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                            movingLightAngleFadeChange(2,i,45,-60,1000,nowTime[0]);
                        }
                    } else {
                        let angleXY, angleZ;
                        if ( ( nowTime[0] - 1000 ) % 5000 < 2500 ) {
                            angleXY = 45 - 90 / 2500 * ( ( nowTime[0] - 1000 ) % 5000 );
                        } else {
                            angleXY = -45 + ( 90 / 2500 * ( ( nowTime[0] - 1000 ) % 5000 - 2500 ) );
                        }
                        if ( ( nowTime[0] - 1000 + 1250 ) % 5000 < 2500 ) {
                            angleZ = -40 - 40 / 2500 * ( ( nowTime[0] - 1000 + 1250 ) % 5000 );
                        } else {
                            angleZ = -80 + ( 40 / 2500 * ( ( nowTime[0] - 1000 + 1250 ) % 5000 - 2500 ) );
                        }
                        for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                            movingLightAngleChange(1,i,angleXY,angleZ);
                        }
                        for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                            movingLightAngleChange(2,i,angleXY,angleZ);
                        }
                    }
                }
            } else if ( key === 'e' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber2);
    
                function movingLightNumber2() {
                    let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightAngleFadeChange(1,i,0,45,1000,nowTime[0]);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightAngleFadeChange(2,i,0,45,1000,nowTime[0]);
                    }
                }
            } else if ( key === 'f' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber3);
    
                function movingLightNumber3() {
                    let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightAngleFadeChange(1,i,-135,-70,1000,nowTime[0]);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightAngleFadeChange(2,i,-135,-70,1000,nowTime[0]);
                    }
                }
            } else if ( key === 'g' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber4);
    
                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                    movingLightPictureChange(1,i,0,50,100);
                    //movingLightGradientColorChange(1,i,255,255,255,50,0,255,255,50,90,1);
                }
                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                    movingLightPictureChange(2,i,0,50,100);
                    //movingLightGradientColorChange(2,i,255,255,255,50,0,255,255,50,90,1);
                }
    
                function movingLightNumber4() {
                    let nowTime = nowTimeGet(startTime,5000,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightGradientColorChange(1,i,255,255,255,50,0,255,255,50,90,1/*,5000,nowTime[0]*/);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightGradientColorChange(2,i,255,255,255,50,0,255,255,50,90,1/*,5000,nowTime[0]*/);
                    }
                }
                
            } else if ( key === 'h' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber3);
                
                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                    movingLightPictureChange(1,i,0,100,100);
                }
                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                    movingLightPictureChange(2,i,0,100,100);
                }
    
                function movingLightNumber3() {
                    let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightAngleFadeChange(1,i,-135,-70,1000,nowTime[0]);
                        movingLightColorChange(1,i,255,255,255,1,1000,nowTime[0]);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightAngleFadeChange(2,i,-135,-70,1000,nowTime[0]);
                        movingLightColorChange(2,i,255,255,255,1,1000,nowTime[0]);
                    }
                }
            } else if ( key === 'i' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber3);
    
                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                    movingLightPictureChange(1,i,2,50,100);
                }
                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                    movingLightPictureChange(2,i,2,50,100);
                }
    
                function movingLightNumber3() {
                    let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightAngleFadeChange(1,i,-135,-70,1000,nowTime[0]);
                        movingLightColorChange(1,i,0,255,255,1,1000,nowTime[0]);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightAngleFadeChange(2,i,-135,-70,1000,nowTime[0]);
                        movingLightColorChange(2,i,0,255,255,1,1000,nowTime[0]);
                    }
                }
            } else if ( key === 'j' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber3);
    
                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                    movingLightPictureChange(1,i,3,50,100);
                }
                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                    movingLightPictureChange(2,i,3,50,100);
                }
    
                function movingLightNumber3() {
                    let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightAngleFadeChange(1,i,-135,-70,1000,nowTime[0]);
                        movingLightGradientColorChange(1,i,255,255,255,50,0,255,255,50,90,1/*,5000,nowTime[0]*/);
                        movingLightRotateChange(1,i,nowTime[0]/50);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightAngleFadeChange(2,i,-135,-70,1000,nowTime[0]);
                        movingLightGradientColorChange(2,i,255,255,255,50,0,255,255,50,90,1/*,5000,nowTime[0]*/);
                        movingLightRotateChange(2,i,nowTime[0]/50);
                    }
                }
            } else if ( key === 'k' ) {
                let startTime = Date.now();
                let movingLightMyNumber = movingLightSetting();
                let movingLightSetInterval = setInterval(movingLightNumber3);
    
                for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                    movingLightTriplePictureChange(1,i,0,100,30,100);
                }
                for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                    movingLightTriplePictureChange(2,i,0,100,30,100);
                }
    
                function movingLightNumber3() {
                    let nowTime = nowTimeGet(startTime,0,movingLightUseNumber,movingLightSetInterval,movingLightMyNumber);
                    for ( var i = 1 ; i <= movingLightInsideNumber ; i++ ) {
                        movingLightAngleFadeChange(1,i,-135,-70,1000,nowTime[0]);
                        //movingLightColorChange(1,i,0,255,255,1,1000,nowTime[0]);
                        movingLightGradientColorChange(1,i,255,255,255,50,0,255,255,50,90,1,1000,nowTime[0]);
                        //movingLightRotateChange(1,i,nowTime[0]/50);
                        movingLightTripleRotateChange(1,i,nowTime[0]/50);
                    }
                    for ( var i = 1 ; i <= movingLightOutsideNumber ; i++ ) {
                        movingLightAngleFadeChange(2,i,-135,-70,1000,nowTime[0]);
                        //movingLightColorChange(2,i,0,255,255,1,1000,nowTime[0]);
                        movingLightGradientColorChange(2,i,255,255,255,50,0,255,255,50,90,1,1000,nowTime[0]);
                        //movingLightRotateChange(2,i,nowTime[0]/50);
                        movingLightTripleRotateChange(2,i,nowTime[0]/50);
                    }
                }
            } else if ( key === 'm' ) {
                let startTime = Date.now();
                //let logoboardLightMyNumber = 
                logoboardLightSetting(0);
                let logoboardLightSetInterval = setInterval(logoboardLightNumber1);
    
                function logoboardLightNumber1() {
                    let nowTime = nowTimeGet(startTime,0);
                    for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                        logoboardLightFadeChage(i,0,255,0,0,1,1000,nowTime[0],logoboardLightSetInterval);
                    }
                }
            } else if ( key === 'p' ) {
                let startTime = Date.now();
                //let logoboardLightMyNumber = 
                logoboardLightSetting(0);
                let logoboardLightSetInterval = setInterval(logoboardLightNumber1);
    
                function logoboardLightNumber1() {
                    let nowTime = nowTimeGet(startTime,0);
                    for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                        logoboardLightFadeChage(i,0,0,255,0,1,1000,nowTime[0],logoboardLightSetInterval);
                    }
                }
            } else if ( key === 'n' ) {
                let startTime = Date.now();
                //let logoboardLightMyNumber = 
                logoboardLightSetting(0);
                logoboardLightOFF(1000);
                /*let logoboardLightSetInterval = setInterval(logoboardLightNumber2);
    
                function logoboardLightNumber2() {
                    let nowTime = nowTimeGet(startTime,0);
                    logoboardLightOFF(logoboardLightSetInterval,1000,nowTime[0]);
                }*/
            } else if ( key === 'o' ) {
                let startTime = Date.now();
                let logoboardLightMyNumber = logoboardLightSetting(1);
                let logoboardLightSetInterval = setInterval(logoboardLightNumber3);
    
                function logoboardLightNumber3() {
                    let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[1],logoboardLightSetInterval,logoboardLightMyNumber);
                    var repeatTime = 6000;
                    var repeatTime2 = repeatTime / 6;
    
                    for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                        var color = [ 0 , 0 , 0 ];
                        nowTime[2] = ( nowTime[0] + repeatTime / 12 * ( i % 12 ) ) % repeatTime;
                        if ( nowTime[2] < repeatTime2 * 1 ) {
                            color[0] = 255;
                            color[1] = 255 / repeatTime2 * nowTime[2];
                        } else if ( nowTime[2] < repeatTime2 * 2 ) {
                            color[1] = 255;
                            color[0] = 255 - 255 / repeatTime2 * ( nowTime[2] - repeatTime2 );
                        } else if ( nowTime[2] < repeatTime2 * 3 ) {
                            color[1] = 255;
                            color[2] = 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 2 );
                        } else if ( nowTime[2] < repeatTime2 * 4 ) {
                            color[2] = 255;
                            color[1] = 255 - 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 3 );
                        } else if ( nowTime[2] < repeatTime2 * 5 ) {
                            color[2] = 255;
                            color[0] = 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 4 );
                        } else {
                            color[0] = 255;
                            color[2] = 255 - 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 5 );
                        }
    
                        logoboardLightAnimateChange(i,color[0],color[1],color[2],-1);
                    }
                }
            } else if ( key === 'r' ) {
                waterCurtain("A");
            } else if ( key === 's' ) {
                waterCurtain("B");
            }
        }
        
        if ( subNowPage === 2 ) {

            if ( code === 112 ) { //f1
                let startTime = Date.now();
                let fadeTime = 1000;

                spotLightChange(1,fadeTime,startTime,spotLightAct);
                stageLightChange(1,fadeTime,startTime);
                audienceLightChange(0,fadeTime,startTime);

            } else if ( code === 113 ) { //f2
                let startTime = Date.now();
                var parLightSetInterval = setInterval(parLightNumber1);

                function parLightNumber1() {
                    let fadeTime = 2000;
                    var nowTime = nowTimeGet(startTime,fadeTime);
                    for ( var i = 1 ; i <= 8 ; i++ ) {
                        if ( i % 2 === 1 ) {
                            parLightColorFadeChange(i,0,255,255,nowTime[0],fadeTime,parLightSetInterval);
                        } else {
                            parLightColorFadeChange(i,255,255,0,nowTime[0],fadeTime,parLightSetInterval);
                        }                    
                    }
                }

            } else if ( code === 114 ) { //f3
                let startTime = Date.now();
                let parLightMyNumber = parLightSetting();
                var parLightSetInterval = setInterval(parLightNumber1);

                function parLightNumber1() {
                    var nowTime = nowTimeGet(startTime,0);
                    var repeatTime = 6000;
                    var repeatTime2 = repeatTime / 6;
                    for ( var i = 1 ; i <= 8 ; i++ ) {
                        var color = [ 0 , 0 , 0 ];
                        nowTime[2] = ( nowTime[1] + repeatTime / 8 * i ) % repeatTime;
                        if ( nowTime[2] < repeatTime2 * 1 ) {
                            color[0] = 255;
                            color[1] = 255 / repeatTime2 * nowTime[2];
                        } else if ( nowTime[2] < repeatTime2 * 2 ) {
                            color[1] = 255;
                            color[0] = 255 - 255 / repeatTime2 * ( nowTime[2] - repeatTime2 );
                        } else if ( nowTime[2] < repeatTime2 * 3 ) {
                            color[1] = 255;
                            color[2] = 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 2 );
                        } else if ( nowTime[2] < repeatTime2 * 4 ) {
                            color[2] = 255;
                            color[1] = 255 - 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 3 );
                        } else if ( nowTime[2] < repeatTime2 * 5 ) {
                            color[2] = 255;
                            color[0] = 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 4 );
                        } else {
                            color[0] = 255;
                            color[2] = 255 - 255 / repeatTime2 * ( nowTime[2] - repeatTime2 * 5 );
                        }

                        parLightColorChange(i,color[0],color[1],color[2],parLightMyNumber,parLightSetInterval);                  
                    }
                }
            }
        }
    }
});





