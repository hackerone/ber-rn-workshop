const names = [
  "Marla Paez",
  "Claudio Feathers",
  "John Shute",
  "Bernarda Sea",
  "Callie Leist",
  "Mckinley Stamm",
  "Arnold Hoke",
  "May Berry",
  "Corey Neeson",
  "Daphine Launer",
  "Manuel Goetzinger",
  "Bruno Freitas",
  "Marty Stiff",
  "Rudolph Shoaff",
  "Clyde Vigliotti",
  "Jong Dirks",
  "Ivory Kelso",
  "Stanley Forsberg",
  "Charmain Brousseau",
  "Cristina Brazil",
  "Jeramy Jackson",
  "Madlyn Krogh",
  "Emily Popham",
  "Talia Comacho",
  "Lovella Bolan",
  "Aleida Feaster",
  "Shyla Adamek",
  "Alton Laster",
  "Bethel Wickstrom",
  "Rebecka Hedgpeth",
  "Lavenia Herron",
  "Lisa Fill",
  "Desire Joyner",
  "Altha Maxim",
  "Fallon Lafrance",
  "Cletus Simpkins",
  "Edgardo Mosteller",
  "Lorelei Fugitt",
  "Elsa Acklin",
  "Cristin Knepper",
  "Mose Larger",
  "Christia Gwynn",
  "Zelma Bruggeman",
  "Angelo Westbrooks",
  "Kelvin Miland",
  "Kennith Degree",
  "Dotty Updike",
  "Raleigh Barksdale",
  "Dania Provence",
  "Reanna Opp",
]


/**
 * @return - [{name: 'Some Name', key: 0}, ..]
 */
export const getNames = () => {
  return names.map((name, key) => ({name, key}));
}

const encodeParams = (params) => {
  return Object.key(params).reduce((query, key) => {
    return query.concat(`${key}=${params[key]}`);
  }, []).join('&');
}

export const fetchGiphy = (path, input) => {
  const host = 'https://api.giphy.com';
  const params = {
    api_key: '266e2bfc682e49ecb5c6984ba62d4b05',
    limit: 20,
    ...input
  }
  const url = host + url + '?' + encodeParams(params);
  return fetch(url).then(resp => resp.json());
}

export const getSearchItems = (q, offset = 0) => {
  const params = {
    q,
    offset
  };
  return fetchGiphy('/v1/gifs/search', params);
}

export const getTrendingItems = (q, offset = 0) => {
  const params = {
    q,
    offset
  };
  return fetchGiphy('/v1/gifs/search', params);
}