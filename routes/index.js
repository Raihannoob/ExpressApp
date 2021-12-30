var express = require("express");
var router = express.Router();
var axios = require("axios").default;


// for country
router.get("/all/:country", function (req, res, next) {
  var country = req.params.country;
  
  axios
    .get(
      "http://api.weatherapi.com/v1/history.json?key=c092d3298f9541f9bbd51343213012&q=" +
        country +
        "&dt=2021-12-27"
    )
    .then((response) => {
      console.log(response.data);
      var jsonObject = JSON.stringify(response.data);
      var object = JSON.parse(jsonObject);
      var forecast = object.forecast.forecastday
      
      console.log(forecast);
      console.log(Object.keys(object));
      const countryfetch =object.location.country;
      console.log(countryfetch);
    
      const val1 = [];
      const val2 = [];
      const val3 = [];
      const val4 = [];
      // for farhinite vale
      const far1 = [];
      const far2 = [];
      const far3 = [];
      const far4 = [];
    //  time 1
      for(var i =0; i<6; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val1.push(forecast[0].hour[i].temp_c)
        }
        const sort1 = val1.sort();
        console.log(sort1[0]);
        console.log(sort1[sort1.length-1]); 
        const low1 = Math.round(sort1[0]);
        const high1 = Math.round(sort1[sort1.length-1]);
      //  for farhinite
      for(var i =0; i<6; i++) {
        console.log(forecast[0].hour[i].temp_f);
        far1.push(forecast[0].hour[i].temp_f)
      }
      const sortf1 = far1.sort();
      console.log(sortf1[0]);
      console.log(sortf1[sortf1.length-1]); 
      const lowf1 = Math.round(sortf1[0]);
      const highf1 = Math.round(sortf1[sortf1.length-1]);
        // time 2
      for(var i =6; i<12; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val2.push(forecast[0].hour[i].temp_c)
        }
        const sort2 = val2.sort();
        console.log(sort2[0]);
        console.log(sort2[sort2.length-1]); 
        const low2 =Math.round( sort2[0]);
        const high2 = Math.round(sort2[sort2.length-1]);
      //for ferhinite
      for(var i =6; i<12; i++) {
        console.log(forecast[0].hour[i].temp_f);
        far2.push(forecast[0].hour[i].temp_f)
      }
      const sortf2 = far2.sort();
      console.log(sortf2[0]);
      console.log(sortf2[sortf2.length-1]); 
      const lowf2 = Math.round( sortf2[0]);
      const highf2 = Math.round(sortf2[sortf2.length-1]);

        // time 3 
      for(var i =12; i<18; i++) {
        console.log(forecast[0].hour[i].temp_c);
        val3.push(forecast[0].hour[i].temp_c)
        }
        const sort3 = val3.sort();
        console.log(sort3[0]);
        console.log(sort3[sort3.length-1]); 
        const low3 = Math.round(sort3[0]);
        const high3 = Math.round(sort3[sort3.length-1]);
        // for ferhinite
      for(var i =12; i<18; i++) {
          console.log(forecast[0].hour[i].temp_f);
          far3.push(forecast[0].hour[i].temp_f)
        }
        const sortf3 = far3.sort();
        console.log(sortf3[0]);
        console.log(sortf3[sortf3.length-1]); 
        const lowf3 = Math.round(sortf3[0]);
        const highf3 = Math.round(sortf3[sortf3.length-1]);  
        // time4
      for(var i =18; i<24; i++) {
        console.log(forecast[0].hour[i].temp_c);
          val4.push(forecast[0].hour[i].temp_c)
        }
        const sort4 = val4.sort();
        console.log(sort4[0]);
        console.log(sort4[sort4.length-1]); 
        const low4 = Math.round(sort4[0]);
        const high4 = Math.round(sort4[sort4.length-1]);
        // for farhinite
        for(var i =18; i<24; i++) {
          console.log(forecast[0].hour[i].temp_f);
            far4.push(forecast[0].hour[i].temp_f)
          }
          const sortf4 = far4.sort();
          console.log(sortf4[0]);
          console.log(sortf4[sortf4.length-1]); 
          const lowf4 = Math.round(sortf4[0]);
          const highf4 = Math.round(sortf4[sortf4.length-1]);
        res.render("index", { High1: high1, low1 : low1,High2:high2,low2:low2, High3:high3,low3:low3,High4:high4,low4:low4,Highf1:highf1,lowf1:lowf1,Highf2:highf2,lowf2:lowf2,Highf3:highf3,lowf3:lowf3,Highf4:highf4,lowf4:lowf4 });
    
    })
    .catch((error) => {
      console.log(error);
    });
});

// requre country and city

