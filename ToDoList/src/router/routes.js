const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('pages/MainPage.vue'),
  },
  {
    path: '/organizeMe',
    name: 'OrganizeMe',
    component: () => import ('pages/ToDoPage.vue')
  }

]

export default routes
