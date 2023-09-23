
import { pipeline } from "@xenova/transformers"
import { transcriptionExample } from "./utils/transcription.js"

export async function transcribe(audio) {

  try{
      //return transcriptionExample
    console.log("Realizando a transcrição...")
    
    const trasncribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )

    const transcription = await trasncribe(audio, {
      chunk_length_s:30,
      stride_length_s:5,
      language: "portuguese",
      task: "transcribe",
    })

    console.log("trancrição finalizada eba!!", transcription)
    return transcription?.text.replace("[Musica]", "")
  } catch (error){
    throw new Error(error)
  }
}