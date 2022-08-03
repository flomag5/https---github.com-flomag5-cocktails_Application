<template>
  <div class="public">
    {{ getUser }}
    {{ getUsers(1) }}
    <button @click="change"> Changer utilisateur</button>
    <button @click="action"> Action utilisateur</button>
    <PublicNav />
    <router-view />
  </div>
</template>

<script>
import PublicNav from "@/components/PublicNav.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "PublicLayout",
  components: {
    PublicNav,
  },
  
  
  computed: {
    ...mapGetters(['getUser', 'getUsers']),
    
  },
  methods: {
    ...mapMutations(['changeUser']),
    ...mapActions(['modify']),
    change() {
      //this.$store.commit('changeUser', { name: 'Madrid' })
      this.changeUser({ name: 'Barcelona'})
    },
    action() {
      //this.$store.dispatch('modify')
      this.modify({ name: 'Mimolette'})
    }
  },
};
</script>

<style>
</style>