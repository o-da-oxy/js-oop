function print(townsInfo){
    let infoArr = [];
    let latitude;
    let longitude;
    for (let i = 0; i < townsInfo.length; i++){
        let strArr = townsInfo[i].split(' | ');
        latitude = Number(strArr[1]).toFixed(2);
        longitude = Number(strArr[2]).toFixed(2);
        infoArr[i] = {
            town: strArr[0], latitude: latitude, longitude: longitude
        };
        console.log(infoArr[i]);
    }
}
print(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625']);