import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="flex items-center min-h-[calc(100vh-64px)] justify-center">
      <Link
        href={"/"}
        className="absolute btn-hover btn flex items-center space-x-2 top-5 left-5"
      >
        <ChevronLeftIcon className="w-5 h-5" />
        <span>Beranda</span>
      </Link>
      <h1 className="font-mono text-3xl font-bold text-neutral-600">
        <span className="text-neutral-900">404</span> - Page Not Found!
      </h1>
    </div>
  );
}
