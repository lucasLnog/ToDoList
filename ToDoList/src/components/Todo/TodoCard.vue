<template>
  <div class="flex row items-center">
    <div>
      <q-checkbox v-model="task.isDone" size="xs" />
    </div>
    <div class="name-task-style">
      <span
        v-html="task.name"
        class="name-task-style"
        :class="task.isDone ? 'strikethrough' : ''"
      />
      <q-tooltip v-if="task.name.length > 18">{{ task.name }}</q-tooltip>
    </div>
    <q-icon
      name="delete"
      size="xs"
      color="blue-9"
      class="cursor-pointer q-ml-sm"
      @click="deleteTask(task)"
    />
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  props: {
    _todoData: {
      type: Object,
      require: true,
    },
  },
  data: function () {
    return {};
  },
  computed: {
    task: function () {
      return this._todoData;
    },
  },
  methods: {
    deleteTask: function (task) {
      this.$emit("delete-task", task);
    },
  },
};
</script>

<style>
.name-task-style {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;
}

.strikethrough {
  text-decoration: line-through;
}
</style>
