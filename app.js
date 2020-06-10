
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); 

let commando = argv._[0];

switch ( commando ) {
  
  case 'listar':
    listarTabla( argv.base, argv.limite );
    break;

  case 'crear':
    crearArchivo( argv.base, argv.limite )
      .then(archivo => console.log(`archivo creado`, colors.green( archivo ) ))
      .catch( e => console.log(e));
    break;

  default:
    console.log('comando no reconocido');  
    break;

}