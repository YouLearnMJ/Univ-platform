//서버는 header에 시간을 담아 발송하도록 되어 있다.
// https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html : HTTP W3문서 참고

const PROXY_SERVER_URL = "/proxy"

function getURL () { 
    var url = document.getElementById("urlInput").value;
    getRawServerTime(url);
}

function getRawServerTime(url) {
    axios.post(PROXY_SERVER_URL, {
        address: url
    })
    .then((response) => {
        console.log(url + " : " + response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function getServerTime(url){
    var time = new Date(getRawServerTime(url));
    console.log(time);
    //여기 저장되는 시간 값은 String.
    var currentHours = time.getHours();
    var currentMinutes = time.getMinutes();
    var currentSeconds = time.getSeconds();
    var ampm ="";
    
    //set 12 hours. (not 24 hours)
    if(currentHours > 12){
        currentHours %= 12;
        ampm ="오후 ";    
    }else{
        ampm ="오전 ";
    }
    

    if(currentHours < 10){
        currentHours = parseInt("0"+currentHours);
    }

    if(currentMinutes < 10){
        currentMinutes = parseInt("0"+currentMinutes);
    }

    if(currentSeconds < 10){
        currentSeconds = parseInt("0"+currentSeconds);
    }

    console.log(currentHours);
    console.log(currentMinutes);
}

//get servertime per 0.1 seconds.

// setInterval('getRawServerTime("https://www.google.com/")', 200);
// setInterval('getRawServerTime("https://www.naver.com/")', 200);