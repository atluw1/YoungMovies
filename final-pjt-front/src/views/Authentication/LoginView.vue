<template>
  <div class="mt-5 signupDiv d-flex flex-column justify-content-center align-items-center">
    <h2 class="mb-5">
    로그인
    </h2>
    <v-form  @submit.prevent="login(credentials)" class="signupForm animated-box in py-5 d-flex flex-column justify-content-evenly align-items-center">
          <div class="mb-1" v-if="authError">
            <!-- <AccountErrorList /> -->
            입력을 다시 확인해 주세요
          </div>
          <!-- 아이디 -->
          <v-text-field
            dark
            color="yellow"
            v-model="credentials.username"
            :rules="userNameRules"
            label="아이디"
            required
            autofocus
          ></v-text-field>
          <!-- 비밀번호 1 -->
          <v-text-field
            color="green"
            dark
            v-model="credentials.password"
            :rules="passwordRules"
            label="비밀번호"
            type='password'
            required
          ></v-text-field>


          <v-btn class="mb-2"
            type="submit"
            background-color="yellow"
          >
          로그인
          </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "SignupView",
    computed: {
      ...mapGetters(['authError'])
    },

    data() {
        return {
            userNameRules: [
                v => !!v || "아이디를 입력해 주세요!",
            ],
            passwordRules: [
                v => !!v || "비밀번호를 입력해 주세요!",
            ],
            credentials: {
                username: "",
                password: "",
                valid: false,
            }
        };
    },
    methods: {
        ...mapActions(["login"])
    },
    // localstorage에 자동으로 저장하는 라이브러리 때문인지, 초기화가 되지 않는다. => 페이지를 로드할 때 null로 만들어 주자

}
</script>

<style scope>

label {
  font-size: 5rem;
}

.signupForm {
  width: 350px;
  height: 450px;

}

</style>