<template>
    <h1>Quien es este pokemon?</h1>
    <PokemonPictures :pokemonId="300" :showPokemon="true"/>
    <PokemonOptions :pokemons="pokemonArr"/>
</template>

<script>

import PokemonPictures from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
    name: "Page",
    components: {
        PokemonPictures, 
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: []
        }
    },
    methods: {
        async mixPokemonArr() {
            this.pokemonArr = await getPokemonOptions();
        
            console.table(this.pokemonArr);
        }
    },
    // LifeCycle Compoments
    mounted() {
        this.mixPokemonArr();
    }
}
</script>
