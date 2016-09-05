new Vue({
  el: '#app',
  template: '#todoTemplate',

  data: {

    newTodo: {task: '', completed: false},

    todoList: [
      {task: 'Go grocery shopping', completed: false},
      {task: 'Pick up kids from school', completed: false},
      {task: 'Pay phone bill', completed: false},
      {task: 'Wash car', completed: false},
      {task: 'Pay electric bill', completed: false},
    ]
  },

  methods: {
    addTodo: function(newTodo) {
      if (newTodo.task) {
        this.todoList.push(newTodo);
        this.newTodo = {task: '', completed: false};
      }
    },

    removeTodo: function(todo) {
      this.todoList.$remove(todo);
    },

    completeTodo: function(todo) {
      todo.completed = !todo.completed;
    }
  }
});
