const weapons = 'http://mugenmonkey.com/api/v0/ds3_weapons';

function weaponsAPI() {
  const fetchAPI = fetch(weapons).then((resolve) => resolve.json());
  console.log(fetchAPI);
  return fetchAPI;
}

export default weaponsAPI;
