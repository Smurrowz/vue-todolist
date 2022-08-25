const todos = [{
  text: 'Portare il cane a spasso',
  done: true,
},
{
  text: 'Andare a comprare gli ingredienti per il curry',
  done: false,
},
{
  text: 'Andare a fare il pieno di benzina',
  done: true,
},
{
  text: 'prepararmi per andare al cinema con i miei amici',
  done: false,
},

]
const done = true

const alreadyDone = []
const app = new Vue({
  el: '#root',
  data: {
    todos: todos,
    classiTodos: 'todo',
    newTodo: '',
    alreadyDone,
  },
  methods: {
    toggleDone(todo) {
      todo.done = !todo.done
    },
    addTodo() {
      console.log('aggiungi todo')
      this.newTodo = this.newTodo.trim()
      if (this.newTodo !== '') {
        this.todos.push({
          text: this.newTodo,
          done: false,
        })

      }
      this.newTodo = ''
    },
    onEnter: function () {
      this.addTodo()
    },
  },
 
})
