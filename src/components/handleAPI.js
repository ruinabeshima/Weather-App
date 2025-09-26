import { globalState } from ".."

// Fetch data from API
export async function WeatherAPI(location){
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=76PJ9K5RSV4XR2D96MQUVYZKV`

    if (globalState.units === "celcius"){
      url += "&unitGroup=metric"
    }

    const response = await fetch(url)
    const data = await response.json()
    ProcessData(data)
  } catch (error) {
    console.log(error)
  }
}

// Fetch important object elements from data 
function ProcessData(data){
  const useObjects = 
  { "address": data.address, 
    "currentConditions": data.currentConditions, 
    "days": data.Days, 
    "description": data.Description, 
    "latitude": data.latitude, 
    "longitude": data.longitude, 
    "timezone": data.timezone}
  console.log(useObjects)
}