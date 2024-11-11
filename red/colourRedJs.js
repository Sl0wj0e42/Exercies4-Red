window.onload = function(){
    alert("Red!!!");
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
    request.open("GET", "http://localhost:82/red", true);
    request.send();
}


/*window.onload = function(){
    alert("Red!!!");
    var colourSetting = document.getElementById("colourSetting");
    pColour = document.createElement("p");
    pColour.innerHTML = "<p>Here is some <span style=\"color: red;\"> red<\span> text <\p>";
    colourSetting.append(pColour);

    //let test = document.getElementById("test");
    //test.innerHTML = "<p>Here is some" + "<span style=\"color: red;\"> red<\span> text <\p>";
}*/