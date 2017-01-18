/**
 * Created by Iaroslav Zhbankov on 18.01.2017.
 */
var lastDaysUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
var allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
function getInfo(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

var lastDaysCampers = getInfo(lastDaysUrl);
var allTimeCampers = getInfo(allTimeUrl);
