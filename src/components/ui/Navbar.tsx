import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="h-16 border-b px-5 shadow-md bg-neutral-900 text-white">
      <nav className="w-full flex justify-between h-full">
        <ul className="flex items-center justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center space-x-5">
          <li>
            <Link href="/auth/login">Sign In</Link>
          </li>
          <li>
            <Link href="/auth/register">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
