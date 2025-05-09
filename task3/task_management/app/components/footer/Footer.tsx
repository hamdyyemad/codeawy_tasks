import Logo from "../Navbar/Logo";
import FooterLinks from "./FooterLinks";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <Logo />
                  </div>
                </a>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-200">
                Your Ultimate Task Management Solution for Enhanced Productivity and Efficiency
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
              <FooterLinks range='0,2'/>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <FooterLinks range='2'/>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-md text-white mb-4 md:mb-0">
                © 2025 Taskify. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <SocialMedia/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}