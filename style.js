const centerX = 400;
const centerY = 380;

// LED座標決定
const ledNumberInside = 20;
const ledNumberOutside = 48;

const ledRadiusInside = 146; //153, 48 * sin( ( 180 - 360 / ledNumberInside ) / 2 / 180 * Math.PI ) / sin( 360 / ledNumberInside / 180 * Math.PI );
const ledRadiusOutside = 352; //367, 48 * sin( ( 180 - 360 / ledNumberOutside ) / 2 / 180 * Math.PI ) / sin( 360 / ledNumberOutside / 180 * Math.PI );

for ( var i = ledNumberInside - 1 ; i >= 0 ; i-- ) {
    let ledCoordinateNumber = document.getElementById(`LED_1-${ ledNumberInside - i }`);
    let ledDeg = 360 / ledNumberInside * ( i - 3 ) ;
    let ledRad =  ledDeg / 180 * Math.PI;
    let ledDegX = Math.cos(ledRad) * ledRadiusInside + centerX;
    let ledDegY = Math.sin(ledRad) * ledRadiusInside + centerY;
    ledCoordinateNumber.style.left = ledDegX + "px";
    ledCoordinateNumber.style.top = ledDegY + "px";
    ledCoordinateNumber.style.transform = "rotate(" + ( ledDeg + 90 ) + "deg)" ;
}

for ( var i = ledNumberOutside - 1 ; i >= 0 ; i-- ) {
    let ledCoordinateNumber = document.getElementById(`LED_2-${ ledNumberOutside - i }`);
    let ledDeg = 360 / ledNumberOutside * ( i - 9.5 );
    let ledRad =  ledDeg / 180 * Math.PI;
    let ledDegX = Math.cos(ledRad) * ledRadiusOutside + centerX;
    let ledDegY = Math.sin(ledRad) * ledRadiusOutside + centerY;
    ledCoordinateNumber.style.left = ledDegX + "px";
    ledCoordinateNumber.style.top = ledDegY + "px";
    ledCoordinateNumber.style.transform = "rotate(" + ( ledDeg + 90 ) + "deg)" ;
}

// 水中照明座標決定
const waterLightNumber = 11;
const waterLightRadius = 250;

for ( var i = waterLightNumber - 1 ; i >= 0 ; i-- ) {
    let waterLightCoordinateNumber = document.getElementById(`WATER_LIGHT_${ waterLightNumber - i }`);
    let waterLightDeg = 360 / ( waterLightNumber + 1 ) * ( i - 2 );
    let waterLightRad = waterLightDeg / 180 * Math.PI;
    let waterLightDegX = Math.cos(waterLightRad) * waterLightRadius + centerX;
    let waterLightDegY = Math.sin(waterLightRad) * waterLightRadius + centerY;
    waterLightCoordinateNumber.style.left = waterLightDegX + "px";
    waterLightCoordinateNumber.style.top = waterLightDegY + "px";
    waterLightCoordinateNumber.style.transform = "rotate(" + ( waterLightDeg + 90 ) + "deg)" ;
}

// 白色照明座標決定
const whiteLightNumber = 16;
const whiteLightRadius = 325;

var whiteLightNow = 16.5;

for ( var i = 0 ; i < whiteLightNumber ; i++ ) {

    switch (i) {
        case 2:
        case 10:
            whiteLightNow += 4;
            break;
        case 1:
        case 11:
            whiteLightNow += 2;
            break;
        default:
            whiteLightNow += 3;
            break;
    }

    let whiteLightCoordinateNumber = document.getElementById(`WHITE_LIGHT_${ i + 1 }`);
    let whiteLightDeg = 360 / ledNumberOutside * whiteLightNow;
    let whiteLightRad = whiteLightDeg / 180 * Math.PI;

    let whiteLightDegX = Math.cos(whiteLightRad) * whiteLightRadius + centerX;
    let whiteLightDegY = Math.sin(whiteLightRad) * whiteLightRadius + centerY;
    whiteLightCoordinateNumber.style.left = whiteLightDegX + "px";
    whiteLightCoordinateNumber.style.top = whiteLightDegY + "px";
    whiteLightCoordinateNumber.style.transform = "rotate(" + ( whiteLightDeg + 90 ) + "deg)" ;
}

// パーライト照明座標決定
const parLightNumber = 10;
const parLightRadius = [ 325 , 372 ];
const parMarryLightDeg = [ 58 , 62 ];

