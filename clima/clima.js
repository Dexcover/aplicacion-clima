const axios = require('axios');

const getClima = async(lat, lon) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a3afa245a9749e8687fc75e0b22f88b9`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}