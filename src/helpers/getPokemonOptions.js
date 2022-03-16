import pokemonApi from '@/api/pokemonApi';


const TotalPokemonsInAPI = 650;
const TotalPokemonsInOptions = 4;

// Principal Function
const getPokemonsOptions = async () => {
    
    const PokemonsID = getRandomPokemons();
    const PokemonsName = await getNamePokemons(PokemonsID);
 
    let infoPokemons = new Array();
    for(let i = 0; i < TotalPokemonsInOptions; i ++) {
        infoPokemons.push({
            name: PokemonsName[i],
            id: PokemonsID[i]
        });
    }

    return infoPokemons;
}



// Helps

export const getRandomNumber = ( minValue, maxValue ) => {
    return Math.floor( Math.random() * ( maxValue - minValue + 1) + minValue );
}

const getRandomPokemons = () => {
    
    let pokemonsArr = new Array();
    for(let i = 0; i < TotalPokemonsInOptions; i ++) {
        const randomNumber = getRandomNumber(1, TotalPokemonsInAPI);
        pokemonsArr.push(randomNumber);
    }

    return pokemonsArr;
}

const getNamePokemons = async ( pokemonsID = [] ) => {

    
    let arrPromises = new Array();
    for(let i = 0; i < TotalPokemonsInOptions; i ++) {
        arrPromises.push( pokemonApi.get(`/${ pokemonsID[i] }`) );
    }
    const result = await Promise.all(arrPromises);
    

    let pokemonsName = new Array();
    for(let i = 0; i < TotalPokemonsInOptions; i ++) {
        const name = result[i].data.name;
        pokemonsName.push(name);
    }

    return pokemonsName;
}

export default getPokemonsOptions