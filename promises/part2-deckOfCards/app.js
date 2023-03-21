// load the page = get one deck
// onclick => draw the card with the deck_id


const base_URL = `https://deckofcardsapi.com/api/deck`

let deck_id;
let list = document.querySelector('ul')
let res = axios.get(`${base_URL}/new/shuffle/?deck_count=1`)
res.then(response => {
  deck_id = response.data.deck_id
}).catch((error) => {
  console.error(error);
});




function myFunction() {
  const res = axios.get(`${base_URL}/${deck_id}/draw/?count=1`)
  res.then(response => {
    let { suit, value } = response.data.cards[0]
    let item = document.createElement('li')
    item.innerText = value + ' of ' + suit
    list.appendChild(item)
  })
}
