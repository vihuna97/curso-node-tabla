const {multiplicacion} = require('./helpers/multiplicacion');
const {argv} = require('./config/yargs');


console.clear();

// Documentacion-------------
// const [,,arg3 = "--base=10"] = process.argv;
// const [a,b = 5] = arg3.split("=");

console.log(process.argv);
console.log(argv);
const b = argv.b;

multiplicacion(b, argv.l, argv.h)
    .then(archivoCreado => console.log(archivoCreado, ' creado'))
    .catch(console.log)