const base_URL = `https://deckofcardsapi.com/api/deck`
const list = document.querySelector('ul')

this.deck_id;

async function init() {
  let res = await axios.get(`${base_URL}/new/shuffle/?deck_count=1`)
  this.deck_id = res.data.deck_id;
}
init()

async function drawCard() {
  try {
    let shuffle_res = await axios.get(`${base_URL}/${this.deck_id}/shuffle/?remaining=true`)
    let res = await axios.get(`${base_URL}/${this.deck_id}/draw/?count=2`)
    let { suit, value } = res.data.cards[0]
    let item = document.createElement('li')
    item.innerText = value + ' of ' + suit
    list.appendChild(item)
  } catch (e) {
    alert("error:", e)
  }

}
