function waterCurtain(waterCurtainNumber,sustainable = 1) {

    if ( sustainable === 1 ) {
        for ( var i = 0 ; i < waterCurtainActualSetTimeout.length ; i++ ) {
            clearTimeout(waterCurtainActualSetTimeout[i]);
        }
        waterCurtainActualSetTimeout = [];
    }

    if ( waterCurtainNumber === 'A' ) {
        let waterCurtainMyNumber = waterCurtainSetting(0);

    } else if ( waterCurtainNumber === 'B' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 4;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainMyNumber = waterCurtainSetting(16);

        function waterCurtainCountDown1(displayon,waterCurtainCountDownNumber,waterCurtainDeg = 0,waterCurtainWidth = 0) {
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                if ( displayon === 1 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainCountDownNumber + i * 2,waterCurtainDeg + waterCurtainSpace * i,waterCurtainWidth);
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainCountDownNumber + i * 2,1);
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainCountDownNumber + i * 2,0);
                }
            }
        }

        function waterCurtainCountDown2(displayon,waterCurtainCountDownNumber,waterCurtainDeg = 0,waterCurtainWidth = 0) {
            for ( var i = 0 ; i < 2 ; i++ ) {
                if ( displayon === 1 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainCountDownNumber + i * 8,waterCurtainDeg + 180 * i,waterCurtainWidth);
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainCountDownNumber + i * 8,1);
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainCountDownNumber + i * 8,0);
                }
            }
        }

        waterCurtainSetTimeout[0] = setTimeout( function(){
            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+900,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                if ( nowTime[0] < 100 ) { //3
                    let waterCurtainWidth = 10 / 100 * nowTime[0];
                    waterCurtainCountDown1(1,0,15-waterCurtainWidth/2,waterCurtainWidth);
                } else if ( nowTime[0] < 150 ) {
                    waterCurtainCountDown1(1,0,10,2);
                    waterCurtainCountDown1(1,1,18,2);
                } else if ( nowTime[0] < 240 ) {
                    let waterCurtainWidth = 2 / 90 * ( nowTime[0] - 150 );
                    waterCurtainCountDown1(1,0,10+waterCurtainWidth,2);
                    waterCurtainCountDown1(0,1);
                } else if ( nowTime[0] < 290 ) {
                    waterCurtainCountDown1(1,0,12,5);
                } else if ( nowTime[0] < 380 ) {
                    let waterCurtainWidth = 2 - 2 / 90 * ( nowTime[0] - 290 );
                    waterCurtainCountDown1(1,0,10+waterCurtainWidth,2);
                } else if ( nowTime[0] < 430 ) {
                    waterCurtainCountDown1(1,0,10,2);
                    waterCurtainCountDown1(1,1,18,2);
                } else if ( nowTime[0] < 530 ) {
                    let waterCurtainWidth = 10 - 10 / 100 * ( nowTime[0] - 430 );
                    waterCurtainCountDown1(1,0,15-waterCurtainWidth/2,waterCurtainWidth);
                    waterCurtainCountDown1(0,1);
                } else if ( nowTime[0] < 1500 ) {
                    waterCurtainCountDown1(0,0);
                    waterCurtainCountDown1(0,1);
                } else if ( nowTime[0] < 1650 ) { // 2
                    waterCurtainCountDown1(1,0,10,10);
                } else if ( nowTime[0] < 1900 ) {
                    let waterCurtainDeg = 18 - 8 / 250 * ( nowTime[0] - 1650 );
                    waterCurtainCountDown1(1,0,waterCurtainDeg,2);
                } else if ( nowTime[0] < 1900 ) {
                    let waterCurtainDeg = 18 - 8 / 250 * ( nowTime[0] - 1650 );
                    waterCurtainCountDown1(1,0,waterCurtainDeg,2);
                } else if ( nowTime[0] < 2060 ) {
                    let waterCurtainDeg = 5 / 160 * ( nowTime[0] - 1900 );
                    let waterCurtainWidth;
                    if ( waterCurtainDeg > 3 ) waterCurtainWidth = 2 - ( waterCurtainDeg - 3 );
                    else waterCurtainWidth = 2;
                    waterCurtainCountDown1(1,0,10+waterCurtainDeg,waterCurtainWidth);
                    waterCurtainCountDown1(1,1,20-waterCurtainDeg,-1 * waterCurtainWidth);
                } else if ( nowTime[0] < 2970 ) {
                    waterCurtainCountDown1(0,0);
                    waterCurtainCountDown1(0,1);
                } else if ( nowTime[0] < 3450 ) { //1
                    waterCurtainCountDown1(1,0,14,2);
                } else if ( nowTime[0] < 3540 ) {
                    waterCurtainCountDown1(1,0,14,2);
                    let waterCurtainDeg = 4 / 90 * ( nowTime[0] - 3450 );
                    let waterCurtainWidth;
                    if ( waterCurtainDeg < 2 ) waterCurtainWidth = 2 - waterCurtainDeg;
                    else waterCurtainWidth = 2;
                    waterCurtainCountDown1(1,1,18-waterCurtainDeg,waterCurtainWidth);
                } else if ( nowTime[0] < 4500 ) {
                    waterCurtainCountDown1(0,0);
                    waterCurtainCountDown1(0,1);
                } else if ( nowTime[0] < 4770 ) { //0
                    let waterCurtainDeg = 5 / 270 * ( nowTime[0] - 4500 );
                    let waterCurtainWidth;
                    if ( waterCurtainDeg < 2 ) waterCurtainWidth = 2 - ( 2 - waterCurtainDeg );
                    else waterCurtainWidth = 2;
                    waterCurtainCountDown1(1,0,15-waterCurtainDeg,waterCurtainWidth);
                    waterCurtainCountDown1(1,1,15+waterCurtainDeg,waterCurtainWidth);
                } else if ( nowTime[0] < 5040 ) {
                    let waterCurtainDeg = 5 - 5 / 270 * ( nowTime[0] - 4770 );
                    let waterCurtainWidth;
                    if ( waterCurtainDeg < 2 ) waterCurtainWidth = 2 - ( 2 - waterCurtainDeg );
                    else waterCurtainWidth = 2;
                    waterCurtainCountDown1(1,0,15-waterCurtainDeg,waterCurtainWidth);
                    waterCurtainCountDown1(1,1,15+waterCurtainDeg,waterCurtainWidth);
                } else if ( nowTime[0] < 5740 ) {
                    waterCurtainCountDown1(0,0);
                    waterCurtainCountDown1(0,1);
                } else { //STRAT
                    if ( nowTime[0] < 5830 ) { //S
                        waterCurtainCountDown2(1,0,148,12);
                    } else if ( nowTime[0] < 5970 ) {
                        let waterCurtainDeg = 2 / 140 * ( nowTime[0] - 5830 );
                        waterCurtainCountDown2(1,0,148-waterCurtainDeg,2);
                        waterCurtainCountDown2(1,1,162+waterCurtainDeg,2);
                    } else if ( nowTime[0] < 6290 ) {
                        let waterCurtainDeg = 16 / 320 * ( nowTime[0] - 5830 );
                        waterCurtainCountDown2(1,0,146+waterCurtainDeg,2);
                        waterCurtainCountDown2(0,1);
                    } else if ( nowTime[0] < 6340 ) {
                        waterCurtainCountDown2(1,0,146,2);
                        waterCurtainCountDown2(1,1,162,2);
                    } else if ( nowTime[0] < 6370 ) {
                        waterCurtainCountDown2(1,0,146,18);
                        waterCurtainCountDown2(0,1);
                    } else {
                        waterCurtainCountDown2(1,0);
                        waterCurtainCountDown2(0,1);
                    }

                    if ( nowTime[0] < 6300 ) { //T
                        waterCurtainCountDown2(1,2,134,2);
                    } else if ( nowTime[0] < 6370 ) {
                        waterCurtainCountDown2(1,2,126,18);
                    } else {
                        waterCurtainCountDown2(0,2);
                    }

                    if ( nowTime[0] < 5810 ) { //R
                        waterCurtainCountDown2(1,3,106,2);
                        waterCurtainCountDown2(1,4,122,2);
                    } else if ( nowTime[0] < 6000 ) {
                        waterCurtainCountDown2(1,3,106,2);
                        let waterCurtainDeg = 8 / 190 * ( nowTime[0] - 5810 );
                        waterCurtainCountDown2(1,4,122-waterCurtainDeg,2);
                    } else if ( nowTime[0] < 6050 ) {
                        waterCurtainCountDown2(1,3,106,14);
                        waterCurtainCountDown2(0,4);
                    } else if ( nowTime[0] < 6320 ) {
                        waterCurtainCountDown2(1,3,106,2);
                        waterCurtainCountDown2(1,4,118,2);
                    } else if ( nowTime[0] < 6370 ) {
                        waterCurtainCountDown2(1,3,106,14);
                        waterCurtainCountDown2(0,4);
                    } else {
                        waterCurtainCountDown2(1,3);
                        waterCurtainCountDown2(0,4);
                    }

                    if ( nowTime[0] < 5810 ) { //A
                        waterCurtainCountDown2(1,3,106,2);
                        waterCurtainCountDown2(1,4,122,2);
                    } else if ( nowTime[0] < 6370 ) {
                        let waterCurtainDeg = 9 / 560 * ( nowTime[0] - 5810 );
                        let waterCurtainWidth;
                        if ( waterCurtainDeg < 7 ) waterCurtainWidth = 9 - waterCurtainDeg;
                        else waterCurtainWidth = 2;
                        waterCurtainCountDown2(1,5,86+waterCurtainDeg,waterCurtainWidth);
                        waterCurtainCountDown2(1,6,104-waterCurtainDeg,waterCurtainWidth);
                        if ( nowTime[0] >= 5900 && nowTime[0] > 5950 ) waterCurtainCountDown2(1,5,86+waterCurtainDeg,14-waterCurtainDeg*2);
                    } else {
                        waterCurtainCountDown2(1,5);
                        waterCurtainCountDown2(0,6);
                    }
                    
                    if ( nowTime[0] < 6300 ) { //T
                        waterCurtainCountDown2(1,7,74,2);
                    } else if ( nowTime[0] < 6370 ) {
                        waterCurtainCountDown2(1,7,66,18);
                    } else {
                        waterCurtainCountDown2(0,7);
                    }

                    if ( nowTime[0] >= 6400 ) clearInterval(waterCurtainSetInterval);
                }

            });
        },900);        
    } else if ( waterCurtainNumber === 'C' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 16;
        let waterCurtainLoopTime = 92000;
        let waterCurtainLapDeg = 362;
        let waterCurtainSpace = waterCurtainLapDeg / waterCurtainNumber;
        let waterCurtainRestDeg = waterCurtainLapDeg - 360;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
                let waterCurtainDeg = ( waterCurtainSpace * i + waterCurtainLapDeg / waterCurtainLoopTime * waterCurtainJudgeTime ) % waterCurtainLapDeg;
                let waterCurtainWidth = 10;

                if ( waterCurtainDeg > 360 ) {
                    waterCurtainWidth -= ( waterCurtainLapDeg - waterCurtainDeg );
                    waterCurtainDeg = 0;
                } else if ( waterCurtainDeg + waterCurtainWidth > waterCurtainLapDeg ) {
                    waterCurtainWidth -= waterCurtainRestDeg;
                } else if ( waterCurtainDeg + waterCurtainWidth > 360 ) {
                    waterCurtainWidth = 360 - waterCurtainDeg;
                }

                waterCurtainChangeAngle(waterCurtainMyNumber,i,-1*waterCurtainDeg,-1*waterCurtainWidth);
            }

        });      

    } else if ( waterCurtainNumber === 'D' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 6;
        let waterCurtainLoopTime = 6000;
        let waterCurtainLapDeg = 365;
        let waterCurtainSpace = waterCurtainLapDeg / 6;
        let waterCurtainRestDeg = waterCurtainLapDeg - 360;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
                let waterCurtainDeg = ( 9 + waterCurtainSpace * i + waterCurtainLapDeg / waterCurtainLoopTime * waterCurtainJudgeTime ) % waterCurtainLapDeg;
                let waterCurtainWidth = 18;

                if ( waterCurtainDeg > 360 ) {
                    waterCurtainWidth -= ( waterCurtainLapDeg - waterCurtainDeg );
                    waterCurtainDeg = 0;
                } else if ( waterCurtainDeg + waterCurtainWidth > waterCurtainLapDeg ) {
                    waterCurtainWidth -= waterCurtainRestDeg;
                } else if ( waterCurtainDeg + waterCurtainWidth > 360 ) {
                    waterCurtainWidth = 360 - waterCurtainDeg;
                }

                waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainDeg,waterCurtainWidth);
            }

        });      

    } else if ( waterCurtainNumber === 'E' ) {
        let waterCurtainMyNumber = waterCurtainSetting(1);

        setTimeout( function(){
            waterCurtainChangeAngle(waterCurtainMyNumber,0,0,360);
            waterCurtainDisplay(waterCurtainMyNumber,0,1);
        },10);

    } else if ( waterCurtainNumber === 'F' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 8;
        let waterCurtainLoopTime = 31000;
        let waterCurtainLoopTimeSplit = [ 5500 , 3000 , 3000 , 3000 , 3000 , 3000 , 3000 , 3000 , 4500 ];
        let waterCurtainWidth = [ 16 , 16 , 16 , 9 , 6 , 9 , 16 , 16 , 16 ];
        let waterCurtainLapDeg = 365;
        let waterCurtainRestDeg = waterCurtainLapDeg - 360;
        let waterCurtainSpace = waterCurtainLapDeg / waterCurtainNumber;
        let waterCurtainDegSpeed = [ 86 , 90 , 120 , 315 , 710 , 315 , 120 , 90 , 70 ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var j = 0 ; j < 9 ; j++ ) {
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit[j] ) {
                    let waterCurtainTotalDeg = 0;
                    for ( var k = 0 ; k < j ; k++ ) waterCurtainTotalDeg += waterCurtainDegSpeed[k];


                    for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {

                        let waterCurtainDeg = ( 38 + waterCurtainSpace * i + waterCurtainTotalDeg + waterCurtainDegSpeed[j] / waterCurtainLoopTimeSplit[j] * waterCurtainJudgeTime ) % waterCurtainLapDeg;
                        let waterCurtainNowWidth = waterCurtainWidth[j];

                        if ( waterCurtainDeg > 360 ) {
                            waterCurtainNowWidth -= ( waterCurtainLapDeg - waterCurtainDeg );
                            waterCurtainDeg = 0;
                        } else if ( waterCurtainDeg + waterCurtainNowWidth > waterCurtainLapDeg ) {
                            waterCurtainNowWidth -= waterCurtainRestDeg;
                        } else if ( waterCurtainDeg + waterCurtainNowWidth > 360 ) {
                            waterCurtainNowWidth = 360 - waterCurtainDeg;
                        }

                        waterCurtainChangeAngle(waterCurtainMyNumber,i,-1*waterCurtainDeg,-1*waterCurtainNowWidth);
                        
                    }

                    break;
                } else {
                    waterCurtainJudgeTime -= waterCurtainLoopTimeSplit[j];
                }
            }
            
        });

    } else if ( waterCurtainNumber === 'G' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(4);
        let waterCurtainLoopTime = 4570;
        let waterCurtainBasicDeg = 20;

        for ( var i = 0 ; i < 4 ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasicDeg+180*Math.trunc(i/2),( (-1) ** (i+1) )*90);                    
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
        }

        waterCurtainSetTimeout[0] = setTimeout( function(){

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+3400,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                if ( nowTime[0] < waterCurtainLoopTime ) {
                    let waterCurtainDeg = 90 - 90 / waterCurtainLoopTime * nowTime[0];

                    waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasicDeg,-waterCurtainDeg);
                    waterCurtainChangeAngle(waterCurtainMyNumber,1,waterCurtainBasicDeg,waterCurtainDeg);
                    waterCurtainChangeAngle(waterCurtainMyNumber,2,waterCurtainBasicDeg+180,-waterCurtainDeg);
                    waterCurtainChangeAngle(waterCurtainMyNumber,3,waterCurtainBasicDeg+180,waterCurtainDeg);

                } else {
                    for ( var i = 0 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    clearInterval(waterCurtainSetInterval);
                }

            });
        },3400);

    } else if ( waterCurtainNumber === 'H' ) {
        let startTime = Date.now();
        let waterCurtainLapTime = 450;
        let waterCurtainLapTimeRest = 680;
        let waterCurtainNumber = 10;
        let waterCurtainSplitDeg = 36;
        let waterCurtainSplitWidth = 12;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber*2);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            let waterCurtainJudgeTime = nowTime[0] + waterCurtainLapTime / 2;

            let doubleON = Math.trunc( waterCurtainJudgeTime / waterCurtainLapTimeRest ) % 2;
            let doubleNextON = 1 - doubleON;
            waterCurtainJudgeTime %= waterCurtainLapTimeRest;

            for ( var j = 0 ; j < waterCurtainNumber ; j++ ) {
                let waterCurtainDeg = ( waterCurtainSplitDeg + waterCurtainSplitWidth ) / waterCurtainLapTimeRest * waterCurtainJudgeTime;
                let waterCurtainWidth = waterCurtainSplitWidth;

                if ( waterCurtainDeg < waterCurtainWidth ) {
                    waterCurtainWidth = waterCurtainDeg;
                    waterCurtainDeg = 0;
                } else if ( waterCurtainDeg - waterCurtainSplitDeg > 0 ) {
                    waterCurtainDeg -= waterCurtainSplitWidth;
                    waterCurtainWidth = waterCurtainSplitDeg - waterCurtainDeg;
                } else {
                    waterCurtainDeg -= waterCurtainSplitWidth;
                }

                if ( j % 2 === 1 ) {
                    waterCurtainDeg = waterCurtainSplitDeg - waterCurtainDeg;
                    waterCurtainWidth *= -1;
                }

                waterCurtainDeg += waterCurtainSplitDeg * j + 9;

                waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber * doubleON + j ,1);
                waterCurtainChangeAngle(waterCurtainMyNumber, waterCurtainNumber * doubleON + j ,waterCurtainDeg,waterCurtainWidth);

            }

            if ( waterCurtainJudgeTime >= waterCurtainLapTime ) {
                waterCurtainJudgeTime -= waterCurtainLapTime;

                for ( var j = 0 ; j < waterCurtainNumber ; j++ ) {
                    let waterCurtainDeg = ( waterCurtainSplitDeg + waterCurtainSplitWidth ) / waterCurtainLapTimeRest * waterCurtainJudgeTime;
                    let waterCurtainWidth = waterCurtainSplitWidth;

                    if ( waterCurtainDeg < waterCurtainWidth ) {
                        waterCurtainWidth = waterCurtainDeg;
                        waterCurtainDeg = 0;
                    } else if ( waterCurtainDeg - waterCurtainSplitDeg > 0 ) {
                        waterCurtainDeg -= waterCurtainSplitWidth;
                        waterCurtainWidth = waterCurtainSplitDeg - waterCurtainDeg;
                    } else {
                        waterCurtainDeg -= waterCurtainSplitWidth;
                    }

                    if ( j % 2 === 1 ) {
                        waterCurtainDeg = waterCurtainSplitDeg - waterCurtainDeg;
                        waterCurtainWidth *= -1;
                    }

                    waterCurtainDeg += waterCurtainSplitDeg * j + 9;

                    waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber * doubleNextON + j ,1);
                    waterCurtainChangeAngle(waterCurtainMyNumber, waterCurtainNumber * doubleNextON + j ,waterCurtainDeg,waterCurtainWidth);

                }
            } else {
                for ( var j = 0 ; j < waterCurtainNumber ; j++ ) waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber * doubleNextON + j ,0);
            }

        });

    } else if ( waterCurtainNumber === 'I' ) {
        let startTime = Date.now();
        let waterCurtainLoopTime = 5000;
        let waterCurtainLapDeg = 365;
        let waterCurtainBasic = 126;
        let waterCurtainRestDeg = waterCurtainLapDeg - 360;
        let waterCurtainMyNumber = waterCurtainSetting(1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            waterCurtainDisplay(waterCurtainMyNumber,0,1);

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
            let waterCurtainDeg = ( waterCurtainBasic - waterCurtainLapDeg / waterCurtainLoopTime * waterCurtainJudgeTime ) % waterCurtainLapDeg;
            let waterCurtainWidth = 20;

            if ( waterCurtainDeg <= -1 * waterCurtainRestDeg - waterCurtainWidth ) {
                waterCurtainDeg += waterCurtainRestDeg;
            } else if ( waterCurtainDeg <= -1 * waterCurtainRestDeg ) {
                waterCurtainWidth = waterCurtainWidth - waterCurtainRestDeg * ( ( waterCurtainDeg + waterCurtainRestDeg ) / waterCurtainWidth + 1 );
                waterCurtainDeg += waterCurtainRestDeg;
            } else if ( waterCurtainDeg <= 0 ) {
                waterCurtainWidth = waterCurtainWidth + waterCurtainDeg;
                waterCurtainDeg = 0;
            }

            waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth);

        });      

    } else if ( waterCurtainNumber === 'J' ) {
        let startTime = Date.now();
        let waterCurtainWidth = -140;
        let waterCurtainMyNumber = waterCurtainSetting(1);
        waterCurtainDisplay(waterCurtainMyNumber,0,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainLoopTime = 20000;
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
            let waterCurtainDeg = 360 / waterCurtainLoopTime * waterCurtainJudgeTime;

            waterCurtainChangeAngle(waterCurtainMyNumber,0,333 + waterCurtainDeg,waterCurtainWidth);

        });      

    } else if ( waterCurtainNumber === 'K' ) {
        let startTime = Date.now();
        let waterCurtainLoopTime = 500;
        let waterCurtainBasic = 18 * 16;
        let waterCurtainWidth = 45;
        let waterCurtainMyNumber = waterCurtainSetting(1);
        waterCurtainDisplay(waterCurtainMyNumber,0,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
            let waterCurtainDeg = waterCurtainBasic - 360 / waterCurtainLoopTime * waterCurtainJudgeTime;

            waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth);

        });      

    } else if ( waterCurtainNumber === 'L' ) {
        let startTime = Date.now();
        let waterCurtainOriginalLoopTime = 21000;
        let waterCurtainOriginalLoopTimeSplit = waterCurtainOriginalLoopTime / 3;
        let waterCurtainSetIntervalTime = 10;
        let waterCurtainMyNumber = waterCurtainSetting(388);

        waterCurtainSetTimeout[0] = setTimeout( function(){

            for ( var i = 28 ; i < 208 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,2 * ( i - 28 ),2);

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+400,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                let waterCurtainOriginalJudgeTime = nowTime[0] % waterCurtainOriginalLoopTime;

                if ( waterCurtainOriginalJudgeTime < waterCurtainOriginalLoopTimeSplit ) {
                    for ( var i = 8 ; i < 388 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);

                    waterCurtainSetIntervalTime = 10;

                    let waterCurtainNumber = 4;
                    let waterCurtainSplitWidth = 18;
                    let waterCurtainLapTime = 400;
                    let waterCurtainLapTimeRest = 480;
                    let waterCurtainSplitDeg = 360 / waterCurtainNumber;

                    let waterCurtainJudgeTime = waterCurtainOriginalJudgeTime + waterCurtainLapTime / 4 * 3;

                    let doubleON = Math.trunc( waterCurtainJudgeTime / waterCurtainLapTimeRest ) % 2;
                    let doubleNextON = 1 - doubleON;
                    waterCurtainJudgeTime %= waterCurtainLapTimeRest;

                    for ( var j = 0 ; j < waterCurtainNumber ; j++ ) {
                        let waterCurtainDeg = ( waterCurtainSplitDeg + waterCurtainSplitWidth ) / waterCurtainLapTimeRest * waterCurtainJudgeTime;
                        let waterCurtainWidth = waterCurtainSplitWidth;

                        if ( waterCurtainDeg < waterCurtainWidth ) {
                            waterCurtainWidth = waterCurtainDeg;
                            waterCurtainDeg = 0;
                        } else if ( waterCurtainDeg - waterCurtainSplitDeg > 0 ) {
                            waterCurtainDeg -= waterCurtainSplitWidth;
                            waterCurtainWidth = waterCurtainSplitDeg - waterCurtainDeg;
                        } else {
                            waterCurtainDeg -= waterCurtainSplitWidth;
                        }

                        if ( j % 2 === 1 ) {
                            waterCurtainDeg = waterCurtainSplitDeg - waterCurtainDeg;
                            waterCurtainWidth *= -1;
                        }

                        waterCurtainDeg += waterCurtainSplitDeg * j + 120;

                        waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber * doubleON + j ,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber, waterCurtainNumber * doubleON + j ,waterCurtainDeg,waterCurtainWidth);

                    }

                    if ( waterCurtainJudgeTime >= waterCurtainLapTime ) {
                        waterCurtainJudgeTime -= waterCurtainLapTime;

                        for ( var j = 0 ; j < waterCurtainNumber ; j++ ) {
                            let waterCurtainDeg = ( waterCurtainSplitDeg + waterCurtainSplitWidth ) / waterCurtainLapTimeRest * waterCurtainJudgeTime;
                            let waterCurtainWidth = waterCurtainSplitWidth;

                            if ( waterCurtainDeg < waterCurtainWidth ) {
                                waterCurtainWidth = waterCurtainDeg;
                                waterCurtainDeg = 0;
                            } else if ( waterCurtainDeg - waterCurtainSplitDeg > 0 ) {
                                waterCurtainDeg -= waterCurtainSplitWidth;
                                waterCurtainWidth = waterCurtainSplitDeg - waterCurtainDeg;
                            } else {
                                waterCurtainDeg -= waterCurtainSplitWidth;
                            }

                            if ( j % 2 === 1 ) {
                                waterCurtainDeg = waterCurtainSplitDeg - waterCurtainDeg;
                                waterCurtainWidth *= -1;
                            }

                            waterCurtainDeg += waterCurtainSplitDeg * j + 120;

                            waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber * doubleNextON + j ,1);
                            waterCurtainChangeAngle(waterCurtainMyNumber, waterCurtainNumber * doubleNextON + j ,waterCurtainDeg,waterCurtainWidth);

                        }
                    } else {
                        for ( var j = 0 ; j < waterCurtainNumber ; j++ ) waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber * doubleNextON + j ,0);
                    }
                } else if ( waterCurtainOriginalJudgeTime < waterCurtainOriginalLoopTimeSplit * 2 ) {
                    waterCurtainSetIntervalTime = 10;

                    let waterCurtainWidth = 0.5;
                    let waterCurtainNumber = 28;
                    let waterCurtainSpace = 360 / waterCurtainNumber;
                    let waterCurtainLoopTime = 250;
                    let waterCurtainLoopTimeSplit = 150;

                    let waterCurtainJudgeTime1 = ( waterCurtainOriginalJudgeTime - waterCurtainOriginalLoopTimeSplit ) % waterCurtainLoopTime;
                    let waterCurtainJudgeTime2 = Math.trunc( ( waterCurtainOriginalJudgeTime - waterCurtainOriginalLoopTimeSplit ) / waterCurtainLoopTime );

                    for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                        waterCurtainDisplay(waterCurtainMyNumber,i,1);

                        let waterCurtainDeg = 6 + waterCurtainSpace*i + waterCurtainJudgeTime2 * waterCurtainWidth;

                        if ( waterCurtainJudgeTime1 < waterCurtainLoopTimeSplit ) {
                            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainDeg,waterCurtainWidth);
                        } else {
                            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainDeg,waterCurtainWidth*2);
                        }

                    }

                } else {
                    waterCurtainSetIntervalTime = 50;

                    let waterCurtainWidth = 2;
                    let waterCurtainNumber = 360 / waterCurtainWidth;
                    let waterCurtainLoopTime = 1000;
                    let waterCurtainLoopTimeSplit = 50;
                    let waterCurtainArray = [ [ 4 , 1 , 6 , 4 , 6 , 4 , 3 , 2 , 0 , 2 , 3 , 4 , 1 , 0 , 9 , 8 , 1 , 7 , 9 , 7 ] , [ 1 , 9 , 4 , 9 , 3 , 2 , 2 , 0 , 7 , 7 , 5 , 1 , 3 , 9 , 8 , 0 , 5 , 8 , 5 , 1 ] , [ 0 , 8 , 9 , 9 , 5 , 3 , 2 , 1 , 8 , 9 , 3 , 1 , 2 , 8 , 3 , 3 , 0 , 1 , 3 , 1 ] , [ 4 , 5 , 2 , 2 , 8 , 0 , 0 , 2 , 4 , 9 , 2 , 4 , 4 , 2 , 7 , 8 , 6 , 8 , 8 , 4 ] , [ 1 , 4 , 1 , 7 , 2 , 1 , 3 , 0 , 9 , 0 , 2 , 9 , 7 , 6 , 4 , 6 , 3 , 2 , 6 , 5 ] , [ 0 , 0 , 6 , 5 , 4 , 3 , 3 , 5 , 5 , 5 , 9 , 7 , 8 , 4 , 5 , 4 , 6 , 2 , 5 , 5 ] , [ 8 , 8 , 5 , 6 , 9 , 8 , 9 , 2 , 8 , 0 , 8 , 2 , 2 , 9 , 8 , 3 , 9 , 7 , 0 , 7 ] , [ 4 , 6 , 7 , 0 , 3 , 9 , 0 , 6 , 0 , 6 , 5 , 7 , 1 , 3 , 4 , 8 , 9 , 5 , 3 , 3 ] , [ 3 , 7 , 4 , 2 , 8 , 7 , 2 , 3 , 9 , 1 , 9 , 9 , 1 , 2 , 0 , 6 , 6 , 6 , 5 , 6 ] , [ 5 , 6 , 4 , 6 , 0 , 3 , 3 , 5 , 6 , 1 , 9 , 2 , 1 , 7 , 1 , 8 , 0 , 0 , 9 , 2 ] , [ 0 , 5 , 3 , 6 , 8 , 1 , 4 , 9 , 0 , 4 , 2 , 5 , 8 , 0 , 4 , 3 , 3 , 6 , 6 , 8 ] , [ 0 , 3 , 6 , 9 , 4 , 8 , 1 , 4 , 5 , 0 , 4 , 6 , 7 , 9 , 2 , 4 , 9 , 2 , 9 , 8 ] , [ 7 , 8 , 1 , 9 , 5 , 6 , 9 , 3 , 9 , 3 , 3 , 0 , 4 , 8 , 9 , 8 , 6 , 8 , 3 , 3 ] , [ 8 , 5 , 3 , 2 , 9 , 5 , 3 , 8 , 1 , 1 , 5 , 8 , 9 , 7 , 2 , 3 , 4 , 3 , 4 , 5 ] , [ 9 , 2 , 3 , 3 , 9 , 2 , 8 , 1 , 5 , 1 , 4 , 3 , 1 , 5 , 4 , 2 , 8 , 0 , 8 , 0 ] , [ 6 , 4 , 5 , 6 , 6 , 1 , 7 , 7 , 5 , 3 , 7 , 4 , 2 , 0 , 4 , 5 , 1 , 3 , 5 , 5 ] , [ 2 , 3 , 7 , 8 , 1 , 2 , 7 , 5 , 7 , 0 , 1 , 9 , 4 , 6 , 0 , 5 , 2 , 3 , 9 , 2 ] , [ 6 , 8 , 7 , 8 , 9 , 9 , 3 , 3 , 5 , 1 , 1 , 2 , 2 , 3 , 4 , 4 , 3 , 0 , 1 , 0 ] , [ 0 , 2 , 2 , 8 , 1 , 2 , 8 , 4 , 0 , 3 , 2 , 5 , 8 , 0 , 2 , 1 , 4 , 7 , 7 , 8 ] , [ 9 , 7 , 4 , 7 , 4 , 6 , 2 , 2 , 1 , 7 , 4 , 9 , 5 , 4 , 4 , 0 , 1 , 1 , 2 , 3 ] , [ 5 , 3 , 8 , 2 , 9 , 2 , 6 , 6 , 1 , 2 , 6 , 8 , 7 , 4 , 3 , 3 , 1 , 3 , 3 , 5 ] , [ 9 , 1 , 7 , 9 , 7 , 8 , 7 , 9 , 6 , 2 , 3 , 1 , 9 , 3 , 0 , 1 , 5 , 3 , 5 , 6 ] , [ 0 , 5 , 6 , 6 , 6 , 7 , 9 , 7 , 1 , 8 , 9 , 7 , 6 , 3 , 1 , 1 , 3 , 2 , 3 , 6 ] , [ 7 , 9 , 7 , 1 , 6 , 6 , 9 , 3 , 0 , 1 , 4 , 9 , 0 , 2 , 4 , 8 , 4 , 9 , 5 , 4 ] , [ 2 , 1 , 5 , 3 , 8 , 7 , 6 , 8 , 9 , 5 , 8 , 0 , 5 , 1 , 9 , 1 , 7 , 9 , 5 , 9 ] ];

                    let waterCurtainJudgeTime = Math.trunc( ( waterCurtainOriginalJudgeTime - waterCurtainOriginalLoopTimeSplit * 2 ) % waterCurtainLoopTime / waterCurtainLoopTimeSplit );

                    for ( var i = 28 ; i < waterCurtainNumber + 28 ; i++ ) {
                        if ( waterCurtainArray[ i % 25 ][ waterCurtainJudgeTime ] < 6 ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                        else waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    }
                    
                }
            },waterCurtainSetIntervalTime);
        },400);        

    } else if ( waterCurtainNumber === 'M' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 4;
        let waterCurtainNumber = 43;
        let waterCurtainSpace = 8.4;
        let waterCurtainLoopTime = 300;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / 3;
        let waterCurtainSmallLoopTime = 60;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace*i,waterCurtainWidth);
            waterCurtainDisplay(waterCurtainMyNumber,i,0);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var l = 0 ; l < 3 ; l++ ) {
                if ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * l && waterCurtainJudgeTime < waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime ) {
                    for ( var k = 0 ; k < 15 ; k++ ) if ( k * 3 + l < waterCurtainNumber ) waterCurtainDisplay(waterCurtainMyNumber,k*3+l,1);
                } else {
                    for ( var k = 0 ; k < 15 ; k++ ) if ( k * 3 + l < waterCurtainNumber ) waterCurtainDisplay(waterCurtainMyNumber,k*3+l,0);
                }
            }

        });

    } else if ( waterCurtainNumber === 'N' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(61);
        let waterCurtainSetTimeoutDelay = [];
        var waterCurtainSetInterval = [];

        waterCurtainSetTimeoutDelay[0] = 600;
        waterCurtainSetTimeout[0] = setTimeout( function(){
            for ( var i = 0 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);

            waterCurtainSetInterval[0] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[0],47800,waterCurtainUseNumber,waterCurtainSetInterval[0],waterCurtainMyNumber);

                let waterCurtainNumber = 4;
                let waterCurtainLoopTime = 9000;
                let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainNumber;
                let waterCurtainWidth = 9;
                let waterCurtainBasicDeg = 225;
                let waterCurtainLapDeg = 365;
                let waterCurtainRestDeg = waterCurtainLapDeg - 360;
                let waterCurtainBasicDeg2 = 47800 % waterCurtainLoopTime;
                let waterCurtainLoopTime2 = 2800;
                let waterCurtainLoopTimeSplit2 = waterCurtainLoopTime2 / waterCurtainNumber;

                if ( nowTime[0] >= 24750 ) waterCurtainDisplay(waterCurtainMyNumber,1,1);
                else if ( nowTime[0] >= 20250 ) waterCurtainDisplay(waterCurtainMyNumber,3,1);
                else if ( nowTime[0] >= 13500 ) waterCurtainDisplay(waterCurtainMyNumber,2,1);
                else waterCurtainDisplay(waterCurtainMyNumber,0,1);

                if ( nowTime[0] >= 38200 ) waterCurtainWidth = 18;

                for ( var i = 0 ; i < 4 ; i++ ) {
                    let waterCurtainJudgeTime, waterCurtainDeg, waterCurtainNowWidth;

                    if ( nowTime[0] < 47800 ) {
                        waterCurtainJudgeTime = ( nowTime[0] + waterCurtainLoopTimeSplit * i ) % waterCurtainLoopTime;
                        waterCurtainDeg = ( waterCurtainBasicDeg + waterCurtainLapDeg / waterCurtainLoopTime * waterCurtainJudgeTime ) % waterCurtainLapDeg;
                    } else {
                        waterCurtainJudgeTime = ( nowTime[1] + waterCurtainLoopTimeSplit2 * i ) % waterCurtainLoopTime2;
                        waterCurtainDeg = ( waterCurtainBasicDeg2 - waterCurtainLapDeg / waterCurtainLoopTime2 * waterCurtainJudgeTime ) % waterCurtainLapDeg;
                    }

                    let waterCurtainJudgeDeg = waterCurtainDeg - 18 * 13;
                    if ( waterCurtainJudgeDeg >= waterCurtainRestDeg * 2 ) {
                        waterCurtainDeg -= waterCurtainRestDeg;
                        waterCurtainNowWidth = waterCurtainWidth;
                    } else if ( waterCurtainJudgeDeg >= waterCurtainRestDeg ) {
                        waterCurtainDeg -= waterCurtainRestDeg;
                        waterCurtainNowWidth = ( waterCurtainWidth - waterCurtainRestDeg ) + ( waterCurtainJudgeDeg - waterCurtainRestDeg );
                    } else if ( waterCurtainJudgeDeg >= 0 ) {
                        waterCurtainDeg = 18 * 13;
                        waterCurtainNowWidth = waterCurtainWidth - waterCurtainJudgeDeg;
                    } else {
                        waterCurtainNowWidth = waterCurtainWidth;
                    }

                    waterCurtainChangeAngle(waterCurtainMyNumber,i,-1*waterCurtainDeg,waterCurtainNowWidth);
                }

            });
        },waterCurtainSetTimeoutDelay[0]);

        waterCurtainSetTimeoutDelay[1] = 61600;
        waterCurtainSetTimeout[1] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[0]);

            waterCurtainSetInterval[1] = setInterval( function() {
                for ( var i = 1 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[1],0,waterCurtainUseNumber,waterCurtainSetInterval[1],waterCurtainMyNumber);

                let waterCurtainLoopTime = 7000;
                let waterCurtainWidth = 162;
                let waterCurtainBasicDeg = 126;
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
                let waterCurtainDeg = waterCurtainBasicDeg + 360 / waterCurtainLoopTime * waterCurtainJudgeTime;

                if ( nowTime[0] >= 10500 ) waterCurtainWidth += ( 360 - waterCurtainWidth ) / 3500 * ( nowTime[0] - 10500 );

                waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth);

            });
        },waterCurtainSetTimeoutDelay[1]);
        
        waterCurtainSetTimeoutDelay[2] = 80600;
        waterCurtainSetTimeout[2] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[1]);

            waterCurtainSetInterval[2] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[2],0,waterCurtainUseNumber,waterCurtainSetInterval[2],waterCurtainMyNumber);

                let waterCurtainLoopTime = 5000;

                if ( nowTime[0] < waterCurtainLoopTime ) {
                    for ( var i = 0 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                    let waterCurtainDeg = 90 - 90 / waterCurtainLoopTime * nowTime[0];

                    waterCurtainChangeAngle(waterCurtainMyNumber,0,20,-waterCurtainDeg);
                    waterCurtainChangeAngle(waterCurtainMyNumber,1,20,waterCurtainDeg);
                    waterCurtainChangeAngle(waterCurtainMyNumber,2,200,-waterCurtainDeg);
                    waterCurtainChangeAngle(waterCurtainMyNumber,3,200,waterCurtainDeg);
                } else {
                    for ( var i = 0 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    clearInterval(waterCurtainSetInterval[2]);
                }

            });
        },waterCurtainSetTimeoutDelay[2]);

        waterCurtainSetTimeoutDelay[3] = 87500;
        waterCurtainSetTimeout[3] = setTimeout( function(){
            for ( var i = 0 ; i < 2 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

            waterCurtainSetInterval[3] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[3],0,waterCurtainUseNumber,waterCurtainSetInterval[3],waterCurtainMyNumber);

                let waterCurtainLoopTime = 10020;
                let waterCurtainStartWidth = 6;

                let waterCurtainDeg = 117 - 180 / waterCurtainLoopTime * nowTime[0];
                let waterCurtainWidth = waterCurtainStartWidth + ( 12 - waterCurtainStartWidth ) / waterCurtainLoopTime * nowTime[0];

                for ( var i = 0 ; i < 2 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,180*i+waterCurtainDeg,-1*waterCurtainWidth);
                
            });
        },waterCurtainSetTimeoutDelay[3]);

        waterCurtainSetTimeoutDelay[4] = 97520;
        waterCurtainSetTimeout[4] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[3]);
            for ( var i = 0 ; i < 10 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

            waterCurtainSetInterval[4] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[4],0,waterCurtainUseNumber,waterCurtainSetInterval[4],waterCurtainMyNumber);

                let waterCurtainLoopTime = 32000;
                let waterCurtainWidth = 6;
                let waterCurtainNumber = 10;

                let waterCurtainDeg = 360 / waterCurtainLoopTime * ( nowTime[0] % waterCurtainLoopTime );

                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,360/waterCurtainNumber*i+waterCurtainDeg,waterCurtainWidth);
                
            });
        },waterCurtainSetTimeoutDelay[4]);

        waterCurtainSetTimeoutDelay[5] = 139560;
        waterCurtainSetTimeout[5] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[4]);
            for ( var i = 2 ; i < 10 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);

            waterCurtainSetInterval[5] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[5],0,waterCurtainUseNumber,waterCurtainSetInterval[5],waterCurtainMyNumber);

                let waterCurtainLoopTime = 820;
                let waterCurtainWidth = 54;
                let waterCurtainNumber = 2;

                let waterCurtainDeg = 360 / waterCurtainLoopTime * ( nowTime[0] % waterCurtainLoopTime );

                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,360/waterCurtainNumber*i-waterCurtainDeg,waterCurtainWidth);
                
            });
        },waterCurtainSetTimeoutDelay[5]);

        waterCurtainSetTimeoutDelay[6] = 142690;
        waterCurtainSetTimeout[6] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[5]);

            waterCurtainSetInterval[6] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[6],0,waterCurtainUseNumber,waterCurtainSetInterval[6],waterCurtainMyNumber);

                let waterCurtainLoopTime = 820;
                let waterCurtainWidth = -54;
                let waterCurtainNumber = 2;

                let waterCurtainDeg = 360 / waterCurtainLoopTime * ( nowTime[0] % waterCurtainLoopTime );

                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,360/waterCurtainNumber*i+waterCurtainDeg,waterCurtainWidth);
                
            });
        },waterCurtainSetTimeoutDelay[6]);

        waterCurtainSetTimeoutDelay[7] = 145680;
        waterCurtainSetTimeout[7] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[6]);
            waterCurtainDisplay(waterCurtainMyNumber,1,0);

            waterCurtainSetInterval[7] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[7],0,waterCurtainUseNumber,waterCurtainSetInterval[7],waterCurtainMyNumber);

                let waterCurtainLoopTime = 400;
                let waterCurtainWidth = -54;

                let waterCurtainDeg = 360 / waterCurtainLoopTime * ( nowTime[0] % waterCurtainLoopTime );

                waterCurtainChangeAngle(waterCurtainMyNumber,0,-1*waterCurtainDeg,waterCurtainWidth);
                
            });
        },waterCurtainSetTimeoutDelay[7]);

        waterCurtainSetTimeoutDelay[8] = 148720;
        waterCurtainSetTimeout[8] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[7]);
            for ( var i = 0 ; i < 3 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

            waterCurtainSetInterval[8] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[8],0,waterCurtainUseNumber,waterCurtainSetInterval[8],waterCurtainMyNumber);

                let waterCurtainLoopTime = 12000;
                let waterCurtainWidth = 100;
                let waterCurtainNumber = 3;

                let waterCurtainDeg = 360 / waterCurtainLoopTime * ( nowTime[0] % waterCurtainLoopTime );

                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,20+360/waterCurtainNumber*i+waterCurtainDeg,waterCurtainWidth);
                
            });
        },waterCurtainSetTimeoutDelay[8]);

        waterCurtainSetTimeoutDelay[9] = 170640;
        waterCurtainSetTimeout[9] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[8]);
            waterCurtainDisplay(waterCurtainMyNumber,2,0);

            waterCurtainSetInterval[8] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[9],0,waterCurtainUseNumber,waterCurtainSetInterval[9],waterCurtainMyNumber);

                if ( nowTime[0] < 1800 ) {                    
                    let waterCurtainWidth = 162 + ( 36 - 162 ) / 1800 * nowTime[0];
                    let waterCurtainDeg = 126 - waterCurtainWidth / 2;

                    waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth);
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,0,0);
                }

                if ( nowTime[0] < 1960 ) {
                    let waterCurtainWidth = 150 / 1960 * nowTime[0];
                    let waterCurtainDeg = 306 - waterCurtainWidth / 2;

                    waterCurtainChangeAngle(waterCurtainMyNumber,1,waterCurtainDeg,waterCurtainWidth);
                } else if ( nowTime[0] < 2330 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,1,231,150);
                } else if ( nowTime[0] < 4130 ) {
                    let waterCurtainWidth = 150 - 150 / 1800 * ( nowTime[0] - 2330 );
                    let waterCurtainDeg = 306 - waterCurtainWidth / 2;

                    waterCurtainChangeAngle(waterCurtainMyNumber,1,waterCurtainDeg,waterCurtainWidth);
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,1,0);
                }

                if ( nowTime[0] < 1800 ) {

                } else if ( nowTime[0] < 7360 ) {
                    for ( var i = 2 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                    let waterCurtainWidth = 95;
                    let waterCurtainDeg = 126 + 0.045 * ( nowTime[0] - 1800 );

                    if ( waterCurtainDeg - waterCurtainWidth < 126 ) {
                        waterCurtainWidth = waterCurtainDeg - 126;
                    } else if ( waterCurtainDeg > 306 ) {
                        waterCurtainWidth -= ( waterCurtainDeg - 306 );
                        waterCurtainDeg = 306;
                    }

                    for ( var i = 2 ; i < 4 ; i++ ) {
                        if ( i === 3 ) {
                            waterCurtainDeg -= ( waterCurtainDeg - 126 ) * 2;
                        }

                        waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainDeg, ( (-1) ** (i-1) ) * waterCurtainWidth);
                    }
                } else if ( nowTime[0] < 8500 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,2,327,6);
                    waterCurtainDisplay(waterCurtainMyNumber,3,0);
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,2,0);
                }

                if ( nowTime[0] < 5730 ) {

                } else if ( nowTime[0] < 7320 ) {
                    waterCurtainDisplay(waterCurtainMyNumber,4,1);

                    let waterCurtainWidth = 144 / 1590 * ( nowTime[0] - 5730 );
                    let waterCurtainDeg = 126 - waterCurtainWidth / 2;

                    waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainDeg,waterCurtainWidth);
                } else if ( nowTime[0] < 7940 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,4,54,144);
                } else if ( nowTime[0] < 8320 ) {
                    let waterCurtainWidth = 144 + ( 360 - 144 ) / 380 * ( nowTime[0] - 7940 );
                    let waterCurtainDeg = 126 - waterCurtainWidth / 2;

                    waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainDeg,waterCurtainWidth);
                } else if ( nowTime[0] < 8490 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,4,306,360);
                } else if ( nowTime[0] < 9650 ) {
                    let waterCurtainWidth = 360 - 180 / 1160 * ( nowTime[0] - 8490 );
                    let waterCurtainDeg = 306 - waterCurtainWidth / 2;

                    waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainDeg,waterCurtainWidth);
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,4,0);
                }
                
            });
        },waterCurtainSetTimeoutDelay[9]);

        waterCurtainSetTimeoutDelay[10] = 180510;
        waterCurtainSetTimeout[10] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[9]);

            for ( var i = 0 ; i < 60 ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,360/60*i,0.5);
            }            

            waterCurtainSetInterval[10] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[10],0,waterCurtainUseNumber,waterCurtainSetInterval[10],waterCurtainMyNumber);
                let waterCurtainLoopTime = 560;
                let waterCurtainDisplayTime = 130;
                let waterCurtainSmallNumber = 12;
                let waterCurtainBigNumber = 5;

                for ( var i = 0 ; i < waterCurtainSmallNumber ; i++ ) {
                    let waterCurtainJudgeTime1 = ( nowTime[0] + waterCurtainLoopTime / waterCurtainSmallNumber * i ) % waterCurtainLoopTime;
                    let waterCurtainJudgeTime2 = ( nowTime[0] + waterCurtainLoopTime / waterCurtainSmallNumber * ( waterCurtainSmallNumber - i + 1 ) ) % waterCurtainLoopTime;

                    if ( waterCurtainJudgeTime1 < waterCurtainDisplayTime || waterCurtainJudgeTime2 < waterCurtainDisplayTime  ) {
                        for ( var j = 0 ; j < waterCurtainBigNumber ; j++ ) waterCurtainDisplay(waterCurtainMyNumber,waterCurtainSmallNumber*j+i,1);
                    } else {
                        for ( var j = 0 ; j < waterCurtainBigNumber ; j++ ) waterCurtainDisplay(waterCurtainMyNumber,waterCurtainSmallNumber*j+i,0);
                    }
                }
                
            });
        },waterCurtainSetTimeoutDelay[10]);

        waterCurtainSetTimeoutDelay[11] = 188560;
        waterCurtainSetTimeout[11] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[10]);

            for ( var i = 0 ; i < 60 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);

            setTimeout( function(){
                waterCurtainChangeAngle(waterCurtainMyNumber,60,0,360);
                waterCurtainDisplay(waterCurtainMyNumber,60,1);
            },10);

        },waterCurtainSetTimeoutDelay[11]);

        waterCurtainSetTimeoutDelay[12] = 194480;
        waterCurtainSetTimeout[12] = setTimeout( function(){

            waterCurtainDisplay(waterCurtainMyNumber,60,0);

        },waterCurtainSetTimeoutDelay[12]);

    } else if ( waterCurtainNumber === 'O' ) {
        let startTime = Date.now();
        let waterCurtainLoopTime = 7610;
        let waterCurtainMyNumber = waterCurtainSetting(15);

        waterCurtainSetTimeout[0] = setTimeout( function(){
            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+1150,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                if ( nowTime[0] > 27000 ) clearInterval(waterCurtainSetInterval);

                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
                let waterCurtainBasicDeg = 146 - 90 * Math.trunc( nowTime[0] / waterCurtainLoopTime );

                if ( waterCurtainJudgeTime < 520 ) { //HAPPY
                    if ( waterCurtainJudgeTime < 200 ) { //H
                        for ( var i = 0 ; i < 2 ; i++ ) {
                            waterCurtainDisplay(waterCurtainMyNumber,i,1);
                            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasicDeg-15-8*i,-4);
                        }
                    } else if ( waterCurtainJudgeTime < 320 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasicDeg-15,-8);
                    } else {
                        waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasicDeg-15,-4);
                    }

                    let waterCurtainDeg = 5 / 520 * waterCurtainJudgeTime; //A
                    for ( var i = 2 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                    waterCurtainChangeAngle(waterCurtainMyNumber,3,waterCurtainBasicDeg-31-(14-waterCurtainDeg),4);
                    if ( waterCurtainJudgeTime >= 100 && waterCurtainJudgeTime < 250 ) waterCurtainChangeAngle(waterCurtainMyNumber,2,waterCurtainBasicDeg-31-waterCurtainDeg,-14+waterCurtainDeg*2);
                    else waterCurtainChangeAngle(waterCurtainMyNumber,2,waterCurtainBasicDeg-31-waterCurtainDeg,-4);
                    
                    if ( waterCurtainJudgeTime < 250 ) { //P1
                        waterCurtainDisplay(waterCurtainMyNumber,4,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-47,-4);
                    } else if ( waterCurtainJudgeTime < 350 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-47,-11);
                    } else if ( waterCurtainJudgeTime < 385 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-47,-4);
                        waterCurtainDisplay(waterCurtainMyNumber,5,1);
                        let waterCurtainDegP = 3 / 35 * ( waterCurtainJudgeTime - 350 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,5,waterCurtainBasicDeg-58-waterCurtainDegP,-4);
                    } else if ( waterCurtainJudgeTime < 420 ) {
                        let waterCurtainDegP = 3 / 35 * ( waterCurtainJudgeTime - 385 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,5,waterCurtainBasicDeg-61+waterCurtainDegP,-4);
                    } else {
                        waterCurtainDisplay(waterCurtainMyNumber,5,0);
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-47,-11);
                    }

                    if ( waterCurtainJudgeTime < 250 ) { //P2
                        waterCurtainDisplay(waterCurtainMyNumber,6,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,6,waterCurtainBasicDeg-63,-4);
                    } else if ( waterCurtainJudgeTime < 350 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,6,waterCurtainBasicDeg-63,-11);
                    } else if ( waterCurtainJudgeTime < 385 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,6,waterCurtainBasicDeg-63,-4);
                        waterCurtainDisplay(waterCurtainMyNumber,7,1);
                        let waterCurtainDegP = 3 / 35 * ( waterCurtainJudgeTime - 350 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,7,waterCurtainBasicDeg-74-waterCurtainDegP,-4);
                    } else if ( waterCurtainJudgeTime < 420 ) {
                        let waterCurtainDegP = 3 / 35 * ( waterCurtainJudgeTime - 385 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,7,waterCurtainBasicDeg-77+waterCurtainDegP,-4);
                    } else {
                        waterCurtainDisplay(waterCurtainMyNumber,7,0);
                        waterCurtainChangeAngle(waterCurtainMyNumber,6,waterCurtainBasicDeg-63,-11);
                    }

                    if ( waterCurtainJudgeTime < 320 ) { //Y
                        waterCurtainDisplay(waterCurtainMyNumber,8,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,8,waterCurtainBasicDeg-84,-4);
                    } else {
                        let waterCurtainDegY = 5 / 200 * ( waterCurtainJudgeTime - 320 );
                        waterCurtainDisplay(waterCurtainMyNumber,9,1);
                        for ( var i = 8 ; i < 10 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasicDeg-84+( (-1) ** i )*waterCurtainDegY,-4);
                    }
                    
                } else if ( waterCurtainJudgeTime < 3430 ) {
                    for ( var i = 0 ; i < 10 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                } else if ( waterCurtainJudgeTime < 4030 ) {
                    for ( var i = 0 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1); //W
                    let waterCurtainDegW = 0.5 / 600 * ( waterCurtainJudgeTime - 3430 );
                    waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasicDeg-2+waterCurtainDegW*4,-3);
                    waterCurtainChangeAngle(waterCurtainMyNumber,1,waterCurtainBasicDeg-2-waterCurtainDegW*5,-3);
                    waterCurtainChangeAngle(waterCurtainMyNumber,2,waterCurtainBasicDeg-7-waterCurtainDegW*4,-3);
                    waterCurtainChangeAngle(waterCurtainMyNumber,3,waterCurtainBasicDeg-7+waterCurtainDegW*5,-3);

                    if ( waterCurtainJudgeTime < 3530 ) { //E
                        waterCurtainDisplay(waterCurtainMyNumber,4,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-13,-12);
                    } else if ( waterCurtainJudgeTime < 3630 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-13,-3);
                    } else if ( waterCurtainJudgeTime < 3780 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-13,-12);
                    } else if ( waterCurtainJudgeTime < 3930 ) {
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-13,-3);
                    } else {
                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg-13,-12);
                    }

                    if ( waterCurtainJudgeTime < 3580 ) { //D1
                        waterCurtainDisplay(waterCurtainMyNumber,5,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,5,waterCurtainBasicDeg-26,-8);
                    } else if ( waterCurtainJudgeTime < 3730 ) {
                        waterCurtainDisplay(waterCurtainMyNumber,6,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,5,waterCurtainBasicDeg-26,-4);
                        let waterCurtainDeg = 4 / 150 * ( waterCurtainJudgeTime - 3580 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,6,waterCurtainBasicDeg-30-waterCurtainDeg,-4);
                    } else if ( waterCurtainJudgeTime < 3880 ) {
                        let waterCurtainDeg = 4 / 150 * ( waterCurtainJudgeTime - 3730 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,6,waterCurtainBasicDeg-34+waterCurtainDeg,-4);
                    } else {
                        waterCurtainDisplay(waterCurtainMyNumber,6,0);
                        waterCurtainChangeAngle(waterCurtainMyNumber,5,waterCurtainBasicDeg-26,-8);
                    }

                    if ( waterCurtainJudgeTime < 3580 ) { //D2
                        waterCurtainDisplay(waterCurtainMyNumber,7,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,7,waterCurtainBasicDeg-39,-8);
                    } else if ( waterCurtainJudgeTime < 3730 ) {
                        waterCurtainDisplay(waterCurtainMyNumber,8,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,7,waterCurtainBasicDeg-39,-4);
                        let waterCurtainDeg = 4 / 150 * ( waterCurtainJudgeTime - 3580 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,8,waterCurtainBasicDeg-46-waterCurtainDeg,-4);
                    } else if ( waterCurtainJudgeTime < 3880 ) {
                        let waterCurtainDeg = 4 / 150 * ( waterCurtainJudgeTime - 3730 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,8,waterCurtainBasicDeg-50+waterCurtainDeg,-4);
                    } else {
                        waterCurtainDisplay(waterCurtainMyNumber,8,0);
                        waterCurtainChangeAngle(waterCurtainMyNumber,7,waterCurtainBasicDeg-39,-8);
                    }

                    waterCurtainDisplay(waterCurtainMyNumber,9,1); //I
                    waterCurtainChangeAngle(waterCurtainMyNumber,9,waterCurtainBasicDeg-56,-4);

                    for ( var i = 10 ; i < 13 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1); //N
                    let waterCurtainDegN = 9 / 600 * ( waterCurtainJudgeTime - 3430 );
                    waterCurtainChangeAngle(waterCurtainMyNumber,10,waterCurtainBasicDeg-65,-3);
                    waterCurtainChangeAngle(waterCurtainMyNumber,11,waterCurtainBasicDeg-74,-3);
                    waterCurtainChangeAngle(waterCurtainMyNumber,12,waterCurtainBasicDeg-65-waterCurtainDegN,-3);

                    if ( waterCurtainJudgeTime < 3730 ) { //G 78
                        for ( var i = 13 ; i < 15 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                        let waterCurtainDeg = 4.5 / 300 * ( waterCurtainJudgeTime - 3430 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,13,waterCurtainBasicDeg-82.5+waterCurtainDeg,-3);
                        if ( waterCurtainJudgeTime >= 3700 ) waterCurtainChangeAngle(waterCurtainMyNumber,14,waterCurtainBasicDeg-82.5-waterCurtainDeg,-3);
                        else waterCurtainChangeAngle(waterCurtainMyNumber,14,waterCurtainBasicDeg-82.5-waterCurtainDeg,-6);
                    } else {
                        let waterCurtainDeg = 4.5 - 4.5 / 300 * ( waterCurtainJudgeTime - 3730 );
                        waterCurtainChangeAngle(waterCurtainMyNumber,13,waterCurtainBasicDeg-82.5+waterCurtainDeg,-3);
                        if ( waterCurtainJudgeTime < 3900 ) waterCurtainDisplay(waterCurtainMyNumber,14,0);
                        else waterCurtainChangeAngle(waterCurtainMyNumber,14,waterCurtainBasicDeg-82.5-waterCurtainDeg,-3);
                    }

                } else {
                    for ( var i = 0 ; i < 15 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }

            });
        },1150);        
    } else if ( waterCurtainNumber === 'P' ) {
        let startTime = Date.now();
        let waterCurtainLoopTime = 2000;
        let waterCurtainBasic = 90;
        let heartHaifWidth = 22;
        let waterCurtainMyNumber = waterCurtainSetting(2);

        waterCurtainSetTimeout[0] = setTimeout( function() {
            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
    
                if ( waterCurtainJudgeTime < 720 ) {
                    let waterCurtainDeg = heartHaifWidth / 720 * waterCurtainJudgeTime;
                    for ( var i = 0 ; i < 2 ; i++ ) {
                        waterCurtainDisplay(waterCurtainMyNumber,i,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic,( (-1) ** (i+1) ) * waterCurtainDeg);
                    }
                } else if ( waterCurtainJudgeTime < 720 + 160 ) {
                    let waterCurtainDeg = heartHaifWidth - heartHaifWidth / 160 * ( waterCurtainJudgeTime - 720 );
                    for ( var i = 0 ; i < 2 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic+( heartHaifWidth - waterCurtainDeg ) / 2 * ( (-1) ** (i+1) ),( (-1) ** (i+1) ) * waterCurtainDeg);
                } else {
                    for ( var i = 0 ; i < 2 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }
    
            });
        },800);
        

    } else if ( waterCurtainNumber === 'Q' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 4;
        let waterCurtainBigNumber = 5;
        let waterCurtainSmallNumber = 6;
        let waterCurtainSpace = 360 / ( waterCurtainBigNumber * waterCurtainSmallNumber );
        let waterCurtainLoopTime = 2000;
        let waterCurtainLoopTimeSplit = 360;
        let waterCurtainLoopTimeSplitRest = waterCurtainLoopTime - waterCurtainLoopTimeSplit;
        let waterCurtainSmallLoopTime = 150;
        let waterCurtainDisplayTime = 50;
        let waterCurtainBasic = 250;
        let heartHaifWidth = 22;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainBigNumber*waterCurtainSmallNumber+2);

        for ( var i = 0 ; i < waterCurtainBigNumber * waterCurtainSmallNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace*i,waterCurtainWidth);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var l = 0 ; l < waterCurtainBigNumber ; l++ ) {
                let waterCurtainJudgeTime2 = ( nowTime[0] + waterCurtainSmallLoopTime / waterCurtainBigNumber * l ) % waterCurtainSmallLoopTime;

                if ( waterCurtainJudgeTime2 < waterCurtainDisplayTime ) {
                    for ( var k = 0 ; k < waterCurtainSmallNumber ; k++ ) waterCurtainDisplay(waterCurtainMyNumber,k*waterCurtainBigNumber+l,1);
                } else {
                    for ( var k = 0 ; k < waterCurtainSmallNumber ; k++ ) waterCurtainDisplay(waterCurtainMyNumber,k*waterCurtainBigNumber+l,0);

                    if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit ) {
                        for ( var k = 0 ; k < waterCurtainSmallNumber ; k++ ) waterCurtainChangeAngle(waterCurtainMyNumber,k*waterCurtainBigNumber+l,waterCurtainSpace*(k*waterCurtainBigNumber+l)+18/waterCurtainLoopTimeSplit*waterCurtainJudgeTime,waterCurtainWidth);
                    } else {
                        for ( var k = 0 ; k < waterCurtainSmallNumber ; k++ ) waterCurtainChangeAngle(waterCurtainMyNumber,k*waterCurtainBigNumber+l,waterCurtainSpace*(k*waterCurtainBigNumber+l)-18/waterCurtainLoopTimeSplitRest*(waterCurtainJudgeTime-waterCurtainLoopTimeSplit),waterCurtainWidth);
                    }
                }
            }

            if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit ) {

            } else if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit + 720 ) {
                let waterCurtainDeg = heartHaifWidth / 720 * ( waterCurtainJudgeTime - waterCurtainLoopTimeSplit );
                for ( var i = 30 ; i < 32 ; i++ ) {
                    waterCurtainDisplay(waterCurtainMyNumber,i,1);
                    waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic,( (-1) ** (i-1) ) * waterCurtainDeg);
                }
            } else if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit + 720 + 160 ) {
                let waterCurtainDeg = heartHaifWidth - heartHaifWidth / 160 * ( waterCurtainJudgeTime - waterCurtainLoopTimeSplit - 720 );
                for ( var i = 30 ; i < 32 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic+( heartHaifWidth - waterCurtainDeg ) / 2 * ( (-1) ** (i-1) ),( (-1) ** (i-1) ) * waterCurtainDeg);
            } else {
                for ( var i = 30 ; i < 32 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
            }

        });

    } else if ( waterCurtainNumber === 'V' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 6;
        let waterCurtainWidth = 26;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainLoopTime = 350;
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
            let waterCurtainDeg;

            if ( waterCurtainJudgeTime < waterCurtainLoopTime / 2 ) waterCurtainDeg = 4 / waterCurtainLoopTime * 2 * waterCurtainJudgeTime;
            else waterCurtainDeg = 4 - 4 / waterCurtainLoopTime * 2 * ( waterCurtainJudgeTime - waterCurtainLoopTime / 2 );

            for ( let i = 0 ; i < waterCurtainNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,30 + waterCurtainSpace * i - waterCurtainDeg,waterCurtainWidth);
            }

        });      

    } else if ( waterCurtainNumber === 'W' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(16);

        function waterCurtainPumpkin(waterCurtainNowMyNumber,waterCurtainStartDeg,startTime,nowTime) {

            nowTime -= startTime;

            if ( nowTime < 0 ) {

            } else if ( nowTime < 320 ) {
                let waterCurtainDeg = 45 / 480 * nowTime;
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber,1);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+45-waterCurtainDeg,waterCurtainDeg*2);
            } else if ( nowTime < 480 ) {
                let waterCurtainDeg = 45 / 480 * nowTime;
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber+1,1);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+45-waterCurtainDeg,15);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber+1,waterCurtainStartDeg+30+waterCurtainDeg,15);
            } else if ( nowTime < 560 ) {

            } else if ( nowTime < 650 ) {
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber+1,0);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg,90);
            } else if ( nowTime < 810 ) {
                let waterCurtainDeg = 9 / 160 * ( nowTime - 650 );
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber+1,1);
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber+2,1);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg,18+waterCurtainDeg);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber+1,waterCurtainStartDeg+36-waterCurtainDeg,18+waterCurtainDeg*2);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber+2,waterCurtainStartDeg+72-waterCurtainDeg,18+waterCurtainDeg);
            } else if ( nowTime < 960 ) {
                let waterCurtainDeg = 18 / 150 * ( nowTime - 810 );
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber+1,0);
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber+2,0);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+waterCurtainDeg,90-waterCurtainDeg*2);
            } else if ( nowTime < 1085 ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+42,6);
            } else if ( nowTime < 1100 ) {
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber,0);
            }

        }

        function waterCurtainCandy(waterCurtainNowMyNumber,waterCurtainStartDeg,startTime,nowTime) {

            nowTime -= startTime;

            if ( nowTime < 0 ) {

            } else if ( nowTime < 230 ) {
                let waterCurtainDeg = 6 / 230 * nowTime;
                let waterCurtainDeg2;

                if ( nowTime < 180 ) waterCurtainDeg2 = 12 / 180 * nowTime;
                else waterCurtainDeg2 = 12 - 18 / 60 * ( nowTime - 180 );

                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber,1);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+60-waterCurtainDeg,waterCurtainDeg+waterCurtainDeg2);
            } else if ( nowTime < 540 ) {
                let waterCurtainDeg = 36 / 310 * ( nowTime - 230 );
                let waterCurtainDeg2 = Math.sin( ( nowTime - 230 ) / 310 * Math.PI ) * 12 + 6;

                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+54-waterCurtainDeg,waterCurtainDeg2);
            } else if ( nowTime < 770 ) {
                let waterCurtainDeg = 6 - 6 / 230 * ( nowTime - 540 );
                let waterCurtainDeg2;

                if ( nowTime < 60 ) waterCurtainDeg2 = -6 + 18 / 60 * ( nowTime - 540 );
                else waterCurtainDeg2 = 12 - 12 / 180 * ( nowTime - 600 );

                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+12-waterCurtainDeg,waterCurtainDeg+waterCurtainDeg2);
            } else if ( nowTime < 800 ) {
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber,0);
            }

        }

        function waterCurtainBat(waterCurtainNowMyNumber,waterCurtainStartDeg,startTime,nowTime) {

            nowTime -= startTime;

            if ( nowTime < 0 ) {

            } else if ( nowTime < 160 ) {
                let waterCurtainDeg = 27 / 160 * nowTime;

                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber,1);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+27-waterCurtainDeg,waterCurtainDeg*2);
            } else if ( nowTime < 240 ) {
                let waterCurtainDeg = 24 / 80 * ( nowTime - 160 );
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowMyNumber,waterCurtainStartDeg+waterCurtainDeg,54-waterCurtainDeg*2);
            } else if ( nowTime < 280 ) {

            } else if ( nowTime < 330 ) {
                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowMyNumber,0);
            }

        }

        waterCurtainSetTimeout[0] = setTimeout( function(){
            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+800,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                let waterCurtainJudgeTime = nowTime[0] % 5000;

                waterCurtainPumpkin(0,200,0,waterCurtainJudgeTime);
                waterCurtainCandy(3,36,935,waterCurtainJudgeTime);
                waterCurtainBat(4,153,1560,waterCurtainJudgeTime);
                waterCurtainBat(5,333,2170,waterCurtainJudgeTime);
                waterCurtainPumpkin(6,0,3010,waterCurtainJudgeTime);
                waterCurtainCandy(9,198,3010,waterCurtainJudgeTime);                

            });
        },800);

    } else if ( waterCurtainNumber === 'Y' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 0.25;
        let waterCurtainNumber = 300;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainLoopTime = 170;
        let waterCurtainDisplayTime = 50;
        let waterCurtainArray = [ 33 , 27 , 16 , 9 , 29 , 28 , 10 , 22 , 32 , 6 , 17 , 33 , 26 , 31 , 30 , 23 , 16 , 16 , 16 , 31 , 20 , 21 , 6 , 7 , 29 , 17 , 0 , 12 , 6 , 15 ];

        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,360-waterCurtainSpace*i,waterCurtainWidth);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            let l = Math.trunc( nowTime[0] / waterCurtainLoopTime );

            for ( var i = 0 ; i < 30 ; i++ ) {
                let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainArray[i] * 5 ) % waterCurtainLoopTime;

                if ( waterCurtainJudgeTime < waterCurtainDisplayTime ) {
                    for ( var j = 0 ; j < 10 ; j++ ) waterCurtainDisplay(waterCurtainMyNumber,j*30+i,1);
                } else {
                    for ( var j = 0 ; j < 10 ; j++ ) {
                        waterCurtainDisplay(waterCurtainMyNumber,j*30+i,0);
                        waterCurtainChangeAngle(waterCurtainMyNumber,j*30+i,360-waterCurtainSpace*(j*30+i)+l*waterCurtainWidth,waterCurtainWidth);
                    }
                }

                

            }

        });

    } else if ( waterCurtainNumber === 'AA' ) {
        let startTime = Date.now();
        let waterCurtainNumber = [ 5 , 10 ];
        let waterCurtainLoopTime = 14550;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / 2;
        let waterCurtainSmallLoopTime = 240;
        let waterCurtainMyNumber = waterCurtainSetting(20);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var l = 0 ; l < 2 ; l++ ) {
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit * ( l + 1 ) ) {
                    let waterCurtainWidth = 360 / ( waterCurtainNumber[l] * 2 );

                    for ( var i = 0 ; i < waterCurtainNumber[l] * 2 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,9+waterCurtainWidth*i,waterCurtainWidth);
                    if ( l === 0 ) for ( var i = 10 ; i < waterCurtainNumber[1] * 2 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);

                    let waterCurtainJudgeTime2 = Math.trunc( waterCurtainJudgeTime / waterCurtainSmallLoopTime ) % 2;
                    
                    for ( var i = 0 ; i < waterCurtainNumber[l] ; i++ ) {
                        waterCurtainDisplay(waterCurtainMyNumber,i*2+(1-waterCurtainJudgeTime2),1);
                        waterCurtainDisplay(waterCurtainMyNumber,i*2+waterCurtainJudgeTime2,0);
                    }

                    break;
                }
            }

        });

    } else if ( waterCurtainNumber === 'AB' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(28);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainLoopTime = 24000;
            let waterCurtainLoopTimeSplit = waterCurtainLoopTime / 3;
            let waterCurtainLapTime = 460;
            let waterCurtainLapTimeRest = 600;
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
            let waterCurtainNumber = [ 8 , 12 , 14 ];
            let waterCurtainSplitDeg = [ 45 , 32 , 27 ];
            let waterCurtainSplitWidth = [ 18 , 9 , 6 ];

            for ( var i = 0 ; i < 3 ; i++ ) {
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit * ( i + 1 ) ) {
                    waterCurtainJudgeTime = waterCurtainJudgeTime - waterCurtainLoopTimeSplit * i + waterCurtainLapTime / 2;
                    let doubleON = Math.trunc( waterCurtainJudgeTime / waterCurtainLapTimeRest ) % 2;
                    let doubleNextON = 1 - doubleON;
                    waterCurtainJudgeTime %= waterCurtainLapTimeRest;

                    if ( i === 0 ) {
                        for ( var j = 16 ; j < 28 ; j++ ) {
                            waterCurtainDisplay(waterCurtainMyNumber,j,0);
                        }
                    }

                    for ( var j = 0 ; j < waterCurtainNumber[i] ; j++ ) {
                        let waterCurtainDeg = ( waterCurtainSplitDeg[i] + waterCurtainSplitWidth[i] ) / waterCurtainLapTimeRest * waterCurtainJudgeTime;
                        let waterCurtainWidth = waterCurtainSplitWidth[i];

                        if ( waterCurtainDeg < waterCurtainWidth ) {
                            waterCurtainWidth = waterCurtainDeg;
                            waterCurtainDeg = 0;
                        } else if ( waterCurtainDeg - waterCurtainSplitDeg[i] > 0 ) {
                            waterCurtainDeg -= waterCurtainSplitWidth[i];
                            waterCurtainWidth = waterCurtainSplitDeg[i] - waterCurtainDeg;
                        } else {
                            waterCurtainDeg -= waterCurtainSplitWidth[i];
                        }

                        if ( j % 2 === 1 ) {
                            waterCurtainDeg = waterCurtainSplitDeg[i] - waterCurtainDeg;
                            waterCurtainWidth *= -1;
                        }

                        waterCurtainDeg += waterCurtainSplitDeg[i] * j;

                        if ( waterCurtainDeg + waterCurtainWidth > 360 && i >= 1 ) {
                            waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber[i] * doubleON + j ,0);
                        } else if ( waterCurtainDeg > 360 ) {
                            waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber[i] * doubleON + j ,1);
                            waterCurtainWidth = -1 * ( -1 * waterCurtainWidth - ( waterCurtainDeg - 360 ) );
                            waterCurtainDeg = 360;
                        } else {
                            waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber[i] * doubleON + j ,1);
                        }

                        waterCurtainChangeAngle(waterCurtainMyNumber, waterCurtainNumber[i] * doubleON + j ,waterCurtainDeg,waterCurtainWidth);

                    }

                    if ( waterCurtainJudgeTime >= waterCurtainLapTime ) {
                        waterCurtainJudgeTime -= waterCurtainLapTime;

                        for ( var j = 0 ; j < waterCurtainNumber[i] ; j++ ) {
                            let waterCurtainDeg = ( waterCurtainSplitDeg[i] + waterCurtainSplitWidth[i] ) / waterCurtainLapTimeRest * waterCurtainJudgeTime;
                            let waterCurtainWidth = waterCurtainSplitWidth[i];

                            if ( waterCurtainDeg < waterCurtainWidth ) {
                                waterCurtainWidth = waterCurtainDeg;
                                waterCurtainDeg = 0;
                            } else if ( waterCurtainDeg - waterCurtainSplitDeg[i] > 0 ) {
                                waterCurtainDeg -= waterCurtainSplitWidth[i];
                                waterCurtainWidth = waterCurtainSplitDeg[i] - waterCurtainDeg;
                            } else {
                                waterCurtainDeg -= waterCurtainSplitWidth[i];
                            }

                            if ( j % 2 === 1 ) {
                                waterCurtainDeg = waterCurtainSplitDeg[i] - waterCurtainDeg;
                                waterCurtainWidth *= -1;
                            }

                            waterCurtainDeg += waterCurtainSplitDeg[i] * j;

                            if ( waterCurtainDeg + waterCurtainSplitWidth[i] > 360 && i >= 1 ) {
                                waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber[i] * doubleNextON + j ,0);
                            } else if ( waterCurtainDeg > 360 ) {
                                waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber[i] * doubleNextON + j ,1);
                                waterCurtainWidth = -1 * ( waterCurtainSplitWidth[i] - ( waterCurtainDeg - 360 ) );
                                waterCurtainDeg = 360;
                            } else {
                                waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber[i] * doubleNextON + j ,1);
                            }

                            waterCurtainChangeAngle(waterCurtainMyNumber, waterCurtainNumber[i] * doubleNextON + j ,waterCurtainDeg,waterCurtainWidth);

                        }
                    } else {
                        for ( var j = 0 ; j < waterCurtainNumber[i] ; j++ ) waterCurtainDisplay(waterCurtainMyNumber, waterCurtainNumber[i] * doubleNextON + j ,0);
                    }

                    break;
                }
            }

            

        });

    } else if ( waterCurtainNumber === 'AC' ) {
        let startTime = Date.now();
        let waterCurtainWidth = -0.5;
        let waterCurtainNumber = 36;
        let waterCurtainSpace = 10;
        let waterCurtainLoopTime = 2030;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainNumber;
        let waterCurtainLoopTimeSplit1 = 1860;
        let waterCurtainLoopTimeSplit2 = waterCurtainLoopTime - waterCurtainLoopTimeSplit1;
        let waterCurtainDeg = [ [] , [] ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace*i,waterCurtainWidth);
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
            waterCurtainDeg[0][i] = waterCurtainSpace*i;
            waterCurtainDeg[1][i] = 0;

            if ( waterCurtainLoopTimeSplit * i > ( waterCurtainLoopTimeSplit * i + waterCurtainLoopTimeSplit2 ) % waterCurtainLoopTime ) {
                waterCurtainDeg[0][i] -= waterCurtainWidth;
                waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainDeg[0][i],waterCurtainWidth*2);
                waterCurtainDeg[1][i] = 1;
            }
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
            let waterCuratinIfOK = 1;

            for ( var i = waterCurtainNumber - 1 ; i >= 0 ; i-- ) {
                if ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * i && waterCuratinIfOK === 1 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainDeg[0][i],waterCurtainWidth*2);
                    waterCuratinIfOK = 0;
                    waterCurtainDeg[1][i] = 1;
                    continue;
                }

                if ( waterCurtainJudgeTime >= ( waterCurtainLoopTimeSplit * i + waterCurtainLoopTimeSplit2 ) % waterCurtainLoopTime && waterCurtainDeg[1][i] === 1 ) {
                    waterCurtainDeg[0][i] += waterCurtainWidth;
                    waterCurtainDeg[1][i] = 0;
                    waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainDeg[0][i],waterCurtainWidth);
                    break;
                }
            }


        });

    } else if ( waterCurtainNumber === 'AD' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(62);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainLoopTime = 290;//123
            let waterCurtainSpace = 6;
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var i = 0 ; i < 31 ; i++ ) {
                let waterCurtainDeg = -3 + waterCurtainSpace * i + waterCurtainSpace / waterCurtainLoopTime * waterCurtainJudgeTime;
                let waterCurtainWidth = 2;

                waterCurtainDisplay(waterCurtainMyNumber,i*2,1);
                waterCurtainDisplay(waterCurtainMyNumber,i*2+1,1);

                if ( waterCurtainDeg + waterCurtainWidth < 0 ) {
                    waterCurtainDisplay(waterCurtainMyNumber,i*2,0);
                    waterCurtainDisplay(waterCurtainMyNumber,i*2+1,0);
                } else if ( waterCurtainDeg < 0 ) {
                    waterCurtainWidth += waterCurtainDeg;
                    waterCurtainDeg = 0;
                } else if ( waterCurtainDeg > 180 ) {
                    waterCurtainDisplay(waterCurtainMyNumber,i*2,0);
                    waterCurtainDisplay(waterCurtainMyNumber,i*2+1,0);
                } else if ( waterCurtainDeg + waterCurtainWidth > 180 ) {
                    waterCurtainWidth -= ( 180 - waterCurtainDeg );
                }

                waterCurtainChangeAngle(waterCurtainMyNumber,i*2,waterCurtainDeg-57,waterCurtainWidth);
                waterCurtainChangeAngle(waterCurtainMyNumber,i*2+1,303-waterCurtainDeg,-1*waterCurtainWidth);
            }

            

        });

    } else if ( waterCurtainNumber === 'AE' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(1);
        let waterCurtainBasic = 483;//123
        let waterCurtainSetTimeoutDelay = [];
        let waterCurtainSetInterval = [];

        waterCurtainDisplay(waterCurtainMyNumber,0,1);

        waterCurtainSetTimeoutDelay[0] = 0;
        waterCurtainSetTimeout[0] = setTimeout( function(){
            waterCurtainSetInterval[0] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[0],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                let waterCurtainLoopTime = 11430;
                
                if ( nowTime[0] <= waterCurtainLoopTime ) {
                    let waterCurtainWidth = 207 / waterCurtainLoopTime * nowTime[0];
                    waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasic,-1*waterCurtainWidth);
                }
            });
        },waterCurtainSetTimeoutDelay[0]);

        waterCurtainSetTimeoutDelay[1] = 11600;
        waterCurtainSetTimeout[1] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[0]);

            waterCurtainSetInterval[1] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[1],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                let waterCurtainLoopTime = 35370;
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;                
                
                let waterCurtainWidth, waterCurtainDeg;

                if ( waterCurtainJudgeTime < 7950 ) waterCurtainDeg = waterCurtainBasic - 207 / 7950 * waterCurtainJudgeTime;
                else if ( waterCurtainJudgeTime < 11280 ) waterCurtainDeg = waterCurtainBasic - 203 - 157 / 3330 * ( waterCurtainJudgeTime - 7950 );
                else if ( waterCurtainJudgeTime < 11600 ) waterCurtainDeg = waterCurtainBasic;
                else if ( waterCurtainJudgeTime < 13280 ) waterCurtainDeg = 276 - 90 / 1680 * ( waterCurtainJudgeTime - 11600 );
                else if ( waterCurtainJudgeTime < 17520 ) waterCurtainDeg = 186 - 63 / 4240 * ( waterCurtainJudgeTime - 13280 );
                else if ( waterCurtainJudgeTime < 18160 ) waterCurtainDeg = waterCurtainBasic;
                else if ( waterCurtainJudgeTime < 33160 ) waterCurtainDeg = waterCurtainBasic - 360 / 15000 * ( waterCurtainJudgeTime - 18160 );
                else if ( waterCurtainJudgeTime < 35250 ) waterCurtainDeg = waterCurtainBasic - 207 / 2090 * ( waterCurtainJudgeTime - 33160 );
                else waterCurtainDeg = 276;

                if ( waterCurtainJudgeTime < 5410 ) waterCurtainWidth = -207;
                else if ( waterCurtainJudgeTime < 6040 ) waterCurtainWidth = -207 + 9 / 630 * ( waterCurtainJudgeTime - 5410 );
                else if ( waterCurtainJudgeTime < 11280 ) waterCurtainWidth = -198;
                else if ( waterCurtainJudgeTime < 11600 ) waterCurtainWidth = -198 - 9 / 320 * ( waterCurtainJudgeTime - 11280 );
                else if ( waterCurtainJudgeTime < 13280 ) waterCurtainWidth = 207;
                else if ( waterCurtainJudgeTime < 19040 ) waterCurtainWidth = 207 - 171 / 5760 * ( waterCurtainJudgeTime - 13280 );
                else if ( waterCurtainJudgeTime < 20610 ) waterCurtainWidth = 36 + 18 / 1580 * ( waterCurtainJudgeTime - 19040 );
                else if ( waterCurtainJudgeTime < 33160 ) waterCurtainWidth = 54;
                else if ( waterCurtainJudgeTime < 35250 ) waterCurtainWidth = 54 + 153 / 2090 * ( waterCurtainJudgeTime - 33160 );
                else waterCurtainWidth = 207;

                waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth);
                
            });
        },waterCurtainSetTimeoutDelay[1]);

    } else if ( waterCurtainNumber === 'AF' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(1);
        
        waterCurtainDisplay(waterCurtainMyNumber,0,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainLoopTime = 2000;
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            let waterCurtainDeg = -108 - 360 / waterCurtainLoopTime * waterCurtainJudgeTime;

            waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,144);

        });

    } else if ( waterCurtainNumber === 'AG' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 0.5;
        let waterCurtainNumber = 360;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainLoopTime = 320;
        let waterCurtainDisplayTime = 50;
        let waterCurtainArray = [ 33 , 27 , 16 , 9 , 29 , 28 , 10 , 22 , 32 , 6 , 17 , 33 , 26 , 31 , 30 , 23 , 16 , 16 , 16 , 31 , 20 , 21 , 6 , 7 , 29 , 17 , 0 , 12 , 6 , 15 ];

        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace*i,waterCurtainWidth);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            for ( var i = 0 ; i < 30 ; i++ ) {
                let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainArray[i] * 10 ) % waterCurtainLoopTime;
                let display = 0;

                if ( waterCurtainJudgeTime < waterCurtainDisplayTime ) display = 1;

                for ( var j = 0 ; j < 12 ; j++ ) waterCurtainDisplay(waterCurtainMyNumber,j*30+i,display);

            }

        });

    } else if ( waterCurtainNumber === 'AH' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 0.25;
        let waterCurtainNumber = 4;
        let waterCurtainSmallNumber = 10;
        let waterCurtainSpace = 9;
        let waterCurtainLoopTime = 1000;
        let waterCurtainStartTime = [ 0 , 500 , 200 , 900 , 700 , 300 , 100 , 800 , 400 , 600 ];
        let waterCurtainSmallLoopTime = 200;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber*10);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainNumber*10 ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,4+waterCurtainSpace*i,waterCurtainWidth);
                waterCurtainDisplay(waterCurtainMyNumber,i,0);
            }
        },10);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var l = 0 ; l < waterCurtainSmallNumber ; l++ ) {
                let waterCurtainFullTime = waterCurtainStartTime[l] + waterCurtainSmallLoopTime;
                if ( ( waterCurtainJudgeTime >= waterCurtainStartTime[l] && waterCurtainJudgeTime < waterCurtainFullTime ) || ( waterCurtainStartTime[l] > waterCurtainFullTime && ( waterCurtainJudgeTime >= waterCurtainStartTime[l] || waterCurtainJudgeTime < waterCurtainFullTime ) ) ) {
                    for ( var k = 0 ; k < waterCurtainNumber ; k++ ) waterCurtainDisplay(waterCurtainMyNumber,k*waterCurtainSmallNumber+l,1);
                } else {
                    for ( var k = 0 ; k < waterCurtainNumber ; k++ ) waterCurtainDisplay(waterCurtainMyNumber,k*waterCurtainSmallNumber+l,0);
                }
            }

        });

    } else if ( waterCurtainNumber === 'AI' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 9;
        let waterCurtainWidth = 16;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainLoopTime = 990;
            let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainLoopTime / 4 ) % waterCurtainLoopTime;
            let waterCurtainDeg;

            if ( waterCurtainJudgeTime < waterCurtainLoopTime / 2 ) waterCurtainDeg = 6 / waterCurtainLoopTime * 2 * waterCurtainJudgeTime;
            else waterCurtainDeg = 6 - 6 / waterCurtainLoopTime * 2 * ( waterCurtainJudgeTime - waterCurtainLoopTime / 2 );

            for ( let i = 0 ; i < waterCurtainNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,5 + waterCurtainSpace * i + waterCurtainDeg,waterCurtainWidth);
            }

        });      

    } else if ( waterCurtainNumber === 'AJ' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(1);
        let waterCurtainBasic = 123;
        let waterCurtainSetTimeoutDelay = [];
        let waterCurtainSetInterval = [];

        waterCurtainDisplay(waterCurtainMyNumber,0,1);

        waterCurtainSetTimeoutDelay[0] = 0;
        waterCurtainSetTimeout[0] = setTimeout( function(){
            waterCurtainSetInterval[0] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[0],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                let waterCurtainLoopTime = 6800;
                
                if ( nowTime[0] <= waterCurtainLoopTime ) {
                    let waterCurtainWidth = 360 / waterCurtainLoopTime * nowTime[0];
                    waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasic,-1*waterCurtainWidth);
                }
            });
        },waterCurtainSetTimeoutDelay[0]);

        waterCurtainSetTimeoutDelay[1] = 9070;
        waterCurtainSetTimeout[1] = setTimeout( function(){
            clearInterval(waterCurtainSetInterval[0]);

            waterCurtainSetInterval[1] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[1],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                let waterCurtainLoopTime = 6600;
                
                if ( nowTime[0] <= waterCurtainLoopTime ) {
                    let waterCurtainWidth = 360 - 360 / waterCurtainLoopTime * nowTime[0];
                    waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasic,waterCurtainWidth);
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,0,0);
                    clearInterval(waterCurtainSetInterval[1]);
                }
            });
        },waterCurtainSetTimeoutDelay[1]);

    } else if ( waterCurtainNumber === 'AL' ) {
        let startTime = Date.now();
        let waterCurtainLoopTime = 6570;
        let waterCurtainMyNumber = waterCurtainSetting(60);

        function waterCurtainCrystal(nowTime,waterCurtainNowNumber,startDeg,widthDeg,startTime,beforeTime=0,afterTime=0) {
            nowTime -= startTime;
            if ( nowTime >= 0 && nowTime < beforeTime + 360 + afterTime ) {
                let basicDeg = widthDeg / 7;
                if ( nowTime < beforeTime ) {
                    let waterCurtainDeg = basicDeg/beforeTime*nowTime;
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowNumber*3,startDeg+basicDeg*3+(basicDeg-waterCurtainDeg)/2,waterCurtainDeg);
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowNumber*3,1);
                } else if ( nowTime < beforeTime + 120 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowNumber*3+1,startDeg,basicDeg*2);
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowNumber*3,startDeg+basicDeg*3,basicDeg);
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowNumber*3+2,startDeg+basicDeg*5,basicDeg*2);
                    for ( var i = 0 ; i < 3 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowNumber*3+i,1);
                } else if ( nowTime < beforeTime + 240 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowNumber*3,startDeg+basicDeg*2,basicDeg*3);
                    for ( var i = 1 ; i < 3 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowNumber*3+i,0);
                } else if ( nowTime < beforeTime + 360 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowNumber*3,startDeg+basicDeg*3,basicDeg);
                    for ( var i = 1 ; i < 3 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowNumber*3+i,1);
                } else {
                    let waterCurtainDeg = basicDeg-basicDeg/afterTime*(nowTime-(beforeTime + 360 + afterTime));
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNowNumber*3,startDeg+basicDeg*3+(basicDeg-waterCurtainDeg)/2,waterCurtainDeg);
                    for ( var i = 1 ; i < 3 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowNumber*3+i,0);
                }
            } else {
                for ( var i = 0 ; i < 3 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNowNumber*3+i,0);
            }
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            waterCurtainCrystal(waterCurtainJudgeTime,0,105,25,0,0,50);
            waterCurtainCrystal(waterCurtainJudgeTime,1,250,25,0,0,50);
            waterCurtainCrystal(waterCurtainJudgeTime,2,340,25,0,0,50);

            waterCurtainCrystal(waterCurtainJudgeTime,3,252,27,890,240,50);
            waterCurtainCrystal(waterCurtainJudgeTime,4,10,25,1280,160,100);
            waterCurtainCrystal(waterCurtainJudgeTime,5,146,30,1250,120,50);
            waterCurtainCrystal(waterCurtainJudgeTime,6,75,30,1490,50,50);
            waterCurtainCrystal(waterCurtainJudgeTime,7,304,38,1680,50,50);
            waterCurtainCrystal(waterCurtainJudgeTime,8,180,30,1890,50,50);
            waterCurtainCrystal(waterCurtainJudgeTime,9,230,30,2170,100,100);

            waterCurtainCrystal(waterCurtainJudgeTime,10,170,28,3040,280,50);
            waterCurtainCrystal(waterCurtainJudgeTime,11,230,25,3690,50,50);
            waterCurtainCrystal(waterCurtainJudgeTime,12,295,35,3900,100,100);
            waterCurtainCrystal(waterCurtainJudgeTime,13,10,28,4300,50,50);
            waterCurtainCrystal(waterCurtainJudgeTime,14,107,25,4490,50,50);

            waterCurtainCrystal(waterCurtainJudgeTime,15,260,25,5720,150,50);
            waterCurtainCrystal(waterCurtainJudgeTime,16,10,25,5780,150,50);
            waterCurtainCrystal(waterCurtainJudgeTime,17,150,25,5770,150,50);
            waterCurtainCrystal(waterCurtainJudgeTime,18,60,25,6130,50,50);
            waterCurtainCrystal(waterCurtainJudgeTime,19,295,30,6210,50,50);
            waterCurtainCrystal(waterCurtainJudgeTime,20,195,25,6350,50,50);


        });

    } else if ( waterCurtainNumber === 'AM' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(1);
        let waterCurtainBasic = 483;//123
        let waterCurtainSetTimeoutDelay = [];

        waterCurtainSetTimeoutDelay[0] = 350;
        waterCurtainSetTimeout[0] = setTimeout( function(){
            waterCurtainDisplay(waterCurtainMyNumber,0,1);

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[0],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                
                let waterCurtainWidth, waterCurtainDeg;

                if ( nowTime[0] < 340 ) waterCurtainDeg = waterCurtainBasic;
                else if ( nowTime[0] < 4080 ) waterCurtainDeg = waterCurtainBasic - 180 / 3740 * ( nowTime[0] - 340 );
                else if ( nowTime[0] < 6040 ) waterCurtainDeg = 303 - 3 / 1960 * ( nowTime[0] - 4080 );
                else if ( nowTime[0] < 7800 ) waterCurtainDeg = 298 + 108 / 1760 * ( nowTime[0] - 6040 );
                else if ( nowTime[0] < 12840 ) waterCurtainDeg = 433 - 350 / 5040 * ( nowTime[0] - 7800 );
                else if ( nowTime[0] < 15160 ) waterCurtainDeg = 433 - 180 / 2320 * ( nowTime[0] - 12840 );//253
                else if ( nowTime[0] < 19360 ) waterCurtainDeg = 238 - 208 / 4200 * ( nowTime[0] - 15160 );
                else {
                    waterCurtainDisplay(waterCurtainMyNumber,0,0);
                    clearInterval(waterCurtainSetInterval);
                }

                if ( nowTime[0] < 6040 ) waterCurtainWidth = 50;
                else if ( nowTime[0] < 7800 ) waterCurtainWidth = 45;
                else if ( nowTime[0] < 15160 ) waterCurtainWidth = -35;
                else if ( nowTime[0] < 19360 ) waterCurtainWidth = -50;

                waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth);
            });
        },waterCurtainSetTimeoutDelay[0]);

    } else if ( waterCurtainNumber === 'AN' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 4;
        let waterCurtainBigNumber = 10;
        let waterCurtainSmallNumber = 3;
        let waterCurtainLoopTime = 4000;
        let waterCurtainLoopTime2 = [ 4000 , 6000 ];
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainBigNumber;
        let waterCurtainSmallLoopTime = 200;
        let waterCurtainSmallLoopDisplayTime = 150;
        let waterCurtainSmallLapTime = 100;
        let waterCurtainLapDeg = 378;
        let waterCurtainRestDeg = waterCurtainLapDeg - 360;
        let waterCurtainBasicDeg = 234;
        let waterCurtainWidth2 = [ 18 , 36 ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainBigNumber*waterCurtainSmallNumber+2);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainBigNumber*waterCurtainSmallNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,70 - 360 / waterCurtainBigNumber * Math.round( i / waterCurtainSmallNumber ) - ( waterCurtainWidth + 1 ) * ( i % waterCurtainSmallNumber ),waterCurtainWidth);
            }
        },10);

        setTimeout( function(){
            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime,440,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                for ( var i = 0 ; i < waterCurtainBigNumber*waterCurtainSmallNumber ; i++ ) {
                    waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }
                
                let waterCurtainJudgeTime = nowTime[1] % 30000 % waterCurtainLoopTime;

                for ( var l = 0 ; l < waterCurtainBigNumber ; l++ ) {
                    let waterCurtainFullTime = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * 2 + waterCurtainSmallLapTime * ( waterCurtainSmallNumber + 1 ) ) % waterCurtainLoopTime;
                    if ( ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * l && waterCurtainJudgeTime < waterCurtainFullTime ) || ( waterCurtainLoopTimeSplit * l > waterCurtainFullTime && ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * l || waterCurtainJudgeTime < waterCurtainFullTime ) ) ) {
                        for ( var k = 0 ; k < 3 ; k++ ) {
                            for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) {
                                let waterCurtainFullTime1 = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * k + waterCurtainSmallLapTime * j ) % waterCurtainLoopTime;
                                let waterCurtainFullTime2 = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * k + waterCurtainSmallLapTime * j + waterCurtainSmallLoopDisplayTime ) % waterCurtainLoopTime;
                                if ( ( waterCurtainJudgeTime >= waterCurtainFullTime1 && waterCurtainJudgeTime < waterCurtainFullTime2 ) || ( waterCurtainFullTime1 > waterCurtainFullTime2 && ( waterCurtainJudgeTime >= waterCurtainFullTime1 || waterCurtainJudgeTime < waterCurtainFullTime2 ) ) ) {
                                    waterCurtainDisplay(waterCurtainMyNumber, l * waterCurtainSmallNumber + ( j % waterCurtainSmallNumber ) ,1);
                                    break;
                                }
                            }
                        }
                    }
                }

                for ( var i = 0 ; i < 2 ; i++ ) {
                    waterCurtainJudgeTime = nowTime[1] % 30000 % waterCurtainLoopTime2[i];
                    let waterCurtainDeg = waterCurtainBasicDeg + waterCurtainLapDeg / waterCurtainLoopTime2[i] * waterCurtainJudgeTime;

                    waterCurtainDeg %= waterCurtainLapDeg;
                    let waterCurtainJudgeDeg = waterCurtainDeg - 18 * 13;
                    let waterCurtainNowWidth = waterCurtainWidth2[i];
                    if ( waterCurtainJudgeDeg >= waterCurtainRestDeg + waterCurtainNowWidth ) {
                        waterCurtainDeg -= waterCurtainRestDeg;
                    } else if ( waterCurtainJudgeDeg >= waterCurtainRestDeg ) {
                        waterCurtainDeg -= waterCurtainRestDeg;
                        waterCurtainNowWidth = ( waterCurtainNowWidth - waterCurtainRestDeg ) + waterCurtainRestDeg * ( ( waterCurtainJudgeDeg - waterCurtainRestDeg ) / waterCurtainRestDeg );
                    } else if ( waterCurtainJudgeDeg >= 0 ) {
                        waterCurtainDeg = 18 * 13;
                        waterCurtainNowWidth = waterCurtainNowWidth - waterCurtainRestDeg * ( waterCurtainJudgeDeg / waterCurtainRestDeg );
                    }

                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainBigNumber*waterCurtainSmallNumber+i,1);
                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainBigNumber*waterCurtainSmallNumber+i,-1*waterCurtainDeg,waterCurtainNowWidth);
                }

            });
        },300);

    } else if ( waterCurtainNumber === 'AO' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 2;
        let waterCurtainLoopTime = 20000;
        let waterCurtainLoopTimeSplit = [ 4000 , 3050 , 1950 , 3000 , 8000 ];
        let waterCurtainWidth = [ -22 , -22 , -22 , -18 , -9 ];
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainDegSpeed = [ -180 , -180 , -180 , 540 , -2880 ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            if ( nowTime[0] > 39400 ) {
                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                clearInterval(waterCurtainSetInterval);
            }

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var j = 0 ; j < 5 ; j++ ) {
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit[j] ) {
                    for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i, 123 + waterCurtainSpace * i + waterCurtainDegSpeed[j] / waterCurtainLoopTimeSplit[j] * waterCurtainJudgeTime ,waterCurtainWidth[j]);
                    break;
                } else {
                    waterCurtainJudgeTime -= waterCurtainLoopTimeSplit[j];
                }
            }
            
        });

    } else if ( waterCurtainNumber === 'AO2' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 2;
        let waterCurtainLoopTime = 20000;
        let waterCurtainLoopTimeSplit = [ 4000 , 3050 , 1950 , 3000 , 8000 ];
        let waterCurtainWidth = [ -22 , -22 , -22 , -18 , -9 ];
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainDegSpeed = [ -180 , -180 , -180 , 540 , -2880 ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            /*if ( nowTime[0] > 39400 ) {
                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                clearInterval(waterCurtainSetInterval);
            }*/
            nowTime[0] %= 20500;

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var j = 0 ; j < 5 ; j++ ) {
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit[j] ) {
                    for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i, 123 + waterCurtainSpace * i + waterCurtainDegSpeed[j] / waterCurtainLoopTimeSplit[j] * waterCurtainJudgeTime ,waterCurtainWidth[j]);
                    break;
                } else {
                    waterCurtainJudgeTime -= waterCurtainLoopTimeSplit[j];
                }
            }
            
        });

    } else if ( waterCurtainNumber === 'AP' ) {
        let startTime = Date.now();
        let waterCurtainLoopTime = 10000;
        let waterCurtainLoopTimeSplit = [ 4000 , 6000 ];
        let waterCurtainWidth = 40;
        let waterCurtainDegSpeed = [ -720 , 1080 ];
        let waterCurtainMyNumber = waterCurtainSetting(1);

        waterCurtainDisplay(waterCurtainMyNumber,0,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainJudgeTime = ( nowTime[0] + 100 ) % waterCurtainLoopTime;

            for ( var j = 0 ; j < 2 ; j++ ) {
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit[j] ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,0, 123 + waterCurtainDegSpeed[j] / waterCurtainLoopTimeSplit[j] * waterCurtainJudgeTime ,waterCurtainWidth);
                    break;
                } else {
                    waterCurtainJudgeTime -= waterCurtainLoopTimeSplit[j];
                }
            }
            
        });

    } else if ( waterCurtainNumber === 'AQ' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 2;
        let waterCurtainLoopTime = 4000;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / 2;
        let waterCurtainBasicDeg = 123;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( let l = 0 ; l < 2 ; l++ ) {
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit * ( l + 1 ) ) {
                    waterCurtainJudgeTime -= waterCurtainLoopTimeSplit * l;
                    
                    if ( waterCurtainJudgeTime < 500 ) {
                        for ( let i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    } else if ( waterCurtainJudgeTime < 1000 ) {
                        let waterCurtainDeg = 90 / 500 * ( waterCurtainJudgeTime - 500 );
                        
                        for ( let i = 0 ; i < waterCurtainNumber ; i++ ) {
                            waterCurtainDisplay(waterCurtainMyNumber,i,1);
                            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasicDeg+180*i,( (-1) ** (l+1) )*waterCurtainDeg);
                        }
                    } else if ( waterCurtainJudgeTime < 1500 ) {

                    } else if ( waterCurtainJudgeTime < 2000 ) {
                        let waterCurtainDeg = 90 - 90 / 500 * ( waterCurtainJudgeTime - 1500 );
                        
                        for ( let i = 0 ; i < waterCurtainNumber ; i++ ) {
                            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasicDeg+90+180*i,( (-1) ** l )*waterCurtainDeg);
                        }
                    }
                    break;
                }
                
            }
        });

    } else if ( waterCurtainNumber === 'AR' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(4);
        let waterCurtainBasic = 123;
        let waterCurtainSetTimeoutDelay = [];

        waterCurtainSetTimeoutDelay[0] = 520;
        waterCurtainSetTimeout[0] = setTimeout( function(){

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[0],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                let waterCurtainLoopTime = 20730;
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
                
                if ( waterCurtainJudgeTime <= 3210 ) {
                    let waterCurtainWidth = 90 / 3210 * waterCurtainJudgeTime;
                    for ( var i = 0 ; i < 2 ; i++ ) {
                        waterCurtainDisplay(waterCurtainMyNumber,i,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,i,180*i+waterCurtainBasic,-1*waterCurtainWidth);
                    }
                } else if ( waterCurtainJudgeTime >= 5520 && waterCurtainJudgeTime <= 8560 ) {
                    let waterCurtainWidth = 90 / 3040 * ( waterCurtainJudgeTime - 5520 );
                    for ( var i = 2 ; i < 4 ; i++ ) {
                        waterCurtainDisplay(waterCurtainMyNumber,i,1);
                        waterCurtainChangeAngle(waterCurtainMyNumber,i,180*i+waterCurtainBasic,waterCurtainWidth);
                    }
                } else if ( waterCurtainJudgeTime >= 11440 && waterCurtainJudgeTime <= 14370 ) {
                    let waterCurtainWidth = 90 - 90 / 2930 * ( waterCurtainJudgeTime - 11440);
                    for ( var i = 0 ; i < 2 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,180*i+waterCurtainBasic-90,waterCurtainWidth);
                } else if ( waterCurtainJudgeTime >= 15720 && waterCurtainJudgeTime <= 18680 ) {
                    let waterCurtainWidth = 90 - 90 / 2960 * ( waterCurtainJudgeTime - 15720 );
                    for ( var i = 0 ; i < 2 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    for ( var i = 2 ; i < 4 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,180*i+waterCurtainBasic+90,-1*waterCurtainWidth);
                } else if ( waterCurtainJudgeTime > 18680 ) {
                    for ( var i = 2 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }

            });
        },waterCurtainSetTimeoutDelay[0]);

    } else if ( waterCurtainNumber === 'AS' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(30);
        let waterCurtainBasic = 123;
        let waterCurtainSetTimeoutDelay = [];
        let waterCurtainSetInterval = [];

        waterCurtainSetTimeoutDelay[0] = 1230;
        waterCurtainSetTimeout[0] = setTimeout( function(){
            let waterCuratinNumber = 20;
            let waterCurtainLoopTime = 3970;
            let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCuratinNumber;
            let waterCurtainDisplayTime = 280;
            let waterCurtainWidth = -1 * ( 360 / waterCuratinNumber );

            for ( var i = 0 ; i < waterCuratinNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic + waterCurtainWidth * i,waterCurtainWidth);

            waterCurtainSetInterval[0] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[0],0,waterCurtainUseNumber,waterCurtainSetInterval[0],waterCurtainMyNumber);
                
                if ( nowTime[0] < waterCurtainLoopTime + waterCurtainDisplayTime ) {
                    for ( var i = 0 ; i < waterCuratinNumber ; i++ ) {
                        if ( nowTime[0] >= waterCurtainLoopTimeSplit * i && nowTime[0] < waterCurtainLoopTimeSplit * i + waterCurtainDisplayTime ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                        else if ( !( i === 0 && nowTime[0] > 500 ) ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    }
                } else {
                    clearInterval(waterCurtainSetInterval[0]);
                }

            });
        },waterCurtainSetTimeoutDelay[0]);

        waterCurtainSetTimeoutDelay[1] = 5200;
        waterCurtainSetTimeout[1] = setTimeout( function(){
            let waterCuratinNumber = 20;
            let waterCurtainLoopTime = 3970;
            let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCuratinNumber;
            let waterCurtainDisplayTime = 280;

            waterCurtainSetInterval[1] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[1],0,waterCurtainUseNumber,waterCurtainSetInterval[1],waterCurtainMyNumber);
                
                if ( nowTime[0] < waterCurtainLoopTime + waterCurtainDisplayTime ) {
                    for ( var i = 0 ; i < waterCuratinNumber ; i++ ) {
                        if ( nowTime[0] >= waterCurtainLoopTimeSplit * i && nowTime[0] < waterCurtainLoopTimeSplit * i + waterCurtainDisplayTime ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                        else if ( !( i === 19 && nowTime[0] < 500 ) ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    }
                } else {
                    clearInterval(waterCurtainSetInterval[1]);
                }

            });
        },waterCurtainSetTimeoutDelay[1]);

        waterCurtainSetTimeoutDelay[2] = 9430;
        waterCurtainSetTimeout[2] = setTimeout( function(){
            let waterCuratinNumber = 5;
            let waterCurtainDisplayTime = 420;
            let waterCurtainWidth = -1 * ( 360 / waterCuratinNumber );

            for ( var i = 0 ; i < waterCuratinNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i+20,waterCurtainBasic + waterCurtainWidth * i,waterCurtainWidth);

            waterCurtainSetInterval[2] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[2],0,waterCurtainUseNumber,waterCurtainSetInterval[2],waterCurtainMyNumber);
                
                if ( nowTime[0] < waterCurtainDisplayTime * waterCuratinNumber + 100 ) {
                    for ( var i = 0 ; i < waterCuratinNumber ; i++ ) {
                        if ( nowTime[0] >= waterCurtainDisplayTime * i && nowTime[0] < waterCurtainDisplayTime * ( i + 1 ) ) waterCurtainDisplay(waterCurtainMyNumber,i+20,1);
                        else waterCurtainDisplay(waterCurtainMyNumber,i+20,0);
                    }
                } else {
                    clearInterval(waterCurtainSetInterval[2]);
                }

            });
        },waterCurtainSetTimeoutDelay[2]);

        waterCurtainSetTimeoutDelay[3] = 11550;
        waterCurtainSetTimeout[3] = setTimeout( function(){
            let waterCuratinNumber = 4;
            let waterCurtainDisplayTime = 560;
            let waterCurtainWidth = -1 * ( 360 / waterCuratinNumber );

            for ( var i = 0 ; i < waterCuratinNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i+25,waterCurtainBasic + waterCurtainWidth * i,waterCurtainWidth);

            waterCurtainSetInterval[3] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[3],0,waterCurtainUseNumber,waterCurtainSetInterval[3],waterCurtainMyNumber);
                
                if ( nowTime[0] < waterCurtainDisplayTime * waterCuratinNumber ) {
                    for ( var i = 0 ; i < waterCuratinNumber ; i++ ) {
                        if ( nowTime[0] >= waterCurtainDisplayTime * i && nowTime[0] < waterCurtainDisplayTime * ( i + 1 ) ) waterCurtainDisplay(waterCurtainMyNumber,i+25,1);
                        else waterCurtainDisplay(waterCurtainMyNumber,i+25,0);
                    }
                } else {
                    clearInterval(waterCurtainSetInterval[3]);
                }

            });
        },waterCurtainSetTimeoutDelay[3]);

        waterCurtainSetTimeoutDelay[4] = 13550;
        waterCurtainSetTimeout[4] = setTimeout( function(){
            let waterCurtainLoopTime = 3000;

            clearInterval(waterCurtainSetInterval[3]);
            for ( var i = 1 ; i < 4 ; i++ )waterCurtainDisplay(waterCurtainMyNumber,25+i,0);

            waterCurtainSetInterval[4] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[4],0,waterCurtainUseNumber,waterCurtainSetInterval[4],waterCurtainMyNumber);
                
/*                if ( nowTime[0] >= 16600 ) {
                    waterCurtainDisplay(waterCurtainMyNumber,0,0);
                    clearInterval(waterCurtainSetInterval[4]);
                }*/

                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
                let waterCurtainDeg = 93 - 360 / waterCurtainLoopTime * waterCurtainJudgeTime;

                waterCurtainChangeAngle(waterCurtainMyNumber,29,waterCurtainDeg,144);
                waterCurtainDisplay(waterCurtainMyNumber,29,1);

            });
        },waterCurtainSetTimeoutDelay[4]);

        waterCurtainSetTimeoutDelay[5] = 30150;
        waterCurtainSetTimeout[5] = setTimeout( function(){
            waterCurtainDisplay(waterCurtainMyNumber,29,0);
            clearInterval(waterCurtainSetInterval[4]);

        },waterCurtainSetTimeoutDelay[5]);

    } else if ( waterCurtainNumber === 'AT' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 34;
        let waterCurtainSpace = 10.7;
        let waterCurtainWidth = 0.25;
        let waterCurtainBasic = 140;
        let waterCurtainBasic2 = 122.4;

        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber + 1);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic + waterCurtainSpace * i,waterCurtainWidth);
                waterCurtainDisplay(waterCurtainMyNumber,i,1);
            }
            waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNumber,1);

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+320,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                if ( nowTime[0] > 30310 ) {
                    clearInterval(waterCurtainSetInterval);
                }
    
                let waterCurtainLoopTime = 9130;
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
    
                if ( waterCurtainJudgeTime < 720 ) {
                    
                } else if ( waterCurtainJudgeTime < 3160 ) {
                    waterCurtainDisplay(waterCurtainMyNumber,34,1);
                    waterCurtainChangeAngle(waterCurtainMyNumber,34,waterCurtainBasic2, -360 / 2440 * ( waterCurtainJudgeTime - 720 ) );
                } else if ( waterCurtainJudgeTime < 4810 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,34,waterCurtainBasic2,360);
                } else if ( waterCurtainJudgeTime < 7610 ) {
                    waterCurtainChangeAngle(waterCurtainMyNumber,34,waterCurtainBasic2, -360 + 360 / 2800 * ( waterCurtainJudgeTime - 4810 ) );
                } else {
                    waterCurtainDisplay(waterCurtainMyNumber,34,0);
                }
    
            });
        },320);

    } else if ( waterCurtainNumber === 'AU' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 4;
        let waterCurtainBigNumber = 10;
        let waterCurtainSmallNumber = 4;
        let waterCurtainLoopTime = 2000;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainBigNumber;
        let waterCurtainSmallLoopTime = 100;
        let waterCurtainSmallLoopDisplayTime = 60;
        let waterCurtainSmallLapTime = 160;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainBigNumber*waterCurtainSmallNumber);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainBigNumber*waterCurtainSmallNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,90 - 360 / waterCurtainBigNumber * Math.round( i / waterCurtainSmallNumber ) - waterCurtainWidth * ( i % waterCurtainSmallNumber ),waterCurtainWidth);
            }
        },10);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            nowTime[0] %= 30000;

            for ( var i = 0 ; i < waterCurtainBigNumber*waterCurtainSmallNumber ; i++ ) {
                waterCurtainDisplay(waterCurtainMyNumber,i,0);
            }

            if ( nowTime[0] >= 2000 && nowTime[0] < 2060 ) {
                for ( var l = 0 ; l < waterCurtainBigNumber ; l++ ) waterCurtainDisplay(waterCurtainMyNumber, l * waterCurtainSmallNumber,1);
            } else if ( nowTime[0] >= 2040 && nowTime[0] < 2100 ) {
                for ( var l = 0 ; l < waterCurtainBigNumber ; l++ ) waterCurtainDisplay(waterCurtainMyNumber, l * waterCurtainSmallNumber + 1,1);
            }
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var l = 0 ; l < waterCurtainBigNumber ; l++ ) {
                let waterCurtainFullTime = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * 2 + waterCurtainSmallLapTime * ( waterCurtainSmallNumber + 1 ) ) % waterCurtainLoopTime;
                if ( ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * l && waterCurtainJudgeTime < waterCurtainFullTime ) || ( waterCurtainLoopTimeSplit * l > waterCurtainFullTime && ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * l || waterCurtainJudgeTime < waterCurtainFullTime ) ) ) {
                    for ( var k = 0 ; k < 3 ; k++ ) {
                        for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) {
                            let waterCurtainFullTime1 = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * k + waterCurtainSmallLapTime * j ) % waterCurtainLoopTime;
                            let waterCurtainFullTime2 = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * k + waterCurtainSmallLapTime * j + waterCurtainSmallLoopDisplayTime ) % waterCurtainLoopTime;
                            if ( ( waterCurtainJudgeTime >= waterCurtainFullTime1 && waterCurtainJudgeTime < waterCurtainFullTime2 ) || ( waterCurtainFullTime1 > waterCurtainFullTime2 && ( waterCurtainJudgeTime >= waterCurtainFullTime1 || waterCurtainJudgeTime < waterCurtainFullTime2 ) ) ) {
                                waterCurtainDisplay(waterCurtainMyNumber, l * waterCurtainSmallNumber + ( j % waterCurtainSmallNumber ) ,1);
                                break;
                            }
                        }
                    }
                }
            }

        });

    } else if ( waterCurtainNumber === 'AV' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 4;
        let waterCurtainBigNumber = 10;
        let waterCurtainSmallNumber = 4;
        let waterCurtainLoopTime = 5000;
        let waterCurtainLoopTime2 = 10000;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainBigNumber;
        let waterCurtainSmallLoopTime = 248;
        let waterCurtainSmallLoopDisplayTime = 40;
        let waterCurtainSmallLapTime = 62;
        let waterCurtainLapDeg = 378;
        let waterCurtainRestDeg = waterCurtainLapDeg - 360;
        let waterCurtainBasicDeg = 234;
        let waterCurtainWidth2 = 12;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainBigNumber*waterCurtainSmallNumber+2);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainBigNumber*waterCurtainSmallNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,70 - 360 / waterCurtainBigNumber * Math.round( i / waterCurtainSmallNumber ) - ( waterCurtainWidth + 1 ) * ( i % waterCurtainSmallNumber ),waterCurtainWidth);
            }
        },10);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            for ( var i = 0 ; i < waterCurtainBigNumber*waterCurtainSmallNumber ; i++ ) {
                waterCurtainDisplay(waterCurtainMyNumber,i,0);
            }
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var l = 0 ; l < waterCurtainBigNumber ; l++ ) {
                let waterCurtainFullTime = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * 2 + waterCurtainSmallLapTime * ( waterCurtainSmallNumber + 1 ) ) % waterCurtainLoopTime;
                if ( ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * l && waterCurtainJudgeTime < waterCurtainFullTime ) || ( waterCurtainLoopTimeSplit * l > waterCurtainFullTime && ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * l || waterCurtainJudgeTime < waterCurtainFullTime ) ) ) {
                    for ( var k = 0 ; k < 4 ; k++ ) {
                        for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) {
                            let waterCurtainFullTime1 = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * k + waterCurtainSmallLapTime * j ) % waterCurtainLoopTime;
                            let waterCurtainFullTime2 = ( waterCurtainLoopTimeSplit * l + waterCurtainSmallLoopTime * k + waterCurtainSmallLapTime * j + waterCurtainSmallLoopDisplayTime ) % waterCurtainLoopTime;
                            if ( ( waterCurtainJudgeTime >= waterCurtainFullTime1 && waterCurtainJudgeTime < waterCurtainFullTime2 ) || ( waterCurtainFullTime1 > waterCurtainFullTime2 && ( waterCurtainJudgeTime >= waterCurtainFullTime1 || waterCurtainJudgeTime < waterCurtainFullTime2 ) ) ) {
                                waterCurtainDisplay(waterCurtainMyNumber, l * waterCurtainSmallNumber + ( j % waterCurtainSmallNumber ) ,1);
                                break;
                            }
                        }
                    }
                }
            }

            for ( var i = 0 ; i < 2 ; i++ ) {
                waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime2;
                let waterCurtainDeg = waterCurtainBasicDeg + waterCurtainLapDeg / 2 * i + waterCurtainLapDeg / waterCurtainLoopTime2 * waterCurtainJudgeTime;

                waterCurtainDeg %= waterCurtainLapDeg;
                let waterCurtainJudgeDeg = waterCurtainDeg - 18 * 13;
                let waterCurtainNowWidth = waterCurtainWidth2;
                if ( waterCurtainJudgeDeg >= waterCurtainRestDeg + waterCurtainNowWidth ) {
                    waterCurtainDeg -= waterCurtainRestDeg;
                } else if ( waterCurtainJudgeDeg >= waterCurtainRestDeg ) {
                    waterCurtainDeg -= waterCurtainRestDeg;
                    waterCurtainNowWidth = waterCurtainJudgeDeg - waterCurtainRestDeg;
                } else if ( waterCurtainJudgeDeg >= 0 ) {
                    waterCurtainDeg = 18 * 13;
                    waterCurtainNowWidth = waterCurtainNowWidth - waterCurtainRestDeg * ( waterCurtainJudgeDeg / waterCurtainRestDeg );
                }

                if ( waterCurtainNowWidth < 0 ) waterCurtainNowWidth = 0;

                waterCurtainDisplay(waterCurtainMyNumber,waterCurtainBigNumber*waterCurtainSmallNumber+i,1);
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainBigNumber*waterCurtainSmallNumber+i,-1*waterCurtainDeg,waterCurtainNowWidth);
            }

        });

    } else if ( waterCurtainNumber === 'AX' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(1);
        let waterCurtainBasic = 483;//123
        let waterCurtainSetTimeoutDelay = [];
        let waterCurtainSetInterval = [];

        waterCurtainDisplay(waterCurtainMyNumber,0,1);

        waterCurtainSetTimeoutDelay[0] = 680;
        waterCurtainSetTimeout[0] = setTimeout( function(){
            waterCurtainSetInterval[0] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[0],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                let waterCurtainLoopTime = 30200;
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;                
                
                let waterCurtainWidth, waterCurtainDeg;

                if ( waterCurtainJudgeTime < 2760 ) waterCurtainDeg = waterCurtainBasic;
                else if ( waterCurtainJudgeTime < 10440 ) waterCurtainDeg = waterCurtainBasic - 306 / 7680 * ( waterCurtainJudgeTime - 2760 );
                else if ( waterCurtainJudgeTime < 12640 ) waterCurtainDeg = 339 - 90 / 2200 * ( waterCurtainJudgeTime - 10440 );
                else if ( waterCurtainJudgeTime < 13770 ) waterCurtainDeg = 159 - 70 / 1130 * ( waterCurtainJudgeTime - 12640 );
                else if ( waterCurtainJudgeTime < 24200 ) waterCurtainDeg = 280 - 244 / 10430 * ( waterCurtainJudgeTime - 13770 );
                else if ( waterCurtainJudgeTime < 24880 ) waterCurtainDeg = 36 - 45 / 680 * ( waterCurtainJudgeTime - 24200 );
                else if ( waterCurtainJudgeTime < 25240 ) waterCurtainDeg = -9;
                else if ( waterCurtainJudgeTime < 26240 ) waterCurtainDeg = -9 - 108 / 1000 * ( waterCurtainJudgeTime - 25240 );

                if ( waterCurtainJudgeTime < 2400 ) waterCurtainWidth = -207 / 2400 * waterCurtainJudgeTime;
                else if ( waterCurtainJudgeTime < 7200 ) waterCurtainWidth = -207;
                else if ( waterCurtainJudgeTime < 7560 ) waterCurtainWidth = -207 + 9 / 360 * ( waterCurtainJudgeTime - 7200 );
                else if ( waterCurtainJudgeTime < 10440 ) waterCurtainWidth = -198;
                else if ( waterCurtainJudgeTime < 12640 ) waterCurtainWidth = 144 - 72 / 2200 * ( waterCurtainJudgeTime - 10440 );
                else if ( waterCurtainJudgeTime < 13770 ) waterCurtainWidth = 162 - 15 / 1130 * ( waterCurtainJudgeTime - 12640 );
                else if ( waterCurtainJudgeTime < 15840 ) waterCurtainWidth = -195;
                else if ( waterCurtainJudgeTime < 17570 ) waterCurtainWidth = -195 + 87 / 1670 * ( waterCurtainJudgeTime - 15840 );
                else if ( waterCurtainJudgeTime < 24200 ) waterCurtainWidth = -108 - 18 / 6630 * ( waterCurtainJudgeTime - 17570 );
                else if ( waterCurtainJudgeTime < 24880 ) waterCurtainWidth = -126 + 26 / 680 * ( waterCurtainJudgeTime - 24200 );
                else if ( waterCurtainJudgeTime < 25240 ) waterCurtainWidth = -100 - 5 / 360 * ( waterCurtainJudgeTime - 24880 );
                else if ( waterCurtainJudgeTime < 26240 ) waterCurtainWidth = -100 + 100 / 1000 * ( waterCurtainJudgeTime - 25240 );
                else waterCurtainWidth = 0;

                waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth);
            });
        },waterCurtainSetTimeoutDelay[0]);

    } else if ( waterCurtainNumber === 'AY' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(8);
        let waterCurtainLoopTime = 7600;
        let waterCurtainSplitTime1 = 2370;
        let waterCurtainSplitTime2 = 4900;
        let waterCurtainMoveTime1 = 3030;
        let waterCurtainMoveTime2 = 2700;
        let waterCurtainBasicDeg = 20;

        waterCurtainSetTimeout[0] = setTimeout( function(){
            for ( var i = 0 ; i < 4 ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasicDeg+180*Math.trunc(i/2),( (-1) ** (i+1) )*90);

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+260,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

                if ( waterCurtainJudgeTime < waterCurtainSplitTime1 + waterCurtainMoveTime1 ) {
                    
                    for ( var i = 0 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

                    if ( nowTime[0] >= waterCurtainSplitTime1 ) {
                        let waterCurtainDeg = 90 - 90 / waterCurtainMoveTime1 * ( waterCurtainJudgeTime - waterCurtainSplitTime1 );

                        waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasicDeg,-waterCurtainDeg);
                        waterCurtainChangeAngle(waterCurtainMyNumber,1,waterCurtainBasicDeg,waterCurtainDeg);
                        waterCurtainChangeAngle(waterCurtainMyNumber,2,waterCurtainBasicDeg+180,-waterCurtainDeg);
                        waterCurtainChangeAngle(waterCurtainMyNumber,3,waterCurtainBasicDeg+180,waterCurtainDeg);
                    }

                } else {
                    for ( var i = 0 ; i < 4 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }

                if ( waterCurtainJudgeTime >= waterCurtainSplitTime2 ) {
                    
                    for ( var i = 4 ; i < 8 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

                    if ( nowTime[0] >= waterCurtainSplitTime1 ) {
                        let waterCurtainDeg = 90 / waterCurtainMoveTime2 * ( waterCurtainJudgeTime - waterCurtainSplitTime2 );

                        waterCurtainChangeAngle(waterCurtainMyNumber,4,waterCurtainBasicDeg+90,-waterCurtainDeg);
                        waterCurtainChangeAngle(waterCurtainMyNumber,5,waterCurtainBasicDeg+90,waterCurtainDeg);
                        waterCurtainChangeAngle(waterCurtainMyNumber,6,waterCurtainBasicDeg+270,-waterCurtainDeg);
                        waterCurtainChangeAngle(waterCurtainMyNumber,7,waterCurtainBasicDeg+270,waterCurtainDeg);
                    }

                } else {
                    for ( var i = 4 ; i < 8 ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }

            });
        },260);

    } else if ( waterCurtainNumber === 'AZ' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 10;
        let waterCurtainWidth = -18;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        waterCurtainSetTimeout[0] = setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,125 - waterCurtainSpace * i,waterCurtainWidth);
            }

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+680,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                let waterCurtainLoopTime = 14510;
                let waterCurtainRepeatTime1 = 3900 / (waterCurtainNumber - 1);

                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

                for ( let i = 0 ; i < waterCurtainNumber ; i++ ) {
                    if ( waterCurtainJudgeTime >= 10470 + waterCurtainRepeatTime1 * i ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    else if ( waterCurtainJudgeTime >= 370 + waterCurtainRepeatTime1 * i ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                }
            });
        },680);        

    } else if ( waterCurtainNumber === 'BA' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 8;
        let waterCurtainLapDeg = 378;
        let waterCurtainRestDeg = waterCurtainLapDeg - 360;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        let waterCurtainLoopTime = 6000;
        let waterCurtainStartWidth = [ 18 , 9 ];
        let waterCurtainLoopTimeSplit = [ 2000 , 4000 ];
        let waterCurtainLapDegSplit = [ 171 , 1018 ];
        let waterCurtainStartDeg = [];

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
            waterCurtainStartDeg[i] = 12 + waterCurtainLapDeg / waterCurtainNumber * i;
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            if ( nowTime[0] >= 50780 ) nowTime[0] = 0;
            if ( nowTime[0] >= 51000 ) clearInterval(waterCurtainSetInterval);

            for ( var j = 0 ; j < 2 ; j++ ) {
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
                
                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit[j] + 2000 * j ) {
                    for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                        
                        let waterCurtainDeg;
                        if ( j === 0 ) waterCurtainDeg = waterCurtainStartDeg[i] + waterCurtainLapDegSplit[j] / waterCurtainLoopTimeSplit[j] * waterCurtainJudgeTime;
                        else waterCurtainDeg = waterCurtainStartDeg[i] + waterCurtainLapDegSplit[j] / waterCurtainLoopTimeSplit[j] * ( waterCurtainJudgeTime - waterCurtainLoopTimeSplit[j-1] );

                        waterCurtainDeg %= waterCurtainLapDeg;
                        let waterCurtainJudgeDeg = waterCurtainDeg - 18 * 13;
                        let waterCurtainWidth = waterCurtainStartWidth[j];
                        if ( waterCurtainJudgeDeg >= waterCurtainRestDeg + waterCurtainWidth ) {
                            waterCurtainDeg -= waterCurtainRestDeg;
                        } else if ( waterCurtainJudgeDeg >= waterCurtainRestDeg ) {
                            waterCurtainDeg -= waterCurtainRestDeg;
                            waterCurtainWidth = waterCurtainWidth * ( ( waterCurtainJudgeDeg - waterCurtainRestDeg ) / waterCurtainRestDeg );
                        } else if ( waterCurtainJudgeDeg >= 0 ) {
                            waterCurtainDeg = 18 * 13;
                            waterCurtainWidth = waterCurtainWidth - waterCurtainWidth * ( waterCurtainJudgeDeg / waterCurtainRestDeg );
                        }

                        waterCurtainChangeAngle(waterCurtainMyNumber,i,-1*waterCurtainDeg,waterCurtainWidth);
                    }
                    break;
                }

            }
        });       

    } else if ( waterCurtainNumber === 'BB' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 2;
        let waterCurtainNumber = 20;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainLoopTime = 20000;

        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace*i,waterCurtainWidth);
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            if ( nowTime[0] >= 29000 ) {
                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                    waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }
                clearInterval(waterCurtainSetInterval);
            }
            
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var i = waterCurtainNumber - 1 ; i >= 0 ; i-- ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace * i + 360 / waterCurtainLoopTime * waterCurtainJudgeTime,waterCurtainWidth);
            }

        });

    } else if ( waterCurtainNumber === 'BC' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 0.5;
        let waterCurtainNumber = 72;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainLoopTime = 160;
        let waterCurtainDisplayTime = 50;

        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,360-waterCurtainSpace*i,waterCurtainWidth);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            for ( var i = 0 ; i < 3 ; i++ ) {
                let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainLoopTime / 3 * i ) % waterCurtainLoopTime;
                let display = 0;

                if ( waterCurtainJudgeTime < waterCurtainDisplayTime ) display = 1;

                for ( var j = 0 ; j < 24 ; j++ ) waterCurtainDisplay(waterCurtainMyNumber,j*3+i,display);

            }

        });

    } else if ( waterCurtainNumber === 'BD' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 8;
        let waterCurtainLoopTime = 1600;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainWidth = 6;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i, waterCurtainSpace * i - 360 / waterCurtainLoopTime * waterCurtainJudgeTime ,waterCurtainWidth);

        });      

    } else if ( waterCurtainNumber === 'BF' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 6;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);
        let waterCurtainSetTimeoutDelay = [];

        let waterCurtainLoopTimeSplit = [ 5080 , 4960 , 15080 ];
        let waterCurtainWidth = [ 18 , 12 , 6 ];
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainDegSpeed = [ 306 , 612 , 3600 ];
        let waterCurtainBasic = 30;

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic+waterCurtainSpace*i,waterCurtainWidth[0]);

        waterCurtainSetTimeoutDelay[0] = 480;
        waterCurtainSetTimeout[0] = setTimeout( function(){
            for ( var i = 1 ; i < waterCurtainNumber ; i += 2 ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
        },waterCurtainSetTimeoutDelay[0]);

        waterCurtainSetTimeoutDelay[1] = 3470;
        waterCurtainSetTimeout[1] = setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainNumber ; i += 2 ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
        },waterCurtainSetTimeoutDelay[1]);

        waterCurtainSetTimeoutDelay[2] = 6430;
        waterCurtainSetTimeout[2] = setTimeout( function(){
            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[2],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                if ( nowTime[0] >= 25120 ) {
                    for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    clearInterval(waterCurtainSetInterval);
                }
    
                let waterCurtainJudgeTime = nowTime[0];
                let waterCurtainTotalDeg = 0;
    
                for ( var j = 0 ; j < 5 ; j++ ) {
                    if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit[j] ) {
                        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i, waterCurtainBasic + waterCurtainSpace * i + waterCurtainTotalDeg + waterCurtainDegSpeed[j] / waterCurtainLoopTimeSplit[j] * waterCurtainJudgeTime ,waterCurtainWidth[j]);
                        break;
                    } else {
                        waterCurtainJudgeTime -= waterCurtainLoopTimeSplit[j];
                        waterCurtainTotalDeg += waterCurtainDegSpeed[j];
                    }
                }

            });
        },waterCurtainSetTimeoutDelay[2]);        

    } else if ( waterCurtainNumber === 'BG' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 2;
        let waterCurtainMyNumber = waterCurtainSetting(2);

        let waterCurtainLoopTime = 1800;
        let waterCurtainBasic = 297;

        waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasic,180);
        waterCurtainChangeAngle(waterCurtainMyNumber,1,waterCurtainBasic,-180);

        waterCurtainDisplay(waterCurtainMyNumber,0,1);
        waterCurtainDisplay(waterCurtainMyNumber,1,1);    

        waterCurtainSetTimeout[0] = setTimeout( function(){
            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+3080,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                if ( nowTime[0] > waterCurtainLoopTime ) {
                    for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                        waterCurtainDisplay(waterCurtainMyNumber,i,0);
                    }
                    clearInterval(waterCurtainSetInterval);
                }

                let waterCurtainDeg = 180 / waterCurtainLoopTime * nowTime[0];

                waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainBasic,180-waterCurtainDeg);
                waterCurtainChangeAngle(waterCurtainMyNumber,1,waterCurtainBasic,-180+waterCurtainDeg);
            });
        },3080);

    } else if ( waterCurtainNumber === 'BH' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 2;
        let waterCurtainBigNumber = 10;
        let waterCurtainBigSpace = 360 / waterCurtainBigNumber;
        let waterCurtainSmallNumber = 6;
        let waterCurtainSmallSpace = 3;
        let waterCurtainLoopTime = 5890;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainBigNumber;
        let waterCurtainSmallLoopTime = 3110;
        let waterCurtainSmallLoopDisplayTime = 40;
        let waterCurtainArray = [ 3 , 0 , 5 , 2 , 3 , 0 , 5 , 4 , 1 , 2 ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainBigNumber*waterCurtainSmallNumber);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainBigNumber ; i++ ) {
                for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,-90-waterCurtainBigSpace*i+waterCurtainSmallSpace*j,waterCurtainWidth);
            }

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+120,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                
                for ( var i = 0 ; i < waterCurtainBigNumber ; i++ ) {
                    let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainLoopTimeSplit * i ) % waterCurtainLoopTime;
    
                    if ( waterCurtainJudgeTime < waterCurtainSmallLoopTime ) {
                        let k = Math.trunc( waterCurtainJudgeTime % 400 / waterCurtainSmallLoopDisplayTime );
    
                        for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) {
                            if ( waterCurtainArray[k] === j ) waterCurtainDisplay(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,1);
                            else waterCurtainDisplay(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,0);
                        }
                    } else {
                        for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) waterCurtainDisplay(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,0);
                    }
                }
    
            });
        },120);        

    } else if ( waterCurtainNumber === 'BI' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 34;
        let waterCurtainSpace = 10.7;
        let waterCurtainWidth = 0.25;
        let waterCurtainBasic = 140;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber + 1);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic + waterCurtainSpace * i,waterCurtainWidth);
                waterCurtainDisplay(waterCurtainMyNumber,i,1);
            }
            waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNumber,1);

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+200,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
    
                let waterCurtainLoopTime = 1000;
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
    
                let waterCurtainDeg = -27 + 360 / waterCurtainLoopTime * waterCurtainJudgeTime;
    
                waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNumber,waterCurtainDeg,72);
    
            });
        },200);

    } else if ( waterCurtainNumber === 'BJ' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 12;
        let waterCurtainLoopTime = 480;
        let waterCurtainSmallLoopTime = 360;
        let waterCurtainSmallLoopTimeSplit = waterCurtainSmallLoopTime / 2;
        let waterCurtainSpace = 32.5;
        let waterCurtainDelayTime = 22;
        let waterCurtainWidth = 18;
        let waterCurtainBasicDeg = 126;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber*2);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            for ( var l = 0 ; l < waterCurtainNumber ; l++ ) {
                let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainDelayTime * l ) % waterCurtainLoopTime;
                
                if ( waterCurtainJudgeTime < waterCurtainSmallLoopTimeSplit ) {
                    let waterCurtainNowWidth = waterCurtainWidth - waterCurtainWidth / waterCurtainSmallLoopTimeSplit * waterCurtainJudgeTime;
                    let waterCurtainDeg = waterCurtainBasicDeg + waterCurtainSpace * l - waterCurtainNowWidth / 2;

                    if ( waterCurtainDeg < waterCurtainBasicDeg ) {
                        waterCurtainNowWidth -= ( waterCurtainBasicDeg - waterCurtainDeg );
                        waterCurtainDeg = waterCurtainBasicDeg;
                    } else if ( waterCurtainDeg + waterCurtainNowWidth > waterCurtainBasicDeg + 360 ) {
                        waterCurtainNowWidth = ( waterCurtainBasicDeg + 360 ) - waterCurtainDeg;
                    }

                    waterCurtainChangeAngle(waterCurtainMyNumber,l,waterCurtainDeg,waterCurtainNowWidth);
                    waterCurtainDisplay(waterCurtainMyNumber,l,1);
                } else if ( waterCurtainJudgeTime < waterCurtainLoopTime - waterCurtainSmallLoopTimeSplit ) {
                    waterCurtainDisplay(waterCurtainMyNumber,l,0);
                } else {
                    let waterCurtainNowWidth = waterCurtainWidth / waterCurtainSmallLoopTimeSplit * ( waterCurtainJudgeTime - ( waterCurtainLoopTime - waterCurtainSmallLoopTimeSplit ) );
                    let waterCurtainDeg = waterCurtainBasicDeg + waterCurtainSpace * l - waterCurtainNowWidth / 2;

                    if ( waterCurtainDeg < waterCurtainBasicDeg ) {
                        waterCurtainNowWidth -= ( waterCurtainBasicDeg - waterCurtainDeg );
                        waterCurtainDeg = waterCurtainBasicDeg;
                    } else if ( waterCurtainDeg + waterCurtainNowWidth > waterCurtainBasicDeg + 360 ) {
                        waterCurtainNowWidth = ( waterCurtainBasicDeg + 360 ) - waterCurtainDeg;
                    }

                    waterCurtainChangeAngle(waterCurtainMyNumber,l,waterCurtainDeg,waterCurtainNowWidth);
                    waterCurtainDisplay(waterCurtainMyNumber,l,1);
                }
            }

            for ( var l = 0 ; l < waterCurtainNumber ; l++ ) {
                let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainDelayTime * l + waterCurtainSmallLoopTime / 2 ) % waterCurtainLoopTime;
                
                if ( waterCurtainJudgeTime < waterCurtainSmallLoopTimeSplit ) {
                    let waterCurtainNowWidth = waterCurtainWidth - waterCurtainWidth / waterCurtainSmallLoopTimeSplit * waterCurtainJudgeTime;
                    let waterCurtainDeg = waterCurtainSpace / 2 + waterCurtainBasicDeg + waterCurtainSpace * l - waterCurtainNowWidth / 2;

                    if ( waterCurtainDeg < waterCurtainBasicDeg ) {
                        waterCurtainNowWidth -= ( waterCurtainBasicDeg - waterCurtainDeg );
                        waterCurtainDeg = waterCurtainBasicDeg;
                    } else if ( waterCurtainDeg + waterCurtainNowWidth > waterCurtainBasicDeg + 360 ) {
                        waterCurtainNowWidth = ( waterCurtainBasicDeg + 360 ) - waterCurtainDeg;
                    }

                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNumber+l,waterCurtainDeg,waterCurtainNowWidth);
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNumber+l,1);
                } else if ( waterCurtainJudgeTime < waterCurtainLoopTime - waterCurtainSmallLoopTimeSplit ) {
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNumber+l,0);
                } else {
                    let waterCurtainNowWidth = waterCurtainWidth / waterCurtainSmallLoopTimeSplit * ( waterCurtainJudgeTime - ( waterCurtainLoopTime - waterCurtainSmallLoopTimeSplit ) );
                    let waterCurtainDeg = waterCurtainSpace / 2 + waterCurtainBasicDeg + waterCurtainSpace * l - waterCurtainNowWidth / 2;

                    if ( waterCurtainDeg < waterCurtainBasicDeg ) {
                        waterCurtainNowWidth -= ( waterCurtainBasicDeg - waterCurtainDeg );
                        waterCurtainDeg = waterCurtainBasicDeg;
                    } else if ( waterCurtainDeg + waterCurtainNowWidth > waterCurtainBasicDeg + 360 ) {
                        waterCurtainNowWidth = ( waterCurtainBasicDeg + 360 ) - waterCurtainDeg;
                    }

                    waterCurtainChangeAngle(waterCurtainMyNumber,waterCurtainNumber+l,waterCurtainDeg,waterCurtainNowWidth);
                    waterCurtainDisplay(waterCurtainMyNumber,waterCurtainNumber+l,1);
                }
            }

        });

    } else if ( waterCurtainNumber === 'BK' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 2;
        let waterCurtainNumber = 360 / waterCurtainWidth;
        let waterCurtainLoopTime = 1030;
        let waterCurtainSmallLoopTime = 780;
        let waterCurtainSmallLoopTimeSplit = waterCurtainSmallLoopTime / 2
        let waterCurtainLoopTimeSplit = 50;
        let waterCurtainArray = [ [ 4 , 1 , 6 , 4 , 6 , 4 , 3 , 2 , 0 , 2 , 3 , 4 , 1 , 0 , 9 , 8 , 1 , 7 , 9 , 7 ] , [ 1 , 9 , 4 , 9 , 3 , 2 , 2 , 0 , 7 , 7 , 5 , 1 , 3 , 9 , 8 , 0 , 5 , 8 , 5 , 1 ] , [ 0 , 8 , 9 , 9 , 5 , 3 , 2 , 1 , 8 , 9 , 3 , 1 , 2 , 8 , 3 , 3 , 0 , 1 , 3 , 1 ] , [ 4 , 5 , 2 , 2 , 8 , 0 , 0 , 2 , 4 , 9 , 2 , 4 , 4 , 2 , 7 , 8 , 6 , 8 , 8 , 4 ] , [ 1 , 4 , 1 , 7 , 2 , 1 , 3 , 0 , 9 , 0 , 2 , 9 , 7 , 6 , 4 , 6 , 3 , 2 , 6 , 5 ] , [ 0 , 0 , 6 , 5 , 4 , 3 , 3 , 5 , 5 , 5 , 9 , 7 , 8 , 4 , 5 , 4 , 6 , 2 , 5 , 5 ] , [ 8 , 8 , 5 , 6 , 9 , 8 , 9 , 2 , 8 , 0 , 8 , 2 , 2 , 9 , 8 , 3 , 9 , 7 , 0 , 7 ] , [ 4 , 6 , 7 , 0 , 3 , 9 , 0 , 6 , 0 , 6 , 5 , 7 , 1 , 3 , 4 , 8 , 9 , 5 , 3 , 3 ] , [ 3 , 7 , 4 , 2 , 8 , 7 , 2 , 3 , 9 , 1 , 9 , 9 , 1 , 2 , 0 , 6 , 6 , 6 , 5 , 6 ] , [ 5 , 6 , 4 , 6 , 0 , 3 , 3 , 5 , 6 , 1 , 9 , 2 , 1 , 7 , 1 , 8 , 0 , 0 , 9 , 2 ] , [ 0 , 5 , 3 , 6 , 8 , 1 , 4 , 9 , 0 , 4 , 2 , 5 , 8 , 0 , 4 , 3 , 3 , 6 , 6 , 8 ] , [ 0 , 3 , 6 , 9 , 4 , 8 , 1 , 4 , 5 , 0 , 4 , 6 , 7 , 9 , 2 , 4 , 9 , 2 , 9 , 8 ] , [ 7 , 8 , 1 , 9 , 5 , 6 , 9 , 3 , 9 , 3 , 3 , 0 , 4 , 8 , 9 , 8 , 6 , 8 , 3 , 3 ] , [ 8 , 5 , 3 , 2 , 9 , 5 , 3 , 8 , 1 , 1 , 5 , 8 , 9 , 7 , 2 , 3 , 4 , 3 , 4 , 5 ] , [ 9 , 2 , 3 , 3 , 9 , 2 , 8 , 1 , 5 , 1 , 4 , 3 , 1 , 5 , 4 , 2 , 8 , 0 , 8 , 0 ] , [ 6 , 4 , 5 , 6 , 6 , 1 , 7 , 7 , 5 , 3 , 7 , 4 , 2 , 0 , 4 , 5 , 1 , 3 , 5 , 5 ] , [ 2 , 3 , 7 , 8 , 1 , 2 , 7 , 5 , 7 , 0 , 1 , 9 , 4 , 6 , 0 , 5 , 2 , 3 , 9 , 2 ] , [ 6 , 8 , 7 , 8 , 9 , 9 , 3 , 3 , 5 , 1 , 1 , 2 , 2 , 3 , 4 , 4 , 3 , 0 , 1 , 0 ] , [ 0 , 2 , 2 , 8 , 1 , 2 , 8 , 4 , 0 , 3 , 2 , 5 , 8 , 0 , 2 , 1 , 4 , 7 , 7 , 8 ] , [ 9 , 7 , 4 , 7 , 4 , 6 , 2 , 2 , 1 , 7 , 4 , 9 , 5 , 4 , 4 , 0 , 1 , 1 , 2 , 3 ] , [ 5 , 3 , 8 , 2 , 9 , 2 , 6 , 6 , 1 , 2 , 6 , 8 , 7 , 4 , 3 , 3 , 1 , 3 , 3 , 5 ] , [ 9 , 1 , 7 , 9 , 7 , 8 , 7 , 9 , 6 , 2 , 3 , 1 , 9 , 3 , 0 , 1 , 5 , 3 , 5 , 6 ] , [ 0 , 5 , 6 , 6 , 6 , 7 , 9 , 7 , 1 , 8 , 9 , 7 , 6 , 3 , 1 , 1 , 3 , 2 , 3 , 6 ] , [ 7 , 9 , 7 , 1 , 6 , 6 , 9 , 3 , 0 , 1 , 4 , 9 , 0 , 2 , 4 , 8 , 4 , 9 , 5 , 4 ] , [ 2 , 1 , 5 , 3 , 8 , 7 , 6 , 8 , 9 , 5 , 8 , 0 , 5 , 1 , 9 , 1 , 7 , 9 , 5 , 9 ] ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);
        let waterCurtainSetInterval

        waterCurtainSetTimeout[0] = setTimeout( function() {
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainWidth * i,waterCurtainWidth);
        });

        waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            nowTime[0] %= 16000;

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            if ( waterCurtainJudgeTime < waterCurtainSmallLoopTime ) {
                let waterCurtainLimit;
                if ( waterCurtainJudgeTime < waterCurtainSmallLoopTimeSplit ) waterCurtainLimit = 10 - 8 / waterCurtainSmallLoopTimeSplit * waterCurtainJudgeTime;
                else waterCurtainLimit = 2 + 8 / waterCurtainSmallLoopTimeSplit * ( waterCurtainJudgeTime - waterCurtainSmallLoopTimeSplit );

                waterCurtainJudgeTime = Math.trunc( waterCurtainJudgeTime / waterCurtainLoopTimeSplit );

                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                    if ( waterCurtainArray[ i % 25 ][ waterCurtainJudgeTime ] < waterCurtainLimit ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                    else waterCurtainDisplay(waterCurtainMyNumber,i,0);
                }

            } else {
                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
            }            

        },50);

        waterCurtainSetTimeout[1] = setTimeout( function() {
            clearInterval(waterCurtainSetInterval);
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainDisplay(waterCurtainMyNumber,i,0);
        },36000);

    } else if ( waterCurtainNumber === 'BL' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 10;
        let waterCurtainLoopTime = 9420;
        let waterCurtainDisplyStartTime = [ 3610 , 960 , 4490 , 1960 , 2990, 450 , 4080 , 1490 , 2480 , 0 ];
        let waterCurtainDisplyFinishTime = [ 8480 , 5950 , 9420 , 6990 , 7950 , 5520 , 8950 , 8950 , 7520 , 5060 ];
        let waterCurtainWidth = 18;
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace * ( i + 0.5 ),waterCurtainWidth);
        }

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
            let j;

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                if ( waterCurtainJudgeTime >= waterCurtainDisplyStartTime[i] && waterCurtainJudgeTime < waterCurtainDisplyFinishTime[i] ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                else waterCurtainDisplay(waterCurtainMyNumber,i,0);
            }

        });

    } else if ( waterCurtainNumber === 'BM' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(20);
        let waterCurtainBasic = 123;

        let waterCuratinNumber = 20;
        let waterCurtainLoopTime = 4110;
        let waterCurtainLoopTimeSplit = 200;
        let waterCurtainDisplayTime = 280;
        let waterCurtainWidth = -1 * ( 360 / waterCuratinNumber );

        for ( var i = 0 ; i < waterCuratinNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainBasic + waterCurtainWidth * i,waterCurtainWidth);

        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval[0],waterCurtainMyNumber);

            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;
            
            for ( var i = 0 ; i < waterCuratinNumber ; i++ ) {
                if ( waterCurtainJudgeTime >= waterCurtainLoopTimeSplit * i && waterCurtainJudgeTime < waterCurtainLoopTimeSplit * i + waterCurtainDisplayTime ) waterCurtainDisplay(waterCurtainMyNumber,i,1);
                else waterCurtainDisplay(waterCurtainMyNumber,i,0);
            }
        });

    } else if ( waterCurtainNumber === 'BN' ) {
        let startTime = Date.now();
        let waterCurtainMyNumber = waterCurtainSetting(66);
        let waterCurtainSetTimeoutDelay = [];
        let waterCurtainSetInterval = [];

        waterCurtainSetTimeoutDelay[0] = 370;
        waterCurtainSetTimeout[0] = setTimeout( function() {
            let waterCurtainLoopTime = [ 6000 , 2000 , 1000 ];
            let waterCurtainBasicDeg = 102;
            let waterCurtainWidth = [ 24 , 18 , 18 ];
            waterCurtainDisplay(waterCurtainMyNumber,0,1);

            waterCurtainSetInterval[0] = setInterval( function() {
                let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval[0],waterCurtainMyNumber);

                let waterCurtainSumTime = 0;
                for ( var i = 0 ; i < 3 ; i++ ) {
                    if ( nowTime[0] < waterCurtainSumTime + waterCurtainLoopTime[i] * ( i + 1 ) ) {
                        let waterCurtainJudgeTime = ( nowTime[0] - waterCurtainSumTime ) % waterCurtainLoopTime[i];
                        let waterCurtainDeg = waterCurtainBasicDeg + 360 / waterCurtainLoopTime[i] * waterCurtainJudgeTime;
                        waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth[i]);
                        break;
                    }
                    waterCurtainSumTime += waterCurtainLoopTime[i] * ( i + 1 );
                }

            });

        },waterCurtainSetTimeoutDelay[0]);

        waterCurtainSetTimeoutDelay[1] = 12500;
        waterCurtainSetTimeout[1] = setTimeout( function() {
            clearInterval(waterCurtainSetInterval[0]);
            waterCurtainDisplay(waterCurtainMyNumber,0,0);
            
            let waterCurtainWidth = 5;
            let waterCurtainNumber = 7;
            let waterCurtainSmallNumber = 10;
            let waterCurtainSpace = 5.4;
            let waterCurtainLoopTime = 650;
            let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainSmallNumber; 
            let waterCurtainStartTime = [ 0 , 5 , 2 , 9 , 7 , 3 , 1 , 8 , 4 , 6 ];
            let waterCurtainSmallLoopTime = 100;

            for ( var i = 0 ; i < 66 ; i++ ) {
                waterCurtainChangeAngle(waterCurtainMyNumber,i,waterCurtainSpace*i,waterCurtainWidth);
            }

            waterCurtainSetInterval[1] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[1],0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                
                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

                for ( var l = 0 ; l < waterCurtainSmallNumber ; l++ ) {
                    let waterCurtainFullTime = waterCurtainStartTime[l] * waterCurtainLoopTimeSplit + waterCurtainSmallLoopTime;
                    if ( ( waterCurtainJudgeTime >= waterCurtainStartTime[l] * waterCurtainLoopTimeSplit && waterCurtainJudgeTime < waterCurtainFullTime ) || ( waterCurtainStartTime[l] * waterCurtainLoopTimeSplit > waterCurtainFullTime && ( waterCurtainJudgeTime >= waterCurtainStartTime[l] * waterCurtainLoopTimeSplit || waterCurtainJudgeTime < waterCurtainFullTime ) ) ) {
                        for ( var k = 0 ; k < waterCurtainNumber ; k++ ) {
                            if ( k*waterCurtainSmallNumber+l < 66 ) waterCurtainDisplay(waterCurtainMyNumber,k*waterCurtainSmallNumber+l,1);
                        }
                    } else {
                        for ( var k = 0 ; k < waterCurtainNumber ; k++ ) {
                            if ( k*waterCurtainSmallNumber+l < 66 ) waterCurtainDisplay(waterCurtainMyNumber,k*waterCurtainSmallNumber+l,0);
                        }
                    }
                }

            });

        },waterCurtainSetTimeoutDelay[1]);

        waterCurtainSetTimeoutDelay[2] = 24500;
        waterCurtainSetTimeout[2] = setTimeout( function() {
            clearInterval(waterCurtainSetInterval[1]);

            for ( var k = 0 ; k < 66; k++ ) waterCurtainDisplay(waterCurtainMyNumber,k,0);
            
            let waterCurtainLoopTime = [ 6000 , 2000 ];
            let waterCurtainBasicDeg = 102;
            let waterCurtainWidth = [ 24 , 18 ];
            waterCurtainDisplay(waterCurtainMyNumber,0,1);

            waterCurtainSetInterval[2] = setInterval( function() {
                let nowTime = nowTimeGet(startTime+waterCurtainSetTimeoutDelay[2],0,waterCurtainUseNumber,waterCurtainSetInterval[2],waterCurtainMyNumber);

                let waterCurtainSumTime = 0;
                for ( var i = 1 ; i >= 0 ; i-- ) {
                    if ( nowTime[0] < waterCurtainSumTime + waterCurtainLoopTime[i] ) {
                        let waterCurtainJudgeTime = ( nowTime[0] - waterCurtainSumTime ) % waterCurtainLoopTime[i];
                        let waterCurtainDeg = waterCurtainBasicDeg + 360 / waterCurtainLoopTime[i] * waterCurtainJudgeTime;
                        waterCurtainChangeAngle(waterCurtainMyNumber,0,waterCurtainDeg,waterCurtainWidth[i]);
                        break;
                    }
                    waterCurtainSumTime += waterCurtainLoopTime[i];
                }

            });


        },waterCurtainSetTimeoutDelay[2]);

        waterCurtainSetTimeoutDelay[3] = 29400;
        waterCurtainSetTimeout[3] = setTimeout( function() {
            clearInterval(waterCurtainSetInterval[2]);
            waterCurtainDisplay(waterCurtainMyNumber,0,0);

        },waterCurtainSetTimeoutDelay[3]);
            

    } else if ( waterCurtainNumber === 'BO' ) {
        let startTime = Date.now();
        let waterCurtainWidth = 2;
        let waterCurtainBigNumber = 10;
        let waterCurtainBigSpace = 360 / waterCurtainBigNumber;
        let waterCurtainSmallNumber = 6;
        let waterCurtainSmallSpace = 3;
        let waterCurtainLoopTime = 7000//5890;
        let waterCurtainLoopTimeSplit = waterCurtainLoopTime / waterCurtainBigNumber;
        let waterCurtainSmallLoopTime = 1770;
        let waterCurtainSmallLoopDisplayTime = 40;
        let waterCurtainArray = [ 3 , 0 , 5 , 2 , 3 , 0 , 5 , 4 , 1 , 2 ];
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainBigNumber*waterCurtainSmallNumber);

        setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainBigNumber ; i++ ) {
                for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,-162-waterCurtainBigSpace*i+waterCurtainSmallSpace*j,waterCurtainWidth);
            }

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+600,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                
                for ( var i = 0 ; i < waterCurtainBigNumber ; i++ ) {
                    let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainLoopTimeSplit * i ) % waterCurtainLoopTime;
    
                    if ( waterCurtainJudgeTime < waterCurtainSmallLoopTime ) {
                        let k = Math.trunc( waterCurtainJudgeTime % 400 / waterCurtainSmallLoopDisplayTime );
    
                        for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) {
                            if ( waterCurtainArray[k] === j ) waterCurtainDisplay(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,1);
                            else waterCurtainDisplay(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,0);
                        }
                    } else {
                        for ( var j = 0 ; j < waterCurtainSmallNumber ; j++ ) waterCurtainDisplay(waterCurtainMyNumber,i*waterCurtainSmallNumber+j,0);
                    }
                }
    
            });    
        },600);
        
    } else if ( waterCurtainNumber === 'BP' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 2;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        waterCurtainSetTimeout[0] = setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                waterCurtainDisplay(waterCurtainMyNumber,i,1);
            }

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+510,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

                let waterCurtainWidth = 20;
                let waterCurtainLoopTime = 480;
                let waterCurtainLapTime = waterCurtainLoopTime / 20 * 9;
                let waterCurtainJudgeTime = ( nowTime[0] + waterCurtainLapTime ) % waterCurtainLoopTime;
                let waterCurtainDeg = 180 / waterCurtainLoopTime * waterCurtainJudgeTime;

                if ( waterCurtainDeg < waterCurtainWidth ) waterCurtainWidth = waterCurtainDeg;
                else if ( waterCurtainDeg > 180 - waterCurtainWidth ) waterCurtainWidth = 180 - waterCurtainDeg;

                waterCurtainChangeAngle(waterCurtainMyNumber,0,198+waterCurtainDeg,waterCurtainWidth);
                waterCurtainChangeAngle(waterCurtainMyNumber,1,198-waterCurtainDeg,-1*waterCurtainWidth);
            });
        },510);        

    } else if ( waterCurtainNumber === 'BQ' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 6;
        let waterCurtainLoopTime = 8000;
        let waterCurtainLoopTimeSplit = [ 4000 , 4000 ];
        let waterCurtainWidth = [ 22 , 18 ];
        let waterCurtainSpace = 360 / waterCurtainNumber;
        let waterCurtainDegSpeed = [ -220 , 460 ]
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber);

        waterCurtainSetTimeout[0] = setTimeout( function(){
            for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
                waterCurtainDisplay(waterCurtainMyNumber,i,1);
            }

            let waterCurtainSetInterval = setInterval( function() {
                let nowTime = nowTimeGet(startTime+270,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);
                let j;

                let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

                if ( waterCurtainJudgeTime < waterCurtainLoopTimeSplit[0] ) j = 0;
                else j = 1;
                
                for ( var i = 0 ; i < waterCurtainNumber ; i++ ) waterCurtainChangeAngle(waterCurtainMyNumber,i, waterCurtainSpace * i + waterCurtainDegSpeed[j] / waterCurtainLoopTimeSplit[j] * waterCurtainJudgeTime ,waterCurtainWidth[j]);
                
            });
        },270);        

    } else if ( waterCurtainNumber === 'BR' ) {
        let startTime = Date.now();
        let waterCurtainNumber = 140;
        let waterCurtainWidth = 0.5;
        let waterCurtainMyNumber = waterCurtainSetting(waterCurtainNumber + 1);

        waterCurtainChangeAngle(waterCurtainMyNumber,140,0,360);
        waterCurtainDisplay(waterCurtainMyNumber,140,1);

        for ( var i = 0 ; i < waterCurtainNumber ; i++ ) {
            waterCurtainChangeAngle(waterCurtainMyNumber,i,360 / waterCurtainNumber * i,waterCurtainWidth);
            waterCurtainDisplay(waterCurtainMyNumber,i,1);
        }
        
        let waterCurtainSetInterval = setInterval( function() {
            let nowTime = nowTimeGet(startTime,0,waterCurtainUseNumber,waterCurtainSetInterval,waterCurtainMyNumber);

            let waterCurtainLoopTime = 280;
            let waterCurtainLoopTime1 = 50;
            let waterCurtainJudgeTime = nowTime[0] % waterCurtainLoopTime;

            if ( waterCurtainJudgeTime < waterCurtainLoopTime1 ) {
                waterCurtainDisplay(waterCurtainMyNumber,140,1);
            } else {
                waterCurtainDisplay(waterCurtainMyNumber,140,0);
            }

        });      

    }
}