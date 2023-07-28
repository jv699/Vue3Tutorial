const app = Vue.createApp({
    //this object is the 'root component'. data and function that react
    // template: '<h2>I am a template</h2>' // this will be injected into the browser               
    data() { //this is shorthand for a function in an object
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        };
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        }
    }
});

app.mount('#app');