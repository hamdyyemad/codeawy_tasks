import Input from '@/ui/Input';
import Link from 'next/link';

export default function VerifyEmail() {
  return (
    <>
      <h1 className="text-white text-2xl md:text-4xl font-semibold mb-2">
        Verify Your Email
      </h1>
      <p className="text-gray-400 mb-8">
        We've sent a 6-digit code to your email address
      </p>

      <form className="space-y-6">
        <div className="flex justify-center gap-4">
          {[...Array(6)].map((_, i) => (
            <Input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-16 text-center text-2xl border-2 border-gray-500 rounded-xl bg-gray-600 text-white transition-transform duration-300 hover:scale-110"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors"
        >
          Verify Email
        </button>

        <div className="text-center text-gray-400">
          Didn't receive a code?{' '}
          <button
            type="button"
            className="text-white hover:underline focus:outline-none"
          >
            Resend code
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <Link href="/login" className="text-white hover:underline">
            Back to login
          </Link>
        </div>
      </form>
    </>
  );
}