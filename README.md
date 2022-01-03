# Express-Routing


## Download and Execution

    Download the file.
    install node
    $npm install -g npm
    $npm install axios
    $npm install -g nodemon
    $npm install --save pug
    $npm install express
    $npm install express-rate-limit
    Execution from Terminal - $npm run start
    



~ Using https://www.weatherapi.com/ API Documentation (weatherapi) | RapidAPI and use weather data upon loading URLs. E.g. http://localhost:3000/all/usa/colorado we will call API and Show
Colorado weather API Data.

~ http://localhost:3000/all will enter a new page and show <b>Enter Valid Url</b>

~ Rate limit to hit the URL above to 1 in 10 seconds, if anyone hit more than this, we will display <b>Rate Lemit Over</b>.

~ When weather data for a location fetch for first time, it stores that into a JSON file, so next time if call that JSON file skipping the API call.

