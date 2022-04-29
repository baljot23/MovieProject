# MovieProject

INITIAL SETUP:

* Add new repositories / terminal: git init to create new git repository
* Create Folder on Desktop
* Clone HTTPS Code in VS Code in created folder
* Root Terminal:
    - yarn add node_modules .env
 
* Create frontend/client folder:
    - npx create-react-app client
    - In package.json add: "proxy": "http://localhost:8000",

* Create backend/server folder:
    - yarn init -y 
    - server.js 
        ~ add scripts "scripts":{"start":"node server.js", "dev:server":"nodemon server.js"}

* server terminal:
    - yarn add express helmet mongodb dotenv morgan cors nodemon

* Create express server:
    - In server.js:
        "user strict"
        const express = require("express")
        const morgan = require("morgan")
        const cors = require("cors")
        const {} = require("./handlers")
        express()
        .use(morgan("tiny")
        .use(express.json())
        .use(cors())
        .use(express.static("public"))
        .get("*", (req,res) => {
            res.status(404).json({
            status:404,
            message: "This is obviously not what you are looking for.",
            })
        })
        .listen(8000, () => console.log("Listening on port 8000"));
        
       
