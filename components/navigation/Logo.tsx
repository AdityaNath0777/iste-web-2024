"use client";
import Link from "next/link";
import { Icons } from "../Icons";
import logo from "../../public/assets/logo/logo.png";
import Image from "next/image";

export function Logo() {
  return (
    <h1>
      <Link href="/">
        <Image src={logo} width={100} alt="logo"/>
      </Link>
    </h1>
  );
}
