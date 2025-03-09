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
import { HiMiniXMark } from "react-icons/hi2";

type MainNavProps = {
  items?: Navigation[];
  children?: React.ReactNode;
};
const createNavigation = (items: Navigation[], currentPath: string) => {
  return items.map((item, index) => (
    <Link
      key={index}
      href={item.href || ""}
      className={`flex w-full items-center border-b-4 text-center mb-4 text-lg ${
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
    <>
      <div className="flex w-full justify-between">
        <div className="md:flex">
          <div
            className="my-3 md:hidden"
            onClick={() => {
              setOpen(true);
            }}
          >
            <GiHamburgerMenu />
          </div>

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
      {open ? (
        <div className=" absolute left-0 top-0 z-10 h-2/5 w-screen rounded-b-2xl bg-[#E7BAB5] px-2 py-1 md:hidden">
          <div className="flex justify-end">
            <HiMiniXMark
              className="text-end text-xl"
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="gap-10 mx-3">
            {items && createNavigation(items, currentPath)}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
