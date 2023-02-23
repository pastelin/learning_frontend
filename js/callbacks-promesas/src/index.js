import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';
import './styles.css';

console.time('await');

// obtenerHeroeAwait('capi3')
//     .then( (heroe   ) => {
//         console.log(heroe);
//         console.timeEnd('await');
//     }).catch( console.warn );


heroesCiclo();

heroeIfAwait('iron');