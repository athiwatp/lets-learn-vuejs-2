new Vue({
  el: '#app',
  template: '#todoTemplate',

  data: {

    newTodo: '',

    todoList: [
      {task: 'Go grocery shopping', completed: false},
      {task: 'Pick up kids from school', completed: false},
      {task: 'Pay phone bill', completed: false}
    ]
  },

  methods: {
    addTodo: function() {
      var todoTask = this.newTodo.trim();
      if (todoTask) {
        this.todoList.push({task: todoTask, complete: false});
        this.newTodo = '';
      }
    },

    removeTodo: function(index) {
      this.todoList.splice(index, 1);
    },

    completeTodo: function(index) {
      this.todoList[index].completed = !this.todoList[index].completed;
    }
  }
});