for ( var i = 0 ; i < parLightNumber ; i++ ) {
    let parLightCoordinateNumber = document.getElementById(`PAR_LIGHT_${ i + 1 }`);
    var parLightDeg;

    if ( i < 8 ) {
        if ( i === 2 ) {
            parLightDeg = 360 / 8 * ( i - 1.44 );
        } else if ( i === 5 ) {
            parLightDeg = 360 / 8 * ( i - 1.56 );
        } else {
            parLightDeg = 360 / 8 * ( i - 1.5 );
        }
    } else {
        parLightDeg = parMarryLightDeg[i-8];
    }
    
    let parLightRad = parLightDeg / 180 * Math.PI;

    let parLightDegX = Math.cos(parLightRad) * parLightRadius[Math.trunc(i/8)] + centerX;
    let parLightDegY = Math.sin(parLightRad) * parLightRadius[Math.trunc(i/8)] + centerY;
    parLightCoordinateNumber.style.left = parLightDegX + "px";
    parLightCoordinateNumber.style.top = parLightDegY + "px";
}

// スポットライト照明座標決定
const spotLightNumber = 22;
const spotLightRadius = 325;

const spotLightDeg = [ 297 , 310 , 318 , 333 , 343 , 358 , 28.5 , 42 , 48 , 63 , 85 , 95 , 117 , 132 , 138 , 151.5 , 182 , 197 , 207 , 222 , 230 , 243 ];

for ( var i = 0 ; i < spotLightNumber ; i++ ) {
    let spotLightCoordinateNumber = document.getElementById(`SPOT_LIGHT_${ i + 1 }`);
    let spotLightRad = spotLightDeg[i] / 180 * Math.PI;

    let spotLightDegX = Math.cos(spotLightRad) * spotLightRadius + centerX;
    let spotLightDegY = Math.sin(spotLightRad) * spotLightRadius + centerY;
    spotLightCoordinateNumber.style.left = spotLightDegX + "px";
    spotLightCoordinateNumber.style.top = spotLightDegY + "px";
}

// 客席照明座標決定
const audienceLightNumber = 23;
const audienceLightRadius = 370;

for ( var i = 0 ; i < audienceLightNumber ; i++ ) {
    let audienceLightCoordinateNumber = document.getElementById(`AUDIENCE_LIGHT_${ i + 1 }`);
    var audienceLightDeg = 360 / ( audienceLightNumber + 1 ) * ( i - 13.5 );
    
    let audienceLightRad = audienceLightDeg / 180 * Math.PI;

    let audienceLightDegX = Math.cos(audienceLightRad) * audienceLightRadius + centerX;
    let audienceLightDegY = Math.sin(audienceLightRad) * audienceLightRadius + centerY;
    audienceLightCoordinateNumber.style.left = audienceLightDegX + "px";
    audienceLightCoordinateNumber.style.top = audienceLightDegY + "px";
}

// ステージ照明座標決定
const stageLightRadius = 370;
const stageLightDeg = [ 258 , 282 ]

for ( var i = 0 ; i < 2 ; i++ ) {
    let stageLightCoordinateNumber = document.getElementById(`STAGE_LIGHT_${ i + 1 }`);    
    let stageLightRad = stageLightDeg[i] / 180 * Math.PI;

    let stageLightDegX = Math.cos(stageLightRad) * stageLightRadius + centerX;
    let stageLightDegY = Math.sin(stageLightRad) * stageLightRadius + centerY;
    stageLightCoordinateNumber.style.left = stageLightDegX + "px";
    stageLightCoordinateNumber.style.top = stageLightDegY + "px";
}

// 噴水座標決定
const waterCannonLightNumber = 24;
const waterCannonLightRadius = 285;

var waterCannonLightDeg = 270;

for ( var i = 0 ; i < waterCannonLightNumber ; i++ ) {
    let waterCannonLightCoordinateNumber = document.getElementById(`WATER_CANNON_LIGHT_${ i + 1 }`);

    if ( i === 0 ) {
        waterCannonLightDeg -= 16;
    } else if ( i === 1 ) {
        waterCannonLightDeg -= 10;
    } else if ( i === 23 ) {
        waterCannonLightDeg = 286;
    } else if ( i % 2 === 0 ) {
        waterCannonLightDeg -= 8;
    } else {
        waterCannonLightDeg -= 22;
    }
    
    let waterCannonLightRad = waterCannonLightDeg / 180 * Math.PI;

    let waterCannonLightDegX = Math.cos(waterCannonLightRad) * waterCannonLightRadius + centerX;
    let waterCannonLightDegY = Math.sin(waterCannonLightRad) * waterCannonLightRadius + centerY;
    waterCannonLightCoordinateNumber.style.left = waterCannonLightDegX + "px";
    waterCannonLightCoordinateNumber.style.top = waterCannonLightDegY + "px";
}

// ムービングライト座標決定
const movingLightNumber = 4;
const movingLightInsideNumber = 4;
const movingLightOutsideNumber = 5;
const movingLightInsideRadius = 200;

