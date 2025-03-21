interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button" | "reset";
  extraClasses?: string;
  width?: "w-full" | "w-fit";
}

const commanClassName =
  "text-white bg-black hover:bg-[#000708]/90 transform transition-all duration-200 hover:scale-105 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2";

export default function Button({
  children,
  onClick,
  type = "button",
  extraClasses = "",
  width = "w-full",
}: Props) {
  return (
    <button
      className={`${commanClassName} ${width} ${extraClasses}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
