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
    <footer className="bg-[#E7BAB5] px-6 py-8 md:px-20 md:py-16">
      <div className="md:grid md:grid-cols-2 md:gap-14">
        <div className="col-span-1 text-center">
          <p className="text-2xl font-extrabold md:text-4xl">GET IN TOUCH</p>
          <p className="mt-4 text-[#505050] md:text-xl ">
            Connect with developers from everywhere around the world. Make
            strong relationship with other members , boost your network and
            learn from each other.
          </p>
          <div className="mt-5 flex justify-center gap-5">
            <Link
              href={"https://linktr.ee/bvpiste"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={contact} alt="contact" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/bvp-iste-%F3%A0%80%A0-89529a218/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={lnkdin} alt="contact" />
            </Link>
            <Link
              href={"https://www.instagram.com/bvpiste/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instgrm} alt="contact" />
            </Link>
            <Link
              href={"https://chat.whatsapp.com/JfvP587K5goAaepcXk83rD"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={whtspp} alt="contact" />
            </Link>
          </div>
        </div>

        <div className="col-span-1 mt-8 text-center md:mt-0">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="logo" width="150" />
          </div>
          <p className="mt-4 text-[#505050] md:text-2xl ">
            {`Bharati Vidyapeeth's College of Engineering A-4, Paschim Vihar, New
            Delhi - 110063`}
          </p>
        </div>
      </div>
    </footer>
  );
}
