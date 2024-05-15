"use client";
import { ModeToggle } from "./ui/ModeToggle";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
 

  return (
   <>
   <header className="header">
        <ModeToggle />
   </header>
  </>
  );
}