router.get("/all/:country/:city", function (req, res, next) {
  var country = req.params.country;
  var city = req.params.city;
  axios
    .get(
      "http://api.weatherapi.com/v1/history.json?key=c092d3298f9541f9bbd51343213012&q=" +
        country +
        "&q=" +
        city +
        "&dt=2021-12-27"
    )
    .then((response) => {
      console.log(response.data);
      var jsonObject = JSON.stringify(response.data);
      // console.log(jsonObject);
      var object = JSON.parse(jsonObject);
      var forecast = object.forecast.forecastday
      
      console.log(forecast);
      console.log(Object.keys(object));
      const countryfetch =object.location.country;
      const cityfetch =object.location.name;
      console.log(countryfetch);
      console.log(cityfetch)
     
      if(cityfetch.includes(city)){

      const val1 = [];
      const val2 = [];
      const val3 = [];
      const val4 = [];
      // for farhinite vale
      const far1 = [];
      const far2 = [];
      const far3 = [];
      const far4 = [];
     
      for(var i =0; i<6; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val1.push(forecast[0].hour[i].temp_c)
        }
        const sort1 = val1.sort();
        console.log(sort1[0]);
        console.log(sort1[sort1.length-1]); 
        const low1 = Math.round(sort1[0]);
        const high1 = Math.round(sort1[sort1.length-1]);
      //  for farhinite
      for(var i =0; i<6; i++) {
        console.log(forecast[0].hour[i].temp_f);
        far1.push(forecast[0].hour[i].temp_f)
      }
      const sortf1 = far1.sort();
      console.log(sortf1[0]);
      console.log(sortf1[sortf1.length-1]); 
      const lowf1 = Math.round(sortf1[0]);
      const highf1 = Math.round(sortf1[sortf1.length-1]);
        // time 2
      for(var i =6; i<12; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val2.push(forecast[0].hour[i].temp_c)
        }
        const sort2 = val2.sort();
        console.log(sort2[0]);
        console.log(sort2[sort2.length-1]); 
        const low2 = Math.round( sort2[0]);
        const high2 = Math.round(sort2[sort2.length-1]);
      //for ferhinite
      for(var i =6; i<12; i++) {
        console.log(forecast[0].hour[i].temp_f);
        far2.push(forecast[0].hour[i].temp_f)
      }
      const sortf2 = far2.sort();
      console.log(sortf2[0]);
      console.log(sortf2[sortf2.length-1]); 
      const lowf2 =Math.round( sortf2[0]);
      const highf2 = Math.round(sortf2[sortf2.length-1]);

        // time 3 
      for(var i =12; i<18; i++) {
        console.log(forecast[0].hour[i].temp_c);
        val3.push(forecast[0].hour[i].temp_c)
        }
        const sort3 = val3.sort();
        console.log(sort3[0]);
        console.log(sort3[sort3.length-1]); 
        const low3 = Math.round(sort3[0]);
        const high3 = Math.round(sort3[sort3.length-1]);
        // for ferhinite
      for(var i =12; i<18; i++) {
          console.log(forecast[0].hour[i].temp_f);
          far3.push(forecast[0].hour[i].temp_f)
        }
        const sortf3 = far3.sort();
        console.log(sortf3[0]);
        console.log(sortf3[sortf3.length-1]); 
        const lowf3 = Math.round(sortf3[0]);
        const highf3 = Math.round(sortf3[sortf3.length-1]);  
        // time4
      for(var i =18; i<24; i++) {
        console.log(forecast[0].hour[i].temp_c);
          val4.push(forecast[0].hour[i].temp_c)
        }
        const sort4 = val4.sort();
        console.log(sort4[0]);
        console.log(sort4[sort4.length-1]); 
        const low4 = Math.round(sort4[0]);
        const high4 = Math.round(sort4[sort4.length-1]);
        // for farhinite
        for(var i =18; i<24; i++) {
          console.log(forecast[0].hour[i].temp_f);
            far4.push(forecast[0].hour[i].temp_f)
          }
          const sortf4 = far4.sort();
          console.log(sortf4[0]);
          console.log(sortf4[sortf4.length-1]); 
          const lowf4 = Math.round(sortf4[0]);
          const highf4 = Math.round(sortf4[sortf4.length-1]);
        res.render("index", { High1: high1, low1 : low1,High2:high2,low2:low2, High3:high3,low3:low3,High4:high4,low4:low4,Highf1:highf1,lowf1:lowf1,Highf2:highf2,lowf2:lowf2,Highf3:highf3,lowf3:lowf3,Highf4:highf4,lowf4:lowf4 });
    }
    else{
      res.send('Error Found 404!wrong search');
    }
    })
    .catch((error) => {
      console.log(error);
    });
});



module.exports = router;