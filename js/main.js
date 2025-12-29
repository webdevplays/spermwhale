window.onloadTurnstileCallback = function () {
    turnstile.render('#loadCap', {
        sitekey: '0x4AAAAAAAiLhYnz4zDpT02K',
        callback: function(token) {
            console.log(`Challenge Success ${token}`);
            setTimeout(() =>{
                document.querySelector(".captcha").style.display = "flex";
                document.getElementById("loadCap").style.display = "none";
            }, 2000);
        },
    });
};