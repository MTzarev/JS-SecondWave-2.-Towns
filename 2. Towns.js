function towns(input) {

    for (let i = 0; i < input.length; i++) {
        let argument = input[i];
        let arr = [city, latitude, longitude] = argument.split(` | `);
        let formLat = Number(latitude).toFixed(2);
        let formLong = Number(longitude).toFixed(2);
        let obj = { town: city, latitude: formLat, longitude: formLong };

        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
