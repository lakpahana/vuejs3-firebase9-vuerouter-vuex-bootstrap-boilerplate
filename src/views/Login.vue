<template>
  <main class="login">
    <div class="row">
      <div class="col-md-6">
        <h1>Register</h1>
        <form class="register" @submit.prevent="register">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name/RegNo</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                type="text"
                placeholder="Messi/4899"
                v-model="register_form.uname"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                type="email"
                placeholder="abc@gmail.com"
                v-model="register_form.email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                type="password"
                placeholder="Password"
                v-model="register_form.password"
              />
            </div>
          </div>

          <input class="btn btn-primary" type="submit" value="Register" />
        </form>
      </div>
      <div class="col-md-6">
        <h1>Login</h1>
        <form class="login" @submit.prevent="login">
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                type="email"
                placeholder="Password"
                v-model="login_form.email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input
                class="form-control"
                type="password"
                placeholder="Password"
                v-model="login_form.password"
              />
            </div>
          </div>

          <input class="btn btn-primary" type="submit" value="Login" />
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>

<style>
.form-group {
  margin-bottom: 1rem;
}
</style>