window.onload = function(){
    alert("Red!!!");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status == 200) {
            let elem = document.getElementById("colourSetting");
            elem.innerHTML = this.responseText;
        } else{
            elem = document.getElementById("colourSetting");
            elem.innerHTML = this.status;
        }
    };
    request.open("GET", "http://localhost:82/", true);
    request.send();
}