const statusInner = {
    tempInner : 0,
    humidInner : 0,
    pm10Inner : 0,
    pm25Inner : 0,
    vocInner : 0,
    co2Inner :0,
    getUrl(){
    return 'tempInner='+statusInner.tempInner+'&humidInner='+statusInner.humidInner+'&pm10Inner='+statusInner.pm10Inner+'&pm25Inner='+statusInner.pm25Inner
        +'&vocInner='+statusInner.vocInner+'&co2Inner='+statusInner.co2Inner
}
}



module.exports = statusInner;