import "./styles.css"
import { MainForm } from "./components/elements"
import { WeatherAPI } from "./components/handleAPI"

document.addEventListener("DOMContentLoaded", () => {
  MainForm()
  EventListeners()
})

function EventListeners(){

  // Weather Form
  const weatherForm = document.getElementById("weather-form")
  weatherForm.addEventListener("submit", () => {
    event.preventDefault()
    const location = document.getElementById("location-input")
    WeatherAPI(location.value)
  })
}