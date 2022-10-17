const argv = require('yargs')
                .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    }).option(
                        'l',{
                        alias: 'lista',
                        type: 'boolean',
                        demandOption: false,
                        default: false
                        }
                    ).option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
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