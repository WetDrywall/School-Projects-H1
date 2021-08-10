const endpoint = "https://api.dataforsyningen.dk/postnumre/";

const addresses = [];
fetch(endpoint).then(blob => blob.json().then(data => addresses.push(...data)));

function findMatches(wordToMatch, addresses){
    return addresses.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');

        return place.navn.match(regex) || place.nr.match(regex);
    });
}

function displayMatches(){
    const matchArray = findMatches(this.value, addresses);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.navn.replace(regex, `<span class="hl">${this.value}</span>`);
        const postalcode = place.nr.replace(regex, `<span class="hl">${this.value}</span>`);
        //var link = href="https://api.dataforsyningen.dk/postnumre/" + `${postalcode}`;

        return `
        <li>
            <span class="name" >${cityName}, ${postalcode}</span>
        </li>
        `;
    }).join('');
    sugggestions.innerHTML = html;
}

const searchInput = document.querySelector('.searchBar');
const sugggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
