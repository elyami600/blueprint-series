// components/ErrorMessage.jsx
export default function ErrorMessage({ message }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="text-center max-w-md mx-auto px-4"
        role="alert"
        aria-live="assertive"
      >
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
          <p className="font-bold text-lg mb-2">Error</p>
          <p>{message || "Failed to load event data. Please try again."}</p>
        </div>
      </div>
    </div>
  );
}
