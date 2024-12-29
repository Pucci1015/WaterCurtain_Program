//NorthernLightsJourney.js
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
                            waterLightColorChange(i,0,100,255,nowTime[0],fadeTime,0,waterLightSetInterval);
                        }
                    }
                    
                }
            }

            if ( subNowPage === 1 ) {
            }
        }
    }
});