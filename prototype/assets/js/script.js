
const MENU = [];

_fetch();
function _fetch() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "assets/file/menu.json", true);
    xhttp.send();
    xhttp.addEventListener('load', function() {
        let result = JSON.parse(xhttp.responseText);

        for (const product of result) 
            MENU.push(product);
        
        _drawCards();
    });
}

function _drawCards(){



let MenuHtml = MENU.map( (product) => {

    return `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>`;

});
    


}
