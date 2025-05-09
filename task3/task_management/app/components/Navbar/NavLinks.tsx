import { Button } from "@/ui/Button";
import { navLinks, authLinks } from "@/app/constants/links";

interface NavLinksProps {
  atTop: boolean;
  isMobile?: boolean;
  closeMenu?: () => void;
}

export default function NavLinks({
  atTop,
  isMobile = false,
  closeMenu,
}: NavLinksProps) {
  return (
    <div
      className={`flex ${
        isMobile ? "flex-col gap-4" : "items-center gap-x-8"
      }`}
    >
      <ul className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-4"}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={closeMenu}
              className={`text-sm font-medium transition-colors ${
                isMobile
                  ? `block px-3 py-2 rounded-md text-base ${
                      atTop
                        ? "text-black hover:bg-gray-100"
                        : "text-white hover:bg-gray-800"
                    }`
                  : atTop
                  ? "text-gray-300 hover:border-b hover:border-gray-700"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {isMobile && <div className="border-t border-gray-300 my-2" />}

      <ul className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-2"}`}>
        {authLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={closeMenu}>
              {link.name === "Login" ? (
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              ) : (
                <Button variant="primary" size="sm" className="w-full">
                  Register
                </Button>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
