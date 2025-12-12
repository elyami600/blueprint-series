// components/Loading.jsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="text-center"
        role="status"
        aria-live="polite"
      >
        <div
          aria-hidden="true"
          className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"
        />
        <p className="text-gray-600">Loading event…</p>
      </div>
    </div>
  );
}