for ( var i = 0 ; i < movingLightNumber ; i++ ) {
    let movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_1-${ i + 1 }`);
    let movingLightDeg = 360 / movingLightNumber * ( 3 - i );
    let movingLightRad = movingLightDeg / 180 * Math.PI;
    let movingLightDegX = Math.cos(movingLightRad) * movingLightInsideRadius + centerX;
    let movingLightDegY = Math.sin(movingLightRad) * movingLightInsideRadius + centerY;
    movingLightCoordinateNumber.style.left = movingLightDegX + "px";
    movingLightCoordinateNumber.style.top = movingLightDegY + "px";
    movingLightCoordinateNumber.style.transform = "rotateZ(" + 90 * ( 4 - i ) + "deg)";
}

const movingLightOutsideRadius = 480;

for ( var i = 0 ; i < movingLightNumber ; i++ ) {
    let movingLightCoordinateNumber = document.getElementById(`MOVING_LIGHT_2-${ i + 1 }`);
    let movingLightDeg = 360 / movingLightNumber * ( 3 - i - 0.5 );
    let movingLightRad = movingLightDeg / 180 * Math.PI;
    let movingLightDegX = Math.cos(movingLightRad) * movingLightOutsideRadius + centerX;
    let movingLightDegY = Math.sin(movingLightRad) * movingLightOutsideRadius + centerY;
    movingLightCoordinateNumber.style.left = movingLightDegX + "px";
    movingLightCoordinateNumber.style.top = movingLightDegY + "px";
    movingLightCoordinateNumber.style.transform = "rotateZ(" + 90 * ( 4 - i - 0.5 ) + "deg)";
}

let movingLightCoordinateSpecialNumber = document.getElementById(`MOVING_LIGHT_2-5`);
let movingLightSpecialRad = 75 / 180 * Math.PI;
let movingLightSpecialDegX = Math.cos(movingLightSpecialRad) * 400 + centerX;
let movingLightSpecialDegY = Math.sin(movingLightSpecialRad) * 400 + centerY;
movingLightCoordinateSpecialNumber.style.left = movingLightSpecialDegX + "px";
movingLightCoordinateSpecialNumber.style.top = movingLightSpecialDegY + "px";
movingLightCoordinateSpecialNumber.style.transform = "rotateZ(" + 90 * ( 1.5 + 1 / 3 ) + "deg)";

// 看板照明座標決定
const logoboardLightNumber = 48;

for ( var i = 0 ; i < logoboardLightNumber ; i++ ) {
    let logoboardCoordinateNumber = document.getElementById(`LOGOBORD_LIGHT_${ i + 1 }`);
    logoboardCoordinateNumber.style.clipPath = "polygon(" + ( 15 + 3.5 * ( i % 12 ) ) + "px 0," + ( 15 + 3.5 * ( ( i % 12 ) + 1 ) ) + "px 0," +  ( 6 * ( ( i % 12 ) + 1 ) + 2 ) + "px 100%," + ( 6 * ( i % 12 ) - 2 ) + "px 100%)";
}

//スモーク座標決定
const smokeNumber = 6;
const smokeRadius = 60;

for ( var i = 0 ; i < smokeNumber ; i++ ) {
    let smokeCoordinateNumber = document.getElementById(`SMOKE_${ i + 1 }`);
    let smokeDeg = 360 / smokeNumber * ( i + 0.5 );
    let smokeRad = smokeDeg / 180 * Math.PI;
    let smokeDegX = Math.cos(smokeRad) * smokeRadius + centerX;
    let smokeDegY = Math.sin(smokeRad) * smokeRadius + centerY;
    smokeCoordinateNumber.style.left = smokeDegX + "px";
    smokeCoordinateNumber.style.top = smokeDegY + "px";
}

//スノウマシン座標決定
const snowNumber = 4;
const snowRadius = 220;

for ( var i = 0 ; i < snowNumber ; i++ ) {
    let snowCoordinateNumber = document.getElementById(`SNOW_${ i + 1 }`);
    let snowDeg = 360 / snowNumber * ( i + 0.5 );
    let snowRad = snowDeg / 180 * Math.PI;
    let snowDegX = Math.cos(snowRad) * snowRadius + centerX;
    let snowDegY = Math.sin(snowRad) * snowRadius + centerY;
    snowCoordinateNumber.style.left = snowDegX + "px";
    snowCoordinateNumber.style.top = snowDegY + "px";
}

//ウォーターカーテン

let watercurtainCoordinate = document.getElementById(`WATER_CURTAIN`);
watercurtainCoordinate.style.left = centerX + "px";
watercurtainCoordinate.style.top = centerY + "px";


