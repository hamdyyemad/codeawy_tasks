import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"

// app/(landing)/layout.tsx
export default function LandingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main className="pt-24">{children}</main>
        <Footer />
      </>
    )
  }