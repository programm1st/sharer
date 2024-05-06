<template>
    <div class="form">
            <div class="form__item">
                <label
                    class="form__label"
                    for="email"
                >
                    Email:
                </label>
                <input
                    v-model="login"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    class="form__input form__input--text"
                >
            </div>
            <div class="form__item">
                <label
                    class="form__label"
                    for="password"
                >
                    Пароль:
                </label>
              <!-- password -  {{password}} -->
                <input
                    v-model="password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Пароль"
                    class="form__input form__input--text"
                >
            </div>

          {{errorMessage}}
          <div
              v-if="isRegistered"
              class="form__row"
          >
            <div class="form__checkbox">
              <input
                  type="checkbox"
                  id="remember"
                  class="form__input form__input--checkbox"
              >
              <label
                for="remember"
                class="form__remember"
              >
                Запомнить меня
              </label>
            </div>
             <router-link class="form__action" to="/registration">Зарегистрироваться</router-link>
          </div>
            <div
                v-if="!isRegistered"
                class="form__row"
            >
                 <router-link class="form__action" to="/login">Войти</router-link>
            </div>
            <button
                v-if="isRegistered"
                @click="onLoginClick"
                class="form__action form-action"
            >
                <span class="form-action__text">Войти</span>
            </button>
            <button
                v-else
                :disabled="isRegistrationDisabled"
                @click="onRegistrationClick"
                type="button"
                class="form__action form-action"
            >
                <span  class="form-action__text">Зарегистрироваться</span>
            </button>
    </div>
</template>

<script lang="ts">
    import { Button } from 'ant-design-vue';
    import {useUserStore} from "~/store/user";
    import {loginUser, registrationUser} from '~/api/fb/api'

    export default {
        components: {
            Button,
        },
        props: {
            isRegistered: {
                type: Boolean,
                default: true,
            },
        },
        setup() {
          const router = useRouter()
          const login = ref('');
          const password = ref('');
          const errorMessage = ref('');
          const {setToken} = useUserStore();
          const onRegistrationClick = async () => {
            const response = await registrationUser(unref(login), unref(password));

            if (response?.error) {
              errorMessage.value = response.error;
            }

            if (response?.status === 'success') {
              await router.push('/login');
            }
          }
          const onLoginClick = async () => {
            const response = await loginUser(unref(login), unref(password));

          }

          const isRegistrationDisabled = computed(() => unref(password).length === 0 || unref(login).length === 0)
          return {
            login,
            password,
            onRegistrationClick,
            onLoginClick,
            isRegistrationDisabled,
            errorMessage,
          }
        }
    }
</script>

<style lang="scss">
  @use "./styles/form/form";
</style>
