import "./styles.css"
import { MainForm } from "./components/elements"

document.addEventListener("DOMContentLoaded", () => {
  MainForm()
  weatherAPI("london")
  weatherAPI("madrid")
})


// Fetch data from API
async function weatherAPI(location){
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=76PJ9K5RSV4XR2D96MQUVYZKV`)
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