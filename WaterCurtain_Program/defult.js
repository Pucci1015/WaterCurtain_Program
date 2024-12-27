document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect !== -1 ) {
        if ( key === 'a' ) {
            let startTime = Date.now();

            waterCurtain("A");

            let ledMyNumber = ledSetting();
            let ledSetInterval = setInterval(ledNumber0);

            function ledNumber0() {
                let fadeTime = 3000;
                let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber , ledSetInterval , ledMyNumber );

                for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                    ledColorChange(1,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                }

                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                    ledColorChange(2,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                }
            }

            movingLightOFF();

            let waterLightMyNumber = waterLightSetting();
            let waterLightSetInterval = setInterval(waterLightNumber0);

            function waterLightNumber0() {
                let fadeTime = 3200;
                let nowTime = nowTimeGet( startTime , fadeTime , waterLightUseNumber , waterLightSetInterval , waterLightMyNumber );

                for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                    waterLightColorChange(i,0,0,0,nowTime[0],fadeTime);
                }
            }
            
        } else if ( key === 'b' ) {
            let startTime = Date.now();

            waterCurtain("A");

            let ledMyNumber = ledSetting();
            let ledSetInterval = setInterval(ledNumber0);

            function ledNumber0() {
                let fadeTime = 3000;
                let nowTime = nowTimeGet( startTime , fadeTime , ledUseNumber , ledSetInterval , ledMyNumber );

                for ( var i = 1 ; i <= ledNumberInside ; i++ ) {
                    ledColorChange(1,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                }

                for ( var i = 1 ; i <= ledNumberOutside ; i++ ) {
                    ledColorChange(2,i,0,0,0,nowTime[0],fadeTime,0,ledSetInterval);
                }
            }

        } else if ( key === 'c' ) {
            let startTime = Date.now();

            let waterLightMyNumber = waterLightSetting();
            let waterLightSetInterval = setInterval(waterLightNumber0);

            function waterLightNumber0() {
                let fadeTime = 3200;
                let nowTime = nowTimeGet( startTime , fadeTime , waterLightUseNumber , waterLightSetInterval , waterLightMyNumber );

                for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                    waterLightColorChange(i,0,0,0,nowTime[0],fadeTime);
                }
            }

        } else if ( key === 'd' ) {
            movingLightOFF();

        } else if ( key === 'e' ) {
            let startTime = Date.now();

            waterCurtain("A",0);

            let ledMyNumber = ledSetting();
            let ledSetInterval = setInterval(ledNumber5);

            function ledNumber5() {
                let fadeTime = ledNow10FadeTime;//1600;
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

        } else if ( key === '0' ) {
            let startTime = Date.now();
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber0);
            
            function waterCannonNumber0() {
                let nowTime = nowTimeGet(startTime,0,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                    waterCannonJet(i,0,waterCannonMyNumber);
                    waterCannonColorChange(i,0,0,0);
                    waterCannonAngleChange(i,0,1000,nowTime[0]);
                }

                if ( nowTime[0] >= 10000 ) {
                    waterCannonOFF();
                    clearInterval(waterCannonSetInterval);
                }
            }
        } else if ( key === '1' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 1000;
            let waterCannonJetTime = 1500;
            let waterCannonDelayTime = 2000;
            let waterCannonMyNumber = waterCannonSetting();
            
            let waterCannonSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime,waterCannonAngleFadeTime + waterCannonJetTime,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                    if ( nowTime[0] - waterCannonDelayTime * ( i - 1 ) < 0 ) {

                    } else if ( nowTime[0] - waterCannonDelayTime * ( i - 1 ) < waterCannonAngleFadeTime ) {
                        waterCannonAngleChange(i,30,waterCannonAngleFadeTime,nowTime[0] - waterCannonDelayTime * ( i - 1 ));
                        waterCannonColorChange(i,255,255,255);
                    } else if ( nowTime[0] - waterCannonDelayTime * ( i - 1 ) < waterCannonAngleFadeTime + waterCannonJetTime ) {
                        waterCannonJet(i,0.2,waterCannonMyNumber);
                    } else if ( nowTime[0] - waterCannonDelayTime * ( i - 1 ) < waterCannonAngleFadeTime * 2 + waterCannonJetTime ) {
                        waterCannonJet(i,0,waterCannonMyNumber);
                        waterCannonAngleChange(i,30 - 30 / waterCannonAngleFadeTime * ( nowTime[1] - waterCannonDelayTime * ( i - 1 ) ));
                        waterCannonColorChange(i,0,0,0);
                    } else if ( i === waterCannonLightNumber ) {
                        waterCannonOFF();
                        clearInterval(waterCannonSetInterval);
                    }
                }
            });

        } else if ( key === '2' ) {
            let startTime = Date.now();
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber2);
            
            function waterCannonNumber2() {
                let waterCannonColorFadeTime = 500;
                let nowTime = nowTimeGet(startTime,waterCannonColorFadeTime,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);
                
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ){
                    if ( nowTime[0] >= 18800 ) {
                        break;
                    } else if ( nowTime[0] >= 17300 ) {
                        nowTime[1] = 17300;
                    }

                    let j = waterCannonLightNumber - i;
                    let waterCannonColor = [];
                    let waterCannonBasicColor = [ [ 230 , 255 , 0 ] , [ 0 , 255 , 0 ] , [ 0 , 255 , 130 ] ];
                    let waterCannonColorRepeatTime = 3000;
                    let waterCannonColorRepeatTimeSplit = waterCannonColorRepeatTime / 3;
                    let waterCannonColorJudgeTime = ( nowTime[1] + waterCannonColorRepeatTime / 6 * j ) % waterCannonColorRepeatTime;

                    for ( var l = 0 ; l < 3 ; l++ ) {
                        if ( waterCannonColorJudgeTime < waterCannonColorRepeatTimeSplit * ( l + 1 ) ) {
                            for ( var k = 0 ; k < 3 ; k++ ) waterCannonColor[k] = waterCannonBasicColor[l][k] + ( waterCannonBasicColor[ ( l + 1 ) % 3 ][k] - waterCannonBasicColor[l][k] ) / waterCannonColorRepeatTimeSplit * ( waterCannonColorJudgeTime - waterCannonColorRepeatTimeSplit * l );
                            break;
                        }
                    }

                    if ( nowTime[0] < waterCannonColorFadeTime ) {
                        for ( var k = 0 ; k < 3 ; k++ ) waterCannonColor[k] = waterCannonColor[k] / waterCannonColorFadeTime * nowTime[0];
                    } else if ( nowTime[0] >= 17300 && nowTime[0] < 18800 ) {
                        for ( var k = 0 ; k < 3 ; k++ ) waterCannonColor[k] = waterCannonColor[k] - waterCannonColor[k] / 1500 * ( nowTime[0] - 17300 );
                    }
                        
                    waterCannonColorChange(i,waterCannonColor[0],waterCannonColor[1],waterCannonColor[2]);
                }

                let waterCannonAngleFadeTime = 3000;
                let waterCannonAngleRepeatTime = 3300;
                let waterCannonAngleFadeOutTime = 3500;

                if ( nowTime[0] < waterCannonAngleFadeTime ) {
                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        waterCannonAngleChange(i,60,waterCannonAngleFadeTime,nowTime[0]);
                    }
                } else if ( nowTime[0] < waterCannonAngleFadeTime + waterCannonAngleRepeatTime * 3 ) {
                    let waterCannonAngleRepeatTimeSplit = waterCannonAngleRepeatTime / 2;
                    let waterCannonNowAngle;
                    nowTime[2] = nowTime[0] - waterCannonAngleFadeTime;

                    if ( nowTime[2] % waterCannonAngleRepeatTime < waterCannonAngleRepeatTimeSplit ) {
                        waterCannonNowAngle = 60 - 30 / waterCannonAngleRepeatTimeSplit * ( nowTime[2] % waterCannonAngleRepeatTime );
                    } else {
                        waterCannonNowAngle = 30 + 30 / waterCannonAngleRepeatTimeSplit * ( nowTime[2] % waterCannonAngleRepeatTime - waterCannonAngleRepeatTimeSplit );
                    }

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        waterCannonAngleChange(i,waterCannonNowAngle);
                    }
                } else if ( nowTime[0] < waterCannonAngleFadeTime + waterCannonAngleRepeatTime * 3 + waterCannonAngleFadeOutTime ) {
                    nowTime[3] = nowTime[0] - waterCannonAngleFadeTime - waterCannonAngleRepeatTime * 3;

                    let waterCannonNowAngle = 60 - 30 / waterCannonAngleFadeOutTime * nowTime[3];

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        waterCannonAngleChange(i,waterCannonNowAngle);
                    }
                } else if ( nowTime[0] >= 19000 && nowTime[0] < 19300 ) {
                    nowTime[4] = nowTime[0] - 19000;

                    let waterCannonNowAngle = 30 - 30 / 300 * nowTime[4];

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        waterCannonAngleChange(i,waterCannonNowAngle);
                    }
                } else if ( nowTime[0] >= 19300 ) {
                    clearInterval(waterCannonSetInterval);
                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ){
                    waterCannonJet(i,1,waterCannonMyNumber);
                }
            },2600);

            waterCannonSetTimeout[1] = setTimeout( function() {
                let cannonStartTime = Date.now();
                let jetSetInterval = setInterval( function() {
                    let nowTime = nowTimeGet(cannonStartTime,0);
                    if ( nowTime[0] < 1000 ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ){
                            waterCannonJet(i,1 - nowTime[0] / 1000,waterCannonMyNumber);
                        }
                    } else {                        
                        waterCannonOFF();
                        clearInterval(jetSetInterval);
                    }                    
                });
            },17400);

        } else if ( key === '3' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 9300;
            let waterCannonColorFadeTime = 1000;
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber3);
            
            function waterCannonNumber3() {
                let nowTime = nowTimeGet(startTime,0,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                let waterCannonColorStrength = 255 / waterCannonColorFadeTime * nowTime[0];

                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {

                    if ( nowTime[0] < waterCannonColorFadeTime ) {
                        if ( ( i <= 12 && i % 2 === 1 ) || ( i >= 13 && i % 2 === 0 ) ) waterCannonColorChange(i,waterCannonColorStrength,0,waterCannonColorStrength);
                        else waterCannonColorChange(i,waterCannonColorStrength,waterCannonColorStrength,0);
                    }

                    if ( nowTime[0] < waterCannonAngleFadeTime ) waterCannonAngleChange(i,80,waterCannonAngleFadeTime,nowTime[0]);
                    else clearInterval(waterCannonSetInterval);

                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonJet(i,0.8,waterCannonMyNumber);
            },3300);

            waterCannonSetTimeout[1] = setTimeout( function() {
                let waterCannonJetFadeOutTime = 2200;
                let waterCannonAngleFadeOutTime = 7000;

                let jetSetInterval1 = setInterval( function() {
                    nowTime = nowTimeGet(startTime+20500,0);

                    let waterCannonJetStrength = 0.8 - 0.8 / waterCannonJetFadeOutTime * nowTime[0];
                    let waterCannonAngleStrength = 80 - 80 / waterCannonAngleFadeOutTime * nowTime[0];

                    if ( nowTime[0] >= waterCannonAngleFadeOutTime ) clearInterval(jetSetInterval1);

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {                        
                        if ( nowTime[0] < waterCannonJetFadeOutTime ) waterCannonJet(i,waterCannonJetStrength,waterCannonMyNumber);
                        waterCannonAngleChange(i,waterCannonAngleStrength);
                    }
                });
            },20500);

            waterCannonSetTimeout[2] = setTimeout( function() {
                let waterCannonColorFadeOutTime = 1500;

                let jetSetInterval2 = setInterval( function() {
                    nowTime = nowTimeGet(startTime+22700,0);

                    let waterCannonColorStrength = 255 - 255 / waterCannonColorFadeOutTime * nowTime[0];

                    if ( nowTime[0] >= waterCannonColorFadeOutTime ) {
                        waterCannonOFF();
                        clearInterval(jetSetInterval2);
                    }

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {                        
                        if ( ( i <= 12 && i % 2 === 1 ) || ( i >= 13 && i % 2 === 0 ) ) waterCannonColorChange(i,waterCannonColorStrength,0,waterCannonColorStrength);
                        else waterCannonColorChange(i,waterCannonColorStrength,waterCannonColorStrength,0);
                    }
                });
            },22700);

        } else if ( key === '4' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 4500;
            let jetFadeOutTime = 800;
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber4);

            for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonColorChange(i,0,0,0);
            
            function waterCannonNumber4() {
                let nowTime = nowTimeGet(startTime,waterCannonAngleFadeTime,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                if ( nowTime[0] < waterCannonAngleFadeTime ) {
                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        waterCannonAngleChange(i,90,waterCannonAngleFadeTime,nowTime[0]);
                        waterCannonColorChange(i,0,0,0);
                    }
                } else {
                    clearInterval(waterCannonSetInterval);
                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                clearInterval(waterCannonSetInterval);
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonColorChange(i,255,255,255);
            },waterCannonAngleFadeTime);

            waterCannonSetTimeout[1] = setTimeout( function() {
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonJet(i,0.8,waterCannonMyNumber);
            },5300);

            waterCannonSetTimeout[2] = setTimeout( function() {
                let cannonStartTime = Date.now();
                let jetSetInterval = setInterval( function() {
                    let nowTime = nowTimeGet(cannonStartTime,0);
                    if ( nowTime[0] < jetFadeOutTime ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                            waterCannonJet(i,0.8 - 0.8 / jetFadeOutTime * nowTime[0],waterCannonMyNumber);

                            let waterCannonColorNow = 255 - nowTime[0] / jetFadeOutTime * 255;
                            waterCannonColorChange(i,waterCannonColorNow,waterCannonColorNow,waterCannonColorNow);
                        }
                    } else {
                        clearInterval(jetSetInterval);
                    }                    
                });
            },6600);

            waterCannonSetTimeout[3] = setTimeout( function() {
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonColorChange(i,255,255,255);
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonJet(i,0.8,waterCannonMyNumber);
            },8700);

            waterCannonSetTimeout[4] = setTimeout( function() {
                let cannonStartTime = Date.now();
                let jetSetInterval = setInterval( function() {
                    let nowTime = nowTimeGet(cannonStartTime,0);
                    if ( nowTime[0] < jetFadeOutTime ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                            waterCannonJet(i,0.8 - 0.8 / jetFadeOutTime * nowTime[0],waterCannonMyNumber);

                            let waterCannonColorNow = 255 - nowTime[0] / jetFadeOutTime * 255;
                            waterCannonColorChange(i,waterCannonColorNow,waterCannonColorNow,waterCannonColorNow);
                        }
                    } else {
                        clearInterval(jetSetInterval);
                    }                    
                });
            },10000);

            waterCannonSetTimeout[5] = setTimeout( function() {
                let cannonStartTime = Date.now();
                let jetSetInterval = setInterval( function() {
                    let nowTime = nowTimeGet(cannonStartTime,0);
                    if ( nowTime[0] < 13000 ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonAngleChange(i,90 - 90 / 13000 * nowTime[0]);
                    } else {
                        waterCannonOFF();
                        clearInterval(jetSetInterval);
                    }                    
                });
            },11000);

        } else if ( key === '5' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 2500;//22500,800
            let waterCannonJetOutTime = 800;
            let waterCannonAngleFadeOutTime = 2500;
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber5);
            
            function waterCannonNumber5() {
                let nowTime = nowTimeGet(startTime,waterCannonAngleFadeTime,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                if ( nowTime[0] <= waterCannonAngleFadeTime ) {
                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        if ( i % 6 <= 1 && i <= 19 && i >= 6 ) {
                            waterCannonAngleChange(i,30,waterCannonAngleFadeTime,nowTime[0]);
                            waterCannonColorChange(i,0,150,255);
                        } else {
                            waterCannonAngleChange(i,0,waterCannonAngleFadeTime,nowTime[0]);
                            waterCannonColorChange(i,0,0,0);
                        }
                    }
                } else {
                    clearInterval(waterCannonSetInterval);
                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                clearInterval(waterCannonSetInterval);
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) if ( i % 6 <= 1 && i <= 19 && i >= 6 ) waterCannonJet(i,0.8,waterCannonMyNumber);
            },waterCannonAngleFadeTime);

            waterCannonSetTimeout[1] = setTimeout( function() {
                let cannonStartTime = Date.now();
                let jetSetInterval = setInterval( function() {
                    let nowTime = nowTimeGet(cannonStartTime,0);

                    let waterCannonColorNow = 1 - 1 / waterCannonJetOutTime * nowTime[0];
                    if ( nowTime[0] <= waterCannonJetOutTime ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                            if ( i % 6 <= 1 && i <= 19 && i >= 6 ) {
                                waterCannonJet(i,0.8 - 0.8 / waterCannonJetOutTime * nowTime[0],waterCannonMyNumber);
                                waterCannonColorChange(i,0,150*waterCannonColorNow,255*waterCannonColorNow);
                            }
                        }
                    } else {
                        clearInterval(jetSetInterval);
                    }
                });
            },24200);

            waterCannonSetTimeout[2] = setTimeout( function() {
                let cannonStartTime = Date.now();
                let jetSetInterval = setInterval( function() {
                    let nowTime = nowTimeGet(cannonStartTime,0);

                    if ( nowTime[0] <= waterCannonAngleFadeOutTime ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                            if ( i % 6 <= 1 && i <= 19 && i >= 6 ) {
                                waterCannonAngleChange(i,30 - 30 / waterCannonAngleFadeOutTime * nowTime[0]);
                            }
                        }
                    } else {
                        waterCannonOFF();
                        clearInterval(jetSetInterval);
                    }                    
                });
            },25000);

        } else if ( key === '6' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 2200;
            let waterCannonJetTime = 2400;
            let waterCannonRepeatTime = 7700;
            let waterCannonRepeatTimeSplit = waterCannonRepeatTime / waterCannonLightNumber;
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber6);
            
            function waterCannonNumber6() {
                let nowTime = nowTimeGet(startTime,waterCannonAngleFadeTime,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                if ( nowTime[0] < 1000 ) for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonColorChange(i,0,0,0);

                if ( nowTime[0] < waterCannonAngleFadeTime ) {
                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonAngleChange(i,75,waterCannonAngleFadeTime,nowTime[0]);
                } else {
                    clearInterval(waterCannonSetInterval);
                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                let waterCannonSetInterval2 = setInterval(waterCannonNumber6_2);
                let jetMany = [];
                for ( var i = 0 ; i < waterCannonLightNumber ; i++ ) {
                    jetMany[i] = 0;
                }

                function waterCannonNumber6_2() {
                    let nowTime = nowTimeGet(startTime+1500,waterCannonAngleFadeTime,waterCannonUseNumber,waterCannonSetInterval2,waterCannonMyNumber);
                    nowTime[2] = nowTime[0];
                    let waterCannonJudgeTime = nowTime[0] % waterCannonRepeatTime;

                    if ( nowTime[2] >= 18000 ) clearInterval(waterCannonSetInterval2);
                    
                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        let passing = 0;
                        let finishTime = ( waterCannonRepeatTimeSplit * i + waterCannonJetTime + 1000 ) % waterCannonRepeatTime;
                        if ( waterCannonRepeatTimeSplit * i > finishTime ) passing = 1;

                        if ( jetMany[i] <= 2 && ( ( waterCannonJudgeTime >= waterCannonRepeatTimeSplit * i && waterCannonJudgeTime < finishTime ) || ( passing === 1 && ( waterCannonJudgeTime >= waterCannonRepeatTimeSplit * i || waterCannonJudgeTime < finishTime ) ) ) ) {
                            let finishTime2 = ( waterCannonRepeatTimeSplit * i + waterCannonJetTime ) % waterCannonRepeatTime;
                            if ( !( waterCannonJudgeTime >= finishTime2 && waterCannonJudgeTime < finishTime || ( finishTime < finishTime2 && ( waterCannonJudgeTime >= finishTime2 || waterCannonJudgeTime < finishTime ) ) ) ) {
                                if ( !( i >= 21 && nowTime[2] >= 16480 ) ) waterCannonColorChange(i,0,150,255);
                                if ( !( passing === 1 && nowTime[0] < waterCannonRepeatTimeSplit * i ) ) waterCannonJet(i,1,waterCannonMyNumber);
                            } else {
                                if ( !( i >= 21 && jetMany[i] === 2 ) ) {
                                    let waterCannonColorFadeTime;
                                    if ( waterCannonJudgeTime < finishTime2 ) waterCannonColorFadeTime = 1 - 1 / 1000 * ( waterCannonJudgeTime + waterCannonRepeatTime - finishTime2 );
                                    else waterCannonColorFadeTime = 1 - 1 / 1000 * ( waterCannonJudgeTime - finishTime2 );
                                    waterCannonColorChange(i,0,150*waterCannonColorFadeTime,255*waterCannonColorFadeTime);
                                }

                                waterCannonJet(i,0,waterCannonMyNumber);
                            }
                        } else {
                            jetMany[i] = Math.trunc( nowTime[2] / waterCannonRepeatTime ) + 1;
                            waterCannonColorChange(i,0,0,0);
                            waterCannonJet(i,0,waterCannonMyNumber);
                        }

                        if ( i >= 21 && nowTime[2] >= 16480 && nowTime[2] < 17480 ) {
                            let waterCannonColorFadeTime = 1 - 1 / 1000 * ( nowTime[2] - 16480 );
                            waterCannonColorChange(i,0,150*waterCannonColorFadeTime,255*waterCannonColorFadeTime);
                        }
                    }
                };
            },1500);

            waterCannonSetTimeout[1] = setTimeout( function() {
                let waterCannonSetInterval3 = setInterval(waterCannonNumber6_3);
            
                function waterCannonNumber6_3() {
                    let nowTime = nowTimeGet(startTime+19500,0,waterCannonUseNumber,waterCannonSetInterval3,waterCannonMyNumber);

                    if ( nowTime[0] < 8800 ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonAngleChange(i,75 - 75 / 8800 * nowTime[0]);
                    } else {
                        waterCannonOFF();
                        clearInterval(waterCannonSetInterval3);
                    }
                }
            },19500);

        } else if ( key === '7' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 1300;
            let waterCannonAngleFadeOutTime = 9000;
            let jetFadeOutTime = 800;
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber7);

            for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonColorChange(i,0,0,0);
            
            function waterCannonNumber7() {
                let nowTime = nowTimeGet(startTime,waterCannonAngleFadeTime,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                if ( nowTime[0] < waterCannonAngleFadeTime ) {
                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                        waterCannonAngleChange(i,90,waterCannonAngleFadeTime,nowTime[0]);
                        waterCannonColorChange(i,255,255,255);
                    }
                } else {
                    clearInterval(waterCannonSetInterval);
                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                clearInterval(waterCannonSetInterval);
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonJet(i,0.3,waterCannonMyNumber);
            },waterCannonAngleFadeTime);

            waterCannonSetTimeout[1] = setTimeout( function() {
                let cannonStartTime = Date.now();

                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                    waterCannonJet(i,0,waterCannonMyNumber);
                    waterCannonColorChange(i,0,0,0);
                }

                let jetSetInterval = setInterval( function() {
                    let nowTime = nowTimeGet(cannonStartTime,0);

                    if ( nowTime[0] < waterCannonAngleFadeOutTime ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {
                            waterCannonAngleChange(i,90 - 90 / waterCannonAngleFadeOutTime * nowTime[0]);
                        }
                    } else {
                        waterCannonOFF();
                        clearInterval(jetSetInterval);
                    }
                });
            },15300);

        } else if ( key === '8' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 11900;
            let waterCannonColorFadeTime = 800;
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber8);
            
            function waterCannonNumber8() {
                let nowTime = nowTimeGet(startTime,0,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                let waterCannonColorStrength = 255 / waterCannonColorFadeTime * nowTime[0];

                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {

                    if ( nowTime[0] <= waterCannonColorFadeTime ) {
                        waterCannonColorChange(i,waterCannonColorStrength,waterCannonColorStrength,waterCannonColorStrength);
                    }

                    if ( nowTime[0] <= waterCannonAngleFadeTime ) waterCannonAngleChange(i,70,waterCannonAngleFadeTime,nowTime[0]);
                    else clearInterval(waterCannonSetInterval);

                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonJet(i,1,waterCannonMyNumber);
            },5000);

            waterCannonSetTimeout[1] = setTimeout( function() {
                let waterCannonColorFadeOutTime = 1500;

                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonJet(i,0,waterCannonMyNumber);

                let jetSetInterval1 = setInterval( function() {
                    nowTime = nowTimeGet(startTime+20000,0);

                    let waterCannonColorStrength = 255 - 255 / waterCannonColorFadeOutTime * nowTime[0];

                    if ( nowTime[0] <= waterCannonColorFadeOutTime ) {
                        for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonColorChange(i,waterCannonColorStrength,waterCannonColorStrength,waterCannonColorStrength);
                    } else {
                        clearInterval(jetSetInterval1);
                    }

                });
            },20000);

            waterCannonSetTimeout[2] = setTimeout( function() {
                let waterCannonAngleFadeOutTime = 6500;

                let jetSetInterval1 = setInterval( function() {
                    nowTime = nowTimeGet(startTime+21500,0);

                    let waterCannonAngleStrength = 70 - 70 / waterCannonAngleFadeOutTime * nowTime[0];

                    if ( nowTime[0] > waterCannonAngleFadeOutTime ) {
                        waterCannonOFF();
                        clearInterval(jetSetInterval1);
                    }

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {      
                        waterCannonAngleChange(i,waterCannonAngleStrength);
                    }
                });
            },21500);

        } else if ( key === '9' ) {
            let startTime = Date.now();
            let waterCannonAngleFadeTime = 9300;
            let waterCannonColorFadeTime = 1000;
            let waterCannonMyNumber = waterCannonSetting();
            let waterCannonSetInterval = setInterval(waterCannonNumber3);
            
            function waterCannonNumber3() {
                let nowTime = nowTimeGet(startTime,0,waterCannonUseNumber,waterCannonSetInterval,waterCannonMyNumber);

                let waterCannonColorStrength = 255 / waterCannonColorFadeTime * nowTime[0];

                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {

                    if ( nowTime[0] < waterCannonColorFadeTime ) {
                        waterCannonColorChange(i,waterCannonColorStrength,waterCannonColorStrength,waterCannonColorStrength);
                    }

                    if ( nowTime[0] < waterCannonAngleFadeTime ) waterCannonAngleChange(i,80,waterCannonAngleFadeTime,nowTime[0]);
                    else clearInterval(waterCannonSetInterval);

                }
            }

            waterCannonSetTimeout[0] = setTimeout( function() {
                for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) waterCannonJet(i,0.8,waterCannonMyNumber);
            },3300);

            waterCannonSetTimeout[1] = setTimeout( function() {
                let waterCannonJetFadeOutTime = 2200;
                let waterCannonAngleFadeOutTime = 7000;

                let jetSetInterval1 = setInterval( function() {
                    nowTime = nowTimeGet(startTime+20500,0);

                    let waterCannonJetStrength = 0.8 - 0.8 / waterCannonJetFadeOutTime * nowTime[0];
                    let waterCannonAngleStrength = 80 - 80 / waterCannonAngleFadeOutTime * nowTime[0];

                    if ( nowTime[0] >= waterCannonAngleFadeOutTime ) clearInterval(jetSetInterval1);

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {                        
                        if ( nowTime[0] < waterCannonJetFadeOutTime ) waterCannonJet(i,waterCannonJetStrength,waterCannonMyNumber);
                        waterCannonAngleChange(i,waterCannonAngleStrength);
                    }
                });
            },20500);

            waterCannonSetTimeout[2] = setTimeout( function() {
                let waterCannonColorFadeOutTime = 1500;

                let jetSetInterval2 = setInterval( function() {
                    nowTime = nowTimeGet(startTime+22700,0);

                    let waterCannonColorStrength = 255 - 255 / waterCannonColorFadeOutTime * nowTime[0];

                    if ( nowTime[0] >= waterCannonColorFadeOutTime ) {
                        waterCannonOFF();
                        clearInterval(jetSetInterval2);
                    }

                    for ( var i = 1 ; i <= waterCannonLightNumber ; i++ ) {                        
                        waterCannonColorChange(i,waterCannonColorStrength,waterCannonColorStrength,waterCannonColorStrength);
                    }
                });
            },22700);

        }

        if ( subCode === 0 ) { //Esc
            let startTime = Date.now();

            spotLightChange(0,1300,startTime);

            var parLightSetInterval = setInterval(parLightNumber0);

            function parLightNumber0() {
                let fadeTime = 2000;
                var nowTime = nowTimeGet(startTime,fadeTime);
                for ( var i = 1 ; i <= 10 ; i++ ) {
                    parLightColorFadeChange(i,0,0,0,nowTime[0],fadeTime,parLightSetInterval);
                }
            }

            stageLightChange(0,1800,startTime);
            
            logoboardLightOFF(2300);

        } else if ( subCode === 1 ) { //f1
            let startTime = Date.now();
            let fadeTime = 4200;
            
            if ( audienceLightStrength > 0 ) audienceON = 0;
            else audienceON = 1;

            audienceLightChange(audienceON,fadeTime,startTime);

        } else if ( subCode === 2 ) { //f2
            let startTime = Date.now();
            let fadeTime = 1800;

            if ( stageLightStrength > 0 ) stageON = 0;
            else stageON = 1;

            stageLightChange(stageON,fadeTime,startTime);

        } else if ( subCode === 3 ) { //f3
            let startTime = Date.now();
            let fadeTime = 1300;
            
            if ( spotLightShadowStrength > 0 ) spotON = 0;
            else spotON = 1;

            spotLightChange(spotON,fadeTime,startTime);

        } else if ( subCode === 4 ) { //f4
            let startTime = Date.now();

            let spotLightFadeTime = 1300;
            spotLightChange(0,spotLightFadeTime,startTime);

            var parLightSetInterval = setInterval(parLightNumber0);

            function parLightNumber0() {
                let fadeTime = 2000;
                var nowTime = nowTimeGet(startTime,fadeTime);
                for ( var i = 1 ; i <= 10 ; i++ ) {
                    parLightColorFadeChange(i,0,0,0,nowTime[0],fadeTime,parLightSetInterval);
                }
            }

        } else if ( subCode === 5 ) { //f5
            logoboardLightOFF(2300);

        }   
        
    }
});