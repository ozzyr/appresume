import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async(event) => {
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = url.value
  
  if (!videoURL.includes("shorts")){
    return content.textContent = "Esse video parece ser outra coisa mano"
  }
  
  const [_, params] = videoURL.split("/shorts/")
  const [videoId] = params.split('?si')
    
  content.textContent = "obtento o texto do audio..."

  const transcription = await server.get("/summary/" + videoId)

  content.textContent = "realizando resumo"

  const summary = await server.post("/summary",{ 
    text: transcription.data.result, 
  })
  
  content.textContent = summary.data.result

  content.classList.remove("placeholder")

})