<template>
    <q-layout>
        <q-page-container>
            <q-page>
              <div class="flex justify-between items-center header-style">
                <img
                  src="~assets/OrganizeMe_Logo.png"
                  class="image-logo-style q-mx-md q-my-md"
                />
                <span
                  v-html="'Finalizar sessão'"
                  class="back-label-style text-blue-9 text-weight-bold text-h7 q-mx-md q-my-md"
                  @click="goToMainPage()"
                />
              </div>
              <todo-block />
            </q-page>
        </q-page-container>
    </q-layout>
</template>
  
<script>
  export default {
    name: 'TodoPage',
    components: {
      TodoBlock: () => import('src/components/Todo/TodoBlock.vue'),
    },
    methods: {
      goToMainPage: function () {
        this.$router.push({ name: 'MainPage' });
      },
    },
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

.back-label-style {
  cursor: pointer;
}
</style>