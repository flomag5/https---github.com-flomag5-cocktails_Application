<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="formGroup">
        <label for="user_email">Email</label>
        <input type="text" id="user_email" v-model="user.email" />
      </div>
      <div class="formGroup">
        <label for="user_password">Mot de passe</label>
        <input type="text" id="user_password" v-model="user.password" />
        <button type="submit" class="button">Connexion</button>
      </div>
    </form>
  </div>
</template>

<script>
import { accountService } from "@/_services";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      accountService
        .login(this.user)
        .then((res) => {
          accountService.saveToken(res.data.acces_token);
          this.$router.push("/admin/dashboard");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>