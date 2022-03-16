import pokemonApi from '@/api/pokemonApi';


const getPokemonsOptions = () => {
    
    const PokemonsID = getRandomPokemons();
    const PokemonsName = getNamePokemons(PokemonsID);
    
}

const getRandomNumber = ( minValue, maxValue ) => {
    return Math.floor( Math.random() * ( maxValue - minValue + 1) + minValue );
}

const getRandomPokemons = () => {
    
    let pokemonsArr = new Array();
    for(let i = 0; i < 4; i ++) {
        const randomNumber = getRandomNumber(1, 650);
        pokemonsArr.push(randomNumber);
    }

    return pokemonsArr;
}

const getNamePokemons = async ( pokemonsID = [] ) => {

    let pokemonsName = new Array();
    
    for(let i = 0; i < 4; i ++) {
        const pokemon = await pokemonApi.get(`/${ pokemonsID[i] }`);
        console.log(pokemon);
    }
}

export default getPokemonsOptions