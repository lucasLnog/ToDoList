<template>
    <div class="flex row items-center">
        <div>
            <q-checkbox v-model="task.isDone" size="xs"/>
        </div>
        <span
            v-html="task.name"
            class="name-task-style"
        />
    </div>

</template>

<script>
export default {
    name: 'TodoCard',
    props: {
        _todoData: {
            type: Object,
            require: true
        }
    },
    data: function () {
        return {
            task: this._todoData
        }
    },
}
</script>

<style>
.name-task-style {
    white-space: nowrap;        
    overflow: hidden;           
    text-overflow: ellipsis;    
    max-width: 100px;               
}
</style>