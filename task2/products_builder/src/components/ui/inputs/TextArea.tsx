export default function TextArea(
  rest: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      className="block p-3.5 w-full text-sm text-gray-100 bg-black/20 rounded-lg border border-gray-900/40"
      {...rest}
    />
  );
}
