import { XIcon } from "../svg_icons/XIcon";

interface DrawerProps {
  onClose: () => void;
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
}

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
}: DrawerProps) {
  // Initialize formData state with keys from fields

  return (
    <div
      id="drawer-left-example"
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-gradient-to-b from-black to-gray-950/60 w-80  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-labelledby="drawer-left-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-base font-semibold text-gray-300 uppercase"
      >
        {title}
      </h5>

      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 cursor-pointer bg-transparent hover:bg-gray-100/10 hover:text-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex justify-center items-center "
      >
        <XIcon />
      </button>
      {children}
    </div>
  );
}
