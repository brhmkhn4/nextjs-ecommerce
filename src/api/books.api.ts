
const booksData = async () => await fetch("https://simple-books-api.glitch.me/books")
  .then((res => res.json()))
  .then((res)=> res)

export default booksData