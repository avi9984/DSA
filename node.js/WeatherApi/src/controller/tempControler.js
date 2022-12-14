let axios = require("axios");

const getLondonWeather = async function (req, res){
    const options = {
        method:"get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=c3fe4b08f2dfc913047f14a7f906b9f8`
    }
    const weather = await axios(options)
    res.status(200).send({status:true, data:weather.data.main.temp}) //use .main.temp to get temp only
}

let getSortedCities = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let cityObjArray = [];
    for (let i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] };
      let resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c3fe4b08f2dfc913047f14a7f906b9f8`
      );
      console.log(resp.data.main.temp);

      obj.temp = resp.data.main.temp;
      cityObjArray.push(obj);
    }

    let sorted = cityObjArray.sort((a,b)=>a-b)
    console.log(sorted);
    res.status(200).send({ status: true, data: sorted });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, msg: "server error" });
  }
};

// module.exports.getSortedCities = getSortedCities;
// module.exports.getLondonWeather= getLondonWeather

module.exports={getLondonWeather,getSortedCities}
