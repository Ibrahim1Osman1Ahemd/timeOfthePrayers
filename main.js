// const { default: axios } = require("axios");

let contryBtn = document.getElementById("countrey");
let langBtn = document.getElementById("lang-btn");
let contery;


contryBtn.addEventListener('click', () => {
    if(document.getElementById("con-nav").style.display == 'block'){
        document.getElementById("con-nav").style.display = 'none'

    }else{
    document.getElementById("con-nav").style.display = 'block '
        
    }
})

langBtn.addEventListener('click', () => {
    if(document.getElementById("lang-nav").style.display == 'none'){
        document.getElementById("lang-nav").style.display = 'block'
    }else{
        document.getElementById("lang-nav").style.display = 'none'
    }
})




function getThePrayerTime(id){
    if(id == 'sd'){
        document.getElementById("El-suoboh").innerHTML ='soon' ;
        document.getElementById("Dhuhr").innerHTML = 'soon';
        document.getElementById("Asr").innerHTML = 'soon';
        document.getElementById("Maghrib").innerHTML = 'soon';
        document.getElementById("Isha").innerHTML = 'soon';
    }else{
        axios.get(`http://api.aladhan.com/v1/calendarByAddress/2023/4?address=${id}&method=8`)
        .then((response) => {
          let timeOfprayer = response.data.data[0].timings
          let fajr = timeOfprayer.Fajr;
          let Dhuhr =timeOfprayer.Dhuhr;
          let Asr = timeOfprayer.Asr;
          let Maghrib = timeOfprayer.Maghrib
          let Isha  = timeOfprayer.Isha;
          function addTimeToThePage(){
                document.getElementById("El-suoboh").innerHTML = fajr;
                document.getElementById("Dhuhr").innerHTML = Dhuhr;
                document.getElementById("Asr").innerHTML = Asr;
                document.getElementById("Maghrib").innerHTML = Maghrib;
                document.getElementById("Isha").innerHTML = Isha;
          }
          addTimeToThePage()
        })
    }

}

getThePrayerTime('Qatar')

