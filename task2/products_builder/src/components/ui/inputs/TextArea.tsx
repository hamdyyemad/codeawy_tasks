interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}
const staticStyles =
  "block p-3.5 w-full text-sm text-gray-100 bg-black/20 rounded-lg border";

export default function TextArea({ hasError = false, ...rest }: Props) {
  return (
    <textarea
      className={`${staticStyles} ${
        hasError ? "border-red-500" : "border-gray-900/40"
      }`}
      {...rest}
    />
  );
}
