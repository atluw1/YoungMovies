<template>
  <div class="loginArea signupDiv d-flex flex-column justify-content-center align-items-center">
    <h1 class="mb-5">
    로그인
    </h1>
    <v-form @submit.prevent="login(credentials)" class="loginForm animated-box in py-5 ">
        <div class="innerbox d-flex flex-column justify-content-around align-items-center">
          <div class="mb-1" v-if="authError">
            <!-- <AccountErrorList /> -->
            입력을 다시 확인해 주세요
          </div>

          <!-- 아이디 -->
          <div>
          <v-text-field
            dark
            color="yellow"
            v-model="credentials.username"
            :rules="userNameRules"
            label="아이디"
            required
            autofocus
          ></v-text-field>
          </div>

          <!-- 비밀번호 1 -->
          <div>
          <v-text-field
            color="green"
            dark
            v-model="credentials.password"
            :rules="passwordRules"
            label="비밀번호"
            type='password'
            required
          ></v-text-field>
          </div>
          <div>
          <v-btn class="mb-2"
            type="submit"
            background-color="yellow"
          >
          로그인
          </v-btn>
          </div>
        </div>
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
        ...mapActions(["login", "set_auth_error_null"])
          },
    created() {
      // created 안에 mapActions를 선언하는 것은 불가능하다 => methods 안에 선언 후 실행해 주어야 한다.
      this.set_auth_error_null()
    }
    // localstorage에 자동으로 저장하는 라이브러리 때문인지, 초기화가 되지 않는다. => 페이지를 로드할 때 null로 만들어 주자

}
</script>

<style scoped>

label {
  font-size: 5rem;
}

.loginForm {
  width: 350px;
  height: 450px;
}

.loginArea {
  margin-top : 5rem;
}

.innerbox {
  height: 100%;
  position: relative;
  /* top: %; */
}

</style>