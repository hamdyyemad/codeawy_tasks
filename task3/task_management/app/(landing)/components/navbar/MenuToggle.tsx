import CloseIcon from "@/ui/svg/CloseIcon";
import MenuIcon from "@/ui/svg/MenuIcon";

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <button
      onClick={toggle}
      className={`md:hidden p-2 rounded-md focus:outline-none text-white cursor-pointer`}
      aria-label="Toggle menu"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
