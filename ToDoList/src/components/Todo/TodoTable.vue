<template>
  <div :class="todoList.length > 5 ? 'horizontal-scroll-container' : 'horizontal-scroll-container-default'" class="q-pb-md">
    <div v-for="section in todoList" :key="section.uuid">
        <div class="section-block-style q-mr-lg">
          <div class="flex justify-between items-center q-mx-sm q-my-sm">
            <span
              v-if="!section.isEditing"
              v-html="section.name"
              class="name-section-style text-blue-9 text-weight-bold fs-16"
            />
            <q-input
              v-else
              v-model="section.name"
              @keyup.enter="finishEditing(section)"
              @blur="finishEditing(section)"
              label="Editar nome da seção"
              autofocus
            />
            <div v-if="!section.isEditing" class="q-ml-md">
              <q-icon name="drive_file_rename_outline" size="sm" color="blue-9" @click="editSection(section)" class="cursor-pointer"/>
              <q-icon name="add_box" size="sm" color="blue-9" @click="setAddTask(section)" class="cursor-pointer"/>
              <q-icon name="delete" size="sm" color="blue-9" @click="deleteSection(section.uuid)" class="cursor-pointer"/>
            </div>
          </div>
          <q-separator 
            class="q-mx-sm"
            color="blue-9"
          />
          <div v-if="section.isAdding" class="add-name-style q-mt-sm">
            <q-input v-model="taskName" label="Nova tarefa" @keyup.enter="addTask(section)" color="blue-9" dense outlined class="q-mx-sm">
              <template v-slot:prepend>
                <q-icon name="add" color="blue-9"/>
              </template>
            </q-input>
          </div>
          <div class="vertical-scroll-container">
            <q-virtual-scroll
              :items="section.children"
              virtual-scroll-vertical
              class="q-pa-sm"
            >
              <template v-slot="{ item: task }">
                <todo-card :_todo-data="task"/>
              </template>
            </q-virtual-scroll>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoTable",
  props: {
    _todoList: {
      type: Array,
      require: true,
    },
  },
  components: {
    TodoCard: () => import("src/components/Todo/TodoCard.vue"),
  },
  data: function () {
    return {
      taskDefault: {
        name: "",
        parentId: null,
        level: 1,
        isDone: false,
        children: [],
      },
      taskName: "",
    };
  },
  computed: {
    todoList: function () {
      return this._todoList;
    }
  },
  methods: {
    editSection: function (section) {
      section.isEditing = true;
    },
    finishEditing: function (section) {
      section.isEditing = false;
    },
    deleteSection: function (sectionUuid) {
      this.$emit("delete-section", sectionUuid);
    },
    setAddTask: function (section) {
      section.isAdding = true;
    },
    addTask: function (section) {
      let task = {...this.taskDefault};
      task.name = this.taskName;
      task.parentId = section.id;
      section.children.push(task);
      this.taskName = "";
      section.isAdding = false;
    }
  }
};
</script>

<style scoped>
.horizontal-scroll-container {
  display: flex;
  overflow-x: scroll;
  max-width: 1300px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.horizontal-scroll-container-default {
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.fs-16 {
  font-size: 16px;
}

.section-block-style {
  height: 400px;
  width: 210px;
  border: 1.5px dashed;
  border-radius: 14px;
  border-color: #1565c0;
}

.name-section-style {
    white-space: nowrap;        
    overflow: hidden;           
    text-overflow: ellipsis;    
    max-width: 100px;               
}

.add-name-style {
  max-width: 210px;
  max-height: 30px;
}

.vertical-scroll-container {
  display: block !important;
  max-height: 250px;
  overflow-y: auto;
}
</style>
