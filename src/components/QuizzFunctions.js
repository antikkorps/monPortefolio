"use strict"

const responses = ["Oui", "Oui", "Oui", "Oui"]
const emojis = ["✅", "🚀", "😅", "😬"]

document.querySelectorAll(".quizz-form").forEach((form) => {
  const submitButton = form.querySelector(".form_button")
  submitButton.addEventListener("click", (event) => handleSubmit(event, form))
})

function handleSubmit(event, form) {
  event.preventDefault()

  const results = []

  const radioButtons = form.querySelectorAll("input[type='radio']:checked")

  radioButtons.forEach((radioButton, index) => {
    console.log("radio", radioButton)
    if (radioButton.value === responses[index]) {
      results.push(true)
      console.log("results", results)

      const emoji = document.createElement("span")
      emoji.textContent = emojis[index]
      emoji.classList.add("emoji")
      radioButton.parentNode.appendChild(emoji)
    }
  })
}
