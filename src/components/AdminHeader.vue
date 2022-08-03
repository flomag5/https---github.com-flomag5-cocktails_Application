<template>
  <div class="ad_head">Header Admin {{ getUser }}
    <button @click="logout()">Logout</button>
  </div>
</template>


<script>
import { accountService } from '@/_services'
import { mapGetters } from "vuex";
export default {
  name: "AdminHeader",
  methods: {
    logout() {
      accountService.logout()
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  }
};
</script>

<style scoped>

.ad_head {
  border-bottom: solid 2px black;
}
 button {
   float: right;
 }
</style>