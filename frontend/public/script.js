/*console.log(beers);

console.log(beers.cards);

console.log(beers.logo);

console.log(beers.cards[5]); */


function loadEvent() {
    const rootElement = document.getElementById('root');
    
    const beerCards = beers.cards;
    for(beer of beerCards){
        rootElement.insertAdjacentHTML('beforeend' , beerCardComponent(beer.title , beer.sub , beer.text));
    }

    //const beer = beers.cards[0];
    
    //const beerName = beer.title;
    //const beerType = beer.sub;
    //const beerCompany = beer.text;

    //const beerName1 = beerCards[1].title;
    //const beerType1 = beerCards[1].sub;
    //const beerCompany1 = beerCards[1].text;

    //rootElement.insertAdjacentHTML('beforeend' , beerCardComponent(beerName , beerType , beerCompany));
    //rootElement.insertAdjacentHTML('beforeend' , beerCardComponent(beerName1 , beerType1 , beerCompany1));
    //rootElement.insertAdjacentHTML('beforeend' , beerCardComponent(beerCards[2].title , beerCards[2].sub , beerCards[2].company));
}

const beerCardComponent = function(beerName, beerCompany, beerType) {
    return `
    <div class="card" onclick="onClick(this)">
    <div class="beer-name">${beerName}</div>
    <div class="beer-company">${beerType}</div>
    <div class="beer-type">${beerCompany}</div>
    </div>
    `
} 

const onClick = div => {
    console.log(div);
    if (div.classList.contains('green')) {
        div.classList.remove('green');
    } else {
        div.classList.add('green');
    }
}

window.addEventListener('load' , loadEvent)