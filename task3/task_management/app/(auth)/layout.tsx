import { ReactNode } from "react";
import Image from 'next/image';
import Link from 'next/link';

const placeholderBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDAwIj48ZmlsdGVyIGlkPSJibHVyIiB4PSIwIiB5PSIwIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWx0ZXI9InVybCgjYmx1cikiIG9wYWNpdHk9IjAuNSIgZmlsbD0iIzVjMDhiYSIvPjwvc3ZnPg==';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-[#1c1c24] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] bg-[#13131a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Section - Shared across auth pages */}
        <div className="w-full md:w-1/2 relative">
          <Link href="/" className="absolute top-6 left-6 text-white text-2xl font-bold z-10">
            Taskify
          </Link>
          <Link
            href="/"
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors z-10"
          >
            Back to website →
          </Link>
          <div className="relative h-full min-h-[400px] md:min-h-[600px]">
            <Image
              src="/auth/auth-image.webp"
              alt="Desert landscape"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={placeholderBlurDataURL}
              priority
            />
            <div className="absolute inset-0 bg-purple-900/30"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                Capturing Moments,
              </h2>
              <h2 className="text-2xl md:text-4xl font-semibold">
                Creating Memories
              </h2>
              <div className="flex gap-2 mt-6">
                <div className="w-4 h-1 bg-white/30 rounded"></div>
                <div className="w-4 h-1 bg-white/30 rounded"></div>
                <div className="w-4 h-1 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Content passed as children */}
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <div className="max-w-md mx-auto">
            {children}
          </div>
        </div>
      </div>
    </main>
  );

  // <main className="bg-[#1c1c24] min-h-screen flex items-center justify-center p-4">
  //     {children}
  //   </main>
}
