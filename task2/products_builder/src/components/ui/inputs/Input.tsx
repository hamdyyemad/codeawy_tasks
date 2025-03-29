// interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

// export default function Input({...rest}: Props){

//     return <input className="bg-black/20 border text-gray-100 text-sm rounded-lg w-full p-2.5 border-gray-900/40" {...rest}/>;
// }

export default function Input(
  rest: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      className="bg-black/20 border text-gray-100 text-sm rounded-lg w-full p-2.5 border-gray-900/40"
      {...rest}
    />
  );
}
