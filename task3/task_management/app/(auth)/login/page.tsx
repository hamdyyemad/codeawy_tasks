// app/(auth)/register/page.tsx
import Input from "@/ui/Input";
import Checkbox from "@/ui/Checkbox";
import { SocialButtons } from "../SocialButtons";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1 className="text-white text-2xl md:text-4xl font-semibold mb-2">
        Sign in
      </h1>
      <p className="text-gray-400 mb-8">
        Don't have an account?{" "}
        <Link href="/register" className="text-white hover:underline">
          Register
        </Link>
      </p>

      <form className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input
          type="password"
          placeholder="Enter your password"
          showPasswordToggle
        />

        <Checkbox label={<>Remember me</>} />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors"
        >
          Log in
        </button>

        <SocialButtons text="Or login with"/>
      </form>
    </>
  );
}
