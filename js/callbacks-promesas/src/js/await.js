import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = ['capi', 'iron', 'spide'];
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async () => {
	return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
	try {
		const heroe = await buscarHeroeAsync(id);
		return heroe;
	} catch (err) {
		console.log('Catch');
		// throw err;
		return {
			nombre: 'Sin nombre',
			poder: 'Sin poder',
		};
	}
};

export const heroesCiclo = async () => {
	console.time('HeroesCiclo');

	for await (const heroe of heroesPromesas) {
		console.log(heroe);
	}

	console.timeEnd('HeroesCiclo');
	// const heroes = await Promise.all(heroesPromesas);
	// heroes.forEach( heroe => console.log(heroe) )
};

export const heroeIfAwait = async (id) => {
	if ( (await buscarHeroeAsync(id)).nombre == 'Ironman') {
        console.log('El el mejor de todos');
	} else {
        console.log('Naah');
    }
};
