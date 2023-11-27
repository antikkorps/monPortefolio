"use strict"

const responses = ["Oui", "Oui", "Oui", "Oui"]
const emojis = ["✅", "🚀", "😅", "😬"]

const instructionsBeforeResult = document.querySelector(".instructions")
const titleResult = document.querySelector(".results")
const markResult = document.querySelector(".mark")
const helpResult = document.querySelector(".message-text")
document.querySelectorAll(".quizz-form").forEach((form) => {
  const submitButton = form.querySelector(".form_button")
  submitButton.addEventListener("click", (event) => handleSubmit(event, form))
})

function handleSubmit(event, form) {
  event.preventDefault()

  const results = []

  const radioButtons = form.querySelectorAll("input[type='radio']:checked")

  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true)

      const emoji = document.createElement("span")
      emoji.textContent = emojis[index]
      emoji.classList.add("emoji")
      radioButton.parentNode.appendChild(emoji)
    } else {
      results.push(false)
    }
  })
  console.log("radio", radioButtons)
  console.log("results", results)
  showResults(results)
}

function showResults(results) {
  const numberOfCorrectAnswers = results.filter((result) => result === true).length

  console.log("Le nombre de réponse juste", numberOfCorrectAnswers)

  switch (numberOfCorrectAnswers) {
    case 4:
      titleResult.textContent =
        "La prochaine étape est bien de faire intervenir un développeur !"
      markResult.textContent = "4/4"
      helpResult.textContent =
        "Et ça tombe bien je suis développeur ! Envoyez-moi un message"
      markResult.style.display = "block"
      helpResult.style.display = "block"
      instructionsBeforeResult.style.display = "none"
      break
    case 3:
      titleResult.textContent = "Très bonne nouvelle !"
      markResult.textContent = "3/4"
      helpResult.textContent = "Un dernier effort et votre projet aboutira !"
      markResult.style.display = "block"
      helpResult.style.display = "block"
      instructionsBeforeResult.style.display = "none"
      break
    case 2:
      titleResult.textContent = "C'est super la moitié du chemin est fait !"
      markResult.textContent = "2/4"
      helpResult.textContent = "Je peux vous aider à aller plus loin !"
      markResult.style.display = "block"
      helpResult.style.display = "block"
      instructionsBeforeResult.style.display = "none"
      break
    case 1:
      titleResult.textContent = "Nous avons une bonne base de travail !"
      markResult.textContent = "1/4"
      helpResult.textContent = "On s'y met quand ?"
      markResult.style.display = "block"
      helpResult.style.display = "block"
      instructionsBeforeResult.style.display = "none"
      break
    default:
      titleResult.textContent = "On est au début de votre projet !"
      markResult.textContent = "0/4"
      helpResult.textContent = "C'est une bonne nouvelle, rencontrons-nous !"
      markResult.style.display = "block"
      helpResult.style.display = "block"
      instructionsBeforeResult.style.display = "none"
      break
  }
}
