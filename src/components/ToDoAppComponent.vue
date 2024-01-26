<template>
  <div class="todo-card card col-12 col-md-6 col-xl-4 p-3">
        <div class="form-floating">
          <input
            type="text"
            id="newtodo"
            class="form-control"
            v-model="newTodoTitle"
            v-on:keyup.enter="saveTodo"
            autofocus
          />
          <label for="newtodo">Új teendő</label>
        </div>
        <div class="todo-card-body mt-3">
          <div v-if="todoList.length < 1">
            <h5 class="text-center mt-3">A ToDo lista üres.</h5>
          </div>
          <div v-else>
            <div class="p-3">
              <h6 class="mb-2 font-bold">Elvégzendő teendők</h6>
              <div class="todo-section">
                <div v-for="todo in todoList" :key="todo.id">
                  <div
                    class="form-check d-flex justify-content-between align-items-center"
                    v-if="!todo.checked"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="todo.checked"
                        value=""
                        :id=todo.id
                      />
                      <label class="form-check-label" :for=todo.id> {{ todo.title }}</label>
                    </div>
                    <button class="btn" @click="removeTodo(todo)">Törlés</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3">
              <h6 class="mb-2 font-bold">Elvégzett teendők</h6>
              <div class="todo-section">
                <div v-for="todo in todoList.slice().reverse()" :key="todo.id">
                  <div
                    class="form-check d-flex justify-content-between align-items-center"
                    v-if="todo.checked"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="todo.checked"
                        value=""
                        :id=todo.id
                      />
                      <label
                        class="form-check-label text-decoration-line-through"
                        :for=todo.id
                      >
                        {{ todo.title }}</label
                      >
                    </div>
                    <button class="btn" @click="removeTodo(todo)">Törlés</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'todo-list',
  data() {
    return {
      newTodoTitle: '',
      newTodo: {},
      todoList: []
    }
  },
  methods: {
    saveTodo() {
      this.newTodoTitle = this.newTodoTitle.trim()
      if (this.newTodoTitle == '') return
      let maxId = Math.max(this.todoList.map((x) => x.id))
      this.todoList.unshift({
        id: isFinite(maxId) ? maxId + 1 : 1,
        title: this.newTodoTitle,
        completed: false
      })
      this.newTodoTitle = ''
    },

    removeTodo(todo) {
      this.todoList.splice(this.todoList.indexOf(todo), 1)
    }
  }
}
</script>
<style scoped>
.todo-card {
  min-height: 550px;
  height: 50vh;
}
.todo-section {
  min-height: 150px;
  height: 15vh;
  overflow-y: auto;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #0275d8;
  border-radius: 10px;
}

.btn {
  border: none;
}
</style>
