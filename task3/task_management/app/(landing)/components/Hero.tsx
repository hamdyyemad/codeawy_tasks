import { Button } from "@/ui/Button";
import GradientPolygon from "./GradientPolygon";
import RightArrowIcon from "@/ui/svg/RightArrowIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-3xl font-medium tracking-tight leading-none md:text-4xl lg:text-5xl text-white">
          The best platform for cross-functional work.
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
          Want better results in your organization? Taskify helps teams get
          clarity, achieve greater impact, and scale to meet company goals.
        </p>
        <div className="relative z-10 flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"
          >
            Learn more
          </a>
          <Button variant="outline" size="md" className="gap-x-2">
            Get Started
            <span className="hidden md:flex"><RightArrowIcon /></span>
          </Button>
        </div>

        {/* Adjusted Polygon */}
        <GradientPolygon />
      </div>
    </section>
  );
}
