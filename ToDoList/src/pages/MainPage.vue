<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="header-style">
          <img
            src="~assets/OrganizeMe_Logo.png"
            class="image-logo-style q-mx-md q-my-md"
          />
        </div>
        <div class="q-px-xl q-pt-xl">
          <div class="flex justify-between">
            <div class="flex column justify-center">
              <div class="flex column items-center justify-center">
                <span
                  v-html="'Organize suas tarefas com facilidade'"
                  class="text-blue-9 text-weight-bold text-h4 q-mx-sm q-my-sm"  
                />
                <span
                  v-html="'Pronto para ser mais produtivo?'"
                  class="text-blue-9 text-weight-bold text-h4 q-mx-sm q-my-sm"  
                />
              </div>
              <div class="flex items-center justify-center q-my-md q-pt-sm">
                <q-btn
                  color="blue-9"
                  label="Comece a se organizar agora"
                  class="btn-style"
                  @click="goToAppPage()"
                />
              </div>
            </div>
            <div class="flex items-center">
              <img
                src="~/assets/Example_Image.png"
                class="image-example-style q-mx-lg q-my-md"
              />
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
  
  <script>
  export default {
    name: 'MainPage',
    data: function () {
      return {
      }
    },
    methods: {
      goToAppPage: function () {
        this.$router.push({ name: 'OrganizeMe', })
      }
    }
  }
  </script>

<style>
.image-logo-style {
  width: 160px;
  height: 45px;
}

.header-style {
  width: 100%;
  height: 75px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.image-example-style {
  width: 500px;
  height: 400px;
}

.btn-style {
  border-radius: 8px;
}
</style>