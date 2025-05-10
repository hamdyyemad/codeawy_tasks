// app/(auth)/register/page.tsx
import Input from "@/ui/Input";
import Checkbox from "@/ui/Checkbox";
import { SocialButtons } from "../SocialButtons";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <h1 className="text-white text-2xl md:text-4xl font-semibold mb-2">
        Create an account
      </h1>
      <p className="text-gray-400 mb-8">
        Already have an account?{" "}
        <Link href="/login" className="text-white hover:underline">
          Log in
        </Link>
      </p>

      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
        </div>
        <Input type="email" placeholder="Email" />
        <Input
          type="password"
          placeholder="Enter your password"
          showPasswordToggle
        />

        <Checkbox
          label={
            <>
              I agree to the{" "}
              <a href="#" className="text-white hover:underline">
                Terms & Conditions
              </a>
            </>
          }
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors"
        >
          Create account
        </button>

        <SocialButtons text="Or register with"/>
      </form>
    </>
  );
}
