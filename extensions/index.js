function getGoogleContent(){
    var elems = []
    var docs = document.querySelectorAll("div[class=g]")
    docs.forEach(element => {
        titre = element.childNodes[1].childNodes[0].childNodes[0].innerText
        description = element.childNodes[1].childNodes[0].childNodes[1].innerText
        elems.push({title: titre,description: description, link:"test"})
    });
    sendRequest(json.stringify(elems))
    setTimeout(getGoogleContent,5000);
}

function sendRequest(elems){
    const req = new XMLHttpRequest();
    const baseUrl = "http://127.0.0.1:8080/search";

    req.open("POST", baseUrl, true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(elems);

    req.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Got response 200!");
        }
    }
}
getGoogleContent();