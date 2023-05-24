const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("Seconds");
const TimeOfDay = document.getElementById("ampm");
const Quotes = document.getElementById("QuotesBox");

const getQuotes = () => {
    let category = "happiness";
    fetch("https://api.api-ninjas.com/v1/quotes?category=" + category, {
        method: 'GET',
        headers: {
            'X-API-Key': 'qCz4qNTmsKcFofTADB3dfw==dAc5F727XnNUpkLY',
            'Content-type': 'application/json'
        }
    })
    .then(function(response){
        if(!response.ok){
            throw new Error('Network response not ok');
        }
        return response.json();
    })
    .then(function(result){
       Quotes.innerText = result[0].quote;
    })
    .catch(function(error){
        console.error('Error:', error);
    })
}

const LiveClock = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if (h > 12){
        h = h - 12 
        ampm = "PM"
    }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    TimeOfDay.innerText = ampm;
};

getQuotes();
LiveClock();

setInterval(() => {
     getQuotes();
}, 16000);

setInterval(() => {
    LiveClock();
}, 1000);