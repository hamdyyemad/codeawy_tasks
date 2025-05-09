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
      className={`flex ${isMobile ? "flex-col gap-4" : "items-center gap-x-8"}`}
    >
      <ul className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-4"}`}>
        <NavLinksArr atTop={atTop} closeMenu={closeMenu} />
      </ul>

      {isMobile && <div className="border-t border-gray-300 my-2" />}

      <ul className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-2"}`}>
        <AuthLinksArr closeMenu={closeMenu} />
      </ul>
    </div>
  );
}

function AuthLinksArr({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <>
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
    </>
  );
}

function NavLinksArr({ closeMenu, atTop }: NavLinksProps) {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={closeMenu}
            className={`text-sm font-medium transition-colors  block px-3 py-2 rounded-md hover:bg-gray-800 ${atTop? "text-gray-300": "text-white"}`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
}
