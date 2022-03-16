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
            showPokemon: false
        }
    },
    methods: { 
        async mixPokemonArr() {
            this.pokemonArr = await getPokemonOptions();

            const rndInt = getRandomNumber(0, 3);
            this.pokemon = this.pokemonArr[ rndInt ];
        },
        checkAnswer( pokemonID ) {
            if(pokemonID == this.pokemon.id)
                this.showPokemon = true;
        }
    },
    // LifeCycle Compoments
    mounted() {
        this.mixPokemonArr();
    }
}
</script>
