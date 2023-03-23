const baseURL = "http://numbersapi.com";
const list = document.querySelector("ul")


async function numbersFact(nums) {

  if (typeof (nums) === "number") {
    let res = await axios.get(`${baseURL}/${nums}?json`)
    let item = document.createElement('li')
    item.innerText = res.data.text
    list.append(item)
  }
  if (typeof (nums) === "object") {
    let res = await axios.get(`${baseURL}/${nums}?json`)
    let facts = Object.values(res.data)
    facts.forEach(fact => {
      let item = document.createElement('li')
      item.innerText = fact
      list.append(item)
    })
  }
}

numbersFact(3)
numbersFact([22, 35, 1])
