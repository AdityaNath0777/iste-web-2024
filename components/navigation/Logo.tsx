"use client";
import Link from "next/link";
import { Icons } from "../Icons";

export function Logo() {
  return (
    <h1>
      <Link href="/">
        <span className="sr-only">BVP-ISTE</span>
        <Icons.logo />
      </Link>
    </h1>
  );
}
