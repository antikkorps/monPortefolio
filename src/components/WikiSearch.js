//API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form")
const input = document.querySelector("input")
const errorMsg = document.querySelector(".error-msg")
const loader = document.querySelector(".loader")
const resultsDisplay = document.querySelector(".results-display")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const inputValue = input.value
  if (!inputValue.length) {
    errorMsg.textContent = "veuillez saisir quelque chose"
    return
  } else {
    errorMsg.textContent = ""
    loader.style.display = "block"
    resultsDisplay.textContent = ""
    wikipediaApiCall(inputValue)
  }
}

async function wikipediaApiCall(searchInput) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
    )
    const data = await response.json()
    console.log(data)
    displayResults(data)
  } catch (error) {
    errorMsg.textContent = `${error}`
    loader.style.display = "none"
    console.log(error)
  }
}

function displayResults(data) {
  // Clear previous results
  resultsDisplay.innerHTML = ""

  const searchResults = data.query.search

  if (!searchResults.length) {
    errorMsg.textContent = "Aucun résultat"
    return
  } else {
    errorMsg.textContent = ""

    searchResults.forEach((element) => {
      const url = `https://en.wikipedia.org/w/?curid=${element.pageid}`
      const card = document.createElement("div")
      card.className = "result-item"
      card.innerHTML = `
      <div class="py-5 flex flex-col">
          <h3 class="result-title text-2xl text-blue-300 hover:text-blue-600 underline decoration-3 text-start">
          <a href=${url} class="links_basics" target="_blank">${element.title}</a></h3>
          <a href=${url} class="result-link text-start text-green-300 hover:text-green-600 decoration" target="_blank">${url}</a>
          <span class="result-snippet text-start text-white">${element.snippet}</span>
          </div>
          `
      resultsDisplay.appendChild(card)
    })
  }
}
