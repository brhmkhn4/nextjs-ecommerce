import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface IBook {
    id: number,
    name: string,
    type: string,
    available: boolean
  } 

  const Books = async () => {
  
    let data = await fetch("https://simple-books-api.glitch.me/books");
    let bookData: IBook[] = await data.json();

      
  return(<div className="grid grid-flow-col grid-cols-3 gap-4">
            {bookData.map((book)=>{    
              return(
                <div>
                  <div key={book.id}>
                      <Card>
                      <CardHeader>
                      <CardTitle>{book.name}</CardTitle>
                      <CardDescription>{book.type}</CardDescription>
                      </CardHeader>
                      <CardContent>
                      <p>{book.available}</p>
                      </CardContent>
                      <CardFooter>
                      <p>Card Footer</p>
                      </CardFooter>
                      </Card>
                  </div>
                </div>)
            })}
            </div>
          )
            
             
  }

      


export default Books;