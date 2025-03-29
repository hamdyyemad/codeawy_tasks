interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
const staticStyles =
  "bg-black/20 border text-gray-100 text-sm rounded-lg w-full p-2.5";
export default function Input({ hasError = false, ...rest }: Props) {
  return (
    <input
      className={`${staticStyles} ${
        hasError ? "border-red-500" : "border-gray-900/40"
      }`}
      {...rest}
    />
  );
}
