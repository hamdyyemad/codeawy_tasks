interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button" | "reset";
}
export function ButtonMd({ children, onClick, type = "button" }: Props) {
  return (
    <button
      className="text-white bg-black hover:bg-[#000708]/90 transform transition-all duration-200 hover:scale-105 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center flex flex-1 justify-center items-center mb-2"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export function ButtonSM({ children, onClick }: Props) {
  return (
    <button
      type="button"
      className="text-white bg-black hover:bg-[#000708]/90 transform transition-all duration-200 hover:scale-105 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center justify-center items-center  me-2 mb-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
