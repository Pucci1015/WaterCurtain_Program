jsSetting("NorthernLightsJourney","Northern Lights Journey",1,1,1,1,2200);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    const code = e.keyCode;

    if ( performanceNowSelect === "NorthernLightsJourney" ) {
        if ( dnNowSelect === 0 ) {
            if ( mainNowPage === 1 ) {
                if ( key === 'f' ) {
                    let startTime = Date.now();

                    /***** 水中照明 SS1 *****/
                    let waterLightMyNumber = waterLightSetting();
                    let waterLightSetInterval = setInterval(waterLightNumberSS1);

                    function waterLightNumberSS1() {
                        let fadeTime = 3200;
                        let nowTime = nowTimeGet(startTime,fadeTime,waterLightUseNumber,waterLightSetInterval,waterLightMyNumber);

                        for ( var i = 1 ; i <= waterLightNumber ; i++ ) {
                            waterLightColorChange(i,200,220,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                }
            }

            if ( subNowPage === 1 ) {
                if ( subCode === 6 ) {
                    let startTime = Date.now();
    
                    /***** 看板照明 NLJ1 *****/
                    let logoboardLightMyNumber = logoboardLightSetting(0);
                    let logoboardLightFadeTime = 2300;
                    let logoboardLightSetInterval = setInterval(logoboardLightNumberNLJ1);
        
                    function logoboardLightNumberNLJ1() {
                        let nowTime = nowTimeGet(startTime,0,logoboardLightUseNumber[0],logoboardLightSetInterval,logoboardLightMyNumber);
    
                        for ( var i = 1 ; i <= logoboardLightNumber ; i++ ) {
                            let j;
                            let logoboardLightColor = [];
    
                            if ( i <= logoboardLightNumber / 2 ) j = i;
                            else j = logoboardLightNumber - i + 1;

                            if ( j <= 3 ) logoboardLightColor = [ 0 , 0 , 0 , 255];
                            else if ( j <= 12 ) logoboardLightColor = [ 100 , 255 , 255 , 255 ];
                            else if ( j <= 21 ) logoboardLightColor = [ 0 , 100 , 255 , 100 ];
                            else logoboardLightColor = [ 0 , 0 , 0 , 255];
    
                            logoboardLightFadeChage(i,logoboardLightColor[0],logoboardLightColor[1],logoboardLightColor[2],logoboardLightColor[3],1,logoboardLightFadeTime,nowTime[0],logoboardLightSetInterval);
                        }
                    }
    
                }
            }
        }
    }
});