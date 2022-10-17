const fs = require('fs');
const colors = require('colors');


const multiplicacion = async(base, lista, hasta = 10) => {
    try {      
        let mensaje = '';
        for (let index = 1; index <= hasta; index++) {
            let resultado = base * index;
            mensaje += `${base} * ${index} = ${colors.bold(resultado)}\n`.blue;            
        }
        if(lista){
            console.log('=============='.rainbow);
            console.log(colors.italic(`Tabla del ${colors.bold(base)}`.red));
            console.log('=============='.rainbow);
            console.log(mensaje);
        }
        fs.writeFileSync(`./salida/base del ${base}.txt` , mensaje);
        return `Tabla del ${base}.txt`;
    } catch (error) {
        throw new Error('no se pudo ');
    }
}

module.exports = { multiplicacion};