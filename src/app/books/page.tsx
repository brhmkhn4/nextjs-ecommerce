import React from 'react'

import BooksCard from '@/components/booksCard'
import getData from "../../lib/dataFetching"

interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

async function BookPage() {

  const bookData: IBook[] = await getData("https://simple-books-api.glitch.me/books")
  console.log(bookData)

  return (
    <div className="grid grid-cols-3 gap-5 p-5 justify-center items-center">
      {bookData.map((book) => {
        return(
      < BooksCard 
      id={book.id}
      name={book.name}
      type={book.type}
      available={book.available}
      />)
    }
  )}    
    </div>
  )
}

export default BookPage;