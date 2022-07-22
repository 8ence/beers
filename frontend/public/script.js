/*console.log(beers);

console.log(beers.cards);

console.log(beers.logo);

console.log(beers.cards[5]); */

const headerComponent = function(title) {
    return `
    <header>
    <h1>${title}</h1>
    </header>
    `
}

const footerComponent = function(company) {
    return`
    <footer>
    <h2>${company}</h2>
    </footer>
    `
}

function loadEvent() {
    const rootElement = document.getElementById('root');
    
    const beerCards = beers.cards;

    rootElement.insertAdjacentHTML('beforebegin' , headerComponent('best beers'))
    
    for(beer of beerCards){
        rootElement.insertAdjacentHTML('beforeend' , beerCardComponent(beer.title , beer.sub , beer.text));
    }
    
    rootElement.insertAdjacentHTML('afterend' , footerComponent('This Is The Footer'))


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
    <section class="card" onclick="onClick(this)">
    <h1>${beerName}</h1>
    <h2>${beerType}</h2>
    <h3>${beerCompany}</h3>
    <button>buy</button>
    </section>
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