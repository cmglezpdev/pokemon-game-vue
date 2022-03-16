


const getPokemonsOptions = () => {
    
    PokemonsID = getRandomNumber();
    PokemonsName = getNamePokemons(PokemonsID);
    
}

const getRandomNumber = ( minValue, maxValue ) => {
    return Math.floor( Math.random() * ( maxValue - minValue + 1) + minValue );
}

const getRandomPokemons = () => {
    
    let pokemonsArr = new Array();
    for(let i = 1; i <= 4; i ++) {
        const randomNumber = getRandomNumber(1, 650);
        pokemonsArr.push(randomNumber);
    }

    return pokemonsArr;
}

const getNamePokemons = ( pokemonsID = [] ) => {

    let pokemonsName = new Array();
    
}

export default getPokemonsOptions