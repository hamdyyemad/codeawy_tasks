interface Props {
  children: React.ReactNode;
}
export default function ButtonMd({ children }: Props) {
  return (
    <button
      type="button"
      className="text-white bg-black hover:bg-[#000708]/90 transform transition-all duration-200 hover:scale-105 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center flex flex-1 justify-center items-center mb-2"
    >
      {children}
    </button>
  );
}
