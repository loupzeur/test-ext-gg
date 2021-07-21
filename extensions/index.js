function getGoogleContent(){
    var elems = []
    var docs = document.querySelectorAll("div[class=g]")
    console.log(docs)
    docs.forEach(element => {
        if(element!==undefined){
            var firstElem =element.childElementCount-1//first elem has 2 childs others have 1
            linkElement = element.childNodes[firstElem].childNodes[0].childNodes[0]
            titre = linkElement.childNodes[0].childNodes[1].innerText
            link = linkElement.childNodes[0].href
            description = element.childNodes[firstElem].childNodes[0].childNodes[1].innerText
            if(titre !="" && link !=""){
                elems.push({title: titre,description: description, link:link})
            }
        }
    });
    chrome.runtime.sendMessage(elems)
    //listener on input would be better
    //setTimeout(getGoogleContent,5000);
    //but useless anyway, page is reloaded ^^
}

getGoogleContent();