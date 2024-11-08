async function  asyncGetNameMovie() {
    try {
        let response = await fetch('https://swapi.dev/api/people/');
        let listaPeliculas = await response.json();
        listaPeliculas = listaPeliculas.results;
        return listaPeliculas.filter( (item) => item.height > 120).map( item => item.name );
    } catch (error) {
        throw error;
    }
}

var resolvedAnswer = function(data){
    console.log(data);
}
var rejectedAnwer = function(data){
    console.log('--rejectedAnwer--')
    console.log('-->',data)
}

asyncGetNameMovie()
.then(resolvedAnswer)
.catch(rejectedAnwer);