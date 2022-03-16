<template>
    <h1>Quien es este pokemon?</h1>
    <PokemonPictures />
    <PokemonOptions />
</template>

<script>
    import PokemonPictures from '@/components/PokemonPicture.vue';
    import PokemonOptions from '@/components/PokemonOptions.vue';

export default {
    name: "Page",
    components: {
        PokemonPictures, 
        PokemonOptions
    }
}
</script>
