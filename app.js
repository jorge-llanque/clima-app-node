const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        const coordDireccion = await lugar.getLugarLatLng(direccion);
        const climaDireccion = await clima.getClima(coordDireccion.lat, coordDireccion.lng);
        return `El clima de ${coordDireccion.direccion} es de ${climaDireccion}`

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion, error}`
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)