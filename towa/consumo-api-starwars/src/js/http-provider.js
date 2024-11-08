const obtenerDatosPersonal = async (numeroPagina) => {
	try {
		console.time('in');
		const resp = await fetch(`https://swapi.dev/api/people/?page=${numeroPagina}`);
		console.timeEnd('in');
		if (!resp.ok) throw 'No se pudo realizar la peticion';

		const { results } = await resp.json();

		return results;
	} catch (err) {
		throw err;
	}
};

const obtenerDatosOtros = async (endpoint) => {
	try {
		const resp = await fetch(endpoint);

		if (!resp.ok) throw 'No se pudo realizar la peticion';

		return await resp.json();
	} catch (err) {
		throw err;
	}
};


export { obtenerDatosPersonal, obtenerDatosOtros };
