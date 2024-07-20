import Link from "next/link";
import { DarkThemeToggle } from "flowbite-react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";

export default function MyNavbar() {
  return (
    <Navbar fluid>
      <NavbarBrand as={Link} href="/">
        <Image
          src="/images/prox4.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          height={100}
          width={100}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          href="/"
          active
          style={{
            margin: 10,
          }}
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/"
          style={{
            margin: 10,
          }}
        >
          About
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/"
          style={{
            margin: 10,
          }}
        >
          Services
        </NavbarLink>
        <NavbarLink
          href="#"
          style={{
            margin: 10,
          }}
        >
          Pricing
        </NavbarLink>
        <NavbarLink
          href="#"
          style={{
            margin: 10,
          }}
        >
          Contact
        </NavbarLink>
        <NavbarLink href="#" className="top-0">
          <DarkThemeToggle className="" />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
