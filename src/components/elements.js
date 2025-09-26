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

  // Input inside form 
  const locationInput = document.createElement("input")
  locationInput.type = "text"
  locationInput.id = "location-input"
  locationInput.placeholder = "Enter location ..."
  locationInput.required = true
  weatherForm.appendChild(locationInput)

  // Button Container 
  const buttonContainer = document.createElement("div")
  buttonContainer.id = "button-container"
  weatherForm.appendChild(buttonContainer)

  // Celcius Button
  const tempCelcius = document.createElement("button")
  tempCelcius.id = "temp-celcius"
  tempCelcius.textContent = "°C"
  buttonContainer.appendChild(tempCelcius)

  // Fahrenheit Button 
  const tempFahrenheit = document.createElement("button")
  tempFahrenheit.id = "temp-fahrenheit"
  tempFahrenheit.textContent = "°F"
  buttonContainer.appendChild(tempFahrenheit)

  // Search Button 
  const searchButton = document.createElement("input")
  searchButton.type = "submit"
  searchButton.textContent = "Search"
  searchButton.id = "search"
  weatherForm.append(searchButton)
}
