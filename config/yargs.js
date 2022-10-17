const argv = require('yargs')
                .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        description: "Esta bandera es para poner una base"
                    }).option(
                        'l',{
                        alias: 'lista',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        description: "Esta bandera es para saber si quieres que se liste o no la tabla"
                        }
                    ).option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        description: "Esta bandera es para poner un límite"
                    })
                    .check((argv, options)=>{
                        if(!Number.isInteger(argv.b)){
                            throw 'Debes pasarle un número entero a la base'.bgRed;
                        }
                        return true;
                    }).check((argv, options)=>{
                        if(!Number.isInteger(argv.h)){
                            throw 'Debes pasarle un número entero al límite'.bgRed;
                        }
                        return true;
                    })
                .argv;

module.exports = {argv};