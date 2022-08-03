<template>
  <div>
    {{ id }}
    <h1>Ajouter un cocktail</h1>
    <form @submit.prevent="ajout">

      <div class="formGroup">
        <label for="cocktail_nom">Nom</label>
        <input type="text" id="cocktail_nom" v-model="cocktail.nom" />
      </div>
      <div class="formGroup">
        <label for="cocktail_description">Description</label>
        <input type="text" id="cocktail_description" v-model="cocktail.description" />
      </div>
      <div class="formGroup">
        <label for="cocktail.recette">Recette</label>
        <input type="text" id="cocktail.recette" v-model="cocktail.recette" />
      </div>
      <div class="formGroup">
        <button type="submit" class="button">Ajouter le Cocktail</button>
      </div>
    </form>
  </div>
</template>

<script>
import { cocktailService } from '@/_services'
import {watch, ref} from 'vue'
export default {
  name: "CocktailEdit",
  props: ['id'],
  data() {
    return {
      cocktail: {
        user_id: 4,
        nom: '',
        description: '',
        recette: ''
      }
    }

  },
  setup(props) {
    console.log(props)
    watch(props, (value, old) => {
      console.log(value.id)
    })
  },
  mounted() {
    console.log(this.id)
  },
  methods: {
    /*test() {
      console.log('test')
    },*/
    ajout() {
      cocktailService.createCocktail(this.cocktail)
        .then(res => this.$router.push({ name: 'CocktailIndex' }))
        .catch(err => console.log(err))
    }
  },
};
</script>

<style>
</style>