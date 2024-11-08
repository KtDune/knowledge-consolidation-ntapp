# Knowledge Consolidation Note Taking App

#Clone the project
This app allows the user to implement the knowledge consolidation learning method to increase productivity.

In order to use this code, you have to clone this project in a new folder/directory.

1. Create a new folder/directory
2. In your terminal, use `cd ../yourfilename` to redirect to the new folder.
3. Type `git init`
4. Type `git clone https://github.com/KtDune/knowledge-consolidation-ntapp` (optionally, copy my GitHub URL in case this does not work)
5. You will see a new folder created. Use a code editor to open that folder.

#Setup
Inside `/frontend` directory, createa .env file and add your api key to the coressponding env variables. (Go to https://firebase.google.com/docs/web/setup to see how to get your firebase api key.)

```
#FIREBASE API KEY ADD YOUR API KEY HERE
VITE_API_KEY = 
VITE_AUTH_DOMAIN = 
VITE_PROJECT_ID =  
VITE_STORAGE_BUCKET = 
VITE_MESSAGING_ID = 
VITE_APP_ID = 
VITE_MEASUREMENT_ID = 

```
Finally, in the terminal run `npm install` to install all dependencies and `npm run dev` to preview this application. That's all for frontend

Now, navigate to `/backend` directory.

create a .env file and add your Groq api key here. Go to https://groq.com/ then navigate to dev console -> Api Key (on the left sidebar) -> Create Api Key

```
LLAMA_APIKEY = 
```

Run `npm i` to download all dependencies. Finally, run `node index.js` to start your server.
You should see "server running normally owo/" in your console if the server started normally.

