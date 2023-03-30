# ChatGPT-Like-Node-ReactJS-WebApp
A copy of ChatGPT with Node and React that allows to fetch and select any available models from OpenAI. - By Nox - 2023
# Original code and idea from Adrian Twarog #


1. "npx create-react-app" in the terminal of your IDE to create your react client folder.
2. "npm init" and name it "Server" to create your server folder.
3. "npm install express bodyparser openai cors --save" to install the packages we need for this app, and add --save to save them into the package.json

Don't forget to get your OpenAI API key and to type it in apiKey inside of the " const configuration " in the server file named index.js.
You can then initialize the server with a " node index.js " in the terminal.
You can initialize the React app with a " npm start ".
The most powerful, but also the most expensive, model of OpenAI for text generation is "text-davinci-003".
To fetch ChatGPT (GPT 3.5) model, you will have to slightly change the code in the index.js file. The code needed is commented, you will just want to un-comment it, and put the other line in commentary. Also think to not select any model while using GPT3.5 API.

The app is named Irelia AI by default, but feel free to modify and play with the code as you wish of course.

# THIS PROJECT IS STILL UNDER DEVELOPMENT. THE TEMPERATURE BAR WILL ALLOWS US TO CHANGE IT FROM THE FRONTEND AND A COUPLE MORE FEATURES WILL BE ADDED #

# Note that I'm also working on a version of this app that will allow to use and test our own fine-tuned model, without the use of openai's api. Actually working on fine-tuning a alpaca-lora (LLama) model that will be implemented in the App, and an entire metrics dashboard will be created to evaluate fine-tuning in another tab.
