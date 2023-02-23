import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi1';
const heroeId2 = 'iron';

// buscarHeroe( heroeId, (err, heroe) => {

//     if(err) {
//         console.error(err);
//     } else {
//         console.log(heroe);
//     }
// });

// buscarHeroe(heroeId).then(heroe =>{
//     console.log(`Enviando a ${heroe.nombre} a ala misión`);
//     buscarHeroe(heroe).then(heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a ala misión`);
//     });
// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then( ([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a ala misión`);
}).catch( err => {
    alert(err);
}).finally( () => {
    console.log('Fin de la ejecución');
} );


console.log("Fin del programa");