import Link from "next/link";
import { Icons } from "../Icons";
import { FOOTER } from "@/config/footer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import contact from "../../public/assets/contact.png";
import instgrm from "../../public/assets/instgrm.png";
import whtspp from "../../public/assets/whtspp.png";
import lnkdin from "../../public/assets/lnkdin.png";
import logo from "../../public/assets/logo/logo.png";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="bg-[#E7BAB5] px-20 py-16">
      <div className="grid grid-cols-2 gap-14">
        <div className="col-span-1 text-center">
          <p className="text-4xl font-extrabold">GET IN TOUCH</p>
          <p className="mt-4 text-xl text-[#505050] ">
            Connect with developers from everywhere around the world. Make
            strong relationship with other members , boost your network and
            learn from each other.
          </p>
          <div className="flex gap-5">
            <Link href={""}>
              <Image src={contact} alt="contact" />
            </Link>
            <Link href={""}>
              <Image src={lnkdin} alt="contact" />
            </Link>
            <Link href={""}>
              <Image src={instgrm} alt="contact" />
            </Link>
            <Link href={""}>
              <Image src={whtspp} alt="contact" />
            </Link>
          </div>
        </div>
        <div className="col-span-1 text-center">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="logo" width="150" />
          </div>
          <p className="mt-4 text-2xl text-[#505050] ">
            {`Bharati Vidyapeeth's College of Engineering A-4, Paschim Vihar, New
            Delhi - 110063`}
          </p>
        </div>
      </div>
    </footer>
  );
}
