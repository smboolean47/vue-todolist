const app = new Vue({
	el: '#root',
	data: {
		todos: [
			{
				text: 'Fare la spesa',
				done: false
			},
			{
				text: 'Portare fuori il cane',
				done: true
			},
			{
				text: 'Cucinare il pranzo',
				done: false
			}
		],
		inputValue: ''
	},
	methods: {
		addTodo: function() {
			// se non è vuoto aggiungo l'elemento nell'array
			if( this.inputValue !== "" ) {
				const todoObj = {
					text: this.inputValue,
					done: false
				};
				this.todos.push(todoObj);
				this.inputValue = "";
			}
		},
		removeTodo: function(index) {
			this.todos.splice(index, 1);
		},
		toggleDone: function(index) {
			if(this.todos[index].done == true) {
				this.todos[index].done = false;
			} else {
				this.todos[index].done = true;
			}
		}
	}
});