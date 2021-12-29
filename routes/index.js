var express = require("express");
var router = express.Router();
var axios = require("axios").default;
/* GET home page. */
// router.get("/", function (req, res, next) {
//   var country = "Bangladesh";
//   var city = "Dhaka";
//   axios
//     .get(
//       "http://api.weatherapi.com/v1/current.json?key=24fd1c53215c4f9dbc195356212812&q=" +
//         country +
//         "&q=" +
//         city +
//         "&aqi=no"
//     )
//     .then((response) => {
//       console.log(response.data);
//       console.log(response.data);
//       var jsonObject = JSON.stringify(response.data);
//       console.log(jsonObject);
//       var object = JSON.parse(jsonObject);

//       console.log(object.keys);

//       // for (x in object) {
//       //   res.render("index", { title: object[x].name, test: object[x].country });
//       //   // res.render("index", { title: object[x].country });
//       // }
//       // for (x in object) {
//       res.render("index", { title: object.current.cloud });
//       //}

//       // res.render("index", { title: "" + Object.keys(object) });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

router.get("/all/:country/:city", function (req, res, next) {
  var country = req.params.country;
  var city = req.params.city;
  axios
    .get(
      "http://api.weatherapi.com/v1/history.json?key=159b46b7b5244dc38cc111920212812&q=" +
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
      const val1 = [];
      const val2 = [];
      const val3 = [];
      const val4 = [];
      // for(var i =0; i<24; i++) {
      //   console.log(forecast[0].hour[i].temp_c);
      //   val1.push(forecast[0].hour[i].temp_c)
      // }
      // const sort1 = val1.sort();
      // console.log(sort1[0]);
      // console.log(sort1[sort1.length-1]);  
      // time range 1
      for(var i =0; i<6; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val1.push(forecast[0].hour[i].temp_c)
        }
        const sort1 = val1.sort();
        console.log(sort1[0]);
        console.log(sort1[sort1.length-1]); 
        const low1 = sort1[0];
        const high1 = sort1[sort1.length-1];
       
        // time 2
      for(var i =6; i<12; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val2.push(forecast[0].hour[i].temp_c)
        }
        const sort2 = val2.sort();
        console.log(sort2[0]);
        console.log(sort2[sort2.length-1]); 
        const low2 = sort2[0];
        const high2 = sort2[sort2.length-1];
        // time 3 
      for(var i =12; i<18; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val3.push(forecast[0].hour[i].temp_c)
        }
        const sort3 = val3.sort();
        console.log(sort3[0]);
        console.log(sort3[sort3.length-1]); 
        const low3 = sort3[0];
        const high3 = sort3[sort3.length-1];
        // time4
        for(var i =18; i<24; i++) {
          console.log(forecast[0].hour[i].temp_c);
          val4.push(forecast[0].hour[i].temp_c)
        }
        const sort4 = val4.sort();
        console.log(sort4[0]);
        console.log(sort4[sort4.length-1]); 
        const low4 = sort4[0];
        const high4 = sort4[sort4.length-1];

        res.render("index", { High1: high1, low1 : low1,High2:high2,low2:low2, High3:high3,low3:low3,High4:high4,low4:low4});
        
    })
    .catch((error) => {
      console.log(error);
    });
});



module.exports = router;