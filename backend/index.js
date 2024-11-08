require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Groq = require('groq-sdk')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/query', async (req, res) => {

    const { query, itemList } = req.body

    const getStringData = (query, itemList) => {
        let outputString = ""
        itemList.map((item) => {
            outputString += `Title: ${item.title}\nContent: ${item.content}\n`
        })
        outputString += `Query: ${query}`
        return outputString
    }

    const groq = new Groq({ apiKey: process.env.LLAMA_APIKEY })

    const getGeneratedText = async (query, itemList) => {
        try {
            const chatCompletion = await groq.chat.completions.create({
                "messages": [
                    {
                        "role": "user",
                        "content": getStringData(query, itemList)
                    }
                ],
                "model": "llama3-groq-70b-8192-tool-use-preview",
                "temperature": 0.5,
                "max_tokens": 1024,
                "top_p": 0.65,
                "stream": true,
                "stop": null
            })

            let genText = ""
            for await (const chunk of chatCompletion) {
                genText += chunk.choices[0]?.delta?.content || ''
            }

            return genText
            
        } catch (e) {
            console.log(e)
        }
    }

    // Await the result of getGeneratedText
    const output = await getGeneratedText(query, itemList) 
    res.send({ output: output})
})

app.post('/test', (req, res) => {
    res.send('Hi')
})

app.listen(3000, () => {
    console.log('server running normally owo/')
})
