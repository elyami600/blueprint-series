// app/layout.jsx
import "../styles/globals.css";

export const metadata = {
  title: "The BluePrint Series",
  description: "Event page for the Blueprint Series assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
