"use strict"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.color = color
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX
    } else if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY
    }
    this.x += this.directionX
    this.y += this.directionY
    this.draw()
  }
}

const Particle1 = new Particle(0, 0, 0, 0, 0, "white")
console.log(Particle1)

let particlesArray

function init() {
  particlesArray = []

  const numberOfParticles = (canvas.height * canvas.width) / 9000

  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 5 + 1
    const x = Math.random() * (innerWidth - 10 - 10 + 1) + 10
    const y = Math.random() * (innerHeight - 10 - 10 + 1) + 10
    const directionX = cleanDirection()
    const directionY = cleanDirection()

    particlesArray.push(new Particle(x, y, directionX, directionY, size, "#f1f1f1"))
  }
}

init()

function cleanDirection() {
  const random = Math.trunc(Math.random() * 2)
  if (random) {
    return Math.random() * 1 + 0.5
  } else {
    return Math.random() * -1 - 0.5
  }
}

function animate() {
  ctx.clearRect(0, 0, innerWidth, innerHeight)
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
  }
  requestAnimationFrame(animate)
}
animate()

window.addEventListener("resize", handleResize)

function handleResize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  init()
}
