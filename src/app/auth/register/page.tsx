import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="min-h-screen w-full relative">
      <Link
        href={"/"}
        className="absolute btn-hover btn flex items-center space-x-2 top-5 left-5"
      >
        <ChevronLeftIcon className="w-5 h-5" />
        <span>Beranda</span>
      </Link>
      <div className="h-screen flex items-center justify-center">
        <h1>halaman Register</h1>
      </div>
    </div>
  );
}

export default page;
