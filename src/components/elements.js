// Weather Form - Main Page 
export function MainForm(){
  const content = document.getElementById("content")

  // Main Title 
  const mainTitle = document.createElement("h1")
  mainTitle.textContent = "Rui's Weather App"
  mainTitle.id = "main-title"
  content.appendChild(mainTitle)

  // Weather Form 
  const weatherForm = document.createElement("form")
  weatherForm.id = "weather-form"
  content.appendChild(weatherForm)

  // Input Container 
  const inputContainer = document.createElement("div")
  inputContainer.id = "input-container"
  weatherForm.appendChild(inputContainer)

  // Input inside form 
  const locationInput = document.createElement("input")
  locationInput.type = "text"
  locationInput.id = "location-input"
  locationInput.placeholder = "Search location ..."
  locationInput.required = true
  inputContainer.appendChild(locationInput)

  // Button Container 
  const buttonContainer = document.createElement("div")
  buttonContainer.id = "button-container"
  inputContainer.appendChild(buttonContainer)

  // Celcius Button
  const tempCelcius = document.createElement("button")
  tempCelcius.id = "temp-celcius"
  tempCelcius.type = "button"
  tempCelcius.textContent = "°C"
  buttonContainer.appendChild(tempCelcius)

  // Fahrenheit Button 
  const tempFahrenheit = document.createElement("button")
  tempFahrenheit.id = "temp-fahrenheit"
  tempFahrenheit.type = "button"
  tempFahrenheit.textContent = "°F"
  buttonContainer.appendChild(tempFahrenheit)

  // Search Button 
  const searchButton = document.createElement("input")
  searchButton.type = "submit"
  searchButton.textContent = "Search"
  searchButton.id = "search"
  weatherForm.append(searchButton)
}
