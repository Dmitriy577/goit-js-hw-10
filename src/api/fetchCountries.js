function countrySearch(city) {
  const fetchUrl = 'https://restcountries.com/v3.1/name/';
  const parametrs = 'fields=name,capital,population,flags,languages';
  return fetch(parametrs + city + fetchUrl).then(t => {
    if (!t.ok) {
      throw new Error(t.status);
    }
    return t.json();
  });
}
export { countrySearch };