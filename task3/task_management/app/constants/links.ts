interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
];

const authLinks: NavLink[] = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

export { navLinks, authLinks };
