<template>
  <div class="mt-5 signupDiv d-flex flex-column justify-content-center align-items-center">
    <h2 class="mb-5">
    회원가입
    </h2>
    <v-form  @submit.prevent="signup(credentials)" class="signupForm animated-box in py-5 d-flex flex-column justify-content-evenly align-items-center">
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
          <!-- 닉네임 -->
          <v-text-field
            dark
            color="blue"
            v-model="credentials.nickname"
            :rules="nickNameRules"
            :counter="10"
            label="닉네임"
            required
          ></v-text-field>
          <!-- 비밀번호 1 -->
          <v-text-field
            color="green"
            dark
            v-model="credentials.password1"
            :rules="password1Rules"
            label="비밀번호"
            type='password'
            required
          ></v-text-field>
          <!-- 비밀번호 2 -->
          <v-text-field
            dark
            v-model="credentials.password2"
            :rules="password2Rules"
            label="비밀번호 확인"
            type='password'
            required
          ></v-text-field>

          <v-btn class="mb-2"
            type="submit"
            background-color="yellow"
          >
          회원가입
          </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import AccountErrorList from '@/components/AccountErrorList.vue'

export default {
    name: "SignupView",
    // component: { AccountErrorList },
    computed: {
      ...mapGetters(['authError'])
    },

    data() {
        return {
            userNameRules: [
                v => !!v || "아이디를 입력해 주세요!",
            ],
            password1Rules: [
                v => !!v || "비밀번호를 입력해 주세요!",
            ],
            password2Rules: [
                v => !!v || "비밀번호 확인을 입력해 주세요!",
            ],
            nickNameRules: [
                v => !!v || "닉네임을 입력해 주세요!",
                v => v.length <= 10 || "닉네임은 10글자 이하여야 합니다!",
            ],
            credentials: {
                username: "",
                password1: "",
                password2: "",
                nickname: "",
                valid: false,
            }
        };
    },
    methods: {
        ...mapActions(["signup", "set_auth_error_null"])
    },
    // localstorage에 자동으로 저장하는 라이브러리 때문인지, 초기화가 되지 않는다. => 페이지를 로드할 때 null로 만들어 주자
    created() {
      // created 안에 mapActions를 선언하는 것은 불가능하다 => methods 안에 선언 후 실행해 주어야 한다.
      this.set_auth_error_null()
    }
}
</script>

<style scope>

/* * {
  font-size: 2rem;
  color: white;
} */

label {
  font-size: 5rem;
}



.signupForm {
  width: 350px;
  height: 450px;

}



</style>

  <!-- 아래와 같이 쓰면 기본동작 prevent 가능 => preventDefault 기능 => 저거 안 달아주면 axios 요청이 가기 전에 페이지가 새로고침 되어 버린다. -->
  <!-- <form @submit.prevent="signup(credentials)">
    <div>
      <label for="username">아이디: </label>
      <input v-model="credentials.username" type="text" id="username" required>
    </div>
    <div>
      <label for="password1">비밀번호: </label>
      <input v-model="credentials.password1" type="password" id="password1" required>
    </div>
    <div>
      <label for="password2">비밀번호 확인: </label>
      <input v-model="credentials.password2" type="password" id="password2" required>
    </div>
    <div>
      <label for="nickname">닉네임: </label>
      <input v-model="credentials.nickname" type="text" id="nickname" required>
    </div>
    <div>
      <button>signup</button>
    </div>
  </form> -->