const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// let encodeUrl = encodeURI(argv.direccion);
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDqDuu6DjkzEIliGyBqiSmk1sMVurjvtWI`)
//     .then(resp => {
//         let location = resp.data.results[0];
//         let coors = location.geometry.location;

//         console.log('Dirección', location.formatted_address);
//         console.log('lat', coors.lat);
//         console.log('Lng', coors.lng);
//         // console.log(JSON.stringify(resp.data, undefined, 2));
//         // console.log(resp.status);
//     })
//     .catch(e => console.log(Error));
let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}
getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));