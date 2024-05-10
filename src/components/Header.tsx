"use client";
import { ModeToggle } from "./ui/ModeToggle";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  interface IbooksData {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }
  [];

  let booksData: IbooksData;

  return (
    <div className="bg-blue-200 z-50 flex mx-auto h-[200px] border-b border-blue-100 dark:border-gray-700 px-16 py-4 mb-8 justify-between gap-[50px] items-start">
      <div className="flex justify-between gap-3">
        <Link
          className="bg-blue-500 text-white px-[40px] py-[5px] rounded hover:bg-blue-400 hover:text-black "
          href="/"
        >
          Home
        </Link>

        <Link
          className="bg-blue-500 text-white px-[40px] py-[5px] roundedhover:bg-blue-400 hover:text-black "
          href="/books"
        >
          Books
        </Link>

        <Link
          href="/login"
          className="bg-blue-500 text-white px-[40px] py-[5px] rounded hover:bg-blue-400 hover:text-black "
        >
          Login
        </Link>
        <Link
          href="/dashboard"
          className="bg-blue-500 text-white px-[40px] py-[5px] rounded hover:bg-blue-400 hover:text-black "
        >
          Dashboard
        </Link>
        <Link
          href="/order"
          className="bg-blue-500 text-white px-[40px] py-[5px] rounded hover:bg-blue-400 hover:text-black "
        >
          Order
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
