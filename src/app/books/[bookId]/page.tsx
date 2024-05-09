type bookData = 
  {
    id: number,
    name: string,
    author: string,
    isbn: string,
    type: string,
    price: number,
    available: boolean,
  }
  
      async function dataFetch (id: number) {
      let res = await fetch(`https://simple-books-api.glitch.me/books/${id}`)
      let data = res.json()
      return data
      }
    

type Params = {
  params: {
  bookId: string
}
}

export default async function Book({params}:Params) {
  const book_id = parseInt(params.bookId)
  const data = await dataFetch(book_id)
  return (
    <div key={data.id}>
     <h1>{data.name}</h1>         
    </div>
  )
}

