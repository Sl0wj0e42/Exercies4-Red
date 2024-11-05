/*window.onload = function(){
    alert("Red!!!");
    let urlHolder = getCurrentURL()
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

    urlShow = document.getElementById("urlShow");
    urlShow.innerHTML = urlHolder;
}*/

window.onload = function(){
    alert("Red!!!");
    //var colourSetting = document.getElementById("colourSetting");
    //pColour = document.createElement("p");
    //pColour.innerHTML = "<p>Here is some" + "<span style=\"color: red;\">red<\span> text <\p>";
    //colourSetting[0].append(pColour);

    let test = document.getElementById("test");
    test.innerHTML = "<p>Here is some" + "<span style=\"color: red;\"> red<\span>" + " text <\p>";
}