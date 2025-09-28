import { globalState } from ".."
import { ShowResults } from "./elements"

// Fetch data from API
export async function WeatherAPI(location){
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=76PJ9K5RSV4XR2D96MQUVYZKV`

    if (globalState.units === "celcius"){
      url += "&unitGroup=metric"
    }

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    ProcessWeather(data)
  } catch (error) {
    console.log(error)
  }
}

// Fetch important object elements from data 
function ProcessWeather(data){
  const useObjects = 
  { "address": data.address, 
    "currentConditions": data.currentConditions, 
    "days": data.days, 
    "description": data.description, 
    "latitude": data.latitude, 
    "longitude": data.longitude, 
    "timezone": data.timezone}
  ShowResults(useObjects)
}


export async function GiphyAPI(weather){
  try {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=iidtBip8CzBA9gJdx8z3lNmqf3zEBOCz&q=${weather}&limit=3`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    ProcessGiphy(dataArray)
  } catch (error){
    console.log(error)
  }
}

function ProcessGiphy(dataArray){
  const useObjects = 
  {
    "id" = dataArray.data[0]
  }
}