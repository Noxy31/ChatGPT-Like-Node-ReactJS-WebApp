const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

const configuration = new Configuration({
    organization: "org-4bKeCbEReKLA0umY93HNpRE8",
    apiKey: "YOUR OPENAI API KEY HERE",
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
    const { message, currentModel } = req.body;
    
    // const completion = await openai.createChatCompletion({   //For ChatGPT
    const completion = await openai.createCompletion({
        model: `${currentModel}`,
        //messages: [{"role": "user", "content": `'${message}.`}], //For ChatGPT
        prompt:`You are my personnal assistant. ${message}`, 
        max_tokens: 300,

        temperature: 1,
      });
      console.log(completion.data.choices[0].text)
    res.json({
          message: completion.data.choices[0].text,
          //data: completion.data.choices[0].message.content, //For ChatGPT
          
    })
    console.log(completion.data.choices[0].message);
})

app.get('/models', async (req, res) => {
    const completion = await openai.listEngines();
    //console.log(response.data)  
    res.json({
      models: completion.data
    })
});



app.listen(port, () => {
    console.log('Example app listening on port %d in %s mode', port, app.settings.env );
});