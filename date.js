var okulAcilisTarih = new Date("2017-9-18");
var vizeTarih = new Date("2017-4-22");
var finalTarih = new Date("2017-5-29");
var butTarih = new Date("2017-6-19");
var bugunTarih = new Date();

var vizelereKalanGun = aradakiGunBul(vizeTarih,bugunTarih);
var finallereKalanGun = aradakiGunBul(finalTarih,bugunTarih);
var butlereKalanGun = aradakiGunBul(butTarih,bugunTarih);
var okulAcilisKalanGun = aradakiGunBul(okulAcilisTarih,bugunTarih);


if (bugunTarih <= okulAcilisTarih){
    document.getElementById('tatilTablo').style.display = 'table-row';
    document.getElementById('vizeTablo').style.display = 'table-row';
    document.getElementById('finalTablo').style.display = 'table-row';
    document.getElementById('butTablo').style.display = 'table-row';

    document.getElementById('tatil').innerHTML = okulAcilisKalanGun+" gün";
    document.getElementById('vize').innerHTML = vizelereKalanGun+" gün";
    document.getElementById('final').innerHTML = finallereKalanGun+" gün";
    document.getElementById('but').innerHTML = butlereKalanGun+" gün";
}
else if (bugunTarih <= vizeTarih){
    document.getElementById('vizeTablo').style.display = 'table-row';
    document.getElementById('finalTablo').style.display = 'table-row';
    document.getElementById('butTablo').style.display = 'table-row';

    document.getElementById('vize').innerHTML = vizelereKalanGun+" gün";
    document.getElementById('final').innerHTML = finallereKalanGun+" gün";
    document.getElementById('but').innerHTML = butlereKalanGun+" gün";
}
else if (bugunTarih <= finalTarih){
    document.getElementById('finalTablo').style.display = 'table-row';
    document.getElementById('butTablo').style.display = 'table-row';

    document.getElementById('final').innerHTML = finallereKalanGun+" gün";
    document.getElementById('but').innerHTML = butlereKalanGun+" gün";
}
else{
    document.getElementById('butTablo').style.display='table-row';

    document.getElementById('but').innerHTML = butlereKalanGun+" gün";
}

function aradakiGunBul(tarih1,tarih2){
    var oneDay = 24*60*60*1000;
    return Math.round(Math.abs((tarih1.getTime() - tarih2.getTime())/(oneDay)));
}
