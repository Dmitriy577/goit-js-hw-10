function makeCountryList(data) {
    const markUp = data
        .map(country => {
        return `
        <li class="li"><img class="country_img" src="${country.flags.svg}" alt="${country.name.official}" height="25" width="40"></img><p>${country.name.official}</p>
    </li>`;
        })
        .join('');
    return markUp;
}

function makeCountryInfo(data) {
    const value = Object.values(data.languages).join(', ');
        
    return `
        <div class="country_div"><img class="country_img" src="${data.flags.svg}" alt="${data.name.official}" height="25" width="40"><h1>${country.name.official}</h1></div> 
    <ul>
        <li class="country_list"><h3>Capital:</h3> <span>${data.capital}</span></li>
        <li class="country_list"><h3>Population:</h3> <span>${data.population}</span></li>
        <li class="country_list"><h3>Languages:</h3> <span>${value}</span></li>
    </ul>`;
  }
  export { makeCountryList, makeCountryInfo };