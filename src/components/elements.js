import { globalState } from ".."

// Weather Form - Main Page 
export function MainForm(){
  const main = document.getElementById("main")

  const content = document.createElement("div")
  content.id = "content"
  main.appendChild(content)

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

export function ShowResults(data){

  // Delete search page 
  const content = document.getElementById("content")
  content.remove()

  const main = document.getElementById("main")

  // Main content
  const resultContent = document.createElement("div")
  resultContent.id = "result-content"
  main.appendChild(resultContent)

  // Result heading 
  ResultHeading(data)

  // Result content
  ResultContent(data)
  console.log(data)
}

function ResultHeading(data){
  const resultContent = document.getElementById("result-content")
  
  // Container
  const resultHeading = document.createElement("div")
  resultHeading.id = "result-heading"
  resultContent.appendChild(resultHeading)

  // Location name 
  const resultLocation = document.createElement("p")
  resultLocation.id = "result-location"
  let dataAddress = data.address
  dataAddress =  dataAddress.charAt(0).toUpperCase() + dataAddress.slice(1).toLowerCase()
  resultLocation.textContent = dataAddress
  resultHeading.appendChild(resultLocation)

  // Current temperature 
  const currentTemp = document.createElement("p")
  currentTemp.id = "current-temp"
  if (globalState.units === "celcius"){
    currentTemp.textContent = data.currentConditions.temp + "°C"
  } else if (globalState.units === "fahrenheit"){
    currentTemp.textContent = data.currentConditions.temp + "°F"
  }
  resultHeading.appendChild(currentTemp)

  // Current conditions 
  const currentConditions = document.createElement("p")
  currentConditions.id = "current-conditions"
  currentConditions.textContent = data.currentConditions.conditions
  resultHeading.appendChild(currentConditions)

  // Current Humidity 
  const currentHumidity = document.createElement("p")
  currentHumidity.id = "current-humidity"
  currentHumidity.textContent = "H: " + data.currentConditions.humidity + "°"
  resultHeading.appendChild(currentHumidity)
}

function ResultContent(data){
  const resultContent = document.getElementById("result-content")

  // Grid container
  const resultGrid = document.createElement("div")
  resultGrid.id = "result-grid"
  resultContent.appendChild(resultGrid)

  // Hours Block 
  const hoursBlock = document.createElement("div")
  hoursBlock.id = "hours-block"
  resultGrid.appendChild(hoursBlock)

  // Days Block
  const daysBlock = document.createElement("div")
  daysBlock.id = "days-block"
  resultGrid.appendChild(daysBlock)

  // Gif Block 
  const gifBlock = document.createElement("div")
  gifBlock.id = "gif-block"
  resultGrid.appendChild(gifBlock)

  // Visibility Block 
  const visBlock = document.createElement("div")
  visBlock.id = "vis-block"
  resultGrid.appendChild(visBlock)

  // Feels like Block 
  const feelBlock = document.createElement("div")
  feelBlock.id = "feel-block"
  resultGrid.appendChild(feelBlock)
}
