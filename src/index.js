import './css/styles.css';
import countrySearch from './api/fetchCountries';
import debounce from 'lodash.debounce';
import { Notiflix } from 'notiflix/build/notiflix-notify-aio';
import { makeCountryList,makeCountryInfo, } from './templates/marcups';

const DEBOUNCE_DELAY = 500;

refs.searchBox.addEventListener('input', debounce(SearchBox, DEBOUNCE_DELAY));

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function SearchBox(eve) {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
  const name = eve.target.value;
  if (!name) return;
  countrySearch(name)
    .then(r => {
      if (r.length > 10) {
        Notiflix.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (r.length > 1) {
        refs.countryList.innerHTML = makeCountryList(r);
        refs.countryInfo.innerHTML = '';
        return;
      }
      const data = r[0];
      refs.countryInfo.innerHTML = makeCountryInfo(data);
      refs.countryList.innerHTML = '';
    })
    .catch(err => {
      console.log(err);
      Notiflix.failure('Oops, there is no country with that name');
    });
}