export default function ErrorMessage({ msg }: { msg?: string }) {
  return <>{msg && <p className="mt-1 text-sm text-red-500">{msg}</p>}</>;
}
