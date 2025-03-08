"use client";
import Link from "next/link";
import { Navigation } from "@/types";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Divide } from "lucide-react";

type MainNavProps = {
  items?: Navigation[];
  children?: React.ReactNode;
};
const createNavigation = (items: Navigation[], currentPath: string) => {
  return items.map((item, index) => (
    <Link
      key={index}
      href={item.href || ""}
      className={`flex items-center border-b-4 sm:text-sm md:text-lg ${
        currentPath === item.href ? "border-black" : "border-white"
      }`}
    >
      {item.title}
    </Link>
  ));
};

export function MainNav({ items }: MainNavProps) {
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full justify-between">
      <div className="md:flex">
        <div
          className="my-3 md:hidden"
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
        >
          <GiHamburgerMenu />
        </div>

          { open?<div></div>:""}

        <Logo />

        <nav className="hidden gap-10 md:flex md:px-10">
          {items && createNavigation(items, currentPath)}
        </nav>
      </div>
      <nav>
        <Link
          href="/"
          className={cn(
            buttonVariants(),
            "mt-16 border-2 border-solid border-border md:mt-5",
          )}
        >
          Register Now
        </Link>
      </nav>
    </div>
  );
}
