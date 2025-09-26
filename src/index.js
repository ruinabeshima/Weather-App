import "./styles.css"

document.addEventListener("DOMContentLoaded", () => {
  weatherAPI("london")
  weatherAPI("madrid")
  weatherAPI("iwea")
})


async function weatherAPI(location){
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=76PJ9K5RSV4XR2D96MQUVYZKV`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}