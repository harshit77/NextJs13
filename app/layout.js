import './globals.css';
import "remixicon/fonts/remixicon.css";
import Header from "./Header"

export const metadata = {
  title: "GIA Stocks",
  description: "GIA Stocks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-300"><Header/>{children}</body>
    </html>
  );
}
