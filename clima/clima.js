const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9e3de027a8d2d2a820dd25d87df52016&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}