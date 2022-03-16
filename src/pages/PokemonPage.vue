<template>

    <div v-if="pokemon" >
        <h1>Quien es este pokemon?</h1>
        <PokemonPictures 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon"
        />
        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection="checkAnswer($event)"
        />
        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                New Game
            </button>
        </template>
    </div>
    <h1 v-else>
        Espere por favor...
    </h1>
</template>

<script>

import PokemonPictures from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions, { getRandomNumber } from '@/helpers/getPokemonOptions';

export default {
    components: {
        PokemonPictures, 
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ""
        }
    },
    methods: { 
        async mixPokemonArr() {
            this.pokemonArr = await getPokemonOptions();

            const rndInt = getRandomNumber(0, 3);
            this.pokemon = this.pokemonArr[ rndInt ];
        },
        checkAnswer( selectedId ) {
            this.showPokemon = true;
            this.showAnswer = true;

            if(selectedId == this.pokemon.Id) 
                this.message = `Correcto, ${ this.pokemon.name }`;
            else
                this.message = `Oops, era ${ this.pokemon.name }`;
        },
        newGame() {
            this.showPokemon = this.showAnswer = false;
            this.pokemonArr = [];
            this.pokemon = null;
            this.mixPokemonArr();
        }
    },
    // LifeCycle Compoments
    mounted() {
        this.mixPokemonArr();
    }
}
</script>

<style scoped>

button {
    border: none;
    background-color: rgb(60, 196, 60);
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 15px;
}

button:hover {
     background-color: rgb(32, 206, 32);
}

</style>
