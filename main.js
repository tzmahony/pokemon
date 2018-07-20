function setCurrentPage(page) {
    currentPage = page;
    let contentChildDiv = document.getElementById('child-content');
    contentChildDiv.parentNode.removeChild(contentChildDiv);

    onPageLoad();
}

function onPageLoad() {
    console.log('onPageLoad, current page:', currentPage);

    let pokemonPromise = loadPokemon();
    pokemonPromise.then(function(result) {
        console.log('pokemon json:', result);
        let pokemonResults = result.results;
        console.log('pokemon results:', pokemonResults);

        let pokemon0 = result.results[0];
        console.log('pokemon 0:', pokemon0);
        console.log('pokemon 0 name:', pokemon0.name);

        let pokemon1 = result.results[1];
        console.log('pokemon 1:', pokemon1);
        console.log('pokemon 1 name:', pokemon1.name);

        // etc
    });

    let contentDiv = document.getElementById('content');
    console.log('ContentDiv:', contentDiv)

    if (currentPage === 'pokemon') {
        let markup = generateContent('pokemon', 'pokemon');
        console.log('markup:', markup);

        let elChild = document.createElement('div');
        elChild.setAttribute('id', 'child-content');
        elChild.innerHTML = markup;
        contentDiv.appendChild(elChild);

        loadTeams();
    } else if (currentPage === 'stadiums') {
        let markup = generateContent('Stadiums', 'stadiums');

        let elChild = document.createElement('div');
        elChild.setAttribute('id', 'child-content');
        elChild.innerHTML = markup;
        contentDiv.appendChild(elChild);

        loadStadiums();
    }
    else if (currentPage === 'pokemon id') {
        let markup = generateContent('pokemon id', 'pokemon id');

        let elChild = document.createElement('div');
        elChild.setAttribute('id', 'child-content');
        elChild.innerHTML = markup;
        contentDiv.appendChild(elChild);

        loadChannels();
    }
}

function generateContent(header, contentId) {
    let markup = `
        <h2>${ header }</h2>
        <div id="${ contentId }"></div>
        `;
    return markup;
}

function load() {
    return fetch('https://pokeapi.co/', {
        method: 'get'
    }).then(function (response) {
        return response.json();
    });
}

function loadPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20', {
        method: 'get'
    }).then(function (response) {
        return response.json();
    });
}

function loadpokemonnames() {
    load().then((j) => renderPokemon(j));
}


function loadStadiums() {
    load().then((j) => renderStadiums(j));
}


function loadpokemonid() {
    load().then((j) => renderPokemonId(j));
}


function renderPokemon(json) {
    console.log("in render pokemon:" + json.pokemon[0].name);

    var parentDiv = document.getElementById("pokemon");

    for (let team of json.pokemon)

        const markup = `
         <div class="pokemon-box">
            <h3>${ pokemon.name }</h3>
            <img src="${ pokemon image}">
        </div>`


        var elChild = document.createElement('div');
        elChild.innerHTML = markup;
        parentDiv.appendChild(elChild);

    }
}

function renderStadiums(json) {
    console.log("in render stadiums:" + json.stadiums[0].name);

    var parentDiv = document.getElementById("stadiums");

    for (var stadium of json.stadiums) {
        console.log("name"+ stadium.name);

        const markup = `
         <div class="stadium-box">
            <h3>${stadium.name}</h3>
        </div>`

        var elChild = document.createElement('div');
        elChild.innerHTML = markup;
        parentDiv.appendChild(elChild);
    }


}


function renderPokemonid(json) {
    console.log("in render pokemon id:" + json.pokemonid[0].name);

    var parentDiv = document.getElementById("pokemon id");

    for (var pokemonid of json.pokemonid) {
        console.log("name" + pokemonid.name);
}