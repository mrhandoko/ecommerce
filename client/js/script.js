var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    books: []
  },
  methods: {
    getBooks: () => {
      axios.get('http://localhost:3000/getBooks')
        .then((response) => {
          console.log(response.data)
          app.books = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
app.getBooks()
