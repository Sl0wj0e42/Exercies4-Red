window.onload = function(){
    alert("Green!!!");
    //let urlHolder = getCurrentURL();

    let urlHolder = window.location.href;
    urlShow = document.getElementById("urlShow");
    urlShow.innerHTML = urlHolder;

    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if((this.readyState === 4) && (this.status == 200)) {
            let colourSetting = document.getElementById("colourSetting");
            colourSetting.innerHTML = this.responseText;
        } else{
            colourSetting = document.getElementById("colourSetting");
            colourSetting.innerHTML = "Error: " + this.status;
        }
    };
    request.open("GET", "http://localhost:82/green", true);
    request.send();
}