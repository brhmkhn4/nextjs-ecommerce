"use client"

import {useState } from "react";
import { Button} from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"


export default function Click() {
    const [click, setClick] = useState(0);
    return (
      <>
      <div className= "flex justify-start gap-[20px]">
        <button onClick={()=> {
          setClick(click + 1)             
        }}>Click Me</button>

        <button onClick={
          ()=> (click === 0 ? setClick(0) : setClick(click -1))
          }>
          Go Back</button>
        </div>          
      <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Click Counter</AlertTitle>
          <AlertDescription>
            You clicked {click} times.
          </AlertDescription>
        </Alert>
        </>
    );
  }
