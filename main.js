window.onload = randomQuote;

function randomQuote() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://thatsthespir.it/api", true);

    xhr.onload = function() {
        if (this.status == 200) {
            let random = JSON.parse(this.response);
            console.log(random);
            console.log(random.quote);
            console.log(random.author);

            let pageQ = document.getElementById("quote");
            let pageP = document.getElementById("author");
            let pagePic = document.getElementById("pic");

            pageQ.innerHTML = random.quote;
            pageP.innerHTML = random.author;
            pagePic.setAttribute("src", random.photo);
        }
    }

    xhr.onerror = function() {
        console.log("An error has occurred during request...")
    }

    xhr.send();
}