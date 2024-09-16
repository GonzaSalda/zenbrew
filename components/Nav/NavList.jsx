import Link from "next/link";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const NavList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase ">
      {links.map((link, index) => {
        return (
          <Link className="flex overflow-hidden hover:text-white transition-all" href={link.href} key={index}>
            {link.name}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;
