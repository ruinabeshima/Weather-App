import "./styles.css"
import { MainForm } from "./components/elements"
import { WeatherAPI } from "./components/handleAPI"


export const globalState = {
  "units": "celcius"
}

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

  // Celcius Button
  const celcius = document.getElementById("temp-celcius")
  celcius.addEventListener("click", () => {
    globalState.units = "celcius"
  })

  // Fahrenheit Button
  const fah = document.getElementById("temp-fahrenheit")
  fah.addEventListener("click", () => {
    globalState.units = "fahrenheit"
  })

 
}