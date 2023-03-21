let baseURL = "http://numbersapi.com";
const list = document.querySelector("ul")

function numberFact(num) {
  return new Promise((resolve, reject) => {
    const getAFact = axios.get(`${baseURL}/${num}?json`)
    getAFact.then(response => console.log(response.data)).catch(err => (err))
  })
}
numberFact(3)
numberFact([22, 35, 1])
num = 2
Promise.all(Array.from({ length: 4 }, () => {
  return axios.get(`${baseURL}/${num}?json`)
}))
  .then(facts => {
    facts.forEach(data => {
      let item = document.createElement('li')
      item.innerText = data.data.text
      list.append(item)
    })
  })
