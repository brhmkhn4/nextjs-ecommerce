"use client"
import { ModeToggle } from "./ui/ModeToggle"
import  Link  from "next/link"
import bookData from "@/api/books.api"
import { Button } from "./ui/button"

export default function Header() {

  interface IbooksData  {
    id: number,
    name: string,
    type: string,
    available: boolean
  } []

  let booksData: IbooksData;
  
    return (
    <div className="z-50 flex mx-auto h-[200px] border-b border-gray-00 dark: border-gray-700 px-16 py-4 mb-8 justify-end gap-[50px] items-start">      
        <Button className="bg-blue-500 text-white px-[40px] py-[5px] rounded hover:bg-blue-300 " onClick={async ()=> {
          bookData()
           .then((data) => data = booksData)
          }}>Books</Button>
          
        <Link href="/login" className="bg-blue-500 text-white px-[40px] py-[5px] rounded hover:bg-blue-300 " >Login</Link>
        < ModeToggle />
      </div>
  )
}
