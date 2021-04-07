const App = {
    data() {
        return {
            placeholderString: 'Введите новую заметку',
            title: 'Список заметок',
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        }
    }
}


Vue.createApp(App).mount('#app')

