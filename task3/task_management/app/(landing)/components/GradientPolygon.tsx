// components/GradientPolygon.tsx
export default function GradientPolygon() {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        style={{
          height: "200px",
          top: "calc(100% - 150px)",
        }}
      >
        <div className="gradient-polygon-shape" />
      </div>
    );
  }
  