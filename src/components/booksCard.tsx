import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link';

  interface IBook {
    id: number,
    name: string,
    type: string,
    available: boolean
  } 

  const BooksCard = async () => {
  
    let data = await fetch("https://simple-books-api.glitch.me/books");
    let bookData: IBook[] = await data.json();

        
  return(<div className="grid grid-cols-3 gap-5 p-5 justify-center items-center">
            {bookData.map((book)=>{    
              let stock: string = "";

              if (book.available === true) {
                stock = "Yes"
              } else { stock = "Not Available"}
              return(
                <div>
                  <Link href={`/books/${book.id}`}>
                  <div className="bg-blue-200 shadow-sm hover:shadow-md border-opacity-40 border-green-500  hover:bg-blue-300 mx-[40px] " key={book.id} >
                    
                      <Card>
                      <CardHeader>
                      <CardTitle>Name: {book.name}</CardTitle>
                      <CardDescription>Type: {book.type}</CardDescription>
                      </CardHeader>
                      <CardContent>
                      <p>Available: {stock}</p>
                      </CardContent>
                      <CardFooter>
                      <p>Card Footer</p>
                      </CardFooter>
                      </Card>
                  </div>
                  </Link>
                </div>)
            })}
            </div>
          )
      };
 

export default BooksCard;