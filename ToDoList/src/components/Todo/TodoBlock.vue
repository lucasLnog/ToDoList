<template>
  <div
    class="flex q-mx-md"
    :class="toDoSectionList.length ? 'column' : ''"
    >
    <div class="flex justify-between">
      <span
        v-html="'Lista de Tarefas'"
        class="text-blue-9 text-weight-bold text-h5 q-mx-md q-my-md"
      />
      <q-btn
        v-if="toDoSectionList.length"
        label="Adicionar seção"
        color="blue-9"
        outline
        no-caps
        class="btn-style q-my-md q-mx-md"
        @click="createSection()"
      />
    </div>
    <div
      v-if="!toDoSectionList.length"
      class="flex justify-center block-style q-mt-md q-mx-md"
    >
      <div class="flex column items-center q-mt-md">
        <q-btn
          label="Adicionar seção"
          color="blue-9"
          outline
          no-caps
          class="btn-style q-my-md"
          @click="createSection()"
        />
        <span
          v-html="'Você ainda não possui seções de ToDo criadas.'"
          class="text-grey-6"
        />
        <span
          v-html="'Clique no botão adicionar seção para criar uma nova seção.'"
          class="text-grey-6"
        />
      </div>
    </div>
    <div v-else>
      <todo-table
        :_todo-list="toDoSectionList"
        @delete-section="deleteSection"
      />
    </div>
    <section-create
      :_is-open="isSectionCreateOpen"
      @save-section="saveTodoSection"
      @close-dialog="closeCreateSectionDialog()"
    />
  </div>
</template>

<script>
export default {
  name: "TodoBlock",
  components: {
    SectionCreate: () => import("src/components/Todo/SectionCreate.vue"),
    TodoTable: () => import("src/components/Todo/TodoTable.vue"),
  },
  data: function () {
    return {
      toDoSectionList: [],
      isSectionCreateOpen: false,
    };
  },
  methods: {
    createSection: function () {
      this.isSectionCreateOpen = true;
    },
    saveTodoSection: function (section) {
      this.isSectionCreateOpen = false;
      section.id = this.toDoSectionList.length + 1;
      this.toDoSectionList.push(section);
    },
    closeCreateSectionDialog: function () {
      this.isSectionCreateOpen = false;
    },
    deleteSection: function (sectionUuid) {
      this.toDoSectionList = this.toDoSectionList.filter(
        (section) => section.uuid !== sectionUuid
      );
    }
  },
};
</script>

<style lang="scss">
.block-style {
  border: 1.5px solid;
  border-radius: 10px;
  border-color: #d8d8d8;
  width: 100%;
  height: 150px;
}

.btn-style {
  border-radius: 8px;
}
</style>
