import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const BooksCard = async (props: IBook) => {
  return (
          <Link href={`/books/${props.id}`}>
        <Card className="rounded-[25px] bg-blue-200 shadow-sm hover:shadow-md border-opacity-40 border-green-500  hover:bg-blue-300 mx-[40px]">
          <CardHeader>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardDescription>Type: {props.type}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Available: {props.available}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </Link>
   
  );
};

export default BooksCard;