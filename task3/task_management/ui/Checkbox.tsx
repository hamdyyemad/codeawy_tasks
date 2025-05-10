interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: React.ReactNode;
  }
  
  export default function Checkbox({ label, ...props }: CheckboxProps) {
    return (
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="rounded bg-[#1c1c24] border-gray-600 text-purple-600 focus:ring-purple-600"
          {...props}
        />
        <span className="text-gray-400">{label}</span>
      </label>
    );
  }