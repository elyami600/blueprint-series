// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto py-24 md:py-32 flex flex-col items-center">
        {/* Big title */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black text-center">
          The BluePrint Series
        </h2>

        {/* Small pink underline */}
        <div className="mt-8 h-[2px] w-10 bg-pink-500" />

        {/* Copyright line */}
        <p className="mt-6 text-xs md:text-sm tracking-[0.2em] uppercase text-gray-700 text-center">
          © 2025 The Gradient Group, LLC
        </p>
      </div>
    </footer>
  );
}
