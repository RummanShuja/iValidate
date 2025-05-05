console.log("js working");

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "shujarumman",
    "email": "shujarumman@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
};

let btn = document.querySelector("#submitBtn");
btn.addEventListener("click",async(e)=>{
    e.preventDefault();
    // console.log("clicked");
    let email = document.getElementById("email").value;
    // console.log("email=",email);
    // return;
    let resultCont = document.querySelector("#resultCont");
    resultCont.innerHTML ='<img src="img/loading.svg" alt="loading.." >';
    const key = "ema_live_zKNvvNSXR2CvIITKRgypZaDbbvY0KbfCkWLpVTrA";
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`; 
    let res = await fetch(url);
    
    let result = await res.json();
    let str="";
    for(let key in result){
        if(result[key]!==""){
            str = str + `<div>${key}: ${result[key]} </div>`;
        }
         
    }
    resultCont.innerHTML = str;
});



// console.log(str);
